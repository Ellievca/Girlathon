import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'sticky',
        backgroundColor: '#EDAFB8',
        padding: '1rem 2rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        display: 'flex', // make nav a flex container
        justifyContent: 'space-between', // space between title and links
        alignItems: 'center', // vertically center the content
        color: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ margin: 0, fontWeight: '600', color: 'var(--color-accent, #00d4ff)' }}>
          Hello
        </h2>
        {/* You can throw a logo here if you want */}
      </div>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/chatbot" style={linkStyle}>Chatbot</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'color 0.2s ease-in-out',
};

export default Navbar;
