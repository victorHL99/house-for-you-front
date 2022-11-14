/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Header from '../components/Header/Header';
import Announcement from '../components/Announcements/Announcement';
import * as S from '../styles/style';
import CodeImage from '../assets/CodeImage';

export default function Home() {
  // const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [permission, setPermission] = useState();
  const [announcements, setAnnouncements] = useState({});
  const [showAnnouncements, setShowAnnouncements] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_KEY}home/announcements`, config)
      .then(response => {
        setAnnouncements(response.data);
        setShowAnnouncements(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
        setPermission(response.data.permission_granted);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(permission);

  function renderAnnouncements() {
    return announcements.map((announcement, index) => (
      <Announcement key={index} announcement={announcement} />
    ));
  }

  return (
    <IconContext.Provider value={({ color: '' }, { size: '3em' })}>
      <S.PageContainer>
        <Header />
        <S.LabelContainer>
          <S.PageLabel>Announce</S.PageLabel>
          {permission ? (
            <AiOutlinePlus
              color="#01FF82"
              cursor="pointer"
              // onClick={() => navigate('/newAnnouncement')}
            />
          ) : null}
        </S.LabelContainer>
        <CodeImage />
        <div>{showAnnouncements ? renderAnnouncements() : 'Carregando...'}</div>
      </S.PageContainer>
    </IconContext.Provider>
  );
}
