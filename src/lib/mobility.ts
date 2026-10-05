export const mobilityPage = {
  path: "/solutions/mobility",
  metaTitle: "Managed mobility",
  description:
    "Mobile device management from Candid. Spend optimization, order routing, asset management, a centralized depot, and contract negotiation, with suppliers and guidance that cut the chaos.",
  nav: [
    { href: "#overview", label: "Overview" },
    { href: "#examples", label: "Examples" },
    { href: "#work", label: "The work" },
    { href: "#how", label: "How it runs" },
    { href: "#close", label: "Talk to us" },
  ],
  hero: {
    eyebrow: "Technology",
    titleBefore: "Mobility, ",
    titleAccent: "one account.",
    lead: "Through our suppliers and expert guidance, Candid takes the chaos and the wasted time out of mobile device management.",
    ghost: { href: "#examples", label: "See examples" },
    solid: { href: "/contact", label: "Let’s Chat!" },
    panelKicker: "On the account",
    panelTitle: "The bill, read against the work.",
    panelBody:
      "Idle lines, the wrong plan, and a charge that does not match a person. That is the first pass.",
    panelAlt: {
      title: "Your carriers can stay.",
      body: "Optimization and negotiation happen on the lines you already have. Service does not have to move for the bill to change.",
    },
    panelLink: { href: "#how", label: "See how it runs" },
  },
  rail: {
    label: "What we handle",
    items: [
      "Plan reviews",
      "Idle lines",
      "Carrier orders",
      "Device inventory",
      "Depot and reuse",
      "Help desk",
      "Device management",
      "Cost centers",
      "Contract review",
      "After-hours support",
    ],
  },
  overview: {
    label: "Overview",
    title: "Wireless, handled as one account.",
    body: "A portal per carrier is how the waste hides. We compare usage to the plan, reconcile devices to people, and put moves, adds, and cancels through one approval path. Finance gets a bill it can assign. IT stops rebuilding the same report.",
  },
  stats: [
    { n: "~2,000", label: "lines at a hospitality group. Idle lines cut nearly in half." },
    { n: "$756K", label: "a year back on a fleet of about 9,000 devices." },
    { n: "$480K", label: "recovered across 4,800+ transportation devices." },
  ],
  statsNote:
    "Examples from mobility programs of this type. Not a projection for your account.",
  examples: {
    label: "Examples",
    title: "What a review like this turns up.",
    lead: "The industries change. The pattern does not: charges someone can assign, lines that should not be billing, and savings that do not require a carrier swap.",
    items: [
      {
        kicker: "Hospitality",
        title: "A bill finance can assign",
        body: "About 2,000 wireless lines. Every charge tied to the team that owns it. Idle lines cut nearly in half, and the monthly surprises came off the invoice.",
      },
      {
        kicker: "Connected devices",
        title: "The fleet was active. The waste was not.",
        body: "About 9,000 devices in service, with inactive lines still on the bill. Plans were resized to the work. About $756,000 a year came back.",
      },
      {
        kicker: "Transportation",
        title: "Several carriers, one place to look",
        body: "More than 4,800 devices, more than one carrier, and blind spots in the bill. About $480,000 recovered, and the lines managed from one account.",
      },
    ],
  },
  work: {
    label: "The work",
    title: "From the invoice to the phone in someone’s hand.",
    lead: "Six things stay on this relationship. None of them require a new login for your team.",
    items: [
      {
        n: "01",
        title: "Plans that match the work",
        body: "Zero-use lines, overages, international, and add-ons that no longer fit. Pooled and individual plans get resized before the renewal, not after another quiet month.",
      },
      {
        n: "02",
        title: "Carrier orders in one place",
        body: "New lines, replacements, suspends, and cancels follow one approval path, including across carriers. Status stays visible. The ticket does not disappear into a portal.",
      },
      {
        n: "03",
        title: "Every device accounted for",
        body: "Who has the phone, which number it uses, and whether the line is still active. Spares, losses, and returns stay on the same record as the bill.",
      },
      {
        n: "04",
        title: "A longer life for the hardware",
        body: "Kit and ship for a start date. Repair and reuse before a replacement buy. Collect, wipe, and recycle when the device is done.",
      },
      {
        n: "05",
        title: "Tied to the tools you already run",
        body: "Help desk, mobile device management, and HR stay in step. A ticket, a new hire, a transfer, or a departure updates the line and the cost center.",
      },
      {
        n: "06",
        title: "Someone still answers",
        body: "Support for the device and the login, including after hours. Pricing, terms, and unused lines get a review before you renew. Candid stays the call.",
      },
    ],
  },
  process: {
    label: "How it runs",
    title: "Four passes, then the account stays open.",
    steps: [
      {
        n: "01",
        title: "Read the invoice",
        body: "Usage against the plan. Lines with no use. Charges that do not belong to a cost center.",
      },
      {
        n: "02",
        title: "Match the devices",
        body: "The carrier’s list and yours, reconciled. A person, a number, and a phone, or a flag where they disagree.",
      },
      {
        n: "03",
        title: "Change what should change",
        body: "Plans, disconnects, and orders. Approvals stay with the people who own the spend.",
      },
      {
        n: "04",
        title: "Stay for the next bill",
        body: "A short list of exceptions each month. Contract work when the term is up. The carriers can stay.",
      },
    ],
  },
  close: {
    label: "Talk to us",
    title: "Want the wireless bill read?",
    call: "Call (815) 207-8000",
    email: "Email Us",
  },
} as const;
