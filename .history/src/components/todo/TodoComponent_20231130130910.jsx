import { useParams } from "react-router-dom"
import { retrieveHelloWorld } from "./HelloWorldApiService"



export default function TodoComponent(){

    const {id} = useParams
    
    function retrieveTodos(){
        retrieveHelloWorld
    }




    return(
        <div className="container">
            <h1> Enter Todo Details</h1>
            <div>

            </div>
        </div>
    )
}