---
layout: ../../layouts/ProjectLayout.astro
title: Querus
description: A digital business card microsite for Dad.
type: sideproject
published: 2022-06-06
redirect: https://querus.io/
image:
  href: https://querus.io/querus_og.png
  alt: The Querus logo. It features a tree with long roots. Overlaid on the tree, a banner reads Querus.
tags: 
  - Front-End Web Development
  - Web Design
period:
  from: 2022
---

## Background

A few years ago, my Dad purchased the [querus.io](https://querus.io/) domain for a side-business that never launched. Today, he's a facilitator for the online community MenLiving. He uses this custom domain for all MenLiving engagements.

My Dad wanted a digital business card instead of an error page. If anyone ever looked up the custom domain from his email, it would go *somewhere*.

## Process

My Dad didn't have any stipulations for how the microsite should look. I aimed for an understated sophistication.

### Design

Like usual, my design began in Figma. I mocked up a quick frame, drawing colors from the provided logo. I ran each color combination through a [color contrast checker](https://color.a11y.com/) and made tweaks accordingly. For example, I brought down the lightness on the buttons because the green pulled from the logo didn't contrast enough with the white text. 

For the typeface, I chose atipo foundry's [Calendus Plus](https://www.atipofoundry.com/fonts/calendas-plus). I chose this typeface because a) I already owned a desktop/web license for it and b) I liked the discretionary ligatures (the C + H ligature is splendid).

<Figure
  image={{
    href: "/src/img/projects/querus/querus_wireframe.png",
    alt: "A stylized wireframe of the Querus website in Figma."
  }}
>
  I chose the typeface Calendus Plus from [atipo foundry](https://www.atipofoundry.com/) solely because of the beautiful ligatures.
</Figure>

### Development

My favorite part of the development process was enabling the discretionary ligatures from the Calendus Plus typeface. To do this, I inspected the font file properties on [FontDrop](https://fontdrop.info/) — a font file inspection tool created by atipo.

<Figure
  image={{
    href: "/src/img/projects/querus/querus_ligatures.png",
    alt: "A screenshot of the ligatures inspection tool from FontDrop for the typeface Calendus Plus."
  }}
>
  Inspecting Calendus Plus' discretionary ligatures in FontDrop.
</Figure>

Using FontDrop, you can easily see which font feature properties you need to enable in CSS. There are toggles for each OpenType feature the tool detects. In my case, to enable the discretionary ligatures, all it took was one line of CSS:

```css
html { font-feature-settings: "dlig" on; }
```

I also created custom classes to use for ornamental glyphs and small caps:


```css
.ornm { font-feature-settings: "ornm" on; }

.small-caps { font-feature-settings: "smcp" on; }
```

Other than these typographic nuances, development in Astro &mdash; as always &mdash; was a pleasure. Deploying to Cloudflare Pages &mdash; like most jamstack CI/CD solutions &mdash; was a breeze.

## Tech Stack

The following technologies were used to create this microsite:

- [Astro](https://astro.build/) — my go-to <abbr title="Static Site Generator">SSG</abbr>. It's so easy to get up-and-running.
- [Tailwind CSS](https://tailwindcss.com/) — I wasn't really concerned with scale on this project nor would I be collaborating with anyone else. I opted for speed versus custom CSS.
- [Cloudflare Pages](https://pages.cloudflare.com/) — analytics and multiple team members can be added for the price of free — my Dad was super stoked about that.

In addition to these top-level tools/technologies, I also used the following Astro integrations:

- [astro-compress](https://github.com/nhristov/astro-compress) — this integration uses csso, terser, sharp, and svgo to minify your Astro build output. In the config, I disabled image, SVG, and HTML compression. My images are handled by **astro-imagetools** instead, and minifying HTML isn't really worth it in this instance because the site is so small. I didn't use any SVG in this project, so I disabled it, too.
- [astro-imagetools](https://github.com/RafidMuhymin/astro-imagetools) — "a collection of tools for optimizing images, background images, and generating responsive images for the Astro JS framework." In other words, a must-have for any Astronaut out there. 🧑🏻‍🚀

## Outcomes

Because this project was a microsite, a blistering loading speed is expected and demanded. Though Lighthouse scores never tell a full story, they can identify glaring issues in performance, SEO, and accessibility. 

*Note — the accessibility score is hung up on the color contrast of the buttons, but I've ran the colors through multiple checkers and they do, in fact, meet WCAG 2.1 AA compliance.*

<Figure
  image={{
    href: "/src/img/projects/querus/querus_lighthouse_scores.png",
    alt: "A screenshot of the Google Lighthouse scores for www.querus.io. The Performance score is 100, Accessibility score is 97, Best Practices score is 92, and SEO is 100."
  }}
>
  While not the end-all-be-all for web performance, Google Lighthouse does help suss out any major performance or SEO problems.
</Figure>

&rarr; [Visit the Querus website](https://querus.io/)

## What's Next?

I'm never satisfied when a project is done. I can always find room for improvement. When I find the time, I will address the issues causing the Lighthouse scores to be less than 100/100, add dark mode, and maybe some [Schemas](https://schema.org/docs/schemas.html) — because why not?
