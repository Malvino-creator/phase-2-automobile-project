import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import {Router, Routes, Route} from "react-router-dom";

function App() {
  return (                                                                                                                                                                                                                                                                                                                                                                                                
    <div className="App">
      <Router>
        <NavBar />
      <Routes>
      <Route path="/" element={Home} />
      <Route path="/menu" element={Menu} />
      <Route path="/about" element={About} />
      <Route path="/contact" element={Contact} />
      </Routes>
      </Router>   
    </div>
  );
}

export default App;
