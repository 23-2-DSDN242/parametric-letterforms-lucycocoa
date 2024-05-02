/* these are optional special variables which will change the system */
// var systemBackgroundColor = "white";
var systemBackgroundColor = "#ebe3da";//beige bg
var systemLineColor = "black";
var systemBoxColor = "#C73869";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  


  //  determine parameters 
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
  
  
  strokeWeight(1) //this keep the percentage number font's stroke size

}


function interpolate_letter(percent, oldObj, newObj) {
  
  let new_letter = {};

  if(percent<50) 
  { new_letter["size"] = map(percent, 0, 50, oldObj["size"],60);}
  else{
    new_letter["size"] = map(percent, 50, 100, 60 , newObj["size"]);
  } // keep the size '60' at 50%

  if(percent<50) 
  { new_letter["offsetx"] = map(percent, 0, 50, oldObj["offsetx"],0);}
  else{
    new_letter["offsetx"] = map(percent, 50, 100, 0 , newObj["offsetx"]);
  }
  if(percent<50) 
  { new_letter["offsety"] = map(percent, 0, 50, oldObj["offsety"],0);}
  else{
    new_letter["offsety"] = map(percent, 50, 100, 0 , newObj["offsety"]);
  }
    // Place the arc's in the centre point at 50%
    // RED ARC

  if(percent<50) 
  { new_letter["Bsize"] = map(percent, 0, 50, oldObj["Bsize"],60);}
  else{
    new_letter["Bsize"] = map(percent, 50, 100, 60 , newObj["Bsize"]);
  }
  if(percent<50) 
  { new_letter["offset2x"] = map(percent, 0, 50, oldObj["offset2x"],0);}
  else{
    new_letter["offset2x"] = map(percent, 50, 100, 0 , newObj["offset2x"]);
  }
  if(percent<50) 
  { new_letter["offset2y"] = map(percent, 0, 50, oldObj["offset2y"],0);}
  else{
    new_letter["offset2y"] = map(percent, 50, 100, 0 , newObj["offset2y"]);
  }
      // BLUE ARC
  

  if(percent<50) 
  { new_letter["Gsize"] = map(percent, 0, 50, oldObj["Gsize"],60);}
  else{
    new_letter["Gsize"] = map(percent, 50, 100, 60 , newObj["Gsize"]);
  }
  if(percent<50) 
  { new_letter["offset3x"] = map(percent, 0, 50, oldObj["offset3x"],0);}
  else{
    new_letter["offset3x"] = map(percent, 50, 100, 0 , newObj["offset3x"]);
  }
  if(percent<50) 
  { new_letter["offset3y"] = map(percent, 0, 50, oldObj["offset3y"],0);}
  else{
    new_letter["offset3y"] = map(percent, 50, 100, 0 , newObj["offset3y"]);
  }

     // GREEN ARC

  if(percent<50) 
  { new_letter["Ysize"] = map(percent, 0, 50, oldObj["Ysize"],60);}
  else{
    new_letter["Ysize"] = map(percent, 50, 100, 60 , newObj["Ysize"]);
  }
  if(percent<50) 
  { new_letter["offset4x"] = map(percent, 0, 50, oldObj["offset4x"],0);}
  else{
    new_letter["offset4x"] = map(percent, 50, 100, 0 , newObj["offset4x"]);
  }
  if(percent<50) 
  { new_letter["offset4y"] = map(percent, 0, 50, oldObj["offset4y"],0);}
  else{
    new_letter["offset4y"] = map(percent, 50, 100, 0 , newObj["offset4y"]);
  }
  
      // YELLOW ARC


  function adjustForClockwise(start, end) {
    if (start > end) {                         // adjusting the strokes rotatinf clockwise
      end += 360;
    }
    return map(percent, 0, 100, start, end);
  }

 
  new_letter["R degree S"] = adjustForClockwise(oldObj["R degree S"], newObj["R degree S"]);
  new_letter["R degree E"] = adjustForClockwise(oldObj["R degree E"], newObj["R degree E"]);


  new_letter["B degree S"] = adjustForClockwise(oldObj["B degree S"], newObj["B degree S"]);
  new_letter["B degree E"] = adjustForClockwise(oldObj["B degree E"], newObj["B degree E"]);


  new_letter["G degree S"] = adjustForClockwise(oldObj["G degree S"], newObj["G degree S"]);
  new_letter["G degree E"] = adjustForClockwise(oldObj["G degree E"], newObj["G degree E"]);


  new_letter["Y degree S"] = adjustForClockwise(oldObj["Y degree S"], newObj["Y degree S"]);
  new_letter["Y degree E"] = adjustForClockwise(oldObj["Y degree E"], newObj["Y degree E"]);


  if(oldObj["R degree S"] == newObj["R degree S"] ) {
    new_letter["R degree S"] = newObj["R degree S"] 
  }
 
 
  
  
  return new_letter;
}

var swapWords = [
  "BOSSBABY",
  "EXPECTED",
  "PRESSURE",
  "MMMMWWWW",
  "MMWWMMWW",
  "ACTUALLY",
  "12345678",
  "HOSPITAL",
  "BIRTHDAY",
  "COVERAGE",
  "  XOXO  "

]
