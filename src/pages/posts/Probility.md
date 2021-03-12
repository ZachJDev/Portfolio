---
title: Probility
date: "2021-03-01"
type: work 
thumbnail: "images/Probility1.png"
gitHubLink: "https://github.com/ZachJDev/Probility"
link: 'https://www.npmjs.com/package/probility'
description: "An easy-to-use library to prototype, build, and explore probability spaces."
---

Probility is a simple library that aims to make using and exploring probability spaces easy. 

I was inspired to do this when helping my game-designer coworker calculate various die rolls in Excel. Probility 
aims to simplify the process of making and presenting probability calculations and to provide an interface for those 
calculations in other programs. One of my main goals was to make the collections agnostic to what they contained and 
to make it easy to use functions in a collection:

```javascript
const Probility = require("probility");
const loudOrSoft = new Probility([(val) => val.toUpperCase(), (val) => val.toLowerCase()]);
loudOrSoft.choose()("Hello") // "HELLO" or "hello"
```

This project also gave me the chance to work on my documentation skills: it's the first package I've published to 
NPM, and I wanted to make sure my API reference was robust enough to support anyone who wanted to use it. Working on 
this project gave me a lot of room to experiment with Javascript without relying on web-based technologies. I've 
learned a lot so far, and I hope to keep expanding Probility in new and helpful ways!