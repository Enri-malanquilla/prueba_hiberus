import { useContext, useEffect, useState } from 'react';
import { AuthTokenContext } from '../App';
import { api } from '../api/api';
import { CardsUsers } from '../components/CardsUsers/CardsUsers';

const PageUser = () => {
  const [dataUser, setDataUser] = useState({});
  const [token] = useContext(AuthTokenContext);

  useEffect(() => {
    api(
      'http://51.38.51.187:5050/api/v1/users/me',
      'GET',

      (data) => {
        setDataUser(data);
      },
      token
    );
  }, [token]);
  return (
    <section>
      {Object.values(dataUser).length > 0 && (
        <CardsUsers
          name={dataUser.name}
          surname={dataUser.surname}
          idUser={dataUser.id}
        />
      )}
    </section>
  );
};

export { PageUser };
