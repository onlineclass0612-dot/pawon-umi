import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CatalogSplashScreen from './components/CatalogSplashScreen';

import HomePage from './components/HomePage';

const AllPackagesPage = lazy(() => import('./components/AllPackagesPage'));
const PackageModal = lazy(() => import('./components/PackageModal'));

// Prefetch AllPackagesPage chunk on idle time
if (typeof window !== 'undefined') {
  const prefetchCatalog = () => {
    import('./components/AllPackagesPage');
  };
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(prefetchCatalog, { timeout: 3000 });
  } else {
    setTimeout(prefetchCatalog, 2000);
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

    return () => {
      window.removeEventListener('hashchange', syncHash);
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
      {/* Navigation Bar - Rendered only on Home view, hidden on Catalog view */}
      {currentView !== 'catalog' && (
        <Navbar onNavigateHome={navigateToHome} currentView={currentView} />
      )}

      {currentView === 'catalog' ? (
        /* Full Catalog Page (All Categories & All Packages) - Lazy Loaded */
        <Suspense fallback={<div className="min-h-screen bg-[#FBF9F5]" />}>
          <AllPackagesPage
            onBack={() => navigateToHome('#catalog')}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          />
        </Suspense>
      ) : (
        /* Main Home Content Page - Instant Zero-Delay Frame 1 Render */
        <HomePage
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onOpenCatalog={navigateToCatalog}
        />
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
