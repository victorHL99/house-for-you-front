/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { useNavigate } from 'react-router-dom';

import Header from '../components/Header/Header';
import * as S from '../styles/style';

export default function Home() {
  return (
    <S.PageContainer>
      <Header />
      <h1>Home</h1>
    </S.PageContainer>
  );
}
