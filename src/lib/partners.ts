import { site } from "@/lib/site";

export const partnerPage = {
  nav: [
    { href: "#overview", label: "Overview" },
    { href: "#tracks", label: "Tracks" },
    { href: "#how", label: "How it works" },
    { href: "#tools", label: "The kit" },
    { href: "#apply", label: "Apply" },
  ],
  hero: {
    eyebrow: "Partner Program",
    titleBefore: "Sell a broader ",
    titleAccent: "practice.",
    lead: "We manage 250+ supplier agreements so you don’t have to. Engineers, quoting, and the back office come with you. No quotas.",
    ghost: { href: "#tracks", label: "See the tracks" },
    solid: { href: "#apply", label: "Let’s Chat" },
    panelKicker: "Already in?",
    panelTitle: "The back office is ready when you are.",
    panelBody:
      "Rates, commissions, order status, and monthly bonuses live in one portal. Existing partners sign in. New partners start with a 20-minute call.",
    panelLink: { href: site.agentLogin, label: "Partner login" },
  },
  ticker: {
    live: "Sell",
    label: "The kit includes",
    items: [
      "Cloud",
      "Unified communications",
      "Security",
      "Connectivity",
      "Wireless",
      "IoT",
      "Video collaboration",
      "Expense management",
      "Payments",
      "Managed IT",
    ],
  },
  overview: {
    label: "Overview",
    title: "A turnkey practice. You keep the relationship.",
    body: "Agents, resellers, and MSPs need a broader book or they get left behind. Candid is the back office and the bench: pre-sales, post-sales, carrier-neutral engineers, and the portal. Where you don’t have staff, time, or a matrix, we fill the gap.",
    stats: [
      { n: "250+", label: "vetted suppliers in the portfolio" },
      { n: "71", label: "carrier APIs in the quoting tool" },
      { n: "2 days", label: "to be up and selling after the call" },
      { n: "0", label: "quotas, tiers, or exclusivity clauses" },
    ],
  },
  tracks: {
    label: "Three tracks. No fancy names.",
    title: "Refer, co-sell, or add a full practice.",
    lead: "A short discovery call matches the track to your goals and how much of the work you want to own. Residuals last as long as the customer stays on services Candid manages.",
    items: [
      {
        kicker: "Refer",
        title: "You send the name. We do the rest.",
        rate: "20–30%",
        note: "Upfront and residual",
        body: "Point the prospect at Candid. When the deal closes, you earn. Simple if you want extra income without building a desk.",
      },
      {
        kicker: "Co-sell",
        title: "You and Candid, in the room together.",
        rate: "40–50%",
        note: "Upfront and residual",
        featured: true,
        body: "Work the opportunity with Candid sales and engineers. You keep the relationship. We bring the diagrams, the quotes, and the close.",
      },
      {
        kicker: "Portfolio",
        title: "Add technology. Keep your brand.",
        rate: "Highest residual",
        note: "Scoped on the call",
        body: "You want the practice, not a one-off referral. Candid is the white-labeled bench: quoting, account management, and support under your name.",
      },
    ],
  },
  how: {
    label: "How it works",
    title: "From a 20-minute call to a residual.",
    steps: [
      {
        n: "01",
        title: "Discovery",
        body: "Goals, expertise, and how much ownership you want. Twenty minutes. No pitch deck marathon.",
      },
      {
        n: "02",
        title: "Pick a track",
        body: "Refer, co-sell, or portfolio. We set up the portal, the rates, and the bonus board.",
      },
      {
        n: "03",
        title: "Sell with backup",
        body: "Real-time quotes, decision matrices, and engineers on the call. You stay in front of the customer.",
      },
      {
        n: "04",
        title: "Stay paid",
        body: "Upfront bonuses when they hit. Residuals for the life of the account. Order status is a click, not a chase.",
      },
    ],
  },
  fill: {
    label: "Where Candid fills the gap",
    title: "The work you should not have to staff.",
    items: [
      {
        title: "Bill review",
        body: "We check the invoices, request credits, and clear billing issues so the customer stays.",
      },
      {
        title: "Contract renewals",
        body: "Renewals are a grind. We run them and keep you notified before leverage disappears.",
      },
      {
        title: "White-labeled engineers",
        body: "Carrier-neutral sales engineers design and diagram the solution. You look like a direct team.",
      },
      {
        title: "Managed marketing",
        body: "Co-branded slicks, drip campaigns, and creative so you can stay on selling.",
      },
      {
        title: "Up-sell on the base",
        body: "Account management sells new services into your book. You still earn the commission.",
      },
      {
        title: "Tickets and outages",
        body: "Escalations and reason-for-outage work go through us. You are not the after-hours NOC.",
      },
    ],
  },
  tools: {
    label: "The kit",
    title: "Tools that used to take a back office.",
    items: [
      {
        n: "01",
        title: "Real-time quoting",
        body: "71 carrier APIs, fiber maps, lit buildings, hosted UC, cable. Instant pricing instead of a week of emails.",
      },
      {
        n: "02",
        title: "Decision matrices",
        body: "Side-by-side terms, features, integrations, and contract length so the recommendation is instant.",
      },
      {
        n: "03",
        title: "Partner portal",
        body: "CRM, video training, order status, monthly bonuses, ticketing, and carrier contacts in one login.",
      },
      {
        n: "04",
        title: "Monitoring and NOC",
        body: "Circuit monitoring, network views, and ticket resolution so “what’s the status?” has an answer.",
      },
    ],
  },
  apply: {
    label: "Ready when you are",
    title: "Schedule the discovery call.",
    body: "Tell us about the book you already have, or the one you want. We typically reply within a business day. Existing partners can sign in.",
    login: "Partner login",
    overview: "Program overview PDF",
    overviewHref:
      "https://candid.solutions/wp-content/uploads/2024/03/Candid-Partner-Program-2020-11-13.pdf",
  },
} as const;
