import React, { useEffect, useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
//react-router
import { Link } from 'react-router-dom';
export const ExerciseView = ({ exerciseId }) => {
    const { getDocument, isLoading } = useCollection();
    const [exercise, setExercises] = useState('');

    useEffect(() => {
        async function fetchData() {
            const doc = await getDocument('exercises', ["id", "==", exerciseId]);
            const result = doc.docs.map((doc) => {
                return doc.data();
            });
            setExercises(result[0]);


        }
        fetchData();

    }, [])

    return (
        <>
            {!isLoading && exercise &&
                <li className='exerciseListItem'>
                    <Link to={`/exercise/${exercise.id}`}>{exercise.name}</Link>

                </li>}
            {isLoading && <span>ładowanie...</span>}
        </>
    )
}
