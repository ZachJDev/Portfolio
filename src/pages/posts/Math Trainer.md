---
title: "Number Crunchers: A Mental Math Workout"
date: "2020-09-15"
type: work
thumbnail: "images/Math-Trainer.png"
gitHubLink: "https://github.com/ZachJDev/Math-Trainer"
link: "https://zachjdev.github.io/Math-Trainer/"
description: "Practice mental arithmetic with four different modes."
---

Number Cruncher is an online mental math trainer and an attempt to fulfill two goals I've had for myself recently: 1. create a tool that helps me practice mental arithmetic and 2. create a React application that is easily extensible for relatively large changes. I can safely say that I was able to accomplish the first goal, and while my code is far from perfect, I was able to write something that will be easy to work with in the future. While I will try to avoid writing an entire post-mortem, I would like to give some direction to anyone who may look at my code.

 My second goal manifests itself most clearly in handling game modes. I knew, before writing any code, that I had to separate all game rules and logic from the interface. And while that certainly makes my code clearer, it didn't necessarily make it more extensible; to do that, I made an abstract class that held basic game information common between all modes and then extended it for the concrete modes that would be displayed. With a little bit of finagling, I was able to abstract away most concrete references to game modes (thank you, computed property names) in the UI/React logic. (If your interested, [these 7 lines](https://github.com/ZachJDev/Math-Trainer/blob/fa28a941e8d53a73b55cf95d59049472169a7156/src/Components/Options.js#L10) handle importing rules.) Adding a new game mode is as simple as writing a new class extending `GameMode`, adding a line to the `GameMode`'s `newGame` method, and exporting it at the end of the file.

While it certainly isn't perfect (there were definitely some SOILD principles I've neglected...), I am happy with the way I've structured this code to make extending the application as easy as possible.
