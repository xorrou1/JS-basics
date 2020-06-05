'use strict';

let ticTacToe = {

	gameTableElement:document.getElementById('game'),
	status:'playing',
	mapValues: [
		['','',''],
		['','',''],
		['','',''],
	],
	phase: 'X',

	/**
	 * Инициализация игры
	 */
	init(){
		//Выводим всеячейки.
		this.renderMap();
		// Инициализация обработки событий.
		this.initEventHandlers();
	},

	/**
	 * Вывод ячеек в HTML
	 */
	renderMap(){
		for(let row = 0; row < 3 ; row++){
			const tr = document.createElement('tr');
			this.gameTableElement.appendChild(tr);
			for(let col = 0; col < 3; col++){
				let td = document.createElement('td');
				td.dataset.row  = row.toString();
				td.dataset.col = col.toString();
				tr.appendChild(td);
			}
		}
	},

	/**
	 * Инициализировать обработчик событий.
	 */
	initEventHandlers(){
		//Ставим обработчик, при клике на таблицу вызывается функция this.cellClickHandler.
		this.gameTableElement.addEventListener('click', event =>this.cellClickHandler(event));
	},

	/**
	 * Обработчик события клика.
	 * @param{MouseEvent} event
	 */
	cellClickHandler(event){
		//Если клик не нужно обрабатывать, уходим из функции.
		if(!this.isCorrectClick(event)){
			return;
		}

		//заполняем ячеку.
		this.fillCell(event);
		//Если кто-то выиграл, заходимв if.
		if(this.hasWon()){
			//Ставим в статус в 'Остановленно'.
			this.setStatusStopped();
			//Сообщает о победе пользователя.
			this.sayWonPhrase();
		}

		//Миняем фигуру(крестик или нолик).
		this.togglePhase();

	},

	/**
	 * Проверка был ли коректный клик, что описан в событии event.
	 * @param {Event} event
	 * @returns {boolean} Вернет true в случае если статус игры 'Играем', клик что описан в 
	 * объекте по ячейке куда бфл произведен клик был по пустой ячейке. 
	 */
	isCorrectClick(event){
		return this.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
	},

	/**
	 * Проверка что мы играем, что игра не закончена.
	 * @returns{boolean} Вернет true, статус игры 'играем', иначе false.
	 */
	isStatusPlaying(){
		return this.status === 'playing';
	},

	/**
	 * Проверка что клик был по ячейке.
	 * @param {Event} event 
	 * @param {HTMLElement}event.target
	 * @param {boolean} Вернет true, если клик был по ячейке, иначе false.
	 */
	isClickByCell(event){
		return event.target.tagName === 'TD';
	},

	/**
	 * Проверка что в ячейке не ставили значение( крестик или нолик).
	 * @param {event} event 
	 * @param {HTMLElement} event.target
	 * @param {boolean} Вернет true, если ячейка пуста, иначе False
	 */

	isCellEmpty(event){
		//Получаем строку и колонку куда кликнуть.
		let row = +event.target.dataset.row;
		let col = +event.target.dataset.col;

		return this.mapValues[row][col] === '';
	},

	fillCell(event){
		//Получаем строку и колонку куда кликнуть.
		let row = +event.target.dataset.row;
		let col = +event.target.dataset.col;
		//Заполняет ячейку и ставит значение в массиве,в свойство mapValues.
		this.mapValues[row][col] = this.phase;
		event.target.textContent = this.phase;
	},

	/**
	 * Проверка есть ли выиграшная ситуация на карте.
	 * @returns{boolean} Вернет  true, если игра выиграна, иначе false.
	 */
	hasWon(){

		return this.isLineWon({x:0, y:0},{x:1, y:0},{x:2, y:0}) ||
			this.isLineWon({x:0, y:1},{x:1, y:1},{x:2, y:1}) ||
			this.isLineWon({x:0, y:2},{x:1, y:2},{x:2, y:2}) ||

			this.isLineWon({x:0, y:0},{x:0, y:1},{x:0, y:2}) ||
			this.isLineWon({x:1, y:0},{x:1, y:1},{x:1, y:2}) ||
			this.isLineWon({x:2, y:0},{x:2, y:1},{x:2, y:2}) ||

			this.isLineWon({x:0, y:0},{x:1, y:1},{x:2, y:2}) ||
			this.isLineWon({x:0, y:2},{x:1, y:1},{x:2, y:0});

	},

	/**
	 * Проврка есть ли выиграная ситуация на линии.
	 * @param {{x: int y:int}} a 1-ая ячейка. 
	 * @param {{x: int y:int}} b 2-ая ячейка.
	 * @param {{x: int y:int}} c 3-ая ячейка.
	 * @returns{boolean} Вернет  true, если линия выиграла, иначе false.
	 */
	isLineWon(a, b, c){
		let value = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x];
		return value === 'XXX' || value === '000';
	},

	/**
	 * Ставим статус что игра 'остановлена'.
	 */
	setStatusStopped(){
		this.status = 'stopped';
	},

	sayWonPhrase(){
		let figure = this.phase === 'X'?'Кестики':'Ноликт';
		alert(`${figure} выиграли!`);
	},

	/**
	 * Меняет фигуру (крестик или нолик).
	 */
	togglePhase(){
		this.phase = this.phase === 'X'?'0':'X';
	}

};

// Запускаем игру при загрузке страницы.
window.addEventListener('load', ticTacToe.init.bind(ticTacToe));