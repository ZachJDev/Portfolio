---
title: "Analyzing My Background's Algorithm"
date: "2020-7-18"
type: blog
thumbnail: "sketch.png"
---

When I was writing the code that powers my portfolio's background, I ran into a lot of bugs and implementation issues that kept the animation from running optimally. I wanted to write up a short post about how I discovered and resolved those issues. Before I get into that, a word about the technology and how I use it:

## p5.js...

The library powering the animation is the amazing [p5.js](https://p5js.org/). This library is an extension/JS implementation of [Processing](https://processing.org/), a language structured around the visual arts. 

The basic pattern of nearly all p5.js sketches is

 1. the program calls a `setup()` function that runs once,
 2. the program loops through the `draw()` function indefinitely.

Controlling data structures and optimizing alogorithms is paramount to keeping things running smoothly.

## And how I use it
My background's pseudocode is basically something like this:

### `Setup()`

1. generate an array of `Point`s randomly scattered throughout the page

### `draw()`

1. add a new `point` to the array where the mouse pointer is
2. for each `point`:
   1. draw the point
   2. make a new array of 'neighbor' points within some arbitrary bounding square around the point.
   3. For each neighbor, calculate and draw the line between the neighbor and the point using the Pythagorean theorem.
   4. Using the speed vector of the point, calculate the point's next position

## Issue #1: Not handling the mouse correctly

The first issue I noticed was that the FPS slowly dropped the longer the sketch was running. I quickly realized that I added a new point for the mouse on every frame, but never did anything with the old mouse points. this meant that my `shapes` array quickly ballooned with unused points. The points were marked as such as to not draw any lines, so they were essentially just taking up space at the end of the array. after 30-40 minutes, this produced a noticeable drop in FPS. I fixed this easily enough by removing the point referencing the mouse at the end of every  draw loop.

## Issue #2: Drawing Each Line Twice

When reading the code, I realzied that each line between two points would be drawn twice -- once when calculated from one point and once when calculated from the other. This obviously meant I was doing twice as much work as I needed, but it also meant that I was getting an incorrect opacity for every line. 
