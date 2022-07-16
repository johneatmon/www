---
layout: ../../layouts/ProjectLayout.astro
setup: |
  import WebsiteAccordion from '@components/WebsiteAccordion.astro'
title: ProSource (Website Redesign)
description: A refreshed website design to coincide with a rebrand.
published: 2022-06-23
modified: 2022-07-14
image:
  href: '/src/img/projects/prosource-website/getprosource_website_cover.png'
  alt: Screenshots of the live ProSource website in light mode and dark mode color schemes.
tags: 
  - User Research
  - Information Architecture
  - Front-End Web Development
challenge: Website redesign that connects better with potential buyers and matches new brand identity — and do it in ~4 months.
period:
  from: June 2021
  to: Sept 2021
---

<div class="callout">
  Hi, there. Just to let you know, this project technically kicked off with the development of our brand attributes and a new brand identity. You can read about [that rebrand project here](/work/prosource-rebrand). Okay, onward!
</div>

## Empathize

I started by researching our potential buyers. I decided the best place to start would be analyzing the *current* buyers. Using a combination of research and data from a client survey, I gathered the information for further analysis. This would be used to determine how we could position our website to better serve buyers. Additionally, this process highlighted ways we could better serve our existing customers, too.

<Figure
  image={{
    href: "/src/img/projects/prosource-website/user_research.png",
    alt: "A slide showcasing user research. The primary question reads: Who care the current ProSource customers and how can we use this information to empathize with potential buyers? Underneath, there are 4 columns, each with a heading and paragraph. The column reads: Primarily healthcare or healthcare-adjacent, We found that over 50% of the customer base was in the healthcare industry or a healthcare-adjacent field. The second column reads: Key stakeholders were predominantly women, Many of the surveyed stakeholders were office/practice managers or CFOs, and were predominantly women. The third column reads: Based in Central FL despite nationwide message, Despite nationwide messaging/positioning, the overwhelming majority of customers were based in Orlando, FL. The fourth and final column reads: Became a client because they were unhappy, Surveyed customers became ProSource customers because they were unhappy or underserved from their previous provider."
  }}
>
  User research into our existing customers. Data was collected from survey results and basic investigation.
</Figure>

## Brainstorm

After researching our users, I helped develop personas in collaboration with the business development team. This process helped us understand the needs of our customers and how our redesigned website could serve their needs better. The rationale was: if we could improve the site for our current customers, then we would likely be improving the design for *future* customers.

<Figure
  image={{
    href: "/src/img/projects/prosource-website/user_personas.png",
    alt: "A slide showcasing user personas. There are two profiles with 4 columns under each with the following category titles: Description, Goals, Challenges, and Demographics. The first persona is for Mindy, the Office Manager. Description – Manages a medical practice on behalf of a doctor or doctors. Goals – 1) Keep the doctors happy. 2) Ensure employees are productive. 3) Keep costs low. Challenges – 1) Ensuring smooth office operations 2) HIPAA compliance 3) Limited authority to approve changes. Demographics – Age, 42; Income, $70–90K; Education, AA or BA/BS. The second persona is for Sally, the CFO. Description – Financial operations for a multi-location, physician-owned medical practice. Goals – 1) Minimize expense 2) Maximize value of consumed services 3) Care for CapEx projects. Challenges – 1) Increased spend on CapEx 2) Emerging virtual health technologies 3) High expense for low-perceived value. Demographics – Age, 35; Income, $100K+; Education, BS/BA or MBA."
  }}
>
  User personas were created by analyzing our survey results and using profile information from key stakeholders of current customers.
</Figure>

## Information Architecture

### Content Audit

I took stock of all existing content by running a content audit. I tagged everything with a simple RAG status: red was unsalvageable, amber required major edits, green meant it was either good to go or required minor edits. Very little was salvageable from previous website iterations.

### Sitemap

I created a sitemap and sorted salvageable content under the appropriate page. We outsourced copy for critical pages to an outside marketing firm to speed things up.

