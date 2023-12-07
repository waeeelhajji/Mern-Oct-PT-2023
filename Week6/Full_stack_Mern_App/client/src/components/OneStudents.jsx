import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneStudents = () => {

    const { id } = useParams()
    const [thisStudent, setStudent] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:5000/api/student/" + id)
            .then(res => {
                console.log(res.data)
                setStudent(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])



    return (
        <div>
            OneStudents
            {thisStudent ?
                <ul>
                    <li> {thisStudent.firstName} </li>
                    <li> {thisStudent.LastName} </li>
                    <li> {thisStudent.age} </li>
                </ul> : <h3>Loading</h3>
            }
        </div>
    )
}

export default OneStudents