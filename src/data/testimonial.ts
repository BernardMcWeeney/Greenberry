interface Testimonial {
  quote: string;
  author: string;
  position?: string;
  company?: string;
  avatar?: string;
  website?: string;
  verified?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote: "I asked Bernard to design a website for my new business in 2021. From the outset Bernard was very helpful and professional. I asked for a number of changes, none of which were a problem for him and were changed very quickly. The look and feel of the website has been complimented by a number of my clients and I was more than happy to pass on Bernard's contact details to them. Bernard has always been available when I have approached him for assistance and ongoing support. Oliver Cudden",
    author: "Oliver Cudden",
    position: "Founder",
    company: "Cudden Pre-Construction",
    website: "cuddenpreconstruction.ie",
    avatar: "/testimonal/olivercudden.png", // Added avatar path
    verified: true
  },
  {
    quote: "Working with Bernard from Greenberry was a fantastic experience. He built a fast, user-friendly, and fully customized website for Vancouver GAA, providing excellent support throughout. His attention to detail and expertise made the process seamless, and club members have been thrilled with the result. We highly recommend Greenberry for top-quality web development!",
    author: "Vancouver GAA",
    position: "Public Relation Officer",
    company: "Vancouver GAA",
    website: "vancouvergaa.com",
    avatar: "/testimonal/vancouvergaa.png", // Added avatar path
    verified: true
  },
  {
    quote: "Bernard from Greenberry has been an invaluable partner for Bellewstown Golf Club. He didn't just build us a great website—he provides ongoing support for a wide range of technical needs. Whether it's website updates, troubleshooting, or IT assistance, he's always just a phone call or email away. His expertise, reliability, and dedication have made him a pleasure to work with, and we truly appreciate his commitment to keeping everything running smoothly. We highly recommend Greenberry to anyone looking for top-notch web and tech support.",
    author: "Michael Leonard",
    position: "Owner",
    company: "Bellewstown Golf Club",
    website: "bellewstowngolfclub.ie",
    avatar: "/testimonal/michaelleonard.png", // Added avatar path
    verified: true
  },
  {
    quote: "Bernard was just great he is very professional and he knew exactly what we wanted and needed. He helped us tremendously during covid-19. Bernard created a website for the parish of Duleek and Bellewstown and I still get compliments about it to this day. I have no hesitation in recommending Bernard to anyone. Thanks. Fr. John Conlon",
    author: "Fr. John Conlon",
    position: "Parish Priest",
    company: "Duleek and Bellewstown Parish",
    website: "duleekbellewstownparish.com",
    avatar: "/testimonal/johnconlon.png", // Added avatar path
    verified: true
  },
  {
    quote: "It was great to have Bernard come onboard and design our website. A very professional approach to development, design and implementation. Very strategic and engaging. I can highly recommend Bernard for any business or project. Graham Byrne | Director DBDC Partnership Facility CLG",
    author: "Graham Byrne",
    position: "Director DBDC Partnership Facility CLG",
    company: "Duleek Community Facility",
    website: "duleekcommunityfacility.ie",
    avatar: "/testimonal/grahambyrne.png", // Added avatar path
    verified: true
  },
  {
    quote: "Bernard provides a professional service and has been a huge support since the installation of the parish website. Many parishioners have complimented upon the website design and how easy the website is to use. Indeed local schools and other parishes have been referred to Bernard and we would have no hesitation in recommending Bernard to anyone. The website is always available and is user friendly for uploading information. Fr. Mark English",
    author: "Fr. Mark English",
    position: "Parish Administrator",
    company: "Donore & Rossnaree Parish",
    website: "donorerossnareeparish.com",
    avatar: "/testimonal/frmarkenglish.png", // Added avatar path
    verified: true
  },
  {
    quote: "Bernard was fantastic to work with. He is highly competent, professional and knowledgeable. Our website is so professional and easy to use. It was a pleasure working with Bernard. I would highly recommend Greenberry.",
    author: "Mary-Rita Fox",
    position: "Founder",
    company: "Fox Dress Hire",
    website: "foxdresshire.ie",
    avatar: "/testimonal/foxdresshire.png", // Added avatar path
    verified: true
  },
  {
    quote: "I highly recommend Bernard (and Greenberry) for his exceptional support and excellent website design. He has provided us with an outstanding website which we love to use. Our website's speed and user-friendliness, as well as hassle-free management speak volumes about his expertise. Bernard is always available. I can confidently recommend Bernard and Greenberry for any web development project.",
    author: "Office Secretary",
    position: "Parish Secretary",
    company: "Ballivor Kildalkey Parish",
    website: "ballivorkildalkey.ie",
    avatar: "/testimonal/ballivorkildalkey.png", // Added avatar path
    verified: true
  }
];

export default testimonials;