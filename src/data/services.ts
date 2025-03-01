// Define and export service offerings
export const services = [
    {
      id: "websites",
      title: "Website Solutions",
      description: "Modern and cutting-edge websites featuring responsive and lightweight designs that help your business stand out and convert visitors into customers.",
      icon: "fa-solid fa-globe",
      color: "blue",
      borderColor: "border-t-blue-500",
      textColor: "text-blue-500",
      features: [
        "Custom website design and development",
        "Mobile-responsive layouts",
        "Content management systems",
        "E-commerce solutions",
        "Performance optimization",
        "SEO-friendly architecture"
      ],
      link: "/services/websites",
      ctaText: "Explore Website Solutions"
    },
    {
      id: "maintenance",
      title: "Upgrades & Maintenance",
      description: "Keep your website secure, up-to-date, and performing at its best with our comprehensive maintenance packages.",
      icon: "fa-solid fa-arrows-rotate",
      color: "green",
      borderColor: "border-t-green-500", 
      textColor: "text-green-500",
      features: [
        "Regular software updates",
        "Security monitoring",
        "Daily backups",
        "Performance optimization",
        "Technical support",
        "Content updates"
      ],
      link: "/services/maintenance",
      ctaText: "Learn About Maintenance"
    },
    {
      id: "seo",
      title: "SEO Packages",
      description: "Improve your search engine rankings, drive more targeted traffic, and increase conversions with our data-driven SEO services.",
      icon: "fa-solid fa-magnifying-glass-chart",
      color: "orange",
      borderColor: "border-t-orange-500",
      textColor: "text-orange-500",
      features: [
        "Keyword research and optimization",
        "On-page SEO improvements",
        "Content strategy and creation",
        "Technical SEO audits",
        "Local SEO optimization",
        "Performance tracking and reporting"
      ],
      link: "/services/seo",
      ctaText: "Boost Your SEO"
    },
    {
      id: "email",
      title: "Email Solutions",
      description: "Professional email services that enhance your brand credibility, improve team collaboration, and ensure your important communications are secure.",
      icon: "fa-solid fa-envelope",
      color: "red",
      borderColor: "border-t-red-500",
      textColor: "text-red-500",
      features: [
        "Custom domain email addresses",
        "Spam and malware protection",
        "Mobile email access",
        "Shared calendars and contacts",
        "Email backup and recovery",
        "Seamless integration with other tools"
      ],
      link: "/services/email",
      ctaText: "Get Email Solutions"
    }
  ];
  
  // Export a function to get service by ID
  export function getServiceById(id: string) {
    return services.find(service => service.id === id);
  }