import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Menu from "./pages/Menu"
import Contacts from "./pages/Contacts"
import Privacy from "./pages/Privacy"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider } from 'react-helmet-async';



function App() {

  useEffect(() => {
  AOS.init({
    duration: 800,
  });
}, []);

  return (
    <>
    <HelmetProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contatti" element={<Contacts />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      </HelmetProvider>
    </>
  )
}

export default App