var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runers, runer1, runer2, runer3,  runer4;

var track,  runer1_img,  runer2_img, runer3_img,runer4_img;

function preload(){
  track = loadImage("images/track.jpg");
  runer1_img = loadImage("images/car1.png");
  runer2_img = loadImage("images/car2.png");
  runer3_img = loadImage("images/car3.png");
  runer4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
