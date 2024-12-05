class Game {
    constructor(roomname) {
        this._roomname = roomname;
        this._players = [];
        this._countPlayers = 1;
        this._status = WAITING;
        this._mode = VERSUS;
        this._isPrivate = false;
        this._password = ""; 
    }

    //Functions GET

    get roomnamename() {
        return this._roomname;
    }

    
    get players() {
        return this._players;

    }

    get status(){
        return this._status;
    }

    get mode() {
        return this._mode;
    }

    get  isPrivate() {
        return this._isPrivate;
    }

    get password(){
        return this._password;
    }
    

    //FUNCTIONS SET

    set passord(password) {
        this._password = password; 
    }


    set mode(mode) {
        this._mode = mode;
    }

    set status(status) {
        this._status = status;
    }

    
    //ANOTHER FUNCTIONS 

    switchPrivate() {
        this._isPrivate = true;
    }


}