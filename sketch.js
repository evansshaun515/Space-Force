var spaceship,spaceshipImg;

var alien1, alienImg, Aliens;

const START = 0;
const PLAY = 1;
const END = 2;

var gameState = START;

var timer;

var score;

var bg,bgImg;

var edges;

var spaceMusic;

function preload(){
  
  spaceshipImg = loadImage('Ship.png');
  
  alienImg = loadImage('Alien.jpg');
  alien2Img = loadImage('Alien2.png');

  bgImg = loadImage('Space background.jpg');

  spaceMusic = loadSound('open-space.mp3');
  
}

function setup() {
 
  createCanvas(windowWidth,windowHeight);
  
  spaceship = createSprite(800,600,20,20);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.07;
  

  bg = createSprite(600,600);
  bg.addImage(bgImg);
  bg.scale = 2.5;
  bg.velocityY = 2;

   Alien1 = new Group();


  spaceMusic.loop();

  

  score = 0;
}

function draw() {
 
  background(0);

  drawSprites();

  if(bg.y > 600)
    {
      bg.y = 300;
    }

  textSize(20);
  fill("gold");
  text('Distance Traveled: ' + score, 50,50);

  edges = createEdgeSprites();
  spaceship.bounceOff(edges);

  if (gameState === START){
    text("Press right and left arrows to move the spaceship", 600, 50);
    if (keyDown('left_arrow') || keyDown('right_arrow')){
      gameState = PLAY;
    }
    
  }
  
  if (gameState === PLAY) {

    if (keyDown('left_arrow'))
    {
      spaceship.x = spaceship.x - 6;
    }
    
    if (keyDown('right_arrow'))
    {
      spaceship.x = spaceship.x + 6;
    }

    spawnAlien1();
 
    if (Alien1.isTouching(spaceship))
    {
      Alien1.destroyEach();
      gameState = END;
    }
    
    score = score + Math.round(getFrameRate()/60);
    
    
      
  }
  
   else if (gameState === END)
    {
      background(bgImg);
      stroke('black');
      fill('gold');
      textSize(30);
      text('GAME OVER',687,400);
      textSize(20);
      text('Press "space" to restart',675, 450);

      if (keyDown('space'))
      {
        reset();
      }
    }
}

 function reset(){
  gameState = PLAY;
  score = 0;
  }

  function spawnAlien1()  
{
  
  if (World.frameCount % 100 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 133 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 14;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 167 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 194 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 126 == 0) 
  {
    alien1 = createSprite(Math.round(random(100,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 13;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   
  if (World.frameCount % 129 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,500)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 111 == 0) 
  {
    alien1 = createSprite(Math.round(random(500,100)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 15;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 170 == 0) 
  {
    alien1 = createSprite(Math.round(random(500,100)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 15;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }

   if (World.frameCount % 108 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 133 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 14;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 161 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 199 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 122 == 0) 
  {
    alien1 = createSprite(Math.round(random(100,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 13;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   
  if (World.frameCount % 120 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,500)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 115 == 0) 
  {
    alien1 = createSprite(Math.round(random(500,100)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 15;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 174 == 0) 
  {
    alien1 = createSprite(Math.round(random(500,100)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 15;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  if (World.frameCount % 102 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,600)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 130 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,600)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 14;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 168 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,600)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 192 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,600)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 127 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,600)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 13;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   
  if (World.frameCount % 120 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,650)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 116 == 0) 
  {
    alien1 = createSprite(Math.round(random(1100,650)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 15;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 170 == 0) 
  {
    alien1 = createSprite(Math.round(random(1100,650)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 15;
    console.log(Math.round(random(1100,650)));
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  if (World.frameCount % 103 == 0) 
  {
    alien1 = createSprite(Math.round(random(1600,700)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
   if (World.frameCount % 142 == 0) 
  {
    alien1 = createSprite(Math.round(random(1600,700)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 14;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  if (World.frameCount % 126 == 0) 
  {
    alien1 = createSprite(Math.round(random(1600,700)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 16;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
   if (World.frameCount % 138 == 0) 
  {
    alien1 = createSprite(Math.round(random(1600,700)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 13;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    
  }
  
}
