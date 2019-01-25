// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const callback = (paramOne, paramTwo) => { paramOne, paramTwo }; 

function consume(paramOne, paramTwo, callbackFn) {
  return callbackFn(paramOne, paramTwo);
}
consume('string', 'string again', callback);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
Step 3: Check your work by un-commenting the following calls to consume(): */
const add = (paramOne, paramTwo) => paramOne + paramTwo;
const multiply = (paramOne, paramTwo) => { console.log(paramOne * paramTwo) };
const greeting = (paramOne, paramTwo) => { console.log(`Hello ${paramOne} ${paramTwo}, nice to meet you!`) };
console.log(consume(2,2,add)); 
consume(10,16,multiply); 
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.
// Explanation: So this guy, he's pretty well known for his big voice, banjo playing, and javascripting, he broke it down something like this:
///////////////////////////////////
// Imagine myFunction is a kingdom. It's the kingdom of myFunction. Parameters, variable, and all the things available in myFunction are like commands
// from the king. Commands from the king are observed by everyone within the kingdom.
// nestedFunction, in this analogy, is like a town inside of the kingdom myFunction. Towns within the kingdom need to observe the commands of the king,
// Also known as closure.
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();