//!-------------------------------What is Destructuring ?


//* Destructuring is a JavaScript expression that makes it possible to unpack values from arrays,
//* or properties from objects, into distinct variables. That is, we can extract data from arrays and
//* objects and assign them to variables

// Arrays 
const number = [1, 2, 3, 4, 5]

// var num = number[1]

const [, , num2] = number


console.log(num2)


// Objects
const obj = {
    name: "John",
    age: "56"
}

// const firstName = obj.name
// const firstName2 = obj["name"]

const { name } = obj

console.log(name)





//!-------------------------------------------------------- REST / SPREAD


const aba = [1, 2, 3]
// const bab = aba

const bab = [...aba]

aba.push(10000000)
bab.push(99999)

console.log(aba)
console.log(bab)

const Ninja = {
    name: "MERN",
    belt: "Black"
}

const obj_copy = { ...Ninja }
console.log(obj_copy)

const newOBJArray = {
    ...aba,
    dojo: "Coding",
    coding: "Dojo"

}
console.log(newOBJArray)





