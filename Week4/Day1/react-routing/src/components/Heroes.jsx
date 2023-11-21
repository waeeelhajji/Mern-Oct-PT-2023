import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from './Form'

const Heroes = () => {

    // anything dynamic needs UseState
    const [heroes, setHeroes] = useState([])

    const navigate = useNavigate()


    const { id } = useParams()
    console.log(id)

    //!------------------------- UseEffect
    useEffect(() => {
        axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
            .then(res => {
                // Axios Wraps everything in .data
                console.log([res.data])
                setHeroes([res.data])

            })
            .catch(err => {
                console.log(err)
                navigate("/Error")

            })
    }, [id])


    return (
        <fieldset>
            <legend>Heroes.jsx</legend>
            <hr />
            <Form />
            <hr />

            <table >
                <thead>
                    <tr>
                        <th scope="col">
                            #
                        </th>
                        <th scope="col">
                            Image
                        </th>
                        <th scope="col">
                            Hero Name
                        </th >
                        <th scope="col">
                            Full Name
                        </th>
                        <th scope="col">
                            Publisher
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        heroes.map(hero => {
                            return (
                                <tr key={hero.id}>
                                    <th scope="row">{hero.id}</th>
                                    <td>
                                        <img src={hero.images.sm}
                                            width="120px"
                                        />
                                    </td>
                                    <td>
                                        {hero.name}
                                    </td>
                                    <td>
                                        {hero.biography.fullName ? hero.biography.fullName : "No Data"}
                                    </td>
                                    <td>
                                        {hero.biography.publisher}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Heroes
