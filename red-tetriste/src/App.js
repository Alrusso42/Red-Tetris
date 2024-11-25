// src/App.js
import React from 'react';
import HomePage from './HomePage'; // Import de notre composant HomePage
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Pour la navigation

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Définir la route pour la page d'accueil */}
          <Route path="/" element={<HomePage />} />
          {/* Vous pouvez ajouter d'autres routes ici, par exemple /play, /about */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
