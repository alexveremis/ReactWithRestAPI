import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'

export default function Counter() {
    
    const [count, setCount] = useState(0);
    
    function incrementCounterParentFunction(step) {
        setCount(count + step)
    }
    function resetCounter() {
        setCount(0)
    }
    return(
        <> 
            <span className="count">{count}</span>
            <CounterButton step={1} incrementMethod = {incrementCounterParentFunction}/>
            <CounterButton step={2} incrementMethod = {incrementCounterParentFunction}/>
            <CounterButton step={5} incrementMethod = {incrementCounterParentFunction}/>
            <button className='counterButton' onClick={resetCounter}>Reset</button>
        </>
    )
}

function CounterButton({step, incrementMethod}) {

  

    return (
        <div className="Counter"> 
            <div>
                <button className="counterButton" 
                        onClick={() => incrementMethod(step)}
                        >+{step}
                </button>
                <button className="counterButton" 
                        onClick={() => incrementMethod(-step)}
                        >-{step}
                </button>
            </div>
        </div>
    )

}

CounterButton.propTypes = {
    step: PropTypes.number
}

CounterButton.defaultProps = {
    step: 10
}