import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuPackages from './components/MenuPackages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CatalogSplashScreen from './components/CatalogSplashScreen';

// Lazy-loaded routes/modals for optimal mobile Lighthouse performance
const PackageModal = lazy(() => import('./components/PackageModal'));
const AllPackagesPage = lazy(() => import('./components/AllPackagesPage'));

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [currentView, setCurrentView] = useState('home');
  const [showCatalogSplash, setShowCatalogSplash] = useState(false);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash;
      if (hash === '#/paket-lengkap' || hash === '#paket-lengkap') {
        setCurrentView((prev) => {
          if (prev !== 'catalog') {
            setShowCatalogSplash(true);
          }
          return 'catalog';
        });
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const navigateToCatalog = () => {
    window.location.hash = '/paket-lengkap';
    setShowCatalogSplash(true);
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
        /* Full Catalog Page (All Categories & All Packages) - Lazy Loaded */
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#C5A059] border-t-transparent animate-spin" />
          </div>
        }>
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

          {/* 3. Ulasan Klien */}
          <Testimonials />

          {/* 4. Galeri Jamuan */}
          <Gallery />

          {/* 5. Kontak & Reservasi */}
          <BookingForm />
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
            duration={1350}
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
