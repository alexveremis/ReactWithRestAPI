import './TodoApp.css'
import { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams , Link, Navigate } from 'react-router-dom';
import AuthProvider, { useAuth } from './AuthContext';
import { AuthContext } from './AuthContext';
import { retHWonelineName, retTodosUser, retrieveHelloWorld, deleteTodoById } from './HelloWorldApiService';


function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated)
    return(
        children
    )
    return <Navigate to="/" />
}

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={
                    <AuthenticatedRoute>
                        <WelcomeComponent />
                    </AuthenticatedRoute>} />
                    <Route path='*' element={
                    <AuthenticatedRoute>
                        <ErrorComponent />
                    </AuthenticatedRoute>} />
                    <Route path='/todos' element={
                    <AuthenticatedRoute>
                        <ListTodosComponent />
                    </AuthenticatedRoute>} />
                </Routes>
                <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}

function LoginComponent(){
    const authContext = useAuth()

    function handleUsernameChange(event){
        console.log(event.target.value);
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        console.log(event.target.value);
        setPassword(event.target.value)
    }

    function handleSubmit(event){
        console.log(username);
        console.log(password);
        if(authContext.login(username, password)){
            console.log('Success');
            setSuccessMessage(true);
            navigate(`/welcome/${username}`)
        } else{
            console.log('Failed');
            setSuccessMessage(false);
        }
    }

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setSuccessMessage] = useState(false)
    const navigate = useNavigate();

    return(
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {!showSuccessMessage && <div className="errorMessage">Authenticated Failed</div>}

            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} on onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent(){
    const [message, setMessage] = useState(null)
    function callHWRestAPI(){
        retTodosUser('in28minutes')
        .then((response) => successfulResponse(response))
    }

    function successfulResponse(response){
        setMessage(response)
    }

    const {username }= useParams()
    return(
        <div className="Welcome">
            Welcome {username}
            Your todos <Link to="/todos">Go here</Link>
            <div>
                <button className="btn btn-success" onClick={callHWRestAPI}>Call HelloWorld Rest</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            We are working hard 
        </div>
    )
}

function ListTodosComponent(){
    const [todos, setTodos] = useState([])
    

    function deleteTodo(){
        deleteTodoById("1")
    }






    useEffect(() => refreshTodos, [])
    function refreshTodos(){

        retTodosUser("in28minutes").then(
            (response) => {
                // console.log(response.data)
                setTodos(response.data)
            }

        )

    }



    return(
        <div className="contrainer">
            Things you want to do!
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id </th>
                            <th>description </th>
                            <th>Delete? </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id }</td>
                                        <td>{todo.description} </td>
                                        <td><button className='btn btn-warning' onClick={deleteTodo}>Delete</button> </td>

                                    </tr>
                                )
                            )
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}


function HeaderComponent(){

    // const authContext = useContext(AuthContext)
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated
    console.log(authContext)
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to="/welcome/in28minutes">Home</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to="/todos">Todos</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}


function FooterComponent(){
    return(
        <footer className="footer">
            <div className="container">
                your footeraki
            </div>
        </footer>
    )
}