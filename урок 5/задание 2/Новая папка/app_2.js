'use strict';


const buttons = document.querySelectorAll('button');
const pB = document.querySelectorAll('.product-box');
const product = document.querySelectorAll('.product-i'); 


buttons.forEach(function(button){
	button.addEventListener("click", function (event){
		cardReplacement(event);
	})
});

cardReplacement(clickButtonEvent){
	const cardNode = clickButtonEvent.target.parentNode;

	
};