import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'

export default function CounterButton({step}) {

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

Counter.propTypes = {
    step: PropTypes.number
}

Counter.defaultProps = {
    step: 10
}