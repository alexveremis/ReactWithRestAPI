export default function Counter() {



    function incrementCounterFunction() {
        console.log('increment clicked')
    }
    return (
        <div className="Counter"> 
            <span className="count">0</span>
            <div>
                <button className="counterButton" onClick={incrementCounterFunction}>increment</button>
            </div>
        </div>
    )

}