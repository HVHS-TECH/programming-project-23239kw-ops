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
}


function setup() {
	console.log("setup: ");
	cnv = new Canvas(1920, 940);
  player = new Sprite(100, height-100, 200, 50, 'd');
  imgPlayer.resize(200, 30);
  player.image = (imgPlayer);

  base

  birdWave = new Group();

  playerTilt = 0;

  power = 0;

  birdIntensity = 1;

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

  if (mouse.pressing()) {

    if (power < 100) {
      power += 1;
    }

  }

  if (mouse.released()) {
      let radians = playerTilt * (Math.PI / 180);
      let barrelLength = 100;

      let spawnX = player.x + barrelLength * Math.cos(radians);
      let spawnY = player.y + barrelLength * Math.sin(radians);

      playerProjectile = new Sprite(spawnX, spawnY, 20, 'd');

      playerProjectile.vel.x = power * Math.cos(radians);
      playerProjectile.vel.y = power * Math.sin(radians);
      playerProjectile.colour = ('black')

      power = 0

      birdWave.collides(playerProjectile, func2Call);
	    function func2Call(_ssss,_playerProjectile) {
	      _ssss.remove();
        _playerProjectile.remove();
      }
  }


  if (birdWave.length === 0){
    birdIntensity += 1;
    for (i = 0; i < birdIntensity; i++) {
    bird = new Sprite(width, random(0,height), 50, 50, 'd');
    bird.vel.x = -5;
	  bird.color = 'red';
	  birdWave.add(bird);

	}
  }
}

/*******************************************************/
//  END OF APP
/*******************************************************/