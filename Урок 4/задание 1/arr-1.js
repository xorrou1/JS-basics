'use strict';


let value = Number(prompt('Введите число от 0 - 999'));
let valueArr = [];

function BitConverter(units,tens,hundreds){
	this.units = units;
	this.tens = tens;
	this.hundreds = hundreds;
};

function getCheck(num){
	if(Number.isNaN(num) ||  !Number.isInteger(num) || num < 0 || num > 999){
		console.log(`Вы ввели не коректное число - ${num}`);
		return{};
	} else {
		arrayConverter(num);
		
	};
};

function arrayConverter(num){
	let presentValue = num;
	for(let i = 0; i <= 2; i++){
		let fractionalValue = Math.floor(presentValue/10);
		let tmt = presentValue - fractionalValue*10;
		valueArr.push(tmt);
		presentValue = fractionalValue;
	};
	return valueArr;
};

getCheck(value);
const bitConverter1 = new BitConverter(valueArr[0],valueArr[1],valueArr[2]);
console.log(bitConverter1);