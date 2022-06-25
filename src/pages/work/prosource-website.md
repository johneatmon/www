---
layout: ../../layouts/ProjectLayout.astro
setup: |
  import { Img } from 'astro-imagetools/components';
title: ProSource (Website)
description: A new marketing website for a huge rebrand.
published: 2022-06-23
image:
  href: /src/img/projects/getprosource_hero.png
  alt: Screenshots of the live ProSource website in light mode and dark mode color schemes.
tags: 
  - Front-End Web Development
  - Web Design
  - Content Strategy
period:
  from: 2021
  to: present
---

ProSource is an Orlando-based IT services company. Since 2006, they've helped healthcare, engineering, finance, and manufacturing companies unlock their full potential by providing IT solutions tailored to their specific industry.

## Background

I started working at ProSource as an intern way back in 2014. After a brief spell away for school, I worked in various capacities for the company.

In October of 2020, I became the first Content Strategist for ProSource. This post will primarily cover my content strategy role from 2020 onward.

<p class="callout">I have a separate post that delves into the <em>full</em> backstory of this project for ProSource, which you can <a href="#">read here</a>. This post will instead focus on the process, tech stack, and outcomes.</p>

The biggest pain point when I started as an intern way back in 2014 was the website; it had been written in Adobe Dreamweaver by a previous intern. It was not accessible, had no SEO strategy, and needed a design refresh.

<figure>
  <Img
    src='/src/img/projects/pstsonline.png'
    alt="A screenshot of the www.pstsonline.com website from December 2014, via the Internet Archive's Wayback Machine."
    preload="avif"
    loading="lazy"
  />
  <figcaption>A relic of the past &mdash; the original ProSource site was written in Dreamweaver. Via <a href="https://web.archive.org/web/20150710010642/http://www.pstsonline.com/" rel="nofollow noopener noreferer">Internet Archive.</a></figcaption>
</figure>

Around 2019 — before I was made Content Strategist — the company engaged an IT-focused marketing/web design firm called Pronto Marketing. They created custom WordPress themes and hosted them in a multi-site environment. While this was much better than the site from 2014, our company hated how slowly changes and requests were implemented. Moreover, big changes were brewing.

<figure>
  <Img
    src='/src/img/projects/pstsonline_2.png'
    alt="A screenshot of the second www.pstsonline.com website interface from December 2019, via the Internet Archive's Wayback Machine."
    preload="avif"
    loading="lazy"
  />
  <figcaption>The second iteration of the ProSource website offered a significant improvement. Via <a href="https://web.archive.org/web/20191213101208/https://www.pstsonline.com/" rel="nofollow noopener noreferer">Internet Archive.</a></figcaption>
</figure>

