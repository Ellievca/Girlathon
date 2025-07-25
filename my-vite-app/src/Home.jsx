import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>home page!</h1>
      <Link to="/chatbot">
        <button
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "8px",
            border: "5px solid var(--color-accent)",
            backgroundColor: "var(--color-background)",
            color: "var(--color-text)",
          }}
        >
          get started 
        </button>
      </Link>
    </div>
  );
}

export default Home;
