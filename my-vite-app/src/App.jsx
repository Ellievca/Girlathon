import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Chatbot from './Chatbot';
import Navbar from './Navbar';
import WindowWrapper from './WindowWrapper';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#121212',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <WindowWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </WindowWrapper>
    </div>
  );
}

export default App;
