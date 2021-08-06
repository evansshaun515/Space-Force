var spaceship,spaceshipImg;

var alien1, alien2, alien3, alienImg, Aliens;

var gameState = 'PLAY';

var timer;

var score;

function preload(){
  
  spaceshipImg = loadImage('Ship.png');
  
  alienImg = loadImage('Alien.jpg');
  alien2Img = loadImage('Alien2.png')
  
}

function setup() {
 
  createCanvas(windowWidth,windowHeight);
  
  spaceship = createSprite(800,600,20,20);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.07;
  

  
   Alien1 = new Group();
  // Alien2 = new Group();
  // Alien3 = new Group();

  score = 0;
}

function draw() {
 
  background('black');
  text('Score: ' + score, 50,50);
  
  if (gameState === 'PLAY') {
    
    if (keyDown('left_arrow'))
    {
      spaceship.x = spaceship.x - 6;
    }
    
    if (keyDown('right_arrow'))
    {
      spaceship.x = spaceship.x + 6;
    }

    // timer = time();
    // console.log('The current time is: ' + timer);
    
    spawnAlien1();
 
    if (Alien1.isTouching(spaceship))
    {
      Alien1.destroyEach();
    }
    
    score = score + Math.round(getFrameRate()/60);
    
    drawSprites();
      
  }
  
   else if (gameState === 'END')
    {
      background('black');
      stroke('black');
      fill('black');
      textSize(30);
      text('GAME OVER',300,300);
    }
  
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
    //Alien1.add(alien1);
  }
  
   if (World.frameCount % 130 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 14;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
   if (World.frameCount % 160 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
   if (World.frameCount % 190 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
   if (World.frameCount % 120 == 0) 
  {
    alien1 = createSprite(Math.round(random(100,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 13;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
  }

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
    //Alien1.add(alien1);
  }
  
   if (World.frameCount % 130 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 14;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
   if (World.frameCount % 160 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
   if (World.frameCount % 190 == 0) 
  {
    alien1 = createSprite(Math.round(random(600,50)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
   if (World.frameCount % 120 == 0) 
  {
    alien1 = createSprite(Math.round(random(100,50)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 13;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
  }
  if (World.frameCount % 100 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,600)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
  }
   if (World.frameCount % 160 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,600)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
   if (World.frameCount % 190 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,600)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
   if (World.frameCount % 120 == 0) 
  {
    alien1 = createSprite(Math.round(random(1200,600)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 13;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
  }
  
   if (World.frameCount % 111 == 0) 
  {
    alien1 = createSprite(Math.round(random(1100,650)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 15;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
  }
  if (World.frameCount % 100 == 0) 
  {
    alien1 = createSprite(Math.round(random(1600,700)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 12;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
  
   if (World.frameCount % 140 == 0) 
  {
    alien1 = createSprite(Math.round(random(1600,700)));
    alien1.addImage(alienImg);
    alien1.scale = 0.03;
    alien1.velocityY = 14;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
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
    //Alien1.add(alien1);
  }
   if (World.frameCount % 130 == 0) 
  {
    alien1 = createSprite(Math.round(random(1600,700)));
    alien1.addImage(alien2Img);
    alien1.scale = 0.03;
    alien1.velocityY = 13;
    
    
    spaceship.depth = alien1.depth;
    spaceship.depth = spaceship.depth +1;
    
    
    Alien1.add(alien1);
    alien1.lifetime = 620;
    //Alien1.add(alien1);
  }
  
}
