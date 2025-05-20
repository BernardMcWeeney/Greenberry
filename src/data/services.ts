export interface Service {
  id: string;
  type: "service";
  title: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  textColor: string;
  features: string[];
  link: string;
  ctaText: string;
}

export const services: Service[] = [
  {
    id: "website-build",
    type: "service",
    title: "Website Design & Build",
    description: "Stand out online with a beautiful, mobile-friendly website made just for your Irish business. Fast, secure, and ready for Google—no tech speak required.",
    icon: "fa-solid fa-globe",
    color: "blue",
    borderColor: "border-t-accent-blue-500",
    textColor: "text-accent-blue-500",
    features: [
      "Bespoke design matching your brand",
      "Looks great on phones and tablets",
      "Easy content editor—no coding needed",
      "Lightning-fast load times",
      "Built for SEO success",
      "Connects to Google Analytics"
    ],
    link: "/services/website-build",
    ctaText: "Start Your Website"
  },
  {
    id: "email-setup",
    type: "service",
    title: "Email Setup",
    description: "Get professional @yourbusiness.ie email addresses with spam protection and effortless mobile access. Perfect for Irish companies who want reliable mail.",
    icon: "fa-solid fa-envelope",
    color: "red",
    borderColor: "border-t-accent-red-500",
    textColor: "text-accent-red-500",
    features: [
      "Branded domain emails",
      "Top-grade spam & malware filters",
      "Access on any device",
      "Shared calendars & contacts",
      "Automatic daily backups",
      "Smooth migration from old systems"
    ],
    link: "/services/email-setup",
    ctaText: "Get Email Setup"
  },
  {
    id: "domain-management",
    type: "service",
    title: "Domain Management",
    description: "We handle your .ie (and .com) domain registration, DNS setup, SSL certificates, and renewals—so your online address is always yours.",
    icon: "fa-solid fa-globe",
    color: "purple",
    borderColor: "border-t-purple-500",
    textColor: "text-purple-500",
    features: [
      "Register or transfer your domain",
      "Simple DNS configuration",
      "SSL certificate installation",
      "Auto-renewal reminders",
      "Whois privacy included",
      "24/7 DNS uptime monitoring"
    ],
    link: "/services/domain-management",
    ctaText: "Manage Your Domain"
  },
  {
    id: "maintenance",
    type: "service",
    title: "Upgrade & Maintenance",
    description: "Keep your website secure, speedy, and up-to-date with regular backups, patches, and performance checks—so you can focus on your business.",
    icon: "fa-solid fa-arrows-rotate",
    color: "green",
    borderColor: "border-t-greenberry-500",
    textColor: "text-greenberry-500",
    features: [
      "Monthly system & plugin updates",
      "Daily off-site backups",
      "Real-time security monitoring",
      "Speed and performance tweaks",
      "Quick content edits",
      "Clear monthly reports"
    ],
    link: "/services/maintenance",
    ctaText: "Learn About Maintenance"
  },
  {
    id: "seo",
    type: "service",
    title: "SEO Packages",
    description: "Get found by customers in Ireland with data-driven SEO. From keywords to content and local listings, we’ll boost your Google ranking and website traffic.",
    icon: "fa-solid fa-magnifying-glass-chart",
    color: "orange",
    borderColor: "border-t-accent-orange-500",
    textColor: "text-accent-orange-500",
    features: [
      "In-depth keyword research",
      "On-page SEO fixes",
      "Fresh content planning & writing",
      "Technical site checks",
      "Local SEO for Irish searches",
      "Monthly performance reports"
    ],
    link: "/services/seo",
    ctaText: "Boost Your SEO"
  },
  {
    id: "ai-content",
    type: "service",
    title: "AI-Powered Content Coaching",
    description: "Beat writer’s block with AI-drafted blog posts and pages, refined by our team for a natural, on-brand feel that speaks to Irish audiences.",
    icon: "fa-solid fa-robot",
    color: "teal",
    borderColor: "border-t-teal-500",
    textColor: "text-teal-500",
    features: [
      "AI-generated draft content",
      "Keyword-focused writing",
      "Human editing for tone",
      "On-demand content calendars",
      "Built-in SEO best practices",
      "Never stare at a blank page"
    ],
    link: "/services/ai-content",
    ctaText: "Try AI Coaching"
  },
  {
    id: "security-audit",
    type: "service",
    title: "Security & Compliance Audit",
    description: "Protect your site and keep GDPR onside. We scan for vulnerabilities, review your setup, and hand you a simple action plan to fix any issues.",
    icon: "fa-solid fa-shield-halved",
    color: "rose",
    borderColor: "border-t-rose-500",
    textColor: "text-rose-500",
    features: [
      "Automated vulnerability scans",
      "Plugin & software version checks",
      "GDPR & cookie policy review",
      "Email security (SPF, DKIM, DMARC)",
      "Step-by-step fix plan",
      "Follow-up verification"
    ],
    link: "/services/security-audit",
    ctaText: "Audit My Site"
  },
  {
    id: "it-support",
    type: "service",
    title: "Lite IT Support",
    description: "On-demand tech help for email, cloud apps, backups, and device setup—ideal for small Irish teams who need quick, friendly support.",
    icon: "fa-solid fa-screwdriver-wrench",
    color: "gray",
    borderColor: "border-t-gray-500",
    textColor: "text-gray-500",
    features: [
      "Microsoft 365 & Google Workspace setup",
      "Cloud backup configuration",
      "New device setups",
      "Fast troubleshooting",
      "User training sessions",
      "Pay-as-you-go support"
    ],
    link: "/services/it-support",
    ctaText: "Get Support"
  }
];

