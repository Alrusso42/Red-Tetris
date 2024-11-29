// Initialisation de l'etat
const initialState = {
    pseudo: '',
    pseudolist: [],
    error: '',
  };



// Nommage de l'action
const SET_PSEUDO = 'SET_PSEUDO';
const CHEK_PSEUDO = 'CHECK_PSEUDO';
const ADD_PSEUDO = 'ADD_PSEUDOLIST';

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


// Créer le reducer qui gère le changement de pseudo
const pseudoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PSEUDO:
      return { ...state, pseudo: action.payload, error: '' };
    case CHECK_PSEUDO:
      const pseudoExists = state.pseudolist.includes(action.payload);
      return {
        ...state,
        error: pseudoExists ? 'Le pseudo est deja pris' : '',
      };
    case ADD_PSEUDOLIST:
      return { ...state , pseudolist: [...state.pseudolist, action.payload], error: ''};
    default:
      return state;
  }
};

export default pseudoReducer