// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
// console.log(cohort.split(""))

// a) Your answer: It is going to split the string into an array of letters and then log the array. 

// b) Verify and explain: The output was G,o,l,f, ,2,0,2,2, which is the array of letters. I was correct. The reason is the .Split() method splits a string into an array of substrings, and returns the new array. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))  

// a) Your answer: It will not log anything, because the function is not returning anything. $(name) is not given a value. 

// b) Verify and explain: The output was undefined. I was correct. The reason is the function is not returning anything. $(name)is not given a value. The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: This is going to return an array of number that are multiplied by 2, hince the name of the variable multipliedByTwo and .map. .Map return a new array with the results of calling a function for every array element. 

// b) Verify and explain: I was correct, the output was [8, 10, 12, 14, 16]. The reason is .Map returns a new array with the results of calling a function for every index in the array. 


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This is going to return 11, 13, 15, because the .filter() method creates a new array with all elements that pass the test implemented by the provided function. The provided function is number % 2 !== 0, which means that the number is not divisible by 2 nore are they the same. 

// b) Verify and explain: The output was [11, 13, 15]. I was correct. The reason is the .filter method creates a new array with all elements that pass the test implemented by the provided function of number % 2 !== 0, I am honestly not sure why it is written as a strict inequality because none of the numbers in the array are the same. Perhaps it was to fool me into thinking that it would return a boolean value... 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: The return will be [JavaScript] because the .languages is an array and the [0] is the first index of the array. 
// b) Verify and explain: The output was JavaScript. I was correct. The reason is the .languages is being refered to as an array and the [0] is the first index of that array. This is part of class and object. MyCodingSkills is the class, it is an idea or blueprint for creating objects. The object in this case is the languages array. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This is going to return an object with the properties of student, cohort, and year. The student property will be George, cohort will be Foxtrot, and year will be 2022. 
// b) Verify and explain: The out put was [Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }]. I was correct. The reason is the class Learn is being instantiated with the name George. The object in this case is George. This is another example of class and object but also bringing part of the return of Learn. 
