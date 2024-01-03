import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
//ikony
import logo from '../../assets/logo.svg'
import planIcon from '../../assets/plan-icon.png'
import generatorIcon from '../../assets/generator-icon.png'
import creatorIcon from '../../assets/creator-icon.png'
import { useFirestore } from '../../hooks/useFirestore'
import data from '../../data/repsData.js'
export const Sidebar = () => {
    const { addDocument } = useFirestore('setsReps');

    const handleClick = (data) => {
        data.forEach((doc) => {
            addDocument(doc.id, doc);
        })

    }
    return (
        <div className='sidebar'>
            <img src={logo} alt="logo" />


            <NavLink to='/planPreview'>
                <img src={planIcon} alt="planIcon" />
                <p>Mój plan</p>

            </NavLink>



            <NavLink to='/generator' >
                <img src={generatorIcon} alt="generatorIcon" />
                <p>Generator planu treningowego</p>
            </NavLink>




            <NavLink to='/creator'>
                <img src={creatorIcon} alt="creatorIcon" />
                <p>Kreator planu treningowego</p>
            </NavLink>

            <button onClick={() => { handleClick(data) }}>DODAJ DO BAZY</button>

        </div>
    )
}
