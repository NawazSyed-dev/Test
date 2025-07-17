import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import USAPage from './components/USAPage';
import CanadaPage from './components/CanadaPage';
import OrdersOperationsPage from './components/OrdersOperationsPage';

export type PageType = 'landing' | 'usa' | 'canada' | 'orders-operations';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'usa':
        return <USAPage onBack={() => setCurrentPage('landing')} onNavigate={setCurrentPage} />;
      case 'canada':
        return <CanadaPage onBack={() => setCurrentPage('landing')} />;
      case 'orders-operations':
        return <OrdersOperationsPage onBack={() => setCurrentPage('usa')} />;
      default:
        return <LandingPage onSelectCountry={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200">
      {renderPage()}
    </div>
  );
}

export default App;