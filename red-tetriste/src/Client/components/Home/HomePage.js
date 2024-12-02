// src/HomePage.js
import './HomePage.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importer useDispatch
import {setPseudo, checkPseudo, addPseudoList, removePseudoList} from '../../redux/reducers/pseudoReducer';
import { useNavigate } from 'react-router-dom';
import store from '../../redux/store';

const HomePage = () => {
  const [pseudoInput, setPseudoInput] = useState('');
  var error = useSelector(state => state.pseudo.error)
  const dispatch = useDispatch(); // Initialiser dispatch
  const navigate = useNavigate();

  //Enleve le pseudo quand on quitte la page
  useEffect(() => {
    const handleUnload = () => {
      const pseudo = localStorage.getItem('pseudo');
      if (pseudo) {
        dispatch(removePseudoList(pseudo));
      }
    };
  
  window.addEventListener('beforeunload', handleUnload);
  return () => {
    window.removeEventListener('beforeunload', handleUnload);
  };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //verifie si le pseudo existe et si il est vide
    dispatch(checkPseudo(pseudoInput));

    //recupere l'erreur
    error =  store.getState().pseudo.error;


    //Si aucune erreur on envoie l'user sur la page rooms
    if (!error) {
      dispatch(setPseudo(pseudoInput));
      dispatch(addPseudoList(pseudoInput));
      navigate('/rooms')
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
        <div className="error-msg">{error}</div>
      </div>
    </div>
  );
};

export default HomePage;
