//!-------------------------------Why is JavaScript a Multi-Paradigm Language ?


//* A paradigm can be defined as an approach to solving a problem. A programming paradigm is
//*  a way to solve problems by using a programming language.

//* As you know, each problem needs a specific approach to its solution. So,
//*  we would have a set of paradigms for different sets of problems. As programming
//*  languages are a way to solve the problems using the code, they will offer support to these paradigms.

//* So, any programming language which offers multiple programming paradigms is
//* referred to as a multi-paradigm programming language.Some of the well-known paradigms are mentioned below.



//?--------Object-Oriented Programming Paradigm




//* This is an approach where the solution is designed around communication between
//* the Objects or Classes, which hold the data and the methods to act upon that data.
//* A programming language with this approach will have code with a series of operations
//* involving defining classes and interaction among these classes with the help of associated methods.
//* Some of the languages supporting this paradigm are C++, Java, C#, JavaScript,



//?--------Functional Programming Paradigm

//* This is a declarative approach where the solution is designed around applying and composing functions.
//* A programming language with this approach will have a series of function calls and function compositions,
//* where each function takes an input state and returns consistent output value independent of the program state.
//* Some of the languages supporting this paradigm are Haskell, JavaScript



//?--------Callback Functions !!!

function GetTheTiq() {
    console.log("Pizza peperoni")
}

function PrepareThePizza() {
    console.log("The Pizza in the oven")
}

function GiveTheClientHisOrder() {
    console.log("this is your pizza and thank you for visiting us 😏")
}
// GetTheTiq()
// PrepareThePizza()
// GiveTheClientHisOrder()


setTimeout(GetTheTiq, 3000)
setTimeout(PrepareThePizza, 7000)
setTimeout(GiveTheClientHisOrder, 10000)


function Callback(anything) {
    console.log(anything)
}

function parentFunction(Callback) {
    Callback("information from the parent function")
}

parentFunction(Callback)


//?--------The Big Freeze

Object.freeze()

const FreezeArray = [1, 2, 3, 4, 5]

FreezeArray.push(6)
console.log(FreezeArray)

const FrezeArray = Object.freeze([1, 2, 3, 4, 5])
FrezeArray.push(6)


const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

//! ------ Spread

const needSomthingElse = [...groceryList, { "item": "pizza", "haveIngredient": true }]

console.log(needSomthingElse)
console.log(groceryList)


//! ------ Concat

const arr = ["test", "Mern", "Pizza", 33]
const arr2 = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr2.length; i++) {
//     arr.push(arr2[i])

// }

const newArray = arr.concat({ key: "value" })

console.log(newArray)


//!-------------------------------Map and Filter

//?-------.map()


for (eachAnimal of animals) {
    console.log("this animal is awesome and his name is " + eachAnimal)

}
animals.map(function (eachElement) {
    console.log(" MAP -this animal is awesome and his name is " + eachElement)
})

animals.map(function (oneElem) {
    return oneElem + "is awesome"
})

// const animals = ["leopard🐆", "giraffe", "zeb 🦓", "ele🐘", "monkey🙈", "lion🦁"]

const awesomeAnimals = animals.map((oneElem) => {

    return `${oneElem} is awesome`
})

console.log(awesomeAnimals)
console.log(animals)

const value = [1, 2, 3, 4, 5]
const newValues = value.map(val => val * 2)

console.log(newValues)



//?-------.filter()

// ["leopard🐆", "giraffe", "zebra 🦓", "elephant🐘", "monkey🙈", "lion🦁"]
// // undefined --- undefined -- undefined --- undefined ----- undefined

const animals = ["leopard🐆", "giraffe", "zeb🦓", "ele🐘", "monkey🙈", "lion🦁"]

const filteredAnimal = animals.filter((filteredElem) => {
    if (filteredElem.length <= 5) {
        console.log("false :", filteredElem)
        return false
    } else {
        return true
    }
})

const length = animals.map(val => val.length)
console.log(object)

const oneLineFilter = animals.filter((elm) => {

    return elm.length <= 5 // true or false 

})

const oneLineFN = animals.filter((elm) => elm.length <= 5)



console.log(oneLineFilter)

