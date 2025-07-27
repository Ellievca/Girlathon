import React, {useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Chatbot from './Chatbot';
import WindowWrapper from './WindowWrapper';
import './fonts.css';

function App() {
  const navigate = useNavigate();

  // Mouse click sound
  useEffect(() => {
    const clickSound = new Audio('/mouse_click_sound.mp3'); 

    const handleClick = () => {
      clickSound.currentTime = 0;
      clickSound.play().catch((e) => {
        // prevents autoplay
      });
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

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
          top: '3rem',
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
            src="/pngs/home_logo.png"    /* or “/icons/folder-icon.png” if you put it in public/icons/ */
            alt="Home"
            style={{ width: '55px', height: '55px', marginBottom: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', borderRadius: '8px' }}
          />
          <div style={labelStyle}>home</div>
        </div>

        <div
          onClick={() => navigate('/chatbot')}
          style={iconStyle}
        >
          <img
            src="/pngs/grwm_logo.png"    /* or “/icons/folder-icon.png” if you put it in public/icons/ */
            alt="Chatbot"
            style={{ width: '55px', height: '55px', marginBottom: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', borderRadius: '8px' }}
          />
          <div style={labelStyle}>chatbot</div>
        </div>

        <div
          onClick={() => navigate('/about')}
          style={iconStyle}
        >
          <img
            src="/pngs/about_logo.png"    /* or “/icons/folder-icon.png” if you put it in public/icons/ */
            alt="About"
            style={{ width: '55px', height: '55px', marginBottom: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', borderRadius: '8px' }}
          />
          <div style={labelStyle}>about</div>
        </div>

        <div
          onClick={() => window.open('https://github.com/Ellievca/Girlathon-GRWM-Bot', '_blank')}
          style={iconStyle}
        >
          <img
            src="/pngs/github_logo.png"    /* or “/icons/folder-icon.png” if you put it in public/icons/ */
            alt="Home"
            style={{ width: '55px', height: '55px', marginBottom: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', borderRadius: '8px' }}
          />
          <div style={labelStyle}>github</div>
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
  textAlign: 'center',
};

const labelStyle = {
  fontSize: '1rem',
  fontWeight: '500',
  marginTop: '0.25rem',
  textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
  color: 'white',
};

export default App;
