import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'

export default function Counter() {
    return(
        <>
            <CounterButton step={1}/>
            <CounterButton step={2}/>
            <CounterButton step={5}/>
        </>
    )
}

function CounterButton({step}) {

    const [count, setCount] = useState(0);

   

    function incrementCounterFunction() {
        setCount(count +step)
        console.log(count)
        console.log('increment clicked')
    }
    function decrementCounterFunction() {
        setCount(count -step)
        console.log(count)
        console.log('dec clicked')
    }

    return (
        <div className="Counter"> 
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                        >+{step}
                </button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
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