In 2021, ProSource underwent a [huge rebrand project](#) &mdash; its biggest in 15 years. We evaluated our existing clients, brand messaging, and website copy. We decided to focus on the four industries we knew we could serve best: healthcare, engineering, finance, and manufacturing.

Another website iteration was in order. This time, we wouldn't be using Pronto and decided to bring it in house. It was at this point that I became the Content Strategist, and the website would be my first major project alongside the rebrand.

## Process

Very little was salvageable from the earlier websites. Because the rebrand shifted our entire target audience and message, everything had to be created from scratch. The only items we were able to reuse were some of the blogs written and posted by Pronto and some collateral pieces (which also had to be rebranded) that could be gated behind a form for email capture.

### Design

I helped write copy for the entire site. We also employed a marketing firm named [Bluleadz](https://www.bluleadz.com/) to help us write case studies for the website launch. At every step, we gathered feedback from a small handful of our customers, especially the ones occupying the industries we were targeting. This feedback was instrumental to help us remove IT jargon and present a more human-friendly design.

Designs were created in Figma and sent to the team and our clients for review. I didn't worry too much about pixel-perfect wireframes, I knew there would be decisions I would make last-minute while coding up the designs.

<figure>
  <Img
    src='/src/img/projects/getprosource_wireframes.png'
    alt="Wireframe mock-ups designed in Figma. The wireframes are mega menu components in light mode and dark mode color schemes."
    preload="avif"
    loading="lazy"
  />
  <figcaption>Some early Figma mock-ups of navigation components using the new ProSource branding.</figcaption>
</figure>

### Development

Initially, I was going to create a custom WordPress theme using Roots' [Sage](https://roots.io/sage) and [Bedrock](https://roots.io/bedrock) packages. But after discovering [Astro](https://astro.build/) — a newer static site generator (SSG) — I knew it would be the faster tooling I needed.

Development began in mid-summer 2021 while Astro was still in beta. Though it was risky to use beta software for a company website, I was willing to take the risk to meet a tight deadline. I am so glad I did.

By late August, things were running smoothly. At first, I struggled with the Astro syntax, but I quickly overcame these hurdles. After countless development hours in a few months' time, the new site was ready to go live.

<figure>
  <Img
    src='/src/img/projects/getprosource_lightmode_darkmode.png'
    alt="Screenshots of the live ProSource website in light mode and dark mode color schemes."
    preload="avif"
    loading="lazy"
  />
  <figcaption>The current ProSource website might be the only IT services provider website I've seen with dark mode.</figcaption>
</figure>

We launched in early September to coincide with our rebrand debut. It was a massive amount of work, but I managed to pull it off with the help of my team.

## Tech Stack

The following technologies were used to create the website:

- [Astro](https://astro.build/) — a new static-site generator that promises "powerful developer experience." So far, it's lived up to its messaging and the Discord community has been a wonderful resource.
- [Tailwind CSS](https://tailwindcss.com/) — the utility-first CSS framework. Though controversial in the web dev spheres, its power to iterate and design quickly helped tremendously with this project.
- [Netlify + Functions & Forms](https://www.netlify.com/) — a jamstack-focused website host. I loved working with the [Netlify CLI](https://cli.netlify.com/) and I like the admin dashboard interface much more than other competitors. I used Netlify Forms to wire up the HTML forms and used Netlify Functions to handle any API requests to our documentation tool or HubSpot CRM.

This stack was excellent to help me iterate on designs quickly. However, if I had more time or could redo it, I would've added a headless CMS (like Strapi or Netlify CMS) to the mix. Astro can consume markdown frontmatter to easily stub out templated content (like blogs, case studies, etc.), but it becomes tough to wrangle frontmatter that a CMS could handle much better when you have large amounts of content.

## Outcomes

- Created 60+ pages of content, much of which needed new marketing copy, brand direction, and stock photography.
- Used Netlify Functions to create API requests to HubSpot CRM — for email newsletter enrollments and our contact form.
- Our company needed a two-factor authentication (2FA) webform to capture customer details when they enrolled. I used the [IT Glue](https://itglue.com/) REST API to parse and prettify data sent to our company knowledge base. At the time of writing, this has collected over 180 submissions successfully.
- Launched with keyword-focused copy and optimized technical/content SEO.

<figure>
  <Img
    src='/src/img/projects/lighthouse_scores.png'
    alt="The Google Lighthouse scores for www.getprosource.com. The Performance score is 97/100, the Accessibility score is 100/100, the Best Practices score is 100/100, and the SEO score is 100/100."
    preload="avif"
    loading="lazy"
  />
  <figcaption>Early Google Lighthouse scores at website relaunch. Caveat, there may be some perf regressions since.</figcaption>
</figure>

&rarr; [Visit the live website](https://www.getprosource.com/)

### What's Next?

Since the September 2021 launch, many more iterations have been pushed through the pipeline. When I'm working on new design directions and code functionality, I use Netlify's Branch Deploy feature to test.

Currently, an experimental version of the site [exists here](https://next--getprosource.netlify.app/).
