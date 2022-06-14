import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditCard } from '../EditCard/EditCard';
import { api } from '../../api/api';
import { AuthTokenContext } from '../../App';

export const Card = ({ name, surname, idUser }) => {
  const [token] = useContext(AuthTokenContext);
  const [modified, setModified] = useState(false);
  const navigate = useNavigate();

  const handleDeleteUser = () => {
    api(
      `http://51.38.51.187:5050/api/v1/users/${idUser}`,
      'DELETE',
      () => {},
      token
    );

    navigate('/userlist');
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    setModified(!modified);
  };

  return (
    <>
      {!modified && (
        <article>
          <h1>{name}</h1>
          <h2>{surname}</h2>
          <button onClick={handleDeleteUser} className='nav-header'>
            BORRAR
          </button>
          <button onClick={handleEditUser} className='nav-header'>
            MODIFICAR
          </button>
        </article>
      )}
      {modified && (
        <EditCard
          nameUser={name}
          surnameUser={surname}
          idUser={idUser}
          handleEditUser={handleEditUser}
        />
      )}
    </>
  );
};
