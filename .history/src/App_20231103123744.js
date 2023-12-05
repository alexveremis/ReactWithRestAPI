import './App.css';
import CounterButton from './components/counter/Counter';
import Counter from './components/counter/Counter'


function App() {
  return (
    <div className="App">
      <CounterButton  />
      <CounterButton step={2}/>
      <CounterButton step={5}/>
      <PlayingWithProps property1="value1" property2="value2"/>
    </div>
  );
}

function PlayingWithProps({property1, property2}) {
  console.log(property1)
  return(
    <div>Props</div>
  )
}


export default App;
