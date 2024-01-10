import React from 'react'
import './Record.scss';
import { useDocument } from '../../hooks/useDocument';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
export const Record = () => {
    const { user } = useAuthContext();
    const { document, error } = useDocument('users', user.uid)
    const navigate = useNavigate();
    const moveToPlanPreview = () => {
        navigate('/planPreview')
    }

    if (document && 'record' in document) {
        return document && (
            <div className='record'>
                <ul>
                    {document.record.map((item, index) => {
                        const animationClass = index % 2 === 0 ? 'slide-in-right' : 'slide-in-left';

                        return <li key={item.name} className={animationClass}>
                            <div className='name'>{item.name}</div>
                            <div className='kg'>{item.record} KG</div>
                        </li>
                    })}
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <span>Nie masz jeszcze zadnych rekordów</span>
                <button onClick={moveToPlanPreview}>dodaj rekordy</button>
            </div>
        )
    }
}
