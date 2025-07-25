import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Chatbot from './Chatbot';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>home</Link>
        <Link to="/chatbot" style={{margin: '0 1rem'}}>chatbot</Link>
        <Link to="/about" style={{ margin: '0 1rem' }}>about</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  );
}

export default App;
