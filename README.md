# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @robbieprokop/lotide`

**Require it:**

`const _ = require('@robbieprokop/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: assert equal arrays,
  `assertObjectsEqual`: assert equal objects,
  `assertEqual`: assert equal values,
  `countLetters`: count letters in a string,
  `eqArrays`: are the arrays equal?,
  `findKey`: find the key of an object,
  `findKeyByValue`: find the key of an object by it's value,
  `head`: grab head of an array,
  `letterPositions`: check how many times a letter is in an array,
  `map`: map will return a new array based on the results of the callback function,
  `middle`: grab middle of an array,
  `tail`: grab tail of an array,
  `takeUntil`: take numbers in array until certain parameters are met,
  `without,`: returns items in an array that are not removed (by the paramenter)
