import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Chatbot from './Chatbot';
/*import Navbar from './Navbar';*/
import WindowWrapper from './WindowWrapper';

function App() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#121212',
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
      }}
    >
      {/* Desktop App Icons */}
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div
          onClick={() => navigate('/')}
          style={iconStyle}
        >
          <img
            src="/folder-icon.png"    /* or “/icons/folder-icon.png” if you put it in public/icons/ */
            alt="Home"
            style={{ width: '50px', height: '50px', marginBottom: '4px' }}
          />
          <div style={labelStyle}>home</div>
        </div>

        <div
          onClick={() => navigate('/chatbot')}
          style={iconStyle}
        >
          <img
            src="/folder-icon.png"    /* or “/icons/folder-icon.png” if you put it in public/icons/ */
            alt="Chatbot"
            style={{ width: '50px', height: '50px', marginBottom: '4px' }}
          />
          <div style={labelStyle}>chatbot</div>
        </div>

        <div
          onClick={() => navigate('/about')}
          style={iconStyle}
        >
          <img
            src="/folder-icon.png"    /* or “/icons/folder-icon.png” if you put it in public/icons/ */
            alt="About"
            style={{ width: '50px', height: '50px', marginBottom: '4px' }}
          />
          <div style={labelStyle}>about</div>
        </div>
      </div>

      {/* Main Window */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <WindowWrapper>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </WindowWrapper>
      </div>
    </div>
  );
}

const iconStyle = {
  width: '80px',
  height: '80px',
  backgroundColor: 'transparent',
  color: 'white',
  fontSize: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textAlign: 'center',
};

const labelStyle = {
  fontSize: '1rem',
  marginTop: '0.25rem',
};

export default App;
