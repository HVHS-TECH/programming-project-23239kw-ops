/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by Kevin
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

function preload() {

  imgPlayer = loadImage('../assets1/images/cannon.png');

  
  playerTilt = 0;

  power = 0;

}


function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
  player = new Sprite(100, height-100, 200, 50, 'd');
  imgPlayer.resize(200, 100);
  player.image = (imgPlayer);
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
		
		playerProjectile = new Sprite(player.x + (100-(playerTilt)^2), player.y, 20, 'd');
    playerProjectile.vel.x = power-(power/2);
    playerProjectile.vel.y = playerTilt;


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