export const processSteps: Record<string, { number: string; title: string; description: string }[]> = {
  "website-build": [
    { number: "01", title: "Chat & Plan", description: "We talk through your goals and who you serve in Ireland." },
    { number: "02", title: "Design Preview", description: "You review simple layouts and visuals before we build." },
    { number: "03", title: "Build & Configure", description: "We turn designs into a live site, optimised for speed and SEO." },
    { number: "04", title: "Test & Launch", description: "We check on all devices, then go live." },
    { number: "05", title: "Support & Grow", description: "Ongoing tweaks, updates, and help as you need it." }
  ],
  "maintenance": [
    { number: "01", title: "Initial Check", description: "We audit your current site health." },
    { number: "02", title: "Security Patches", description: "Install updates to keep hackers out." },
    { number: "03", title: "Speed Tune-up", description: "Optimize loading times and performance." },
    { number: "04", title: "Content Update", description: "Small text or image tweaks to keep things fresh." },
    { number: "05", title: "Monthly Report", description: "Clear, simple summary of what we did." }
  ],
  "seo": [
    { number: "01", title: "SEO Health Check", description: "Review your site’s visibility in Google." },
    { number: "02", title: "Keyword Plan", description: "Find the best Irish search terms for your business." },
    { number: "03", title: "Page Improvements", description: "Update titles, headings, and content." },
    { number: "04", title: "Content Strategy", description: "Plan blogs and pages that attract local customers." },
    { number: "05", title: "Track & Report", description: "Monthly ranking and traffic updates." }
  ],
  "email-setup": [
    { number: "01", title: "Needs Review", description: "We understand how many mailboxes and features you need." },
    { number: "02", title: "Plan & Provider", description: "Choose the best email service for your size and budget." },
    { number: "03", title: "Setup & Secure", description: "Create accounts, set passwords, and enable spam filters." },
    { number: "04", title: "Migration", description: "Move your old emails and calendars with no downtime." },
    { number: "05", title: "Training & Handover", description: "Show your team how to use everything smoothly." }
  ]
};

