import React, { useState, useEffect } from 'react'
import './MinExerciseById.scss'
import { useDocument } from '../../hooks/useDocument'
import { projectStorage } from '../../firebase/config'
export const MinExerciseById = ({ exerciseId }) => {
    const { document, error } = useDocument('exercises', exerciseId);
    const [isHover, setIsHover] = useState(false);
    const [imageUrl1, setImageUrl1] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');

    useEffect(() => {
        if (document) {
            const imageRef1 = projectStorage.ref(`${document.photo}/1.jpg`);
            imageRef1.getDownloadURL().then(url => {
                setImageUrl1(url);
            }).catch(error => {
                // Obsłuż błąd pobierania adresu URL
                console.error('Error getting download URL:', error);
            });
            const imageRef2 = projectStorage.ref(`${document.photo}/2.jpg`);
            imageRef2.getDownloadURL().then(url => {
                setImageUrl2(url);
            }).catch(error => {
                // Obsłuż błąd pobierania adresu URL
                console.error('Error getting download URL:', error);
            });
        }
    }, [document])
    return document && (
        <div className='minExerciseById card' onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
            {!isHover && <p className='name'>{document.name}</p>}
            {isHover && <div className='hoverEl card'>
                <p className='nameHover'>{document.name}</p>
                <div className="photo">
                    <img src={imageUrl1} className='imageMin' alt="exercisePhoto" />
                    <img src={imageUrl2} className='imageMin' alt="exercisePhoto" />
                </div>

                <p className='desc'>{document.description}</p>
                <div className='difficulty'>
                    <span>Poziom trudności:</span>
                    <p className={`difficulty${document.difficulty} `}><span></span></p>
                </div>
            </div>}
        </div>
    )
}
