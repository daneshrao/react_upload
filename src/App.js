import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About";
import Skills from "./components/Pages/Skills"
import Contact from "./components/Pages/contact"
import Career from "./components/Pages/Career";
import TestContact from "./components/Pages/TestContact";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";


function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<TestContact />} />
        </Routes>
      </BrowserRouter>
    </div>

    // </>
  );
}

export default App;
