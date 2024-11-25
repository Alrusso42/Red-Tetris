// Initialisation de l'etat
const initialState = {
    pseudo: '',
  };



// Nommage de l'action
const SET_PSEUDO = 'SET_PSEUDO';

// Methode de l'action
export const setPseudo = (pseudo) => ({
  type: SET_PSEUDO,
  payload: pseudo,
});



// Créer le reducer qui gère le changement de pseudo
const pseudoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PSEUDO:
      return { ...state, pseudo: action.payload };
    default:
      return state;
  }
};

export default pseudoReducer