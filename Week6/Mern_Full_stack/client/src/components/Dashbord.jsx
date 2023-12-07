import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashbord = () => {

    //1
    const [students, setStudents] = useState([])

    //2
    function refrech() {
        axios.get("http://localhost:5000/api/student")
            .then(res => {
                console.log(res.data)
                setStudents(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }
    useEffect(() => {
        refrech()
    }, [])

    const DeleteThisStudent = (deleteId) => {
        axios.delete("http://localhost:5000/api/student/" + deleteId)
            .then(res => {
                refrech()
                console.log(res.data)
                const filteredStudents = students.filter((eachStudent) => {
                    return eachStudent._id !== deleteId
                })
                setStudents(filteredStudents)
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>
            <h1>ALL Students</h1>
            {
                students.map((oneSt, idx) => {
                    return (
                        <div key={idx}>
                            <ul>

                                <li>
                                    <Link to={"/student/" + oneSt._id}>
                                        {oneSt.firstName}
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={() => { DeleteThisStudent(oneSt._id) }}>Delete</button>
                                </li>
                                <Link to={`/student/${oneSt._id}/update`} >Update</Link>
                            </ul>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashbord