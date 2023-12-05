import './TodoApp.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginComponent />}></Route>
                <Route path='/welcome' element={<WelcomeComponent />}></Route>

            </Routes>
            </BrowserRouter>
            
            

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
        } else{
            console.log('Failed');
            setSuccessMessage(false);
        }
    }

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setSuccessMessage] = useState(false)

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
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}