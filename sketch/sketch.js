function setup(){
  createCanvas(400, 400)
}

function draw() {
  var x = 10
  var count = 5

  var i = 0
  while (i < count) {
    rect(x, 10, 10, 10)
    x = x + 20

    i = i + 1
  }
}