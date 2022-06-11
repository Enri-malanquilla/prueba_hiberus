import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../../api/api';

export const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      surname: surname,
      email: email,
      password: password,
    };
    api('http://51.38.51.187:5050/api/v1/auth/sign-up', 'POST', body);
  };

  // if (token) {
  //   return <Navigate to='/' />;
  // }

  return (
    <>
      <h2>Registro</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>name</label>
        <input
          type='name'
          name='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='surname'>surname</label>
        <input
          type='surname'
          name='surname'
          id='surname'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
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
    </>
  );
};
