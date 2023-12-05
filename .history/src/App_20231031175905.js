import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent/>
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


class ThirdComponent extends Component{
  render (){
    return (
    <div className='SecondComponent'>Sec Component</div>
  }
  }
}
export default App;
