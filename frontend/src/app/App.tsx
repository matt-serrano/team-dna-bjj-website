import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Kids5to8 } from './pages/programs/Kids5to8';
import { Kids8to13 } from './pages/programs/Kids8to13';
import { AdultTeen } from './pages/programs/AdultTeen';
import { Womens } from './pages/programs/Womens';
import { Schedule } from './pages/Schedule';
import { Pricing } from './pages/Pricing';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs/kids-5-8" element={<Kids5to8 />} />
              <Route path="/programs/kids-8-13" element={<Kids8to13 />} />
              <Route path="/programs/adult-teen" element={<AdultTeen />} />
              <Route path="/programs/womens" element={<Womens />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}