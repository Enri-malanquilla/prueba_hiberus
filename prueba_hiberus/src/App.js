//React
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//hooks
import { useLocalStorage } from './hooks/useLocalStorage';

//pages and components
import { PageMain, PageUserList, PageUser } from './pages/index';
import { HeaderMain } from './components/index';
//css
import './App.css';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <HeaderMain />
        <Routes>
          <Route path='/' element={<PageMain />} />
          <Route path='/userlist' element={<PageUserList />} />
          <Route path='/user' element={<PageUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
