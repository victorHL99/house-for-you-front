/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header/Header';
import Announcement from '../components/Announcements/Announcement';
import * as S from '../styles/style';

export default function Home() {
  const token = localStorage.getItem('token');
  const [announcements, setAnnouncements] = useState({});
  const [showAnnouncements, setShowAnnouncements] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_KEY}/home/announcements`, config)
      .then(response => {
        setAnnouncements(response.data);
        setShowAnnouncements(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function renderAnnouncements() {
    return announcements.map((announcement, index) => (
      <Announcement key={index} announcement={announcement} />
    ));
  }

  return (
    <S.PageContainer>
      <Header />
      <S.PageLabel>Announce</S.PageLabel>
      <div>{showAnnouncements ? renderAnnouncements() : 'Carregando...'}</div>
    </S.PageContainer>
  );
}
