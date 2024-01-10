import React, { useEffect, useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { projectFirestore } from '../../firebase/config';
//react-router
import { Link } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import { useAuthContext } from '../../hooks/useAuthContext';

export const ExerciseView = ({ exerciseId, day, setsReps }) => {
    const { getDocument, isLoading } = useCollection();
    const [exercise, setExercises] = useState('');
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [record, setRecord] = useState("");
    const [showChangeRecord, setShowChangeRecord] = useState(false);

    const { user } = useAuthContext();
    const { document, error } = useDocument('users', user.uid)


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

    useEffect(() => {
        if (showChangeRecord) {
            const timeoutId = setTimeout(() => {
                setShowChangeRecord(false);
            }, 5000);

            // Anuluj timeout po odmontowaniu komponentu lub zmianie showPopup
            return () => clearTimeout(timeoutId);
        }
    }, [showChangeRecord]);

    const submitRecord = async () => {
        setShowChangeRecord(false);
        let recordArray = [];
        if (document.hasOwnProperty('record')) {
            recordArray = document.record;

        }

        // console.log(recordArray)
        let isExist = false;
        recordArray = recordArray.map((item) => {
            if (item.exercise === exercise.id) {
                isExist = true;
                return { ...item, record: record }
            }
            return item;
        })


        if (!isExist) {
            recordArray.push({ exercise: exercise.id, name: exercise.name, record: record });
        }

        await projectFirestore.collection('users').doc(user.uid).update({
            record: recordArray
        })



        // record =[
        //     {exercise:abs1,record:"234"},
        //     {exercise:abs1,record:"234"},
        // ]
    }
    const getCurrentRecord = () => {
        if (document.hasOwnProperty('record')) {
            const record = document.record.find((item) => {
                return item.exercise === exercise.id;
            })
            if (record) return record.record;
            else return "---"

        }

        else return "---"
    }
    return (
        <>
            {!isLoading && exercise &&
                <li className='exerciseListItem'>
                    <Link className='item1' to={`/exercise/${exercise.id}/${day}`}>{exercise.name}</Link>
                    <div className='item2'>
                        {/* <span onClick={() => setShowChangeRecord(prevState => !prevState)}>Rekord: {getCurrentRecord()}kg</span>
                        {showChangeRecord && <div className="popUp">
                            <input type="number" min="1" value={record} onChange={(e) => { setRecord(e.target.value) }} />
                            <button onClick={() => { submitRecord(); setShowChangeRecord(false) }} >Zmień</button>
                        </div>}
 */}
                        <span onClick={() => setShowChangeRecord(prevState => !prevState)}>Rekord: {getCurrentRecord()}kg</span>
                        {showChangeRecord && <div className="popUp">
                            <input type="number" min="1" value={record} onChange={(e) => { setRecord(e.target.value) }} />
                            <button onClick={() => { submitRecord(); setShowChangeRecord(false) }} >Zmień</button>
                        </div>}

                    </div>
                    {sets && <p className='item3'>Ilość seri: <span>{sets}</span></p>}
                    {reps && <p className='item4'>Ilość powtórzeń: <span>{reps}</span>  </p>}

                </li>}
            {isLoading && <li className='exerciseListItem'>ładowanie...</li>}
        </>
    )
}
