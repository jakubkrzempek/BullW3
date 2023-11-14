import React from 'react'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
//assets
import logo from '../../assets/logo.svg'

//react router dom
import { Link } from 'react-router-dom'
//styles
import './NavBar.scss'
//context hook
import { useAuthContext } from '../../hooks/useAuthContext'
//hooks
import { useLogout } from '../../hooks/useLogout'
export const NavBar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    return (
        <nav className='navbar'>
            <ul>
                {/* <li className='logo'>
                    <img src={logo} alt="logo" />
                </li> */}
                <li className='name'>
                    <h1> <Link className='btn mainBtn' to="/">BULL W3</Link></h1>
                </li>

                {!user && <li className='login'>
                    <Link className='btn' to='/login'>Logowanie</Link>
                </li>}
                {!user && <li className='signup'>
                    <Link className='btn' to='/signup'>Rejestracja</Link>
                </li>}
                {user && <>

                    <li className='icon' ><FontAwesomeIcon style={{ color: '#116D6E', fontSize: '28px' }} icon={faUser} /></li>
                    <li className='displayName'>{user.displayName}</li>
                    <button onClick={logout} className='btn'>Wyloguj</button>
                </>}
            </ul>

        </nav >
    )
}
