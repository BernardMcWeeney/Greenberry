// src/data/suites.ts

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  website?: string;
  verified?: boolean;
}

export interface PricingPlan {
  name: 'Launch' | 'Grow' | 'Pro';
  monthlyPrice: number;
  yearlyPrice: number;
  responseTime: string;
  features: string[];
  additionalFeatures?: string[];
}

// New: FeatureHighlight used by suite.featureHighlights
export interface FeatureHighlight {
  title: string;
  description: string;
  icon: string;       // Font Awesome class (e.g., 'fa-solid fa-plug')
  pills?: string[];   // optional short chips
  link?: string;      // optional "Learn more" link
}

// Optional extras for case studies
export interface ShowcaseMetric {
  label: string;
  value: string; // e.g. '+42%', '×3'
}

export interface CaseStudy {
  id: string;
  title: string;
  url: string;
  image?: string;
  excerpt?: string;
  tags?: string[];
  metrics?: ShowcaseMetric[];
  testimonialId?: string;
}

export type SuiteColor = 'greenberry' | 'blue' | 'purple' | 'amber';

export interface Suite {
  id: string;
  name: string;
  title: string;
  link: string;
  targetSector: string;
  description: string;
  heroHeading: string;
  heroSubheading: string;
  icon: string;
  color: SuiteColor;
  setupFee: number;
  monthlyPlans: {
    launch: number;
    grow: number;
    pro: number;
  };
  outcomes: string[];
  // Suite-specific (concise bullets you may show elsewhere)
  coreFeatures: string[];        // (max ~4 suggested)
  specialisedFeatures: string[]; // (max ~5 suggested)
  // The section this request targets:
  featureHighlights: FeatureHighlight[];
  testimonials: number; // IDs of testimonials
  caseStudies?: CaseStudy[]; // IDs + metadata of case studies
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Launch',
    monthlyPrice: 30,
    yearlyPrice: 360,
    responseTime: 'Same day',
    features: [
      'Managed hosting (NVMe) with SSL',
      'Server-level caching: Varnish + Redis',
      'Daily server backups',
      'Daily website backups (off-site)',
      '5-day recovery/retention window',
      'Baseline security hardening & checks',
      'Core performance optimisation',
      'Basic on-page SEO + GA4 setup',
      'Uptime monitoring',
      'Bi-monthly update window (every 2 months)'
    ],
    additionalFeatures: ['Core CMS/plugin maintenance']
  },
  {
    name: 'Grow',
    monthlyPrice: 40,
    yearlyPrice: 480,
    responseTime: 'Same day',
    features: [
      'Everything in Launch, plus:',
      'Upgraded/faster servers',
      'Image optimisation pipeline',
      'Monthly maintenance & health checks',
      'Proactive performance tuning',
      'Search Console & GA4 sanity checks',
      'Structured data / schema basics',
      'Speed optimisation with monthly report',
      '7-day recovery/retention window'
    ],
    additionalFeatures: ['Light observability (key alerts)']
  },
  {
    name: 'Pro',
    monthlyPrice: 50,
    yearlyPrice: 600,
    responseTime: 'Same day (priority queue)',
    features: [
      'Everything in Grow, plus:',
      'Weekly maintenance & security checks',
      'Advanced cache tuning (Varnish & Redis)',
      'Global CDN delivery',
      'DDoS protection & WAF (Cloudflare)',
      'Staging environment & safe updates',
      'Malware scanning & remediation',
      '14-day recovery/retention window'
    ],
    additionalFeatures: ['Advanced logging & alerting', 'Incident response playbook']
  }
];

