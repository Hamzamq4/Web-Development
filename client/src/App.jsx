import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

function App() {
  return (
    <body className="bg-black m-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </body>
  );
}

export default App;
