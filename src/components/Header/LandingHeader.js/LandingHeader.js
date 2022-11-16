/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import * as S from './style';
import Logo from '../../../assets/LadingPageImages/logoHouseforYou.png';

export default function LandingHeader() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(prev => !prev);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function handleLogin() {
    navigate('/login');
  }

  function handleSignup() {
    navigate('/signup');
  }
  return (
    <S.Header>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={toggleModal}
        style={S.customStyles}
        contentLabel="Modal"
      >
        <S.BoxModal>
          <S.TitleModal>Do you already have an account?</S.TitleModal>
          <S.ButtonModal onClick={handleLogin}>Login</S.ButtonModal>
          <S.TitleModal>Or</S.TitleModal>
          <S.TitleModal>Do you want to create an account?</S.TitleModal>
          <S.ButtonModal onClick={handleSignup}>Join Us</S.ButtonModal>
        </S.BoxModal>
      </Modal>

      <S.BoxLabel>
        <S.Logo src={Logo} />
      </S.BoxLabel>
      <S.BoxMenuOptions>
        <S.MenuOptions>HOME</S.MenuOptions>
        <S.MenuOptions>ABOUT</S.MenuOptions>
        <S.MenuOptions>CONTACT</S.MenuOptions>
        <S.LoginButton onClick={toggleModal}>Join Us</S.LoginButton>
      </S.BoxMenuOptions>
    </S.Header>
  );
}
