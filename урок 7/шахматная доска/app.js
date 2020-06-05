'use strict';

const boards = document.querySelector('.board');
const cB = document.querySelector('.chess-board');
const cT = document.querySelector('.chess-title')

let app = {
	config: {
		 rows: [8, 7, 6, 5, 4, 3, 2, 1],
		 cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
	},

	run() {
		 //генерируем доску
		 let board = this.generateBoard();
		 //добавляем доску в body
		 //document.cB.innerHTML = board;
		 cT.insertAdjacentHTML("afterend", board);
		 //добавляем колонку с номерами строк
		 this.insertRowsNumbers();
		 //добавляем строку с названиями колонок
		 this.insertColsChars();
	},


	/**
	 * Метод генерирует игровое поле 8 на 8.
	 * @returns {string} html разметка в виде строки.
	 */
	generateBoard() {
		 let board = "";
		 let rowStartWithColor = 'white';
		 for (let i = 0; i < this.config.rows.length; i++) {
			  let row = "";
			  if (rowStartWithColor == 'white') {
					row = this.generateRow(rowStartWithColor, this.config.rows[i]);
					rowStartWithColor = 'black';
			  } else {
					row = this.generateRow(rowStartWithColor, this.config.rows[i]);
					rowStartWithColor = 'white';
			  }
			  board += row;
		 }
		 return `<div class="board">${board}</div>`;
	},

	/**
	 * Метод генерирует строку с классом '.board-line' с закрашенными ячейками '.border-cell'.
	 * @param {string} startWithColor с какого цвета строка начинается от левого края,
	 * м.б. "white", "black".
	 * @param {number} rowNum номер строки от 8 до 1, т.к. шахматная доска формируется
	 * сверху вниз, поэтому номер начинается с 8.
	 * @returns {string} html-разметка, строка '.board-line' с оформленными внутри ячейкой  .'.border-cell'.
	 */
	generateRow(startWithColor, rowNum) {
		 let currentColorClass = startWithColor;
		 let row = "";
		 for (let i = 0; i < this.config.cols.length; i++) {
			  let field = "";
			  if (currentColorClass === 'white') {
					field = this.generateField('white', rowNum, this.config.cols[i]);
					currentColorClass = 'blackField';
			  } else {
					field = this.generateField('black', rowNum, this.config.cols[i]);
					currentColorClass = 'white';
			  }
			  row += field;
		 }
		 return `<div class="board-line">${row}</div>`;
	},

	/**
	 * Метод генерирует ячейку '.border-cell' с нужным классом цвета
	 * и координатами на поле.
	 * @param {string} color класс цвета ячейки, м.б. "white", "black".
	 * @param {number} rowNum номер строки игровой доски.
	 * @param {string} colChar буква колонки игровой доски.
	 * @returns {string} html-разметка с заполненными атрибутами координат и классом цвета.
	 */
	generateField(color, rowNum, colChar) {
		 return `<div data-rownum="${rowNum}" data-colchar="${colChar}" class="border-cell border-cell-${color}"></div>`;
	},

	/**
	 * Метод вставляет на существующую доску колонку 
	 * слева, с указанием номера строки.
	 */
	insertRowsNumbers() {
		 let trs = document.querySelectorAll('.board-line');
		 for (let i = 0; i < trs.length; i++) {
			  let td = document.createElement('div');
			  td.innerText = this.config.rows[i];
			  trs[i].insertAdjacentHTML("afterbegin", `<div class="border-cell border-cell-number">${td.innerText}</div>`);
		 }
	},

	insertColsChars() {
		 let tr = document.querySelector('.board');
		 tr.insertAdjacentElement("beforeend", `<div class="board-line">${tr}</div>`);
		 tr.innerHTML += '<div class="board-line"></div>';
		 for (let i = 0; i < this.config.cols.length; i++) {
			  tr.innerHTML += `<div class='board-cell'>${this.config.cols[i]}</div>`;
		 }
		 //let tbody = document.querySelector('tbody');
		 //tbody.insertAdjacentElement("beforeend", tr);
	},
}

app.run();



//console.log(boards);