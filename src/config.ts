export type NavLinks = {
	[key: string]: NavLink;
};

export type NavLink = {
	name: string;
	url: string;
	icon: string;
};

export const SOCIAL_LINKS: NavLinks = {
	linkedin: {
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/jmaeatmon',
		icon: 'linkedin',
	},
	readcv: {
		name: 'read.cv',
		url: 'https://read.cv/jmae',
		icon: 'file-person-fill',
	},
	github: {
		name: 'GitHub',
		url: 'https://github.com/johnnytest4real',
		icon: 'github',
	},
};
