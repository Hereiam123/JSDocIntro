//@ts-check

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
