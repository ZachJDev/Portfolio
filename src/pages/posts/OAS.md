---
title: Open Access Slideshow
date: "2020-03-01"
type: work
thumbnail: "images/OpenAccessSlideshow.png"
gitHubLink: "https://github.com/ZachJDev/open-access-slideshow-webpage"
link: "https://zachjdev.github.io/open-access-slideshow-webpage/"
description: "Search online sources to make a slideshow from CC0 artwork."
---

This application was inspired by the [Smithsonian Institution's recent release of nearly 3 million items under a CC0 license](https://www.si.edu/openaccess). This online application searches those records and creates a little slideshow with the returned images. 

While the Smithsonian is the only supported institution right now, I hope to extend the capabilities and incorporate other institutions with that have released portions of their collections under a CC0 license.

I built the frontend of this application using HTML/CSS/JS, and I use an AJAX call to a backend server built with Node.js, Express.js and MongoDb that prepares the request to the Smithsonian servers, caches some important information based on search terms, and hides my API key.