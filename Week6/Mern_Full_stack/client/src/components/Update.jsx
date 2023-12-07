import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const nav = useNavigate()
    const { id } = useParams()
    // const [thisStudent, setStudent] = useState(null)




    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:5000/api/student/" + id)
            .then(res => {
                console.log(res.data)
                setFirstName(res.data.firstName)
                setLastName(res.data.LastName)
                setAge(res.data.age)



            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const updateHandler = (e) => {
        e.preventDefault()
        const newObj = {
            firstName,
            LastName: lastName,
            age
        }
        axios.patch(`http://localhost:5000/api/student/${id}`, newObj)
            .then(res => {
                console.log("✅✅✅✅", res.data)
                nav("/")
            })
            .catch(err => console.log("❌❌❌❌❌", err))

    }






    return (
        <div>
            Update
            <form onSubmit={updateHandler}>
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
                <button>Update Student</button>

            </form>


        </div>
    )
}

export default Update