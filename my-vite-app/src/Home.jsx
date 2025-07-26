import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        height: '75vh',
        width: '70vw',
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--color-background)', // test background color
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
            backgroundColor: 'var(--color-accent)',
            color: '#FFFFFF',
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
