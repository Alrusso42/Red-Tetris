import Game from "./class.js";
import PLayer from "../Player/class.js";
import io from "../Socket/index.js";

const createNewRoom = (roomName, playerName) => {
    if (roomName.has(roomName)) {
        throw new Error("Une salle existe deja avec ce nom.");
    }

    const room = new Game(roomName);
    const player = new Player(playerName);
    player.isHost(true);
    return room;
}