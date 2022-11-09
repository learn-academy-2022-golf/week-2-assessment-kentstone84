// ASSESSMENT 2: Coding Practical Questions with Jest

const { describe } = require("node:test")

// const { describe } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// describe("divisibleByThree", () => {
//     it ("takes a object as a argument and decides if the number inside is evenly divisible by three", () => {
//         expect (divisibleByThree (object1)) . toEqual ("15 is divisible by three") 
//     }) 
// })   

const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// describe("divisibleByThree", () => {
//     it ("takes a object as a argument and decides if the number inside is evenly divisible by three", () => {
//         expect (divisibleByThree (object2)) . toEqual ("0 is divisible by three")
//        })
//     })

const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
// describe("divisibleByThree", () => {
//     it ("takes a object as a argument and decides if the number inside is evenly divisible by three", () => {
//         expect (divisibleByThree (object3)) . toEqual ("-7 is not divisible by three")
//        })
//     })

// ReferenceError: describe is not defined
    
// Sudocode: Create a function named divisibleByThree that takes in an object as an argument. 
// Create an if statement that checks if the object number is divisible by 3. 
// Use object.number to access the value of the number key in the object. 
// If it is, return the string "is divisible by three". 
// If it is not, return the string "is not divisible by three".
// Run the test to see if it passes.

// b) Create the function that makes the test pass.

    function divisibleByThree(object) {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else {
        return `${object.number} is not divisible by three`
    }
}

    console.log(divisibleByThree(object1))
    console.log(divisibleByThree(object2))
    console.log(divisibleByThree(object3))

//Output; 15 is divisible by three
//Output; 0 is divisible by three
//Output; -7 is not divisible by three


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// describe("capitalized", () => {
//     it ("takes in an array of words and returns an array with all the words capitalized", () => {
//         expect (capitalized (randomNouns1)) . toEqual (["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//     })
// })
	
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
// describe("capitalized", () => {
//     it ("takes in an array of words and returns an array with all the words capitalized", () => {
//         expect (capitalized (randomNouns2)) . toEqual (["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })

// ReferenceError: describe is not defined

// b) Create the function that makes the test pass.

// Sudocode: Create a function named capitalized that takes in an array as an argument.
// Create a variable named newArray that is equal to an empty array.
// Create a for loop that iterates through the array.
// Create a variable named firstLetter that is equal to the first letter of the array at index i.
// Create a variable named restOfWord that is equal to the rest of the word at index i.
// Create a variable named capitalizedWord that is equal to firstLetter.toUpperCase() + restOfWord.toLowerCase().
// Push capitalizedWord into newArray.
// Return newArray.
// Run the test to see if it passes.

function capitalized(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let firstLetter = array[i][0]
        let restOfWord = array[i].slice(1)
        let capitalizedWord = firstLetter.toUpperCase() + restOfWord.toLowerCase()
        newArray.push(capitalizedWord)
    }
    return newArray
}

console.log(capitalized(randomNouns1))
console.log(capitalized(randomNouns2))

// Output randomNouns1; [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
// Output randomNouns2; [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowel", () => {
    it ("takes in a string and logs the index of the first vowel", () => {
        expect (firstVowel (vowelTester1)) . toEqual (1)
    })
})

describe("firstVowel", () => {
    it ("takes in a string and logs the index of the first vowel", () => {
        expect (firstVowel (vowelTester2)) . toEqual (0)
    })  
})

describe("firstVowel", () => {
    it ("takes in a string and logs the index of the first vowel", () => {
        expect (firstVowel (vowelTester3)) . toEqual (2)
    })
})

// ReferenceError: describe is not defined

// sudocode: Create a function named firstVowel that takes in a string as an argument.
// Create a variable named vowels that is equal to an array of all the vowels.
// Create a for loop that iterates through the string.
// Create a variable named letter that is equal to the string at index i.
// Create an if statement that checks if vowels includes letter.
// If it does, return i.
// Run the test to see if it passes.

// b) Create the function that makes the test pass.

function firstVowel(string) {
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < string.length; i++) {
        let letter = string[i]
        if (vowels.includes(letter)) {
            return i
        }
    }
}

console.log(firstVowel(vowelTester1))
console.log(firstVowel(vowelTester2))
console.log(firstVowel(vowelTester3))

// Output vowelTester1; 1
// Output vowelTester2; 0
// Output vowelTester3; 2

