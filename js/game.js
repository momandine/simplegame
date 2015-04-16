/***************************************************************
	Game Objects Initialization

	TODO: create hero object
		  create coin object

***************************************************************/

// Hero Object



// Coin Object



/***************************************************************
	Canvas & Graphics Initialization
			creates canvas & initializes images

	TODO: uncomment the Hero Image and Coin Image section
			once you've finished creating their objects

***************************************************************/

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";	//fill this in with your background image


// Hero Image Section
// uncomment the following lines once you've created your hero

// var heroReady = false;
// var heroImage = new Image();
// heroImage.onload = function () {
// 	heroReady = true;
// };
// heroImage.src = hero.imageUrl;	



// Coin Image Section
// uncomment the following lines once you've created your coin

// var coinReady = false;
// var coinImage = new Image();
// coinImage.onload = function () {
// 	coinReady = true;
// };
// coinImage.src = coin.imageUrl;



/***************************************************************
	Keyboard Controls

	TODO:   create keysPressed to track which keys are currently pressed
			when a key is pressed (keydown), add it to keysPressed	
			when a key stops being pressed (keyup), remove it from keysPressed

***************************************************************/

/*
These are the keycodes for the arrow keys.
We've simply mapped them to more meaningful
names so that you can check for keyCode.left 
instead of 37 to see if the keft key is pressed
*/
var keyCode = { 
	left: 37,
	up: 38,
	right: 39,
	down: 40
};

//keyPressed object


//keydown event listener


//keyup event listener




/***************************************************************
	Reset Game Function

	TODO: 	set hero position to the middle of the canvas
			set coin position to somewhere random

***************************************************************/

var reset = function () {

	//set hero position


	//set coin position


};

/***************************************************************
	Update Game Function
			where the game logic lives!

	INPUT: modifier = amount of time passed since the last frame

	TODO: 	updates hero position if arrow keys are pressed
			if hero is touching the coin, move coin and update points

***************************************************************/

var update = function (modifier) {	

	//checks which keys are pressed



	// checks if hero is touching coin
	


};



/***************************************************************
	Render Function
			renders our game by drawing our gameobjects on the canvas

	TODO: 	draw the background onto the entire canvas
			draw the hero and coin in their (x,y) positions
			render the score in the top left

***************************************************************/

var render = function () {

	//draw background


	//draw hero


	//draw coin


	//score rendering



};

/***************************************************************
	Main Function & Setup 
		
	Leave this section alone if you know what's good for you!

***************************************************************/

var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
