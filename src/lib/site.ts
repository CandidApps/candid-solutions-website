export const site = {
  name: "Candid Solutions",
  legal: "Candid Solutions, Inc.",
  tagline: "The right partner. The right plan. The right products.",
  url: "https://candid.solutions",
  phone: "+1 (815) 207 8000",
  phoneHref: "tel:+18152078000",
  email: "connect@candid.solutions",
  emailHref: "mailto:connect@candid.solutions",
  hours: "Mon–Fri 7:00 AM–6:00 PM · Sat 10:00 AM–2:00 PM",
  agentLogin: "https://partnerbackoffice.com",
  linkedin: "https://www.linkedin.com/company/candidsolutions",
  facebook: "https://www.facebook.com/CANDIDBUSINESS/",
  twitter: "https://twitter.com/candidbusiness",
  candidPay: "https://candidpay.app",
  candidIq: "https://www.candidiq.app/welcome",
  gridStatus: "https://www.gridstatus.io/",
  gridStatusLive: "https://www.gridstatus.io/live",
};

export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/solutions",
    label: "Solutions",
    children: [
      { href: "/solutions/technology", label: "Technology" },
      { href: "/solutions/candidpay", label: "CandidPay" },
      { href: "/solutions/candidiq", label: "CandidIQ" },
      { href: "/solutions/energy", label: "Energy" },
    ],
  },
  { href: "/about", label: "Company" },
  { href: "/agents", label: "Partners" },
  { href: "/contact", label: "Contact" },
] as const;

export const homeNav = [
  { href: "#story", label: "Our story" },
  { href: "#how-we-work", label: "How we work" },
  { href: "#working-with", label: "The team" },
  { href: "#desks", label: "What we built" },
  { href: "#solutions", label: "Solutions" },
  { href: "#consultation", label: "Talk to us" },
] as const;

export const growth = [
  {
    n: "01",
    era: "2006",
    title: "Humble beginnings",
    body: "We started as the people who deal with the carriers so you don’t have to. Transparent. Vendor-neutral. On your side of the table.",
  },
  {
    n: "02",
    era: "Growth",
    title: "Clients asked for more",
    body: "Payments. Cloud. Cyber. Contact center. Expense management. The same relationships kept opening doors, so we walked through them.",
  },
  {
    n: "03",
    era: "Today",
    title: "Full-service IT consulting",
    body: "Candid Solutions, Inc. is the parent firm: consulting and brokerage across the stack, with specialists who stay after cutover.",
  },
  {
    n: "04",
    era: "CandidPay",
    title: "Payments, built in-house",
    body: "Merchants needed processing done right. We built a payments ISO: rates watched, statements worked, one team on the line.",
  },
  {
    n: "05",
    era: "CandidIQ",
    title: "Do more without being asked",
    body: "Clients shouldn’t have to open a ticket for every renewal and rate hike. We built a mode that watches spend and acts first.",
  },
  {
    n: "06",
    era: "Always",
    title: "Family, not a ticket queue",
    body: "Treat people the way we want to be treated. Forward-thinking. Proactive. Still striving to do more and be more for every client.",
  },
] as const;

export const process = [
  {
    n: "01",
    title: "Discovery",
    body: "We learn the business, the bills, and where it hurts.",
    tone: "crimson",
  },
  {
    n: "02",
    title: "Zero-cost audit",
    body: "Invoices and contracts. You keep running the company.",
    tone: "blue",
  },
  {
    n: "03",
    title: "We find the waste",
    body: "Credits to recover, rates to cut, vendors to replace.",
    tone: "crimson",
  },
  {
    n: "04",
    title: "You approve",
    body: "We don’t move until you say so.",
    tone: "blue",
  },
  {
    n: "05",
    title: "We implement",
    body: "We negotiate and cut over. You don’t sit on hold.",
    tone: "crimson",
  },
  {
    n: "06",
    title: "We keep watch",
    body: "Tracking and reporting so the savings don’t leak back.",
    tone: "blue",
  },
  {
    n: "07",
    title: "We act first",
    body: "CandidIQ watches spend, contracts, and renewals. We handle what’s off before you open a ticket.",
    tone: "crimson",
  },
] as const;

export const desks = [
  {
    kicker: "The firm",
    title: "IT consulting & brokerage",
    body: "Vendor-neutral sourcing for voice, data, cloud, cyber, network, and managed IT. We deal with the carriers so you don’t have to.",
    href: "/solutions",
    label: "See solutions",
    external: false,
  },
  {
    kicker: "CandidPay",
    title: "Payments ISO",
    body: "Merchant processing and POS for how your locations take money. Statements watched, rates worked, one team on the other end.",
    href: "/solutions/candidpay",
    label: "See CandidPay",
    external: false,
  },
  {
    kicker: "CandidIQ",
    title: "Do more without asking",
    body: "Contracts, spend, and renewals in one portal. When something’s off, Candid handles it. You don’t have to open a ticket.",
    href: "/solutions/candidiq",
    label: "See CandidIQ",
    external: false,
  },
] as const;

export const solutions = [
  {
    title: "Payment Processing & POS",
    body: "Lower fees. Digital-first and self-service PoS. CandidPay is our payments ISO.",
  },
  {
    title: "Contact Center & UCaaS",
    body: "Match contact center and unified communications to how your teams actually work.",
  },
  {
    title: "Internet, SD-WAN & Network",
    body: "Business-class connectivity across locations. One point of contact, not a stack of tickets.",
  },
  {
    title: "Cloud & Infrastructure",
    body: "Colo, hosting, SaaS engineered for your operations, not a vendor quota.",
  },
  {
    title: "Cybersecurity",
    body: "If you are connected, you are a target. Right-sized controls without buying every box.",
  },
  {
    title: "Technology Expense Management",
    body: "See the bill, the contract, and the service. Typically 25–30% lower across buckets.",
  },
] as const;

export const quotes = [
  {
    quote:
      "Joe from Candid Solutions is an absolute pleasure to work with. He is knowledgeable, reliable, and always willing to go the extra mile.",
    name: "Saurabh Gupta",
    role: "Chief Digital Officer",
  },
  {
    quote:
      "Candid matches the right solution to a customer’s need at the right time and communicates proposals in a clear, easy-to-understand manner.",
    name: "Dan Schneck",
    role: "IT Operations Manager",
  },
  {
    quote:
      "I trust them at their word. They insert themselves when needed to keep vendors honest and performing.",
    name: "Patrick DeJong",
    role: "Division Manager",
  },
] as const;

export const values = [
  { title: "Commitment", body: "We stay after the sale. U.S. people, not a rotating carrier rep." },
  { title: "Innovation", body: "A living portfolio of suppliers so you are never locked into last year’s stack." },
  { title: "Reputation", body: "Keep vendors honest. Keep clients running. That’s the job." },
  { title: "Excellence", body: "Best-fit, not most-commission. Measured the same after go-live." },
] as const;

export const workingWith = {
  label: "Who you’re working with",
  title: "A small team that answers the phone",
  lead: "No call centers, no ticket queues. You’ll know the people working on your account by name.",
  desks: [
    {
      title: "Client Relations & Strategy",
      points: [
        "Direct point of contact from day one through renewal",
        "Plain-language recommendations, no jargon required",
        "Regular check-ins, not just a call when something breaks",
      ],
    },
    {
      title: "Technical & Vendor Management",
      points: [
        "250+ active partnerships negotiated and maintained",
        "Hands-on with install, integration, and troubleshooting",
        "Accountable to you, not to any single vendor’s quota",
      ],
    },
  ],
} as const;
