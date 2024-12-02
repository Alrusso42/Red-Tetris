// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import RoomPage from './components/Rooms/RoomPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<ProtectedRoute>
          <RoomPage />
          </ProtectedRoute>} />
      </Routes>    
  );
};

export default App;
