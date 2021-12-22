var drops = [];
var windspeed = 0;
var grav = 0.02;
function setup() {
  createCanvas(1024, 576);
  for (var i = 0; i < 200; i++) {
    drops[i] = new Drop();
  }
  
}

function draw() {
  background(230, 230, 250);
  windspeed = map(mouseX, 0, width, -0.05, 0.05);
  // grav = map(mouseY, 0, height, -0.05, 0.05);
//   windspeed += random(-0.1, 0.1);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}