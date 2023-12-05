import './App.css';

function App() {
  return (
    <div className="App">
      My Todo App
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
export default App;
