// Suites.ts
export interface Suite {
  id: string;
  type: "suite";
  title: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  textColor: string;
  includedSolutions: string[];
  sectorExtras: string[];
  features: string[];
  link: string;
  ctaText: string;
  targetSector: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  faqs?: Array<{ question: string; answer: string }>;
}

export const suites: Suite[] = [
  {
    id: "school-suite",
    type: "suite",
    title: "School Suite",
    description: "Complete digital solution tailored for educational institutions with child-safe integrations and staff portals.",
    icon: "fa-solid fa-school",
    color: "blue",
    borderColor: "border-t-blue-500",
    textColor: "text-blue-500",
    includedSolutions: ["website-solution", "security-solution", "support-solution"],
    sectorExtras: [
      "Child-safe media consent system",
      "Staff portal with secure login",
      "Absent note submission forms",
      "Teacher CPD session"
    ],
    features: [
      "School-specific website design",
      "GDPR-compliant student data handling",
      "Enhanced security measures for child protection",
      "Staff training and IT support",
      "Newsletter and announcement system",
      "Calendar integration for school events",
      "Media gallery with parental consent management"
    ],
    link: "/suites/school-suite",
    ctaText: "Get School Suite",
    targetSector: "Education",
    testimonial: {
      quote: "Greenberry understood our school's unique needs and delivered a secure, user-friendly website that our staff and parents love. Their ongoing support has been invaluable.",
      author: "Mary O'Sullivan",
      position: "Principal",
      company: "St. Patrick's National School"
    },
    faqs: [
      {
        question: "How do you handle student data protection?",
        answer: "We implement GDPR-compliant systems with strict access controls, data minimization practices, and proper consent management for student information."
      },
      {
        question: "Can parents submit forms through the website?",
        answer: "Yes, we create secure forms for absent notes, permission slips, and other communications that integrate with your administrative systems."
      },
      {
        question: "Do you provide training for our teachers?",
        answer: "Absolutely! We offer dedicated CPD sessions to ensure your staff can confidently manage content and utilize all digital tools effectively."
      }
    ]
  },
  {
    id: "parish-suite",
    type: "suite",
    title: "Parish Suite",
    description: "Digital presence and support customized for religious communities with livestream capabilities and donation systems.",
    icon: "fa-solid fa-place-of-worship",
    color: "purple",
    borderColor: "border-t-purple-500",
    textColor: "text-purple-500",
    includedSolutions: ["website-solution", "support-solution", "security-solution"],
    sectorExtras: [
      "Livestream service embed",
      "Online donations system",
      "Rota manager for volunteers",
      "Volunteer email accounts"
    ],
    features: [
      "Faith-focused website design",
      "Service times and special events calendar",
      "Secure donation processing",
      "Parish newsletter distribution",
      "Community announcement system",
      "Volunteer coordination tools",
      "Sermon/homily archive"
    ],
    link: "/suites/parish-suite",
    ctaText: "Get Parish Suite",
    targetSector: "Religious Organizations",
    testimonial: {
      quote: "The Parish Suite has transformed how we connect with our community. The livestream feature has been especially valuable for our homebound parishioners.",
      author: "Fr. Michael Byrne",
      position: "Parish Priest",
      company: "St. Mary's Parish"
    },
    faqs: [
      {
        question: "How does the livestreaming feature work?",
        answer: "We integrate with services like YouTube or Facebook Live, or can set up dedicated streaming hardware for higher quality broadcasts of services."
      },
      {
        question: "Is the donation system secure and compliant?",
        answer: "Yes, we implement PCI-compliant payment processing through trusted providers like Stripe, with options for one-time or recurring donations."
      },
      {
        question: "Can we manage different ministry sections on the website?",
        answer: "Absolutely! We structure the site with dedicated sections for each ministry, all manageable by assigned volunteers or staff."
      }
    ]
  },
  {
    id: "club-suite",
    type: "suite",
    title: "Club Suite",
    description: "Digital toolkit for sports and community clubs with membership management, fixtures integration, and sponsor showcases.",
    icon: "fa-solid fa-trophy",
    color: "green",
    borderColor: "border-t-green-500",
    textColor: "text-green-500",
    includedSolutions: ["website-solution", "support-solution", "security-solution"],
    sectorExtras: [
      "Fixtures and results feed",
      "Membership payments system",
      "Sponsor carousel display",
      "Pitch/facility Wi-Fi management"
    ],
    features: [
      "Team/club branding and colors",
      "Member registration system",
      "Match reports and photo galleries",
      "Committee and coach profiles",
      "Training schedule calendar",
      "Club merchandise online store",
      "Social media integration"
    ],
    link: "/suites/club-suite",
    ctaText: "Get Club Suite",
    targetSector: "Sports & Community Clubs",
    testimonial: {
      quote: "The Club Suite has revolutionized how we manage our GAA club. From fixtures to membership fees, everything is now streamlined and professional.",
      author: "Seamus O'Neill",
      position: "Club Secretary",
      company: "Drogheda Celtic GAA"
    },
    faqs: [
      {
        question: "Can we display live match scores?",
        answer: "Yes, we can integrate with sports data providers or set up simple score updating systems for your match officials to use."
      },
      {
        question: "How do you handle membership renewals?",
        answer: "We implement automated renewal reminders, online payment processing, and member dashboards to track status and benefits."
      },
      {
        question: "Can sponsors get analytics on their exposure?",
        answer: "Absolutely! We provide detailed reports on sponsor banner impressions, click-throughs, and engagement to demonstrate value."
      }
    ]
  },
  {
    id: "sme-suite",
    type: "suite",
    title: "SME Suite",
    description: "Practical digital foundation for small businesses with simplified quoting tools and local SEO optimization.",
    icon: "fa-solid fa-briefcase",
    color: "amber",
    borderColor: "border-t-amber-500",
    textColor: "text-amber-500",
    includedSolutions: ["website-solution", "support-solution"],
    sectorExtras: [
      "Simple quoting form system",
      "Google Business integration",
      "On-site device setup",
      "Basic SEO package"
    ],
    features: [
      "Professional business website",
      "Local SEO optimization",
      "Contact and enquiry management",
      "Product/service showcase",
      "Business email configuration",
      "Microsoft 365 or Google Workspace setup",
      "Basic IT support"
    ],
    link: "/suites/sme-suite",
    ctaText: "Get SME Suite",
    targetSector: "Small & Medium Businesses",
    testimonial: {
      quote: "As a small business owner, I needed a simple digital solution without the complexity. The SME Suite delivered exactly what I needed at a price I could afford.",
      author: "John Murphy",
      position: "Owner",
      company: "Murphy's Hardware"
    },
    faqs: [
      {
        question: "Is this package suitable for a new business?",
        answer: "Perfect for startups! We'll help establish your digital presence and provide the tools to grow, with an upgrade path as your business expands."
      },
      {
        question: "Can you help with setting up Google Business Profile?",
        answer: "Yes, we handle the full setup including verification, photos, services listing, and optimization for local search visibility."
      },
      {
        question: "What's included in the on-site device setup?",
        answer: "We'll configure your computers, network, printers, and business software to ensure everything works seamlessly together."
      }
    ]
  }
]