class Player
{
    constructor(name)
    {
        this._name = name;
        this._isHost = false;
        this._score = 0;
        this._piece = new Piece();
        this._nextPiece = new Piece();
        this._heap = Array(20).fill("").map(() => Array(10).fill("")); //create the heap for the game 20 lines, 10 columns;
        this._hasLost = false;
    }

    //Functions GET 

    get name() {
        return this._name;
    }

    get score() {
        return this._score;
    }
    
    get piece() {
        return this._piece;
    }

    get nextPiece() {
        return this._piece;
    }

    get heap() {
        return this._heap;
    }

    get isHost() {
        return this._isHost;
    }

    get hasLost() {
        return this._hasLost;
    }

    //Function SET 

    set heap(heap) {
        this._heap = heap;
    }

    set piece(piece) {
        this._piece = piece
    }

    set hasLost(bool) {
        this._hasLost = bool;
    }

    set isHost(bool) {
        this._isHost = bool;
    }

}