import { createContext, useContext, useState } from "react";


export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    // setInterval(() => setNumber(number+1),10000)

    function login(username, password){
        if(username==='alex' && password==='ver'){
            setAuthenticated(true)
            setUsername(username)
            return true
        } else{
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }


    return(
        <AuthContext.Provider value ={{ isAuthenticated, login, username}}>
            {children}
        </AuthContext.Provider>
    )
}