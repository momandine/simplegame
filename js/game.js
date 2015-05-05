/***************************************************************
	Game Objects Initialization

	TODO: create hero object
		  create coin object

***************************************************************/

// Hero Object
var hero = {
    x: 100,
    y: 100,
    speed: 200,
    imageUrl: "images/hero.png"
}

// Coin Object

var coin = {
    x: 100,
    y: 150,
    imageUrl: "images/coin.jpg"
}

// Coin counter
var coinsCaught = 0;
var timeLeft = 60;

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

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = hero.imageUrl;	



// Coin Image Section
// uncomment the following lines once you've created your coin

var coinReady = false;
var coinImage = new Image();
coinImage.onload = function () {
    coinReady = true;
};
coinImage.src = coin.imageUrl;


var snd = new Audio("file.wav"); // buffers automatically when created
snd.play();

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
keyPressed = {};

//keydown event listener
addEventListener("keydown", 
                 function (event) {
                    keyPressed[event.keyCode] = true;
                 },
                 false)

//keyup event listener
addEventListener("keyup", 
                 function (event) {
                     delete keyPressed[event.keyCode];
                 },
                 false)


/***************************************************************
	Reset Game Function

	TODO: 	set hero position to the middle of the canvas
			set coin position to somewhere random

***************************************************************/

var reset = function () {

	//set hero position
    hero.x = canvas.width/2;
    hero.y = canvas.height/2;

	//set coin position
    coin.x = Math.random() * (canvas.width - 32);
    coin.y = Math.random() * (canvas.width - 32);


};

/***************************************************************
	Update Game Function
			where the game logic lives!

	INPUT: modifier = amount of time passed since the last frame

	TODO: 	updates hero position if arrow keys are pressed
			if hero is touching the coin, move coin and update points

***************************************************************/

var update = function (modifier) {
    if (timeLeft <= 0) {
        return
    }
	//checks which keys are pressed
    var steps = hero.speed * modifier;
    if (keyCode.up in keyPressed) {
        if (hero.y > 0) {
            hero.y -= steps;
        }
    }
    if (keyCode.down in keyPressed) {
        if (hero.y < canvas.height - 32) {
            hero.y += steps;
        }
    }
    if (keyCode.left in keyPressed) {
        if (hero.x > 0) {
            hero.x -= steps;
        }
    }
    if (keyCode.right in keyPressed) {
        if (hero.x < canvas.width - 32) {
            hero.x += steps;
        }
    }

	// checks if hero is touching coin
};



/***************************************************************
	Render Function
			renders our game by drawing our gameobjects on the canvas

	TODO: 	draw the background onto the entire canvas
			draw the hero and coin in their (x,y) positions
			render the score in the top left

***************************************************************/

var render = function (delta) {

	//draw background
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

	//draw hero
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }

	//draw coin
    if (heroReady) {
        ctx.drawImage(coinImage, coin.x, coin.y);
    }

	//score rendering
    ctx.fillColor = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Coins caught: " + coinsCaught, 32, 32);
    
    //Timer rendering
    ctx.fillText("Time left: " + timeLeft.toFixed(2), 230, 32)

};

var gameOver = function () {
    ctx.fillText("GAME OVER", canvas.width/2 - 50, canvas.height/2);
    ctx.fillText("Score = " + coinsCaught, canvas.width/2 - 50, canvas.height/2 + 30);
}

/***************************************************************
	Main Function & Setup 
		
	Leave this section alone if you know what's good for you!

***************************************************************/

var main = function () {
	var now = Date.now();
	var delta = now - then;

    if (timeLeft > 0) {
        timeLeft -= delta / 1000;
        update(delta / 1000);
        render();
    }
    else {
        gameOver()
    }

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

