import { useParams } from "react-router-dom"
import { getTodoById, retrieveHelloWorld } from "./HelloWorldApiService"
import { useAuth } from "./AuthContext"
import { useContext, useEffect,useState } from "react"
import { Formik } from "formik"



export default function TodoComponent(){

    const {id} = useParams()
    const authContext = useAuth()

    const username = authContext.username


    const [description, setDescription] = useState('')

    useEffect(
        () => retrieveTodos(), [id]
    )
    
    function retrieveTodos(){

        getTodoById(id).then(
            (response) => {
                setDescription(response.data.description)
            }

        )
    }




    return(
        <div className="container">
            <h1> Enter Todo Details</h1>
            <div>
                <Formik>
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>
                                        <Field />
                                    </label>
                                </fieldset>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}