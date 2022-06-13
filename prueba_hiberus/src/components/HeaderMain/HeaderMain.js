import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthTokenContext } from '../../App';

const HeaderMain = () => {
  const [token] = useContext(AuthTokenContext);
  return (
    <header>
      <h1>Prueba Hiberus</h1>
      {!token && <p>tienes que logearte</p>}
      {token && (
        <nav>
          <ul>
            <li>
              <Link to={'/'}>INICIO</Link>
            </li>
            <li>
              <Link to={'/userlist'}>USUARIOS</Link>
            </li>
            <li>
              <Link to={'/user'}>MI INFO</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export { HeaderMain };
