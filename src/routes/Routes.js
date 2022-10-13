/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NewAnnouncement from '../pages/NewAnnouncement';

export default function Router() {
  return (
    <Routes>
      {/* TODO create Signup */}
      {/* TODO create Login */}

      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/newAnnouncement" element={<NewAnnouncement />} />
    </Routes>
  );
}
