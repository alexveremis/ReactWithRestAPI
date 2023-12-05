import { createContext, useContext, useState } from "react";


export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)

    // setInterval(() => setNumber(number+1),10000)

    function login(username, password){
        if(username==='alex' && password==='ver'){
            setAuthenticated(true)
            return true
        } else{
            setAuthenticated(false)
            return false
        }
    }


    return(
        <AuthContext.Provider value ={{ isAuthenticated, login}}>
            {children}
        </AuthContext.Provider>
    )
}