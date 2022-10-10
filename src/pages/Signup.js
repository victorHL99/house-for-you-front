/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
    <S.AuthContainer>
      <h1>House For You</h1>
      <h2>Create your account Here!</h2>
      <S.SignForm onSubmit={createUser}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          type="text"
          name="name"
          required
          onChange={e => setUserSignup({ ...userSignup, name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          type="text"
          name="last_name"
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
          required
          onChange={e =>
            setUserSignup({ ...userSignup, profile_image: e.target.value })
          }
        />

        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </S.SignForm>

      <Link to="/">
        <span>Switch back to log in</span>
      </Link>
    </S.AuthContainer>
  );
}
