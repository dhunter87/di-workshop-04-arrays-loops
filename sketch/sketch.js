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

    // if (mousePressed) {
    //   rect(mouseX, mouseY, 20,20)
    // }
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

// function setup(){
//   createCanvas(400, 400)
// }
// function outerLoop()
// {
//   var x = 10
//   var count = 5
//   for (var i = 0; i < count; i = i + 1) {
//     innerLoop(x)
//     x = x + 20 
//   }
// }
// function innerLoop(x)
//   {
//     var count = 5
//     var y = 10
//     for (var j = 0; j < count; j = j + 1){      
//     rect(x, y, 10, 10)   
//     y = y + 20
//   }
// }

// function draw()
// {
//   outerLoop()
// }
// var yOne = 20
// var yTwo = 100
// var yThree = 180
// var speedOne = 3
// var speedTwo = 3
// var speedThree = 3


  // yOne = yOne + speedOne
  // if (yOne < 0 || yOne > height) {
  //   speedOne = speedOne * -1
    
  // }
  // rect(30, yOne, 20, 20)
  // // console.log(yOne)

  // yTwo = yTwo + speedTwo
  // if (yTwo < 0 || yTwo > height) {
  //   speedTwo = speedTwo * -1
  // }
  // rect(60, yTwo, 20, 20)

  // yThree = yThree + speedThree
  // if (yThree < 0 || yThree > height) {
  //   speedThree = speedThree * -1
  // }
      // rect(90, ys[i], 20, 20)
