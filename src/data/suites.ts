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
      'Increase online donations by 100%',
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
        pills: ['Livestream', 'Stripe', 'Easy embeds']
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
        title: 'Duleek Bellewstown Parish',
        url: 'https://duleekbellewstownparish.com/',
        image: '/projects/duleek-parish/duleek-parish-1.png',
        excerpt:
          'Mass times, online donations, and weekly newsletter uploads maintained by parish staff.',
        tags: ['Donations', 'Mass times', 'Livestream'],
        metrics: [{ label: 'Online donations', value: '+100%' },{ label: 'Increased Viewers', value: '+2000' }]
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
      'Reduce support and message queries',
      'Highlight fixtures and results clearly',
      'Boost sponsor visibility',
      'Keep community engaged with news and updates'
    ],
    coreFeatures: [
      'Fixtures & results (manual updates)',
      'Club news & posts',
      'Sponsor placements & rotators',
      'Media galleries (photo/video)'
    ],
    specialisedFeatures: [
      'Training schedules',
      'Pitch booking',
      'Stripe/online shop integrations',
      'Coach/manager update portal'
    ],
    featureHighlights: [
      {
        title: 'Fixtures & Results',
        description:
          'Display fixtures and results clearly, with league tables and match highlights updated by the club.',
        icon: 'fa-solid fa-table-list',
        pills: ['Manual updates', 'Tables', 'Results']
      },
      {
        title: 'Club News & Updates',
        description:
          'Reduce support queries by keeping the community informed with the latest posts, notices, and announcements online.',
        icon: 'fa-solid fa-bullhorn',
        pills: ['Posts', 'Notices', 'Community']
      },
      {
        title: 'Sponsor Showcases',
        description:
          'Rotating sponsor spots and dedicated pages to deliver value to partners.',
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
        title: 'ISSC Vancouver GAA',
        url: 'https://isscvancouver.com/',
        image: '/images/showcase/club-1.jpg',
        excerpt:
          'Reduced member queries by publishing fixtures, results, and news online while giving sponsors prominent placement.',
        tags: ['Fixtures', 'News', 'Sponsors'],
        metrics: [{ label: 'Support Queries', value: '-40%' }]
      }
    ],
    testimonials: 2,
    metaTitle: 'GAA & Club Websites in Ireland | Clubify by Greenberry',
    metaDescription:
      'Club websites with fixtures, results, news, and sponsor showcases. Professional design and management from €30/mo + setup.',
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
        title: 'Mount Hanover NS',
        url: 'https://mounthanoverns.ie/',
        image: '/images/showcase/school-1.jpg',
        excerpt:
          'Admissions simplified; parents use the site as the first port of call.',
        tags: ['Admissions', 'Parents', 'Calendar'],
        metrics: [{ label: 'Admin calls', value: '−50%' }]
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
      'Increase website visibility and traffic',
      'Reduce admin overhead through online bookings',
      'Enhance customer experience with clear information',
      'Ensure 100% uptime and reliability'
    ],
    coreFeatures: [
      'SEO-optimised service & info pages',
      'Bookings & appointments integration',
      'Email/contact forms',
      'Testimonials & case study modules'
    ],
    specialisedFeatures: [
      'CRM integration (HubSpot/Zoho/365)',
      'Quote/estimate workflow forms',
      'E-commerce ready (Stripe/PayPal)',
      'Multi-location schema & maps',
      'Resource hub or blog for SEO'
    ],
    featureHighlights: [
      {
        title: 'Bookings & Calendars',
        description:
          'Let customers book tee times, services, or appointments directly online.',
        icon: 'fa-solid fa-calendar-check',
        pills: ['Calendly', 'MS Bookings', 'Reminders']
      },
      {
        title: 'SEO & Visibility',
        description:
          'Boost search rankings with schema, Google Business integration, and optimised content.',
        icon: 'fa-solid fa-location-dot',
        pills: ['Schema', 'GBP', 'Reviews']
      },
      {
        title: 'Email & Contact Forms',
        description:
          'Integrated forms that route enquiries directly to your inbox or CRM.',
        icon: 'fa-solid fa-envelope',
        pills: ['Forms', 'Notifications', 'Automation']
      },
      {
        title: 'Uptime & Reliability',
        description:
          'Enterprise-grade hosting with 100% uptime and fast page loads.',
        icon: 'fa-solid fa-server',
        pills: ['Monitoring', 'Backups', 'SSL']
      }
    ],
    caseStudies: [
      {
        id: 'biz-demo-1',
        title: 'Bellewstown Golf Course',
        url: 'https://bellewstowngolfclub.ie/',
        image: '/images/showcase/business-1.jpg',
        excerpt:
          'Online booking integrated with calendars, reducing admin workload. Site traffic increased significantly with 100% uptime and a seamless visitor experience.',
        tags: ['Bookings', 'SEO', 'Uptime'],
        metrics: [
          { label: 'Admin overhead', value: '-40%' },
          { label: 'Website visitors', value: '+65%' },
          { label: 'Uptime', value: '100%' }
        ]
      }
    ],
    testimonials: 3,
    metaTitle: 'Business & Club Websites in Ireland | Greenberry',
    metaDescription:
      'Professional websites with booking systems, SEO, and guaranteed uptime. Managed design and hosting for clubs and businesses in Ireland.',
    primaryKeyword: 'business website ireland'
  }
];
