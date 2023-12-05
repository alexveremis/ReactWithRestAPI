import { useParams } from "react-router-dom"
import { getTodoById, retrieveHelloWorld } from "./HelloWorldApiService"
import { useAuth } from "./AuthContext"
import { useContext, useEffect,useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"



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

    function onSubmit(values){

    }

    function validate(values){

        let errors = {
            // description: 'Enter a valid desc'
        }
        if(values.description.length<6) errors.description
        return errors
    }


    return(
        <div className="container">
            <h1> Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description}}
                    enableReinitialize={true} 
                    onSubmit={onSubmit}
                    validate={validate} >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage 
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <fieldset className="form-group">
                                    <label>description</label>
                                        <Field type="text" className="form-control" name="description"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}