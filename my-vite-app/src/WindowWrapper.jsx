function WindowWrapper({ children }) {
  return (
    <div
      style={{
        backgroundImage: 'url("/pngs/grwmbot-background.png', 
        backgroundSize: 'cover',      // fill the screen
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
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
