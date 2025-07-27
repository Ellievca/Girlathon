import React from 'react';
import { Link } from 'react-router-dom';

function RetroWindowButtons() {
  const buttonCommon = {
    width: '40px',
    height: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #333',
    backgroundColor: '#ddd',
    color: '#333',
    fontWeight: 'bold',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    userSelect: 'none',
    boxShadow: 'inset 1px 1px 0 #fff, inset -1px -1px 0 #aaa',
    marginRight: '8px',
    borderRadius: '0 0 4px 4px',
  };

  const closeBtn = {
    ...buttonCommon,
    backgroundColor: '#e81123',
    color: 'white',
    borderColor: '#a80000',
    boxShadow: 'inset 1px 1px 0 #f1707a, inset -1px -1px 0 #a80000',
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={closeBtn} title="Close">×</div>
      <div style={buttonCommon} title="Minimize">—</div>
      <div style={buttonCommon} title="Maximize">☐</div>
    </div>
  );
}

function Home() {
  return (
    <div
      style={{
        height: '75vh',
        width: '70vw',
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fce4ec',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)',
        overflow: 'hidden', // so top bar doesn't overflow
      }}
    >
      {/* Top bar with Windows buttons */}
      <div
        style={{
          height: '40px',
          backgroundColor: '#EDAFB8',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1rem',
          gap: '0.75rem',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          color: 'white',
        }}
      >
        <RetroWindowButtons />
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <h1 style={{ fontFamily: 'Cheri, sans-serif', fontSize: '7rem', marginBottom: '1rem', background: 'linear-gradient(45deg, #ff9aeb, #ffd6f7, #ffffff, #ff9aeb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'glitter 2s infinite linear', backgroundSize: '400%', WebkitTextStroke: '3px #EDAFB8', cursor: 'url(/cursor_icon.png), auto' }}>home page!</h1>
        <Link to="/chatbot">
          <button
            style={{
              padding: '0.75rem 1.5rem',
              fontFamily: 'Cheri, sans-serif',
              fontSize: '3rem',
              backgroundColor: 'var(--color-accent)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            get started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
