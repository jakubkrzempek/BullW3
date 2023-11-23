import React, { useState } from 'react'
import './Generator.scss'
//react router
import { useNavigate } from 'react-router-dom';
//react-select
import Select from 'react-select'
//hooks
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext';
import { projectFirestore } from '../../firebase/config';
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
    { value: 'physique', label: 'sylwetka' },
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
    const [choosePriority, setChoosePriority] = useState('');
    const [choosenAdvice, setChoosenAdvice] = useState('default');

    const { getDocument } = useCollection();
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(chooseDays)
        const doc = await getDocument('plans', ["days", "==", chooseDays], ["priority", "==", choosePriority]);
        const result = doc.docs.map((doc) => {
            return doc.data();
        });

        console.log(result);
        await projectFirestore.collection('users').doc(user.uid).set({
            plan: result[0]
        })
        navigate('/planPreview', { state: { plans: result, days: chooseDays } })

        //TU SKOŃCZYŁEM
    }
    return (

        <div className='generator'>
            <form onSubmit={(e) => submitHandler(e)}>
                <label>
                    <span>Dni treningowe w tygodni:</span>
                    <Select onChange={(option) => { setChooseDays(option.value) }} options={days} />
                    <p className='advice' onClick={() => setChoosenAdvice("days")}>Sugestie...</p>
                </label>

                <label>
                    <span>Płeć:</span>
                    <Select onChange={(option) => { setChooseSex(option.value) }} options={sex} />
                    <p className='advice' onClick={() => setChoosenAdvice("sex")}>Sugestie...</p>
                </label>

                <label>
                    <span>Cel:</span>
                    <Select onChange={(option) => { setChoosePurpose(option.value) }} options={purpose} />
                    <p className='advice' onClick={() => setChoosenAdvice("purpose")}>Sugestie...</p>
                </label>

                <label>
                    <span>Stopień zaawansowania:</span>
                    <Select onChange={(option) => { setChooseAdvanced(option.value) }} options={advanced} />
                    <p className='advice' onClick={() => setChoosenAdvice("advanced")}>Sugestie...</p>
                </label>

                <label>
                    <span>Priorytet:</span>
                    <Select onChange={(option) => { setChoosePriority(option.value) }} options={priority} />
                    <p className='advice' onClick={() => setChoosenAdvice("priority")}>Sugestie...</p>
                </label>
                <button className='btn' >Gotowe!</button>
            </form>




            {choosenAdvice === "default" && <div className='info'></div>}

            {choosenAdvice === "days" && <div className='info'>
                <div><p>Podpowiedzi: </p> <span className='close' onClick={() => setChoosenAdvice('default')}>zamknij</span></div>
                <ul>
                    <li> Treningi raz oraz dwa razy w tygodniu są znacznie lepsze niż nic, jednak jeżeli możesz zorganizować sobie więcej czasu wybierz przynajmniej trzy</li>
                    <li>Jeżel jesteś osobą początkującą jest duża szansa że trening 5 razy w tygdoniu będzie dla Ciebie nieodpowiedni</li>
                </ul>
            </div>
            }
            {choosenAdvice === "purpose" && <div className='info'>
                <div><p>Podpowiedzi: </p> <span className='close' onClick={() => setChoosenAdvice('default')}>zamknij</span></div>
                <ul>
                    <li>Parametr ten na rzecz pewnej uniwersalności którą musi spełniać taka aplikacja wpływa  na ilość powtórzeń oraz seri. </li>
                    <li>Wybierając siłe nie oznacza to że nie urośniesz a wybierając sylwetkę nie oznacza to że nie zyskasz siły. </li>
                    <li>Istotą wybrania siły będzie trening na większym obciążeniu a co za tym idzie mniejszymi powtórzeniami, jednak wszystkie plany są skomponowane pod ogólny oraz równy rozwój</li>
                    <li>Jeżeli wolisz ćwiczyć na niskich powtórzeniach i subiektywnie dużym ciężąrze wybierz siłe, jeżeli preferujesz więcej powtórzeń tym samym mniejszy ciężar wybierz sylwetke, a jeżeli nie jesteś pewny wybierz zbilansowany</li>
                </ul>
            </div>
            }
            {choosenAdvice === "priority" && <div className='info'>
                <div><p>Podpowiedzi: </p> <span className='close' onClick={() => setChoosenAdvice('default')}>zamknij</span></div>
                <ul>
                    <li> Jeżeli któraś z twoich parti mocno nie odstaję od reszty rozważ trening bez priorytetów</li>
                    <li>Jeżeli rozpoczynasz swoją przygodę wybierz trening bez priorytetów</li>
                    <li>Pamiętaj że przykładowo priorytet na klatke będzie premiował również partie takie jak triceps czy barki, trening to nie laboratorium nie trzeba wszsytkiego izolować</li>
                </ul>
            </div>
            }
            {choosenAdvice === "advanced" && <div className='info'>
                <div><p>Podpowiedzi: </p> <span className='close' onClick={() => setChoosenAdvice('default')} >zamknij</span></div>
                <ul>
                    <li> Parametr wpływający na objętość treningów</li>
                    <li>Jeżeli pierwsze wizyty na siłowni dopiero przed Tobą lub znalazłeś się tam dopiero kilka razy i to przez przypadek wybierz początkującego</li>
                    <li>Jeżeli trening siłowy to dla Ciebie nie pierwszyzna a cudowne efekty nowicjusza czyli rozbudowa czwórek po wejściu z zakupami na drugie piętro masz już i szukasz sposobu na wyrwanie się ze stagnacji wybierz średnio-zaawansowany</li>
                    <li>Jeżeli trening siłowy to od wielu lat jest dla Ciebie istotna część życia i szukasz inspiracji i nowego bodźca aby zmaksymalizować możliwości twojego ciała wybierz zaawansowanego.</li>
                </ul>
            </div>
            }
            {choosenAdvice === "sex" && <div className='info'>
                <div><p>Podpowiedzi: </p> <span className='close' onClick={() => setChoosenAdvice('default')}>zamknij</span></div>
                <ul>
                    <li>Trudno mi coś doradzić odnośnie wyboru płci...</li>
                </ul>
            </div>
            }
        </div>



    )
}
