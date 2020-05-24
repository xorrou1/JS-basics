'use strict';

let renderer = {

	//Сюда запишем все что нужно отобразить
	map:'',

	/**
	 * отображает игру в консоли
	 */
	render(){
		for(let row = 0; row < config.rowsCount; row++){
			for(let col = 0; col < config.colsCount; col++){
				if(player.y === row & player.x === col){
					this.map += '@ ';
				} else {
					this.map += '- ';
				}
			}
			this.map += '\n';
		}
		console.log(this.map);
	},

	clear() {
		// Чистим консоль.
		console.clear();
		// Чистим карту.
		this.map = "";
  }
};