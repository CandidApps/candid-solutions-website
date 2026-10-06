import type { TechnologyTopic } from "@/components/technology/TechnologyTopicPage";

export const paymentProcessingTopic = {
  path: "/solutions/payment-processing",
  metaTitle: "Payment processing & point of sale",
  description:
    "Payment processing and point of sale from Candid for one site or many. Lower fees, hardware that fits, and CandidPay watching the statement.",
  kicker: "Technology",
  title: "Payment processing that a controller can read.",
  lead: "Lower fees. Digital-first and self-service point of sale. CandidPay is our payments ISO, so the statement, the rate, and the hardware sit with the same company as the rest of the account.",
  sectionLabel: "What we cover",
  sectionTitle: "Processing, hardware, and the statement.",
  sectionLead:
    "Quoted around how your locations take money. Hardware changes only when the current setup is costing you.",
  points: [
    {
      title: "Rates you can explain",
      body: "No teaser that disappears in month four. We quote processing around the way your locations actually take money.",
    },
    {
      title: "Point of sale",
      body: "Digital-first and self-service POS, matched to the counter you run. We change hardware only when the current setup is costing you or failing.",
    },
    {
      title: "Statements watched",
      body: "CandidPay stays on the account after the install. Fees, residuals, and the bill get a second set of eyes.",
    },
  ],
  aside: {
    before: "The payments desk is",
    href: "/solutions/candidpay",
    label: "CandidPay",
    after: ".",
  },
  more: {
    label: "At a glance",
    title: "One site or many. The details still have to match.",
    points: [
      {
        title: "How they pay",
        body: "In person, on the phone, online, or against an invoice. The setup follows that. It is not a template written for a store chain.",
      },
      {
        title: "Negotiations stay here",
        body: "Rates are not left to whoever is on site that day. One invoice, or a bill per location. Either way, Candid is the relationship.",
      },
      {
        title: "The same setup everywhere",
        body: "A second location should not mean a second processor and a bill no one can reconcile. Adding or moving a site uses the same playbook.",
      },
    ],
  },
  extra: {
    label: "With CandidPay",
    title: "The payments desk sits on the same account.",
    points: [
      {
        title: "The statement, read",
        body: "CandidPay watches fees and the bill after install. This page is where that work meets phones, internet, and the rest of the account.",
      },
      {
        title: "Hardware only when it should change",
        body: "Counter, handheld, or unattended. We keep what works. A specialist build, when you need one, still comes back to Candid.",
      },
      {
        title: "Quoted with the rest",
        body: "Processing is not a separate vendor you have to introduce to your network. The same team that places the circuit can place the terminal.",
      },
    ],
  },
} as const satisfies TechnologyTopic;

export const contactCenterTopic = {
  path: "/solutions/contact-center",
  metaTitle: "Contact center & business phone systems",
  description:
    "Business phone systems and contact center platforms from Candid. Call routing, recording, omnichannel, and HIPAA-minded setups. Carrier-agnostic.",
  kicker: "Technology",
  title: "Phone systems and contact centers, matched to the call.",
  lead: "How you take the call is how you keep the customer. Candid is carrier-agnostic. We compare more than 150 contact center and UCaaS platforms, then stay on the account after cutover. Customers should not have to repeat themselves.",
  sectionLabel: "What we cover",
  sectionTitle: "The features that change the call.",
  points: [
    {
      title: "Call routing",
      body: "Route by queue, hours, and skill so the right person picks up. Multiple queues stay manageable when volume spikes.",
    },
    {
      title: "Every channel they already use",
      body: "Voice, email, SMS, social, chat, and IVR on one desktop. Agents work from a PC and broadband, including at home, without a stack of traditional phone lines.",
    },
    {
      title: "Recording and coaching",
      body: "Supervisors can monitor, whisper, and barge. Call recording and quality tools show where training is missing, so the next call goes better.",
    },
  ],
  more: {
    label: "How it stays up",
    title: "Reporting, circuits, and the rules around the call.",
    points: [
      {
        title: "Analytics",
        body: "A live dashboard for the floor, plus history you can export: abandonment, time to answer, wait time, and duration.",
      },
      {
        title: "Circuits and recovery",
        body: "A network engineer checks that the circuits can carry the center. If downtime is expensive, we plan redundancy before you need it, and we negotiate the per-minute rate.",
      },
      {
        title: "HIPAA-minded setups",
        body: "For clinics, pharmacies, and other healthcare teams, we shortlist platforms that can be configured for access, call recording, and retention in support of HIPAA compliance.",
      },
    ],
  },
} as const satisfies TechnologyTopic;

