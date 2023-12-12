import React, { useEffect, useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
//react-router
import { Link } from 'react-router-dom';

export const ExerciseView = ({ exerciseId, day, setsReps }) => {
    const { getDocument, isLoading } = useCollection();
    const [exercise, setExercises] = useState('');
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    useEffect(() => {
        async function fetchData() {
            const doc = await getDocument('exercises', ["id", "==", exerciseId]);
            const result = doc.docs.map((doc) => {
                return doc.data();
            });
            if (day && setsReps) {
                const doc2 = await getDocument('setsReps', ["id", "==", setsReps]);
                const result2 = doc2.docs.map((doc) => {
                    return doc.data();
                });

                setReps(result2[0].reps);
                setSets(result2[0].sets);
            }

            setExercises(result[0]);



        }
        fetchData();

    }, [])

    return (
        <>
            {!isLoading && exercise &&
                <li className='exerciseListItem'>
                    <Link to={`/exercise/${exercise.id}/${day}`}>{exercise.name}</Link>
                    {sets && <p>Ilość seri: <span>{sets}</span></p>}
                    {reps && <p>Ilość powtórzeń: <span>{reps}</span>  </p>}

                </li>}
            {isLoading && <li className='exerciseListItem'>ładowanie...</li>}
        </>
    )
}
