'use strict';

let a = parseInt(prompt('В ведите число'));
let b = parseInt(prompt('В ведите число'));


/**
 * Функция производит арефметическое сложение.
 * @param {number} значение числа 
 * @param {number} значение числа
 * @returns {number} возврат в функцию
 */
function addition(a,b){
	return a + b;
}

/**
 * Функция производит арефметическое вычитание.
 * @param {number} значение числа 
 * @param {number} значение числа
 * @returns {number} возврат в функцию
 */
function subtraction(a,b){
	return a - b;
}

/**
 * Функция производит арефметическое умножение.
 * @param {number} значение числа 
 * @param {number} значение числа
 * @returns {number} возврат в функцию
 */
function multiplication(a,b){
	return a * b;
}

/**
 * Функция производит арефметическое деление.
 * @param {number} значение числа 
 * @param {number} значение числа
 * @returns {number} возврат в функцию
 */
function division(a,b){
	return a / b;
}

console.log(addition(a,b));
console.log(subtraction(a,b));
console.log(multiplication(a,b));
consol.log(division(a,b));