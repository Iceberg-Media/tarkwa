import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Insurance from './pages/Insurance';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ClassicCarTransport from './pages/ClassicCarTransport';
import PrestigeCarTransport from './pages/PrestigeCarTransport';
import AuctionTransport from './pages/AuctionTransport';
import DealershipTransport from './pages/DealershipTransport';
import SUVTransport from './pages/SUVTransport';
import SameDayDelivery from './pages/SameDayDelivery';
import LongDistanceTransport from './pages/LongDistanceTransport';
import SmallVanTransport from './pages/SmallVanTransport';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/classic-car-transport" element={<ClassicCarTransport />} />
            <Route path="/prestige-car-transport" element={<PrestigeCarTransport />} />
            <Route path="/auction-transport" element={<AuctionTransport />} />
            <Route path="/dealership-transport" element={<DealershipTransport />} />
            <Route path="/suv-transport" element={<SUVTransport />} />
            <Route path="/same-day-delivery" element={<SameDayDelivery />} />
            <Route path="/long-distance-transport" element={<LongDistanceTransport />} />
            <Route path="/small-van-transport" element={<SmallVanTransport />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
