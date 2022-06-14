import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthTokenContext } from '../App';

//api
import { api } from '../api/api';
//css
import './styles/log-in.css';
export const PageLogIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useContext(AuthTokenContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const handleServerResponse = (body) => {
      setToken(body.accessToken);
    };
    api(
      'http://51.38.51.187:5050/api/v1/auth/log-in',
      'POST',
      handleServerResponse,
      undefined,
      data
    );
  };

  if (token) {
    return <Navigate to='/' />;
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>email</label>
        <input
          type='text'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Enviar</button>
        <br />
        <br />
      </form>
      <button>
        <Link to={'/sign-in'} className='nav-header'>
          SIGN IN
        </Link>
      </button>
    </>
  );
};
