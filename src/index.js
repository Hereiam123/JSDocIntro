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
