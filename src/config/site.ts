export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'Shree Dhurga Constructions',
  shortName: 'SDC',
  tagline: process.env.NEXT_PUBLIC_APP_TAGLINE || 'Built with purpose. Delivered with precision.',
  description: 'Construction, commercial, industrial, interior and renovation services in Hosur, Tamil Nadu.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'shreedhurgaprojects@gmail.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 98946 93697',
  phoneHref: 'tel:+919894693697',
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'No. 2/192, 5th Cross, Nethaji Nagar, Hosur – 635126',
  serviceArea: 'Hosur, Tamil Nadu',
  hours: 'Monday–Saturday, 9:00 AM–6:00 PM',
  social: { twitter: '', linkedin: '', github: '', facebook: '', instagram: '' },
  seo: {
    defaultTitle: 'Shree Dhurga Constructions | Construction Company in Hosur',
    titleTemplate: '%s | Shree Dhurga Constructions',
    defaultDescription: 'Shree Dhurga Constructions provides residential, commercial, industrial, renovation and interior services in Hosur, Tamil Nadu.',
    defaultImage: '/og-image.jpg',
    twitterHandle: '',
  },
  organization: {
    name: 'Shree Dhurga Constructions',
    legalName: 'Shree Dhurga Constructions',
    logo: '/logo.png',
    description: 'Construction and renovation company serving residential, commercial and industrial projects in Hosur.',
    type: 'LocalBusiness' as const,
    address: { streetAddress: 'No. 2/192, 5th Cross, Nethaji Nagar', addressLocality: 'Hosur', addressRegion: 'Tamil Nadu', postalCode: '635126', addressCountry: 'IN' },
  },
  blog: { postsPerPage: Number(process.env.NEXT_PUBLIC_BLOG_PER_PAGE) || 12, excerptLength: Number(process.env.NEXT_PUBLIC_BLOG_EXCERPT_LENGTH) || 200, enableComments: false, enableNewsletter: false },
  features: { blog: true, projects: true, caseStudies: true, services: true, testimonials: false, newsletter: false, analytics: false, contactForm: true },
};

export type SiteConfig = typeof siteConfig;
