/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as S from '../styles/style';

export default function Login() {
  const navigate = useNavigate();
  const URL = `${process.env.REACT_APP_API_KEY}login`;
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  async function sendLogin(event) {
    event.preventDefault();
    try {
      const login = await axios.post(URL, userLogin);
      console.log();
      localStorage.setItem('token', login.data.token);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.AuthContainer>
      <h1>House For You</h1>
      <h2>Hi, pleased to see you!</h2>
      <S.SignForm onSubmit={sendLogin}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          required
          onChange={e => setUserLogin({ ...userLogin, email: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          required
          onChange={e =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </S.SignForm>

      <Link to="/signup">
        <span>First time? Create an account!</span>
      </Link>
    </S.AuthContainer>
  );
}
