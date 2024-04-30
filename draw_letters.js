/* these are optional special variables which will change the system */
// var systemBackgroundColor = "white";
var systemBackgroundColor = "#ebe3da";//beige bg
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

  


  // determine parameters 
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
  
  

 
  angleMode(DEGREES)


  
  strokeWeight(18)
  noFill();

  stroke(216,47,32,200) //red
  arc(Rposx,Rposy,size,size,RdegreeStart,RdegreeEnd)
  stroke(40,39,126,200) //blue
  arc(Bposx,Bposy,size2,size2,BdegreeStart,BdegreeEnd)
  stroke(48,111,70,200) //green
  arc(Gposx,Gposy,size3,size3,GdegreeStart,GdegreeEnd)
  stroke(233,169,59,200) //yellow
  arc(Yposx,Yposy,size4,size4,YdegreeStart,YdegreeEnd)
  
  
  strokeWeight(1)

}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  // if(percent<50) 
  // { new_letter["R degree S"] = map(percent, 0, 50, oldObj["R degree S"],360);}
  // else{
  //   new_letter["R degree S"] = map(percent, 0, 100, 360 , newObj["R degree S"]);
  // }


  if(oldObj["G degree S"] > newObj["G degree S"]) {
    newObj["G degree S"] = newObj["G degree S"] + 360;
  } 
  if(oldObj["G degree E"] > newObj["G degree E"]) {
    newObj["G degree E"] = newObj["G degree E"] + 360;
  } 

  // if(oldObj["R degree S"] > newObj["R degree S"]) {
  //   newObj["R degree S"] = newObj["R degree S"] + 360;
  // } 
  // if(oldObj["R degree E"] > newObj["R degree E"]) {
  //   newObj["R degree E"] = newObj["R degree E"] + 360;
  // } 

  // if(oldObj["B degree S"] > newObj["B degree S"]) {
  //   newObj["B degree S"] = newObj["B degree S"] + 360;
  // } 
  // if(oldObj["B degree E"] > newObj["B degree E"]) {
  //   newObj["B degree E"] = newObj["B degree E"] + 360;
  // } 
  
  // if(oldObj["Y degree S"] > newObj["Y degree S"]) {
  //   newObj["Y degree S"] = newObj["Y degree S"] + 360;
  // } 
  // if(oldObj["Y degree E"] > newObj["Y degree E"]) {
  //   newObj["Y degree E"] = newObj["Y degree E"] + 360;
  // } 


  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["R degree S"] = map(percent, 0, 100, oldObj["R degree S"], newObj["R degree S"]);
  new_letter["R degree E"] = map(percent, 0, 100, oldObj["R degree E"], newObj["R degree E"]);
  
  new_letter["Bsize"] = map(percent, 0, 100, oldObj["Bsize"], newObj["Bsize"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["B degree S"] = map(percent, 0, 100, oldObj["B degree S"], newObj["B degree S"]);
  new_letter["B degree E"] = map(percent, 0, 100, oldObj["B degree E"], newObj["B degree E"]);

  new_letter["Gsize"] = map(percent, 0, 100, oldObj["Gsize"], newObj["Gsize"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);
  new_letter["G degree S"] = map(percent, 0, 100, oldObj["G degree S"], newObj["G degree S"]);
  new_letter["G degree E"] = map(percent, 0, 100, oldObj["G degree E"], newObj["G degree E"]);

  new_letter["Ysize"] = map(percent, 0, 100, oldObj["Ysize"], newObj["Ysize"]);
  new_letter["offset4x"] = map(percent, 0, 100, oldObj["offset4x"], newObj["offset4x"]);
  new_letter["offset4y"] = map(percent, 0, 100, oldObj["offset4y"], newObj["offset4y"]);
  new_letter["Y degree S"] = map(percent, 0, 100, oldObj["Y degree S"], newObj["Y degree S"]);
  new_letter["Y degree E"] = map(percent, 0, 100, oldObj["Y degree E"], newObj["Y degree E"]);
  
  if(oldObj["R degree S"] == newObj["R degree S"] ) {
    new_letter["R degree S"] = newObj["R degree S"] 
  }
  
  
  
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
