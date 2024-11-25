// src/HomePage.js
import React from 'react';
import './HomePage.css'; // Assurez-vous d'importer le CSS

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Zone d'entrée pseudo avec style Tetris */}
      <div className="input-container">
        {/* Blocs décoratifs façon Tetris */}
        <span className="tetris-block"></span>
        <span className="tetris-block"></span>
        <span className="tetris-block"></span>
        <span className="tetris-block"></span>

        {/* Texte de bienvenue */}
        <div className="welcome-text">Bienvenue sur Tetriste</div>
        <div className="welcome-text2">Pour commencer une partie </div>

        {/* Zone d'entrée pour le pseudo */}
        <label htmlFor="pseudo" className="input-label">Entrez votre pseudo</label>
        <input type="text" id="pseudo" className="input-box" placeholder="Votre pseudo..." />
      </div>
    </div>
  );
};

export default HomePage;
