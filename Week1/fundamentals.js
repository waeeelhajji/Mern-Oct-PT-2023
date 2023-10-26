//!-------------------------------Why JS ?

//* Developers use JavaScript to build complex interactive websites and browser games, and to connect servers to websites and web applications. Because of this versatility, it's easy to see why this language is the most commonly used programming language in the world.


//!-------------------------------Is JavaScript Used for Front-End or Back-End ?


//* Javascript is a client-side language, which technically makes it a front-end language. But with the Node.js framework,
//* JavaScript can also be used in back-end. Using JavaScript across the whole stack, for both front-end and back-end,
//* is an excellent practice because it creates a cohesive application. When as much code as possible is all in the same language, it makes it easier to maintain, manage, update, and build with a single team.


//!-------------------------------What is ECMAScript ?


//* ECMAScript, also known as JavaScript, is a programming language adopted by the European Computer Manufacturer's Association
//* as a standard for performing computations in Web applications. ECMAScript is the official client-side scripting language of VoiceXML.
//* ECMAScript is a limited program//ming model for simple data manipulation.


// Single threaded non-blocking language

var x = 10

function test() {
    console.log("hello")
}

test()

//!-------------------------------what is es6 ?

//* What is ES6? ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript,
//* it was published in 2015, and is also known as ECMAScript 2015.


//!---------------------------------------What is scope ?

//* The scope is the current context of execution in which values and expressions
//* are "visible" or can be referenced. If a variable or expression is not in the current scope,
//* it will not be available for use.


//? JavaScript has the following kinds of scopes:


//* Global scope: The default scope for all code running in script mode.

//* Module scope: The scope for code running in module mode.

//* Function scope: The scope created with a function.

const x = "declare outside function"

function functionScope(x) {
    // const x = "declare inside the function"
    // console.log("Inside the function")
    // console.log(x)
    return x // the function is what it returns 

}

const theReturn = functionScope(x)
console.log(theReturn)



functionScope()



//!-------------------------------What is the difference between JavaScript and ES6 ?

//* ES6 and JavaScript belong to "Languages" category of the tech stack. "ES6 code is shorter than traditional JS"

//*  is the top reason why over 98 developers like ES6, while over 1556 developers mention "Can be used on frontend/backend"


//!-------------------------------Comparison between ES5 and ES6 ?


//?-----------Example ES5

var name = "MERN"
console.log(name)

var age = 96

var Hobbies = ["Coding", "Music", "Movies and Series"]



//?-----------Example ES6

console.log(name)
let name = "MERN"; // the scope of the Let Key word is where we call it or declarant
console.log(name)

const LoveCoding = true

LoveCoding = false

console.log(LoveCoding)

const array = ["Coding", "Music", "Movies and Series"]

array[0] = "Coding Dojo"
array[1] = "I love Music"
array.push(99999)

console.log(array)

const array = "dfdffff"

//* Variables defined with const cannot be Redeclare.
//* Variables defined with const cannot be Reassigned.
//* Variables defined with const have Block Scope.


//!--When to use JavaScript const?


//* Always declare a variable with const when you know that the value should not be changed.


//? Use const when you declare:

//* A new Array
//* A new Object
//* A new Function



//!--------------------- Functions

function ES5() {
    console.log("hey JS we miss you ")
}

ES5()


const ES6 = () => {
    console.log("Say What !!!")
}

ES6()

const ES6Plus = (num) => num > 0 || num === 0


console.log(ES6Plus(5))
































//!-------------------------------What is the difference between JavaScript and ES6 ?




































//!-------------------------------Comparison between ES5 and ES6 ?