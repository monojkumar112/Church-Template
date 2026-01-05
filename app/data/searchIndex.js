// Searchable index of all website pages and content
export const searchIndex = [
  {
    id: 1,
    title: "Home",
    path: "/",
    description:
      "Welcome to Holy Innocents Catholic Church - a vibrant parish community",
    keywords: ["home", "welcome", "holy innocents", "church", "community"],
  },
  {
    id: 2,
    title: "About Us",
    path: "/about-us",
    description:
      "Learn more about Holy Innocents Catholic Church and our mission",
    keywords: ["about", "mission", "church", "history", "vision"],
  },
  {
    id: 3,
    title: "Mass Times",
    path: "/#mass-times",
    description: "View Mass times and upcoming events at our church",
    keywords: ["mass", "times", "schedule", "events", "worship"],
  },
  {
    id: 4,
    title: "Events",
    path: "/event",
    description: "Discover upcoming events and activities at the parish",
    keywords: ["events", "activities", "calendar", "upcoming"],
  },
  {
    id: 5,
    title: "Donate",
    path: "/donate",
    description: "Support the parish through donations and financial giving",
    keywords: ["donate", "give", "donation", "support", "financial", "gift"],
  },
  {
    id: 6,
    title: "Get Involved",
    path: "/getting-involved",
    description: "Join our community and get involved in parish activities",
    keywords: ["involved", "volunteer", "join", "participate", "ministry"],
  },
  {
    id: 7,
    title: "Our Leadership",
    path: "/leadership",
    description: "Meet the leadership team of Holy Innocents Parish",
    keywords: ["leadership", "priest", "deacon", "staff", "team"],
  },
  {
    id: 8,
    title: "Our Liturgy",
    path: "/liturgy",
    description: "Learn about our liturgical practices and worship",
    keywords: ["liturgy", "worship", "mass", "sacraments", "prayer"],
  },
  {
    id: 9,
    title: "Our Mission",
    path: "/mission",
    description: "Understand the mission and values of Holy Innocents Parish",
    keywords: ["mission", "values", "purpose", "vision", "faith"],
  },
  {
    id: 10,
    title: "Our Sacraments",
    path: "/sacramental",
    description: "Information about Catholic sacraments and rituals",
    keywords: [
      "sacraments",
      "baptism",
      "communion",
      "confirmation",
      "marriage",
      "anointing",
    ],
  },
  {
    id: 11,
    title: "Our Youth",
    path: "/families-and-youth",
    description: "Youth programs and family activities at the parish",
    keywords: ["youth", "families", "children", "young people", "education"],
  },
  {
    id: 12,
    title: "Gospel Reflection",
    path: "/reflection",
    description: "Parishioner Gospel Reflection and spiritual insights",
    keywords: ["reflection", "gospel", "spiritual", "bible", "faith"],
  },
  {
    id: 13,
    title: "Parish Groups",
    path: "/groups",
    description: "Discover various groups and ministries at the parish",
    keywords: ["groups", "ministries", "activities", "community", "fellowship"],
  },
  {
    id: 14,
    title: "Parish History",
    path: "/brief-history",
    description: "Learn about the rich history of Holy Innocents Parish",
    keywords: ["history", "parish", "established", "heritage", "background"],
  },
  {
    id: 15,
    title: "Parish Vision",
    path: "/our-parish-vision",
    description: "Our vision for the future of Holy Innocents Parish",
    keywords: ["vision", "future", "goals", "direction", "parish"],
  },
  {
    id: 16,
    title: "Evangelisation",
    path: "/evangelisation",
    description: "Parish Evangelisation Cells and outreach programs",
    keywords: [
      "evangelisation",
      "outreach",
      "mission",
      "faith sharing",
      "community",
    ],
  },
  {
    id: 17,
    title: "Prayer Intentions",
    path: "/prayer-intentions",
    description: "Submit and view prayer intentions for the parish",
    keywords: ["prayer", "intentions", "intercession", "spiritual"],
  },
  {
    id: 18,
    title: "Contact Us",
    path: "/contact-us",
    description: "Get in touch with Holy Innocents Parish",
    keywords: ["contact", "phone", "email", "address", "reach out"],
  },
  {
    id: 19,
    title: "Register",
    path: "/churchsuite",
    description: "Register your details with the parish",
    keywords: ["register", "registration", "sign up", "membership"],
  },
  {
    id: 20,
    title: "Deacon Barry",
    path: "/deacon-barry",
    description: "Meet Deacon Barry from our parish",
    keywords: ["deacon", "barry", "staff", "clergy", "team"],
  },
  {
    id: 21,
    title: "Father Victor Vella",
    path: "/father-victor-vella",
    description: "Meet Father Victor Vella, our parish priest",
    keywords: ["father", "victor", "vella", "priest", "clergy"],
  },
  {
    id: 22,
    title: "Sisters of Mercy",
    path: "/sisters-of-mercy",
    description: "Information about the Sisters of Mercy in our parish",
    keywords: ["sisters", "mercy", "religious", "community", "service"],
  },
  {
    id: 23,
    title: "Parish Centre",
    path: "/#parish-centre",
    description: "Information about our parish centre and facilities",
    keywords: ["centre", "facilities", "building", "location", "venue"],
  },
  {
    id: 24,
    title: "Booking Mass",
    path: "/#booking",
    description: "Book a Mass for a special intention or occasion",
    keywords: ["booking", "mass", "request", "special", "intention"],
  },
  {
    id: 25,
    title: "Streaming Masses",
    path: "https://www.churchservices.tv/",
    description: "Watch live streaming of our Masses",
    keywords: ["streaming", "live", "online", "mass", "broadcast"],
  },
];

// Search function to find matching pages
export const searchPages = (query) => {
  if (!query || query.trim().length === 0) return [];

  const lowerQuery = query.toLowerCase().trim();

  return searchIndex
    .map((page) => {
      let score = 0;

      // Exact title match (highest score)
      if (page.title.toLowerCase() === lowerQuery) {
        score += 100;
      }
      // Title contains query
      else if (page.title.toLowerCase().includes(lowerQuery)) {
        score += 50;
      }

      // Check keywords
      if (page.keywords.some((kw) => kw.includes(lowerQuery))) {
        score += 30;
      }

      // Check description
      if (page.description.toLowerCase().includes(lowerQuery)) {
        score += 20;
      }

      return { ...page, score };
    })
    .filter((page) => page.score > 0)
    .sort((a, b) => b.score - a.score);
};
