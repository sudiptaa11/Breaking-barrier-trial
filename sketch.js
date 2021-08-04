const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//loading variables
var myEngine, myWorld;

var backgroundImg, brickImg, brick1, ball;
var stand;

var ball, ballImg

var rubberBand;

var xStand, yStand;
// var edges;

var bricks

function preload(){
  backgroundImg = loadImage("bg.jpg");
  ballImg = loadImage("ball.png");
  brickImg = loadImage("brick.png");
}
function setup() {
  createCanvas(800,400);

  //creating engine under a given name
  myEngine = Engine.create();
  
  //naming thw world
  myWorld = myEngine.world;

  stand = createSprite(400,385,150,20);
  stand.velocityX = 5;
  stand.shapeColor= "red";

  ball = Bodies.circle(400, 200 , 5);

  // //row 1
  // brick1 = new Brick(50,50);
  // brick2 = new Brick(140,50)
  // brick3 = new Brick(230,50)
  // brick4 = new Brick(320,50)
  // brick5 = new Brick(410,50)
  // brick6 = new Brick(500,50)
  // brick7 = new Brick(590,50)
  // brick8 = new Brick(680,50)
  // brick9 = new Brick(770,50)
  // brick10 = new Brick(860,50)
  // brick11 = new Brick(950,50)

  // //row 2
  // brick12 = new Brick(50,85);
  // brick13 = new Brick(140,85)
  // brick14 = new Brick(230,85)
  // brick15 = new Brick(320,85)
  // brick16 = new Brick(410,85)
  // brick17 = new Brick(500,85)
  // brick18 = new Brick(590,85)
  // brick19 = new Brick(680,85)
  // brick20 = new Brick(770,85)
  // brick21 = new Brick(860,85)
  // brick22 = new Brick(950,85)

  // brick23 = new Brick(50,120);
  // brick24 = new Brick(140,120)
  // brick25 = new Brick(230,120)
  // brick26 = new Brick(320,120)
  // brick27 = new Brick(410,120)
  // brick28 = new Brick(500,120)
  // brick29 = new Brick(590,120)
  // brick30 = new Brick(680,120)
  // brick31 = new Brick(770,120)
  // brick32 = new Brick(860,120)
  // brick33 = new Brick(950,120)

  // brick34 = new Brick(50,155);
  // brick35 = new Brick(140,155)
  // brick36 = new Brick(230,155)
  // brick37 = new Brick(320,155)
  // brick38 = new Brick(410,155)
  // brick39 = new Brick(500,155)
  // brick40 = new Brick(590,155)
  // brick41 = new Brick(680,155)
  // brick42 = new Brick(770,155)
  // brick43 = new Brick(860,155)
  // brick44 = new Brick(950,155)

  // brick45 = new Brick(50,190);
  // brick46 = new Brick(140,190)
  // brick47 = new Brick(230,190)
  // brick48 = new Brick(320,190)
  // brick49 = new Brick(410,190)
  // brick50 = new Brick(500,190)
  // brick51 = new Brick(590,190)
  // brick52 = new Brick(680,190)
  // brick53 = new Brick(770,190)
  // brick54 = new Brick(860,190)
  // brick55 = new Brick(950,190)

  // brick56 = new Brick(50,225);
  // brick57 = new Brick(140,225)
  // brick58 = new Brick(230,225)
  // brick59 = new Brick(320,225)
  // brick60 = new Brick(410,225)
  // brick61 = new Brick(500,225)
  // brick62 = new Brick(590,225)
  // brick63 = new Brick(680,225)
  // brick64 = new Brick(770,225)
  // brick65 = new Brick(860,225)
  // brick66 = new Brick(950,225)

  // brick67 = new Brick(50,260);
  // brick68 = new Brick(140,260)
  // brick69 = new Brick(230,260)
  // brick70 = new Brick(320,260)
  // brick71 = new Brick(410,260)
  // brick72 = new Brick(500,260)
  // brick73 = new Brick(590,260)
  // brick74 = new Brick(680,260)
  // brick75 = new Brick(770,260)
  // brick76 = new Brick(860,260)
  // brick77 = new Brick(950,260)

  rubberBand = new Sling(ball,{x:xStand, y:  yStand});

  edges = createEdgeSprites();

  bricks = new Group();
}

function draw() {
  background(backgroundImg);

  Engine.update(myEngine);

  xStand = stand.x;
  yStand = stand.y - 30;
  ball.position.x = stand.x;
  ball.position.y = stand.y - 70;

  // stand.bounceOff("LeftEdge");
  stand.bounceOff(edges[0]);
  stand.bounceOff(edges[1]);

  // brick1.display();
  // brick2.display();
  // brick3.display();
  // brick4.display();
  // brick5.display();
  // brick6.display();
  // brick7.display();
  // brick8.display();
  // brick9.display();
  // brick10.display();
  // brick11.display();

  // brick12.display();
  // brick13.display();
  // brick14.display();
  // brick15.display();
  // brick16.display();
  // brick17.display();
  // brick18.display();
  // brick19.display();
  // brick20.display();
  // brick21.display();
  // brick22.display();

  // brick23.display();
  // brick24.display();
  // brick25.display();
  // brick26.display();
  // brick27.display();
  // brick28.display();
  // brick29.display();
  // brick30.display();
  // brick31.display();
  // brick32.display();
  // brick33.display();

  // brick34.display();
  // brick35.display();
  // brick36.display();
  // brick37.display();
  // brick38.display();
  // brick39.display();
  // brick40.display();
  // brick41.display();
  // brick42.display();
  // brick43.display();
  // brick44.display();

  // brick45.display();
  // brick46.display();
  // brick47.display();
  // brick48.display();
  // brick49.display();
  // brick50.display();
  // brick51.display();
  // brick52.display();
  // brick53.display();
  // brick54.display();
  // brick55.display();

  // brick56.display();
  // brick57.display();
  // brick58.display();
  // brick59.display();
  // brick60.display();
  // brick61.display();
  // brick62.display();
  // brick63.display();
  // brick64.display();
  // brick65.display();
  // brick66.display();

  // brick67.display();
  // brick68.display();
  // brick69.display();
  // brick70.display();
  // brick71.display();
  // brick72.display();
  // brick73.display();
  // brick74.display();
  // brick75.display();
  // brick76.display();
  // brick77.display();
  
  imageMode(CENTER)
  image(ballImg, ball.position.x, ball.position.y, 50, 50);

  rubberBand.display();

  createBrickRow(50);
  createBrickRow(90);
  createBrickRow(130);
  createBrickRow(170);
  createBrickRow(210);
  createBrickRow(250);

  drawSprites();
}

function createBrickRow(y) {
  for(var c=0; c<12; c++)
  {
    var brick = createSprite(35+76*c,y,60, 35);
    brick.addImage(brickImg);
    brick.scale = 0.35
    bricks.add(brick);
    brick.lifetime = 10;
  }
}

function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX, y: mouseY});
}

function mouseReleased(){

}