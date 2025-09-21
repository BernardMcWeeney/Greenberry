// src/data/config.ts

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  themeColor?: string;
  language?: string;
  country?: string;
};

export interface CompanyInfo {
  name: string;
  addressStreet?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  address?: string;
  email: string;
  phone: string;
  foundedYear: number;
  description?: string;
  legalName?: string;
  taxId?: string;
  priceRange?: string;
}

export type SocialLinks = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  x?: string;
  youtube?: string;
  github?: string;
  tiktok?: string;
};

export const SITE: SiteConfig = {
  name: 'Greenberry',
  title: 'Greenberry - Hassle-Free Websites & IT Solutions in Ireland',
  description: 'Greenberry provides hassle-free website solutions, fully managed IT services, SEO packages, and email solutions for Irish businesses.',
  url: 'https://greenberry.ie',
  ogImage: 'https://greenberry.ie/social.png',
  themeColor: '#38a169',
  language: 'en-IE',
  country: 'IE',
};

export const COMPANY: CompanyInfo = {
  name: 'Greenberry',
  addressStreet: 'Duleek',
  addressLocality: 'Drogheda',
  addressRegion: 'Co. Meath',
  postalCode: 'A92 V0F3',
  address: 'Meath, Ireland',
  email: 'office@greenberry.ie',
  phone: '+353 83 019 9860',
  foundedYear: 2018,
  description: 'Greenberry is a leading provider of hassle-free website solutions, fully managed IT services, SEO packages, and email solutions for Irish businesses.',
  legalName: 'Greenberry',
  taxId: '',
  priceRange: '€€',
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: 'https://facebook.com/greenberryie',
  instagram: 'https://instagram.com/greenberryie',
  linkedin: 'https://www.linkedin.com/company/greenberryie',
  twitter: 'https://x.com/greenberry',
  x: 'https://x.com/greenberry',
};


// Updated navigation item interface to support nested items
export interface NavItem {
  name: string;
  href?: string; // Optional for parent items with children
  children?: NavItem[]; // Nested navigation items
  icon?: string; // Optional icon class
  description?: string; // Optional description for mega menus
}

// Navigation structure with nested items
export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Suites',
      children: [
        { 
          name: 'Parish Websites', 
          href: '/suites/parish-websites',
          description: 'Parish websites with donations & livestreams'
        },
        { 
          name: 'Club Websites', 
          href: '/suites/club-websites',
          description: 'Club websites with fixtures & memberships'
        },
        { 
          name: 'School Websites', 
          href: '/suites/school-websites',
          description: 'School websites with calendars & policies'
        },
        { 
          name: 'Business Websites', 
          href: '/suites/business-websites',
          description: 'Business websites that drive growth'
        }
      ]
    },
    { name: 'Plans', href: '/plans' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Care', href: '/care' },
    { name: 'Contact', href: '/contact' }
  ] as NavItem[],

  footer: {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Plans', href: '/plans' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ] as NavItem[],

    services: [
      { name: 'Parish Websites', href: '/suites/parish-websites' },
      { name: 'Club Websites', href: '/suites/club-websites' },
      { name: 'School Websites', href: '/suites/school-websites' },
      { name: 'Business Websites', href: '/suites/business-websites' },
    ] as NavItem[],

    resources: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ] as NavItem[],
  }
};

// Legacy solutions nav - kept for backwards compatibility
export const SOLUTIONS_NAV = [
  { name: 'Website-as-a-Service', href: '/solutions/waas' },
  { name: 'Security Solution', href: '/solutions/security' },
  { name: 'IT Support', href: '/solutions/it-support-solution' },
  { name: 'Digital Essentials', href: '/solutions/digital-essentials' }
] as NavItem[];

// CTA Section
export const CTA = {
  title: "Ready to grow your online presence?",
  description: "Get in touch today for a free consultation and let's create a digital solution that works for your business.",
  buttonText: "Contact Us",
  buttonLink: "/contact"
};