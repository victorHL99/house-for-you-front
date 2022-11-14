/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NewAnnouncement from '../pages/NewAnnouncement';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/newAnnouncement" element={<NewAnnouncement />} />
    </Routes>
  );
}
