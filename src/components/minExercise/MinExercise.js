import React, { useEffect, useState } from 'react'
import './MinExercise.scss'
//hooks
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
import { useNavigate } from 'react-router-dom'
import { projectStorage } from '../../firebase/config'
export const MinExercise = ({ exercise, prevExerciseId, day, photo }) => {
    const [isHover, setIsHover] = useState(false)
    const { updateDocument } = useFirestore('users');
    const { user } = useAuthContext();
    const { document, error } = useDocument('users', user.uid)
    //image
    const [imageUrl1, setImageUrl1] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const imageRef1 = projectStorage.ref(`${photo}/1.jpg`);
        imageRef1.getDownloadURL().then(url => {
            setImageUrl1(url);
        }).catch(error => {
            // Obsłuż błąd pobierania adresu URL
            console.error('Error getting download URL:', error);
        });
        const imageRef2 = projectStorage.ref(`${photo}/2.jpg`);
        imageRef2.getDownloadURL().then(url => {
            setImageUrl2(url);
        }).catch(error => {
            // Obsłuż błąd pobierania adresu URL
            console.error('Error getting download URL:', error);
        });
    }, [])
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
                <div className="photo">
                    <img src={imageUrl1} className='imageMin' alt="exercisePhoto" />
                    <img src={imageUrl2} className='imageMin' alt="exercisePhoto" />
                </div>

                <p className='desc'>{exercise.description}</p>
                <div className='difficulty'>
                    <span>Poziom trudności:</span>
                    <p className={`difficulty${exercise.difficulty} `}><span></span></p>
                </div>
            </div>}
        </div>
    )
}
