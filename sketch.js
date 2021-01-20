var basket1,basket1_img,background_img,background1,apple,banana,grape,pineapple,watermelon;
var score = 0;
var appleGroup, bananaGroup, watermelonGroup, pineappleGroup, grapesGroup;
var timer = 10
function preload(){
  basket1_img = loadImage("images/basket.png");
  background_img = loadImage("images/background.jpg");
  apple = loadImage("images/apples.png");
  banana = loadImage("images/banana.png");
  grape = loadImage("images/grapes.png");
  pineapple = loadImage("images/pineapple.png");
  watermelon = loadImage("images/watermelon.png");
}

function setup(){
  createCanvas(displayWidth-60,displayHeight-75);
  background1 = createSprite(displayWidth/2,displayHeight/2)
  background1.addImage(background_img)
  background1.scale = 0.67
  
  basket1 = createSprite(displayWidth/2,displayHeight-150,20,20);
  basket1.setCollider("rectangle",0,80,150,150);
  basket1.addImage(basket1_img);

  appleGroup = new Group()
  bananaGroup = new Group()
  grapesGroup = new Group()
  pineappleGroup = new Group()
  watermelonGroup = new Group()
}

function draw(){
  background("white")
  if(keyDown("RIGHT_ARROW")){
    basket1.x = basket1.x + 15;
  }

  if(keyDown("LEFT_ARROW")){
    basket1.x = basket1.x - 15;
  }
  spawnFruits();
  for(var i = 0; i < appleGroup.length; i++){
  if(basket1.isTouching(appleGroup)){
    appleGroup.get(i).destroy();
    score++
  }
  else{
    appleGroup.setLifetimeEach(40)
  }
}

for(var i = 0; i < bananaGroup.length; i++){
  if(basket1.isTouching(bananaGroup)){
    bananaGroup.get(i).destroy();
    score++
  }
  else{
    bananaGroup.setLifetimeEach(40)
  }
}

for(var i = 0; i < grapesGroup.length; i++){
  if(basket1.isTouching(grapesGroup)){
    grapesGroup.get(i).destroy();
    score++
  }
  else{
    grapesGroup.setLifetimeEach(40)
  }
}

for(var i = 0; i < watermelonGroup.length; i++){
  if(basket1.isTouching(watermelonGroup)){
    watermelonGroup.get(i).destroy();
    score++
  }
  else{
    watermelonGroup.setLifetimeEach(40)
  }
}

for(var i = 0; i < pineappleGroup.length; i++){
  if(basket1.isTouching(pineappleGroup)){
    pineappleGroup.get(i).destroy();
    score++
  }
  else{
    pineappleGroup.setLifetimeEach(40)
  }
}
  drawSprites();

  fill("black")
  textSize(35)
  text("Score: "+score,1025,30);
  text("Time Remaining: "+timer,700,30)

  if(timer === 0 && score < 25){
    background1.destroy();
    text("YOU RAN OUT OF TIME",displayWidth/2,displayHeight/2)
    
  }
  if(score > 24){
    background1.destroy();
    text("YOU WIN",displayWidth/2,displayHeight/2);
  }
}
function spawnFruits(){
if(frameCount < 600){
  if(frameCount % 75 === 0){
    var apples = createSprite(random(10,displayWidth-10),0,10,10);
    apples.velocityY = 5;
    apples.scale = 0.2;
    apples.addImage(apple);
    appleGroup.add(apples);
  }
  
  if(frameCount % 75 === 0){
    var pineapples = createSprite(random(10,displayWidth-10),0,10,10);
    pineapples.velocityY = 5;
    pineapples.scale = 0.5;
    pineapples.addImage(pineapple);
    pineappleGroup.add(pineapples);
  }

  if(frameCount % 125 === 0){
    var bananas = createSprite(random(10,displayWidth-10),0,10,10);
    bananas.velocityY = 5;
    bananas.scale = 0.2;
    bananas.addImage(banana);
    bananaGroup.add(bananas);
  }

  if(frameCount % 125 === 0){
    var grapes = createSprite(random(10,displayWidth-10),0,10,10);
    grapes.velocityY = 5;
    grapes.scale = 0.2;
    grapes.addImage(grape);
    grapesGroup.add(grapes);
  }

  if(frameCount % 150 === 0){
    var watermelons = createSprite(random(10,displayWidth-10),0,10,10);
    watermelons.velocityY = 5;
    watermelons.scale = 0.2;
    watermelons.addImage(watermelon);
    watermelonGroup.add(watermelons);
  }
}

if(frameCount % 60 === 0 && timer > 0){
  timer--
}
}
    /*function fruits(){
  if(frameCount % 50 === 0){
    var fruit = createSprite(random(10,displayWidth-10),0,10,10);
    fruit.velocityY = 5;
    fruit.depth = basket1.depth;
    var rand = Math.round(random(1,5))
    switch(rand){
      case 1:
        fruit.addImage(apple);
        fruit.scale = 0.2
        break;
      case 2:
        fruit.addImage(banana);
        fruit.scale = 0.2
        break;
      case 3:
        fruit.addImage(grapes);
        fruit.scale = 0.2
        break;
      case 4:
        fruit.addImage(pineapple);
        fruit.scale = 0.5
        break;
      case 5:
        fruit.addImage(watermelon);
        fruit.scale = 0.2
        break;
    }
    if(fruit.isTouching(basket1)){
      score++;
      fruit.visible = false
    }
    fruit.debug = true
    basket1.debug = true
  }*/