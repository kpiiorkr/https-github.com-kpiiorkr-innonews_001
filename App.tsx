
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingAd from './components/FloatingAd';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import CategoryPage from './pages/CategoryPage';
import ReportPage from './pages/ReportPage';
import VideoPage from './pages/VideoPage';
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import { INITIAL_ADS } from './constants';

const App: React.FC = () => {
  const floatingAd = INITIAL_ADS.find(a => a.type === 'floating') || null;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
        <FloatingAd ad={floatingAd} />
      </div>
    </Router>
  );
};

export default App;
