#Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A Parameter is another name for values that will pass to the function while arguments are the actual values.

function addNumber() {
    const a = 5;  <----> Parameters
    const b = 6;  <----> Parameters
    const sum = a + b;
    return sum;
}
console.log(addNumbers(5, 6));  <----> Arguments 

Researched answer: Parameter variables import arguments into the function. Instead of placing the variables inside of the function we place them in parenthesis after the function and this sets up the parameters. On the function call we write actual variable values and this gives us arguments. To break it down a but function arugments are the actual values that are passed to the function. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: Value and index are the two predefined parameters. Value is required and index is not. 
Researched answer: I was wrong... there are three predefined parameters for .map(). .Map is a nonmutating method that creates an array by calling a specific function on each element of the array. .Map is used to iterate over an array and working on every element inside that array while returning a new array. Current Value is a required predetermed parameter, whole index and arr are optional. Arr hold the array while index holds the index on the current element. Current Value, the only required parameter runs on each element of the array. 

3. What is the difference between map and filter?

Your answer:.Filter is best used to filter out something along an array like only getting odds or evens while .map is used to create a new array from the existing one like multiplying each number by a specific variable. 

Researched answer: .Map is used to create a new array from the existing array while applying a function to each of the variables of the array. .Filter takes the array and returns an output array based on a conditional statement of true and false. If the statement is not true the element does get pushed while if false the new array does not get pushed to the output. 

4. What is iteration?

Your answer: The same thing repeated multiple times.

Researched answer: Iterating is the repetive task going through an array but not repeating itself. They are really useful for excuting a function a number of times using different inputs but always adhearing to the DRY principle (Don't repeat yourself) because it is working through different inputs. 

5. What is the difference between a class and an object?

Your answer: Class is the car while object is the parts and details of the car. Class is like the blueprints, it is the object while all the little things are is objects. The best example I can find is a practical exercise we did in Full Stack class while studying HTML and React, a class is a guitar while there may be many different types and kinds of guitars a Gibson is physical and real object. They may all have different properties and behaviours but a Fender is a real object while a guitar is only an idea. 

Researched answer: You can only declare a class once, it is the logical entity while the object is the physical entitiy. Objects can be manipulated whole you can not maniplate a class as it is not availble in memory. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: Bringing something up or to the top of the code. 

Researched answer: Hoisting is a default behavior of moving a declaration to the top. What this means is a variable can be declared before it is used. In the example below you will see the HTML has put a placeholder variable and told the code to find the element to use this place holder but look for the input later and that is why the var is under the code, it is declared later from the user. 

X= 10; 
elem = docum.getElementById("demo") <--->What this is doing is finding the element 
elem.innerHTML = x                  <--->Display x in the element. 

var x                               <--->Declaring X
## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: The User Stories is the description of a specific feature of the application viewed from the perspective of a user. The framework was laid out by Jon Dobrowalski, "Users should be able to _______, As a user I want to do ________ because ______. Given that I'm doing ______. I should be able to  _______ in order to _______."

2. Spread operator: The spread operator is one of the newest additions to the set of operators in JS ES6. The normal job for spread operators is to make code concise and readable. The spread operator take in an collection of object that can be traversed like an array and expands it into individual elements. 

3. React: React was developed by Facebook, now called Meta to build instagram.com. The aim was to allow developers to earilt build fast interfaces for websites and applications. The main concept of react is virtual DOM. It is built around components to act like a DOM tree. The main idea behind React is "Simple to scale" and the UI code is easily readable and maintainable. 

4. React props: React props are arguments that are passed into React components. We use HTML. We use additional information also called Attributes that are always specified in the start tag and usually come in Key Value pairs. We use these attributs to pass the from Props to Components. Props is shortened for Properties. 

5. DOM events: To start, The Dom event is where the user interacts with the webpage. This could be hovering over buttons or clicking on a user interface like posting a photo. You use what called listerners to faciliate DOM events and is an interface that is between the scripting language and a webpages composition. 
    