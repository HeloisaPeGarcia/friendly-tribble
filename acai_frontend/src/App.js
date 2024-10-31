import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Pedidos from './pages/Pedidos';
import Totem from './pages/Totem';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/totem" element={<Totem />} />
      </Routes>
    </Router>
  );
}

export default App;
