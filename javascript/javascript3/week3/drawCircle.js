// drawing a circle on the canvas without classes
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

context.beginPath();
context.arc(75, 75, 50, 0, 2 * Math.PI, false);
context.fillStyle = "green";
context.fill();
context.lineWidth = 5;
context.strokeStyle = "#003300";
context.stroke();

// drawing a circle on the canvas with classes
//define a circle class
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    //draw the canvas
    const canvas = document.getElementById("myCanvas2");
    const context = canvas.getContext("2d");

    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
    context.fillStyle = this.getColor();
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#003300";
    context.stroke();
  }
  getColor() {
    let rgb1 = Math.floor(Math.random() * 256) + 1;
    let rgb2 = Math.floor(Math.random() * 256) + 1;
    let rgb3 = Math.floor(Math.random() * 256) + 1;
    return "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
  }
}
//canvas width=1000 height=600

//to get random (x,y) coordinates
for (let x = 50; x <= 950; x = x + 50) {
  for (let y = 50; y <= 550; y = y + 50) {
    console.log(x, y);
    let c1 = new Circle(x, y, 20, 0, 2 * Math.PI, "#000000");
    c1.draw();
  }
}
