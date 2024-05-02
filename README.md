[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xQz3oEP8)
## MDDN 242 2024 Assignment 2



# Initial design

I sketched a letter composed of nine paramaters consisting of straight lines and arcs, thinking that an arc can create various shapes depending on the angle value.


<img width="588" alt="Screenshot 2024-04-19 at 12 53 27 PM" src="https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/0c5e0269-1a45-40b9-b107-fda0c141a8d5">

 * `size1` : size of first pink arc
 * `size` : size of second pink arc
 * `offsetx` : x offset of the skyblue line
 * `offsety` : y offset of the skyblue line
 * `offset3x` : x offset of the second pink arc
 * `offset3y` : y offset of the second pink arc
 * `size3` : size of third pink arc
 * `offsetxellipse` :  x offset of the white and skyblue ellipses
 * `offsetyellipse` : y offset of the the white and skyblue ellipses

At first, it took some time to understand how to determine parameters for shapes and set them, but once I adapted, I was able to plan the final design.

 
After realizing that I only drew a,b and c but needed nine parameters, I reconsidered the letter interface, aiming to compose it within a maximum of 20 parameters drawing inspiration from my other sketch to design vibrant colout schemes.

<img width="1221" alt="Screenshot 2024-05-02 at 12 08 47 PM" src="https://github.com/23-2-DSDN242/parametric-letterforms-23.MDDN242_Parametric_Design/assets/140350024/572e3a2b-b0bc-4163-a7e8-756a899deb7c">



# Design the Alphabet

My design concept revolves around creating a vibrant and engaging visual experience that captures the essence of joy and playfulness, with eye-catching and memorable imagery featuring fun, cartoon-like figures. Additionally, I believe that the essence of font design lies in readability, designing a legible font is also a crucial goal for me in this project.

My final alphabet design consists of four arc strokes, with a diverse colour combination. To ensure a natural overlap between the arc strokes and create a seamless effect, I lowered the opacity, allowing different colours to blend when overlapped.

```

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
  
  ```

<img width="372" alt="Screenshot 2024-04-24 at 8 18 31 PM" src="https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/07503110-65db-450d-9663-90c7309cffa0">


In composing my design, I utilized precisely 20 parameters, each determining the size, x coordinate, y coordinate, and starting and ending angles for each arc. 

4 (arcs) x 5 (size, x, y, angle start, angle stop) = 20

* `size` : size of red arc
 * `offsetx` : x offset of the red arc
 * `offsety` : y offset of the red arc
 * `R degree S` : Angle to start the red arc  // (Red arc degree Start)
 * `R degree E` : Angle to stop the red arc   // (Red arc degree End)
 * `Bsize` : size of blue arc
 * `offset2x` : x offset of the blue arc
 * `offset2y` : y offset of the blue arc
 * `B degree S` :  Angle to start the blue arc
 * `B degree E` :  Angle to stop the blue arc
 * `Gsize` : size of green arc
 * `offset3x` : x offset of the green arc
 * `offset3y` : y offset of the green arc
 * `G degree S` :  Angle to start the green arc
 * `G degree E` : Angle to stop the green arc
 * `Ysize` : size of yellow arc
 * `offset4x` : x offset of the yellow arc
 * `offset4y` : y offset of the yellow arc
 * `Y degree S` : Angle to start the yellow arc
 * `Y degree E` : Angle to stop the yellow arc

Each letter was designed to prominently feature the arc's curves, with delicated attention to achieving the most harmonious colour arrangements.

In designing the numbers, a distinct approach was taken to ensure they did not bear too much resemblance to the letters.(Z and 2, T and 7 or O and 0) Except for '0', the numbers were designed by overlapping two strokes to create a single one, ensuring a distinct visual appearance from the letters.

 <img width="945" alt="Screenshot 2024-04-30 at 8 28 32 PM" src="https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/cb9e96c9-ca31-4b54-a7d4-830137cd58c2">


# Interpolation 

When transitioning from C to J, it was discovered that the green arc, unlike other arcs, does not rotate clockwise but snaps into position. 

<img width="945" alt="Screenshot 2024-04-30 at 7 42 51 PM" src="https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/eae93e17-8dc1-4d9e-a5ba-0021151d5ec0">