export const cybersecurityTopic = {
  path: "/solutions/cybersecurity",
  metaTitle: "Cybersecurity",
  description:
    "Cybersecurity from Candid. A risk-first assessment, zero trust access, remote work, and right-sized controls mapped to the NIST framework.",
  kicker: "Technology",
  title: "If you are connected, you are a target.",
  lead: "Candid helps you limit the cost of a breach with an assessment, data protection, and threat mitigation. We design a layered approach and skip the boxes you do not need.",
  sectionLabel: "What we cover",
  sectionTitle: "Identify, protect, detect, respond, recover.",
  sectionLead:
    "The plan stays in that language. You do not buy every box on the sheet.",
  points: [
    {
      title: "A strategy, not a product list",
      body: "We use the NIST cybersecurity framework so the conversation stays on where you are: Identify, Protect, Detect, Respond, and Recover.",
    },
    {
      title: "Zero trust access",
      body: "Zero trust network access keeps the wrong person out, contains a breach, and limits how far an attacker can move.",
    },
    {
      title: "Right-sized controls",
      body: "Next-gen firewalls, encryption, and access, chosen for your risk and your compliance needs. Users still reach the applications. You do not buy every box on the sheet.",
    },
  ],
  more: {
    label: "Our approach",
    title: "Risk first. Then the tools.",
    points: [
      {
        title: "What the business cannot lose",
        body: "We start with the systems and data that matter, what they are worth, and what happens if they are lost or exposed.",
      },
      {
        title: "How likely that is",
        body: "Threats change. The program is not set and forget. Likelihood and impact decide what gets done first.",
      },
      {
        title: "Mitigation in order",
        body: "Controls are prioritized, not purchased as a bundle. Identify, Protect, Detect, Respond, and Recover stay the language of the plan.",
      },
    ],
  },
  extra: {
    label: "Where people work",
    title: "Protection that follows the work.",
    points: [
      {
        title: "People away from the office",
        body: "A laptop at home is still a door. Remote access is designed so the application opens and the rest of the network does not.",
      },
      {
        title: "An assessment, not a catalog",
        body: "Sized to your risk and the compliance terms you actually have to meet. A near-term list, and a longer plan beside it.",
      },
      {
        title: "Kept current",
        body: "The plan is reviewed as the threats move. You get a strategy you can keep, not a stack that was finished on install day.",
      },
    ],
  },
} as const satisfies TechnologyTopic;

