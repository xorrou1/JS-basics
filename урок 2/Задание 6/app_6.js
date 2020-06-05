"use strict";

let deposit = prompt('В ведите сумму которую вы хотите положить на счет.');

//Вариант 1
let deposit1 = '';
for (;;){
	if (isNaN(deposit) == true || deposit == null){
		alert('Вы ввели не коректное число');
		break 

	} else if(deposit > 9 && deposit <= 20){
		alert(`Ваша сумма в ${deposit} рублей успешно зачислена.`);
		break

	} else if (deposit1 = deposit.substring(deposit.length - 1)) {
		if (deposit1 == 1){
			deposit1 = 'рубль';
		} else if (deposit1 != 0 && deposit1 <= 4) {
			deposit1 = 'рубля';
		} else {
			deposit1 = 'рублей';
		}
		alert(`Ваша сумма в ${deposit} ${deposit1} успешно зачислена.`);
		break
	};
}; 

//Вариант 2
function declension(num){
	let deposit2 = Number(elementLength(num));

	switch(deposit2){
		case 2:
		case 3:
		case 4:
			alert(`Ваша сумма в ${deposit} рубля успешно зачислена.`);
			break;
		case 1:
			alert(`Ваша сумма в ${deposit} рубль успешно зачислена.`);
			break;
		default:
			alert(`Ваша сумма в ${deposit} рублей успешно зачислена.`);
	};

};

function elementLength(n){
	if(n > 9 && n <= 20){
		return 5;
	} else {
		return n.charAt(n.length - 1);
	}
};


declension(deposit);


