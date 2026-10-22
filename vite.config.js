import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    modulePreload: {
      polyfill: false,
      resolveDependencies(filename, deps) {
        // Prevent preloading below-the-fold or non-critical route chunks on mobile initial paint
        const nonCritical = ['vendor-motion', 'AllPackagesPage', 'Testimonials', 'Gallery', 'BookingForm', 'PackageModal', 'MenuPackages'];
        return deps.filter(dep => !nonCritical.some(nc => dep.includes(nc)));
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          const norm = id.replace(/\\/g, '/');
          if (
            norm.includes('/node_modules/react/') ||
            norm.includes('/node_modules/react-dom/') ||
            norm.includes('/node_modules/scheduler/')
          ) {
            return 'vendor-react';
          }
          if (norm.includes('/node_modules/lucide-react/')) {
            return 'vendor-icons';
          }
        }
      }
    }
  }
})
