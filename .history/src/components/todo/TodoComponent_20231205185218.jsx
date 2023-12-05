import { useNavigate, useParams } from "react-router-dom"
import { getTodoById, retrieveHelloWorld, updateTodoById } from "./HelloWorldApiService"
import { useAuth } from "./AuthContext"
import { useContext, useEffect,useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"



export default function TodoComponent(){

    const {id} = useParams()
    const authContext = useAuth()
    const navigate = useNavigate()
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
        const todoDetails = {
            id: id,
            username: "in28minutes",
            description: description
        }
        updateTodoById(id, todoDetails)
        .then((response)=>{
            navigate('/todos')
        } )
    }

    function validate(values){

        let errors = {
            // description: 'Enter a valid desc'
        }
        if(values.description.length<6) errors.description = 'insert 5 chars or more'
        return errors
    }


    return(
        <div className="container">
            <h1> Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description}}
                    enableReinitialize={true} 
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false} >
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