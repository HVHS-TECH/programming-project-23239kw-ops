/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by Kevin
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

function preload() {

  imgPlayer = loadImage('../assets/cannon_PNG7.png');

}


function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

    imgPlayer.resize(200, 50);
	
    player = new Sprite(100, height-100, 200, 50, 'd');
    player.image = (imgPlayer);

    

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightBlue')
}

/*******************************************************/
//  END OF APP
/*******************************************************/