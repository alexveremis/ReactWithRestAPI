import { useState } from 'react'
import './Counter.css'

export default function Counter({step}) {

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
                        >+1
                </button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                        >-1
                </button>
            </div>
        </div>
    )

}