export const featureCards: Record<string, { title: string; description: string; icon: string; color: string }[]> = {
  "website-build": [
    { title: "Custom Designs", description: "Your brand, your look.", icon: "fa-solid fa-palette", color: "purple" },
    { title: "Mobile-Ready", description: "Works on any device.", icon: "fa-solid fa-mobile-screen", color: "blue" },
    { title: "SEO-Built", description: "Set up for Google success.", icon: "fa-solid fa-magnifying-glass", color: "green" },
    { title: "Fast Load", description: "Visitors stay longer.", icon: "fa-solid fa-bolt", color: "yellow" },
    { title: "Edit Yourself", description: "Change text and images easily.", icon: "fa-solid fa-pen-to-square", color: "red" },
    { title: "Insights", description: "See who visits via Analytics.", icon: "fa-solid fa-chart-line", color: "blue" }
  ],
  "maintenance": [
    { title: "Security Updates", description: "Stay protected.", icon: "fa-solid fa-shield-halved", color: "red" },
    { title: "Performance Checks", description: "Keep it speedy.", icon: "fa-solid fa-gauge-high", color: "blue" },
    { title: "Daily Backups", description: "Your data is safe.", icon: "fa-solid fa-database", color: "green" },
    { title: "Content Tweaks", description: "Small updates on request.", icon: "fa-solid fa-pen-to-square", color: "purple" },
    { title: "Tech Support", description: "Quick answers.", icon: "fa-solid fa-headset", color: "yellow" },
    { title: "Simple Reports", description: "Understand what we did.", icon: "fa-solid fa-file-lines", color: "orange" }
  ],
  "seo": [
    { title: "Keyword Discovery", description: "Find terms Irish customers use.", icon: "fa-solid fa-magnifying-glass", color: "blue" },
    { title: "On-Page SEO", description: "Improve titles & tags.", icon: "fa-solid fa-file-code", color: "green" },
    { title: "Tech SEO", description: "Fix behind-the-scenes issues.", icon: "fa-solid fa-gears", color: "purple" },
    { title: "Local Listings", description: "Be found in local searches.", icon: "fa-solid fa-location-dot", color: "red" },
    { title: "Content Writing", description: "Engaging blog and page copy.", icon: "fa-solid fa-pen-fancy", color: "yellow" },
    { title: "Progress Reports", description: "Track your SEO growth.", icon: "fa-solid fa-chart-simple", color: "orange" }
  ],
  "email-setup": [
    { title: "Branded Emails", description: "you@yourbusiness.ie", icon: "fa-solid fa-globe", color: "blue" },
    { title: "Spam Defense", description: "Keeps junk out.", icon: "fa-solid fa-shield-halved", color: "red" },
    { title: "Anywhere Access", description: "Email on any device.", icon: "fa-solid fa-mobile-screen", color: "green" },
    { title: "Team Sharing", description: "Calendars & contacts.", icon: "fa-solid fa-users-gear", color: "purple" },
    { title: "Backups", description: "Never lose mail.", icon: "fa-solid fa-database", color: "yellow" },
    { title: "Zero Downtime", description: "Migrate without interruptions.", icon: "fa-solid fa-arrows-rotate", color: "orange" }
  ]
};

export const faqs: Record<string, { question: string; answer: string }[]> = {
  "website-build": [
    { question: "How long does it take?", answer: "Most small sites take 4–6 weeks. Bigger projects can run 8–12 weeks." },
    { question: "Can I update it myself?", answer: "Yes—you’ll get a simple editor and a quick training session." },
    { question: "Will it work on phones?", answer: "Absolutely—mobile-first design is our standard." },
    { question: "Do you handle hosting?", answer: "Yes, we offer hosting and manage it for you." },
    { question: "What if I need changes later?", answer: "You can add our Maintenance plan or request one-off edits." }
  ],
  "maintenance": [
    { question: "What’s included?", answer: "Updates, backups, monitoring, content tweaks, support, and reports." },
    { question: "How often do you update?", answer: "Monthly maintenance plus urgent security patches as needed." },
    { question: "What if the site breaks?", answer: "We monitor 24/7 and fix critical issues within hours." },
    { question: "Can you update content?", answer: "Yes—small content edits are part of the plan." },
    { question: "Do I still need hosting?", answer: "Yes—maintenance is a service on top of hosting." }
  ],
  "seo": [
    { question: "When will I see results?", answer: "You’ll notice initial gains in 3–6 months, with full impact in 6–12 months." },
    { question: "Do you guarantee #1 ranking?", answer: "No—ethical SEO focuses on long-term, sustainable growth." },
    { question: "Do you do local SEO?", answer: "Yes—we optimise for Irish and Meath-area searches." },
    { question: "What reports do I get?", answer: "Monthly updates on rankings, traffic, and conversions." },
    { question: "Is it all white-hat?", answer: "Always—no shortcuts, no penalties." }
  ],
  "email-setup": [
    { question: "Can I use my domain?", answer: "Yes—yourname@yourbusiness.ie or .com." },
    { question: "Will you move old mail?", answer: "Yes—zero downtime migration included." },
    { question: "How secure is it?", answer: "We set up spam filters, malware protection, and encryption." },
    { question: "Can I access on mobile?", answer: "Fully—email, calendar & contacts on any device." },
    { question: "Need help later?", answer: "Our Lite IT Support is always available." }
  ]
};

// Helper function to find a service by its ID
export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
