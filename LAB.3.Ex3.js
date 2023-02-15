function setup() {
  createCanvas(500, 500);
}



function draw() {
  background(180);
rybStar()

}

starColor("cyan")

function rybStar(starColor){
   push()
  if (mouseX < 150) {
    fill("red");
  } else if (mouseX >= 150 && mouseX <250){
  fill("yellow")
  } else if (mouseX>=250 && mouseX<300){
    fill("blue")
 } else {
    fill("black")
 fill(starColor)
 }

  angleMode(DEGREES)
  noStroke()
  rect(180,160,150)
 rotate(45)
  rect(270,-100,150)
  pop()
}
