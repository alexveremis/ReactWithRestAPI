import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'

const person ={
  name: 'Alex',
  address: {
    line1: 'Baker Street',
    city: 'Athens',
    country: 'Greece',
  },
  profiles: ['tw', 'fb' ,'insta'],
  printProfile: () => {
    person.profiles.map(
      (profile) => {
        console.log(profile)
       }
    )
  } 
}


function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <div>{person.address.country}</div>
      <div>{person.name}</div>

      <div>{person.profiles[0:2]}</div>
      <div>{person.printProfile()}</div>
      


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
