createPlayer = function() {
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 1200;
  player.body.collideWorldBounds = true;

  facing = 'right';

  player.animations.add('left', [8,9,10,9], 6, true);
  player.animations.add('right', [3,4,5,4], 6, true);
  player.animations.add('jumpleft', [7], 1, true); 
  player.animations.add('jumpright', [6], 1, true); 

};

playerMovement = function() {
  player.body.velocity.x = 0;

  if (cursors.up.isDown && facing == 'left' ) {
    player.animations.play('jumpleft');
    jump.play();
    if ( player.body.touching.down ){
      player.body.velocity.y = -500;
    };
    if (cursors.left.isDown) {
      player.body.velocity.x = -200;
    };
    if (cursors.right.isDown) {
      player.animations.play('jumpright');
      player.body.velocity.x = 200;
      facing ='right'
    }
  } else if (cursors.up.isDown && facing == 'right') {
    player.animations.play('jumpright');
    jump.play();
    if ( player.body.touching.down ){
      player.body.velocity.y = -500;
    };
    if (cursors.right.isDown) {
      player.body.velocity.x = 200;
    };
    if (cursors.left.isDown) {
      player.animations.play('jumpleft');
      player.body.velocity.x = -200;
      facing ='left'
    }
  } else if (cursors.left.isDown) {
    player.body.velocity.x = -200;
    player.animations.play('left');
    if (facing != 'left') {
      facing = 'left';
    }
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 200;
    player.animations.play('right');
    if (facing != 'right') {
      facing = 'right';
    }
  } else {
    player.animations.stop();
    if (facing == 'left') {
      player.frame = 13;
    } else {
      player.frame = 0;
    }
  };
};

playerFalls = function() {
  if (player.body.onFloor()) {
    health -= 100;
    restartWeek(player); 
  };
}

restartWeek = function(player) {
  health = 1000;
  bullets = 5;
  weapon.resetShots();

  if ( player.x <= 1600) {
    player.x = 5;
    player.y = 0;
  } else if ( player.x <= 3200 ) {
    player.x = 1605;
    player.y = 0;
  } else if ( player.x <= 4800) {
    player.x = 3205;
    player.y = 0;
  } else if ( player.x <= 6400) {
    player.x = 4805;
    player.y = 0;
  } else if ( player.x <= 8000) {
    player.x = 6405;
    player.y = 0;
  } else if ( player.x <= 8800) {
    player.x = 8005;
    player.y = 0;
  } else if ( player.x <= 9600) {
    player.x = 8805;
    player.y = 0;
  } else if ( player.x <= 11200) {
    player.x = 9605;
    player.y = 0;
  } else {
    player.x = 11205;
    player.y = 0;
  };
}

gameOver = function() {
  if (health <= 0) {
    var gameoverbutton = this.add.image(330, 200, 'pinkblock');
    gameoverbutton.fixedToCamera = true;
    var gameoverscreen = this.add.button(390, 250,"bullet", this.restartGame,this);
    gameoverscreen.fixedToCamera = true;
    player.kill();

    health = 1000;
    bullets = 5;
    weapon.resetShots();
  };
}

winGame = function() {
  if (player.body.x > 12750) {
    this.state.start("Ending");
    health = 1000;
    bullets = 5;
    weapon.resetShots();
  }
}