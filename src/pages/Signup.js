/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="First Name"
          onChange={e => setUserSignup({ ...userSignup, name: e.target.value })}
        />
        <input
          type="text"
          name="last_name"
          id="last_name"
          required
          placeholder="Last Name"
          onChange={e =>
            setUserSignup({ ...userSignup, last_name: e.target.value })
          }
        />
        <input
          type="text"
          name="email"
          id="email"
          required
          placeholder="Email"
          onChange={e =>
            setUserSignup({ ...userSignup, email: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
          onChange={e =>
            setUserSignup({ ...userSignup, password: e.target.value })
          }
        />
        <input
          type="url"
          name="profile_image"
          id="profileImage"
          required
          placeholder="profile image"
          onChange={e =>
            setUserSignup({ ...userSignup, profile_image: e.target.value })
          }
        />
        <button type="submit">Sign Up</button>
      </form>

      <Link to="/login">
        <span>Switch back to log in</span>
      </Link>
    </div>
  );
}
