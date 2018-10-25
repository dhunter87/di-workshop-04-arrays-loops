var ys = [20, 100, 180]
var speeds = [3, 3, 3]

function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  background(200)

  for (var i = 0; i < 3; i++) {
    ys[i] = ys[i] + speeds[i]
    if (ys[i] < 0 || ys[i] > height) {
      speeds[i] = speeds[i] * -1
    }
    rect(30 * (i + 1), ys[i], 20, 20)
  }

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