export const cloudTopic = {
  path: "/solutions/cloud",
  metaTitle: "Cloud infrastructure",
  description:
    "Cloud, hosting, and colocation from Candid. Public or private cloud, a facility when the hardware should stay put, and recovery decided before the outage.",
  kicker: "Technology",
  title: "Cloud, hosting, and colocation in the right place.",
  lead: "Engineers design and implement for your environment, not a vendor quota. Decade-long relationships with cloud and colo providers, at a cost you can explain.",
  sectionLabel: "What we cover",
  sectionTitle: "Where the workload should live.",
  sectionLead:
    "The workload decides the building. We staff the comparison, the cutover, and the account after it.",
  points: [
    {
      title: "Cloud and hosting",
      body: "Public cloud, a private environment, or hosting. Selected for the operation you run. We staff the comparison and the cutover.",
    },
    {
      title: "Colocation",
      body: "When the hardware should stay in a facility, we place it with providers we already work. Hands on site stay with the building. Candid stays on the account.",
    },
    {
      title: "One company after go-live",
      body: "You do not inherit a new account manager because the project moved from quote to production. Candid remains the call.",
    },
  ],
  more: {
    label: "The mix",
    title: "Not every workload belongs in the same place.",
    points: [
      {
        title: "Public or private",
        body: "Public cloud, a dedicated private environment, or shared infrastructure. We recommend the one the workload can live on. Not the one a quota prefers.",
      },
      {
        title: "A path between them",
        body: "A facility and a public cloud can sit on one design. The connection between them is part of the quote, not a second project.",
      },
      {
        title: "Sized to the job",
        body: "Space, power, and the platform match what you run. You do not rent a hall you will not fill.",
      },
    ],
  },
  extra: {
    label: "If it stops",
    title: "Recovery is decided before the outage.",
    points: [
      {
        title: "A copy off the site",
        body: "Backups live somewhere other than the server they protect. The restore is checked against the recovery point you were quoted.",
      },
      {
        title: "Failover for what cannot wait",
        body: "Applications that have to come back get a recovery plan. Everything else is not given the same promise.",
      },
      {
        title: "Regulated data, a shorter list",
        body: "When the data has to meet terms like HIPAA or PCI, we shortlist facilities that can support that. Candid does not certify the environment.",
      },
    ],
  },
} as const satisfies TechnologyTopic;

export const internetTopic = {
  path: "/solutions/internet",
  metaTitle: "Internet & SD-WAN",
  description:
    "Business internet and SD-WAN from Candid. Fiber, wireless, or satellite, a failover overlay with security at the edge, one bill, and quotes from 160+ providers.",
  kicker: "Technology",
  title: "Internet and SD-WAN, one bill you can explain.",
  lead: "Business-class connectivity across locations. Visibility into the network, and a single point of contact instead of a stack of carrier tickets.",
  sectionLabel: "What we cover",
  sectionTitle: "Circuits, then the overlay.",
  points: [
    {
      title: "Business internet",
      body: "Fiber, ethernet, or cable, quoted live from 160+ providers. A solutions engineer typically presents within 24–48 hours.",
    },
    {
      title: "Where a wire will not reach",
      body: "LTE and 5G when a site needs a backup, or a primary that is not fiber. Satellite is on the quote where a wire will not get there.",
    },
    {
      title: "SD-WAN",
      body: "Locations stay reachable when a circuit fails. Traffic takes the path that fits the application, and you can see it. Every site uses the same design.",
    },
    {
      title: "Security on the overlay",
      body: "The person is checked before an application opens. A firewall sits at the edge. A remote user and a branch follow the same rule.",
    },
    {
      title: "One invoice, or one per site",
      body: "Consolidated billing or a bill per location. Tickets and the carrier calls sit with Candid either way.",
    },
  ],
  more: {
    label: "At a glance",
    title: "Quoted for the location you actually have.",
    points: [
      {
        title: "Fiber, ethernet, or cable",
        body: "The quote starts with the wire. Fiber, ethernet, or cable, live from 160+ providers. A solutions engineer typically presents within 24–48 hours.",
      },
      {
        title: "When a wire will not do",
        body: "LTE and 5G are on the quote as a backup, or as a primary that is not fiber. Satellite is included where a wire will not get there.",
      },
      {
        title: "The same design at every site",
        body: "A second location uses the same design, and the same point of contact, instead of another stack of carrier tickets.",
      },
    ],
  },
  extra: {
    label: "How it stays up",
    title: "After the circuit is in, the account stays here.",
    points: [
      {
        title: "Reachable when a circuit fails",
        body: "The overlay keeps the location reachable when a circuit fails. Traffic takes the path that fits the application, and you can see it.",
      },
      {
        title: "One rule at the edge",
        body: "A firewall sits at the edge. The person is checked before an application opens. A branch and a remote user follow the same rule.",
      },
      {
        title: "One bill, and the ticket stays here",
        body: "One invoice, or a bill per location. Carrier calls and tickets sit with Candid either way.",
      },
    ],
  },
} as const satisfies TechnologyTopic;
