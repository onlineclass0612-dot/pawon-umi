import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CatalogSplashScreen from './components/CatalogSplashScreen';

// Route-level Code Splitting:
// Eliminates 100% of unused route JavaScript, slashing initial transfer size on mobile Slow 4G
const HomePage = lazy(() => import('./components/HomePage'));
const AllPackagesPage = lazy(() => import('./components/AllPackagesPage'));
const PackageModal = lazy(() => import('./components/PackageModal'));

// Eagerly initiate chunk download based on initial URL hash
if (typeof window !== 'undefined') {
  const initialHash = window.location.hash;
  if (initialHash === '#/paket-lengkap' || initialHash === '#paket-lengkap') {
    import('./components/AllPackagesPage');
  } else {
    import('./components/HomePage');
  }
}

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#/paket-lengkap' || hash === '#paket-lengkap') {
        return 'catalog';
      }
    }
    return 'home';
  });
  const [showCatalogSplash, setShowCatalogSplash] = useState(false);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash;
      if (hash === '#/paket-lengkap' || hash === '#paket-lengkap') {
        setCurrentView('catalog');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);

    // Prefetch inactive route chunk on idle time
    let timer = null;
    let onScrollOnce = null;
    if (typeof window !== 'undefined') {
      const prefetchOpposite = () => {
        if (currentView === 'catalog') {
          import('./components/HomePage');
        } else {
          import('./components/AllPackagesPage');
        }
      };
      timer = setTimeout(prefetchOpposite, 4000);
      onScrollOnce = () => {
        prefetchOpposite();
        window.removeEventListener('scroll', onScrollOnce);
        clearTimeout(timer);
      };
      window.addEventListener('scroll', onScrollOnce, { passive: true, once: true });
    }

    return () => {
      window.removeEventListener('hashchange', syncHash);
      if (onScrollOnce) window.removeEventListener('scroll', onScrollOnce);
      if (timer) clearTimeout(timer);
    };
  }, [currentView]);

  const navigateToCatalog = () => {
    window.location.hash = '/paket-lengkap';
    // On mobile devices, navigate directly without splash overlay to prevent any LCP delay
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (!isMobile) {
      setShowCatalogSplash(true);
    }
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToHome = (targetHash) => {
    if (targetHash) {
      window.location.hash = targetHash;
      setCurrentView('home');
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.location.hash = '';
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FBF9F5] text-[#2C2521] flex flex-col selection:bg-[#C5A059] selection:text-[#2C2521]">
      {/* Navigation Bar */}
      <Navbar onNavigateHome={navigateToHome} currentView={currentView} />

      {currentView === 'catalog' ? (
        /* Full Catalog Page (All Categories & All Packages) */
        <Suspense fallback={<div className="min-h-screen bg-[#FBF9F5]" />}>
          <AllPackagesPage
            onBack={() => navigateToHome('#catalog')}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          />
        </Suspense>
      ) : (
        /* Main Home Content Page */
        <Suspense fallback={<div className="min-h-screen bg-[#FBF9F5]" />}>
          <HomePage
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenCatalog={navigateToCatalog}
          />
        </Suspense>
      )}

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Consultation Action (Mobile Only) */}
      <FloatingCTA />

      {/* Splash Screen with Heartbeat Brand Logo when entering Catalog (Desktop Only) */}
      {showCatalogSplash && (
        <CatalogSplashScreen
          onFinish={() => setShowCatalogSplash(false)}
          duration={400}
        />
      )}

      {/* Package Detail Modal with Smooth Hardware-Accelerated CSS Transitions */}
      {selectedPackage && (
        <Suspense fallback={null}>
          <PackageModal
            pkg={selectedPackage}
            onClose={() => setSelectedPackage(null)}
          />
        </Suspense>
      )}
    </div>
  );
}
