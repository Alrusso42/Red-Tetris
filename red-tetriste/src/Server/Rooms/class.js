class Room {
    constructor(name) {
        this._name = name;
        this._player1 = "";
        this._player2 = "";
        this._countPlayers = 1;
        this._status = WAITING;
        this._mode = VERSUS;
        this._isPrivate = false;
        this._password = ""; 
    }

    //Fu GET

    get name() {
        return this._name;
    }

    get playerOne() {
        return this._player1;
    }

    get playerTwo() {
        return this._player2;
    }
    
    get countPlayer() {
        return this._countPlayers;
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

    set playerTwo(playerTwo) {
        this._player2
    }

    //ANOTHER FUNCTIONS 

    switchPrivate() {
        this._isPrivate = true;
    }


}