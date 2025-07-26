import React from 'react';
import { Link } from 'react-router-dom';

const iconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'white',
  marginBottom: '2rem',
  cursor: 'pointer',
};

const imageStyle = {
  width: '40px',
  height: '40px',
  marginBottom: '0.25rem',
};

function DesktopIcons() {
  return (
    <div
      style={{
        width: '100px',
        backgroundColor: '#1a1a1a',
        padding: '1rem 0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Link to="/" style={iconStyle}>
        <img src="/icons/home.png" alt="Home" style={imageStyle} />
        <span>Home</span>
      </Link>

      <Link to="/about" style={iconStyle}>
        <img src="/icons/about.png" alt="About" style={imageStyle} />
        <span>About</span>
      </Link>

      <Link to="/chatbot" style={iconStyle}>
        <img src="/icons/chat.png" alt="Chatbot" style={imageStyle} />
        <span>Chatbot</span>
      </Link>
    </div>
  );
}

export default DesktopIcons;
