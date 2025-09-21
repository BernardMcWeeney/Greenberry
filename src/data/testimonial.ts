export interface Testimonial {
  id: number;
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
    id: 1,
    quote: "I asked Bernard to design a website for my new business in 2021. From the outset Bernard was very helpful and professional. I asked for a number of changes, none of which were a problem for him and were changed very quickly. The look and feel of the website has been complimented by a number of my clients and I was more than happy to pass on Bernard's contact details to them. Bernard has always been available when I have approached him for assistance and ongoing support. Oliver Cudden",
    author: "Oliver Cudden",
    position: "Founder",
    company: "Cudden Pre-Construction",
    website: "cuddenpreconstruction.ie",
    avatar: "/testimonal/olivercudden.png", // Added avatar path
    verified: true
  },
  {
    id: 2,
    quote: "Working with Bernard from Greenberry was a fantastic experience. He built a fast, user-friendly, and fully customized website for ISSC Vancouver GAA, providing excellent support throughout. His attention to detail and expertise made the process seamless, and club members have been thrilled with the result. We highly recommend Greenberry for top-quality web development!",
    author: "ISSC Vancouver GAA",
    position: "Public Relation Officer",
    company: "ISSC Vancouver GAA",
    website: "isscvancouver.com",
    avatar: "/testimonal/isscvancouvergaa.png", // Added avatar path
    verified: true
  },
  {
    id: 3,
    quote: "Bernard from Greenberry has been an invaluable partner for Bellewstown Golf Club. He didn't just build us a great website—he provides ongoing support for a wide range of technical needs. Whether it's website updates, troubleshooting, or IT assistance, he's always just a phone call or email away. His expertise, reliability, and dedication have made him a pleasure to work with, and we truly appreciate his commitment to keeping everything running smoothly. We highly recommend Greenberry to anyone looking for top-notch web and tech support.",
    author: "Michael Leonard",
    position: "Owner",
    company: "Bellewstown Golf Club",
    website: "bellewstowngolfclub.ie",
    avatar: "/testimonal/michaelleonard.png", // Added avatar path
    verified: true
  },
  {
    id: 4,
    quote: "Bernard was just great he is very professional and he knew exactly what we wanted and needed. He helped us tremendously during covid-19. Bernard created a website for the parish of Duleek and Bellewstown and I still get compliments about it to this day. I have no hesitation in recommending Bernard to anyone. Thanks. Fr. John Conlon",
    author: "Fr. John Conlon",
    position: "Parish Priest",
    company: "Duleek and Bellewstown Parish",
    website: "duleekbellewstownparish.com",
    avatar: "/testimonal/johnconlon.png", // Added avatar path
    verified: true
  },
  {
    id: 5,
    quote: "It was great to have Bernard come onboard and design our website. A very professional approach to development, design and implementation. Very strategic and engaging. I can highly recommend Bernard for any business or project. Graham Byrne | Director DBDC Partnership Facility CLG",
    author: "Graham Byrne",
    position: "Director DBDC Partnership Facility CLG",
    company: "Duleek Community Facility",
    website: "duleekcommunityfacility.ie",
    avatar: "/testimonal/grahambyrne.png", // Added avatar path
    verified: true
  },
  {
    id: 6,
    quote: "Bernard provides a professional service and has been a huge support since the installation of the parish website. Many parishioners have complimented upon the website design and how easy the website is to use. Indeed local schools and other parishes have been referred to Bernard and we would have no hesitation in recommending Bernard to anyone. The website is always available and is user friendly for uploading information. Fr. Mark English",
    author: "Fr. Mark English",
    position: "Parish Administrator",
    company: "Donore & Rossnaree Parish",
    website: "donorerossnareeparish.com",
    avatar: "/testimonal/frmarkenglish.png", // Added avatar path
    verified: true
  },
  {
    id: 7,
    quote: "Bernard was fantastic to work with. He is highly competent, professional and knowledgeable. Our website is so professional and easy to use. It was a pleasure working with Bernard. I would highly recommend Greenberry.",
    author: "Mary-Rita Fox",
    position: "Founder",
    company: "Fox Dress Hire",
    website: "foxdresshire.ie",
    avatar: "/testimonal/foxdresshire.png", // Added avatar path
    verified: true
  },
  {
    id: 8,
    quote: "I highly recommend Bernard (and Greenberry) for his exceptional support and excellent website design. He has provided us with an outstanding website which we love to use. Our website's speed and user-friendliness, as well as hassle-free management speak volumes about his expertise. Bernard is always available. I can confidently recommend Bernard and Greenberry for any web development project.",
    author: "Office Secretary",
    position: "Parish Secretary",
    company: "Ballivor Kildalkey Parish",
    website: "ballivorkildalkey.ie",
    avatar: "/testimonal/ballivorkildalkey.png", // Added avatar path
    verified: true
  },
  {
    id: 9,
    quote: `Bernard was an absolute pleasure to deal with. He is very professional and listened exactly to what our needs were. Bernard designed and built a user friendly website. It is bright, colourful and well organised. It is exactly what we had hoped and asked for.
  I like the ease of use of the website. It is easy to upload posts and edit the information.
  I love the enrolment feature.`,
    author: "Lorraine O'Loughlin",
    position: "Principal",
    company: "Mount Hanover National School",
    website: "https://mounthanoverns.ie/",
    avatar: "/testimonal/mounthanover.png",
    verified: true
  }
];

export default testimonials;