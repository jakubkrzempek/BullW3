import React, { useState } from 'react'
import './MinExercise.scss'
//hooks
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
import { useNavigate } from 'react-router-dom'

export const MinExercise = ({ exercise, prevExerciseId, day }) => {
    const [isHover, setIsHover] = useState(false)
    const { updateDocument } = useFirestore('users');
    const { user } = useAuthContext();
    const { document, error } = useDocument('users', user.uid)
    const navigate = useNavigate();

    const clickHandler = () => {
        const updatedDay = document.plan[day].map((ex) => {
            if (ex === prevExerciseId) return exercise.id;
            return ex;
        })

        updateDocument(user.uid, {
            [`plan.${day}`]: updatedDay
        })


        navigate('/planPreview');
    }
    return (
        <div className='minExercise card' onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
            {!isHover && <p className='name'>{exercise.name}</p>}
            {isHover && <button onClick={clickHandler} className='hoverButton'>zamień</button>}
            {isHover && <div className='hoverEl card'>
                <p className='nameHover'>{exercise.name}</p>
                <img className='imageMin' alt="exercisePhoto" />
                <p className='desc'>{exercise.description}</p>
                <div className='difficulty'>
                    <span>Poziom trudności:</span>
                    <p className={`difficulty${exercise.difficulty} `}><span></span></p>
                </div>
            </div>}
        </div>
    )
}
