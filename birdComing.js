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
}


function setup() {
	console.log("setup: ");
	cnv = new Canvas(1920, 940);

  player = new Sprite(100, height-100, 200, 50, 'k');
  imgPlayer.resize(200, 30);
  player.image = (imgPlayer);

  base = new Sprite(5, height/2, 10, height, 'k')

  playerProjectile = new Sprite(55555, 55555, 20, 'd');

  birdWave = new Group();

  playerTilt = 0;

  power = 0;

  birdIntensity = 1;

  bossFight = 'false';

  birdBossNum = 1;
  
  score = 0;

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBg);

// boss trigger //
  if (kb.pressing('p')){
    bossFight = 'true';
    birdIntensity = 11;
  }

  textSize(30)
  fill('white');
  stroke('gray');
  text('Power:' + power, 200, height-50,);
  fill('orange');
  stroke('red');
  text('WAVE: ' + (birdIntensity - 1), width/2-500, height/2);
  textSize(60)
  fill('white');
  stroke('black');
  text('Score:' + score, width/2, 100,);

  text(playerProjectile.vel.x, width/2, 300,);
  text(playerProjectile.vel.y, width/2, 500,);

  player.rotation = playerTilt;
//fix dis
  //playerProjectile.vel.y += (playerProjectile.x/500);//

// boss fight initiate //
  if ((birdIntensity-1) === 10) {
    bossFight = 'true';
    if (birdBossNum > 0){
      birdBoss = new Sprite(width, height/2, 200, 200, 'k');
      birdBoss.vel.x = -1;
	    birdBoss.img = (imgBird);
      imgBird.resize(200, 200);
      birdBossHP = 1000;
      birdBossNum = 0;

      if (birdBoss.collides(playerProjectile)){
        birdBossHP -= 50;
      }
    }
  }


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

// bird hit detection //
      birdWave.collides(playerProjectile, birdHit);
	    function birdHit(_ssss,_playerProjectile) {
	      _ssss.remove();
        _playerProjectile.remove();
        score += 50;
      }

      power = 0;
// bird hit detection //
  }

  if (birdWave.length === 0 && bossFight === 'false'){
    birdIntensity += 1;
    for (i = 0; i < birdIntensity; i++) {
      bird = new Sprite(width, random(100,height-100), 50, 50, 'k');
      bird.vel.x = -2;
	    bird.img = (imgBird);
      imgBird.resize(70, 70);
	    birdWave.add(bird);

	  }
  }

  if (bossFight === 'true'){
    fill('orange');
    stroke('red');
    textSize(50)
    text('Boss Bird Incoming! Health: ' + birdBossHP, width/2, height/2);

    if (birdBossHP < 1) {
      birdBoss.remove()
    }
  }
}

/*******************************************************/
//  END OF APP
/*******************************************************/