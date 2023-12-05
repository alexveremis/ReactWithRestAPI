export default function Counter() {


    const buttonStyle = {fontSize:"30px"};

    function incrementCounterFunction() {
        console.log('increment clicked')
    }
    return (
        <div className="Counter"> 
            <span className="count">0</span>
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                        style ={buttonStyle}>+1</button>
            </div>
        </div>
    )

}