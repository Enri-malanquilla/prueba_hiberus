//React
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//hooks
import { useLocalStorage } from './hooks/useLocalStorage';

//pages and components
import { PageMain, PageUserList, PageUser } from './pages/index';
import { HeaderMain } from './components/index';
//css
import './App.css';

//context
export const AuthTokenContext = React.createContext('');

const AuthTokenProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('', 'accessToken');
  return (
    <AuthTokenContext.Provider value={[token, setToken]}>
      {children}
    </AuthTokenContext.Provider>
  );
};
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthTokenProvider>
          <HeaderMain />
          <Routes>
            <Route path='/' element={<PageMain />} />
            <Route path='/userlist' element={<PageUserList />} />
            <Route path='/user' element={<PageUser />} />
          </Routes>
        </AuthTokenProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