<Figure
  image={{
    href: "/src/img/projects/prosource-website/ia_sitemap.png",
    alt: "A slide showcasing the sitemap. There are four columns, each with a heading and bullet points underneath representing links or webpages. The first column heading is Primary navigation. Under it: Homepage; About Us (mega-menu) with sub-bullets: About Us (page), Our Team (link to section), Our Values, Our Partners, Careers, and News/Updates; Our Services; Industries with a sub-bullet: Healthcare, Finance, Engineering, Manufacturing; Resources (mega-menu) with sub-bullets: Resources (page), Customer Stories, Blog, Guides and eBooks, and Webinars (Ask a Pro); Contact Us; CTA: Let's Chat. The second column heading is Footer navigation. Under it: Services (links to page sections) with sub-bullets: Outsourced IT, IT Augmentation, Cyber Security, Cloud Services, Voice Services, and IT Projects/IT Consulting; Industries with sub-bullets: Healthcare, Engineering, Finance, and Manufacturing; Resources with sub-bullets: Blog, Customer Stories, Guides & eBooks, and Webinars. The third column heading is Footer navigation (cont.). Under it: Support with sub-bullets: Contact Us, Cloud Password Reset, TR Onboarding Form, 2FA Enrollment, Sitemap; Company with sub-bullets: About Us, Careers, News & Updates, Our Partners, Terms & Conditions with sub-bullets: MSA, Hosted Services, Managed IT Services, Voice Services; and Privacy Policy. The fourth, and final, column heading is Taxonomies. Under it: News & Updates with sub-bullets: Press Release, Employee Spotlight, Partner Spotlight, Service Update; Blog with sub-bullets: Cloud, Cyber Security, Data Management, (Managed) IT, and vCIO strategies; Customer Stories (Case Studies) with sub-bullets: Healthcare, Engineering, Finance, and Manufacturing; and Guides & eBooks with sub-bullets: Cloud, Cyber Security, and (Managed) IT."
  }}
>
  The sitemap helped organize content from the audit and would later help me in the development phase.
</Figure>

## Wireframes

Using Figma, I created wireframes to roughly place elements on each page. This helped me determine the amount of marketing copy needed to fill in the blanks. After I finished each page, I sent it to a small group of customers for feedback and testing. The feedback helped us reduce IT jargon and build a more approachable design.

These wireframes were halfway between low- and high-fidelity. They were not pixel-perfect, I left a little wiggle room for last-minute adjustments during development.

<Figure 
  image={{
    href: "/src/img/projects/prosource-website/prototypes.png",
    alt: "Wireframe mock-ups designed in Figma. The wireframes featured are an about page, values page, and a sample customer story (case study)."
  }}
>
  Some early Figma mock-ups the About Us, Our Values, and a sample Customer Story — in light and dark modes.
</Figure>

## Development

Development began in mid-summer 2021. By late August, things were firing on all cylinders. In early September, the new site launched to coincide with our rebrand debut. It was a massive amount of work, but I managed to pull it off with the help of my team.

### Tech Stack

The following technologies were used to create the website:

- [Astro](https://astro.build/) — a new static-site generator that promises "powerful developer experience."
- [Tailwind CSS](https://tailwindcss.com/) — the utility-first CSS framework.
- [Netlify + Functions & Forms](https://www.netlify.com/) — a [jamstack](https://jamstack.org/what-is-jamstack/)-focused platform.

<Figure
  image={{
    href: "/src/img/projects/prosource-website/lighthouse_scores.png",
    alt: "The Google Lighthouse scores for www.getprosource.com. The Performance score is 97/100, the Accessibility score is 100/100, the Best Practices score is 100/100, and the SEO score is 100/100."
  }}
>
  Early Google Lighthouse scores at website relaunch. Caveat, there may be some perf regressions since.
</Figure>

## Conclusion

If there was more time, I would liked to have created tests for customers to complete. When we asked for feedback, they merely reviewed the website on their own time and jotted down a few thoughts — there weren't a set of tasks to complete to highlight flow pain-points.

If you're curious, you can see some of the earlier iterations of the website below:

<WebsiteAccordion />

Overall, I am pleased with how the redesign turned out, especially given the tight deadline.

### Outcomes

- Redesigned over 60 pages of content total to align with brand attributes and user personas
- Addressed core challenges brought up in customer feedback
- Better organization for content marketing: blog, customer stories, videos, webinars, and more

&rarr; [Visit the live website](https://www.getprosource.com/)
