# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @monaqwaseem/lotide`

**Require it:**

`const _ = require('@monaqwaseem/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Gets the first element of array.
* `tail(...)`: Gets all but the first element of array.
* `middle(...)`: Returns the middle element of an array.
* `map(...)`: Returns a new array based on the results of the callback function.
* `min(...)`: Computes the minimum value of array. If array is empty or falsey, undefined is returned.
* `sum(...)`: Computes the sum of the values in array.
* `assertArraysEquals(...)`: Computes two arrays and prints an appropriate message to the console.
* `assertEqual(...)`: It will verify if both input and output have a perfect match.
* `assertObjectsEqual(...)`: Verifies that two objects are equal.
* `countLetters(...)`: Returns a count of each of the letters in that sentence.
* `countOnly(...)`: Computes an array and an object & return an object containing counts of everything that the input object listed.
* `eqArrays(...)`: Computes two arrays and returns true or false, based on a perfect match.
* `eqObjects(...)`: Computes two objects and returns true or false, based on a perfect match.
* `findKey(...)`: Takes in an object and a callback func and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(...)`: Computes an object and a value and returns the key for that value.
* `letterPositions(...)`: Returns returns all the indices (zero-based positions) in the string where each character is found.
* `takeUntil(...)`: Returns a "slice of the array with elements taken from the beginning."
* `without(...)`: Returns a new array with only those elements from source that are not present in the itemsToRemove array.



