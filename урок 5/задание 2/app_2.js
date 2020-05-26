'use strict';


const buttoN = document.querySelectorAll('button');
const product = document.querySelectorAll('.product-i');
const heading = document.querySelectorAll('.product-heding');


buttoN.forEach(function(button) {
	button.addEventListener("click", function (event){
		cardReplacement(event);
	});
});

function cardReplacement(clickButtonEvent){
	const cardNode = clickButtonEvent.target.parentNode;

	const card = {
		wrap: cardNode,
		img: cardNode.querySelector('.product-i'),
		productName: cardNode.querySelector('.product-heding'),
		button: cardNode.querySelector('button')
	};


	const textButton = card.button.innerText;
	if(textButton === 'Подробнее'){
		showMoreText(card);
	} else {
		hideMoreText(card);
	}



	//Чесно пытался по другому сделать, но в итоге пришол к выводу что ваш вариант самыйоптимальный.
	/* function showMoreText(card){
		paragraph.classList.add('product-text');
		paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati reprehenderit ipsam nobis est consectetur placeat ex, dolore quaerat hic?';
		cardNode.replaceChild(paragraph,card.img);
		card.button.innerText = 'Отмена';
	};

	function hideMoreText(card){
		const imd = document.createElement('.product-i');
		imd.innerHTML = 
		card.img = document.querySelector('.product-i');
		cardNode.replaceChildproduct(card.img,paragraph);
		console.log(card);
	}; */
}; 

function showMoreText(card){
	card.img.style.display = 'none';
	const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati reprehenderit ipsam nobis est consectetur placeat ex, dolore quaerat hic?';
	card.productName.insertAdjacentHTML('afterend', `<p class= "product-text">${text}</p>`);
	card.button.innerText = 'Отмена';
};

function hideMoreText(card){
	card.img.style.display = 'block';
	card.wrap.querySelector('.product-text').remove();
	card.button.innerText = 'Подробнее';
}
