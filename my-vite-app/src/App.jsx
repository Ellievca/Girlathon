import React from 'react';

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to My Web App</h1>
      <button 
        onClick={handleClick}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white"
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
