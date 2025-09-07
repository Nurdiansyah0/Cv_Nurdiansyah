import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "NURDIANSYAH — Data Scientist & Software Engineer",
  author: "NURDIANSYAH",
  description:
    "Data Scientist & Software Engineer based in Batam Indonesia. Focused on building data-driven solutions, modern web applications, and real-time system integration.",
  lang: "en",
  siteLogo: "/profile.png", // replace with your photo in /public
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/nurdiansyah0" },
    { text: "LinkedIn", href: "www.linkedin.com/in/nurdiansyah-nurdiansyah-84500a17b" },
    { text: "Twitter", href: "https://x.com/Diansyh2"},
    { text: "Youtube", href: "https://www.youtube.com/@Bitzens" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://nurdiansyah.vercel.app", // change to your own domain later
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "NURDIANSYAH",
    specialty: "Data Scientist & Software Engineer",
    summary:
      "Building data-driven solutions and modern web applications. Experienced in sentiment analysis, airport inspection systems, and real-time dashboards.",
    email: "nudiansyahdian28.adv@gmail.com",
  },
  experience: [
  {
    company: "Prima Agrofoods",
    position: "Freelance Data Engineer",
    startDate: "2023",
    endDate: "Present",
    summary: [
      "Designed financial projection models for broiler farms, including ROI calculations and multi-cage cash flow forecasting—supporting strategic farm expansion with projected 25% ROI per batch.",
      "Built a real-time production monitoring dashboard using Google Sheets & Python gspread, reducing manual reporting time by 70% and improving decision speed.",
      "Provided actionable insights on feed conversion and mortality trends that improved farm profitability by ~15% per production cycle."
    ]
  },
  {
    company: "PT Bandara Internasional Batam",
    position: "Airport Rescue & Firefighter (with cross-functional role as Data Analyst)",
    startDate: "2022",
    endDate: "Present",
    summary: [
      "Developed a PWA-based terminal inspection system with geolocation validation, evidence photos, and Looker Studio dashboards—cutting inspection reporting delays by 60% and improving accountability.",
      "Built a passenger satisfaction analytics dashboard using App Script, Dash (Plotly), and embedded Looker Studio, enabling management to track >10 key KPIs in real-time.",
      "Recognized for bridging operational firefighting responsibilities with data analytics, contributing to a 20% improvement in response coordination during safety drills."
    ]
  },
  {
    company: "BP Batam",
    position: "Airport Rescue & Firefighting (Basic Training & Operations)",
    startDate: "2018",
    endDate: "2019",
    summary: [
      "Completed certified Basic ARFF training and supported >50 emergency response operations at Batam airport.",
      "Participated in 10+ multi-agency safety drills and readiness exercises, ensuring compliance with ICAO safety standards and improving response readiness scores by 15%."
    ]
  },
  {
    company: "PT ACE Industrial Indonesia",
    position: "Leader Mounting Production",
    startDate: "2017",
    endDate: "2018",
    summary: [
      "Led a production team of 12 workers in mounting assembly lines, consistently meeting daily output targets of 500+ units.",
      "Implemented workflow improvements that reduced defects and rework by 15%, saving an estimated 200 labor hours per month."
    ]
  },
  {
    company: "PT Corona Albani Lestari",
    position: "Acting Merchandiser",
    startDate: "2016",
    endDate: "2017",
    summary: [
      "Coordinated product planning and stock distribution across 30+ retail outlets.",
      "Improved merchandising visibility, contributing to a 12% sales increase in key outlets within 6 months."
    ]
  }
]
,
  projects: [
    {
      name: "Airport Inspection System",
      summary: "A desktop-first terminal inspection dashboard with geolocation validation, photo documentation, and Looker Studio integration.",
      linkPreview: "/",
      linkSource: "https://github.com/nurdiansyah0/airport-inspection",
      image: "/Aiport_Inspeksi.png",
    },
    {
      name: "Poultry Business Dashboard",
      summary: "Financial and operational dashboard for poultry farming with automated ROI and cash flow projections.",
      linkPreview: "/",
      linkSource: "https://github.com/nurdiansyah/poultry-dashboard",
      image: "/Polutry farm.png",
    },
    {
      name: "Sentiment Analysis Tool",
      summary: "NLP-based reputation analysis tool for monitoring airport-related social media and news coverage.",
      linkPreview: "/",
      linkSource: "https://github.com/nurdiansyah/sentiment-analysis",
      image: "/Setimen_dashboard.png",
    },
  ],
  about: {
    description: `
      "Data Scientist & Software Engineer passionate about system integration, data analytics, and real-time application development. Skilled at delivering end-to-end solutions that are scalable, high-performing, and business-driven—from airport inspection systems and financial dashboards to sentiment analysis tools."`,
    image: "/profile_big.png", // replace with your own photo in /public
  },
};

// #5755ff
