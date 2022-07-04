---
layout: ../../layouts/PostLayout.astro
title: A year with Astro
published: 2022-06-25
draft: true
---

I can’t remember when I stumbled upon Astro. By my estimation, it ocurred during one of the most stressful periods of my life: July 2021. Work had thrown a wrench into my current website design efforts and (long story short) I ended up redoing much of the website design and architecture.
The first few website iterations for work were custom WordPress themes using Sage and Bedrock. This worked well for a while, but the CI experience of bundling and deploying a theme and then having to sync over the database bogged me down. I spent more time fiddling with the build pipeline rather than actually developing.

To make matters worse, Sage had transitioned to an earlier flavor of Tailwind CSS at the time. Before Tailwind’s JIT engine released, hot-reloading would take forever in local dev environments (Tailwind used to rebundle every utility class before tree-shaking was a thing).
But then I stumbled on Astro in my GitHub feed. If you aren’t familiar with this new system, I’ll reference their own lede to explain it best:

> Astro is a new kind of static site builder for the modern web. Powerful developer experience meets lightweight output.
> 
> — Astro via [astro.build](https://astro.build)

When I first jumped feet-first into Astro, I was completely lost. I had never been exposed to JSX-syntax (and frankly, didn’t have much experience with JAMstack or web development in general).
