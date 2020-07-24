class MoveCircle {
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
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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

document.addEventListener("mousemove", (event) => {
  let c1 = new MoveCircle(
    event.clientX,
    event.clientY,
    20,
    0,
    2 * Math.PI,
    "#000000"
  );
  c1.draw();
});
