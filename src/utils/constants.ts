export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Twitter", url: "https://twitter.com" },
];

export const HERO_DATA = {
  title: "Connect With Nature at HOBE CENTER",
  subtitle: "Discover, Learn, and Grow in Nyabihu's Natural Environment",
  description: "Located in the beautiful Bigogwe sector of Nyabihu district, HOBE CENTER offers transformative programs that connect people with nature while building sustainable communities.",
  ctaText: "Explore Our Programs",
  ctaLink: "/programs",
  secondaryCtaText: "About Us",
  secondaryCtaLink: "/about",
  image: "https://images.pexels.com/photos/5486845/pexels-photo-5486845.jpeg"
};

export const PROGRAMS = [
  {
    id: 1,
    title: "💼Youth Capacity Building",
    description: "We empower young people through tailored training, mentorship, and real-world opportunities that build their skills, confidence, and leadership. From cultural entrepreneurship to the creative industries, we equip youth to shape their own futures and actively contribute to their communities.",
    image: "images/youth.jpeg",
    duration: "1-5 days",
    ageGroup: "All ages",
    learningPoints: [
      'Develop leadership and teamwork skills',
      'Learn practical project implementation techniques',
      'Gain confidence through public speaking and collaboration'
    ]
  },
  {
    id: 2,
    title: "🌾Culture Preservation & Promotion",
    description: "At the heart of Hobe Center lies a deep commitment to safeguarding Rwanda’s cultural heritage. We actively document, teach, and celebrate traditional knowledge—including dances like Ikinyemera, oral histories, and indigenous crafts—ensuring they are passed down to future generations and shared with the world.",
    image: "images/heritage.jpeg",
    duration: "1-5 Days",
    ageGroup: "All ages",
    learningPoints: [
      'Explore traditional Rwandan dances like Ikinyemera',
      'Learn the art of storytelling and oral history',
      'Engage with indigenous crafts and symbolism'
    ]
  },
  {
    id: 3,
    title: "🎭Youth Recreation & Cultural Tourism",
    description: "We blend fun with heritage to create memorable experiences for youth and visitors alike. Through festivals, guided cultural tours, youth art showcases, and recreational spaces, we make culture relevant and exciting—while fostering pride and boosting local tourism.",
    image: "images/3.jpeg",
    duration: "1-5 Days",
    ageGroup: "All ages",
    learningPoints: [
      'Discover Rwanda through immersive cultural tours',
      'Build connections through artistic and recreational events',
      'Understand tourism as a tool for youth empowerment'
    ]
  },
  {
    id: 4,
    title: "🌴Environment Conservation",
    description: "Situated in one of Rwanda’s most ecologically rich regions, Hobe Center champions sustainable living and environmental protection. Through community-led initiatives, we involve youth in preserving nature—not just as a resource, but as a vital part of our identity.",
    image: "images/pic2.jpeg",
    duration: "1-5 Days",
    ageGroup: "All ages",
    learningPoints: [
      'Practice eco-friendly habits like waste reduction and tree planting',
      'Learn about local biodiversity and ecosystem preservation',
      'Engage in environmental leadership and advocacy'
    ]
  }
];

export const SPORTS_EVENTS = [
  {
    id: 1,
    title: "Mountain Trail Running",
    description: "Experience the thrill of trail running through Nyabihu's scenic mountain paths. Join our guided runs suitable for all fitness levels.",
    image: "images/marathon.jpg",
    schedule: "Every Saturday morning",
    difficulty: "Beginner to Advanced",
  },
  {
    id: 2,
    title: "Community Sports Day",
    description: "Monthly community gathering featuring traditional Rwandan games, volleyball tournaments, and family-friendly activities.",
    image: "images/community.jpeg",
    schedule: "First Sunday of each month",
    difficulty: "All levels",
  },
  {
    id: 3,
    title: "Nature Photography Walks",
    description: "Combine photography with gentle exercise as we explore the beautiful landscapes of Bigogwe sector.",
    image: "https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg",
    schedule: "Bi-weekly, Wednesday afternoons",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Youth Soccer League",
    description: "Regular soccer matches and training sessions promoting teamwork and physical fitness among local youth.",
    image: "images/sport.jpeg",
    schedule: "Every weekend",
    difficulty: "Intermediate",
  }
];

export const ABOUT_INFO = {
  mission: "HOBE CENTER's mission is to foster environmental stewardship, sustainable living practices, and community resilience through experiential education and connection with nature.",
  vision: "We envision thriving communities living in harmony with nature, where ecological knowledge, traditional wisdom, and innovative approaches create a sustainable future for all.",
  story: "Founded in 2023, HOBE CENTER emerged from a collective vision to create a space where people could reconnect with nature while addressing the environmental and social challenges facing Rwanda. Located in the beautiful highlands of Nyabihu district, our center combines traditional ecological knowledge with modern sustainability practices to offer transformative educational experiences.",
  values: [
    "Environmental Stewardship",
    "Community Resilience",
    "Experiential Learning",
    "Cultural Heritage",
    "Innovation & Adaptation"
  ]
};

// src/constants.ts

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Innocent Bigirinka B.",
    role: "Founder & Managing Director(Cultural Heritage consultancy)",
    bio: "With more than a decade of experience in cultural heritage preservation, environmental education, and grassroots community development in Rwanda, Innocent provides visionary leadership that shapes the mission and impact of HOBE CENTER.",
    image: "images/1.jpeg"
  },
  {
    name: "Fidel Makuza Kanyoni",
    role: "Coe-founder: Associated center Manager (ACM)",
    bio: "Fidel brings deep expertise in curriculum development and experiential learning. He is passionate about designing programs that reconnect participants with nature and traditional ecological knowledge, playing a vital role in advancing HOBE CENTER’s educational mission.",
    image: "images/2.JPG"
  }
];

  // {
  //   name: "Emmanuel Ndayisaba",
  //   role: "Agricultural Specialist",
  //   bio: "Emmanuel brings deep knowledge of sustainable farming practices adapted to Rwanda's diverse landscapes, with a focus on agroforestry and permaculture design.",
  //   image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
  // }

export const TESTIMONIALS = [
  {
    text: "HOBE CENTER transformed my understanding of sustainability and gave me practical skills I use every day on my farm. The community I found there continues to support my journey.",
    author: "Claude Niyonzima",
    role: "Farmer, Musanze"
  },
  {
    text: "As a teacher, the nature education program gave me invaluable tools to engage my students with the environment. My classroom has never been more excited about learning!",
    author: "Angelique Mukamana",
    role: "Primary School Teacher"
  },
  {
    text: "The youth leadership program helped me find my voice as an environmental advocate. I've since started a community initiative that's making real change in my village.",
    author: "Eric Habimana",
    role: "Youth Leader, Kigali"
  }
];

export const CONTACT_INFO = {
  address: "HOBE CENTER, Bigogwe Sector, Nyabihu District, Western Province, Rwanda",
  email: "infohobecenter@gmail.com",
  phone: "+250 783 803 017",
  mapLocation: "Nyabihu District, Rwanda",
  emailjs: {
    serviceId: "service_5ig6wqt",
    templateId: "template_midx7dw",
    publicKey: "Pgd_stYuy7GZZmdFb",
    templateParams: {
      from_name: "name",
      from_email: "email",
      phone_number: "phone",
      subject: "subject",
      message: "message"
    }
  }
};