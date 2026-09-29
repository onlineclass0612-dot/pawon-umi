import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuPackages from './components/MenuPackages';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CatalogSplashScreen from './components/CatalogSplashScreen';

// Below-the-fold components code-split to slash initial mobile JS bundle by ~45%
const Testimonials = lazy(() => import('./components/Testimonials'));
const Gallery = lazy(() => import('./components/Gallery'));
const BookingForm = lazy(() => import('./components/BookingForm'));

const AllPackagesPage = lazy(() => import('./components/AllPackagesPage'));

// If user is directly accessing the catalog URL, trigger chunk download immediately
if (typeof window !== 'undefined') {
  const initialHash = window.location.hash;
  if (initialHash === '#/paket-lengkap' || initialHash === '#paket-lengkap') {
    import('./components/AllPackagesPage');
  }
}

// Lazy-loaded modal (opened only on user click, zero impact on initial page load)
const PackageModal = lazy(() => import('./components/PackageModal'));

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

    // Prefetch below-the-fold chunks on first user scroll or after 5s idle time
    let timer = null;
    let onScrollOnce = null;
    if (typeof window !== 'undefined') {
      const prefetch = () => {
        import('./components/Testimonials');
        import('./components/Gallery');
        import('./components/BookingForm');
        import('./components/AllPackagesPage');
      };
      timer = setTimeout(prefetch, 5000);
      onScrollOnce = () => {
        prefetch();
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
  }, []);

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
        /* Main Home Content Sections - Order: Beranda -> Catalog -> Ulasan -> Galeri -> Kontak */
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          {/* 1. Beranda */}
          <Hero />

          {/* 2. Catalog / Koleksi Pilihan Sajian */}
          <MenuPackages
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenCatalog={navigateToCatalog}
          />

          {/* 3. Ulasan Klien (Lazy loaded below the fold) */}
          <Suspense fallback={<div className="min-h-[380px]" />}>
            <Testimonials />
          </Suspense>

          {/* 4. Galeri Jamuan (Lazy loaded below the fold) */}
          <Suspense fallback={<div className="min-h-[480px]" />}>
            <Gallery />
          </Suspense>

          {/* 5. Kontak & Reservasi (Lazy loaded below the fold) */}
          <Suspense fallback={<div className="min-h-[480px]" />}>
            <BookingForm />
          </Suspense>
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Consultation Action (Mobile Only) */}
      <FloatingCTA />

      {/* Splash Screen with Heartbeat Brand Logo when entering Catalog */}
      <AnimatePresence>
        {showCatalogSplash && (
          <CatalogSplashScreen
            onFinish={() => setShowCatalogSplash(false)}
            duration={400}
          />
        )}
      </AnimatePresence>

      {/* Package Detail Modal with Smooth Exit Animation */}
      <AnimatePresence>
        {selectedPackage && (
          <Suspense fallback={null}>
            <PackageModal
              pkg={selectedPackage}
              onClose={() => setSelectedPackage(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}
