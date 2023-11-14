import React, { useState } from 'react'

const Forms = (props) => {
    // console.log("this is our props now ", props.zoo)

    //create State for this component
    const [zooLand, setZooLand] = useState(["🦓", "🦒", "🦁", "🐫", "🐊"])
    // ---- State ==== function that will fill our State
    const [animal, setAnimal] = useState("")

    const SubmitHandler = (e) => {
        e.preventDefault()
        // zooLand.push(animal)
        // zooLand = animal
        // zooLand = [...zooLand, animal]
        if (zooLand.length <= 6) {

            setZooLand([animal, ...zooLand])
            // zoo.push(animals)
        }
        setAnimal("")
    }

    return (
        <fieldset>
            <legend>Forms.jsx</legend>
            {
                zooLand.length > 6 ? <p style={{ color: "red" }}>the zoo is full!</p> : <p style={{ color: "green" }}>We accept more animals!</p>
            }
            <p>here is the animals:  {JSON.stringify(zooLand)}</p>
            THERE ARE {zooLand.length} IN THE ZOO
            <p>State variable :{JSON.stringify(animal)}</p>
            {
                zooLand.map((oneAnimal) => {
                    return (
                        <div style={{ backgroundColor: "#ffe6e6" }}>
                            the animal is:{oneAnimal}
                            <hr />
                        </div>
                    )
                })
            }

            <form onSubmit={SubmitHandler}>
                give new animal:
                {/* <input onChange={() => { console.log("hello") }} /> */}

                {/* <input onChange={(e) => { console.log(e.target.value) }} /> */}
                <input onChange={(e) => { setAnimal(e.target.value) }} />
                <button>Add new Animal</button>
            </form>

        </fieldset >
    )
}

export default Forms