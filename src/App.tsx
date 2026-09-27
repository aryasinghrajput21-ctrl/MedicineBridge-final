import { useState } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import UploadPage from '@/pages/UploadPage';
import SearchPage from '@/pages/SearchPage';
import PriceComparisonPage from '@/pages/PriceComparisonPage';
import NearbySourcesPage from '@/pages/NearbySourcesPage';
import DashboardPage from '@/pages/DashboardPage';
import type { Medicine, ExtractedMedicine } from '@/data/demoData';

export type Page =
  | 'home'
  | 'upload'
  | 'search'
  | 'price'
  | 'nearby'
  | 'dashboard';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [prescriptionResults, setPrescriptionResults] = useState<
    ExtractedMedicine[]
  >([]);
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(
    null
  );

  const handleNavigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMedicine = (med: Medicine, targetPage: Page = 'price') => {
    setSelectedMedicine(med);
    setPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewPrescription = (medicines: ExtractedMedicine[]) => {
    setPrescriptionResults(medicines);
    setPage('upload');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar currentPage={page} onNavigate={handleNavigate} />
        <main className="flex-1">
          {page === 'home' && <HomePage onNavigate={handleNavigate} />}
          {page === 'upload' && (
            <UploadPage
              onNavigate={handleNavigate}
              onResults={setPrescriptionResults}
              results={prescriptionResults}
              onSelectMedicine={handleSelectMedicine}
            />
          )}
          {page === 'search' && (
            <SearchPage
              onNavigate={handleNavigate}
              onSelectMedicine={handleSelectMedicine}
            />
          )}
          {page === 'price' && (
            <PriceComparisonPage
              selectedMedicine={selectedMedicine}
              onNavigate={handleNavigate}
            />
          )}
          {page === 'nearby' && (
            <NearbySourcesPage
              selectedMedicine={selectedMedicine}
              onNavigate={handleNavigate}
            />
          )}
          {page === 'dashboard' && (
            <DashboardPage
              onNavigate={handleNavigate}
              onViewPrescription={handleViewPrescription}
            />
          )}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
