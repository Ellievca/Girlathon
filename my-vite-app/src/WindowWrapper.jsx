function WindowWrapper({ children }) {
    return (
      <div
        style={{
          backgroundColor: '#1f1f1f',
          minHeight: '100vh',     // ✅ CHANGED from height to minHeight
          width: '100vw',
          padding: '2rem',
          color: 'white',
          overflowY: 'auto',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    );
  }
export default WindowWrapper;  