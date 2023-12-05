import './App.css';
import Counter from './components/counter/Counter'


function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <PlayingWithProps />
    </div>
  );
}

function PlayingWithProps() {
  return(
    <div>Props</div>
  )
}


export default App;
