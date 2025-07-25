import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212', // test background color
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ marginBottom: '1rem' }}>home page!</h1>
      <Link to="/chatbot">
        <button
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1.2rem',
            backgroundColor: '#00bcd4',
            color: '#121212',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          get started
        </button>
      </Link>
    </div>
  );
}

export default Home;
