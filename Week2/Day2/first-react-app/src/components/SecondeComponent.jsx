import React from "react"



const SecondeComponent = () => {
    console.log("Hello From the Best stack Ever")
    const exp = 3
    const Bob = " Bob 🎈🎈🎈"
    const animals = ['🦁', "🦒", "🐫", "🐊", "🦓"]
    console.log(exp)
    const person = {
        name: "Bob",
        favFood: "🍝",
        age: 100
    }
    return (
        <fieldset>
            <legend>App.js</legend>
            <h1>Hello ninjas</h1>
            <h2>here is the exp : {exp}</h2>
            <h3>the name is : {Bob}</h3>
            <h4>here are some of my animals : {animals}</h4>
            <h4>here are some of my animals : {animals.map(eachAnimal => {
                return <li>{eachAnimal}</li>
            })}</h4>

            <h5>{JSON.stringify(person.name)}</h5>
            <h5>{JSON.stringify(animals)}</h5>

        </fieldset>
    )
}

export default SecondeComponent



