import React, { useEffect, useState } from 'react'
import './Creator.scss'
import Select from 'react-select'
//hooks
import { useCollection } from '../../hooks/useCollection'
//components

import { MinExerciseById } from '../../components/minExercise/MinExerciseById'
const days = [
    { value: '1', label: 'jeden' },
    { value: '2', label: 'dwa' },
    { value: '3', label: 'trzy' },
    { value: '4', label: 'cztery' },
    { value: '5', label: 'pięć' }
]
export const Creator = () => {
    const [chooseDays, setChooseDays] = useState('');
    const [exercicesList, setExrciseList] = useState(null);
    const [plan, setPlan] = useState(null)
    const { getDocument } = useCollection('exercises');

    //search
    const [showPopup, setShowPopup] = useState(0);
    const [inputSearch, setInputSearch] = useState('');
    const [filteredArray, setFilteredArray] = useState([]);


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


        setPlan((prevState) => {

            const newPlan = { ...prevState };


            if (!newPlan.hasOwnProperty(`day${showPopup}`)) {
                newPlan[`day${showPopup}`] = [];
            }


            newPlan[`day${showPopup}`] = [...newPlan[`day${showPopup}`], exercise.id];
            newPlan.days = chooseDays;

            return newPlan;

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
    const deleteExercise = (day, exercise) => {

        const updatedDay = plan[`day${day}`].filter((PlanExercise) => {
            return PlanExercise !== exercise;
        })
        setPlan((prevState) => {
            return {
                ...prevState,
                [`day${day}`]: updatedDay
            }
        })
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
                                return <li><MinExerciseById exerciseId={exercise} /><button className='delete' onClick={() => { deleteExercise(index, exercise) }}>Usuń</button></li>
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
            </div>}
            <button className='btn'>Gotowe</button>
        </div>
    )
}
