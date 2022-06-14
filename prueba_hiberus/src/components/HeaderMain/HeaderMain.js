import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthTokenContext } from '../../App';

import './Header.css';

const HeaderMain = () => {
  const [token, setToken] = useContext(AuthTokenContext);

  const navigate = useNavigate();

  const cerrarSesion = (e) => {
    e.preventDefault();
    setToken('');
    navigate('/');
  };

  return (
    <header>
      <h1>Prueba Hiberus</h1>
      {!token && <p>tienes que logearte</p>}
      {token && (
        <nav>
          <ul>
            <li>
              <Link to={'/'} className='nav-header'>
                INICIO
              </Link>
            </li>
            <li>
              <Link to={'/userlist'} className='nav-header'>
                USUARIOS
              </Link>
            </li>
            <li>
              <Link to={'/user'} className='nav-header'>
                MI INFO
              </Link>
            </li>
            <li>
              <button onClick={cerrarSesion} className='nav-header'>
                CERRAR SESION
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export { HeaderMain };
