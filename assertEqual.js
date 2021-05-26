// Define the assertEqual function and ensure that it can be called.

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual("Hello World", "Hello World")
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);


//Implementing assertEqual
//With its skeleton in place, it's time to implement this function.

// Make the function compare the two values it takes in and print out a message telling us if they match or not.
/*Test the following:
    Comparing identical strings
    Comparing non-identical strings
    Comparing identical numbers
    Comparing non-identical numbers*/
