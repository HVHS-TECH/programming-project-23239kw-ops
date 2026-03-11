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

  imgBird = loadImage('../assets1/images/cardinal.png');

  imgBg = loadImage('../assets1/images/skyline.jpg');

  imgBoom = loadImage('../assets1/images/explosion.jpg');
}


function setup() {
	console.log("setup: ");
	cnv = new Canvas(1920, 940);

  player = new Sprite(100, height-100, 200, 50, 'k');
  imgPlayer.resize(200, 30);
  player.image = (imgPlayer);

  base = new Sprite(5, height/2, 10, height, 'k')

  playerProjectile = new Sprite(55555, 55555, 20, 'd');
  flash = new Sprite(55555, 55555, 20, 'k');

  birdWave = new Group();

  playerTilt = 0;

  power = 0;

  birdIntensity = 1;

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBg);

  
  fill('white');
  stroke('gray');
  text('Power:' + power, 200, height-50,);
  fill('orange');
  stroke('red');
  text('WAVE: ' + (birdIntensity - 1), width/2-500, height/2);

  player.rotation = playerTilt;

  playerProjectile.vel.y += playerProjectile.x/500;

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
      power += 2;
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
      playerProjectile.colour = ('black');

      flash = new Sprite(spawnX, spawnY, 60, 60, 'k');
      flash.image = (imgBoom);

      power = 0;

      birdWave.collides(playerProjectile, birdHit);
	    function birdHit(_ssss,_playerProjectile) {
	      _ssss.remove();
        _playerProjectile.remove();
      }

  }

  if (birdWave.length === 0){
    birdIntensity += 1;
    for (i = 0; i < birdIntensity; i++) {
      bird = new Sprite(width, random(100,height-100), 50, 50, 'k');
      bird.vel.x = -2;
	    bird.img = (imgBird);
      imgBird.resize(70, 70);
	    birdWave.add(bird);

	  }
  }
}

/*******************************************************/
//  END OF APP
/*******************************************************/