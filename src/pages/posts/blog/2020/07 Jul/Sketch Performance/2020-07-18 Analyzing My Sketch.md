---
title: "Analyzing My Background's Algorithm"
date: "2020-07-18"
type: blog
thumbnail: "sketch.png"
---

When I was writing the code that powers my portfolio's background, I ran into an interesting implementation issues that kept the animation from running optimally. I wanted to write up a short post about how I discovered and resolved it. But before I get into that, a word about the technology I used:

## p5.js

The library powering the animation is the amazing [p5.js](https://p5js.org/). This library is an extension/JS implementation of [Processing](https://processing.org/), a language structured around the visual arts. 

The basic pattern of nearly all p5.js sketches is

 1. the program calls a `setup()` function that runs once,
 2. the program loops through the `draw()` function indefinitely.

Controlling data structures and optimizing algorithms is paramount to keeping things running smoothly.

## And how I use it

My background's pseudocode is basically something like this:

### `Setup()`

1. generate an array of `Point`s randomly scattered throughout the page

### `draw()`

1. add a new `point` to the array where the mouse pointer is
2. for each `point`:
   1. draw the point
   2. make a new array of 'neighbor' points within some arbitrary bounding square around the point.
   3. For each `neighbor`:
       1. calculate the line between the neighbor and the point using the Pythagorean theorem.
       2. using the length of the line, calculate the opacity of the line
       3. draw a line between the `point` and the `neighbor`.
   4. Using the speed vector of the point, calculate the point's next position

## Issue: Drawing Each Line Twice

When reading the code, I realized that each line between two points would be drawn twice -- once when calculated from one point and once when calculated from the other. This obviously meant I was doing twice as much work as I needed, but it also meant that I was getting an incorrect opacity for every line. This issue lead me down the road of trying to find the most efficient way to calculate  and draw the lines. The complexity pretty much stays at O(n^2), but the fix below provided a very noticeable performance boost of 10-15 FPS.

## Fix

The solution to this problem was to make a map `linesDrawn` that, for each `point`, stored the points to which it has already drawn a line. At the end of every `draw()` iteration, every point's value in the map was set to an empty array. To keep lines from being drawn more than once, I rewrote step 1.3 to something like this:

* For each `neighbor`:
   1. If the current `point` is in the array at `linesDrawn[neighbor]`, skip this iteration. 
   2. Calculate the line between the `neighbor` and the `point` using the Pythagorean theorem.
   3. Draw the line.
   4. Push `neighbor` into `linesDrawn[point]`.

This does not improve the complexity of O(n^2), but it does speed things up. It's clear that calculating the hypotenuse or drawing the line is an expensive task, and while I have some ideas that would cut out some array manipulation, it is clear that the performance gains from that would be negligible, if even noticeable.

## Conclusion

I have not spent much time  with Big O notation or analyzing algorithms -- something I hope to rectify in the future -- But it is great to see the bit of work I've done start to pay off. I see a lot of commentary pooh-poohing the importance of algorithmic knowledge, often connected to a criticism of the Tech Interview. And while I don't have experience in the industry yet, I hope that those dismissals are less common outside of Medium blog posts. Knowledge of how algorithms work and the skill to dissect and analyze them are important tools for programmers who want to write code that not only works but works well. I hope to be able to spend more time studying algorithms and their theories as I continue my career.
