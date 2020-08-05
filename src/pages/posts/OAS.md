---
title: Open Access Slideshow
date: "2020-03-01"
type: work
thumbnail: "images/OpenAccessSlideshow.png"
gitHubLink: "https://github.com/ZachJDev/open-access-slideshow-webpage"
link: "https://zachjdev.github.io/slideshow-react-frontend/"
description: "Search online sources to make a slideshow from CC0 artwork."
---

This application was inspired by the [Smithsonian Institution's recent release of nearly 3 million items under a CC0 license](https://www.si.edu/openaccess). This online application searches those records and creates a little slideshow with the returned images. 

While the Smithsonian is the only supported institution right now, I hope to extend the capabilities and incorporate other institutions that have released portions of their collections under a CC0 license.

I have two versions of the frontend -- [one built with React](https://github.com/ZachJDev/slideshow-react-frontend) and [one with HTML/CSS/JS](https://zachjdev.github.io/open-access-slideshow-webpage/). Refactoring it into a React app gave me some insight into how React works under the hood and what makes it such a powerful tool.

The backend server is built with Node.js, Express.js and MongoDb. It prepares the request to the Smithsonian servers, caches some important information based on search terms, and hides my API key.