import { useState } from "react";
import { useAuthContext } from "./useAuthContext"
import { projectAuth } from "../firebase/config";

export const useLogin = () => {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            const response = await projectAuth.signInWithEmailAndPassword(email, password);
            if (!response) {
                throw new Error("Could not login");
            }
            dispatch({ type: 'LOGIN', payload: response.user });

            setError(null);
            setIsPending(false);
        } catch (error) {
            setError(error.message);
            setIsPending(false);
            console.log(error);
        }
    }
    return { login, error, isPending }
}
