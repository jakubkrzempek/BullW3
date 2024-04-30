import React, { useEffect, useState } from 'react'
import { projectStorage } from '../../firebase/config'
import wycisk1 from '../../assets/wycisk1.jpg'
import wycisk2 from '../../assets/wycisk2.jpg'
//scss
import './Exercise.scss'
//react-router
import { useParams } from 'react-router-dom'
//hooks
import { useDocument } from '../../hooks/useDocument'
import { useCollection } from '../../hooks/useCollection'
//components
import { MinExercise } from '../../components/minExercise/MinExercise'

export const Exercise = () => {
    const { id, day } = useParams();
    const { document, error } = useDocument('exercises', id);
    const { getDocument, isLoading } = useCollection();
    const [similar, setSimilar] = useState(null);
    //image
    const [imageUrl1, setImageUrl1] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');

    useEffect(() => {
        if (document) {
            getSimilarExercises();

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



    const getSimilarExercises = async () => {
        const doc = await getDocument('exercises', ['muscles', '==', document.muscles]);
        let result = doc.docs.map((doc) => {
            return doc.data();
        });
        result = result.filter((exercise) => {
            if (exercise.id !== document.id) return exercise;
            return null
        })
        setSimilar(result);


    }

    console.log(imageUrl1, imageUrl2)
    return document && (
        <div className='exercise'>

            <div className='content card'>
                <h2>{document.name}</h2>
                <p className='ang'>ang. {document.eName}</p>
                <div className="description">
                    <p>{document.description}</p>

                </div>
                <div className="muscles">
                    <p>Głównie angażuje: </p>
                    {document.muscles.map(muscle => {
                        return <span key={muscle}>{muscle}</span>
                    })}
                </div>
                <div className='difficulty'>
                    <span>Poziom trudności:</span>
                    <p className={`difficulty${document.difficulty} `}><span></span></p>
                </div>
                <ul className='advice'>
                    <span>porady:</span>
                    {document.advice.map((adv) => {
                        return <li className="card" key={adv}>{adv}</li>;
                    })}
                </ul>
            </div>
            <div className='image'>
                <img src={imageUrl1} alt="w1" />
                <img src={imageUrl2} alt="w1" />

            </div>
            {day && similar && similar.length !== 0 && <div className='similarExercises'>
                <h2>Propozycje ćwiczeń na które możesz je podmienić:</h2>
                {similar.map((exercise) => {
                    return <MinExercise key={exercise.id} exercise={exercise} prevExerciseId={document.id} day={day} photo={exercise.photo} />
                })}
            </div>}
        </div>

    )
}
