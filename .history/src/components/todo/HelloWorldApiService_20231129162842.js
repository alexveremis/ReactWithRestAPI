import axios from 'axios'

export function retrieveHelloWorld(){
    return axios.get('http://localhost:8080/hello-world/path-variable/Alex')
}

export const retHWoneline = () => axios.get('http://localhost:8080/hello-world/path-variable/Alex');