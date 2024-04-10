import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";
import Navbar from "@/components/ui/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
