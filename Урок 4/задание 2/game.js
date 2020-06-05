"use strict";

let game = {
  /**
   * Запускает игру
   */
  run() {
    for (;;) {
      //Получаем направление от игрока
      const direction = mover.getDirection();

      // Если игрок сказал что хочет выйти, то игра заканчивается.
      if (direction === null) {
        console.log("Игра окончена");
        return;
		}
		
		// Получаем следующую точку пользователя в зависимости от направления.
		const nextPoint = mover.getNextPosition(direction);
		
		// Если пользователь может пройти на новую точку, то двигаем игрока.
      if (mover.canPlayerMakeStep(nextPoint)) {
        renderer.clear();
        player.move(nextPoint);
        renderer.render();
      }
    }
  },

  //Этот метод выполняется при начале игры
  init() {
    console.log('Вы отображаетесь на поле в виде "@"');
    // Отображаем нашу игру.
    renderer.render();
    console.log(
      "Чтобы начать игру введите в консоли game.run() и нажмите Enter"
    );
  },
};

game.init();
