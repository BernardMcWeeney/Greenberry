// data/solution.ts
export interface Solution {
  id: string;
  type: "solution";
  title: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  textColor: string;
  includes: string[];   // service IDs
  features: string[];
  link: string;
  ctaText: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export const solutions: Solution[] = [
  {
    id: "website-solution",
    type: "solution",
    title: "Website Solution",
    description: "Bespoke web design and managed hosting with all the essentials for a professional online presence.",
    icon: "fa-solid fa-globe",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    includes: [
      "website-design",
      "cms-admin",
      "managed-hosting",
      "domain-management",
      "business-email",
      "cdn-waf",
      "backups",
      "seo-foundations",
      "content-updates"
    ],
    features: [
      "Bespoke Web Design & Build",
      "CMS Admin Dashboard + Training",
      "Managed Hosting (PHP 8, NVMe, LiteSpeed)",
      "Domain & DNS Management (.ie/.com)",
      "Business + Transactional Email Routing",
      "Global CDN & Web Application Firewall (Cloudflare Free)",
      "Free SSL/TLS, HTTP/3, DDoS mitigation",
      "Daily Off-Site Backups & Restoration",
      "SEO Foundations & Analytics",
      "30 min monthly content updates"
    ],
    link: "/solutions/website-solution",
    ctaText: "Get Website Solution",
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer: "Typically 4-6 weeks from kickoff to launch, depending on complexity and content readiness."
      },
      {
        question: "Can I update the website myself?",
        answer: "Yes! We provide a user-friendly CMS and 2-hour training session to empower you to make content updates."
      },
      {
        question: "What's included in the monthly maintenance?",
        answer: "Core software updates, security patches, daily backups, uptime monitoring, and 30 minutes of content updates."
      }
    ]
  },
  {
    id: "security-solution",
    type: "solution",
    title: "Security Solution",
    description: "Comprehensive security audits, compliance checks, and ongoing protection for your digital assets.",
    icon: "fa-solid fa-shield-halved",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    includes: [
      "security-audit",
      "patch-management",
      "waf-ddos",
      "email-security",
      "ssl-management",
      "dns-privacy",
      "vulnerability-scanning",
      "network-security",
      "remediation-reporting"
    ],
    features: [
      "Security & Compliance Audit (GDPR, OWASP)",
      "Monthly Core / Plugin Patching",
      "Web App Firewall, DDoS Shield & Rate-Limiting",
      "SPF, DKIM, DMARC email hardening",
      "SSL/TLS Certificate Management",
      "DNSSEC & WHOIS Privacy",
      "Vulnerability Scanning & Alerting",
      "Network Security (UniFi Gateway policies)",
      "Quarterly remediation report"
    ],
    link: "/solutions/security-solution",
    ctaText: "Secure My Business",
    faqs: [
      {
        question: "Is my website at risk of being hacked?",
        answer: "Websites are constant targets. Our security solution provides multiple layers of protection to mitigate common threats."
      },
      {
        question: "What is GDPR compliance and do I need it?",
        answer: "GDPR governs how you collect and handle user data. If you serve EU customers, compliance is legally required."
      },
      {
        question: "How often do you check for vulnerabilities?",
        answer: "We perform automated scans weekly and manual reviews quarterly, with immediate alerts for critical issues."
      }
    ]
  },
  {
    id: "support-solution",
    type: "solution",
    title: "Support Solution",
    description: "Reliable IT support for your team, devices, and cloud applications with expert assistance on demand.",
    icon: "fa-solid fa-headset",
    color: "green",
    borderColor: "border-t-green-500",
    textColor: "text-green-500",
    includes: [
      "it-support-desk",
      "device-setup",
      "printer-support",
      "microsoft-365",
      "google-workspace",
      "unifi-network",
      "cloud-backup",
      "knowledge-base",
      "onsite-visits"
    ],
    features: [
      "Lite IT Support Desk (Email, phone, remote)",
      "Device & OS Setup (Windows/macOS/iOS/Android)",
      "Printer & Peripheral Support",
      "Microsoft 365 & Google Workspace Admin",
      "UniFi Network Setup & Monitoring",
      "Cloud Backup & Recovery",
      "Knowledge-base & How-to videos",
      "Discounted on-site visits"
    ],
    link: "/solutions/support-solution",
    ctaText: "Get IT Support",
    faqs: [
      {
        question: "How quickly will you respond to support tickets?",
        answer: "Standard response time is within 4 business hours, with priority response available for Digital Solution clients."
      },
      {
        question: "Do you provide support outside business hours?",
        answer: "Standard support is 9-5 weekdays. Extended support options are available for Digital Solution customers."
      },
      {
        question: "Can you help with setting up new computers?",
        answer: "Yes! We'll configure new devices, transfer data, install software, and ensure security best practices."
      }
    ]
  },
  {
    id: "digital-solution",
    type: "solution",
    title: "Digital Solution",
    description: "Your complete outsourced IT department with strategic consulting, vendor management, and priority support.",
    icon: "fa-solid fa-rocket",
    color: "purple",
    borderColor: "border-t-purple-500",
    textColor: "text-purple-500",
    includes: [
      "website-design",
      "cms-admin",
      "managed-hosting",
      "domain-management",
      "business-email",
      "email-security",
      "cdn-waf",
      "backups",
      "security-audit",
      "patch-management",
      "it-support-desk",
      "device-setup",
      "printer-support",
      "microsoft-365",
      "google-workspace",
      "unifi-network",
      "digital-consultancy",
      "vendor-management",
      "strategy-workshops",
      "priority-sla"
    ],
    features: [
      "Complete Website, Security & Support Solutions",
      "Digital Consultancy & Road-mapping",
      "Vendor / Project Management",
      "Quarterly Strategy Workshops",
      "Priority 4-hr SLA",
      "Dedicated account manager",
      "Annual IT budget planning",
      "Technology stack optimization"
    ],
    link: "/solutions/digital-solution",
    ctaText: "Get Digital Solution",
    faqs: [
      {
        question: "Is this like having my own IT department?",
        answer: "Yes! The Digital Solution provides comprehensive coverage across all your technology needs, from websites to workspace setup."
      },
      {
        question: "How do the quarterly strategy workshops work?",
        answer: "We review your business goals, assess your current tech stack, and develop roadmaps for technology initiatives that drive growth."
      },
      {
        question: "Can you manage our other technology vendors?",
        answer: "Absolutely. We'll coordinate with software, hardware, and service providers to ensure everything works together seamlessly."
      }
    ]
  }
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find(s => s.id === id);
}