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
      <p>inicio</p>
      {!token ? (
        <nav>
          <ul>
            <li>
              <button>
                <Link to={'/sign-in'}>SIGN IN</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={'/log-in'}> LOG IN</Link>
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <button>
                <Link to={'/userlist'}>USUARIOS</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={'/user'}>MI INFO</Link>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export { PageMain };
