import Game from "./class.js";
import Player from "../Player/class.js";

const rooms = new Map()

const createNewRoom = (roomName, playerName, rooms) => {
    if (roomName.has(roomName)) {
        throw new Error("Une salle existe deja avec ce nom.");
    }

    const room = new Game(roomName);
    const player = new Player(playerName);
    player.isHost(true);
    room._players.push(playerName);
    rooms.set(roomName, roon);

    return room;
}

const updateRoom = (room, io) => {
    io.emit("UpdateRoom", {
        roomName: room._roomname,
        players: room._players.map((p) => p._name),
        coutPlayers: room._countPlayers,
        status: room._status,
    });
}