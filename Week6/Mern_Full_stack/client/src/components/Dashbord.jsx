import React, { useEffect, useState } from 'react'
import axios from "axios"

const Dashbord = () => {

    //1
    const [students, setStudents] = useState([])

    //2
    useEffect(() => {
        axios.get("http://localhost:5000/api/student")
            .then(res => {
                console.log(res.data)
                setStudents(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])








    return (
        <div>
            <h1>ALL Students</h1>
            {
                students.map((oneSt) => {
                    return (
                        <div>

                            <ul>
                                <li>
                                    {oneSt.firstName}
                                </li>
                                <li>
                                    {oneSt.LastName}
                                </li>
                                <li>
                                    {oneSt.age}
                                </li>
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