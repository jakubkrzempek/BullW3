import { useState } from "react";
import { useAuthContext } from "./useAuthContext"
import { projectAuth } from "../firebase/config";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {
            await projectAuth.signOut();

            dispatch({ type: 'LOGOUT' });

            setError(null);
            setIsPending(false);
        } catch (error) {
            setError(error.message);
            setIsPending(false);
            console.log(error);
        }
    }
    return { logout, error, isPending }
}
