import React, {useState} from "react";
import store from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";


function CreateRoom(props) {

    const [roomNameInput, setroomNameInput] = useState('');
    const dispatch = useDispatch();
    


    return (
        <div className="popup">
            <label htmlFor="roomName" className="input-roomLabel">Entrez le nom de la room</label>
            <input
            type = "text"
            id = "roomName"
            className = "input-box"
            placeholder = "Nom de la room..."
            value = {roomNameInput}
            onChange={(e) => setroomNameInput(e.target.value)} />

        </div>
    )
}