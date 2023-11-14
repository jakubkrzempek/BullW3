import React, { useState } from 'react'
import './Generator.scss'
//react-select
import Select from 'react-select'

//options
const days = [
    { value: '1', label: 'jeden' },
    { value: '2', label: 'dwa' },
    { value: '3', label: 'trzy' },
    { value: '4', label: 'cztery' },
    { value: '5', label: 'pięć' }
]

const sex = [
    { value: 'male', label: 'mężczyzna' },
    { value: 'female', label: 'kobieta' }
]

const purpose = [
    { value: 'strength', label: 'siła' },
    { value: 'physque', label: 'sylwetka' },
    { value: 'balanced', label: 'zbilansowany' }
]

const advanced = [
    { value: 'beginner', label: 'początkujący' },
    { value: 'intermidiate', label: 'średnio-zaawansowany' },
    { value: 'advanced', label: 'zaawansowany' }
]

const priority = [
    { value: 'chest', label: 'klatka' },
    { value: 'back', label: 'plecy' },
    { value: 'legs', label: 'nogi' },
    { value: 'glute', label: 'pośladki' },
    { value: 'none', label: 'brak' }
]


export const Generator = () => {
    const [chooseDays, setChooseDays] = useState('');
    const [chooseSex, setChooseSex] = useState('');
    const [choosePurpose, setChoosePurpose] = useState('');
    const [chooseAdvanced, setChooseAdvanced] = useState('');
    const [choosePrioryty, setChoosePrioryty] = useState('');

    return (
        <div className='generator'>
            <form >
                <label>
                    <span>Ile razy w tygodniu chcesz trenować?</span>
                    <Select onChange={(option) => { setChooseDays(option) }} options={days} />
                </label>

                <label>
                    <span>Płeć:</span>
                    <Select onChange={(option) => { setChooseSex(option) }} options={sex} />
                </label>

                <label>
                    <span>Cel twoich treningów:</span>
                    <Select onChange={(option) => { setChoosePurpose(option) }} options={purpose} />
                </label>

                <label>
                    <span>Twoje zaawansowanie:</span>
                    <Select onChange={(option) => { setChooseAdvanced(option) }} options={advanced} />
                </label>

                <label>
                    <span>Twój priorytet:</span>
                    <Select onChange={(option) => { setChoosePrioryty(option) }} options={priority} />
                </label>
                <button className='btn'>Gotowe!</button>
            </form>

            <div className='info'>
                <p>Podpowiedzi: </p>
                <ul>
                    <li>Jeżeli jesteś początkujący:   </li>
                    <li>Zalecane jest nie wybierać większej ilości treningów niż 3</li>
                    <li>Brak priorytetu jeżeli jedna z twoich parti ewidentnie nie odstaje na tle innych.</li>
                </ul>
            </div>
        </div>
    )
}
