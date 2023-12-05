import axios from 'axios'

const apiClient = axios.create(
    {    
        baseURL: 'http://localhost:8080' 
    }
)

export function retrieveHelloWorld(){
    return axios.get('http://localhost:8080/hello-world/path-variable/Alex')
}

export const retHWonelineName = (name) => axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);