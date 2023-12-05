import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'

const person ={
  name: 'Alex'
}


function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      {person.name}
    </div>
  );
}


function SecondComponent() {
  return(
    <div className='SecondComponent'>Sec Component</div>
  )
}


class ThirdComponent extends Component{
  render (){
    return (
    <div className='ThirdComponent'>3rd Component</div>
    )
  }  
}

export default App;
