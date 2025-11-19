import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import About from "./About";
import NavBar from "./NavBar";
import Services from "./Services";
import OurTeam from "./OurTeam";
import ContactPageTemplate from "./Contact";
import Gallery from "./Gallery";
import AdminLogin from "./AdminLogin";
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        {/* Root route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<ContactPageTemplate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
