import { useReducer, createContext, useEffect } from "react"
import { projectAuth } from "../firebase/config";
export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return { ...state, user: action.payload };
        }
        case 'LOGOUT':
            {
                return { ...state, user: null }
            }
        case 'IS_AUTH': {
            return { user: action.payload, isAuth: true }
        }
        default: return state;
    }
}


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    console.log('AuthContext state:', state)
    useEffect(() => {
        const unsub = projectAuth.onAuthStateChanged(user => {
            dispatch({ type: 'IS_AUTH', payload: user })
            unsub()
        })
    }, [])
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}