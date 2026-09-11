import { site } from "@/lib/site";

export const candidPayPage = {
  nav: [
    { href: "#overview", label: "Overview" },
    { href: "#quote", label: "What we quote" },
    { href: "#integrations", label: "Integrations" },
    { href: "#how", label: "How we work" },
    { href: "#close", label: "Consultation" },
  ],
  hero: {
    eyebrow: "CandidPay",
    titleBefore: "Get paid, ",
    titleAccent: "simply.",
    lead: "Payment processing and merchant services with rates that make sense, and no fine print games.",
    ghost: { href: "#quote", label: "See what we quote" },
    solid: { href: "/contact", label: "Let’s Chat" },
    panelKicker: "A Candid division",
    panelTitle: "Payments that belong with the rest of the account.",
    panelBody:
      "CandidPay is a Candid division, not a separate company. Processing sits next to internet, phones, and IT.",
    panelLink: { href: site.candidPay, label: "Visit candidpay.app" },
  },
  overview: {
    label: "Overview",
    title: "A program your controller can read.",
    body: "No teaser rate that disappears in month four. No one-size terminal from a binder. We quote processing around the hardware you have, and only change it when the current setup is costing you or failing. Adjacent work, like custom POS builds, goes through our specialist network. Candid still owns the relationship.",
  },
  stats: [
    { n: "4,600+", label: "businesses on the platform" },
    { n: "$22.1M+", label: "processing fees saved" },
    { n: "$4.5B+", label: "collected through CandidPay" },
  ],
  quote: {
    label: "What we quote",
    title: "Processing that fits the counter you actually run.",
    items: [
      {
        kicker: "Rates",
        title: "Interchange you can explain",
        body: "A program finance can read. Not a teaser that disappears after the intro period.",
      },
      {
        kicker: "Hardware",
        title: "Hardware that fits",
        body: "Counter, handheld, unattended. We keep what works and replace what does not.",
      },
      {
        kicker: "Multi-site",
        title: "The same playbook",
        body: "Every location boards the same way, so Friday night is not a different processor per store.",
      },
    ],
    partnersLabel: "Hardware and processors we already quote",
    partners: [
      "Clover",
      "Dejavoo",
      "Elavon",
      "CardConnect",
      "Vendara",
      "Global Payments",
      "Linked2Pay",
      "Nuvei",
      "Fiserv",
    ],
  },
  gateways: {
    label: "Connected Gateways",
    items: [
      "Global Payments",
      "TSYS",
      "OpenEdge",
      "Genius",
      "Portico",
      "Nuvei",
      "Paya",
      "PayJunction",
      "PaymentCloud",
      "Linked2Pay",
      "Heartland",
      "Fiserv",
      "CardConnect",
      "CardPointe",
      "Clover",
      "Payeezy",
      "First Data",
      "GETTRX",
      "EdgePay",
      "BridgePay",
    ],
  },
  methods: {
    label: "Ways to pay",
    items: [
      "Visa",
      "Mastercard",
      "American Express",
      "Discover",
      "PayPal",
      "Apple Pay",
      "Google Pay",
      "CandidPay",
    ],
  },
  integrations: {
    label: "Integrations",
    title: "Payments that land in the books.",
    body: "Keep the accounting system. CandidPay takes the payment, then writes it back so finance is not reconciling from a second screen.",
    items: [
      {
        kicker: "Accounting",
        title: "QuickBooks Online, two-way",
        body: "Invoices, payments, and customer records update in both systems. No re-keying the Friday deposit.",
      },
      {
        kicker: "Reporting",
        title: "Built for CFOs and controllers",
        body: "Effective rate, savings, and statements a controller can defend. Not a merchant portal that only sales can read.",
      },
      {
        kicker: "Close",
        title: "Reconciliation without the spreadsheet",
        body: "A/R, stored methods, and payment history sit next to the general ledger so month-end is not a scavenger hunt.",
      },
    ],
  },
  process: {
    label: "How we work",
    title: "From first call to full setup",
    steps: [
      {
        n: "01",
        title: "Listen",
        body: "Current rates, hardware, and how you take payments. That is the brief.",
      },
      {
        n: "02",
        title: "Compare",
        body: "Options that sit next to internet and phones on the same relationship.",
      },
      {
        n: "03",
        title: "Set up",
        body: "Terminals, MID, and training so the first Saturday is not a surprise.",
      },
      {
        n: "04",
        title: "Stay on it",
        body: "Statements get reviewed. If the deal drifts, we say so.",
      },
    ],
  },
  close: {
    label: "Ready when you are",
    title: "Want the statements reviewed?",
    call: "Call (815) 207-8000",
    email: "Email us",
    visit: "Open candidpay.app",
  },
} as const;

