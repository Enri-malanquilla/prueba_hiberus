import React, { useContext, useState } from 'react';
import { AuthTokenContext } from '../../App';

//api
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
//css

export const EditCard = ({ nameUser, surnameUser, idUser, handleEditUser }) => {
  const [name, setName] = useState(nameUser);
  const [surname, setSurname] = useState(surnameUser);
  const [token] = useContext(AuthTokenContext);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      surname,
    };
    api(
      `http://51.38.51.187:5050/api/v1/users/${idUser}`,
      'PUT',
      () => {},
      token,
      data
    );
    navigate(0);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>nombre</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='surname'>apellido</label>
        <input
          type='text'
          name='surname'
          id='surname'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <button type='submit'>Enviar</button>
        <br />
        <br />
      </form>
      <button onClick={handleEditUser}>VOLVER</button>
    </>
  );
};
