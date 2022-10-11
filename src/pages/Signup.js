/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineHome } from 'react-icons/ai';
import TextField from '@mui/material/TextField';
import * as S from '../styles/style';

export default function Signup() {
  const navigate = useNavigate();
  const URL = `${process.env.REACT_APP_API_KEY}signup`;
  console.log(URL);
  const [userSignup, setUserSignup] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    profile_image: '',
  });

  async function createUser(event) {
    event.preventDefault();
    try {
      await axios.post(URL, userSignup);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.MainPage>
      <S.AuthContainer>
        <S.LogoContainer>
          <AiOutlineHome size={90} />
          <h1>𝑯𝒐𝒖𝒔𝒆 𝑭𝒐𝒓 𝒀𝒐𝒖</h1>
        </S.LogoContainer>
        <h2>Create your account Here!</h2>
        <S.SignForm onSubmit={createUser}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            type="text"
            name="name"
            color="success"
            required
            onChange={e =>
              setUserSignup({ ...userSignup, name: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            type="text"
            name="last_name"
            color="success"
            required
            onChange={e =>
              setUserSignup({ ...userSignup, last_name: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Email "
            variant="outlined"
            type="text"
            name="email"
            color="success"
            required
            onChange={e =>
              setUserSignup({ ...userSignup, email: e.target.value })
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
              setUserSignup({ ...userSignup, password: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Profile Image"
            variant="outlined"
            type="url"
            name="profile_image"
            color="success"
            required
            onChange={e =>
              setUserSignup({ ...userSignup, profile_image: e.target.value })
            }
          />

          <S.Button type="submit">Sign Up</S.Button>
        </S.SignForm>

        <Link to="/">
          <S.RedirectText>Switch back to log in</S.RedirectText>
        </Link>
      </S.AuthContainer>
    </S.MainPage>
  );
}
