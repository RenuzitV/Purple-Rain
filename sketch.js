var drops = [];
var windspeed = 0;
var grav = 0.01;
function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < 100; i++) {
    drops[i] = new Drop();
  }
  
}

function draw() {
  background(230, 230, 250);
  windspeed = map(mouseX, 0, width, -0.03, 0.03);
  grav = map(mouseY, 0, height, -0.05, 0.05);
//   windspeed += random(-0.1, 0.1);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}