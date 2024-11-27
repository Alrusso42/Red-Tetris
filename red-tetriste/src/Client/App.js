// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import RoomPage from './components/Rooms/RoomPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rooms" element={<RoomPage />} />
    </Routes>
  );
};

export default App;
