/**
 * College data — single source of truth for Magilo Art College content.
 * Used by the college page, prospectus page, and any shared college UI.
 *
 * Course/advantage icons are applied in consuming components (college page)
 * since they are React components and cannot live in a plain data module.
 */

export interface Course {
  title: string;
  description: string;
  highlights: string[];
  duration: string;
}

export interface Advantage {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/** Art & design programmes */
export const artCourses: Course[] = [
  {
    title: "Graphic Design & Digital Art",
    description:
      "Master industry-standard design software, layout theory, and digital illustration techniques.",
    highlights: [
      "Adobe Creative Suite mastery",
      "UI/UX design principles",
      "Brand identity development",
      "Digital illustration",
    ],
    duration: "12 months",
  },
  {
    title: "Fine Arts & Painting",
    description:
      "Develop traditional techniques in sketching, color theory, and canvas painting.",
    highlights: [
      "Drawing fundamentals",
      "Color theory & mixing",
      "Portrait & landscape",
      "Mixed media art",
    ],
    duration: "12 months",
  },
  {
    title: "Textiles & Fabric Design",
    description:
      "Learn the art of textile creation, pattern making, and fabric decoration techniques.",
    highlights: [
      "Textile design principles",
      "Batik & tie-dye techniques",
      "Pattern making & repeats",
      "Fabric printing & finishing",
    ],
    duration: "12 months",
  },
  {
    title: "Cartooning & Illustration",
    description:
      "Develop your unique style in cartooning, character design, and visual storytelling.",
    highlights: [
      "Character design & development",
      "Comic strip creation",
      "Caricature drawing",
      "Editorial illustration",
    ],
    duration: "6 months",
  },
  {
    title: "Industrial Printing (Vocational)",
    description:
      "Hands-on training in silk screen printing and large-format machine operation.",
    highlights: [
      "Screen printing techniques",
      "Large format printing",
      "Machine maintenance",
      "Quality control",
    ],
    duration: "6 months",
  },
  {
    title: "Entrepreneurship in Art",
    description:
      "Learn how to manage a print shop and monetize your creative skills.",
    highlights: [
      "Business planning",
      "Marketing for creatives",
      "Client management",
      "Financial literacy",
    ],
    duration: "3 months",
  },
];

/** Adult IT courses */
export const adultITCourses: Course[] = [
  {
    title: "Computer Literacy & Office Applications",
    description:
      "Build a strong foundation in computer skills and master essential office software for the workplace.",
    highlights: [
      "Microsoft Word, Excel & PowerPoint",
      "Google Workspace (Docs, Sheets, Slides)",
      "Email management & professional communication",
      "File management & internet navigation",
    ],
    duration: "2 months",
  },
  {
    title: "Data Entry & Basic Spreadsheets",
    description:
      "Develop speed and accuracy in data handling with professional spreadsheet skills.",
    highlights: [
      "Excel formulas & data organisation",
      "Google Sheets proficiency",
      "Data accuracy & validation",
      "Speed typing & keyboard mastery",
    ],
    duration: "1 month",
  },
  {
    title: "Cybersecurity Awareness",
    description:
      "Learn to protect yourself and your business from online threats and cyber attacks.",
    highlights: [
      "Online safety & password management",
      "Identifying scams & phishing",
      "Data protection best practices",
      "Secure browsing & device safety",
    ],
    duration: "1 month",
  },
];

/** Kids IT courses */
export const kidsITCourses: Course[] = [
  {
    title: "Computer Basics for Kids",
    description:
      "A fun, hands-on introduction to computers for young learners. Build confidence with technology early.",
    highlights: [
      "Mouse & keyboard skills",
      "Navigating a computer safely",
      "Basic typing with fun games",
      "Internet safety for children",
    ],
    duration: "6 weeks",
  },
  {
    title: "Digital Art for Kids",
    description:
      "Unleash your child's creativity with digital drawing tools and design basics.",
    highlights: [
      "Drawing with digital tools",
      "Introduction to Canva",
      "Creating fun digital projects",
      "Colour & composition basics",
    ],
    duration: "6 weeks",
  },
  {
    title: "Typing Mastery for Kids",
    description:
      "Build essential typing skills through games and interactive exercises. A skill for life.",
    highlights: [
      "Touch typing technique",
      "Speed & accuracy building",
      "Fun typing games & challenges",
      "Keyboard shortcuts",
    ],
    duration: "1 month",
  },
  {
    title: "Digital Citizenship & Online Safety",
    description:
      "Teach children to be responsible and safe digital citizens in today's connected world.",
    highlights: [
      "Cyberbullying awareness",
      "Privacy & personal information",
      "Recognising online dangers",
      "Responsible social media use",
    ],
    duration: "4 weeks",
  },
];

/** Why study at Magilo */
export const advantages: Advantage[] = [
  {
    title: "Live Studio Advantage",
    description:
      "Train in a functioning print shop, working on real client projects every day.",
  },
  {
    title: "Industry-Standard Tools",
    description:
      "Access to professional scanning, printing, and design hardware.",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from working professionals with years of industry experience.",
  },
  {
    title: "Convenient Location",
    description: "Based in Adenta, easily accessible.",
  },
];

/** FAQs for prospective students */
export const faqItems: FAQItem[] = [
  {
    question: "What are the admission requirements?",
    answer:
      "We accept students with basic education (BECE) or higher for art and adult IT courses. No prior experience is required for most courses. For kids' IT programmes, children aged 6-14 are welcome. A passion for learning is the most important quality we look for.",
  },
  {
    question: "How long are the courses?",
    answer:
      "Course duration varies: Graphic Design, Fine Arts, and Textiles are 12-month programmes. Cartooning and Industrial Printing are 6-month courses. IT courses range from 1-2 months for adults. Kids' IT courses run 4-6 weeks each. Flexible scheduling is available.",
  },
  {
    question: "What are the fees and payment options?",
    answer:
      "Tuition fees vary by programme. We offer flexible payment plans including monthly instalments. Contact our admissions office for current fee schedules and available scholarships.",
  },
  {
    question: "Do students get to work on real projects?",
    answer:
      "Yes! Our unique Live Studio model means art and design students work on actual client projects as part of their training. This provides invaluable real-world experience and portfolio pieces.",
  },
  {
    question: "What certification do graduates receive?",
    answer:
      "Graduates receive a Magilo Art College certificate upon completion. Our programmes also prepare students for industry-recognised certifications in relevant software and techniques.",
  },
  {
    question: "Is job placement assistance provided?",
    answer:
      "Yes, we provide career guidance and job placement support. Many graduates find employment in our partner businesses or start their own creative ventures with our entrepreneurship training.",
  },
  {
    question: "What age group are the kids' IT courses for?",
    answer:
      "Our kids' IT courses are designed for children aged 6-14. Computer Basics and Digital Art are great for younger kids (6-10), while Typing Mastery and Digital Citizenship are ideal for ages 8-14. Classes are small and led by patient, experienced instructors.",
  },
  {
    question: "Do I need my own computer for IT courses?",
    answer:
      "No. We provide all equipment and computers for training at our facility. However, students are welcome to bring their own laptops if they prefer.",
  },
];

/** Student life bullet points */
export const studentLifeBullets = [
  "Work on live client projects",
  "Build a professional portfolio",
  "Network with industry professionals",
  "Access professional printing and design equipment",
  "Flexible class schedules",
] as const;

/** Prospectus / about copy */
export const prospectusCopy = {
  aboutMagilo:
    "Magilo Art College & IT Training Centre has been part of Adenta's creative and vocational education landscape for over 25 years. We combine art, design, and technology in a live production environment—our students learn in a functioning print shop and design studio, working on real client projects every day. Based in Adenta, we offer programmes for adults and children, from graphic design and textiles to computer literacy and cybersecurity.",
  studentLifeIntro:
    "At Magilo, education extends beyond the classroom. Our students are immersed in a creative community that nurtures talent, encourages collaboration, and prepares them for real-world success.",
  contactApply:
    "Ready to apply or need more information? Visit our college page to submit an admission inquiry, or reach out by phone or WhatsApp. We look forward to hearing from you.",
} as const;
