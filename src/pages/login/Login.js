import React, { useState } from 'react'
import './Login.scss'
//hooks
import { useLogin } from '../../hooks/useLogin';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isPending } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
    }
    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className="form">
                <h2>Logowanie</h2>
                <label>
                    <span>email:</span>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>hasło:</span>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                {!isPending && <button className="btn">Zaloguj</button>}
                {isPending && <button className='btn' disabled>trwa ładowanie...</button>}
                {error && <p className='error'>{error}</p>}

            </form>
        </div>
    )
}
