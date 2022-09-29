/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const URL = 'http://localhost:9000/login';
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  async function sendLogin(event) {
    event.preventDefault();
    try {
      await axios.post(URL, userLogin);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={sendLogin}>
        <input
          type="text"
          name="email"
          id="email"
          required
          placeholder="Email"
          onChange={e => setUserLogin({ ...userLogin, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
          onChange={e =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
        <button type="submit">Sign Up</button>
      </form>

      <Link to="/signup">
        <span>First time? Create an account!</span>
      </Link>
    </div>
  );
}
