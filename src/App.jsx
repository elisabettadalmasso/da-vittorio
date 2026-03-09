import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ChiSiamo from "./pages/Chisiamo";
import Menu from "./pages/Menu"
import Contacts from "./pages/Contacts"
import Privacy from "./pages/Privacy"



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chisiamo" element={<ChiSiamo />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contatti" element={<Contacts />} />
        <Route path="/privacy" element={<Privacy />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App