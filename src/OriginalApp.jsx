import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jesusmicine from "./pages/Jesusmicine";
import Programmes from "./pages/Programmes";
import Event from "./pages/Event"
import News from "./pages/News"
import Media from "./pages/Media"
import Churches from "./pages/Chruches"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import RequestPrayer from "./pages/RequestPrayer"

import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] md:px-[vw] lg:px-[6vw]">{/**priginal lg:px-[9vw] */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jesusmicine" element={<Jesusmicine />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/événements" element={<Event />} />
        <Route path="/actuatés" element={<News />} />
        <Route path="/médiathèque" element={<Media />} />
        <Route path="/églises" element={<Churches />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/demade/prière" element={<RequestPrayer />} />
      </Routes>
    </div>
  );
};

export default App;
