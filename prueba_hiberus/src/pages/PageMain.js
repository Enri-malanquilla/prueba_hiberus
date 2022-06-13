import { useContext, useState } from 'react';
//hooks
import { AuthTokenContext } from '../App';
//components
import { LogIn, SignIn } from '../components/index';

const PageMain = () => {
  const [token] = useContext(AuthTokenContext);
  const [activateSignIn, setActivateSignIn] = useState(false);
  const [activateLogIn, setActivateLogIn] = useState(false);

  //handle fuction

  return (
    <>
      <p>inicio</p>
      {(!token || activateLogIn || activateSignIn) && (
        <section>
          <button>sign in</button>
          <button>log in</button>
        </section>
      )}
      <LogIn />
      {/* <SignIn /> */}
    </>
  );
};

export { PageMain };
