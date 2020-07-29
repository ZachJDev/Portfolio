---
title: A Tale of Two UX Decisions
date: "2020-02-10"
type: blog
thumbnail: "UX-noBackground.png"
---

For my [flagship project](/Competency%20Tracker/ "Competency Tracker"), I decided to rewrite the Competency Tracker Excel application as a Node web app. With all the [lessons learned](/blog/2019/12%20Dec/20%20Headaches/2019-12-20%20Headaches/ "First App Headaches"), I certainly had a headstart, and despite the steeper learning curve, Node, Express, and MongoDB ended up being much easier to wrangle than VBA.

The change in technology and the fresh start meant revisiting the interaction design. I had to start from the beginning, questioning how I wanted the user to use my program at every step: what kind of behavior did I want to encourage? What did I want to discourage? What information might the user want at any given time? How far away is it on the site? 

I did not have the time or resources to devote serious work to finding satisfactory answers to each of these questions (and more!), but I did consider them. Considering design decisions early can save developers a whole lot of work down the road, especially when one is working alone. In some ways, every choice a developer makes influences the interaction design of an application. Alas, I did not follow my own advice when creating my first application.

Consider the header image. Both of those screenshots are of the "Add Role" functionality of my two applications. The interaction itself is pretty simple: the user adds a role and assigns skills that someone filling that role should have. The Excel application's first attempt at this problem was functionally identical to the web app's current version: the user named the role and assigned skills by number, separated by commas. This was not decided on lightly; I knew that the only people who would use this functionality would have a hard copy of the role name and the list of skills required for each role. Assuming that the user would have all the information available to them and the interaction was essentially one of verbatim data entry, why would I bog them down with a more verbose form? This was ultimately how I ended up implementing the interaction in my web app version, though I know it not ideal, especially considering how I hope to expand it into a more fully-featured curriculum builder.

My Excel app did not end up with that implementation. After ironing out major kinks and trying to find ways to spruce up the project, I decided to implement what you see above. This form, instead of requiring manual entry of each skill, now listed every skill, displayed the skill's text, and gave the user buttons to add or remove skills from the role. I thought this was really cool, and it did give me the chance to solve some interesting problems.

What I didn't realize when I was implementing this change was that I was fundamentally changing how I expected users to interact with my program. Now instead of the interaction being simple data entry, the form invites a more interpretive approach; the user may not have a fully-formed idea about which skills a role may need, and is given the information and time to weigh each skill individually.

This is not a bad thing necessarily, but it was antithetical to how I knew I, as the only user, would be using the application. When I finished the implementation, I realized two things: 1. it slowed me down to an unreasonable speed, and 2. I did not need all of the information I was giving myself. I also realized that I had no version control and no way to bring back my old design (I've since discovered the magic of Git). I honestly decided that I would just enter the skill numbers  directly into the Excel worksheet once that phase of the task began.

Both of these designs output the same thing: a role with a name and assigned skills (and a description, on the web app), but they guide the user to those outputs by different paths, they expect different knowledge bases of their usage, they invite the user to use the app in entirely different ways.

That ordeal left me with even more lessons learned. I've learned that I need to seriously consider not just what a user will have to show for using my applications, but how they will go about getting to that final state. I learned these designs can make or break a product -- I broke one myself! But most importantly I've learned that if I ever want to publish a product that I want people to use, then the upfront cost of serious UX consideration will pay dividends once I start writing code.
