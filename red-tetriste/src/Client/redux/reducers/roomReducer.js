// Initialisation de l'etat
const initialState= {
    room: {},
};

// Liste d'action
const CREATE_ROOM = 'CREATE_ROOM';
const JOIN_ROOM   = 'JOIN_ROOM';
const LEAVE_ROOM  = 'LEAVE_ROOM';
const DELETE_ROOM = 'CREATE_ROOM';

// Fonction de creation
export const createRoom = (owner, roomName) => ({
    type: CREATE_ROOM,
    payload: { owner, roomName},
})

// Fonction join
export const joinRoom = (guest, roomName) => ({
    type: JOIN_ROOM,
    payload: { guest, roomName},
})

// Fonction leave
export const leaveRoom = (roomName) => ({
    type: LEAVE_ROOM,
    payload: {roomName},
})

// Fonction delete
export const deleteRoom = (roomName) => ({
    type: DELETE_ROOM,
    payload: {roomName},
})


// Réducteur pour gérer la suppression de la room
const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ROOM:
        return {
          ...state,
          rooms: [
            ...state.rooms,
            {
              owner: action.payload.owner,
              name: action.payload.roomName,
              guest: '',
              state: 'waiting',
              capacity: 1,
            },
          ],
        };
  
      case JOIN_ROOM:
        return {
          ...state,
          rooms: state.rooms.map((room) =>
            room.name === action.payload.roomName
              ? {
                // Creation d'une copy des elements de la room 
                // (Principe de Redux pour ne pas impacter l'existant-)
                  ...room,
                  guest: action.payload.guest,
                  capacity: room.capacity + 1,
                }
              : room
          ),
        };
  
      case LEAVE_ROOM:
        return {
          ...state,
          rooms: state.rooms.map((room) =>
            room.id === action.payload
              ? {
                  ...room,
                  guest: '',
                  capacity: room.capacity - 1,
                }
              : room
          ),
        };
  
      case DELETE_ROOM:
        return {
          ...state,
          rooms: state.rooms.filter((room) => room.id !== action.payload),  // Supprimer la room de la liste
        };
  
      default:
        return state;
    }
  };
  
  export default roomsReducer;