This occurs when the starting angle of the green arc comprising J is smaller than its ending angle. To address this issue, the module 'Class Example: Rita Rotation Links' was referenced. The following code was used to solve the problem:
```
if(oldObj["G degree S"] > newObj["G degree S"]) {
    newObj["G degree S"] = newObj["G degree S"] + 360;
  } 
  if(oldObj["G degree E"] > newObj["G degree E"]) {
    newObj["G degree E"] = newObj["G degree E"] + 360;
  } 
  ```
<img width="945" alt="Screenshot 2024-04-30 at 8 16 23 PM" src="https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/92e97eaf-57e4-4819-9386-9b2aae5ae9ae">

This code was applied not only to the green arc but also to all other colors to ensure that the arcs in all letters rotate clockwise.

However, there was an issue where shapes with a 360 degree angle for arcs were not drawn properly. 

<img width="945" alt="Screenshot 2024-04-30 at 9 55 51 PM" src="https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/c3cb6c08-a0ec-4026-b824-8467a0a46167">
<img width="945" alt="Screenshot 2024-04-30 at 9 55 55 PM" src="https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/1f2dc122-8736-40e0-96d0-6ac6015047a7">


To address this, I added 360 to each angle's start and ending value and then used the remainder when divided by 360 to correct the values.

``` if(oldObj["R degree S"] > newObj["R degree S"]) {
    newObj["R degree S"] = (newObj["R degree S"] + 360) % 360;
  } 
  if(oldObj["R degree E"] > newObj["R degree E"]) {
    newObj["R degree E"] = (newObj["R degree E"] + 360) % 360;
  } 
  ```

But still it did not fix the issue and I came up with a different method.

I created a function called 'adjustForClockwise' and applied it to all the angle values, which successfully resolved the issue!

