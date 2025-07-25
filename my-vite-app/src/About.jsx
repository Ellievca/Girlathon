import React from 'react';

function About() {
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
        backgroundColor: 'var(--color-background)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1>about page!</h1>
      <p>hi we're team girlathon and we made this for cs girlies hackathon!</p>
    </div>
  );
}

export default About;
