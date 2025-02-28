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
    id: "modern-restaurant-website",
    title: "Modern Restaurant Website",
    category: "Website Design",
    client: "La Maison Restaurant",
    completionDate: "June 2023",
    description: "A modern website for a high-end restaurant in Dublin featuring online reservations, menu showcase, and event booking.",
    longDescription: "We designed and developed a comprehensive digital solution for La Maison, one of Dublin's premier French restaurants. The website features an elegant design that mirrors the restaurant's sophisticated ambiance while providing practical functionality for customers and staff alike.\n\nThe responsive website includes an intuitive online reservation system, interactive menu displays with beautiful food photography, and a custom events management system for the restaurant's popular private dining experiences. Additional features include integration with social media platforms, customer review displays, and a newsletter signup to enhance customer engagement.",
    image: "/hero.png", // Using an existing image as placeholder
    gallery: [
      "/hero.png", 
      "/hero.png",
      "/hero.png",
      "/hero.png"
    ],
    challenge: "The client needed a website that could handle high-volume booking requests during peak seasons while maintaining an aesthetically pleasing design that reflected their brand identity.",
    solution: "We developed a custom booking system that seamlessly integrates with their existing reservation management software, while focusing on an elegant, responsive design that showcases their culinary offerings through high-quality imagery.",
    results: "Since launching the new website, La Maison has seen a 45% increase in online reservations and a 30% decrease in booking-related phone calls, allowing staff to focus more on in-restaurant customer service.",
    testimonial: {
      quote: "Greenberry transformed our digital presence with a website that truly represents our brand. The online booking feature has streamlined our operations significantly.",
      author: "Marie Dupont",
      position: "Owner, La Maison Restaurant"
    },
    tags: ["UI/UX Design", "WordPress", "Custom Booking System", "Menu Management", "SEO"]
  },
  {
    id: "ecommerce-fashion-store",
    title: "Irish Fashion Boutique", 
    category: "E-Commerce",
    client: "Emerald Threads",
    completionDate: "August 2023",
    description: "A complete e-commerce solution for a local fashion boutique featuring product catalog, secure checkout, and inventory management.",
    longDescription: "Emerald Threads came to us needing a comprehensive e-commerce solution that would enable them to transition from a purely brick-and-mortar operation to having a significant online presence. We developed a custom e-commerce platform that showcases their unique clothing lines and accessories while providing a seamless shopping experience for their customers.\n\nThe website features a sophisticated product catalog with detailed filtering options, integrated size guides, and high-quality product photography. We implemented a secure checkout process with multiple payment options, real-time shipping calculations, and order tracking. The back-end includes a robust inventory management system that synchronizes online sales with in-store stock levels.",
    image: "/hero.png", // Using an existing image as placeholder
    gallery: [
      "/hero.png", 
      "/hero.png",
      "/hero.png",
      "/hero.png"
    ],
    challenge: "The boutique needed to take their unique in-store shopping experience online while maintaining their brand identity and managing inventory across both physical and digital storefronts.",
    solution: "We created a visually stunning e-commerce platform with advanced inventory synchronization between physical and online stores, ensuring a consistent shopping experience regardless of channel.",
    results: "Within three months of launch, online sales accounted for 35% of total revenue, with a 25% increase in average order value compared to in-store purchases.",
    testimonial: {
      quote: "The team at Greenberry understood exactly what we needed. Our online store has opened up new markets for us and perfectly complements our physical boutique.",
      author: "Sarah O'Connor",
      position: "Founder, Emerald Threads"
    },
    tags: ["E-Commerce", "WooCommerce", "Payment Gateway", "Inventory Management", "Product Catalog"]
  },
  {
    id: "legal-services-website",
    title: "Legal Services Firm",
    category: "Professional Services",
    client: "Murphy & Associates",
    completionDate: "October 2023",
    description: "A professional website for a Dublin-based law firm with service information, attorney profiles, and client testimonials.",
    longDescription: "Murphy & Associates, a leading Dublin law firm, needed a website that would reflect their professionalism and expertise while making their services more accessible to potential clients. We created a sophisticated yet user-friendly website that effectively communicates their legal expertise and commitment to client service.\n\nThe website features a clean, intuitive design with detailed information about practice areas, comprehensive attorney profiles, and a curated selection of client testimonials. We implemented a secure contact system for client inquiries and a knowledge center with regularly updated legal resources and blog articles to demonstrate the firm's expertise and improve SEO.",
    image: "/hero.png",
    gallery: [
      "/hero.png",
      "/hero.png",
      "/hero.png",
      "/hero.png"
    ],
    challenge: "The law firm needed to modernize their online presence while maintaining a professional image that would instill trust in potential clients searching for legal services.",
    solution: "We developed a website with an authoritative yet accessible design, featuring attorney profiles with professional photography, detailed practice area descriptions, and an easy-to-use contact system.",
    results: "The new website led to a 60% increase in qualified leads and a significant improvement in search engine rankings for key legal service keywords in the Dublin area.",
    testimonial: {
      quote: "Our new website perfectly balances professionalism with accessibility. Greenberry truly understood our need to appear authoritative while still being approachable to potential clients.",
      author: "James Murphy",
      position: "Managing Partner, Murphy & Associates"
    },
    tags: ["Responsive Design", "Content Strategy", "SEO", "Attorney Profiles", "Legal Resources"]
  },
  {
    id: "fitness-studio-platform",
    title: "Fitness Studio Platform",
    category: "Health & Wellness",
    client: "Elevate Fitness",
    completionDate: "January 2024",
    description: "A comprehensive website for a fitness studio with class scheduling, membership management, and instructor profiles.",
    longDescription: "Elevate Fitness approached us to create a comprehensive digital platform that would streamline their operations and enhance the client experience. The result is a modern, user-friendly website that effectively showcases their offerings while providing powerful functionality.\n\nThe platform features a sophisticated class booking system that synchronizes with instructors' schedules, a secure membership portal where clients can manage their accounts and track progress, and detailed instructor profiles with specializations and availability. We also integrated a blog section for fitness tips and studio news, along with a nutrition planning tool to provide added value to members.",
    image: "/hero.png",
    gallery: [
      "/hero.png",
      "/hero.png",
      "/hero.png",
      "/hero.png"
    ],
    challenge: "The studio needed a unified platform to replace their fragmented systems for class booking, membership management, and marketing, while improving the client experience.",
    solution: "We developed an integrated platform with real-time class booking, membership management, client progress tracking, and marketing tools, all with a mobile-first approach for on-the-go access.",
    results: "Class attendance increased by 35% within two months, administrative time decreased by 70%, and membership renewals improved by 25% thanks to the improved client experience.",
    testimonial: {
      quote: "The platform Greenberry created has revolutionized how we run our studio. Our clients love the ease of booking classes through the app, and our team has saved countless hours on administrative tasks.",
      author: "Lisa Kelly",
      position: "Owner, Elevate Fitness"
    },
    tags: ["Custom Booking System", "Membership Management", "Mobile-First", "Progress Tracking", "Instructor Scheduling"]
  },
  {
    id: "property-management-system",
    title: "Property Management System",
    category: "Real Estate",
    client: "Dublin City Properties",
    completionDate: "November 2023",
    description: "A property management platform for a real estate agency with property listings, client portal, and lead management.",
    longDescription: "Dublin City Properties needed a comprehensive digital solution to manage their growing portfolio of properties and improve communication with both property owners and potential buyers. We developed a custom property management system that streamlines their operations and enhances the client experience.\n\nThe platform includes an advanced property listing section with detailed filtering, virtual tours, and neighborhood information. Property owners can access a secure portal to view reports, maintenance requests, and financial information. Potential buyers can save favorite properties, schedule viewings, and receive personalized property alerts. On the backend, the agency team has powerful tools for lead management, reporting, and marketing automation.",
    image: "/hero.png",
    gallery: [
      "/hero.png",
      "/hero.png",
      "/hero.png",
      "/hero.png"
    ],
    challenge: "The agency was struggling to manage their growing property portfolio with outdated systems, causing inefficiencies and limiting their ability to provide timely service to clients.",
    solution: "We created a comprehensive property management platform with separate portals for staff, property owners, and buyers/renters, featuring automated workflows and real-time updates.",
    results: "The agency reported a 40% reduction in administrative time, a 30% increase in lead conversion rates, and significantly improved client satisfaction scores after implementation.",
    testimonial: {
      quote: "This system has transformed our business. We can now manage twice the property portfolio with the same team size, and both our property owners and clients are delighted with the improved communication and efficiency.",
      author: "Michael O'Brien",
      position: "Director, Dublin City Properties"
    },
    tags: ["Custom CRM", "Property Search", "Lead Generation", "Owner Portal", "Virtual Tours"]
  },
  {
    id: "craft-brewery-website",
    title: "Irish Craft Brewery",
    category: "Food & Beverage",
    client: "Celtic Brew Co.",
    completionDate: "September 2023",
    description: "A vibrant website for a local craft brewery featuring product showcase, brewery tour booking, and event calendar.",
    longDescription: "Celtic Brew Co., an up-and-coming craft brewery in County Wicklow, approached us to create a website that would showcase their unique brewing process and help them connect with craft beer enthusiasts. We designed a visually striking website that embodies their brand personality while providing practical functionality.\n\nThe website features an immersive product showcase with detailed descriptions of their beer range, including tasting notes, ingredients, and food pairings. Visitors can book brewery tours online, view the upcoming events calendar, and locate retailers and pubs that stock Celtic Brew products. We also implemented an age verification system, an online shop for merchandise, and integration with social media platforms to build community engagement.",
    image: "/hero.png",
    gallery: [
      "/hero.png",
      "/hero.png",
      "/hero.png",
      "/hero.png"
    ],
    challenge: "The brewery needed to establish a strong online identity that would showcase their craft brewing credentials while facilitating brewery tourism and building a community around their brand.",
    solution: "We created a visually rich website with detailed product storytelling, an interactive brewery tour booking system, and an events calendar, all designed to highlight the craft and personality behind the brand.",
    results: "Brewery tour bookings increased by 85% within three months, online merchandise sales exceeded projections by 120%, and their newsletter subscription list grew tenfold.",
    testimonial: {
      quote: "Greenberry delivered exactly what we needed - a website that shows the passion and craft behind our beers. The response has been phenomenal, with tour bookings and merchandise sales far exceeding our expectations.",
      author: "Brian Fitzgerald",
      position: "Founder & Head Brewer, Celtic Brew Co."
    },
    tags: ["Brand Identity", "E-commerce", "Events Calendar", "Location Map", "Tour Booking"]
  }
];