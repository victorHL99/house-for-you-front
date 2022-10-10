/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import * as S from './style';

export default function Header() {
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`${process.env.REACT_APP_API_KEY}user/`, config)
      .then(response => {
        console.log(response.data);
        // TODO transform for userState
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('lastName', response.data.last_name);
        localStorage.setItem('profileImage', response.data.profile_image);
        setShowHeader(true);
      })
      .catch(err => {
        console.log(err);
        navigate('/');
      });
  }, []);

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  function handleLogout() {
    navigate('/');
  }

  return (
    <>
      <S.Header>
        <h1>House For you</h1>
        {showHeader && (
          <nav>
            <h2>Welcome, {localStorage.getItem('name')} </h2>
            {menuIsOpen ? (
              <IoIosArrowDown onClick={handleMenu} cursor="pointer" />
            ) : (
              <IoIosArrowUp onClick={handleMenu} cursor="pointer" />
            )}
            <img
              // add reloader
              src={localStorage.getItem('profileImage')}
              alt="profile Image"
              onClick={handleMenu}
            />
          </nav>
        )}
      </S.Header>
      {menuIsOpen && (
        <S.DropdownMenu>
          {menuIsOpen && <div onClick={handleLogout}>Logout</div>}
        </S.DropdownMenu>
      )}
    </>
  );
}
