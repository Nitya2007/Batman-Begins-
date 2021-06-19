

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var raindrops = [];
var maxDrops; 
var img;

var backgroundImg;
// give image to thunder
var thunder1,thunder2 ,thunderImg1 , thunderImg2 , thunderImg3;
function preload(){
  // load bg image
  backgroundImg = loadImage("Image/bg.jpg");
  // load both thunder images
    thunder1 = loadImage("proc41images/thunderbolt/1.png");
    thunder2 = loadImage("proc41images/thunderbolt/2.png");
}

function setup(){
  
var canvas = createCanvas(displayWidth - 20,displayHeight - 30);
 
    engine = Engine.create();
    world = engine.world;
 
thunderImg1 = createSprite(displayWidth/2,5,10,40);
thunderImg2 = createSprite(200,5,10,40);


    img = new Umbrella(displayWidth/2,500);
}

function draw(){
 
    background(backgroundImg);
 
    Engine.update(engine);
   // create raindrops by frame count
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,10);
      raindrops.push(raindrop);
    }

    img.display();

    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 

    if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg2.addImage(thunder2);
                break;
        default: break;
      }
    }   
    if(frameCount % 150 === 0){

      for(var i=0; i<maxDrops; i++){
          drops.push(new createDrop(random(0,400), random(0,400)));
      }
    drawSprites();
}   
}
