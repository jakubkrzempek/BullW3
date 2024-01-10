import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
//ikony
import logo from '../../assets/logo.svg'
import planIcon from '../../assets/plan-icon.png'
import generatorIcon from '../../assets/generator-icon.png'
import creatorIcon from '../../assets/creator-icon.png'
import recordIcon from '../../assets/record-icon.png'
import { useFirestore } from '../../hooks/useFirestore'
import data from '../../data/repsData.js'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDocument } from '../../hooks/useDocument';

export const Sidebar = ({ isActive }) => {
    const { addDocument } = useFirestore('setsReps');
    const { user } = useAuthContext();
    const { document, error } = useDocument('users', user.uid)

    const handleClick = (data) => {
        data.forEach((doc) => {
            addDocument(doc.id, doc);
        })

    }
    return (
        <div className={isActive ? "sidebar" : "sidebar off"}>
            <img className="logo" src={logo} alt="logo" />


            <NavLink to='/planPreview' className={document && 'plan' in document ? 'enable' : 'disable'}>
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

            <NavLink to='/record' className={document && 'plan' in document ? 'enable' : 'disable'}>
                <img src={recordIcon} alt="recordIcon" />
                <p>Rekordy</p>
            </NavLink>

            {/* <button onClick={() => { handleClick(data) }}>DODAJ DO BAZY</button> */}

        </div>
    )
}
