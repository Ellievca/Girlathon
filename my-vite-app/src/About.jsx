import React from 'react';

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
    cursor: 'pointer',
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

function About() {
  return (
    <div 
      style={{
        height: '75vh',
        width: '70vw',
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-background)',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)',
        overflow: 'hidden',
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

      {/* Page content */}
      <div
        style={{
          flex: 1,
          padding: '1rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ marginBottom: '1rem' }}>about page!</h1>
        <p>hi we're team girlathon and we made this for cs girlies hackathon!</p>
      </div>
    </div>
  );
}

export default About;
