// This is created to safe the user data and to be used after in the app. 

import { createContext } from "react";
import  useLocalStorage  from '../hooks/useLocalStorage'

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {})
    
    const loginHeandler = (authData) => {
        setAuth(authData)
    }
   
    const logoutHeandler = () => {
        setAuth({});
    }

    return (
        <AuthContext.Provider value={{ user: auth, loginHeandler, logoutHeandler }}>
            {children}
        </AuthContext.Provider>
    )
}