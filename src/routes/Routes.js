/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Signup from '../pages/Signup';

export default function Router() {
  return (
    <Routes>
      {/* TODO create Signup */}
      {/* TODO create Login */}

      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}
