/* these are optional special variables which will change the system */
var systemBackgroundColor = "white";
// var systemBackgroundColor = "#ebe3da";//beige bg
var systemLineColor = "black";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  noStroke();
  


  // determine parameters for second circle
  let posx=50
  let posy=100
  let size = letterData["size"];
  let Rposx = posx  + letterData["offsetx"];
  let Rposy = posy + letterData["offsety"];
  let RdegreeStart=letterData["R degree S"]
  let RdegreeEnd=letterData["R degree E"]
  let size2 = letterData["Bsize"];
  let Bposx = posx  + letterData["offset2x"];
  let Bposy = posy + letterData["offset2y"];
  let BdegreeStart=letterData["B degree S"]
  let BdegreeEnd=letterData["B degree E"]
  let size3 = letterData["Gsize"];
  let Gposx = posx  + letterData["offset3x"];
  let Gposy = posy + letterData["offset3y"];
  let GdegreeStart=letterData["G degree S"]
  let GdegreeEnd=letterData["G degree E"]
  let size4 = letterData["Ysize"];
  let Yposx = posx  + letterData["offset4x"];
  let Yposy = posy + letterData["offset4y"];
  let YdegreeStart=letterData["Y degree S"]
  let YdegreeEnd=letterData["Y degree E"]
  
  

  // draw two circles
  angleMode(DEGREES)
  // fill(darkGreen);
  // ellipse(50, 150, 75, 75);
  // fill(lightGreen);
  // ellipse(Rposx, Rposy, size2, size2);

  
  strokeWeight(20)
  noFill();
  // stroke(216,47,32,220) //red
  // arc(Rposx,Rposy,size,size,RdegreeStart,RdegreeEnd)
  // stroke(40,39,126,220) //blue
  // arc(Bposx,Bposy,size2,size2,BdegreeStart,BdegreeEnd)
  // stroke(48,111,70,220) //green
  // arc(Gposx,Gposy,size3,size3,GdegreeStart,GdegreeEnd)
  // stroke(233,169,59,220) //yellow
  // arc(Yposx,Yposy,size4,size4,YdegreeStart,YdegreeEnd)
  stroke(216,47,32,200) //red
  arc(Rposx,Rposy,size,size,RdegreeStart,RdegreeEnd)
  stroke(40,39,126,200) //blue
  arc(Bposx,Bposy,size2,size2,BdegreeStart,BdegreeEnd)
  stroke(48,111,70,200) //green
  arc(Gposx,Gposy,size3,size3,GdegreeStart,GdegreeEnd)
  stroke(233,169,59,200) //yellow
  arc(Yposx,Yposy,size4,size4,YdegreeStart,YdegreeEnd)
  


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
