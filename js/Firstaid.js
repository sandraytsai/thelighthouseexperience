createFirstaids= function() {
  createFirstaid(800, 0);
  createFirstaid(1150, 0);
  createFirstaid(1700, 0);
};

createFirstaid= function(x,y) {
  var firstaid = firstaids.create(x, y, 'firstaid');
  firstaid.body.gravity.y = 300;
  firstaid.body.bounce.y = 0.3;
};