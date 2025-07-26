import React from 'react';

function About() {
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
        borderTop: '25px solid #EDAFB8',
      }}
    >
      <h1>about page!</h1>
      <p>hi we're team girlathon and we made this for cs girlies hackathon!</p>
    </div>
  );
}

export default About;