```
function adjustForClockwise(start, end) {
    if (start > end) { // adjusting the strokes rotatinf clockwise
      end += 360;
    }
    return map(percent, 0, 100, start, end);
  }

  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["R degree S"] = adjustForClockwise(oldObj["R degree S"], newObj["R degree S"]);
  new_letter["R degree E"] = adjustForClockwise(oldObj["R degree E"], newObj["R degree E"]);

  new_letter["Bsize"] = map(percent, 0, 100, oldObj["Bsize"], newObj["Bsize"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["B degree S"] = adjustForClockwise(oldObj["B degree S"], newObj["B degree S"]);
  new_letter["B degree E"] = adjustForClockwise(oldObj["B degree E"], newObj["B degree E"]);

  new_letter["Gsize"] = map(percent, 0, 100, oldObj["Gsize"], newObj["Gsize"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);
  new_letter["G degree S"] = adjustForClockwise(oldObj["G degree S"], newObj["G degree S"]);
  new_letter["G degree E"] = adjustForClockwise(oldObj["G degree E"], newObj["G degree E"]);

  new_letter["Ysize"] = map(percent, 0, 100, oldObj["Ysize"], newObj["Ysize"]);
  new_letter["offset4x"] = map(percent, 0, 100, oldObj["offset4x"], newObj["offset4x"]);
  new_letter["offset4y"] = map(percent, 0, 100, oldObj["offset4y"], newObj["offset4y"]);
  new_letter["Y degree S"] = adjustForClockwise(oldObj["Y degree S"], newObj["Y degree S"]);
  new_letter["Y degree E"] = adjustForClockwise(oldObj["Y degree E"], newObj["Y degree E"]);

````

![preview (52)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/d3b7f2e7-1dac-4add-83de-0c9296829f2e)


*******


I attempted to use this code to add more animation, intending for shapes drawn at 360 degrees to return to a vertically aligned state at the 50% interpolation point before transitioning to a new letter.

```
if(percent<50) 
  { new_letter["size"] = map(percent, 0, 50, oldObj["size"],3);}
  else{
    new_letter["size"] = map(percent, 50, 100, 3 , newObj["size"]);
  }
  if(percent<50) 
  { new_letter["offsetx"] = map(percent, 0, 50, oldObj["offsetx"],0);}
  else{
    new_letter["offsetx"] = map(percent, 50, 100, 0 , newObj["offsetx"]);
  }
  if(percent<50) 
  { new_letter["offsety"] = map(percent, 0, 50, oldObj["offsety"],-40);}
  else{
    new_letter["offsety"] = map(percent, 50, 100, -40 , newObj["offsety"]);
  }
  if(percent<50) 
  { new_letter["R degree S"] = map(percent, 0, 50, oldObj["R degree S"],0);}
  else{
    new_letter["R degree S"] = map(percent, 50, 100, 0 , newObj["R degree S"]);
  }
  if(percent<50) 
  { new_letter["R degree E"] = map(percent, 0, 50, oldObj["R degree E"],360);}
  else{
    new_letter["R degree E"] = map(percent, 50, 100, 360 , newObj["R degree E"]);
  }
  
  if(percent<50) 
  { new_letter["Bsize"] = map(percent, 0, 50, oldObj["Bsize"],3);}
  else{
    new_letter["Bsize"] = map(percent, 50, 100, 3 , newObj["Bsize"]);
  }
  if(percent<50) 
  { new_letter["offset2x"] = map(percent, 0, 50, oldObj["offset2x"],0);}
  else{
    new_letter["offset2x"] = map(percent, 50, 100, 0 , newObj["offset2x"]);
  }
  if(percent<50) 
  { new_letter["offset2y"] = map(percent, 0, 50, oldObj["offset2y"],-12);}
  else{
    new_letter["offset2y"] = map(percent, 50, 100, -12 , newObj["offset2y"]);
  }
  if(percent<50) 
  { new_letter["B degree S"] = map(percent, 0, 50, oldObj["B degree S"],0);}
  else{
    new_letter["B degree S"] = map(percent, 50, 100, 0 , newObj["B degree S"]);
  }
  if(percent<50) 
  { new_letter["B degree E"] = map(percent, 0, 50, oldObj["B degree E"],360);}
  else{
    new_letter["B degree E"] = map(percent, 50, 100, 360 , newObj["B degree E"]);
  }

  if(percent<50) 
  { new_letter["Gsize"] = map(percent, 0, 50, oldObj["Gsize"],3);}
  else{
    new_letter["Gsize"] = map(percent, 50, 100, 3 , newObj["Gsize"]);
  }
  if(percent<50) 
  { new_letter["offset3x"] = map(percent, 0, 50, oldObj["offset3x"],0);}
  else{
    new_letter["offset3x"] = map(percent, 50, 100, 0 , newObj["offset3x"]);
  }
  if(percent<50) 
  { new_letter["offset3y"] = map(percent, 0, 50, oldObj["offset3y"],20);}
  else{
    new_letter["offset3y"] = map(percent, 50, 100, 20 , newObj["offset3y"]);
  }
  if(percent<50) 
  { new_letter["G degree S"] = map(percent, 0, 50, oldObj["G degree S"],0);}
  else{
    new_letter["G degree S"] = map(percent, 50, 100, 0 , newObj["G degree S"]);
  }
  if(percent<50) 
  { new_letter["G degree E"] = map(percent, 0, 50, oldObj["G degree E"],360);}
  else{
    new_letter["G degree E"] = map(percent, 50, 100, 360 , newObj["G degree E"]);
  }

  if(percent<50) 
  { new_letter["Ysize"] = map(percent, 0, 50, oldObj["Ysize"],3);}
  else{
    new_letter["Ysize"] = map(percent, 50, 100, 3 , newObj["Ysize"]);
  }
  if(percent<50) 
  { new_letter["offset4x"] = map(percent, 0, 50, oldObj["offset4x"],0);}
  else{
    new_letter["offset4x"] = map(percent, 50, 100, 0 , newObj["offset4x"]);
  }
  if(percent<50) 
  { new_letter["offset4y"] = map(percent, 0, 50, oldObj["offset4y"],50);}
  else{
    new_letter["offset4y"] = map(percent, 50, 100, 50 , newObj["offset4y"]);
  }
  if(percent<50) 
  { new_letter["Y degree S"] = map(percent, 0, 50, oldObj["Y degree S"],0);}
  else{
    new_letter["Y degree S"] = map(percent, 50, 100, 0 , newObj["Y degree S"]);
  }
  if(percent<50) 
  { new_letter["Y degree E"] = map(percent, 0, 50, oldObj["Y degree E"],360);}
  else{
    new_letter["Y degree E"] = map(percent, 50, 100, 360 , newObj["Y degree E"]);
  }

