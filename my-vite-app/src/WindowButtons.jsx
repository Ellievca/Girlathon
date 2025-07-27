import React from 'react';

const buttonCommon = {
  width: '40px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #333',
  backgroundColor: '#ddd',
  color: '#333',
  fontWeight: 'bold',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  cursor: 'pointer',
  userSelect: 'none',
  boxShadow: 'inset 1px 1px 0 #fff, inset -1px -1px 0 #aaa',
  marginRight: '8px',
  borderRadius: '0 0 4px 4px',
};

const closeBtn = {
  ...buttonCommon,
  backgroundColor: '#e81123',
  color: 'white',
  borderColor: '#a80000',
  boxShadow: 'inset 1px 1px 0 #f1707a, inset -1px -1px 0 #a80000',
};

function RetroWindowButtons() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={closeBtn} title="Close">×</div>
      <div style={buttonCommon} title="Minimize">—</div>
      <div style={buttonCommon} title="Maximize">☐</div>
    </div>
  );
}

export default RetroWindowButtons;
