import React, { useState } from 'react';
import RetroWindowButtons from './WindowButtons';

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
      const politeReply = "i'm here to help with grwm (get ready with me) questions! please ask me something about makeup, skincare, outfits, or beauty tips 💖✨";
      setChatHistory(prev => [...prev, { sender: 'bot', text: politeReply }]);
      setInput('');
      return;
    }

    try {

      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      // Add bot's reply to chat history
      setChatHistory(prev => [...prev, { sender: 'bot', text: data.response }]);
      setInput('');
    } catch (error) {
      const errorReply = "oops, something went wrong. please try again later 💕";
      setChatHistory(prev => [...prev, { sender: 'bot', text: errorReply }]);
      setInput('');
    }
  };

  const emojis = ['💖', '✨', '💕', '🌸', '💗'];

  return (
    <div
      style={{
        height: '75vh',
        width: '70vw',
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)',
        overflow: 'hidden',
        position: 'relative',

      }}
    >
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

      {/* Top bar with Windows buttons */}
      <div
        style={{
          height: '40px',
          zIndex: 1,
          backgroundColor: '#EDAFB8',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1rem',
          gap: '0.75rem',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          color: 'white',
          animation: 'glowPulse 3s ease-in-out infinite',
        }}
      >
        <RetroWindowButtons />
      </div>

      
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

      {/* Chat UI */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        flex: 1,
        alignItems: 'stretch',
        padding: '1rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontWeight: '600',
        fontSize: '1.3rem',
      }}>
        <h2 style={{
          fontFamily: 'Cheri, sans-serif',
          textAlign: 'center',
          marginBottom: '1rem',
          WebkitTextStroke: '2px #EDAFB8',
        }}>
          💖 GRWM Chatbot 💖
        </h2>

        {/* Chatbox container */}
        <div style={{
          flexGrow: 1,
          overflowY: 'auto',
          paddingRight: '12px',
          lineHeight: '1.5',
          textAlign: 'left',
          userSelect: 'text',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          marginBottom: '1rem',
          padding: '0.5rem',
          border: '2px solid #cc3366',
          borderRadius: '20px',
          backgroundColor: 'rgba(255 182 193 / 0.2)',
        }}>
          {chatHistory.length === 0 && (
            <p style={{
              color: '#cc3366',
              textAlign: 'center',
              fontStyle: 'italic',
              userSelect: 'none',
              marginTop: '1rem',
            }}>
              bot is waiting for you...
            </p>
          )}
          {chatHistory.map((msg, idx) => (
            <div key={idx} style={{
              backgroundColor: msg.sender === 'bot' ? 'rgba(255 228 236 / 0.7)' : 'rgba(255 182 193 / 0.5)',
              padding: '0.75rem 1rem',
              margin: '0.5rem 0',
              marginBottom: '1rem',
              alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
              borderRadius: msg.sender === 'bot' ? '30px 30px 30px 10px' : '30px 30px 10px 30px',
              boxShadow: '0 0 8px #ff66b2',
              color: '#900048',
              fontWeight: '600',
              maxWidth: '75%',
            }}>
              {msg.sender === 'bot' ? 'bot: ' : 'you: '}{msg.text}
            </div>
          ))}
        </div>

        {/* Input and Send button */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type your message..."
            aria-label="Message input"
            onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: '20px',
              border: '2px solid #ff66b2',
              fontSize: '1rem',
              boxShadow: 'inset 0 0 8px #ffb6c1',
              marginBottom: '1rem',
              color: '#333',
              backgroundColor: '#fff0f5',
              backdropFilter: 'blur(8px)',
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              background: 'linear-gradient(45deg, #ff66b2, #ff99cc)',
              border: 'none',
              padding: '0.75rem 1.25rem',
              borderRadius: '20px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              cursor: 'pointer',
              boxShadow: '0 8px 20px #ff66b2',
              transition: 'all 0.3s ease-in-out',
              marginBottom: '1rem',
            }}
            aria-label="Send message"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
