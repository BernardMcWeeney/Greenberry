// src/data/portfolioProjects.ts
// Define TypeScript interface for portfolio projects

export interface ProjectTestimonial {
  quote: string;
  author: string;
  position: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  completionDate: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results: string;
  testimonial: ProjectTestimonial;
  tags: string[];
}

// Sample portfolio projects data
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "duleek-bellewstown-parish",
    title: "Duleek-Bellewstown Parish Website",
    category: "Non-Profit",
    client: "Duleek-Bellewstown Parish",
    completionDate: "April 2020",
    description: "A brand new website built during COVID to help a parish connect with its community through weekly newsletters and updated mass times.",
    longDescription: "Duleek-Bellewstown Parish did not have an existing website prior to 2020. When the COVID-19 pandemic hit, the parish realised the urgency of having a digital presence to stay connected with their community. Greenberry provided a fast, simple, and easy-to-manage website that became a vital communication channel for the church.\n\nThe website showcases weekly parish newsletters, up-to-date mass times, and other important community information. It is updated regularly by the parish team, who benefit from full support and maintenance from Greenberry to ensure nothing breaks and everything runs smoothly.",
    image: "/projects/duleek-parish/cover.jpg",
    gallery: [
      "/projects/duleek-parish/1.jpg",
      "/projects/duleek-parish/2.jpg",
      "/projects/duleek-parish/3.jpg",
      "/projects/duleek-parish/4.jpg"
    ],
    challenge: "No existing website and no technical staff available. The parish needed a site that was easy to update and wouldn’t require technical maintenance on their end.",
    solution: "We designed and built a user-friendly website with weekly content sections for mass times and newsletters, along with full ongoing support from our team.",
    results: "The parish website became a central source of communication during the pandemic, with regular updates keeping parishioners informed and engaged.",
    testimonial: {
      quote: "We never had a website before, and now it’s one of the most important ways we keep in touch with the parish. Greenberry made the process incredibly easy for us.",
      author: "Fr. Mark English",
      position: "Parish Priest, Duleek-Bellewstown Parish"
    },
    tags: ["COVID Response", "WordPress", "Newsletter Integration", "Mass Times", "Technical Support"]
  },
  {
    id: "bellewstown-golf-club",
    title: "Bellewstown Golf Club Website",
    category: "Sports & Leisure",
    client: "Bellewstown Golf Club",
    completionDate: "October 2021",
    description: "Website migration and redesign for a busy golf club with 24/7 tee time booking, business email setup, and ongoing technical support.",
    longDescription: "Bellewstown Golf Club’s previous website provider went out of business, leaving the club with an outdated, unsupported site. Greenberry stepped in to take over hosting, redesign the site, and ensure 24/7 uptime for their essential online tee time booking system.\n\nWe migrated the site securely, updated it with modern security standards, and provided the club with branded business email addresses. Our team continues to provide fast technical support to ensure the club’s website is always live and reliable.",
    image: "/projects/bellewstown-golf/cover.jpg",
    gallery: [
      "/projects/bellewstown-golf/1.jpg",
      "/projects/bellewstown-golf/2.jpg",
      "/projects/bellewstown-golf/3.jpg",
      "/projects/bellewstown-golf/4.jpg"
    ],
    challenge: "The golf club was left unsupported with an out-of-date site and no access to hosting, leaving them vulnerable and without the ability to manage tee bookings.",
    solution: "We migrated the site, rebuilt it with a modern design and security in mind, and ensured reliable hosting with 24/7 uptime and dedicated support.",
    results: "The club regained full control of their site and operations, with a stable and secure platform powering their daily bookings and communications.",
    testimonial: {
      quote: "Greenberry rescued us when we were left in the lurch. The site works flawlessly, and we always know someone is there if we need help.",
      author: "Michael Leonard",
      position: "Owner, Bellewstown Golf Club"
    },
    tags: ["Website Migration", "24/7 Hosting", "Business Email", "WordPress", "Support Services"]
  },
  {
    id: "stmarys-parish-drogheda",
    title: "St. Mary’s Parish Website Redesign",
    category: "Non-Profit",
    client: "St. Mary’s Parish, Drogheda",
    completionDate: "January 2024",
    description: "A complete redesign and migration of an outdated parish website to a modern, content-rich WordPress CMS with custom APIs.",
    longDescription: "St. Mary’s Parish had an outdated PHP-based website that, while functional, lacked the features modern parishioners expect. Greenberry delivered a complete redesign and migration to a flexible WordPress CMS. We built a custom API that dynamically fetches and displays daily mass readings, saints of the day, feast day content, and Sunday homilies.\n\nThe result is a modern, mobile-friendly site packed with dynamic spiritual content and parish updates, ensuring parishioners have access to rich, relevant information every day.",
    image: "/projects/stmarys/cover.jpg",
    gallery: [
      "/projects/stmarys/1.jpg",
      "/projects/stmarys/2.jpg",
      "/projects/stmarys/3.jpg",
      "/projects/stmarys/4.jpg"
    ],
    challenge: "The existing PHP website was outdated, difficult to update, and lacked modern content features required by a large parish.",
    solution: "We migrated the content to WordPress, refreshed the entire design, and built a custom API to deliver dynamic liturgical content daily.",
    results: "The new site has seen increased engagement and reduced maintenance overhead for the parish team, while giving parishioners timely access to spiritual content.",
    testimonial: {
      quote: "Greenberry gave our website a complete rebirth. The custom content features have been a blessing for our community.",
      author: "Fr. John Conlon",
      position: "Parish Priest, St. Mary’s Drogheda"
    },
    tags: ["Migration", "WordPress", "Custom API", "Daily Readings", "Liturgical Content"]
  },
  {
    id: "duleek-community-facility",
    title: "Duleek Community Facility",
    category: "Community & Non-Profit",
    client: "Duleek Community Facility",
    completionDate: "December 2021",
    description: "A fast-launch website with a custom group directory, events calendar, and full email support for a busy community centre.",
    longDescription: "Duleek Community Facility needed a website to represent their many clubs, events, and initiatives. Greenberry delivered a quick-turnaround project with a beautiful, modern design, integrated email system, and a custom-built group directory to showcase the variety of organisations using the centre.\n\nThe site features a calendar of community activities and a visual layout for browsing local clubs and services. As a non-profit, they appreciated Greenberry’s full support offering and ongoing assistance with updates, content changes, and hosting.",
    image: "/projects/duleek-facility/cover.jpg",
    gallery: [
      "/projects/duleek-facility/1.jpg",
      "/projects/duleek-facility/2.jpg",
      "/projects/duleek-facility/3.jpg",
      "/projects/duleek-facility/4.jpg"
    ],
    challenge: "The client needed a beautiful and functional website built quickly to showcase their growing community and events, with little technical expertise in-house.",
    solution: "We created a user-friendly WordPress site with a club directory, events calendar, and full email and hosting support.",
    results: "The website serves as a central hub for the community, with frequent updates and widespread use by local groups and residents.",
    testimonial: {
      quote: "The site is exactly what our community needed. Greenberry delivered it quickly and continues to support us every step of the way.",
      author: "Graham Byrne",
      position: "Chairperson, Duleek Community Facility"
    },
    tags: ["Community Directory", "Events Calendar", "WordPress", "Non-Profit", "Email Setup"]
  },
  {
    id: "mount-hanover-ns",
    title: "Mount Hanover National School",
    category: "Education",
    client: "Mount Hanover National School",
    completionDate: "April 2020",
    description: "A school website built during COVID to provide a digital hub for parents, with a custom enrolment form and full support.",
    longDescription: "During the uncertainty of the COVID-19 pandemic, Mount Hanover NS needed a reliable website to keep parents and guardians informed. Greenberry delivered a clear, professional site that became a focal point for school communication.\n\nWe built a custom online enrolment form tailored to the school’s admissions process, helping streamline paperwork during lockdown. The school team received full training and support, and the website has since become an essential platform for distributing newsletters, policies, calendar dates, and more.",
    image: "/projects/mount-hanover/cover.jpg",
    gallery: [
      "/projects/mount-hanover/1.jpg",
      "/projects/mount-hanover/2.jpg",
      "/projects/mount-hanover/3.jpg",
      "/projects/mount-hanover/4.jpg"
    ],
    challenge: "The school had no real digital presence and needed a dependable, easy-to-use site to connect with families during a period of uncertainty.",
    solution: "We created a professional WordPress site with a custom enrolment form, training materials, and full ongoing support for staff.",
    results: "The website became the school’s main communication channel, helping streamline enrolments and keep families connected during COVID and beyond.",
    testimonial: {
      quote: "Greenberry gave us a brilliant website that we could rely on during COVID. Parents use it every week and the enrolment form has saved so much time.",
      author: "Lorraine O’Loughlin",
      position: "Principal - Mount Hanover NS"
    },
    tags: ["Education", "Custom Forms", "COVID Response", "WordPress", "Parental Communication"]
  },  
  {
    id: "boa-dress-hire",
    title: "BOA Dress Hire",
    category: "E-Commerce",
    client: "BOA Dress Hire",
    completionDate: "September 2022",
    description: "Ireland’s first online dress rental e-commerce platform, with full SEO and business email setup.",
    longDescription: "BOA Dress Hire is a fashion-forward Irish business run by four sisters who wanted to make sustainable style accessible through online dress rental. Greenberry built a complete e-commerce platform with a seamless rental process, stock calendar, and size filtering system.\n\nWe also set up professional business emails, configured an SEO package, and ensured the site was mobile-friendly for fashion shoppers on the go. BOA has since become a leader in Irish fashion rental, offering hundreds of dresses through a modern online experience.",
    image: "/projects/boa-dress/cover.jpg",
    gallery: [
      "/projects/boa-dress/1.jpg",
      "/projects/boa-dress/2.jpg",
      "/projects/boa-dress/3.jpg",
      "/projects/boa-dress/4.jpg"
    ],
    challenge: "No existing e-commerce platform in Ireland offered dress rental. BOA needed a system that handled short-term rentals, calendar-based availability, and stock control.",
    solution: "We developed a custom WooCommerce solution tailored for rental workflows, with email, SEO, and ongoing support built in.",
    results: "BOA Dress Hire saw rapid growth post-launch and became one of Ireland’s leading online fashion rental services.",
    testimonial: {
      quote: "We couldn’t have launched without Greenberry. They understood the fashion rental business straight away and delivered exactly what we needed.",
      author: "Seána Brady",
      position: "Owner, BOA Dress Hire"
    },
    tags: ["E-Commerce", "WooCommerce", "Rental System", "SEO", "Business Email"]
  },
  {
    id: "issc-vancouver",
    title: "ISSC Vancouver GAA Club",
    category: "Sports Club",
    client: "ISSC Vancouver",
    completionDate: "Feburary 2025",
    description: "A secure, mobile-friendly GAA club website with full site redesign and ongoing support after a previous hosting hack.",
    longDescription: "ISSC Vancouver approached Greenberry after a serious hack of their old website left them vulnerable. We immediately migrated the site to our secure infrastructure, patched vulnerabilities, and delivered a full redesign that better reflected the club’s identity.\n\nWe implemented a full site editing experience for the PRO, giving them control to post updates and content without needing technical help. The site is mobile-friendly, fast, and fully supported by Greenberry’s team. It now serves as a trusted hub for fixtures, news, and club info in Vancouver.",
    image: "/projects/issc-vancouver/cover.jpg",
    gallery: [
      "/projects/issc-vancouver/1.jpg",
      "/projects/issc-vancouver/2.jpg",
      "/projects/issc-vancouver/3.jpg",
      "/projects/issc-vancouver/4.jpg"
    ],
    challenge: "The club’s previous hosting provider had been compromised, and the team needed a secure, easy-to-manage solution they could trust.",
    solution: "We migrated the website securely, redesigned it with modern club branding, and enabled full on-site editing for the public relations officer.",
    results: "The new website is secure, actively updated by the club, and praised for its speed, design, and reliability.",
    testimonial: {
      quote: "Greenberry delivered big time. We have peace of mind now and the site looks fantastic — plus we can update it ourselves with ease.",
      author: "Niall Anglim",
      position: "Chairperson, ISSC Vancouver"
    },
    tags: ["Secure Hosting", "WordPress", "Club Website", "Migration", "Self-Editing CMS"]
  },
  {
    id: "oldcastle-moylagh-parish",
    title: "Oldcastle & Moylagh Parish Website",
    category: "Non-Profit",
    client: "Oldcastle & Moylagh Parish",
    completionDate: "August 2023",
    description: "A modern parish website with online donation facilities, social media integration, and centralised communication hub.",
    longDescription: "Oldcastle & Moylagh Parish wanted a digital presence that would support online giving and act as a central hub for parish communications. Greenberry built a clean, easy-to-manage WordPress site that includes integrated online donations and live mass schedules.\n\nThe site connects directly with the parish’s Facebook and Instagram accounts, making it a true hub-and-spoke system – content is published once and flows out to social platforms automatically. With full Greenberry support, the parish can focus on their mission while we handle the technical side.",
    image: "/projects/oldcastle-parish/cover.jpg",
    gallery: [
      "/projects/oldcastle-parish/1.jpg",
      "/projects/oldcastle-parish/2.jpg",
      "/projects/oldcastle-parish/3.jpg",
      "/projects/oldcastle-parish/4.jpg"
    ],
    challenge: "The parish needed to introduce online donations and improve communication with parishioners, without taking on any technical overhead.",
    solution: "We created a modern site with secure donation functionality and tight integration with their existing social media channels.",
    results: "Online donations are now a key part of parish income, and the website is regularly visited for mass times, newsletters, and news updates.",
    testimonial: {
      quote: "This website has been a fantastic addition to our parish. It’s simple to update, connects beautifully with our social channels, and the donation system works perfectly.",
      author: "Fr. Mark Mohan",
      position: "Parish Priest, Oldcastle & Moylagh Parish"
    },
    tags: ["Donations", "Social Media Integration", "WordPress", "Parish Website", "Support"]
  },
  {
    id: "vancouver-gaa",
    title: "Vancouver GAA Website",
    category: "Sports Club",
    client: "Vancouver GAA",
    completionDate: "June 2024",
    description: "A fast, modern site for Vancouver GAA with custom sports plugin, directory of services, and full Greenberry support.",
    longDescription: "Greenberry developed a robust new website for Vancouver GAA, featuring a clean design and custom-built sports plugin for displaying fixtures, results, and tables. The site also includes a directory of affiliated services and sponsors.\n\nIt’s mobile-optimised and fully content-managed, allowing the Public Relations Officer to quickly publish results, club news, and key information. The project was praised internally for both its aesthetics and ease of use – and backed by ongoing Greenberry support and hosting.",
    image: "/projects/vancouver-gaa/cover.jpg",
    gallery: [
      "/projects/vancouver-gaa/1.jpg",
      "/projects/vancouver-gaa/2.jpg",
      "/projects/vancouver-gaa/3.jpg",
      "/projects/vancouver-gaa/4.jpg"
    ],
    challenge: "The club needed a modern site to display fixtures and results dynamically, and make club information accessible to players, members, and the public.",
    solution: "We built a WordPress site with a custom plugin for sports results and fixtures, plus a sponsor/service directory, all mobile-optimised.",
    results: "The website is now the go-to source of information for Vancouver GAA members, praised for design and functionality.",
    testimonial: {
      quote: "It’s hands down the best version of the Vancouver GAA website we’ve ever had. The fixtures system and club directory are game changers.",
      author: "Bernard",
      position: "PRO, Vancouver GAA"
    },
    tags: ["Custom Plugin", "Sports Results", "Responsive Design", "WordPress", "Support"]
  },
  {
    id: "moynalvey-ns",
    title: "Moynalvey National School",
    category: "Education",
    client: "Moynalvey NS",
    completionDate: "May 2023",
    description: "A user-friendly primary school website with Google Photos integration, security updates, and full documentation.",
    longDescription: "Moynalvey NS wanted a safe, professional website to showcase school life and provide key info to parents. Greenberry delivered a tailored solution with built-in support and an ongoing maintenance plan.\n\nWe integrated the school’s existing Google Photos albums to make it easy to share student activity photos without re-uploading. The site is backed by our frequent security updates, DNS record management, and full documentation for staff to manage and edit content with confidence.",
    image: "/projects/moynalvey-ns/cover.jpg",
    gallery: [
      "/projects/moynalvey-ns/1.jpg",
      "/projects/moynalvey-ns/2.jpg",
      "/projects/moynalvey-ns/3.jpg",
      "/projects/moynalvey-ns/4.jpg"
    ],
    challenge: "The school needed a secure, reliable, and easy-to-update website that worked well with Google services and provided regular updates.",
    solution: "We built a custom WordPress site with Google Photos integration and a focus on ease-of-use, backed by full support and proactive updates.",
    results: "The site is now a dependable resource for parents, regularly updated and maintained with zero technical hassle for the school staff.",
    testimonial: {
      quote: "The site has been brilliant. It’s easy to use, secure, and the Greenberry team are always there when we need them.",
      author: "Maura Dineen",
      position: "Principal - Moynalvey NS"
    },
    tags: ["Education", "Google Photos", "Security Updates", "Support", "Documentation"]
  },
  {
    id: "ballivor-kildalkey-parish",
    title: "Ballivor & Kildalkey Parish Website",
    category: "Non-Profit",
    client: "Ballivor & Kildalkey Parish",
    completionDate: "March 2022",
    description: "A simple and secure parish website with an easy editing experience and direct contact features.",
    longDescription: "Ballivor & Kildalkey Parish needed a user-friendly site that was easy to update without technical expertise. Greenberry created a clean, accessible WordPress website with a strong focus on simplicity, security, and reliability.\n\nA key feature is the parish contact form, which allows parishioners to reach out directly with requests or queries. Greenberry also provided security hardening and updates to protect the site from common web threats. With full support available, the parish team can confidently manage the site day-to-day.",
    image: "/projects/ballivor-parish/cover.jpg",
    gallery: [
      "/projects/ballivor-parish/1.jpg",
      "/projects/ballivor-parish/2.jpg",
      "/projects/ballivor-parish/3.jpg",
      "/projects/ballivor-parish/4.jpg"
    ],
    challenge: "The parish needed a secure and simple website that could be updated by non-technical users while protecting parishioner information.",
    solution: "We built a straightforward WordPress site with an easy editing interface and hardened security features, including CAPTCHA and spam filtering.",
    results: "The parish team now confidently manages their site in-house, with full support from Greenberry if anything goes wrong.",
    testimonial: {
      quote: "Greenberry made everything easy. The site is safe, clean, and simple to run – exactly what we needed.",
      author: "Fr Ciarán Clarke",
      position: "Parish Curate, Ballivor & Kildalkey"
    },
    tags: ["Parish Website", "Simple CMS", "Contact Form", "Security", "Support"]
  },
  {
    id: "vancouver-lecheile",
    title: "Vancouver Le Chéile",
    category: "Sports Club",
    client: "Vancouver Le Chéile",
    completionDate: "2025",
    description: "A mobile-first website for a juvenile GAA club, highlighting youth programmes, events, and club values.",
    longDescription: "Le Chéile GAA Vancouver needed a digital home for their vibrant youth GAA community. The emphasis was on mobile-friendly design, allowing parents and players to access fixtures, registration info, and club news on the go.\n\nGreenberry delivered a sleek, responsive site that showcases the work the club does to teach Gaelic Games to kids in Vancouver. The website includes sections for team schedules, club initiatives, and news, all easily managed by the club’s admin team. With full support, the club can stay focused on sport – not web maintenance.",
    image: "/projects/lecheile-vancouver/cover.jpg",
    gallery: [
      "/projects/lecheile-vancouver/1.jpg",
      "/projects/lecheile-vancouver/2.jpg",
      "/projects/lecheile-vancouver/3.jpg",
      "/projects/lecheile-vancouver/4.jpg"
    ],
    challenge: "The club needed a clean, responsive website with minimal admin overhead that parents could easily access on mobile.",
    solution: "We built a lightweight, mobile-first WordPress site with simple content management and full hosting and support included.",
    results: "The site has made it easier for parents to engage with club activities, with traffic driven mainly by mobile users.",
    testimonial: {
      quote: "Greenberry built a brilliant website for our club. It’s perfect for parents and players, and super easy to use.",
      author: "Lily",
      position: "Public Relations Officer, Vancouver Le Chéile"
    },
    tags: ["Mobile-First", "Youth Sport", "WordPress", "Club Website", "Support"]
  },  
  {
    id: "cudden-preconstruction",
    title: "Cudden Preconstruction",
    category: "Business & Professional",
    client: "Cudden Preconstruction",
    completionDate: "2023",
    description: "A fast, professional website for a construction consultancy with custom contact form, SEO, and branded email setup.",
    longDescription: "Cudden Preconstruction needed a polished online presence to showcase their construction consultancy services. Greenberry built a fast-loading, professional site with clear messaging, a custom contact form, and SEO structure to ensure discoverability.\n\nWe also provided a branded business email setup and managed DNS configuration. The site is easy to manage, and Greenberry continues to provide reliable support and updates for peace of mind.",
    image: "/projects/cudden/cover.jpg",
    gallery: [
      "/projects/cudden/1.jpg",
      "/projects/cudden/2.jpg",
      "/projects/cudden/3.jpg",
      "/projects/cudden/4.jpg"
    ],
    challenge: "The business needed a sharp, professional site with fast turnaround and full technical support, including domain, email, and SEO.",
    solution: "We delivered a streamlined WordPress site with optimised SEO, a custom contact form, and full business email package.",
    results: "Cudden Preconstruction now has a credible and secure online presence, ready to grow and serve clients more effectively.",
    testimonial: {
      quote: "We needed everything sorted — site, email, search presence — and Greenberry handled the lot. Delighted with the result.",
      author: "Oliver Cudden",
      position: "Founder, Cudden Preconstruction"
    },
    tags: ["Business Website", "Contact Form", "Email Setup", "SEO", "Fast Turnaround"]
  },

];