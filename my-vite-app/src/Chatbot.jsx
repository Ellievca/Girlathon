import React, { useState } from 'react';

function Chatbot() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    const res = await fetch('https://girlathon-bjjt.onrender.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setReply(data.response);
  };

  return (
    <div style={{
        height: '100vh',
        width: '100vw',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
      }}>
      <h1>AI Chatbot</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ padding: '8px', width: '300px', marginRight: '10px' }}
      />
      <button onClick={sendMessage} style={{ padding: '8px 16px' }}>Send</button>
      <p style={{ marginTop: '20px' }}>Bot: {reply}</p>
    </div>
  );
}

export default Chatbot;
