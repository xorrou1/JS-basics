'use strict';

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

/**
 * 
 * @param {number} arg1 значение числа
 * @param {number} arg2 значение числа
 * @param {string} operation операция
 * 
 */
function mathOperation(arg1, arg2, operation){
	switch( operation){
		case('сложение'):
			alert(addition(arg1,arg2));
			break;
		case('вычитание'):
			alert(subtraction(arg1,arg2));
			break;

		case('умножение'):
			alert(multiplication(arg1,arg2));
			break;

		case('деление'):
			alert(division(arg1,arg2));
			break;
			
		default:
			alert(`${operation} не подходящая операция.`);
	}
}

let arg1 = parseInt(prompt('В ведите число'));
let arg2 = parseInt(prompt('В ведите число'));
let operation = prompt('Введите название операции из представленного списка:сложение,вычитание,умножение,деление');

mathOperation(arg1, arg2, operation);