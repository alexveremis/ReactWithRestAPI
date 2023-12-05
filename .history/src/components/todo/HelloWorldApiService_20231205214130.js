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

export const retTodosUser = (name) => apiClient.get(`/users/${name}/todos`);

export const deleteTodoById = (id) => apiClient.delete(`/users/in28minutes/todos/${id}`);

export const getTodoById = (id) => apiClient.get(`/users/in28minutes/todos/${id}`);

export const updateTodoById = (id,todoDetails) => apiClient.put(`/users/in28minutes/todos/${id}`, todoDetails);

export const createTodoById = (todoDetails) => apiClient.post('/users/in28minutes/todos/', todoDetails);