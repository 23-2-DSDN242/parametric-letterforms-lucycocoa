[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xQz3oEP8)
## MDDN 242 2024 Assignment 2

(Replace this README with information about your alphabet. This is an example.)

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

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

 
After realizing that I only drew a,b and c but needed nine parameters, I reconsidered the letter interface, aiming to compose it within a maximum of 20 parameters.

# Design the Alphabet

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

Each letter was designed to prominently feature the arc's strokes, with delicated attention to achieving the most harmonious colour arrangements.

In designing the numbers, a distinct approach was taken to ensure they did not bear too much resemblance to the letters. Except for '0', the numbers were designed by overlapping two strokes to create a single one, ensuring a distinct visual appearance from the letters.

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