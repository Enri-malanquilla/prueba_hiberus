import { useContext } from 'react';
import { Link } from 'react-router-dom';
//hooks
import { AuthTokenContext } from '../App';
//components

const PageMain = () => {
  const [token] = useContext(AuthTokenContext);

  //handle fuction

  return (
    <>
      <p>INICIO</p>
      {!token ? (
        <nav>
          <ul>
            <li>
              <button>
                <Link to={'/sign-in'} className='nav-header'>
                  SIGN IN
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={'/log-in'} className='nav-header'>
                  {' '}
                  LOG IN
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <button>
                <Link to={'/userlist'} className='nav-header'>
                  USUARIOS
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={'/user'} className='nav-header'>
                  MI INFO
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export { PageMain };
