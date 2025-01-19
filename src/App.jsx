import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jesusmicine from "./pages/Jesusmicine";
import Programmes from "./pages/Programmes";
import Events from "./pages/Events";
import News from "./pages/News";
import Media from "./pages/Media";
import Churches from "./pages/Churches";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import RequestPrayer from "./pages/RequestPrayer";
import Father from "./pages/Father";
import NoPage from "./pages/NoPage";
import Event from "./pages/Event";
import MoreInfo from "./pages/MoreInfo";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] md:px-[vw] lg:px-[2vw]">
      {/**priginal lg:px-[9vw] */}
      <Navbar />
      <hr className="w-fullborder-none h-[1.5px] bg-gray-700 items-center" />
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/jésusmicine" element={<Jesusmicine />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/événements" element={<Events />} />
        <Route path="/actualités" element={<News />} />
        <Route path="/médiathèque" element={<Media />} />
        <Route path="/églises" element={<Churches />} />
        <Route path="/à-propos" element={<About />} />
        <Route path="/à-propos/bio/père-king-joshua" element={<Father />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/demade/prière" element={<RequestPrayer />} />
        <Route path="/actualités/article" element={<MoreInfo />} />
        <Route path="/événements/événement" element={<Event />} />
        
      </Routes>
      <br /> <br />
      <hr className="h-full bg-gray-800" />
      <div className="px-4 sm:px-[0vw] md:px-[0vw] lg:px-[0vw]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
