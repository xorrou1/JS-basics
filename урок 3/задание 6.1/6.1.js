'use strict';

let iteration = Number(prompt('В ведите количесво повтрений'));

function pyramid() {

	let rr = [];

	for( let i = 0 ; i < iteration ; i++){
		rr.push('*');
		let ra = rr.join('');
		console.log(ra);
	}

};

pyramid();

