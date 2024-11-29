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
}