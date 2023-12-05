import axios from 'axios'

const apiClient = axios.create(
    {    
        baseURL: 'http://localhost:8080' 
    }
)

export function retrieveHelloWorld(){
    return apiClient.get('/hello-world/path-variable/Alex')
}

export const retHWonelineName = (name) => apiClient.get(`/hello-world/path-variable/${name}`);