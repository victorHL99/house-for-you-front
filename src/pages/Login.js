/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import TextField from '@mui/material/TextField';
import { signIn } from '../services/authApi';
import * as S from '../styles/style';
import Loading from '../components/Loading/Loading';
import errorHandler from '../utils/errorHandler';

export default function Login() {
  const navigate = useNavigate();
  const [loadingLogin, setLoadingLogin] = useState('Login');
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  async function sendLogin(event) {
    event.preventDefault();
    setLoadingLogin(Loading.Login);
    try {
      const login = await signIn(userLogin.email, userLogin.password);
      localStorage.setItem('token', login.data.token);
      navigate('/home');
    } catch (error) {
      errorHandler(error);
      setLoadingLogin('Login');
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
            data-cy="email"
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
            data-cy="password"
            color="success"
            required
            onChange={e =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
          />
          <S.Button type="submit" data-cy="login_button">
            {loadingLogin}
          </S.Button>
        </S.SignForm>

        <Link to="/signup">
          <S.RedirectText>First time? Create an account!</S.RedirectText>
        </Link>
      </S.AuthContainer>
    </S.MainPage>
  );
}
