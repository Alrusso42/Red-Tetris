import React from 'react';
import ReactDOM from 'react-dom/client';  // Importer ReactDOM de 'react-dom/client'
import './index.css';
import App from './Client/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Client/redux/store';

const rootElement = document.getElementById('root');  // Sélectionner l'élément root
const root = ReactDOM.createRoot(rootElement);  // Créer un root avec createRoot

root.render(  // Utiliser render sur le root créé
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