export const candidIqPage = {
  nav: [
    { href: "#overview", label: "Overview" },
    { href: "#how", label: "How it works" },
    { href: "#capabilities", label: "What you get" },
    { href: "#plans", label: "Plans" },
    { href: "#close", label: "Consultation" },
  ],
  hero: {
    eyebrow: "CandidIQ",
    titleBefore: "See the ",
    titleAccent: "numbers.",
    lead: "Commission tracking, reporting, and the Candid Portal. Exactly where things stand, no spreadsheets required.",
    ghost: { href: "#capabilities", label: "See what you get" },
    solid: { href: "/contact", label: "Let’s Chat" },
    panelKicker: "The Candid portal",
    panelTitle: "CandidIQ clients save between $12K to $1.2M on average.",
    panelBody:
      "Still a Candid relationship but with more visibility and control.",
    panelAlt: {
      title: "Meet Frank, our AI that monitors your contracts and spend around the clock.",
      body: "Candid specialists stay hands-on with every negotiation, and the results land in your portal — tightening your bottom line, renewal by renewal.",
    },
    panelLink: { href: site.candidIq, label: "Open CandidIQ" },
  },
  overview: {
    label: "Overview",
    title: "You’ve never been so productive doing less with business tech.",
    body: "Bring Candid your technology, utilities, payments, and spend. Frank — Candid’s AI — tells you what things should cost and builds the plan. Specialists make the calls, run the negotiations, and close it out. You approve.",
    stats: [
      { n: "300+", label: "providers in the supply chain" },
      { n: "20+ yrs", label: "Candid Solutions expertise" },
      { n: "1 portal", label: "contracts, spend, support" },
    ],
  },
  flow: {
    label: "Question to result",
    title: "From “is this a good deal?” to savings in the portal.",
    lead: "Most AI stops at a draft email. Frank builds the plan, hands it to a Candid specialist, and doesn’t call it done until the savings sit in your portal.",
    steps: [
      {
        n: "01",
        title: "You ask",
        body: "Forward a renewal, paste a quote, or ask in plain English. No forms. No discovery call.",
      },
      {
        n: "02",
        title: "Frank benchmarks",
        body: "Market data plus your contract context, checked against real outcomes across 300+ providers.",
      },
      {
        n: "03",
        title: "Specialists negotiate",
        body: "A Candid specialist runs the playbook you approved. You don’t sit on hold.",
      },
      {
        n: "04",
        title: "Savings land",
        body: "New terms signed, savings tracked, renewal radar reset. An actual result, not a to-do list.",
      },
    ],
  },
  operators: {
    label: "Built for two kinds of operators",
    title: "Run it yourself, or white-label it for your clients.",
    items: [
      {
        kicker: "For businesses",
        title: "Stop babysitting vendors.",
        body: "One portal for contracts, spend, quotes, and support. Frank finds the savings and flags renewals. Specialists negotiate. Your team gets back to the business.",
        points: [
          "Tech and utilities marketplace with guided quoting",
          "Contract vault and renewal radar",
          "Statement analysis and spend intelligence",
          "Helpdesk that routes to people who know your stack",
        ],
      },
      {
        kicker: "For partners",
        title: "Your brand. Our engine.",
        body: "IT firms, MSPs, accountants, and advisors get a white-labeled portal: quoting, invoicing, contracts, CRM, helpdesk, and Frank.",
        points: [
          "White-label client portal and multi-tenant CRM",
          "Quote, contract, and invoice workflows",
          "Agent commissions and deal desks",
          "Marketplace fulfillment backed by Candid",
        ],
      },
    ],
  },
  marketplace: {
    label: "One-stop marketplace",
    title: "Every category your business buys, in one place.",
    body: "Voice, data, cloud, cyber, payments, utilities, managed IT. Browse, compare, and open quote requests against Candid’s supply chain of 300+ providers, then track everything in the same portal.",
    points: [
      "Side-by-side proposals with clear savings math",
      "Upload current contracts. Frank flags waste and leverage",
      "Order, onboard, and support without leaving CandidIQ",
    ],
  },
  how: {
    label: "How it works",
    title: "We want you to do the minimum.",
    lead: "Tell us what needs to happen. Frank breaks it down. Specialists pick it up. Done means done.",
    steps: [
      {
        n: "01",
        title: "Tell us what you need",
        body: "A prompt, a forwarded invoice, a screenshot of a renewal, or a quote request. However it arrives, we figure it out.",
      },
      {
        n: "02",
        title: "Frank plans. Humans execute.",
        body: "AI researches, benchmarks, and drafts the playbook. Candid specialists make the calls and push the paperwork.",
      },
      {
        n: "03",
        title: "Done. Actually done.",
        body: "Results land in your portal: contracts updated, savings logged, tickets closed.",
      },
    ],
    stats: [
      { n: "$48k", label: "Avg. annual savings identified on multi-location stacks" },
      { n: "18%", label: "Typical discount unlocked on carrier renewals with leverage" },
      { n: "90d", label: "Renewal radar window so you never auto-renew blind" },
      { n: "1 hub", label: "Marketplace, CRM, helpdesk, and Frank. Not six more tools" },
    ],
  },
  capabilities: {
    label: "What you get",
    title: "Everything your tech spend has been getting away with, handled.",
    items: [
      {
        n: "01",
        title: "Spend and pricing intelligence",
        body: "Benchmark quotes against real market outcomes. Walk into renewals knowing the range: telecom, SaaS, payments, utilities.",
      },
      {
        n: "02",
        title: "Autonomous negotiations",
        body: "Frank prepares the brief. Specialists run the back-and-forth. You approve the target and watch savings land.",
      },
      {
        n: "03",
        title: "Contract vault and renewal radar",
        body: "Every MSA, order form, and utility agreement in one place, with alerts before you lose leverage.",
      },
      {
        n: "04",
        title: "Quote to invoice to CRM",
        body: "Commercial workflow for customers and partner agents: proposals, deals, commissions, records.",
      },
      {
        n: "05",
        title: "Helpdesk with memory",
        body: "Tickets that know your services, contracts, and prior analyses. Support does not start from zero.",
      },
      {
        n: "06",
        title: "Utilities command center",
        body: "Electric, gas, water, waste — tracked beside the IT stack so facilities and IT share a system of record.",
      },
    ],
  },
  plans: {
    label: "Plans",
    title: "Plans that match how much work you want finished.",
    lead: "Every plan bundles Frank with specialist capacity. Marketplace access and the portal are always included.",
    items: [
      {
        name: "Essentials",
        price: "$149/mo",
        note: "~3–5 Frank tasks / month",
        points: [
          "Portal and marketplace",
          "Contract vault",
          "1 business location",
          "Standard helpdesk",
        ],
      },
      {
        name: "Complete",
        price: "$399/mo",
        note: "~8–12 Frank tasks / month",
        featured: true,
        badge: "Most popular",
        points: [
          "Everything in Essentials",
          "Unlimited analysis",
          "Managed disputes and renegotiations",
          "Spend intelligence",
          "Up to 5 locations",
        ],
      },
      {
        name: "Scale",
        price: "$899/mo",
        note: "~20–30 Frank tasks / month",
        points: [
          "Everything in Complete",
          "Dedicated specialist hours",
          "Multi-entity CRM",
          "Custom playbooks",
        ],
      },
      {
        name: "Partner",
        price: "Custom",
        note: "White-label and seat packs",
        points: [
          "Your brand on the portal",
          "Agent and client seats",
          "Quote, invoice, commissions",
          "Shared Frank bandwidth",
        ],
      },
    ],
  },
  quotes: [
    "Frank explained the rate hike better than the processor. Then Candid actually called them. Good team.",
    "We white-labeled the portal for our accounting clients. Quoting and renewals finally live in one place, and it looks like us.",
    "I forwarded one renewal email. Four follow-ups later we were $18k a year better. I barely lifted a finger.",
  ],
  close: {
    label: "Ready when you are",
    title: "It’s time to be candid about your stack.",
    call: "Call (815) 207-8000",
    email: "Email us",
    visit: "Open candidiq.app",
  },
} as const;
