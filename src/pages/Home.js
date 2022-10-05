/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import Header from '../components/Header/Header';
import * as S from '../styles/style';

export default function Home() {
  const token = localStorage.getItem('token');

  async function getAnnouncements() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `http://localhost:9000/home/announcements`,
      config,
    );
    console.log(response);
  }
  return (
    <S.PageContainer>
      <Header />
      <h1>Home</h1>
      <button type="button" onClick={getAnnouncements}>
        Get announcements
      </button>
    </S.PageContainer>
  );
}
