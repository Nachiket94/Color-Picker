var a, b, c, x, y, z;

function setup() {
  createCanvas(350, 350);
  x = createSlider(0, 255, 40);
  x.position(20, 20);
  y = createSlider(0, 255, 40);
  y.position(20, 50);
  z = createSlider(0, 255, 40);
  z.position(20, 80);
  a = createButton('Coords');
  a.position(270, 20);
  a.mousePressed(coords);
}

function draw() {
  let val1 = x.value();
  let val2 = y.value();
  let val3 = z.value();
  background(val1, val2, val3);
}

function coords() {

  print("Red : %d", x.value());
  print("Green: %d", y.value());
  print("Blue : %d", z.value());
}