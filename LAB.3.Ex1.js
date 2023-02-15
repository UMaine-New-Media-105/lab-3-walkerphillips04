function setup() {
  createCanvas(500, 500);
}



function draw() {
  background(180);

   push()
  if (mouseX < 150) {
    fill("red");
  } else if (mouseX >= 150 && mouseX <250){
  fill("yellow")
  } else if (mouseX>=250 && mouseX<300){
    fill("blue")
  } else {
    fill("black")
  }
  angleMode(DEGREES)
  noStroke()
  rect(20,210,150)
 rotate(45)
  rect(200,60,150)
  pop()
}
