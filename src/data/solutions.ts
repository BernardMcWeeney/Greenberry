// solutions.ts
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
}

export const solutions: Solution[] = [
  {
    id: "waas",
    type: "solution",
    title: "Website-as-a-Service (WaaS)",
    description:
      "All the building blocks plus ongoing care: site, domain, email, updates, SEO, security, and support.",
    icon: "fa-solid fa-layer-group",
    color: "indigo",
    borderColor: "border-t-indigo-500",
    textColor: "text-indigo-500",
    includes: [
      "website-build",
      "domain-management",
      "email-setup",
      "maintenance",
      "seo",
      "ai-content",
      "security-audit",
      "it-support"
    ],
    features: [
      "Complete website design & build",
      "Domain & DNS management",
      "Professional email setup",
      "Monthly updates & backups",
      "Local SEO & content coaching",
      "Security audits & patching",
      "On-demand IT support"
    ],
    link: "/solutions/waas",
    ctaText: "Subscribe to WaaS"
  },
  {
    id: "security",
    type: "solution",
    title: "Security Solution",
    description:
      "Deep-dive security and compliance audits plus ongoing patching and monitoring.",
    icon: "fa-solid fa-lock",
    color: "red",
    borderColor: "border-t-red-500",
    textColor: "text-red-500",
    includes: ["security-audit", "maintenance"],
    features: [
      "Vulnerability & compliance audit",
      "Monthly security patches",
      "GDPR & cookie policy review",
      "Email security configuration",
      "Monitoring & incident reporting"
    ],
    link: "/solutions/security",
    ctaText: "Secure My Site"
  },
  {
    id: "it-support-solution",
    type: "solution",
    title: "IT Support Solution",
    description:
      "Dedicated Lite IT Support for setups, troubleshooting, and cloud app management.",
    icon: "fa-solid fa-headset",
    color: "green",
    borderColor: "border-t-greenberry-500",
    textColor: "text-greenberry-500",
    includes: ["it-support", "email-setup", "domain-management"],
    features: [
      "Microsoft 365 & Google Workspace help",
      "Domain & email troubleshooting",
      "Cloud backup management",
      "Device onboarding & support",
      "Ad-hoc technical assistance"
    ],
    link: "/solutions/it-support",
    ctaText: "Get IT Support"
  },
  {
    id: "digital-essentials",
    type: "solution",
    title: "Digital Essentials Solution",
    description:
      "Core domain, email, and hosting setup—all the basics for a functioning online presence.",
    icon: "fa-solid fa-cogs",
    color: "purple",
    borderColor: "border-t-purple-500",
    textColor: "text-purple-500",
    includes: ["domain-management", "email-setup", "maintenance"],
    features: [
      "Domain registration & DNS",
      "Professional email setup",
      "SSL configuration",
      "Monthly maintenance & backups",
      "Renewal management"
    ],
    link: "/solutions/digital-essentials",
    ctaText: "Start Essentials"
  }
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find(s => s.id === id);
}