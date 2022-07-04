---
layout: ../../layouts/ProjectLayout.astro
title: ProSource (Website)
description: A new marketing website for a huge rebrand.
published: 2022-06-23
modified: 2022-06-28
image:
  href: /src/img/projects/prosource-website/getprosource_hero.png
  alt: Screenshots of the live ProSource website in light mode and dark mode color schemes.
tags: 
  - Front-End Web Development
  - Web Design
  - Content Strategy
period:
  from: 2021
  to: present
---

ProSource provides IT services for healthcare, engineering, finance, and manufacturing companies.

## Background

The biggest pain point when I started as an intern way back in 2014 was the website. A previous intern created it in Adobe Dreamweaver. It was not accessible, had no SEO strategy, and needed a design refresh.

<Figure
  image={{
    href: "/src/img/projects/prosource-website/pstsonline.png",
    alt: "A screenshot of the www.pstsonline.com website from December 2014, via the Internet Archive's Wayback Machine."
  }}
>
  A relic of the past &mdash; the original ProSource site was written in Dreamweaver. Via <a href="https://web.archive.org/web/20150710010642/http://www.pstsonline.com/" rel="nofollow noopener noreferer">Internet Archive.</a>
</Figure>

In 2019, ProSource hired a marketing firm to update the website. Hiring an outside firm didn't yield better results. They used a custom WordPress theme in a multi-site environment, which meant I couldn't make changes to the website myself. All change requests or layout tweaks had to flow through the firm, so they took way too long. The outside firm also didn't understand our message, services, and clients like we did.

<Figure
  image={{
    href: "/src/img/projects/prosource-website/pstsonline_2.png",
    alt: "A screenshot of the second www.pstsonline.com website interface from December 2019, via the Internet Archive's Wayback Machine."
  }}
>
  The second iteration of the ProSource website offered a significant improvement. Via <a href="https://web.archive.org/web/20191213101208/https://www.pstsonline.com/" rel="nofollow noopener noreferer">Internet Archive.</a>
</Figure>

A [huge rebrand](/work/prosource-rebrand) in 2021, and a decision to redo the website in-house, became my first major projects as newly-appointed Content Strategist.

## Process

I began by taking stock of all existing content. I tagged everything for rework, reuse, or refuse. Very little was salvageable from the previous website iterations.

I created a sitemap and sorted salvageable content under the appropriate page. We outsourced copy for critical pages to a marketing firm to speed things up.

### Design

Using Figma, I created wireframes to roughly place elements on each page. This helped me determine the amount of marketing copy needed to fill in the blanks. After I finished each page, I sent it to a small group of customers for feedback. The feedback helped us reduce IT jargon and build a more approachable design.

I didn't worry too much about creating pixel-perfect designs. I like to leave a little wiggle room for last-minute tweaks while coding up the designs.

<Figure 
  image={{
    href: "/src/img/projects/prosource-website/getprosource_wireframes.png",
    alt: "Wireframe mock-ups designed in Figma. The wireframes are mega menu components in light mode and dark mode color schemes."
  }}
>
  Some early Figma mock-ups of navigation components using the new ProSource branding.
</Figure>

<Figure
  image={{
    href: "/src/img/projects/prosource-website/getprosource_wireframes_2.png",
    alt: "Wireframe mock-ups designed in Figma. ProSource team members' profile photos with colorful backgrounds are set in two color schemes, light mode and dark mode."
  }}
>
  Testing bold, bright colors behind profile pictures to give each team member a bit of personality.
</Figure>

<Figure
  image={{
    href: "/src/img/projects/prosource-website/getprosource_wireframes_3.png",
    alt: "Button components designed in Figma. There are primary buttons, secondary buttons, and icon buttons in light mode and dark mode color schemes."
  }}
>
  Buttons, buttons, everywhere &mdash; in light and dark mode.
</Figure>

### Development

I knew I didn't want to work with WordPress again after our last experience. One day, while exploring GitHub, I stumbled upon [Astro](https://astro.build/). Astro is a newer static site generator (SSG) promising better developer experience. At the time, Astro was in early beta. Up for a challenge and against a tight deadline, I took a risk using beta software. I'm so glad I did.

Development began in mid-summer 2021. By late August, things were firing on all cylinders. Astro's templating syntax made development much faster than WordPress' disjointed approach. The wonderful [Astro Discord community](https://astro.build/chat) helped me out whenever I got stuck, enhancing my experience further.

In early September, the new site launched to coincide with our rebrand debut. It was a massive amount of work, but I managed to pull it off with the help of my team.

<Figure
  image={{
    href: "/src/img/projects/prosource-website/getprosource_lightmode_darkmode.png",
    alt: "Screenshots of the live ProSource website in light mode and dark mode color schemes."
  }}
>
  The current ProSource website might be the only IT services provider website I've seen with dark mode.
</Figure>

## Tech Stack

The following technologies were used to create the website:

- [Astro](https://astro.build/) — a new static-site generator that promises "powerful developer experience." So far, it's lived up to its messaging and the community around it has made me so excited about web development.
- [Tailwind CSS](https://tailwindcss.com/) — the utility-first CSS framework. Though controversial, the tool's power to iterate and design quickly helped a lot with this project.
- [Netlify + Functions & Forms](https://www.netlify.com/) — a [jamstack](https://jamstack.org/what-is-jamstack/)-focused platform. I loved working with the [Netlify CLI](https://cli.netlify.com/) during development. I find Netlify's admin dashboard  much more intuitive to use than the competitors as well. I used Netlify Forms to wire up HTML forms on the site. Netlify Functions securely handle any API requests to our documentation tool or HubSpot CRM.

This stack was excellent to help me iterate on designs quickly. However, if I had more time or could redo it, I would've added a headless CMS (like Strapi or Netlify CMS) to the mix. Astro consumes markdown frontmatter well, but it becomes burdensome to keep it all consistent when you have a lot of content.

## Outcomes

- Designed 60+ pages of content, much of which needed new marketing copy, brand direction, and stock photography.
- Used Netlify Functions to create API requests to HubSpot CRM for email newsletter enrollments and the contact form.
- Our company needed a two-factor authentication (2FA) enrollment webform. I used Netlify Functions to parse and prettify data before being sent to our knowledge base platform, [IT Glue](https://itglue.com/). At the time of writing, this has collected over 180 submissions successfully.
- Launched the new website with keyword-focused copy, improved technical SEO, and an ongoing content marketing strategy.

<Figure
  image={{
    href: "/src/img/projects/prosource-website/lighthouse_scores.png",
    alt: "The Google Lighthouse scores for www.getprosource.com. The Performance score is 97/100, the Accessibility score is 100/100, the Best Practices score is 100/100, and the SEO score is 100/100."
  }}
>
  Early Google Lighthouse scores at website relaunch. Caveat, there may be some perf regressions since.
</Figure>


&rarr; [Visit the live website](https://www.getprosource.com/)

## What's Next?

Since September 2021, I've pushed many more iterations through the pipeline. I use Netlify's Branch Deploy feature to test new designs and code before modifying the live site.

This experimental branch of the ProSource website [exists here](https://next--getprosource.netlify.app/).
