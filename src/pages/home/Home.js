import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

export const Home = () => {
    const { userData } = useAuthContext();
    return (userData &&
        <div className='home'>
            {userData.plan && <Link to='/planPreview'>
                <p>
                    TWOJ PLAN
                </p>
            </Link>}
        </div>
    )
}
