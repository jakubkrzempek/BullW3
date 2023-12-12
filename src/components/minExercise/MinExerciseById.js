import React, { useState } from 'react'
import './MinExerciseById.scss'
import { useDocument } from '../../hooks/useDocument'
export const MinExerciseById = ({ exerciseId }) => {
    const { document, error } = useDocument('exercises', exerciseId);
    const [isHover, setIsHover] = useState(false);
    return document && (
        <div className='minExerciseById card' onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
            {!isHover && <p className='name'>{document.name}</p>}
            {isHover && <div className='hoverEl card'>
                <p className='nameHover'>{document.name}</p>
                <img className='imageMin' alt="exercisePhoto" />
                <p className='desc'>{document.description}</p>
                <div className='difficulty'>
                    <span>Poziom trudności:</span>
                    <p className={`difficulty${document.difficulty} `}><span></span></p>
                </div>
            </div>}
        </div>
    )
}
