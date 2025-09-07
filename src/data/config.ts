// Site configuration

export const SITE = {
  name: 'Greenberry',
  title: 'Greenberry - Hassle-Free Websites & IT Solutions in Ireland',
  description: 'Greenberry provides hassle-free website solutions, fully managed IT services, SEO packages, and email solutions for Irish businesses.',
  url: 'https://greenberry.ie',
  ogImage: 'https://greenberry.ie/social.png',
  themeColor: '#38a169', // Green color
};

// Company information
export interface CompanyInfo {
  name: string;
  address: string;
  email: string;
  phone: string;
  foundedYear: number;
  description?: string; // Make description optional to avoid type errors
}

// Adding description property to match what's used in SEO component
export const COMPANY: CompanyInfo = {
  name: 'Greenberry',
  address: 'Meath, Ireland',
  email: 'office@greenberry.ie',
  phone: '',
  foundedYear: 2018,
  description: 'Greenberry is a leading provider of hassle-free website solutions, fully managed IT services, SEO packages, and email solutions for Irish businesses.' // Added description
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/greenberryie',
  x: 'https://x.com/greenberry',
  instagram: 'https://instagram.com/greenberryie',
  linkedin: 'https://linkedin.com/company/greenberryie',
  twitter: 'https://twitter.com/greenberry'
} as const;

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
      { name: 'Parish Websites', href: '/parish-websites' },
      { name: 'Club Websites', href: '/club-websites' },
      { name: 'School Websites', href: '/school-websites' },
      { name: 'Business Websites', href: '/business-websites' },
      { name: 'Care & Support', href: '/care' },
    ] as NavItem[],

    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Help Center', href: '/help' },
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