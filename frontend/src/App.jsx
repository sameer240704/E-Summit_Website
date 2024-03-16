import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarDefault from "./components/NavbarDefault";
import { Home, Events, Gallery, AboutUs, Speakers, ContactUs } from "./pages/index.jsx";
import "./App.css"

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
    </BrowserRouter>
  )
}

export default App;
