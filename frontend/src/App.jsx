import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarDefault from "./components/NavbarDefault";
import { Home, Events, Gallery, AboutUs, Speakers, ContactUs } from "./pages/index.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <NavbarDefault />
      <Home />
      <AboutUs />
      <Events />
      <Gallery />
      <Speakers />
      <ContactUs />
      <Footer />
      <Toaster 
        position="top-center"
        reverseOrder="true"
      />
    </BrowserRouter>
  )
}

export default App;
