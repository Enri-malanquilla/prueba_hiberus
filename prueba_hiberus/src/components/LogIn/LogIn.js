import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { AuthTokenContext } from '..';

//api
import { api } from '../../api/api';

export const LogIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useContext(AuthTokenContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    api(
      'http://51.38.51.187:5050/api/v1/auth/log-in',
      'POST',
      body,
      setToken(body.accessToken)
    );
  };

  if (token) {
    return <Redirect to='/' />;
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
        <div>debug: token = {token}</div>
        <br />
        <br />
      </form>
    </>
  );
};
