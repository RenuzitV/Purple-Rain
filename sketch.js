var drops = [];
var windspeed = 0;
var grav = 0.02;
function setup() {  
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < width*height/10000; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  // resizeCanvas(windowWidth, windowHeight);
  background(230, 230, 250);
  windspeed = map(mouseX, 0, width, -0.05, 0.05);
  // grav = map(mouseY, 0, height, -0.05, 0.05);
//   windspeed += random(-0.1, 0.1);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  var len = Math.floor(windowWidth*windowHeight/10000);
  while (drops.length != len){
    if (drops.length < len) drops.push(new Drop());
    else drops.pop();
  }
}