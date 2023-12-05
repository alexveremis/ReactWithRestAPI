import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
  );
}

function FirstComponent() {
  return(
    <div className='FirstComponent'>First Component</div>
  )
}

function SecondComponent() {
  return(
    <div className='SecondComponent'>Sec Component</div>
  )
}


class ThirdComponnent {
  render (){
    <div className='SecondComponent'>Sec Component</div>
  }
}
export default App;
