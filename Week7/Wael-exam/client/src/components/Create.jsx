import React, { useState } from 'react'
import axios from "axios"

const Create = () => {

    const [inputObject, setInputObject] = useState({
        Title: "",
        Content: "",
        isImportant: false
    })
    const [errors, setErrors] = useState([]);

    const handelInputs = (e) => {
        setInputObject({
            ...inputObject,
            [e.target.name]: e.target.name === "isImportant" ? e.target.checked : e.target.value
        })
    }
    // for Submission
    const SubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/note/", inputObject)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }




    return (
        <div>
            Create
            <form onSubmit={SubmitHandler}>
                {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}

                <div>
                    Title:
                    <input name="Title" onChange={handelInputs} value={inputObject.Title} />

                </div>
                <div>
                    Content:
                    <input name="Content" onChange={handelInputs} value={inputObject.Content} />

                </div>
                <div>
                    Content:
                    <input name="isImportant" type="checkbox" onChange={handelInputs} checked={inputObject.inputObject} />

                </div>
                <button>Create</button>

            </form>


        </div>
    )
}

export default Create