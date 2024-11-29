import Room from "./class.js";
import io from "../Socket/index.js";

const rooms = new Map()

const createNewRoom = (roomName, player) => {
    if (roomName.has(roomName)) {
        throw new Error("Une salle existe deja avec ce nom.");
    }

    const room = new Room(roomName);
    rooms.set(roomName, room);

    io.emit("newRoomCreated", {
        name: roomName,
        players: room.players.push(player),
        status: room.status,
        countPlayers: room.countPlayers,
        mode: room.mode,
        isPrivate:room.isPrivate,
    });

    return room;
}