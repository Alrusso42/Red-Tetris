// src/RoomPage.js
import React from 'react';
import { useSelector } from 'react-redux'; // Importer useSelector

const RoomPage = () => {
  const pseudo = useSelector((state) => state.pseudo.pseudo); // Accéder à la propriété 'pseudo'


  const rooms = ["Room 1", "Room 2", "Room 3"];

  return (
    <div className="room-page">
      <h1>Bienvenue {pseudo} !</h1>
      <h2>Choisissez une room :</h2>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>
            <button>{room}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomPage;
