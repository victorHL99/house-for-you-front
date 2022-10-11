/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineHome } from 'react-icons/ai';

import TextField from '@mui/material/TextField';
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
    <S.MainPage>
      <S.AuthContainer>
        <S.LogoContainer>
          <AiOutlineHome size={130} />
          <h1>𝑯𝒐𝒖𝒔𝒆 𝑭𝒐𝒓 𝒀𝒐𝒖</h1>
        </S.LogoContainer>
        <S.SignForm onSubmit={sendLogin}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="text"
            name="email"
            color="success"
            required
            onChange={e =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            color="success"
            required
            onChange={e =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
          />
          <S.Button type="submit" variant="contained">
            Login
          </S.Button>
        </S.SignForm>

        <Link to="/signup">
          <S.RedirectText>First time? Create an account!</S.RedirectText>
        </Link>
      </S.AuthContainer>
    </S.MainPage>
  );
}
