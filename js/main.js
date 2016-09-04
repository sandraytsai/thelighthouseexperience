var game;

window.onload = function() {

  if (screen.width > 1500) {
    // Desktop or laptop --- note: 4th argument is div tag
    game = new Phaser.Game(640, 480, Phaser.AUTO, "ph_game");

  } else {
    // Mobile device
    game = new
    Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
  }

  game.state.add("stateMain", stateMain);
  game.state.add("stateTitle", stateTitle);
  game.state.start("stateTitle");
}
