import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import HomePage from './components/HomePage';

const PackageModal = lazy(() => import('./components/PackageModal'));

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const navigateToSection = (targetHash) => {
    if (targetHash) {
      window.location.hash = targetHash;
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 30);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FBF9F5] text-[#2C2521] flex flex-col selection:bg-[#C5A059] selection:text-[#2C2521]">
      {/* Navigation Bar */}
      <Navbar onNavigateHome={navigateToSection} />

      {/* Main Home Page */}
      <HomePage
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Consultation Action (Mobile Only) */}
      <FloatingCTA />

      {/* Package Detail Modal */}
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
