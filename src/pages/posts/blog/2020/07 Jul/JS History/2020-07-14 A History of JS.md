---
title: "A History of JS, 00: Introduction"
date: "2020-7-14"
type: blog
thumbnail: "netscape-4.jpeg"
---

Before I started programming seriously, Javascript seemed to be on the receiving side of much internet scorn. After learning it and programming with it nearly everyday for nine months, I feel that, today, the discontent is misplaced. And while I understand some of the issues people have raised, I've never spent much time exploring what JS was like in its various stages of development to find out where that scorn came from.

The JS of 2020 is not the JS of 2000. The language has certainly changed, but have the ways people used it changed? The answer that immediately comes to mind is "yes", if only because of Node.js. But with this series of blog posts (which, I'll warn you up front, will be in no way regular) I want to trace how Javascript and the wider ecosystem surrounding it have evolved and adapted to the needs of their users and the changing internet landscape. I'm fascinated by libraries like Knockout.js that seem to have been very popular a decade ago, but have since been replaced by newer technology -- and I really want to explore the history of those cast-aside technologies.

I'll begin my research with a couple guiding questions:

- What problems was Brendan Eich trying to solve when he first created Javascript?
- Have new frameworks and libraries emerged as web developers faced new problems or does new tech simply get better at solving old problems?

And I have a few hypotheses as well:

- People used the internet in a fundamentally different way in 1995. I guess I'll find that early JS was more concerned with interactivity than being able to support applications running in a browser.
- HTTP is designed to be stateless - i.e. all of the information that the server needs from a client will be included in every request. As web applications grew in size and complexity, a demand grew for libraries that could easily manage state on the client-side.

My goal for this project is not only to scratch a historical itch -- I hope to gain some insight into how people adapted to their problems and turned Javascript into one of the most used languages today. With any luck, that insight will help me approach my own problems in the future.