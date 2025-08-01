'use client';

import React from "react";

const App = () => {
  return (
    <footer style={{
      backgroundColor: '#f5f5f5',
      padding: '20px 24px',
      borderTop: '1px solid #e0e0e0',
      textAlign: 'center',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div>
        <p style={{ margin: 0, color: '#666' }}>
          © 2025 VR System - Todos os direitos reservados
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#888' }}>
          Desenvolvido com Microfrontends
        </p>
      </div>
    </footer>
  );
};

export default App;
