// Initialisation de l'etat
const initialState = {
    pseudo: '',
    pseudolist: [],
    error: '',
  };



// Nommage de l'action
const SET_PSEUDO = 'SET_PSEUDO';
const CHECK_PSEUDO = 'CHECK_PSEUDO';
const ADD_PSEUDOLIST = 'ADD_PSEUDOLIST';
const REMOVE_PSEUDOLIST = 'REMOVE_PSEUDOLIST';

// Methode de l'action
export const setPseudo = (pseudo) => ({
  type: SET_PSEUDO,
  payload: pseudo,
});

export const checkPseudo = (pseudo) => ({
  type: CHECK_PSEUDO,
  payload: pseudo,
})

export const addPseudoList = (pseudo) => ({
  type: ADD_PSEUDOLIST,
  payload: pseudo,
})

export const removePseudoList = (pseudo) => ({
  type: REMOVE_PSEUDOLIST,
  payload: pseudo,
})


// Créer le reducer qui gère le changement de pseudo
const pseudoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PSEUDO:
      return { ...state, pseudo: action.payload, error: '' };
    case CHECK_PSEUDO:
      const pseudoExists = state.pseudolist.includes(action.payload);
      if (pseudoExists) {
        return {
          ...state,
          error: 'Erreur: Le pseudo est deja pris'
        };
      }
      if (action.payload.trim().length === 0 ) {
        return { ...state, error: 'Erreur : le pseudo est vide'};
      }
      return {
        ...state,
        pseudo: action.payload,
        pseudolist: [...state.pseudolist, action.payload],
        error: '',
      };    
    case ADD_PSEUDOLIST:
      return { ...state , pseudolist: [...state.pseudolist, action.payload], error: ''};
    case REMOVE_PSEUDOLIST:
      return {...state, pseudolist: state.pseudolist.filter((p) => p !== action.payload),};
    default:
      return state;
  }
};

export default pseudoReducer