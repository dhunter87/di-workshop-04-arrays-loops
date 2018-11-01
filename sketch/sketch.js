var ys = []
var xs = []
var ySpeeds = []
var xSpeeds = []
var count = 5
var screenHeight = 400
var screenWidth = 400

function setup() {
  createCanvas(screenHeight, screenWidth)
  background(200)
}
function createBoxes(){
  
  for( var i = ys.length; i < count; i = i + 1){
    ys.push(Math.floor(Math.random() * 100))
    xs.push(Math.floor(Math.random() * 100))
    ySpeeds.push(Math.floor(Math.random()* 10))
    xSpeeds.push(Math.floor(Math.random()* 10))
  }
}

createBoxes()

function draw() {
  // debugger
  background(200)

  for (var i = 0; i < ySpeeds.length; i++) {
    ys[i] = ys[i] + ySpeeds[i]
    xs[i] = xs[i] + ySpeeds[i]
    if (ys[i] < 0 || ys[i] > screenHeight) {
      ySpeeds[i] = ySpeeds[i] * -1
    }
    else if (xs[i] < 0 || xs[i] > screenWidth) {
      xSpeeds[i] = xSpeeds[i] * -1
    }
    rect(xs[i] , ys[i], 20, 20)
    
  }

}

function mousePressed(){
  console.log("mousePressed")
  rect(mouseX, mouseY, 20,20)
  ys.push(mouseY)
    xs.push(mouseX)
    ySpeeds.push(Math.floor(Math.random()* 10))
    xSpeeds.push(Math.floor(Math.random()* 10))
}
