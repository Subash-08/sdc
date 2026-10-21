export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'Shree Dhurga Constructions',
  shortName: 'SDC',
  tagline: process.env.NEXT_PUBLIC_APP_TAGLINE || 'Civil & electrical engineers, consultants and contractors.',
  description: 'Civil and electrical engineering, construction, planning, industrial, public works and renovation services from Hosur.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'shreedhurgaprojects@gmail.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 98946 93697',
  phoneHref: 'tel:+919894693697',
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'No. 2/192, Rajaji Nagar, 15th Cross, Mookandapalli, Hosur – 635126',
  serviceArea: 'Hosur, Bengaluru, Chennai, Salem and Dharmapuri',
  hours: 'Monday–Saturday, 9:00 AM–6:00 PM',
  social: { twitter: '', linkedin: '', github: '', facebook: '', instagram: '' },
  seo: {
    defaultTitle: 'Shree Dhurga Constructions | Construction Company in Hosur',
    titleTemplate: '%s | Shree Dhurga Constructions',
    defaultDescription: 'Shree Dhurga Constructions provides civil, electrical, residential, commercial, industrial and public-works services across Hosur and surrounding regions.',
    defaultImage: '/og-image.jpg',
    twitterHandle: '',
  },
  organization: {
    name: 'Shree Dhurga Constructions',
    legalName: 'Shree Dhurga Constructions',
    logo: '/brand/sdc-logo-transparent-v2.png',
    description: 'Civil and electrical engineering consultancy and contracting firm serving public and private projects from Hosur.',
    type: 'LocalBusiness' as const,
    address: { streetAddress: 'No. 2/192, Rajaji Nagar, 15th Cross, Mookandapalli', addressLocality: 'Hosur', addressRegion: 'Tamil Nadu', postalCode: '635126', addressCountry: 'IN' },
  },
  blog: { postsPerPage: Number(process.env.NEXT_PUBLIC_BLOG_PER_PAGE) || 12, excerptLength: Number(process.env.NEXT_PUBLIC_BLOG_EXCERPT_LENGTH) || 200, enableComments: false, enableNewsletter: false },
  features: { blog: true, projects: true, caseStudies: true, services: true, testimonials: false, newsletter: false, analytics: false, contactForm: true },
};

export type SiteConfig = typeof siteConfig;
