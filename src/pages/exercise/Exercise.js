import React from 'react'
//scss
import './Exercise.scss'
//react-router
import { useParams } from 'react-router-dom'
//hooks
import { useDocument } from '../../hooks/useDocument'

export const Exercise = () => {
    const { id } = useParams();
    const { document, error } = useDocument('exercises', id);

    return document && (
        <div className='exercise'>
            <div className='content'>
                <p>{document.name}</p>
                <p>{document.eName}</p>
                <div className="description">
                    {document.description}
                </div>
                <p className='difficulty'>{document.difficulty}</p>
                <ul className='advice'>
                    {document.advice.map((adv) => {
                        return <li key={adv}>{adv}</li>;
                    })}
                </ul>
            </div><div className='image'>tu bedzie obrazek</div>

        </div>

    )
}
