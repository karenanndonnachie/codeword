const letters= 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGIJKLMNOPQRSTUVWXYZ[]{};:<>,.?/';
var rand, listLength; 

function setup() {
createCanvas (windowWidth, windowHeight);
background(255);
textSize(24);
noStroke();
textFont("Times");
//frameRate(5);
listLength=letters.length;
}


function draw() {

var rand = int(random(0, listLength-1));
fill(0);
textSize(random(7,50));
text(letters[rand], random(width), random(height));
//background(255,1);
fill(255);
ellipse(mouseX,mouseY, 150,150);
}
