//styles
import './App.scss';
//react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//pages
import { Intro } from './pages/intro/Intro.js'
import { Login } from './pages/login/Login.js'
import { Signup } from './pages/signup/Signup.js'
import { Home } from './pages/home/Home.js'
//components
import { NavBar } from './components/navBar/NavBar.js'
//context
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const { isAuth, user } = useAuthContext();
  return (
    <div className='app'>
      {isAuth &&
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={user ? <Navigate to="/home" /> : <Intro />} />
            <Route path='/login' element={user ? <Navigate to="/home" /> : <Login />} />
            <Route path='/signup' element={user ? <Navigate to="/home" /> : <Signup />} />
            <Route path='/home' element={!user ? <Navigate to="/login" /> : <Home />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
