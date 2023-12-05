import { createContext, useContext, useState } from "react";
import { retTodosUser } from "./HelloWorldApiService";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    // setInterval(() => setNumber(number+1),10000)

    async function login(username, password){
        const baToken ='Basic '+ window.btoa(username + ":" + password)
        try{
            const response= await retTodosUser(baToken, "in28minutes")
            
            if(response.status==200){
                setAuthenticated(true)
                setUsername(username)
                return true
            } else{
                setAuthenticated(false)
                setUsername(null)
                return false
            }
    }
    catch(error){
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