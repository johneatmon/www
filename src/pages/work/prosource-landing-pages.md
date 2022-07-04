---
layout: ../../layouts/ProjectLayout.astro
title: ProSource (Landing Pages)
description: Ultra-focused pages designed to convert leads.
published: 2022-07-02
image:
  href: /src/img/projects/prosource-landing-pages/landing_pages_hero.png
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

Hosting desktop versions of QuickBooks is a core offering of ProSource. When ProSource became an [Intuit Authorized Hosting Service Provider](https://quickbooks.intuit.com/learn-support/en-us/help-article/product-setup/hosting-providers-authorized-intuit/L3RAbICtq_US_en_US), the company wanted a dedicated landing page to track and convert leads generated from the Intuit website.

The QuickBooks landing page was the first designed for a specific niche — another was created for the [Florida Radiological Society conference](https://www.flrad.org/2022-annual-meeting-frs-frbma/) ProSource attended in July 2022.

## Process

To write the copy for the QuickBooks landing page, I first surveyed current hosting customers and asked why they chose us. Their primary reason? They didn't like their previous hosting provider. Digging deeper, these customers didn't like the previous providers' technology stack, customer support, and security. All of these bullet points were emphasized in the marketing copy for the website:

<Figure
  image={{
    href: "/src/img/projects/prosource-landing-pages/landing_pages_features.png",
    alt: "A screenshot of the features overview for ProSource's hosting service. The top bullet points are: enterprise features, modern cloud delivery, secure user access, data integrity, stress-free experience, and exceptional support."
  }}
>
  The hosted QuickBooks landing page calls out the primary reasons customers chose ProSource.
</Figure>

For the healthcare page, we decided to focus on HIPAA compliance, which is the framework that dictates the majority of technology decisions for healthcare companies. We created an assessment gated behind an email capture to capture leads:

<Figure
  image={{
    href: "/src/img/projects/prosource-landing-pages/landing_pages_assessment.png",
    alt: "A screenshot of the gated HIPAA assessment module on the ProSource healthcare landing page."
  }}
>
  In order to take the HIPAA assessment, you have to enter an email address, which is sent to HubSpot.
</Figure>

### Design

For the hosted QuickBooks Desktop page, I actually skipped right to development. I had such a clear-headed and crystalized vision for how the site should look, I didn't see the need to mock it up. Rare moments like these should be embraced.

The healthcare page followed a more traditional design route. I created a few frames in Figma and tried swapping around sections to see which flowed better. Eventually, these will be A/B tested to determine which layout results in a higher conversion rate.

<Figure
  image={{
    href: "/src/img/projects/prosource-landing-pages/landing_pages_wireframe.png",
    alt: "A mockup of the healthcare landing page designed in Figma."
  }}
>
  Ultimately, I decided that the HIPAA assessment should be the focus for the healthcare landing page.
</Figure>

### Development

The development process was largely smooth-sailing. At this point, I was very familiar with Astro's syntax and learned many lessons from my work on the [main marketing website](/work/prosource-website).

I ran into trouble when designing the Svelte assessment. I had never worked with Svelte before. After a few hiccups, I started to enjoy it more and more. Astro's biggest sales pitch is the ability to bring your own framework — Preact, Svelte, Solid, etc. — and drop it into your website. Emphatically, I love this approach.

To capture leads on the healthcare page, I gated the HIPAA assesment behind an email form. The email address is collected and immediately sent to HubSpot using their NodeJS API. All you need to create a contact in HubSpot is an email address; when a new contact is created, the HubSpot API returns a contact ID. This is needed to update the contact later on.

I created a Netlify Function that sends the initial email capture to HubSpot and then sends the contact ID response back to the Svelte form. If the user abandons the assessment — well, then we'll still have an email address. If the user *does* complete the assessment, then I use a separate Netlify Function to prettify the responses and update the HubSpot contact using that ID.

<Figure
  image={{
    href: "/src/img/projects/prosource-landing-pages/landing_pages_hubspot.png",
    alt: "A screenshot of contact properties for a test user in HubSpot. Underneath the message property are the nicely formatted HIPAA assessment responses."
  }}
>
  The dummy email address chickenwing@getprosource.com is an inside joke and often used for testing.
</Figure>

## Tech Stack

The following technologies were used to create the landing pages:

- [Astro](https://astro.build/) — a new static site generator that promises "powerful developer experience." So far, it's lived up to its messaging and the community around it has made me so excited about web development.
- [Tailwind CSS](https://tailwindcss.com/) — the utility-first CSS framework. Though controversial, the tool's power to iterate and design quickly helped a lot with this project.
- [Netlify + Functions](https://www.netlify.com/) — like the [main marketing website](/work/prosource-website), the landing pages are hosted on Netlify. Netlify Functions in conjunction with Svelte are used to securely create/update HubSpot contacts using the [HubSpot API](https://github.com/HubSpot/hubspot-api-nodejs).
- [Svelte](https://svelte.dev/) — the HIPAA assessment was inspired by an open-source [trivia project](https://github.com/manan30/svelte-trivia) written in Svelte.
- [HubSpot](hubspot.com/) — the gold-standard for CRMs out there. I use the meetings embed as the main CTA for the landing pages. Additionally, the Svelte HIPAA assessment creates a contact in HubSpot and attaches the takers' results upon completion.

## Outcomes

- Wrote new marketing copy entirely from scratch.
- Designed and developed landing pages for the company’s healthcare and hosted QuickBooks Desktop campaigns, which have converted 56+ leads at a 10% conversion rate.
- Created a Svelte-powered HIPAA assessment on the healthcare landing page; HIPAA knowledge/best practices are tested and the takers' results are sent to HubSpot via their REST API and Netlify Functions.

&rarr; [Visit the hosted QuickBooks landing page](https://info.getprosource.com/hosted-quickbooks/)<br/>
&rarr; [Visit the healthcare landing page](https://development--getprosourceinfo.netlify.app/orlando-healthcare/)

## What's Next?

More can be done to improve the overall performance of the landing pages. Using Netlify's Branch Deploy feature, I plan to create alternative layouts and test which performs best to hone the design further.
