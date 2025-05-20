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
  twitter: 'https://twitter.com/greenberry',
  instagram: 'https://instagram.com/greenberryie',
  linkedin: 'https://linkedin.com/company/greenberryie',
};

// Navigation item interface
export interface NavItem {
  name: string;
  href: string;
}

// Navigation structure
export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ] as NavItem[],
  footer: {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ] as NavItem[],
    services: [
      { name: 'Website Solutions', href: '/services/websites' },
      { name: 'Upgrades & Maintenance', href: '/services/maintenance' },
      { name: 'SEO Packages', href: '/services/seo' },
      { name: 'Email Solutions', href: '/services/email' },
    ] as NavItem[],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ] as NavItem[],
  }
};

// Add a solutions section for future use if needed
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