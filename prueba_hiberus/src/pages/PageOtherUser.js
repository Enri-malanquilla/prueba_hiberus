import { useContext, useEffect, useState } from 'react';
import { AuthTokenContext } from '../App';
import { api } from '../api/api';
import { useParams } from 'react-router-dom';
import { Card } from '../components/card/Card';

const PageOtherUser = () => {
  const { id } = useParams();
  const [dataUser, setDataUser] = useState({});
  const [token] = useContext(AuthTokenContext);

  useParams();

  useEffect(() => {
    api(
      `http://51.38.51.187:5050/api/v1/users/${id}`,
      'GET',

      (data) => {
        setDataUser(data);
      },
      token
    );
  }, [token, id]);
  return (
    <section>
      {Object.values(dataUser).length > 0 && (
        <Card
          name={dataUser.name}
          surname={dataUser.surname}
          idUser={dataUser.id}
        />
      )}
    </section>
  );
};

export { PageOtherUser };
