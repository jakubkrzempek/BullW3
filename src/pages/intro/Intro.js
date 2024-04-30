import React from 'react'
import './Intro.scss'
import { Link } from 'react-router-dom'
export const Intro = () => {
    return (
        <div className='intro'>
            <main>
                <div className='tags'>
                    <h1>Rewolucja nadeszła!</h1>
                    <h3>Generator Planów Treningowych</h3>
                </div>
                <Link to="/signup" className='btn'>
                    Zacznij już dziś
                </Link>
            </main>
        </div>

    )
}
