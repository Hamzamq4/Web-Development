import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Notion from "../pages/Notion";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-end space-x-4 font-bold bg-black text-white p-4">
        <ul>
          <li className="inline m-1">
            <Link to="/">Home</Link>
          </li>
          <li className="inline m-1">
            <Link to="/Projects">Project</Link>
          </li>
          <li className="inline m-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="inline m-1">
            <Link to="/notion">Notion</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notion" element={<Notion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
