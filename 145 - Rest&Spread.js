/**
 * Rest and Spread
 * Rest =  as argument unlimited
 * spread = using clone object
 */

function sum1() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
//console.log(sum1(1,2,3));

/**
 *
 * @param  {...any} rest
 * @returns integer
 */
function sum2(...rest) {
  return rest;
}
//console.log(sum2(1,2,3,4));

// sumation by reduce

function sum3(...rest) {
  return rest.reduce((a, b) => a + b, 0);
}
//console.log(sum3(1,2,3,4));

/**
 * Spread
 */

let a = [1, 2, 3];
//console.log(...a); // singula value 1 2 3

/**
 * Objct clone with spread
 */
let obj = {
  a: 10,
  b: 20,
  c: 30,
};

let obj2 = {
  ...obj,
  d: 3,
  e: 4,
};

//console.log(obj); // old object
//console.log(obj2); // new object with some extra data

/**
 * Enhance object
 */

let E = 10,
  F = 20;

let obj4 = {
  E,
  F,
  print() {
    console.log("Hello");
  },
};
//console.log(obj4);
//obj4.print();

/**
 * Object destructering
 * depened on key
 */

let person = {
  name: "Raju",
  email: "raju@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

let name1 = person.name;
let email1 = person.email;

//console.log(name1, email1);

let {
  name,
  email,
  address: { city, country },
} = person;

//console.log(name1, email1, city, country);

/**
 * Array destructering
 * depend on index
 */

let arr = [1, 2, 3, 4, 5];

let [first, second, , , last] = arr;

//console.log(first, second, last);

/**
 * Object Entries
 * Object.entries(obj3) =  Object convert array
 */

var obj3 = {
  a: 10,
  b: 11,
};

//console.log(Object.entries(obj3));

/**
 * [
 *  [ 'a', 10 ],
 *  [ 'b', 11 ]
 * ]
 */

var objToArr = [
  ["a", 10],
  ["b", 11],
];

//console.log(Object.fromEntries(objToArr));

/**
 * { 
 *  a: 10, 
 *  b: 11 
 * }
 */

/**
 * Symbol
 * Unique idetity case 
 * 
 */

let s1 = Symbol('First') // description as param 
let s2 = Symbol('2nd') // description as param 

// console.log(s1 === s2); // false 

let toss = {
    HEAD: Symbol('HEAD'),
    TAIL: Symbol('TAIL'),
}