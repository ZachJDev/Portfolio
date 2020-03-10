---
title: First-App Headaches
date: "2005-01-23"
type: blog
thumbnail: "images/Headaches.png"
---

I have learned a lot in my three months of earnest web-development study, so I figured now is the perfect time to reflect on the project that kickstarted my journey, and all of the lousy code that held it together.  

I was asked to find a way to track all of the roles, competencies, and skills that my division in my institution would ever need to teach other divisions.

Now, I did not consider myself a programmer when I started the project. My materials were meager: I had a pen, some paper, Excel and an internet connection (maybe not so meager given that last one). Every test that passed and every variable that Debug.print-ed correctly was a miracle to me.

A week after starting, I turned in a hot mess of 1000 lines of VBA code and eight userforms built on top of two Excel worksheets.

Looking back, I made a lot of mistakes. 

Here are four of them.

###1. I relied on barely descriptive variable and function names.

This first mistake stepped on my toes constantly. Oh, I want to iterate over the array of skills I just entered? Would that be `arr`, `skills_arr`, or `newSKills_arr`? My functions were worse, with names like `arrayCheck` -- a datatype and a terrible, no-good, non-descriptive verb.

My program was short enough for this to be a nuisance at worst, and thankfully I am the only person who will ever read the code. But add a few hundred lines and give it to someone else, and I bet they'd be pulling their hair out in minutes.

I give this three headaches out of five.

 🤕 🤕 🤕 · ·

###2. I repeated myself and my code  many times.

Why waste all that time writing a function whose name I won't remember when I can just copy-and-paste the code I need down here?

Again, a big, annoying mistake that was only mitigated by my scale. 

 🤕 🤕 🤕 🤕 ·

###3. No comments, no documentation.

Remember above, when I said: 

>...and thankfully I am the only person who will ever read the code.

That was a bit misleading because I will try my best to never read this code again. And if I do, I wouldn't know where to start. The only comment I made was to attribute a quicksort algorithm I got from StackOverflow. The code is unclear enough, and the lack of comments makes it nearly impossible to figure out.

🤕 🤕 🤕 · ·

###4. Too much code lived in the global scope.

This one was due to deficient knowledge of VBA and, unlike the other mistakes on this list, I tried my best to deal with this while I was working on the code.

The only way I was able to regularly and successfully pass data between my forms was to stick a variable in the global scope for all to see. There's probably a way around this, but I was having trouble getting other solutions to work.

####Now, I hope it's clear what kind of mess I got myself into:
>1. I move a lot of code to the global scope to make it accessible by different forms.
>2. My terrible naming conventions meant that a lot of variables, previously tucked away, were now colliding, and I was calling different things by the same name.
>3. The lack of comments (and generally poor style) meant that figuring out where these variables were called and what I was doing to them was more work than it should have been.
>4. Repeat the above process about 100 times, because I couldn't be bothered to keep my code DRY in the first place.

🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 🤕 


And that leads me to the biggest lesson I learned:

###For developers, code usability is just as important as application usability.

Small mistakes, minor annoyances, and careless style *will* pile up.

My constant refrain has been "it could have been worse -- at least my code was short and I was working alone", but the reality is that if I want to do this professionally, these things won't fly. 

My scale was small and I was alone. Dealing with these mistakes still took up 15 or 20% of my time. With 10 or 20 more developers and 100x to 500x more code, I would find these mistakes unacceptable. 

But this was an important lesson to learn, and I'm glad I got it out of the way so quickly.

---

I know my mistakes and lessons probably aren't news to most people reading this, but thanks for reading this far anyway! Next time, I want to dive into a UX problem I created for myself -- one that I spent way to much time on, only to end up with something I hated using.
