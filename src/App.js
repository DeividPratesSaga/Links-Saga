// src/App.js
import React from 'react';
import LinkList from './components/LinkList';
import './index.css';
import sagaLogo from './assets/imges/saga.png'; // Certifique-se de que o caminho está correto

const App = () => {
  return (
    <div className="App">
      <header>
        <img src={sagaLogo} alt="Logo" />
      </header>
      <h1>Links SAGA acesso rápido</h1>
      <LinkList />
    </div>
  );
};

export default App;