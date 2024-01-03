import React, { useEffect, useState } from 'react'
import './Creator.scss'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
//hooks
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
//components

import { MinExerciseById } from '../../components/minExercise/MinExerciseById'
import { projectFirestore } from '../../firebase/config'
const days = [
    { value: '1', label: 'jeden' },
    { value: '2', label: 'dwa' },
    { value: '3', label: 'trzy' },
    { value: '4', label: 'cztery' },
    { value: '5', label: 'pięć' }
]
const setsRepsOption = [
    { value: "AdditionalAdvancedBalanced", label: "4x8" },
    { value: "AdditionalAdvancedPhysique", label: "4x10" },
    { value: "AdditionalAdvancedStrength", label: "4x6" },
    { value: "AdditionalBeginnerBalanced", label: "2x10" },
    { value: "AdditionalBeginnerPhysique", label: "2x12" },
    { value: "AdditionalBeginnerStrength", label: "2x8" },
    { value: "AdditionalIntermediateBalanced", label: "3x9" },
    { value: "AdditionalIntermediatePhysique", label: "3x11" },
    { value: "AdditionalIntermediateStrength", label: "3x7" },
    { value: "MainAdvancedBalanced", label: "5x5" },
    { value: "MainAdvancedPhysique", label: "5x8" },
    { value: "MainAdvancedStrength", label: "3x6" },
    { value: "MainBeginnerBalanced", label: "3x8" },
    { value: "MainBeginnerPhysique", label: "3x10" },
    { value: "MainBeginnerStrength", label: "3x4" },
    { value: "MainIntermediateBalanced", label: "4x7" },
    { value: "MainIntermediatePhysique", label: "4x9" },
    { value: "MainIntermediateStrength", label: "4x4" }
]
export const Creator = () => {
    const [chooseDays, setChooseDays] = useState('');
    const [exercicesList, setExrciseList] = useState(null);
    const [plan, setPlan] = useState(null)
    const [setsReps, setSetsReps] = useState(null)
    const { getDocument } = useCollection('exercises');
    const navigate = useNavigate();
    const { user } = useAuthContext();
    //search
    const [showPopup, setShowPopup] = useState(0);
    const [inputSearch, setInputSearch] = useState('');
    const [filteredArray, setFilteredArray] = useState([]);
    const [alreadyExist, setAlreadyExist] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const doc = await getDocument('exercises');
            const result = doc.docs.map((doc) => {
                return doc.data();
            });
            setExrciseList(result);
        }
        fetchData();
    }, [])

    let divArray = null;
    if (chooseDays) { divArray = Array.from({ length: parseInt(chooseDays) }, (_, index) => index + 1); }


    const clickHandler = (day) => {
        setShowPopup(day);

    }
    const handleSearch = (event) => {
        if (exercicesList) {
            const searchTerm = event.target.value;
            const filtered = exercicesList.filter((exercise) => {
                return exercise.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
            setFilteredArray(filtered.slice(0, 10));
            setInputSearch(searchTerm);
        }
    }
    const pickExercise = (exercise) => {
        setAlreadyExist(false);


        setPlan((prevState) => {

            const newPlan = { ...prevState };
            let hasAlready = false;

            if (!newPlan.hasOwnProperty(`day${showPopup}`)) {
                newPlan[`day${showPopup}`] = [];
            } else {

                hasAlready = newPlan[`day${showPopup}`].includes(exercise.id);
            }

            if (!hasAlready) {
                newPlan[`day${showPopup}`] = [...newPlan[`day${showPopup}`], exercise.id];
                newPlan.days = chooseDays;

                return newPlan;
            }
            else {
                setAlreadyExist(true)
                return prevState
            }
        });


    };
    const changeDays = (value) => {
        const days = value;
        setPlan((prevState) => {
            const newPlan = { ...prevState };


            for (const key in newPlan) {
                if (key.startsWith('day') && Number(key.slice(3)) > days) {

                    delete newPlan[key];
                }
            }

            return newPlan;
        })

        setChooseDays(days);
    }
    const deleteExercise = (day, exercise, index) => {

        const updatedDay = plan[`day${day}`].filter((PlanExercise) => {
            return PlanExercise !== exercise;
        })

        setPlan((prevState) => {
            return {
                ...prevState,
                [`day${day}`]: updatedDay
            }
        })
        if (setsReps) {
            if (setsReps.hasOwnProperty(`day${day}Sets`)) {
                const updatedSetsReps = setsReps[`day${day}Sets`].filter((id, i) => {
                    return index !== i;
                })
                setSetsReps((prevState) => {
                    return {
                        ...prevState,
                        [`day${day}Sets`]: updatedSetsReps
                    }
                })
            }
        }
    }
    const confirmPlan = async (event) => {
        event.preventDefault();
        let emptyDaysError = false;

        for (let i = 1; i < chooseDays; i++) {
            if (!plan.hasOwnProperty(`day${i}`)) {
                emptyDaysError = true;

            }
        }
        // for (let i = 1; i < chooseDays; i++) {
        //     if (!setsReps.hasOwnProperty(`day${i}Sets`)) {
        //         emptySetsRepsError = true;
        //         return
        //     } else {
        //         setsReps[`day${i}Sets`].
        //     }
        // }
        if (!emptyDaysError) {
            await projectFirestore.collection('users').doc(user.uid).set({
                plan: { ...plan, ...setsReps }
            })
            navigate('/planPreview')
        }
    }
    const addSetsReps = (value, day, index) => {
        setSetsReps((prevState) => {

            const newSetsReps = { ...prevState };


            if (!newSetsReps.hasOwnProperty(`day${day}Sets`)) {
                newSetsReps[`day${day}Sets`] = [];
            }

            // if (newSetsReps[`day${day}Sets`].length <= index) {
            //     newSetsReps[`day${day}Sets`] = [...newSetsReps[`day${day}Sets`], value];
            // }
            // else {
            newSetsReps[`day${day}Sets`][index] = value;
            // }


            return newSetsReps;

        });

    }
    console.log(plan);
    return (
        <div className='creator'>

            <label>
                <span>Dni treningowe w tygodni:</span>
                <Select onChange={(option) => { changeDays(option.value) }} options={days} />
            </label>
            {chooseDays && <div className='plan'>
                {divArray && divArray.map((index) => {
                    return (
                        <div className='day'>
                            <h1>dzień {index}</h1>
                            {plan && plan.hasOwnProperty(`day${index}`) && <ul > {plan[`day${index}`].map((exercise, i) => {
                                return <li><MinExerciseById exerciseId={exercise} />
                                    <button className='delete' onClick={() => { deleteExercise(index, exercise, i) }}>Usuń</button>
                                    <span>serie X powtórzenia:</span>
                                    <Select onChange={(option) => { addSetsReps(option.value, index, i) }} options={setsRepsOption} />
                                </li>
                            })}</ul>}
                            <button onClick={() => clickHandler(index)}>Dodaj ćwiczenie:</button>

                        </div>
                    )


                })}

            </div>}

            {showPopup !== 0 && <div className="popup">WYBIERAJ CWICZENIE:
                <button onClick={() => setShowPopup(0)}>X</button>

                <input type="text" value={inputSearch} onChange={handleSearch} />
                <ul>
                    {filteredArray.length > 0 && filteredArray.map((exercise, index) => (
                        <li key={index} onClick={() => pickExercise(exercise)}>{exercise.name}</li>
                    ))}
                </ul>
                {alreadyExist && <span className='error'>Takie ćwiczenie już występuje tego dnia, wybierz inne!</span>}
            </div>}

            <button className='btn' onClick={(e) => { confirmPlan(e) }}>Gotowe</button>

        </div>
    )
}
