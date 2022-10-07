/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import axios from 'axios';

import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';

import * as S from './style';

export default function Header() {
  const [menu, setMenu] = useState(true);
  const token = localStorage.getItem('token');

  async function getUserInfo() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      // TODO transform this URL in a .env variable
      `http://localhost:9000/user/`,
      config,
    );
    console.log(response.data);
    // TODO transform for userState
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('email', response.data.email);
    localStorage.setItem('lastName', response.data.last_name);
    localStorage.setItem('profileImage', response.data.profile_image);
  }

  function handleMenu() {
    setMenu(!menu);
  }

  getUserInfo();

  return (
    <S.Header>
      <h1>House For you</h1>
      <nav>
        <h2>Hello, {localStorage.getItem('name')} </h2>
        {menu ? (
          <BiChevronLeft onClick={handleMenu} />
        ) : (
          <BiChevronDown onClick={handleMenu} />
        )}
        <img
          src={localStorage.getItem('profileImage')}
          alt="profile Image"
          onClick={handleMenu}
        />
      </nav>
    </S.Header>
  );
}
