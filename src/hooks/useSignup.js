import { useState } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    //state
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    //context
    const { dispatch } = useAuthContext();

    const signup = async (userName, email, password) => {
        setIsPending(true);
        setError(null);

        try {
            const response = await projectAuth.createUserWithEmailAndPassword(email, password);
            if (!response) {
                throw new Error('Could not signup');
            }
            await response.user.updateProfile({ displayName: userName });
            //create user docuemnt in firestore
            await projectFirestore.collection('users').doc(response.user.uid).set({

                displayName: userName,

            })
            dispatch({ type: 'LOGIN', payload: response.user })
            setIsPending(false);
            setError(null)
        } catch (error) {
            setError(error.message);
            setIsPending(false);
            console.log(error.message)
        }
    }
    return { signup, error, isPending }
}
