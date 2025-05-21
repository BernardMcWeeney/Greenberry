// data/services.ts
export interface Service {
  id: string;
  type: "service";
  title: string;
  shortTitle?: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  textColor: string;
  benefits: string[];
  features: string[];
  link: string;
  ctaText: string;
  parentSolutions: string[];
  faqs?: Array<{ question: string; answer: string }>;
  isAddOn?: boolean;
}

export const services: Service[] = [
  // Website Solution Services
  {
    id: "website-design",
    type: "service",
    title: "Website Design & Build",
    shortTitle: "Website Design",
    description: "Custom, mobile-first WordPress site with brand-matched UI and SEO-ready structure.",
    icon: "fa-solid fa-pencil-ruler",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    benefits: [
      "Professional brand representation online",
      "Optimized for mobile and desktop users",
      "Built for performance and conversions",
      "Future-proof platform with easy updates"
    ],
    features: [
      "Custom WordPress development",
      "Responsive design for all devices",
      "Brand-aligned user interface",
      "SEO-friendly site architecture",
      "Contact forms and core functionality",
      "Performance optimization"
    ],
    link: "/services/website-design",
    ctaText: "Get a Custom Website",
    parentSolutions: ["website-solution", "digital-solution"],
    faqs: [
      {
        question: "How much input do I have in the design process?",
        answer: "You'll be involved throughout the entire process, from initial concepts to final approval. We create websites that reflect your brand vision."
      },
      {
        question: "Can you integrate with my other business tools?",
        answer: "Yes, we can integrate with CRMs, booking systems, payment processors, and other business tools to create a seamless workflow."
      }
    ]
  },
  {
    id: "cms-admin",
    type: "service",
    title: "CMS Admin Dashboard & Training",
    shortTitle: "CMS Admin",
    description: "Easy editor interface with roles & permissions and comprehensive handover training.",
    icon: "fa-solid fa-sliders",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    benefits: [
      "Empowers your team to make content updates",
      "Reduces ongoing maintenance costs",
      "Ensures website stays current and relevant",
      "Provides secure access controls"
    ],
    features: [
      "User-friendly content editor",
      "Custom role configuration",
      "Content workflow setup",
      "2-hour handover training session",
      "Admin dashboard customization",
      "Documentation for key tasks"
    ],
    link: "/services/cms-admin",
    ctaText: "Get CMS Training",
    parentSolutions: ["website-solution", "digital-solution"],
    faqs: [
      {
        question: "How difficult is it to update content?",
        answer: "Very easy! Our CMS setup uses a block-based editor that makes updating content as simple as using a word processor."
      },
      {
        question: "Can multiple people edit the website?",
        answer: "Yes, we set up role-based permissions so different team members can have appropriate access levels."
      }
    ]
  },
  {
    id: "managed-hosting",
    type: "service",
    title: "Managed Hosting",
    description: "LiteSpeed stack with 99.9% uptime SLA, PHP 8, and Redis caching for optimal performance.",
    icon: "fa-solid fa-server",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    benefits: [
      "Fast, reliable website performance",
      "High availability with 99.9% uptime SLA",
      "Optimized for WordPress applications",
      "Scalable resources as your site grows"
    ],
    features: [
      "PHP 8 with NVMe SSD storage",
      "LiteSpeed web server technology",
      "Redis object caching",
      "99.9% uptime guarantee",
      "Server-level optimization",
      "Resource monitoring and scaling"
    ],
    link: "/services/managed-hosting",
    ctaText: "Get Managed Hosting",
    parentSolutions: ["website-solution", "digital-solution"],
    faqs: [
      {
        question: "Where are your servers located?",
        answer: "Our primary servers are in EU data centers, ensuring GDPR compliance and fast loading times for European visitors."
      },
      {
        question: "What happens if my site gets a traffic spike?",
        answer: "Our hosting automatically scales resources to handle traffic spikes, ensuring your site stays online during high-demand periods."
      }
    ]
  },
  {
    id: "domain-management",
    type: "service",
    title: "Domain & DNS Management",
    description: "Register/transfer .ie/.com domains with DNSSEC, auto-renewal, and professional DNS configuration.",
    icon: "fa-solid fa-globe",
    color: "blue",
    borderColor: "border-t-blue-500",
    textColor: "text-blue-500",
    benefits: [
      "Secure domain ownership",
      "Professional domain management",
      "Prevent domain expiration issues",
      "Enhanced DNS security"
    ],
    features: [
      "Domain registration or transfer",
      "DNSSEC implementation",
      "Automatic renewal management",
      "DNS record configuration",
      "Domain ownership protection",
      "DNS propagation assistance"
    ],
    link: "/services/domain-management",
    ctaText: "Manage My Domain",
    parentSolutions: ["website-solution", "support-solution", "digital-solution"],
    faqs: [
      {
        question: "Can you help transfer my existing domain?",
        answer: "Yes, we handle the entire domain transfer process, ensuring zero downtime for your email and website."
      },
      {
        question: "What is DNSSEC and why do I need it?",
        answer: "DNSSEC adds cryptographic protection to your DNS, preventing attacks like DNS poisoning that can redirect your users to malicious sites."
      }
    ]
  },
  {
    id: "business-email",
    type: "service",
    title: "Business & Transactional Email",
    shortTitle: "Business Email",
    description: "Branded email addresses, 5 GB mailbox storage, and SMTP API for site forms.",
    icon: "fa-solid fa-envelope",
    color: "blue",
    borderColor: "border-t-blue-500",
    textColor: "text-blue-500",
    benefits: [
      "Professional brand consistency",
      "Reliable email delivery",
      "Secure web form submissions",
      "No reliance on personal accounts"
    ],
    features: [
      "Custom email addresses (@yourdomain)",
      "5 GB mailbox storage per address",
      "SMTP API for transactional emails",
      "Webmail access",
      "Mobile device configuration",
      "Email forwarding options"
    ],
    link: "/services/business-email",
    ctaText: "Get Business Email",
    parentSolutions: ["website-solution", "support-solution", "security-solution", "digital-solution"],
    faqs: [
      {
        question: "Can I access my email on my phone?",
        answer: "Yes, we'll help you set up your branded email on all your devices including smartphones, tablets, and desktop email clients."
      },
      {
        question: "What's the difference between business and transactional email?",
        answer: "Business email is for your day-to-day communications, while transactional email handles automated messages from your website like form submissions and notifications."
      }
    ]
  },
  {
    id: "cdn-waf",
    type: "service",
    title: "Global CDN + WAF (Cloudflare Free)",
    shortTitle: "CDN & WAF",
    description: "285 edge POPs, free SSL/TLS, basic WAF rules, and DDoS protection for your website.",
    icon: "fa-solid fa-shield-alt",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    benefits: [
      "Faster global website loading",
      "Protection from common attacks",
      "Improved uptime during traffic spikes",
      "Reduced server load"
    ],
    features: [
      "Global content delivery network",
      "Free SSL/TLS certificates",
      "HTTP/3 support",
      "Basic WAF rules configuration",
      "DDoS mitigation",
      "Rate limiting for abuse prevention"
    ],
    link: "/services/cdn-waf",
    ctaText: "Secure My Website",
    parentSolutions: ["website-solution", "security-solution", "digital-solution"],
    faqs: [
      {
        question: "How does a CDN improve website performance?",
        answer: "A CDN caches your website content on servers worldwide, delivering it from the location closest to each visitor, significantly reducing load times."
      },
      {
        question: "What protection does the WAF provide?",
        answer: "The Web Application Firewall blocks common attack patterns including SQL injection, cross-site scripting (XSS), and other OWASP Top 10 vulnerabilities."
      }
    ]
  },
  {
    id: "backups-recovery",
    type: "service",
    title: "Daily Backups & Disaster Recovery",
    shortTitle: "Backups & Recovery",
    description: "30-day retention, one-click restore, and off-site EU storage for peace of mind.",
    icon: "fa-solid fa-database",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    benefits: [
      "Protection against data loss",
      "Quick recovery from issues",
      "Compliant data storage",
      "Peace of mind security"
    ],
    features: [
      "Automated daily backups",
      "30-day retention policy",
      "Off-site EU-based storage",
      "One-click restoration",
      "Complete file and database backups",
      "Version history tracking"
    ],
    link: "/services/backups-recovery",
    ctaText: "Protect My Data",
    parentSolutions: ["website-solution", "security-solution", "digital-solution"],
    faqs: [
      {
        question: "How quickly can you restore my site if something goes wrong?",
        answer: "Most restores can be completed within 1-2 hours, minimizing downtime for your business."
      },
      {
        question: "Where are the backups stored?",
        answer: "We store backups in a separate EU-based data center from your hosting, ensuring data sovereignty and protection from localized issues."
      }
    ]
  },
  {
    id: "seo-analytics",
    type: "service",
    title: "SEO Foundations & Analytics",
    shortTitle: "SEO & Analytics",
    description: "Basic on-page SEO setup with Google Analytics integration for performance tracking.",
    icon: "fa-solid fa-search",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    benefits: [
      "Improved search visibility",
      "Data-driven decision making",
      "User behavior insights",
      "Performance measurement"
    ],
    features: [
      "On-page SEO fundamentals",
      "Google Analytics 4 setup",
      "Site speed optimization",
      "Structured data implementation",
      "Basic keyword targeting",
      "Monthly analytics report"
    ],
    link: "/services/seo-analytics",
    ctaText: "Optimize My Site",
    parentSolutions: ["website-solution", "digital-solution"],
    faqs: [
      {
        question: "What SEO basics are included?",
        answer: "We ensure proper meta tags, headings, site structure, XML sitemaps, robots.txt, and fundamental on-page optimization for core pages."
      },
      {
        question: "What metrics will I be able to track?",
        answer: "You'll see visitor numbers, traffic sources, popular pages, user behavior flow, conversion tracking, and other key performance indicators."
      }
    ]
  },
  {
    id: "content-updates",
    type: "service",
    title: "30 Min Monthly Content Updates",
    shortTitle: "Content Updates",
    description: "Regular assistance with website content changes to keep your site fresh and accurate.",
    icon: "fa-solid fa-edit",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    benefits: [
      "Always current website content",
      "Professional implementation",
      "Time savings for your team",
      "No technical knowledge needed"
    ],
    features: [
      "30 minutes of updates monthly",
      "Text and image changes",
      "New page creation as needed",
      "Content optimization",
      "Form updates and adjustments",
      "Rollover of unused minutes"
    ],
    link: "/services/content-updates",
    ctaText: "Schedule Updates",
    parentSolutions: ["website-solution", "digital-solution"],
    faqs: [
      {
        question: "What types of updates can I request?",
        answer: "Anything from text changes and new images to adding pages, updating products, or adjusting forms - virtually any content-related change."
      },
      {
        question: "What if I need more than 30 minutes in a month?",
        answer: "Additional update time can be purchased as needed, or you can consider our content packages for more extensive changes."
      }
    ]
  },

  // Security Solution Services
  {
    id: "security-audit",
    type: "service",
    title: "Security & Compliance Audit",
    description: "Automated scans and manual reviews with GDPR & cookie compliance reporting.",
    icon: "fa-solid fa-clipboard-check",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Identify security vulnerabilities",
      "Ensure regulatory compliance",
      "Reduce risk of data breaches",
      "Document security posture"
    ],
    features: [
      "OWASP Top 10 vulnerability scan",
      "GDPR compliance assessment",
      "Cookie policy evaluation",
      "Manual security review",
      "Detailed findings report",
      "Remediation recommendations"
    ],
    link: "/services/security-audit",
    ctaText: "Get Security Audit",
    parentSolutions: ["security-solution", "digital-solution"],
    faqs: [
      {
        question: "How often should I conduct a security audit?",
        answer: "We recommend quarterly audits to stay ahead of emerging threats and ensure ongoing compliance with regulations."
      },
      {
        question: "What happens if you find security issues?",
        answer: "We provide a detailed report with prioritized recommendations and can implement fixes as part of our security solution."
      }
    ]
  },
  {
    id: "patch-management",
    type: "service",
    title: "Monthly Core / Plugin Patching",
    shortTitle: "Patch Management",
    description: "Regular security updates with testing, changelogs, and rollback capabilities.",
    icon: "fa-solid fa-sync-alt",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Protection from known vulnerabilities",
      "Stable, secure website operation",
      "Reduced security incident risk",
      "Maintains software compatibility"
    ],
    features: [
      "WordPress core updates",
      "Plugin security patches",
      "Pre-update testing",
      "Change documentation",
      "Compatibility verification",
      "Rollback capability for issues"
    ],
    link: "/services/patch-management",
    ctaText: "Keep My Site Secure",
    parentSolutions: ["security-solution", "digital-solution"],
    faqs: [
      {
        question: "Will updates break my website?",
        answer: "We test all updates in a staging environment before applying them to your live site, minimizing the risk of compatibility issues."
      },
      {
        question: "How will I know what's been updated?",
        answer: "You'll receive a monthly changelog detailing all updates applied, security fixes implemented, and any other changes made to your site."
      }
    ]
  },
  {
    id: "email-security",
    type: "service",
    title: "SPF, DKIM, DMARC Email Hardening",
    shortTitle: "Email Security",
    description: "Comprehensive email authentication to prevent spoofing and improve deliverability.",
    icon: "fa-solid fa-envelope-open-text",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Prevent email spoofing",
      "Protect brand reputation",
      "Improve email deliverability",
      "Reduce phishing risks"
    ],
    features: [
      "SPF record configuration",
      "DKIM signature implementation",
      "DMARC policy setup",
      "Deliverability monitoring",
      "Reporting and analytics",
      "Phishing protection"
    ],
    link: "/services/email-security",
    ctaText: "Secure My Email",
    parentSolutions: ["security-solution", "support-solution", "digital-solution"],
    faqs: [
      {
        question: "What is email spoofing and how does this prevent it?",
        answer: "Email spoofing is when attackers send emails that appear to come from your domain. SPF, DKIM, and DMARC work together to verify sender authenticity and prevent this impersonation."
      },
      {
        question: "Will this affect my normal email sending?",
        answer: "No, these protocols work behind the scenes to verify legitimate emails while blocking fraudulent ones, improving deliverability for your authentic messages."
      }
    ]
  },
  {
    id: "ssl-management",
    type: "service",
    title: "SSL/TLS Certificate Management",
    shortTitle: "SSL Management",
    description: "Automatic certificate issuance, renewal, and monitoring for secure connections.",
    icon: "fa-solid fa-lock",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Protect customer data in transit",
      "Build visitor trust with https",
      "Improve search engine rankings",
      "Prevent certificate expiration"
    ],
    features: [
      "Automatic certificate issuance",
      "Renewal monitoring",
      "HTTPS configuration",
      "Mixed content detection",
      "Security header implementation",
      "Certificate status alerts"
    ],
    link: "/services/ssl-management",
    ctaText: "Secure My Connection",
    parentSolutions: ["security-solution", "digital-solution"],
    faqs: [
      {
        question: "What type of SSL certificate will I get?",
        answer: "We implement free Let's Encrypt certificates via Cloudflare for most sites. If you need extended validation (EV) or organization validation (OV) certificates, we can provide those at additional cost."
      },
      {
        question: "Will SSL slow down my website?",
        answer: "Modern SSL implementations have minimal performance impact and actually enable HTTP/2 and HTTP/3, which can make your site faster through more efficient connections."
      }
    ]
  },
  {
    id: "dnssec-whois",
    type: "service",
    title: "DNSSEC & WHOIS Privacy",
    description: "Enhanced DNS security with domain privacy protection for owners.",
    icon: "fa-solid fa-user-shield",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Prevent DNS hijacking",
      "Protect personal information",
      "Reduce spam and solicitations",
      "Enhanced domain security"
    ],
    features: [
      "DNSSEC implementation",
      "WHOIS privacy protection",
      "Domain security monitoring",
      "DNS security reporting",
      "Domain contact screening",
      "Private registration management"
    ],
    link: "/services/dnssec-whois",
    ctaText: "Protect My Domain",
    parentSolutions: ["security-solution", "digital-solution"],
    faqs: [
      {
        question: "Why do I need DNSSEC?",
        answer: "DNSSEC prevents DNS poisoning attacks where hackers redirect your domain to malicious sites, providing cryptographic verification of DNS records."
      },
      {
        question: "What information does WHOIS privacy protect?",
        answer: "WHOIS privacy shields your name, email, phone number, and physical address from public view, preventing them from being harvested for spam or social engineering."
      }
    ]
  },
  {
    id: "vulnerability-scanning",
    type: "service",
    title: "Vulnerability Scanning & Alerting",
    description: "Regular automated security checks with immediate notification of issues.",
    icon: "fa-solid fa-radar",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Early detection of security risks",
      "Proactive threat mitigation",
      "Continuous security posture",
      "Documented security efforts"
    ],
    features: [
      "Weekly automated scans",
      "Real-time vulnerability alerts",
      "False positive verification",
      "Severity classification",
      "Remediation guidance",
      "Historical vulnerability tracking"
    ],
    link: "/services/vulnerability-scanning",
    ctaText: "Monitor My Security",
    parentSolutions: ["security-solution", "digital-solution"],
    faqs: [
      {
        question: "What types of vulnerabilities do you scan for?",
        answer: "We scan for the OWASP Top 10 vulnerabilities, outdated software, malware, blacklist status, and other common security issues that could affect your site."
      },
      {
        question: "How will I be notified about vulnerabilities?",
        answer: "Critical vulnerabilities trigger immediate email alerts, while less severe issues are compiled into regular reports with recommended actions."
      }
    ]
  },
  {
    id: "network-security",
    type: "service",
    title: "Network Security (UniFi Gateway policies)",
    shortTitle: "Network Security",
    description: "Firewall configuration, traffic policies, and threat management for your network.",
    icon: "fa-solid fa-network-wired",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Protect internal network",
      "Control traffic and access",
      "Prevent unauthorized access",
      "Segment sensitive systems"
    ],
    features: [
      "UniFi Gateway configuration",
      "Firewall rule management",
      "Traffic policy implementation",
      "VLAN segmentation",
      "Intrusion prevention",
      "Network monitoring alerts"
    ],
    link: "/services/network-security",
    ctaText: "Secure My Network",
    parentSolutions: ["security-solution", "digital-solution"],
    faqs: [
      {
        question: "Do I need to purchase UniFi equipment?",
        answer: "Yes, this service requires UniFi networking equipment. We can advise on appropriate models for your budget and needs or work with your existing UniFi hardware."
      },
      {
        question: "Can you set up separate networks for staff and guests?",
        answer: "Yes, we implement VLAN segmentation with separate networks for staff, guests, and IoT devices with appropriate access controls for each."
      }
    ]
  },
  {
    id: "remediation-report",
    type: "service",
    title: "Quarterly Remediation Report",
    description: "Regular security review with incident analysis and improvement recommendations.",
    icon: "fa-solid fa-file-alt",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Document security posture",
      "Track security improvements",
      "Prioritize future investments",
      "Demonstrate due diligence"
    ],
    features: [
      "Quarterly comprehensive report",
      "Incident investigation summary",
      "Remediation documentation",
      "Risk trend analysis",
      "Security posture scoring",
      "Prioritized recommendations"
    ],
    link: "/services/remediation-report",
    ctaText: "Get Security Insights",
    parentSolutions: ["security-solution", "digital-solution"],
    faqs: [
      {
        question: "What information is included in the report?",
        answer: "The report includes vulnerability trends, security incidents, patching history, remediation activities, and recommendations for further security improvements."
      },
      {
        question: "How can I use this report for compliance?",
        answer: "The report provides documentation of your security efforts and due diligence, which can be valuable for regulatory compliance and customer security questionnaires."
      }
    ]
  },

  // Support Solution Services
  {
    id: "it-support-desk",
    type: "service",
    title: "Lite IT Support Desk",
    shortTitle: "IT Support",
    description: "Unlimited tickets with remote assistance available 9-5 weekdays for all your tech needs.",
    icon: "fa-solid fa-headset",
    color: "green",
    borderColor: "border-t-green-500",
    textColor: "text-green-500",
    benefits: [
      "Rapid resolution of tech issues",
      "Minimize business disruption",
      "Expert guidance when needed",
      "Reduce in-house IT burden"
    ],
    features: [
      "Email and phone support",
      "Remote troubleshooting",
      "9-5 weekday availability",
      "Unlimited support tickets",
      "Issue tracking system",
      "Knowledge base access"
    ],
    link: "/services/it-support-desk",
    ctaText: "Get IT Support",
    parentSolutions: ["support-solution", "digital-solution"],
    faqs: [
      {
        question: "What types of issues can you help with?",
        answer: "We handle everything from email configuration and software troubleshooting to network issues and device setup."
      },
      {
        question: "How do I submit a support ticket?",
        answer: "You can email our support address, call our helpline, or use our client portal to submit and track tickets."
      }
    ]
  },
  {
    id: "device-setup",
    type: "service",
    title: "Device & OS Setup",
    description: "Configuration of Windows/macOS/iOS/Android devices with security policies.",
    icon: "fa-solid fa-laptop",
    color: "green",
    borderColor: "border-t-green-500",
    textColor: "text-green-500",
    benefits: [
      "Productivity from day one",
      "Consistent device configuration",
      "Enhanced security settings",
      "Reduced setup frustration"
    ],
    features: [
      "Windows and macOS configuration",
      "iOS and Android setup",
      "Security policy implementation",
      "Software installation",
      "Email and cloud account setup",
      "Data migration assistance"
    ],
    link: "/services/device-setup",
    ctaText: "Configure My Devices",
    parentSolutions: ["support-solution", "digital-solution"],
    faqs: [
      {
        question: "Can you set up new computers for our team?",
        answer: "Yes, we can configure new computers with your standard software, security settings, and user accounts before deployment to your team."
      },
      {
        question: "How do you handle data migration to new devices?",
        answer: "We transfer data from old devices, ensuring emails, documents, bookmarks, and settings are moved securely to the new hardware."
      }
    ]
  },
  {
    id: "printer-support",
    type: "service",
    title: "Printer & Peripheral Support",
    description: "Network printer configuration, driver deployment, and troubleshooting assistance.",
    icon: "fa-solid fa-print",
    color: "green",
    borderColor: "border-t-green-500",
    textColor: "text-green-500",
    benefits: [
      "Reliable printing capability",
      "Optimized device performance",
      "Reduced connectivity issues",
      "Technical support for peripherals"
    ],
    features: [
      "Network printer configuration",
      "Driver installation and updates",
      "Scan-to-email setup",
      "Peripheral device support",
      "Print server management",
      "Mobile printing enablement"
    ],
    link: "/services/printer-support",
    ctaText: "Support My Peripherals",
    parentSolutions: ["support-solution", "digital-solution"],
    faqs: [
      {
        question: "Can you configure our printer for scanning to email?",
        answer: "Yes, we set up scan-to-email functionality, configure address books, and ensure proper email server authentication for secure scanning."
      },
      {
        question: "What types of peripherals do you support?",
        answer: "We support printers, scanners, webcams, external drives, specialized input devices, and most USB peripherals used in business environments."
      }
    ]
  },
  {
    id: "microsoft-365-admin",
    type: "service",
    title: "Microsoft 365 Setup & Support",
    shortTitle: "Microsoft 365 Admin",
    description: "Tenant creation, mail migration, and support for Teams & SharePoint.",
    icon: "fa-brands fa-microsoft",
    color: "green",
    borderColor: "border-t-green-500",
    textColor: "text-green-500",
    benefits: [
      "Professional M365 configuration",
      "Seamless email migration",
      "Secure collaboration setup",
      "Maximized productivity tools"
    ],
    features: [
      "Microsoft 365 tenant setup",
      "User account provisioning",
      "Email migration and configuration",
      "Teams and SharePoint deployment",
      "Security and compliance settings",
      "OneDrive file protection"
    ],
    link: "/services/microsoft-365-admin",
    ctaText: "Configure Microsoft 365",
    parentSolutions: ["support-solution", "digital-solution"],
    faqs: [
      {
        question: "Can you migrate our emails from another provider?",
        answer: "Yes, we can migrate your email from most providers including Google Workspace, cPanel, Zoho, and other Microsoft Exchange servers to Microsoft 365."
      },
      {
        question: "How long does Microsoft 365 setup typically take?",
        answer: "Basic setup can be completed in 1-2 days, with email migration timing dependent on the volume of data being transferred. Full implementation with Teams and SharePoint typically takes 1-2 weeks."
      }
    ]
  },
  {
    id: "google-workspace-admin",
    type: "service",
    title: "Google Workspace Setup & Support",
    shortTitle: "Google Workspace Admin",
    description: "Domain verification, mail migration, and support for Drive & Docs.",
    icon: "fa-brands fa-google",
    color: "green",
    borderColor: "border-t-green-500",
    textColor: "text-green-500",
    benefits: [
      "Professional Google configuration",
      "Seamless email migration",
      "Secure cloud storage setup",
      "Collaborative workspace tools"
    ],
    features: [
      "Google Workspace tenant setup",
      "Domain verification",
      "User account provisioning",
      "Email migration from other providers",
      "Drive and Docs configuration",
      "Security and access controls"
    ],
    link: "/services/google-workspace-admin",
    ctaText: "Configure Google Workspace",
    parentSolutions: ["support-solution", "digital-solution"],
    faqs: [
      {
        question: "Can you migrate our emails from another provider?",
        answer: "Yes, we can migrate your email from most providers including Microsoft 365, cPanel, Zoho, and other email systems to Google Workspace."
      },
      {
        question: "How long does Google Workspace setup typically take?",
        answer: "Basic setup can be completed in 1-2 days, with email migration timing dependent on the volume of data being transferred. Full implementation with Drive and Docs typically takes 3-5 business days."
      }
    ]
  },
  {
    id: "unifi-network-management",
    type: "service",
    title: "UniFi Network Management",
    shortTitle: "UniFi Network",
    description: "Wi-Fi APs, switches, gateway firewall, and guest portal management.",
    icon: "fa-solid fa-wifi",
    color: "blue",
    borderColor: "border-t-blue-500",
    textColor: "text-blue-500",
    benefits: [
      "Enterprise-grade network reliability",
      "Centralized management interface",
      "Secure guest access control",
      "Advanced traffic monitoring"
    ],
    features: [
      "UniFi access point installation",
      "Network switches configuration",
      "Gateway firewall setup and rules",
      "Guest portal and captive portal",
      "Traffic management and QoS",
      "Security monitoring and alerts"
    ],
    link: "/services/unifi-network-management",
    ctaText: "Optimize Your Network",
    parentSolutions: ["support-solution", "security-solution", "digital-solution"],
    faqs: [
      {
        question: "Do I need to purchase special hardware for UniFi?",
        answer: "Yes, UniFi is a hardware-software ecosystem. We can recommend and procure the appropriate UniFi devices based on your environment size and requirements."
      },
      {
        question: "Can you set up separate networks for staff and guests?",
        answer: "Absolutely. We commonly configure multiple networks (VLANs) for different purposes - secure staff networks, guest access with captive portal, and isolated IoT device networks for enhanced security."
      }
    ]
  },
  {
    id: "seo-growth-pack",
    type: "service",
    title: "SEO Growth Pack",
    shortTitle: "SEO Growth Pack",
    description: "Keyword research, on-page optimization, and local citations management.",
    icon: "fa-solid fa-magnifying-glass-chart",
    color: "purple",
    borderColor: "border-t-purple-500",
    textColor: "text-purple-500",
    benefits: [
      "Improved search engine rankings",
      "Targeted keyword optimization",
      "Enhanced local business visibility",
      "Increased organic website traffic"
    ],
    features: [
      "Keyword research and analysis",
      "On-page SEO optimization",
      "Local business citations",
      "Google Business Profile management",
      "Performance tracking and reporting",
      "Quarterly strategy adjustments"
    ],
    link: "/services/seo-growth-pack",
    ctaText: "Boost Your Visibility",
    parentSolutions: ["website-solution", "digital-solution"],
    isAddOn: true,
    faqs: [
      {
        question: "How long before I see results from SEO work?",
        answer: "SEO is a long-term strategy. While some improvements can be seen within 4-6 weeks, meaningful results typically take 3-6 months. Local SEO for businesses targeting nearby customers often shows results faster than broader campaigns."
      },
      {
        question: "Do you guarantee first page rankings?",
        answer: "We don't guarantee specific rankings as search algorithms constantly evolve. However, we commit to data-driven optimization that improves visibility for targeted keywords and increases quality traffic to your website over time."
      }
    ]
  },
  {
    id: "ai-content-coaching",
    type: "service",
    title: "AI Content Coaching",
    shortTitle: "AI Content Coaching",
    description: "AI-drafted copy with human polish, 4 pages per month.",
    icon: "fa-solid fa-robot",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    benefits: [
      "Professional content creation",
      "Time-saving content generation",
      "SEO-optimized website copy",
      "Consistent brand messaging"
    ],
    features: [
      "AI-assisted content creation",
      "Human editor refinement",
      "4 pages of quality content monthly",
      "Keyword optimization",
      "Brand voice consistency",
      "Content strategy guidance"
    ],
    link: "/services/ai-content-coaching",
    ctaText: "Create Engaging Content",
    parentSolutions: ["website-solution", "digital-solution"],
    isAddOn: true,
    faqs: [
      {
        question: "How does the AI content creation process work?",
        answer: "We use advanced AI tools to generate initial content drafts based on your industry, keywords, and business goals. Our human editors then refine these drafts to ensure they match your brand voice, are factually accurate, and optimized for both readers and search engines."
      },
      {
        question: "Can I provide input on the content topics?",
        answer: "Absolutely. We start with a content planning session to understand your priorities and target audience. You can suggest specific topics or allow us to research and recommend content that will best serve your business objectives."
      }
    ]
  },
  {
    id: "digital-consultancy",
    type: "service",
    title: "Digital Consultancy & Road-mapping",
    shortTitle: "Digital Consultancy",
    description: "Annual IT budget planning, tech stack advice, and project oversight.",
    icon: "fa-solid fa-compass-drafting",
    color: "amber",
    borderColor: "border-t-amber-500",
    textColor: "text-amber-500",
    benefits: [
      "Strategic technology planning",
      "Optimized IT investments",
      "Vendor coordination",
      "Future-proofed digital roadmap"
    ],
    features: [
      "Annual IT budget planning",
      "Technology stack evaluation",
      "Digital transformation strategy",
      "Vendor management and liaison",
      "Project oversight and coordination",
      "Quarterly strategy workshops"
    ],
    link: "/services/digital-consultancy",
    ctaText: "Plan Your Digital Future",
    parentSolutions: ["digital-solution"],
    faqs: [
      {
        question: "How can digital consultancy benefit my small business?",
        answer: "Our digital consultancy helps small businesses make informed technology decisions, avoid costly mistakes, and implement scalable solutions. We create a tailored roadmap that aligns with your business goals and budget, ensuring you invest in the right technologies at the right time."
      },
      {
        question: "Do you help with vendor selection and management?",
        answer: "Yes, we serve as your technology advocate, helping select the right vendors, negotiate contracts, and coordinate between multiple service providers. This saves you time and ensures all your technology components work together seamlessly."
      }
    ]
  },
  {
    id: "security-compliance-audit",
    type: "service",
    title: "Security & Compliance Audit",
    shortTitle: "Security Audit",
    description: "Automated scans, manual review, GDPR & cookie compliance reporting.",
    icon: "fa-solid fa-shield-halved",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Comprehensive security assessment",
      "GDPR compliance verification",
      "Vulnerability identification",
      "Risk mitigation recommendations"
    ],
    features: [
      "Automated security scanning",
      "Manual security review",
      "GDPR compliance assessment",
      "Cookie policy analysis",
      "Vulnerability reporting",
      "Remediation recommendations"
    ],
    link: "/services/security-compliance-audit",
    ctaText: "Secure Your Business",
    parentSolutions: ["security-solution", "digital-solution"],
    faqs: [
      {
        question: "How often should we conduct security audits?",
        answer: "We recommend comprehensive security audits quarterly, with continuous monitoring in between. For businesses in regulated industries or those handling sensitive data, more frequent assessments may be necessary."
      },
      {
        question: "What does the GDPR compliance component include?",
        answer: "Our GDPR assessment reviews your data collection processes, privacy policies, cookie notices, and data storage practices. We provide recommendations to ensure compliance with current regulations and best practices for protecting user privacy."
      }
    ]
  },
  {
    id: "vulnerability-patch-management",
    type: "service",
    title: "Vulnerability & Patch Management",
    shortTitle: "Patch Management",
    description: "Monthly core/plugin updates, changelog tracking, and roll-back planning.",
    icon: "fa-solid fa-bug-slash",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    benefits: [
      "Proactive security maintenance",
      "Reduced vulnerability exposure",
      "Consistent system updates",
      "Minimized downtime risk"
    ],
    features: [
      "Monthly core system updates",
      "Plugin and extension patches",
      "Detailed changelog tracking",
      "Roll-back plan development",
      "Pre-update testing",
      "Quarterly remediation reporting"
    ],
    link: "/services/vulnerability-patch-management",
    ctaText: "Keep Systems Secure",
    parentSolutions: ["security-solution", "digital-solution"],
    faqs: [
      {
        question: "Will updates cause downtime for our website?",
        answer: "Most updates are performed with zero or minimal downtime. For significant core updates, we schedule maintenance windows during off-peak hours and provide advance notice. Our testing processes help ensure smooth updates with minimal disruption."
      },
      {
        question: "What happens if an update breaks our website?",
        answer: "Before applying updates to your live site, we test them in a staging environment. If any issues occur after deployment, our roll-back plans allow us to quickly restore your site to its previous stable state while we resolve the problems."
      }
    ]
  },
  {
    id: "dailybackups-disaster-recovery",
    type: "service",
    title: "Daily Backups & Disaster Recovery",
    shortTitle: "Backups & Recovery",
    description: "30-day retention, one-click restore, off-site EU storage.",
    icon: "fa-solid fa-cloud-arrow-up",
    color: "blue",
    borderColor: "border-t-blue-500",
    textColor: "text-blue-500",
    benefits: [
      "Data loss prevention",
      "Rapid disaster recovery",
      "EU-compliant data storage",
      "Business continuity assurance"
    ],
    features: [
      "Automated daily backups",
      "30-day retention policy",
      "Off-site EU data storage",
      "One-click restoration",
      "Regular recovery testing",
      "Point-in-time recovery options"
    ],
    link: "/services/dailybackups-disaster-recovery",
    ctaText: "Protect Your Data",
    parentSolutions: ["website-solution", "security-solution", "digital-solution"],
    faqs: [
      {
        question: "Where are my backups stored?",
        answer: "Your backups are stored in redundant, secure data centers within the European Union, ensuring GDPR compliance. We use enterprise-grade encryption for data in transit and at rest."
      },
      {
        question: "How quickly can you restore from a backup?",
        answer: "For standard websites, restoration typically takes 30-60 minutes. For larger, more complex sites or databases, it may take 2-4 hours. Our one-click restoration process ensures minimal downtime in emergency situations."
      }
    ]
  }
]

// Include the remaining services based on the product map...

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}

export function getServicesByParentSolution(solutionId: string): Service[] {
  return services.filter(s => s.parentSolutions.includes(solutionId));
}

export function getAddOnServices(): Service[] {
  return services.filter(s => s.isAddOn === true);
}