// src/HomePage.js
import './HomePage.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importer useDispatch
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [pseudoInput, setPseudoInput] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch(); // Initialiser dispatch
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pseudoInput === "")
    {
      setError(true);

    }
    else
    {
      dispatch({ type: 'SET_PSEUDO', payload: pseudoInput }); // Dispatch de l'action pour mettre à jour le pseudo
      navigate('/rooms'); // Redirection vers la page des rooms

    }
    
  };

  return (
    <div className="home-page">
      <div className="input-container">
        <div className="welcome-text">Bienvenue sur Tetriste</div>
        <div className="welcome-text2">Pour commencer une partie</div>

        <label htmlFor="pseudo" className="input-label">Entrez votre pseudo</label>
        <input 
          type="text" 
          id="pseudo" 
          className="input-box" 
          placeholder="Votre pseudo..."
          value={pseudoInput}
          onChange={(e) => setPseudoInput(e.target.value)} 
        />
        
        <button onClick={handleSubmit}>Valider</button>
        <div className="error-msg">{ error ?
        "erreur , il manque un pseudo !" : ""
        } </div>
      </div>
    </div>
  );
};

export default HomePage;
