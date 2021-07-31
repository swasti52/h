const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );


  computerarcher = new computerArcher(
    width - 350,
    computer.body.position.y -40,
    100,
    150,PI/2
  );

  computerarrow = new computerArrow(
    width -385,
    computer.body.position.y -40,
   70,
    10
  );

  playerarrow = new playerArrow(
    385,
player.body.position.y -40,
   70,
    10
  );
  
  playerarcher = new playerArcher(
     345,
  player.body.position.y-40,
   100,
   150,-PI/2
  );
  
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerarcher.display();
  computerarcher.display()
  computerarrow.display()
  playerarrow.display();

  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
playerarrow.shoot(playerarcher.body.angle)

  }
}



