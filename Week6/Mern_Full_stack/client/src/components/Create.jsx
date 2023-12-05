import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)

    const nav = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()
        const obj = {
            firstName,
            LastName: lastName,
            age
        }
        axios.post("http://localhost:5000/api/student", obj)
            .then(res => {
                console.log("✅✅✅✅", res.data)
                nav("/")
            })
            .catch(err => console.log("❌❌❌❌❌", err))

    }


    return (
        <div>
            Create

            <form onSubmit={submitHandler}>
                <div>
                    First Name :
                    <input value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    Last Name :
                    <input value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <div>
                    Age :
                    <input value={age} onChange={e => setAge(e.target.value)} />
                </div>
                <button>Create new Student</button>

            </form>
        </div>
    )
}

export default Create