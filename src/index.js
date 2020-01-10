//@ts-check
const { add, subtract, divide, multiply } = require("./calculator");

/**
 * Student Name
 * @type {string}
 */
const studentName = "John Doe";

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * @type {{id: number, text: string}}
 */
const todo = {
  id: 1,
  text: "Hello"
};

/**
 * Calculate tax
 * @param {number} amount - Total Amount
 * @param {number} tax - Tax percentage to be applied
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: "Jill Valentine",
  age: 28,
  isActive: true
};

/**
 * Class to create a Person
 */
class Person {
  /**
   *
   * @param {Object} personInfo - Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name - Persons name
     * @property {string|number} age - Persons age
     */
    this.name = personInfo.name;
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet - A greeting with the name and age
   * @returns {void}
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

//Checking the person class
/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
  name: "Jack Rykart",
  age: 30
});

console.log(person1.greet());

console.log(add(20, 50));
