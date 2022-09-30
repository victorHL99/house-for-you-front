/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Signup() {
  const navigate = useNavigate();
  const URL = 'http://localhost:9000/signup';
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
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={createUser}>
        {/* TODO NAME */}
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          type="text"
          name="name"
          required
          onChange={e => setUserSignup({ ...userSignup, name: e.target.value })}
        />
        {/* TODO LAST NAME */}
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
        {/* TODO EMAIL */}
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          required
          onChange={e =>
            setUserSignup({ ...userSignup, email: e.target.value })
          }
        />
        {/* TODO PASSWORD */}
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
        {/* TODO PROFILE_iMAGE */}
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
      </form>

      <Link to="/login">
        <span>Switch back to log in</span>
      </Link>
    </div>
  );
}