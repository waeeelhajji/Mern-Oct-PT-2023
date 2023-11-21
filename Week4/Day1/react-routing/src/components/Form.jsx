import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [number, setNumber] = useState(0)

    const nav = useNavigate()


    const submitID = (e) => {
        e.preventDefault()
        nav("/hero/" + number)

    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitID}>
                <input type="number" onChange={(e) => {
                    setNumber(e.target.value)
                }} />
                <button>Get me this Hero</button>
            </form>
        </fieldset>
    )
}

export default Form