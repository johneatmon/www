---
layout: ../../layouts/ProjectLayout.astro
setup: |
  import { Img } from 'astro-imagetools/components';
title: ProSource
description: ProSource delivers tailored IT solutions to healthcare, finance, engineering, and manufacturing firms.
published: 2022-06-23
image:
  href: https://www.getprosource.com/img/values_bg.png
  alt: Wallpaper with a stylized letter p, which is the ProSource brandmark.
tags: 
  - UX Writing
  - Content Strategy
  - Front-End Web Development
  - Branding
  - Video Content
engagement:
  from: 2020
  to: present
---

ProSource is an Orlando-based IT services company. Since 2006, they've helped healthcare, engineering, finance, and manufacturing companies unlock their full potential by providing IT solutions tailored for their specific industry.

The largest biggest pain point when I joined was the ProSource website; it had been written in Dreamweaver by a previous intern. It: a) was not accessible, b) had no SEO strategy whatsoever, and c) needed a facelift.

<figure>
  <Img
    src='/src/img/projects/pstsonline.png'
    alt="A screenshot of the www.pstsonline.com website from December 2014, via the Internet Archive's wayback machine."
  />
  <figcaption>A relic of the past: The original www.pstsonline.com was designed in Adobe Dreamweaver.</figcaption>
</figure>

I won't dive into the *full* backstory of this web development project here. I have a separate post for that, which you can read [here](#). Instead, I want to focus on the process, stack, and outcomes.

I chose to create the refreshed marketing site with [Astro](https://astro.build/), a relatively new static site generator (SSG) that focuses on great developer experience. I also chose Tailwind CSS for styling the site. Despite its seemingly controversial approach, I chose it simply for the speed with which I could create interfaces. (I still think it's important for front-end web devs to learn good ol' CSS/SCSS, for what it's worth.)

<figure>
  <Img
    src='/src/img/projects/getprosource_wireframes_1.jpg'
    alt="A screenshot of the www.pstsonline.com website from December 2014, via the Internet Archive's wayback machine."
  />
  <figcaption>Some early mock-ups of the modernized ProSource web design created in Figma.</figcaption>
</figure>

Development began in July 2020 while Astro was still in beta. Though it was risky to use beta software for a company website, I was willing to take the risk to meet a tight deadline.
