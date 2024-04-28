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
  "size1": 150,
  "size": 80,
  "offsetx": 0,
  "offsety": 0,
  "offsetxellipse": 10,
  "offsetyellipse": 80
}

const letterB = {
  "size": 70,
  "offsetx": -60,
  "offsety": 0,
  "offsetx3": -20,
  "offsety3": -20,
  "sizeb":90,
  "offsetxellipse": -51,
  "offsetyellipse": -80
}

const letterC = {
  "size1": 150,
  "size": 100,
  "offsetx": 0,
  "offsety": 280,
  "offsetxellipse": 0,
  "offsetyellipse": 0
}



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
  let size1 = letterData["size1"];
  let size2 = letterData["size"];
  let size3 = letterData["sizeb"];
  //3 arcs

  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsety3"];
  let pos4x = posx + letterData["offsetxellipse"];
  let pos4y = posy + letterData["offsetyellipse"];

  
  
  


  stroke("pink")
  strokeWeight(50)
  noFill()

  angleMode(DEGREES)
  arc(posx, posy, size1*1, size1*1, 90, 270)

 



  stroke("skyblue")
  line(pos2x+10,pos2y-80,pos2x+10,pos2y+80)
 
  
  stroke("pink")
  arc(pos3x+10,pos3y-20,size2*1,size2*1,270,90)
  arc(pos3x+10,pos3y+50,size3*1,size3*1,270,90)

  noStroke()
  fill('white')
  ellipse(pos4x,pos4y,40,40)

  fill('skyblue')
  ellipse(pos4x,pos4y,20,20)

 


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
