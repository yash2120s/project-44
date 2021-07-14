var bg1,bg2,bg3,t1,form,system,code,security;
var score=0;

function preload() {
  bg1 = loadImage("b1.jpg")
  bg2 = loadImage("b2.jpg")
  bg3 = loadImage("aladdin_cave.jpg");
  t1 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,700);
  system = new System()
  security = new Security()
}

function draw() {
// console.log(mouseX)
// console.log(mouseY)
  background(bg3)

  clues();
  security.display();


  // Add code to display score in the middle of the screen

  text("Score: "+ score,358,133)
  

  // Add code to display the end screen

 if(score=== 3){
   clear();
background(t1)
fill("black")
textSize(20)
text("Treasure Unlocked" , 358 , 133)

 }
  drawSprites()
}