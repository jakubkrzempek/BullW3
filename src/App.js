import { useState } from 'react';
//styles
import './App.scss';
//react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//pages
import { Intro } from './pages/intro/Intro.js'
import { Login } from './pages/login/Login.js'
import { Signup } from './pages/signup/Signup.js'
import { Home } from './pages/home/Home.js'
import { Generator } from './pages/generator/Generator.js'
import { Creator } from './pages/creator/Creator.js';
import { PlanPreview } from './pages/planPreview/PlanPreview.js';
import { Record } from './pages/record/Record.js';
//components
import { NavBar } from './components/navBar/NavBar.js';
import { Sidebar } from './components/sidebar/Sidebar.js';
//context
import { useAuthContext } from './hooks/useAuthContext';
import { Exercise } from './pages/exercise/Exercise.js';




function App() {
  const { isAuth, user } = useAuthContext();
  const [activeHamburger, setActiveHamburger] = useState(false);
  const toggleVisibility = () => {
    setActiveHamburger(!activeHamburger);
  };
  return (
    <div className='app'>
      {isAuth &&
        <BrowserRouter>

          {user && <Sidebar isActive={activeHamburger} />}
          <div className='main' style={!user ? { margin: '0' } : null}>
            <NavBar />
            <Routes>
              <Route path='/' element={user ? <Navigate to="/planPreview" /> : <Intro />} />
              <Route path='/login' element={user ? <Navigate to="/planPreview" /> : <Login />} />
              <Route path='/signup' element={user ? <Navigate to="/generator" /> : <Signup />} />
              <Route path='/home' element={!user ? <Navigate to="/login" /> : <PlanPreview />} />
              <Route path='/generator' element={!user ? <Navigate to="/login" /> : <Generator />} />
              <Route path='/creator' element={!user ? <Navigate to="/login" /> : <Creator />} />
              <Route path='/planPreview' element={!user ? <Navigate to="/login" /> : <PlanPreview />} />
              <Route path='/record' element={!user ? <Navigate to="/login" /> : <Record />} />
              <Route path='/exercise/:id/:day?' element={!user ? <Navigate to="/login" /> : <Exercise />} />
              <Route path='*' element={<Navigate to="/" />} />
            </Routes>

            {!activeHamburger && user && <i onClick={toggleVisibility} className="fa-solid fa-bars hamburger" > </i>}
            {activeHamburger && user && <i onClick={toggleVisibility} className="fa-solid fa-arrow-up hamburger"></i>}


          </div>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
