import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';  // Importer combineReducers
import pseudoReducer from './reducers/pseudoReducer';  // Importer le reducer pour le pseudo
import roomsReducer from './reducers/roomReducer';  // Importer le reducer pour les rooms

// Combiner les reducers
const rootReducer = combineReducers({
  pseudo: pseudoReducer,  // Le reducer pour gérer l'état du pseudo
  rooms: roomsReducer,    // Le reducer pour gérer les rooms
});

// Créer le store avec `configureStore`
const store = configureStore({
  reducer: rootReducer,  // Utilisation du reducer combiné
});

export default store;
