import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";
import ProjectDetails from "../pages/ProjectDetails.jsx";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Testimonialss from "./components/ui/testimonals_1";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Testimonialss />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
