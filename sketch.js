const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

// const backgroundColor  = "#acf2e7";

const backgroundColor  = "white ";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
 
  // fill(darkGreen);


  // ellipse(posx, posy, 150, 150);
  // fill(lightGreen);
 
  // ellipse(pos2x+10, pos2y-35, size2*1.2, size2*1.2);
  // rect(posx+40, posy-80, 20,160)
  // rect(posx+60, posy-80, 20,160)
  noStroke()

  stroke("pink")
  strokeWeight(8)
  noFill()

  angleMode(DEGREES)
  arc(50, 50, 80, 80, 90, 270)

  arc(140,20,30,30,270,90)
  arc(140,69,50,50,270,90)

  arc(250, 50, 80, 80, 90, 270)

  stroke("skyblue")
  line(60,5,60,95)
  line(70,5,70,95)
  line(130,5,130,95)
  line(120,5,120,95)




}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
