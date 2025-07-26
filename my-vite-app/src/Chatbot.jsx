import React, { useState } from 'react';

function Chatbot() {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Keywords for GRWM-related questions
  const grwmKeywords = [
    'makeup', 'skincare', 'hair', 'outfit', 'dress', 'beauty', 'glow',
    'routine', 'eyeshadow', 'lipstick', 'foundation', 'highlight', 'contour',
    'nails', 'style', 'brush', 'grwm', 'ready', 'get ready', 'cute', 'girly'
  ];

  const containsGRWM = (text) => {
    const lowerText = text.toLowerCase();
    return grwmKeywords.some(keyword => lowerText.includes(keyword));
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user's message to chat history
    setChatHistory(prev => [...prev, { sender: 'user', text: input }]);

    // If message isn't GRWM related, reply with polite reminder
    if (!containsGRWM(input)) {
      const politeReply = "I'm here to help with GRWM (Get Ready With Me) questions! Please ask me something about makeup, skincare, outfits, or beauty tips 💖✨";
      setChatHistory(prev => [...prev, { sender: 'bot', text: politeReply }]);
      setInput('');
      return;
    }

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      // Add bot's reply to chat history
      setChatHistory(prev => [...prev, { sender: 'bot', text: data.response }]);
      setInput('');
    } catch (error) {
      const errorReply = "Oops, something went wrong. Please try again later 💕";
      setChatHistory(prev => [...prev, { sender: 'bot', text: errorReply }]);
      setInput('');
    }
  };

  const emojis = ['💖', '✨', '💕', '🌸', '💗'];

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      background: 'transparent',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      color: '#3a003a',
      textAlign: 'center',
      paddingTop: '10rem',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative',
      paddingBottom: '3rem',
    }}>
      {/* Floating emoji background */}
      <style>{`
        @keyframes floatEmojis {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 10px #ff99cc, 0 0 20px #ff66b2; }
          50% { text-shadow: 0 0 20px #ff66b2, 0 0 40px #ff99cc; }
        }
      `}</style>

      {/* Fixed Header */}
      <h1 style={{
        fontWeight: 'bold',
        fontSize: '4rem',
        marginBottom: '3rem',
        zIndex: 10,
        position: 'fixed',
        top: '1rem',
        background: 'linear-gradient(45deg,rgb(161, 40, 100), #ff99cc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        width: '100%',
        textAlign: 'center',
        userSelect: 'none',
        pointerEvents: 'none',
        animation: 'glowPulse 3s ease-in-out infinite',
      }}>
        💖 GRWM Chatbox 💖
      </h1>

      {/* Chatbox wrapper */}
      <div style={{
        position: 'relative',
        zIndex: 5,
        width: '750px',
        maxWidth: '95vw',
        minHeight: '500px',
        borderRadius: '40px',
        padding: '4rem 3rem 3rem 3rem',
        background: 'linear-gradient(135deg,rgb(255, 182, 193) 0%, #ffb6c1 100%)',
        boxShadow: '0 0 30px #ff69b4cc, 0 0 60px #ffb6c1cc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        overflow: 'hidden',
        border: '4px solid #ff66b2',
      }}>
        {/* Emoji background */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          fontSize: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(14, 1fr)',
          gridTemplateRows: 'repeat(12, 1fr)',
          gap: '10px',
          padding: '1rem',
          opacity: 0.15,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}>
          {Array(168).fill(0).map((_, i) => {
            const emoji = emojis[i % emojis.length];
            const colorHue = 320 + (i % 10) * 5;
            return (
              <span key={i} style={{
                color: `hsl(${colorHue}, 85%, 80%)`,
                filter: 'drop-shadow(0 0 1px #ff66b2)',
              }}>{emoji}</span>
            );
          })}
        </div>

        {/* Chat UI container */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          borderRadius: '30px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          minHeight: '420px',
          background: 'transparent',
          color: '#900048',
          fontWeight: '600',
          fontSize: '1.3rem',
        }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{
              padding: '16px',
              width: '100%',
              borderRadius: '20px',
              border: '2px solid #ff66b2',
              outline: 'none',
              fontSize: '1.3rem',
              boxShadow: 'inset 0 0 12px #ffb6c1',
              marginBottom: '1.5rem',
              fontWeight: '600',
              color: '#333',
              backgroundColor: 'rgba(255 182 193 / 0.4)',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Message input"
            onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
          />
          <button
            onClick={sendMessage}
            style={{
              background: 'linear-gradient(45deg, #ff66b2, #ff99cc)',
              border: 'none',
              padding: '16px 25px',
              borderRadius: '20px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              cursor: 'pointer',
              boxShadow: '0 8px 20px #ff66b2',
              transition: 'all 0.3s ease',
              width: '100%',
              marginBottom: '2rem',
            }}
            aria-label="Send message"
          >
            Send
          </button>

          <div style={{
            flexGrow: 1,
            overflowY: 'auto',
            paddingRight: '12px',
            lineHeight: '1.5',
            textAlign: 'left',
            userSelect: 'text',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
          }}>
            {chatHistory.length === 0 && (
              <p style={{
                color: '#cc3366',
                fontWeight: '600',
                fontStyle: 'italic',
                userSelect: 'none',
                marginTop: '1rem',
                textAlign: 'center'
              }}>
                Bot is waiting for you...
              </p>
            )}

            {chatHistory.map((msg, idx) => (
              <div key={idx} style={{
                backgroundColor: msg.sender === 'bot' ? 'rgba(255 228 236 / 0.7)' : 'rgba(255 182 193 / 0.5)',
                padding: '18px 24px',
                borderRadius: msg.sender === 'bot' ? '30px 30px 30px 10px' : '30px 30px 10px 30px',
                boxShadow: '0 0 15px #ff66b2',
                maxWidth: '85%',
                marginBottom: '1rem',
                color: '#900048',
                alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
                fontWeight: '600',
              }}>
                {msg.sender === 'bot' ? 'Bot: ' : 'You: '}{msg.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
