import React, { useState } from 'react'
//styles
import './Signup.scss'
//hooks
import { useSignup } from '../../hooks/useSignup.js';

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const { signup, error, isPending } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(userName, email, password)
    }
    return (
        <div className='signup'>
            <form onSubmit={handleSubmit} className='form'>
                <h2>Rejestracja</h2>
                <label>
                    <span>email:</span>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Hasło:</span>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <label>
                    <span>Nazwa Użytkownika:</span>
                    <input
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                    />
                </label>

                {!isPending && <button className="btn">Zarejestruj</button>}
                {isPending && <button className='btn' disabled>trwa ładowanie...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}
