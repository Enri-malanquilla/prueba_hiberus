import { useContext, useEffect, useState } from 'react';
import { AuthTokenContext } from '../App';
import { api } from '../api/api';
import { CardsUsers } from '../components/CardsUsers/CardsUsers';

const PageUserList = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [count, setCount] = useState();
  const [token] = useContext(AuthTokenContext);

  useEffect(() => {
    api(
      'http://51.38.51.187:5050/api/v1/users',
      'GET',

      (data) => {
        return setDataUsers(data.items), setCount(data.count);
      },
      token
    );
  }, [token]);
  return (
    <section>
      <ul>
        {dataUsers.length > 0 &&
          dataUsers.map((user, index) => {
            return (
              <li key={index}>
                <CardsUsers
                  name={user.name}
                  surname={user.surname}
                  idUser={user.id}
                />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export { PageUserList };