export const suites: Suite[] = [
  {
    id: 'parish-websites',
    name: 'Parish Websites',
    title: 'Greenberry for Parishes',
    link: 'suites/parish-websites',
    targetSector: 'Parishes',
    description:
      'Complete digital presence for parishes with Mass times, donations, and livestreams managed for you.',
    heroHeading: 'Parish websites by Greenberry',
    heroSubheading: 'More donations, faster updates, easier newsletters.',
    icon: 'fa-solid fa-church',
    color: 'purple',
    setupFee: 1500,
    monthlyPlans: { launch: 30, grow: 40, pro: 50 },
    outcomes: [
      'Increase online donations by 40%',
      'Update Mass times in seconds',
      'Grow newsletter subscribers',
      'Streamline sacrament bookings'
    ],
    coreFeatures: [
      'Daily Mass Readings, Feast & Saint of the Day widgets',
      'Mobile-friendly design for parishioners of all ages',
      'Livestream integration',
      'Online donation integrations'
    ],
    specialisedFeatures: [
      'Livestream player',
      'Easy site editing',
      'Simple parish newsletter upload (PDF → web)',
      'Mass Times module'
    ],
    featureHighlights: [
      {
        title: 'Integrations',
        description: 'Embed livestreams and connect secure donations in minutes.',
        icon: 'fa-solid fa-plug',
        pills: ['Livestream', 'Stripe/PayPal', 'Easy embeds']
      },
      {
        title: 'Easy Editing',
        description: 'Post notices, Mass times, newsletters — no tech skills needed.',
        icon: 'fa-regular fa-pen-to-square',
        pills: ['Inline edit', 'Blocks', 'Image helper']
      },
      {
        title: 'Automatic Daily Content',
        description: 'Saint of the Day, Feast Days, daily readings — auto-updated.',
        icon: 'fa-solid fa-calendar-day',
        pills: ['Readings', 'Feast days', 'Saint of the day']
      },
      {
        title: 'Accessibility & Mobile',
        description: 'WCAG-minded, large text options, fast on older phones.',
        icon: 'fa-solid fa-universal-access',
        pills: ['WCAG-minded', 'Mobile-first', 'Fast load']
      }
    ],
    caseStudies: [
      {
        id: 'parish-demo-1',
        title: 'St. Brigid’s Parish (Demo)',
        url: '#',
        image: '/images/showcase/parish-1.jpg',
        excerpt:
          'Mass times, online donations, and weekly newsletter uploads maintained by parish staff.',
        tags: ['Donations', 'Mass times', 'Livestream'],
        metrics: [{ label: 'Online donations', value: '+38%' }]
      }
    ],
    testimonials: 4,
    metaTitle: 'Church & Parish Websites in Ireland | Churchify by Greenberry',
    metaDescription:
      'Parish websites with Mass times, donations, and livestreams. Design, hosting, security, and updates from €30/mo + setup.',
    primaryKeyword: 'parish website ireland'
  },
  {
    id: 'club-websites',
    name: 'Club Websites',
    title: 'Greenberry for Clubs',
    link: 'suites/club-websites',
    targetSector: 'Sports Clubs',
    description:
      'Dynamic club websites with fixtures, results, and membership management built in.',
    heroHeading: 'Club websites by Greenberry',
    heroSubheading: 'Boost membership, automate updates, engage supporters.',
    icon: 'fa-solid fa-trophy',
    color: 'blue',
    setupFee: 1200,
    monthlyPlans: { launch: 30, grow: 40, pro: 50 },
    outcomes: [
      'Increase membership renewals by 30%',
      'Automate fixture updates',
      'Boost sponsor visibility',
      'Streamline team communications'
    ],
    coreFeatures: [
      'Fixtures & results with auto-updates',
      'Team & player profiles',
      'Membership & registrations',
      'Sponsor placements & rotators'
    ],
    specialisedFeatures: [
      'Live score ticker',
      'Training schedules & pitch booking',
      'Online shop & payments',
      'Media galleries (photo/video)',
      'Coach/manager update portal'
    ],
    featureHighlights: [
      {
        title: 'Fixtures & Results',
        description:
          'Pull in fixtures/results automatically and keep league tables current.',
        icon: 'fa-solid fa-table-list',
        pills: ['Auto-updates', 'Tables', 'Results']
      },
      {
        title: 'Membership & Payments',
        description:
          'Take registrations and renewals online with secure checkout.',
        icon: 'fa-solid fa-id-card',
        pills: ['Stripe', 'SEPA', 'Discount codes']
      },
      {
        title: 'Sponsor Showcases',
        description:
          'Rotating sponsor spots and pages to deliver value to partners.',
        icon: 'fa-solid fa-handshake',
        pills: ['Rotators', 'Logos', 'UTM tracking']
      },
      {
        title: 'Media Hub',
        description:
          'Gallery pages for match photos and highlight videos.',
        icon: 'fa-solid fa-camera',
        pills: ['Albums', 'Video embeds', 'Social share']
      }
    ],
    caseStudies: [
      {
        id: 'club-demo-1',
        title: 'Riverside GAA (Demo)',
        url: '#',
        image: '/images/showcase/club-1.jpg',
        excerpt:
          'Membership renewals moved online; sponsors featured across fixtures and results.',
        tags: ['Membership', 'Sponsors', 'Fixtures'],
        metrics: [{ label: 'Renewals YoY', value: '+31%' }]
      }
    ],
    testimonials: 2,
    metaTitle: 'GAA & Club Websites in Ireland | Clubify by Greenberry',
    metaDescription:
      'Club websites with fixtures, results, and memberships. Professional design and management from €30/mo + setup.',
    primaryKeyword: 'gaa club website ireland'
  },
  {
    id: 'school-websites',
    name: 'School Websites',
    title: 'Greenberry for Schools',
    link: 'suites/school-websites',
    targetSector: 'Schools',
    description:
      'School websites that inform parents and showcase your educational excellence.',
    heroHeading: 'School websites by Greenberry',
    heroSubheading: 'Better communication, easier admissions, happier parents.',
    icon: 'fa-solid fa-graduation-cap',
    color: 'amber',
    setupFee: 1000,
    monthlyPlans: { launch: 30, grow: 40, pro: 50 },
    outcomes: [
      'Reduce admin calls by 50%',
      'Streamline admissions process',
      'Improve parent engagement',
      'Showcase school achievements'
    ],
    coreFeatures: [
      'School calendar & events hub',
      'Admissions information & key dates',
      'Policies & documents library',
      'News, notices & newsletter updates'
    ],
    specialisedFeatures: [
      'Parent notices board',
      'Absence & permission e-forms',
      'Multi-campus support',
      'Staff directory & subject pages',
      'Google/Microsoft calendar integration'
    ],
    featureHighlights: [
      {
        title: 'Admissions & Key Dates',
        description:
          'Clear enrolment pages with timelines, forms, and reminders.',
        icon: 'fa-solid fa-clipboard-check',
        pills: ['Enrolment', 'Key dates', 'Email reminders']
      },
      {
        title: 'Calendar & Events',
        description:
          'Single source of truth for term dates, PTA events, and exams.',
        icon: 'fa-solid fa-calendar-days',
        pills: ['Term dates', 'Sync', 'Multi-campus']
      },
      {
        title: 'Policies Library',
        description:
          'Searchable policy/document hub with version history.',
        icon: 'fa-solid fa-file-shield',
        pills: ['PDF viewer', 'Tags', 'Versioning']
      },
      {
        title: 'News & Notices',
        description:
          'Publish updates from desktop or phone in seconds.',
        icon: 'fa-solid fa-bullhorn',
        pills: ['Quick post', 'Images', 'Staff roles']
      }
    ],
    caseStudies: [
      {
        id: 'school-demo-1',
        title: 'Oakfield Secondary (Demo)',
        url: '#',
        image: '/images/showcase/school-1.jpg',
        excerpt:
          'Admissions simplified; parents use the site as the first port of call.',
        tags: ['Admissions', 'Parents', 'Calendar'],
        metrics: [{ label: 'Admin calls', value: '−47%' }]
      }
    ],
    testimonials: 9,
    metaTitle: 'School Websites in Ireland | Teachify by Greenberry',
    metaDescription:
      'School websites with calendars, policies, and admissions. Professional design and updates from €30/mo + setup.',
    primaryKeyword: 'school website ireland'
  },
  {
    id: 'business-websites',
    name: 'Business Websites',
    title: 'Greenberry for Business',
    link: 'suites/business-websites',
    targetSector: 'Business',
    description:
      'Professional business websites that convert visitors into customers.',
    heroHeading: 'Business websites by Greenberry',
    heroSubheading: 'More leads, better conversions, professional presence.',
    icon: 'fa-solid fa-briefcase',
    color: 'greenberry',
    setupFee: 2000,
    monthlyPlans: { launch: 79, grow: 130, pro: 230 },
    outcomes: [
      'Increase lead generation by 60%',
      'Improve conversion rates',
      'Enhance brand credibility',
      'Automate customer inquiries'
    ],
    coreFeatures: [
      'Lead-gen landing pages & forms',
      'Bookings/appointments integration',
      'Service & product pages with CTAs',
      'Testimonials & case study modules'
    ],
    specialisedFeatures: [
      'CRM integration (HubSpot/Zoho/365)',
      'Quote/estimate workflow forms',
      'E-commerce ready (Stripe/PayPal)',
      'Multi-location schema & maps',
      'Blog & resource hub for SEO'
    ],
    featureHighlights: [
      {
        title: 'Lead Funnels',
        description:
          'High-converting landing pages with A/B-testable sections.',
        icon: 'fa-solid fa-filter',
        pills: ['Forms', 'A/B test', 'Thank-you flows']
      },
      {
        title: 'Bookings & Calendars',
        description:
          'Let customers book calls or services without email ping-pong.',
        icon: 'fa-solid fa-calendar-check',
        pills: ['Calendly', 'MS Bookings', 'Reminders']
      },
      {
        title: 'Local SEO',
        description:
          'Schema, Google Business Profile, and review widgets built-in.',
        icon: 'fa-solid fa-location-dot',
        pills: ['Schema', 'GBP', 'Reviews']
      },
      {
        title: 'CRM & Automation',
        description:
          'Pipe leads into your CRM and trigger follow-ups automatically.',
        icon: 'fa-solid fa-diagram-project',
        pills: ['HubSpot', 'Zoho', 'Power Automate']
      }
    ],
    caseStudies: [
      {
        id: 'biz-demo-1',
        title: 'Boyne Valley Tours (Demo)',
        url: '#',
        image: '/images/showcase/business-1.jpg',
        excerpt:
          'Bookings integrated with calendar; leads sync to CRM with auto-emails.',
        tags: ['Leads', 'Bookings', 'CRM'],
        metrics: [{ label: 'Lead volume', value: '+54%' }]
      }
    ],
    testimonials: 3,
    metaTitle: 'Business Websites for Irish SMEs | Greenberry',
    metaDescription:
      'Professional business websites with lead generation and bookings. Design, hosting, and growth from €79/mo + setup.',
    primaryKeyword: 'business website ireland'
  }
];
