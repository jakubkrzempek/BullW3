import React from 'react'
//react-router

//components
import { ExerciseView } from '../../components/exerciseView/ExerciseView';
//userContext
import { useAuthContext } from '../../hooks/useAuthContext';
//hooks
import { useDocument } from '../../hooks/useDocument';
import './PlanPreview.scss'
export const PlanPreview = () => {


    const { user } = useAuthContext();
    const { document, error } = useDocument('users', user.uid)
    let divArray = null;
    let i = 0;
    if (document) { divArray = Array.from({ length: parseInt(document.plan.days) }, (_, index) => index + 1); }

    return (

        <div className='planPreview'>

            <h1>Twój Plan:</h1>
            {!error && <div className="days">
                {divArray && divArray.map((index) => {
                    i = -1;
                    return <div className='day' key={index}>
                        <p>dzień {index}</p>
                        <ul className='exercicesList'>
                            {document.plan[`day${index}`].map(exercise => {
                                i++;
                                return <ExerciseView key={exercise} exerciseId={exercise} setsReps={document.plan[`day${index}Sets`][i]} day={`day${index}`} />
                            })}
                        </ul>
                    </div>
                })}
            </div>}
            {error && <div className='error'>{error}</div>}

        </div>
    )
}
