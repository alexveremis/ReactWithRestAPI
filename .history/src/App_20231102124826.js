import './App.css';
import Counter from './components/counter/Counter'


function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <PlayingWithProps property1="value1" property2="value2"/>
    </div>
  );
}

function PlayingWithProps() {
  console.log(properties)
  return(
    <div>Props</div>
  )
}


export default App;
