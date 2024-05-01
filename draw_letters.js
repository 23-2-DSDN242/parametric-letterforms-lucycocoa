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

  if(percent<50) 
  { new_letter["size"] = map(percent, 0, 50, oldObj["size"],10);}
  else{
    new_letter["size"] = map(percent, 50, 100, 10 , newObj["size"]);
  }
  // if(percent<50) 
  // { new_letter["offsetx"] = map(percent, 0, 50, oldObj["offsetx"],0);}
  // else{
  //   new_letter["offsetx"] = map(percent, 50, 100, 0 , newObj["offsetx"]);
  // }
  // if(percent<50) 
  // { new_letter["offsety"] = map(percent, 0, 50, oldObj["offsety"],-40);}
  // else{
  //   new_letter["offsety"] = map(percent, 50, 100, -40 , newObj["offsety"]);
  // }
  // if(percent<50) 
  // { new_letter["R degree S"] = map(percent, 0, 50, oldObj["R degree S"],0);}
  // else{
  //   new_letter["R degree S"] = map(percent, 50, 100, 0 , newObj["R degree S"]);
  // }
  // if(percent<50) 
  // { new_letter["R degree E"] = map(percent, 0, 50, oldObj["R degree E"],360);}
  // else{
  //   new_letter["R degree E"] = map(percent, 50, 100, 360 , newObj["R degree E"]);
  // }
  
  if(percent<50) 
  { new_letter["Bsize"] = map(percent, 0, 50, oldObj["Bsize"],10);}
  else{
    new_letter["Bsize"] = map(percent, 50, 100, 10 , newObj["Bsize"]);
  }
  // if(percent<50) 
  // { new_letter["offset2x"] = map(percent, 0, 50, oldObj["offset2x"],0);}
  // else{
  //   new_letter["offset2x"] = map(percent, 50, 100, 0 , newObj["offset2x"]);
  // }
  // if(percent<50) 
  // { new_letter["offset2y"] = map(percent, 0, 50, oldObj["offset2y"],-12);}
  // else{
  //   new_letter["offset2y"] = map(percent, 50, 100, -12 , newObj["offset2y"]);
  // }
  // if(percent<50) 
  // { new_letter["B degree S"] = map(percent, 0, 50, oldObj["B degree S"],0);}
  // else{
  //   new_letter["B degree S"] = map(percent, 50, 100, 0 , newObj["B degree S"]);
  // }
  // if(percent<50) 
  // { new_letter["B degree E"] = map(percent, 0, 50, oldObj["B degree E"],360);}
  // else{
  //   new_letter["B degree E"] = map(percent, 50, 100, 360 , newObj["B degree E"]);
  // }

  if(percent<50) 
  { new_letter["Gsize"] = map(percent, 0, 50, oldObj["Gsize"],10);}
  else{
    new_letter["Gsize"] = map(percent, 50, 100, 10 , newObj["Gsize"]);
  }
  // if(percent<50) 
  // { new_letter["offset3x"] = map(percent, 0, 50, oldObj["offset3x"],0);}
  // else{
  //   new_letter["offset3x"] = map(percent, 50, 100, 0 , newObj["offset3x"]);
  // }
  // if(percent<50) 
  // { new_letter["offset3y"] = map(percent, 0, 50, oldObj["offset3y"],20);}
  // else{
  //   new_letter["offset3y"] = map(percent, 50, 100, 20 , newObj["offset3y"]);
  // }

  // if(percent<50) 
  // { new_letter["G degree S"] = map(percent, 0, 50, oldObj["G degree S"],0);}
  // else{
  //   new_letter["G degree S"] = map(percent, 50, 100, 0 , newObj["G degree S"]);
  // }
  // if(percent<50) 
  // { new_letter["G degree E"] = map(percent, 0, 50, oldObj["G degree E"],360);}
  // else{
  //   new_letter["G degree E"] = map(percent, 50, 100, 360 , newObj["G degree E"]);
  // }

  if(percent<50) 
  { new_letter["Ysize"] = map(percent, 0, 50, oldObj["Ysize"],10);}
  else{
    new_letter["Ysize"] = map(percent, 50, 100, 10 , newObj["Ysize"]);
  }
  // if(percent<50) 
  // { new_letter["offset4x"] = map(percent, 0, 50, oldObj["offset4x"],0);}
  // else{
  //   new_letter["offset4x"] = map(percent, 50, 100, 0 , newObj["offset4x"]);
  // }
  // if(percent<50) 
  // { new_letter["offset4y"] = map(percent, 0, 50, oldObj["offset4y"],50);}
  // else{
  //   new_letter["offset4y"] = map(percent, 50, 100, 50 , newObj["offset4y"]);
  // }
  // if(percent<50) 
  // { new_letter["Y degree S"] = map(percent, 0, 50, oldObj["Y degree S"],0);}
  // else{
  //   new_letter["Y degree S"] = map(percent, 50, 100, 0 , newObj["Y degree S"]);
  // }
  // if(percent<50) 
  // { new_letter["Y degree E"] = map(percent, 0, 50, oldObj["Y degree E"],360);}
  // else{
  //   new_letter["Y degree E"] = map(percent, 50, 100, 360 , newObj["Y degree E"]);
  // }


  



  if(oldObj["R degree S"] > newObj["R degree S"]) {
    newObj["R degree S"] = (newObj["R degree S"]) 
  } 
  if(oldObj["R degree E"] > newObj["R degree E"]) {
    newObj["R degree E"] = (newObj["R degree E"] )
  } 

  if(oldObj["B degree S"] > newObj["B degree S"]) {
    newObj["B degree S"] = (newObj["B degree S"] )
  } 
  if(oldObj["B degree E"] > newObj["B degree E"]) {
    newObj["B degree E"] = (newObj["B degree E"] )
  } 
  
  if(oldObj["Y degree S"] > newObj["Y degree S"]) {
    newObj["Y degree S"] = (newObj["Y degree S"] ) 
  } 
  if(oldObj["Y degree E"] > newObj["Y degree E"]) {
    newObj["Y degree E"] = (newObj["Y degree E"]) 
  } 
  if(oldObj["G degree S"] > newObj["G degree S"]) {
    newObj["G degree S"] = (newObj["G degree S"] + 360) 
  }
  if(oldObj["G degree E"] > newObj["G degree E"]) {
    newObj["G degree E"] = (newObj["G degree E"] + 360) 
  } 
  // if(oldObj["R degree S"] > newObj["R degree S"]) {
  //   newObj["R degree S"] = (newObj["R degree S"] + 360) % 360;
  // } 
  // if(oldObj["R degree E"] > newObj["R degree E"]) {
  //   newObj["R degree E"] = (newObj["R degree E"] + 360) % 360;
  // } 

  // if(oldObj["B degree S"] > newObj["B degree S"]) {
  //   newObj["B degree S"] = (newObj["B degree S"] + 360) % 360;
  // } 
  // if(oldObj["B degree E"] > newObj["B degree E"]) {
  //   newObj["B degree E"] = (newObj["B degree E"] + 360) % 360;
  // } 
  
  // if(oldObj["Y degree S"] > newObj["Y degree S"]) {
  //   newObj["Y degree S"] = (newObj["Y degree S"] + 360) % 360;
  // } 
  // if(oldObj["Y degree E"] > newObj["Y degree E"]) {
  //   newObj["Y degree E"] = (newObj["Y degree E"] + 360) % 360;
  // } 
  // if(oldObj["G degree S"] > newObj["G degree S"]) {
  //   newObj["G degree S"] = (newObj["G degree S"] + 360) % 360 ;
  // } 
  // if(oldObj["G degree E"] > newObj["G degree E"]) {
  //   newObj["G degree E"] = (newObj["G degree E"] + 360) %360 ;
  // } 



  // new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["R degree S"] = map(percent, 0, 100, oldObj["R degree S"], newObj["R degree S"]);
  new_letter["R degree E"] = map(percent, 0, 100, oldObj["R degree E"], newObj["R degree E"]);
  
  // new_letter["Bsize"] = map(percent, 0, 100, oldObj["Bsize"], newObj["Bsize"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["B degree S"] = map(percent, 0, 100, oldObj["B degree S"], newObj["B degree S"]);
  new_letter["B degree E"] = map(percent, 0, 100, oldObj["B degree E"], newObj["B degree E"]);

  // new_letter["Gsize"] = map(percent, 0, 100, oldObj["Gsize"], newObj["Gsize"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);
  new_letter["G degree S"] = map(percent, 0, 100, oldObj["G degree S"], newObj["G degree S"]);
  new_letter["G degree E"] = map(percent, 0, 100, oldObj["G degree E"], newObj["G degree E"]);

  // new_letter["Ysize"] = map(percent, 0, 100, oldObj["Ysize"], newObj["Ysize"]);
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
