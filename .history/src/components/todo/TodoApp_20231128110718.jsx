import './TodoApp.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams , Link } from 'react-router-dom';

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent />} />
                <Route path='/login' element={<LoginComponent />} />
                <Route path='/welcome/:username' element={<WelcomeComponent />} />
                <Route path='*' element={<ErrorComponent />} />
                <Route path='/todos' element={<ListTodosComponent />} />
            </Routes>
            </BrowserRouter>
            <FooterComponent/>
            

        </div>
    )
}

function LoginComponent(){

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
        if(username==='alex' && password==='ver'){
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
    const {username }= useParams()
    return(
        <div className="Welcome">
            Welcome {username}
            Your todos <Link to="/todos">Go here</Link>
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
    const todos = [
                    { id: 1, description : 'learn eng'},
                    { id: 2, description : 'learn eng2'},
                    { id: 3, description : 'learn eng3'}


                ]


    return(
        <div className="contrainer">
            Things you want to do!
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id </td>
                            <td>description </td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id }</td>
                                        <td>{todo.description} </td>
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
    return(
        <div className="header">
            Header <hr/> 
        </div>
    )
}


function FooterComponent(){
    return(
        <div className="footer">
            <hr/> Footer 
        </div>
    )
}