---
description: A little bit about this guide and BackstopJS
---

# Introduction

Hey 👋 my name is Andie Johnson. You can find me on Github [here](https://github.com/An-dy1) or LinkedIn [here](https://www.linkedin.com/in/andrea-j-817411152/). 

I work for [VMLYR](https://www.vmlyr.com/), a global marketing agency headquartered in Kansas City, MO. I'm a member of VMLYR's **Automation of Quality** practice.

I learned BackstopJS in the summer of 2019 to beef up our visual testing offerings. 

Speaking of BackstopJS, what is it exactly? In tester speak it is a tool for automating "**visual regression testing of your responsive web UI by comparing DOM screenshots over time" \(**[Github repo](https://github.com/garris/BackstopJS)**\).**

To make it a little more plain, BackstopJS takes screenshots of a site and saves them as a [bitmaps image](https://en.wikipedia.org/wiki/Bitmap). After you or a developer makes changes to the site, you can take another set of screenshots that BackstopJS will compare to the first set pixel by pixel. 

Why would you want to do that? Well, if you've ever dug into the CSS of a mature site you know it can sometimes be ... shall we say messy? Let's imagine you alter some CSS aimed at changing the color of a sign-up button on your site. If you run a BackstopJS test you'll know that in fact, only the button color changed.

Alright, enough intro. Let's do some testing.

