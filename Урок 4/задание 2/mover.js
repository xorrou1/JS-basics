"use strict";

let mover = {

	/**
     * Проверяет может ли пользователь перейти на точку.
     * @param {{x: int, y: int}} nextPoint Точка, которую проверяем.
     * @returns {boolean} true если пользователь может перейти в направлении, false если нет.
     */
    canPlayerMakeStep(nextPoint) {
		return nextPoint.x >= 0 &&
			 nextPoint.x < config.colsCount &&
			 nextPoint.y >= 0 &&
			 nextPoint.y < config.rowsCount;
  },

  /**
   * Получает и отдает направление от пользователяю.
   * @property{int} Возвращает направление введенное пользователем.
   */
  getDirection() {

	 const avaliblelDirection = [1, 2, 3, 4, 6, 7, 8, 9];
	 
    for (;;) {
      let direction = parseInt(
        prompt(
          "В ведите число (2 ,4 ,6 ,8) для перемещения по вертикали и горизнтали." +
            "\n" +
            "В ведите число (1, 3, 7, 9) для движения по диагонали." +
            "\n" +
            "Для выхода нажмите 'Отмена'."
        )
		)
		
      if (isNaN(direction)) {
        return null;
      }
      if (!avaliblelDirection.includes(direction)) {
        alert(
          "Для перемещения необходимо ввести одно из чисел 1 ,2 ,3 ,4 ,6 ,7 ,8 ,9"
        );
        continue;
		}

      return direction;
    }
  },

  /**
   * Отдает следующую точку в которой будет находиться пользователь после движения.
   * @param {int} direction Направление движения игрока.
   * @returns {{x: int, y: int}} Следующая позиция игрока.
   */
  getNextPosition(direction) {
    // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
    const nextPosition = {
      x: player.x,
      y: player.y,
    };

    switch (direction) {
      case 1:
        nextPosition.y++;
        nextPosition.x--;
        break;
      case 2:
        nextPosition.y++;
        break;
      case 3:
        nextPosition.y++;
        nextPosition.x++;
        break;
      case 4:
        nextPosition.x--;
        break;
      case 6:
        nextPosition.x++;
        break;
      case 7:
        nextPosition.x--;
        nextPosition.y--;
        break;
      case 8:
        nextPosition.y--;
        break;
      case 9:
        nextPosition.y--;
        nextPosition.x++;
        break;
	 }

	 return nextPosition;
  },
};
