import React, { useEffect, useState } from 'react'
import './Creator.scss'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
//hooks
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
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
    const [exerciseList, setExrciseList] = useState(null);
    const [plan, setPlan] = useState(null)
    const [setsReps, setSetsReps] = useState(null)
    const { getDocument } = useCollection('exercises');
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [error, setError] = useState(null);
    //search
    const [showPopup, setShowPopup] = useState(0);
    const [inputSearch, setInputSearch] = useState('');
    const [filteredArray, setFilteredArray] = useState([]);
    const [alreadyExist, setAlreadyExist] = useState(false);
    //user have plan
    const { document } = useDocument('users', user.uid);
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

    useEffect(() => {
        if (document && 'plan' in document) {
            setChooseDays(document.plan.days);
            setPlan(transformObject(document.plan));

        }
    }, [document])
    let divArray = null;
    if (chooseDays) { divArray = Array.from({ length: parseInt(chooseDays) }, (_, index) => index + 1); }


    const clickHandler = (day) => {
        setShowPopup(day);

    }
    const handleSearch = (event) => {
        if (exerciseList) {
            const searchTerm = event.target.value;
            const filtered = exerciseList.filter((exercise) => {
                return exercise.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
            setFilteredArray(filtered.slice(0, 10));
            setInputSearch(searchTerm);
        }
    }
    const pickExercise = (exercise) => {
        setError(null);
        setAlreadyExist(false);
        const exerciseId = exercise.id;

        setPlan((prevState) => {

            const newPlan = { ...prevState };


            const hasAlready = newPlan[`day${showPopup}`].find((item) => item.exercise === exerciseId);





            if (!hasAlready) {
                newPlan[`day${showPopup}`] = [...newPlan[`day${showPopup}`], { exercise: exerciseId, setsReps: null }];
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

            for (let i = 1; i <= days; i++) {
                if (!newPlan.hasOwnProperty(`day${i}`)) {
                    newPlan[`day${i}`] = [];
                }
            }

            return newPlan;
        })

        setChooseDays(days);
    }
    const deleteExercise = (day, exercise, index) => {

        const updatedDay = plan[`day${day}`].filter((PlanExercise) => {
            return PlanExercise.exercise !== exercise;
        })

        setPlan((prevState) => {
            return {
                ...prevState,
                [`day${day}`]: updatedDay
            }
        })
        // if (setsReps) {
        //     if (setsReps.hasOwnProperty(`day${day}Sets`)) {
        //         const updatedSetsReps = setsReps[`day${day}Sets`].filter((id, i) => {
        //             return index !== i;
        //         })
        //         setSetsReps((prevState) => {
        //             return {
        //                 ...prevState,
        //                 [`day${day}Sets`]: updatedSetsReps
        //             }
        //         })
        //     }
        // }
    }
    const confirmPlan = async (event) => {

        event.preventDefault();
        setError(null)

        let emptyDaysError = false;
        let setsRepsError = false;
        const isNull = value => value === null;
        // for (let i = 1; i < chooseDays; i++) {
        //     if (!plan.hasOwnProperty(`day${i}`)) {
        //         emptyDaysError = true;

        //     }
        // }
        // for (let i = 1; i < chooseDays; i++) {
        //     if (!setsReps.hasOwnProperty(`day${i}Sets`)) {
        //         emptySetsRepsError = true;
        //         return
        //     } else {
        //         setsReps[`day${i}Sets`].
        //     }
        // }

        //stworzenie dni
        let finalPlan = {};
        for (let i = 1; i <= chooseDays; i++) {
            if (!finalPlan.hasOwnProperty(`day${i}`)) {
                finalPlan[`day${i}`] = [];
            }
        }
        let finalSetsReps = {};
        for (let i = 1; i <= chooseDays; i++) {
            if (!finalSetsReps.hasOwnProperty(`day${i}Sets`)) {
                finalSetsReps[`day${i}Sets`] = [];
            }
        }



        //uzupełnienie nowych tablic danymi z state plan
        for (let i = 1; i <= chooseDays; i++) {
            let dayExercise = plan[`day${i}`].map((item) => {
                return item.exercise;
            })
            let daySetsReps = plan[`day${i}`].map((item) => {
                return item.setsReps;
            })
            finalPlan[`day${i}`] = dayExercise;
            finalSetsReps[`day${i}Sets`] = daySetsReps;
        }

        //walidacja
        for (let i = 1; i <= chooseDays; i++) {
            if (finalPlan[`day${i}`].length === 0) emptyDaysError = true;
            if (!setsRepsError) setsRepsError = finalSetsReps[`day${i}Sets`].some(isNull);
        }
        if (!emptyDaysError && !setsRepsError) {
            await projectFirestore.collection('users').doc(user.uid).update({
                plan: { ...finalPlan, ...finalSetsReps, days: chooseDays }
            })
            navigate('/planPreview')
        }



        if (emptyDaysError && setsRepsError) setError("Uzupełnij wszystkie dni lub zmień ilość oraz Wybierz ilość seri oraz powtórzeń dla wszystkich ćwiczeń!")
        else if (setsRepsError) setError("Wybierz ilość seri oraz powtórzeń dla wszystkich ćwiczeń!")
        else if (emptyDaysError) setError("Uzupełnij wszystkie dni lub zmień ilość!")
    }
    const addSetsReps = (value, exerciseId, day) => {
        setError(null);
        setPlan((prevState) => {

            const newPlan = { ...prevState };
            newPlan[`day${day}`] = newPlan[`day${day}`].map((item) => {
                if (item.exercise === exerciseId) {

                    return { ...item, setsReps: value };
                }
                return item;
            });


            return newPlan;
        });



    }
    const getSetsReps = (name) => {
        const result = setsRepsOption.map((item) => {
            if (item.value === name) return item.label;
        })
        return result;
    }
    function transformObject(oldObject) {
        const newObject = {};

        for (const key in oldObject) {
            if (key.startsWith('day') && Array.isArray(oldObject[key])) {
                const dayNumber = key.slice(3);
                const setsKey = `day${dayNumber}Sets`;

                if (oldObject[setsKey] && Array.isArray(oldObject[setsKey])) {
                    newObject[key] = oldObject[key].map((exercise, index) => ({
                        exercise,
                        setsReps: oldObject[setsKey][index] || 'DefaultSetsRepsValue'
                    }));
                }
            } else if (typeof oldObject[key] === 'object') {
                newObject[key] = transformObject(oldObject[key]);
            } else if (!key.endsWith('Sets')) {
                newObject[key] = oldObject[key];
            }
        }

        return newObject;
    }
    const resetPlan = () => {
        setChooseDays("")
        setPlan(null);

    }
    // console.log(plan);
    if (document) { console.log(transformObject(document.plan)) }
    return (
        <div className='creator'>

            <div className='menu'>
                <div className='label'>
                    <span>Dni treningowe w tygodni:</span>
                    <Select className="chooseDays" onChange={(option) => { changeDays(option.value) }} options={days} />
                </div>
                {chooseDays && plan && !error && <button className='btn resetPlan' onClick={(e) => { resetPlan(e) }}>Reset</button>}
                {chooseDays && plan && !error && <button className='btn confirmPlan' onClick={(e) => { confirmPlan(e) }}>Gotowe</button>}
            </div>

            {error && <p className='error'>{error}</p>}
            {chooseDays && <div className='plan'>
                {divArray && divArray.map((index) => {
                    return (
                        <div className='day'>
                            <h1>dzień {index}</h1>
                            {plan && plan.hasOwnProperty(`day${index}`) && <ul > {plan[`day${index}`].map((item, i) => {
                                return <li><MinExerciseById exerciseId={item.exercise} />
                                    <button className='delete' onClick={() => { deleteExercise(index, item.exercise, i) }}>Usuń</button>
                                    <span className='setsReps'>{getSetsReps(item.setsReps)}</span>
                                    <Select className='addExerciseInput' onChange={(option) => { addSetsReps(option.value, item.exercise, index) }} value={null} options={setsRepsOption} />
                                </li>
                            })}</ul>}
                            <button className="minExercise card addButton" onClick={() => clickHandler(index)}>Dodaj ćwiczenie:</button>

                        </div>
                    )


                })}

            </div>}

            {showPopup !== 0 && <div className="popupWrap">
                <div className="popup">
                    <p>Wybierz ćwiczenia:</p>
                    <button className='close-button' onClick={() => setShowPopup(0)}></button>

                    <input type="text" value={inputSearch} onChange={handleSearch} />
                    <ul>
                        {filteredArray.length > 0 && filteredArray.map((exercise, index) => (
                            <li key={index} onClick={() => pickExercise(exercise)}>{exercise.name}</li>
                        ))}
                    </ul>
                    {alreadyExist && <span className='error'>Takie ćwiczenie już występuje tego dnia, wybierz inne!</span>}
                </div>


            </div>}
        </div>
    )
}
