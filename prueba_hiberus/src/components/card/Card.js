import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../../api/api';
import { AuthTokenContext } from '../../App';

export const Card = ({ name, surname, idUser }) => {
  const [token] = useContext(AuthTokenContext);

  const handleDeleteUser = () => {
    api(
      `http://51.38.51.187:5050/api/v1/users/${idUser}`,
      'DELETE',
      () => {},
      token
    );

    <Navigate to={'/userlist'} />;
  };

  return (
    <article>
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <button onClick={handleDeleteUser}>BORRAR</button>
      <button>MODIFICAR</button>
    </article>
  );
};
