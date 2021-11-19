export type SocialLinks = {
  [key: string]: SocialLink;
};

export type SocialLink = {
  url: string;
  name: string;
};

export const SOCIAL_LINKS: SocialLinks = {
  discogs: {
    url: 'https://www.discogs.com/user/jmaeatmon',
    name: 'Discogs',
  },
  dribbble: {
    url: 'https://dribbble.com/jmaeatmontho',
    name: 'Dribbble',
  },
  github: {
    url: 'https://github.com/johnnytest4real',
    name: 'GitHub',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/jmaeatmon/',
    name: 'LinkedIn',
  },
  twitter: {
    url: 'https://twitter.com/jmaeatmontho',
    name: 'Twitter',
  },
  soundcloud: {
    url: 'https://soundcloud.com/meatcrayon',
    name: 'SoundCloud',
  },
};

/**
 * In the event that no props are passed into the <MainHead> component,
 * these values will be used for page information / open graph metadata.
 */
export const SITE_DETAILS = {
  title: 'John Eatmon',
  description: 'John Eatmon (@jmaeatmontho) & Content Strategist for ProSource, developer of websites, lover of typography.',
  creator: '@jmaeatmon',
};

export const PLAUSIBLE_TRACKING_DOMAIN = 'example.com'; // Plausible analytics
