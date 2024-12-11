// src/RoomPage.js
import "./RoomPage.css"
import React from 'react';
import { useSelector } from 'react-redux'; // Importer useSelector

const RoomPage = () => {
  const pseudo = useSelector((state) => state.pseudo.pseudo); // Accéder à la propriété 'pseudo'


  const rooms = ["Room 1", "Room 2", "Room 3"];

  return (
    <div className="room-page">
      <div className="header">
        <h2 className="pseudo">{pseudo}</h2>
        <button className="create-room">Create Room</button>
      </div>
      <div className="room-list"></div>
    </div>
  );
};

export default RoomPage;
