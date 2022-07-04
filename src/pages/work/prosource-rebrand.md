---
layout: ../../layouts/ProjectLayout.astro
title: ProSource (Rebrand)
description: A rebrand for a refocused marketing strategy.
published: 2022-06-15
modified: 2022-07-04
image:
  href: /src/img/projects/prosource-rebrand/prosource_rebrand_hero.png
  alt: Wallpaper with a stylized letter p, which is the ProSource brandmark.
tags: 
  - Branding
  - Graphic Design
  - Content Strategy
period:
  from: 2020
  to: 2021
---

ProSource provides IT services for healthcare, engineering, finance, and manufacturing companies.

## Background

When I started at ProSource, the company pitched itself as a soup to nuts IT provider for every industry. As the team complexity changed and became more specialized, our client demographic shifted. By 2021, over 70% of our clients were in healthcare or a healthcare-adjacent industry.

To capitalize on this high-complexity industry — and other industries with similar complexity — where we knew our impact would be greatest, we discussed a rebrand. At this time, we had four distinct arms of the business that would need to be unified:
1. ProSource Cloud Services &mdash; data center and hosted services
2. ProSource Medical Consulting &mdash; healthcare-specific consulting services
3. ProSource Technology Solutions &mdash; managed IT services
4. ProSource Voice Services &mdash; VoIP and faxing services

Prior to the rebrand, ProSource marketed its services under each a discreet line of business. This confused customers who consumed multiple services from us. And the healthcare-specific distinction, in the case of Medical Consulting, made it seem like the rest of our services *weren't* healthcare-specific.

## Process

Working closely with a logo designer, I helped shape the design of the new ProSource logo. I identified a new typeface for our digital assets. The logo and all ProSource content is set in [Moderat by TIGHTYPE](https://tightype.com/typefaces/moderat). I chose it for its geometric design, which suits a technology company well. It's playful, too, without looking cheap. Overall, the new typeface and the simplified ProSource moniker lend to a much more approachable design.

<Figure
  image={{
    href: "/src/img/projects/prosource-rebrand/prosource_rebrand_type.png",
    alt: "A screenshot showcasing the letters, numbers, and symbols of the Moderat typeface."
  }}
>
  Typography guidelines created for the Moderat typeface. Did I end up following these guidelines completely? No, not really, but they look cool.
</Figure>

After our new brand was formalized, I began the long process of updating all marketing/sales assets with the new colors, typography, and logo.

First on the list were our business cards. I created new business cards in Adobe InDesign. I toyed with an all-dark theme, but ended up favoring the white for the contact details side.

<Figure
  image={{
    href: "/src/img/projects/prosource-rebrand/prosource_rebrand_bizcards.png",
    alt: "New ProSource business cards mockup. The side with contact details is shown with a white background a dark gray background."
  }}
>
  You may notice 1s and 0s on the contact details side — it says ProSource in binary.
</Figure>

Next on the rebrand list were all email assets. Before this project, I'd created all email templates/signatures with [MJML](https://mjml.io/). This framework was certainly better than writing everything by hand but it wasn't perfect. 

Microsoft Outlook is [notorious for its quirks](https://www.emailonacid.com/blog/article/email-development/how-to-code-emails-for-outlook-2016/). ProSource and the overwhelming majority of its customers use Outlook. Our new templates *needed* to be perfect in that email client. MJML didn't do a good enough job correcting Outlook's inherent flaws, so I went looking for an alternative.

After some searching, I stumbled on [Maizzle](https://maizzle.com/), an email framework that uses a modified version of Tailwind CSS under the hood to style email templates. The output from Maizzle rendered much better in Outlook than MJML's.

I redesigned all 60+ email assets with Maizzle. I wrote new, friendly copy for each of the templates to match our new brand personality — friendly but professional.

<Figure
  image={{
    href: "/src/img/projects/prosource-rebrand/prosource_rebrand_email.png",
    alt: "A picture of a redesigned email help desk ticket template created with Maizzle."
  }}
>
  New email templates were created in a friendly tone and emphasized important details first.
</Figure>

With these critical redesigns out of the way, I tackled each piece of marketing and sales collateral in our content library one by one.

<Figure
  image={{
    href: "/src/img/projects/prosource-rebrand/prosource_rebrand_casestudy.png",
    alt: "A case study sample updated with the new ProSource branding."
  }}
>
  Gated case study content, updated with the new design language.
</Figure>

<Figure
  image={{
    href: "/src/img/projects/prosource-rebrand/prosource_rebrand_ebook.png",
    alt: "An ebook cover with the title: Demystifying the Cloud. What it is and why you should care."
  }}
>
  The most popular ebook &mdash; a gated piece of collateral on the [Resources](https://www.getprosource.com/resources/) page of the ProSource website.
</Figure>

All of this work took about a month to complete. Along with the redesigned [ProSource website](/work/prosource-website), these were my first projects as newly-appointed Content Strategist for ProSource.

## Tools & Technologies

The following tools and technologies were used for the ProSource rebrand project:

- Adobe InDesign — I created all print materials (business cards, flyers, etc.) in InDesign.
- Adobe Photoshop — I designed the graphical elements (like Microsoft Teams backgrounds, social media banners, etc.) with Photoshop.
- [Figma](https://www.figma.com/) — mockups, notes, and guidelines were put together in Figma. I sometimes use Figma like a scratchpad.
- [Maizzle](https://maizzle.com/) — I redesigned new email signatures and templates with Maizzle, "a framework that helps you quickly build HTML emails with
Tailwind CSS and advanced, email-specific post-processing."

## Outcomes

- Reformatted 47+ web/print/digital/uniform brand assets and updated all internal tools with the new brand logo, colors, and typeface.
- Redesigned over 60+ employee email signatures, newsletter templates, invoice email templates, and help desk ticket templates with the new brand design using [Maizzle](https://maizzle.com/).
- Issued an official press release and social media campaign which drove +1K unique users to the [redesigned website](/work/prosource-website) in the first week.

<Figure
  image={{
    href: "/src/img/projects/prosource-rebrand/prosource_rebrand_timessquare.png",
    alt: "A picture of the ProSource logo display in Times Square, New York City."
  }}
>
  ProSource celebrated 15 years in style with a banner proudly displayed in Times Square.
</Figure>
