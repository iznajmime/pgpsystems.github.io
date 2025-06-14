import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <main className="flex-grow">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
