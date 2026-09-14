export const technology = {
  hero: {
    eyebrow: "Candid Solutions",
    titleBefore: "IT that just ",
    titleAccent: "works.",
    lead: "Managed IT, integrations, and the everyday business technology decisions. We plan it and we build it.",
    ghost: { href: "#staff", label: "See what we staff" },
    solid: { href: "/contact", label: "Let’s Chat" },
    panelKicker: "Same team. One inbox.",
    panelTitle: "Technology work, from the same Candid team.",
    panelBody:
      "Payments and reporting live next door. You still call one company.",
    panelLink: { href: "#services", label: "See the work" },
  },
  services: {
    label: "Solutions",
    title: "Comprehensive IT services",
    lead: "Candid matches technology to the end client, not the vendor. Decade-long relationships with cloud, contact center, network, and colo providers, at below-market cost.",
    items: [
      {
        title: "Payment processing",
        body: "Lower fees. Digital-first and self-service POS. CandidPay is our payments ISO.",
      },
      {
        title: "Contact center",
        body: "With more than 150 contact center vendors, we help you find the platform that matches how your teams actually work.",
      },
      {
        title: "Mobility",
        body: "Managed mobility that cuts the IT burden and the bill. End-to-end device and wireless management, one point of contact.",
      },
      {
        title: "Cybersecurity",
        body: "If you are connected, you are a target. Right-sized controls so users reach applications without buying every box.",
      },
      {
        title: "Cloud infrastructure",
        body: "Cloud, hosting, and colocation. Engineers design and implement for your environment, not a vendor quota.",
      },
      {
        title: "Internet & SD-WAN",
        body: "Business-class connectivity nationwide. Visibility across locations, one bill you can explain.",
      },
    ],
    more: "More services, still one team.",
  },
  split: [
    {
      kicker: "The worry",
      title: "Leave your IT worry to Candid",
      body: "Obsolete technology, an account manager who’s here today and gone tomorrow, growth that has plateaued, no backup if the stack fails. That worry is ours.",
    },
    {
      kicker: "The work",
      title: "Focus on your business",
      body: "We partner on day-to-day IT: cloud, voice, data, network, managed services, and TEM. You stay on the bottom line. We stay on the stack.",
    },
  ],
  quote: {
    title: "Get your free IT solutions quote",
    body: "The right telecom and IT mix starts with a conversation: current goals, longer-term plan, and budget. We navigate the providers and lay out options that fit.",
    steps: [
      {
        title: "Select services",
        body: "Live access to business internet and phone providers in your area.",
      },
      {
        title: "Compare quotes",
        body: "Real-time quotes from 160+ providers nationwide. A solutions engineer typically presents within 24–48 hours.",
      },
    ],
    cta: "Get a free solutions quote",
  },
  staff: {
    label: "What we staff",
    title: "Work we quote and finish.",
    lead: "If a project needs a skill we do not keep on staff, we bring a specialist. You still call Candid.",
    items: [
      {
        kicker: "IT portfolio",
        title: "Vendor management",
        body: "300+ providers in the supply chain. Design through ongoing care, without locking you to one vendor.",
      },
      {
        kicker: "Connectivity",
        title: "Internet, SD-WAN, voice",
        body: "Compared, then installed. You get a bill you can explain.",
      },
      {
        kicker: "Cloud",
        title: "Put the workload in the right place",
        body: "Infrastructure, SaaS, and colocation. We staff the selection and the cutover.",
      },
      {
        kicker: "Security",
        title: "Close the gaps",
        body: "Assessment, access, and the products that fix what you found. Specialists join when the work needs them.",
      },
      {
        kicker: "Contact center",
        title: "How you take the call",
        body: "Voice, chat, and contact-center platforms compared against how your team actually works.",
      },
      {
        kicker: "Expense",
        title: "Savings that show up",
        body: "Zero-cost audits on processing, utilities, hardware, software, internet, and phone. Then we implement.",
      },
    ],
  },
  process: {
    label: "How we work",
    title: "From first call to full setup",
    lead: "The same discipline as the rest of Candid, on technology work.",
    steps: [
      {
        n: "01",
        title: "Listen",
        body: "Sites, contracts, and what is actually installed. Then we talk replacements.",
      },
      {
        n: "02",
        title: "Compare",
        body: "Carrier-agnostic quotes with a recommendation you can take to a controller.",
      },
      {
        n: "03",
        title: "Set up",
        body: "We work the providers. You stay copied. Friday night should not be four vendors on a thread.",
      },
      {
        n: "04",
        title: "Stay on it",
        body: "Tickets, renewals, and expense watch so the savings do not quietly disappear.",
      },
    ],
  },
  network: {
    label: "The network",
    title: "Staffed work first. Specialists when we need them.",
    lead: "You get one inbox either way.",
    desks: [
      {
        kicker: "On Candid paper",
        title: "Quoted and finished here",
        body: "Connectivity, voice, cloud, expense programs, and managed IT. No handoff to a new vendor every quarter.",
      },
      {
        kicker: "Specialist network",
        title: "You still call Candid",
        body: "Physical security and deep manufacturing systems when needed. Partners we already trust, still under this relationship.",
      },
    ],
  },
  ticker: {
    live: "Live",
    label: "Cyber watch",
    source: "SoS Daily News",
    sourceHref: "https://www.sosdailynews.com/",
  },
} as const;
