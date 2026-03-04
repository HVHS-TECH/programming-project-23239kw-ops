/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by Kevin
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

function preload() {

  imgPlayer = loadImage('../assets1/images/cannon_1.png');

  
  playerTilt = 0;

  power = 0;

}


function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
  player = new Sprite(100, height-100, 200, 50, 'd');
  imgPlayer.resize(200, 50);
  player.image = (imgPlayer);

  world.gravity = 10;

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightBlue');
  text(power, 200, height-50,);
  text('Power:', 150, height-50,);

  player.rotation = playerTilt;

  if (kb.pressing('w')) {

    if (playerTilt>-90){
      playerTilt -= 1;
    }

	}

  if (kb.pressing('s')) {

    if (playerTilt<0){
      playerTilt += 1;
    }

	}

  if (mouse.presses()) {

    let radians = playerTilt * (Math.PI / 180);
    let barrelLength = 100;

    let spawnX = player.x + barrelLength * Math.cos(radians);
    let spawnY = player.y + barrelLength * Math.sin(radians);

    playerProjectile = new Sprite(spawnX, spawnY, 20, 'd');

    playerProjectile.vel.x = power * Math.cos(radians);
    playerProjectile.vel.y = power * Math.sin(radians);
    playerProjectile.colour = ('black')

  }

    if (power <100) {
      power += 1;
    } else{
      power = 0;
    }
}

/*******************************************************/
//  END OF APP
/*******************************************************/