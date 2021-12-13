var hypnoticBall, database;
var position;
var gameState = 0;
var playerCount
var form, player, game
var allPlayers
var c1, c2 , c3, c4, cars
var c1img, c2img , c3img, c4img
function preload(){
  c1img = loadImage('images/car1.png')
  c2img = loadImage('images/car2.png')
  c3img = loadImage('images/car3.png')
  c4img = loadImage('images/car4.png')
  track = loadImage('images/track.jpg')

}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20, displayHeight-30)
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){

  if(playerCount === 1){
      game.update(1)
      
  }
  if(gameState === 1){
    clear()
    game.play()
  }
  if(gameState === 2){
    game.end();
  }
   
}