```
![preview (34)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/e037d0a5-efad-490a-9e38-414879d53433)

*****
OTHER VARIATIONS

 arc stroke's sizes are 100.
```
if(percent<50) 
  { new_letter["Ysize"] = map(percent, 0, 50, oldObj["Ysize"],100);}
  else{
    new_letter["Ysize"] = map(percent, 50, 100, 100 , newObj["Ysize"]);
  }
  ```
![preview (35)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/80123c70-85fd-46be-aaa3-9c29f4c66f59)

 arc stroke's sizes are 10.

```
if(percent<50) 
  { new_letter["Ysize"] = map(percent, 0, 50, oldObj["Ysize"],10);}
  else{
    new_letter["Ysize"] = map(percent, 50, 100, 10 , newObj["Ysize"]);
  }
  ```
![preview (37)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/69a8adf3-27b0-4614-ac27-4b5ee38de71d)


 arc stroke's sizes are 10 & located in the centre point at 50%

```
if(percent<50) 
  { new_letter["Ysize"] = map(percent, 0, 50, oldObj["Ysize"],10);}
  else{
    new_letter["Ysize"] = map(percent, 50, 100, 10 , newObj["Ysize"]);
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

  ```

![preview (53)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/8379011d-dc5b-4284-9d42-76b33b7fb09e)
![preview (54)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/2732c11b-eb33-415a-afba-8c334ef80661)


 arc stroke's sizes are 10 & located in the centre point at 10%

```
if(percent<50) 
  { new_letter["Ysize"] = map(percent, 0, 10, oldObj["Ysize"],10);}
  else{
    new_letter["Ysize"] = map(percent, 10, 100, 10 , newObj["Ysize"]);
  }
  if(percent<50) 
  { new_letter["offset4x"] = map(percent, 0, 10, oldObj["offset4x"],0);}
  else{
    new_letter["offset4x"] = map(percent, 10, 100, 0 , newObj["offset4x"]);
  }
  if(percent<50) 
  { new_letter["offset4y"] = map(percent, 0, 10, oldObj["offset4y"],0);}
  else{
    new_letter["offset4y"] = map(percent, 10, 100, 0 , newObj["offset4y"]);
  }

  ```
  ![preview (55)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/06953bb5-08cc-4743-a88c-b060eb27c799)

arc stroke's sizes are 60 & located in the centre point at 50%

```
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
  ```
  ![preview (57)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/c1149bde-aa7b-45aa-bc6c-45c94fcccd95)

*****

Upon consideration, I have decided to apply a stroke size of 60 and center it at the 50% as I found this configuration makes the animation more visually appealing and cleaner.




# Exhibition

I named my font design "Bossbaby" because it contains my favorite designed letters 'A', 'B', 'S', and 'Y', and these letters collectively form the word. Additionally, the rounded design and colourful aesthetic of the font remind me of baby toys, which I find to be a perfect fit for the playful and lively vibe I wanted to convey with this font.


![preview (51)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/66d139c2-8057-4736-a834-101ba213c374)

******

I arranged swapwords with colour combinations between each letter, easily recognizable proportions, and letters designs that I personally like.


![preview (38)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/1fea3725-39af-4a62-8d81-8bbbd0c91a76)
![preview (39)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/4ff5cfd9-e758-4aae-9212-4a3929277e95)
![preview (41)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/b48700dd-8833-4bb8-b26d-ed55ad70d381)
![preview (42)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/27098cff-c525-4afd-bd3b-7a08cb376c7a)
![preview (43)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/49e06807-c1a9-42d1-aef3-b017221ea835)
![preview (44)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/e3c22c4b-651e-4671-93d3-1a2157ad7a91)
![preview (45)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/fb875ea1-6b4c-48a3-9e16-8023a10bf852)
![preview (46)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/21146fb7-d5de-481f-8bbe-d6013aaac3f8)
![preview (47)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/3e3a96c8-f15c-4308-acb7-140a1fe36868)
![preview (48)](https://github.com/23-2-DSDN242/time-based-media-lucycocoa/assets/140350024/1c69f21c-0fb7-442a-910c-0cecdbac8656)

********