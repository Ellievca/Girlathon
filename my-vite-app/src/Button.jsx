import React from 'react';

function Button({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#EDAFB8",
        color: "white"
      }}
    >
      {label}
    </button>
  );
}

export default Button;
