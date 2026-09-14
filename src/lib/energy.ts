export const energyPage = {
  nav: [
    { href: "#overview", label: "Overview" },
    { href: "#markets", label: "Markets" },
    { href: "#products", label: "Supply products" },
    { href: "#suppliers", label: "Suppliers" },
    { href: "#markets-data", label: "Live markets" },
    { href: "#how", label: "How we work" },
    { href: "#close", label: "Consultation" },
  ],
  hero: {
    eyebrow: "Energy brokerage",
    titleBefore: "Power you can ",
    titleAccent: "explain.",
    lead: "Electricity, natural gas, solar, water, waste, and EV charging. Candid shops the suppliers. You keep one relationship.",
    ghost: { href: "#suppliers", label: "See suppliers" },
    solid: { href: "/contact", label: "Let’s Chat" },
    panelKicker: "A Candid desk",
    panelTitle: "We sit on your side of the meter.",
    panelBody:
      "Utilities keep the wires and pipes. Candid brokers supply, structure, and the contract so finance can read the rate.",
    panelLink: { href: "#products", label: "See product structures" },
  },
  marketsBar: {
    label: "Energy",
    items: [
      "EV Charging",
      "Water & Waste",
      "Electricity",
      "Natural Gas",
      "Solar",
    ],
  },
  overview: {
    label: "Overview",
    title: "Energy brokerage, not another supplier pitch.",
    body: "Deregulated markets let you choose who supplies the commodity. The utility still delivers it. Candid compares structures, shops a living supplier list, and stays on the account after the switch.",
  },
  markets: {
    label: "Markets",
    title: "The load we already quote.",
    items: [
      {
        kicker: "Electricity",
        title: "Retail power",
        body: "Fixed, index, hybrid, and pass-through structures matched to how you actually use the meter.",
      },
      {
        kicker: "Natural gas",
        title: "Supply and transport",
        body: "NYMEX, basis, full requirements, or transport. Georgia DDDC when that is the tariff.",
      },
      {
        kicker: "Solar",
        title: "Supply from the sun",
        body: "Retail solar products and on-site options, without forcing a panel sale to make the math work.",
      },
      {
        kicker: "EV charging",
        title: "Power at the stall",
        body: "Site load, demand, and supply so charging does not surprise the electric bill.",
      },
      {
        kicker: "Water & waste",
        title: "The other meters",
        body: "Water and waste sit next to power and gas on the same Candid relationship.",
      },
    ],
  },
  electricity: {
    label: "Electricity",
    title: "How power is priced.",
    items: [
      {
        title: "Fixed All-In",
        body: "Energy, capacity, transmission, ancillaries, RPS, losses, and fees in one locked rate. Highest budget certainty. Regulatory programs can still adjust.",
      },
      {
        title: "Fixed with true-up",
        body: "A fixed product where capacity or transmission is recalculated when ISO or regulatory costs change.",
      },
      {
        title: "Fixed energy only",
        body: "Energy is fixed. Non-energy components pass through at true cost, without markup.",
      },
      {
        title: "LMP Index+ All-In",
        body: "Energy follows day-ahead or real-time LMP. Other costs sit in one fixed adder on the hourly settlement.",
      },
      {
        title: "LMP Index+ pass-through",
        body: "Energy follows the market. Non-energy costs pass through at cost. Full market exposure.",
      },
      {
        title: "Hybrid",
        body: "Part of the load is fixed. The rest floats on the local index, so you cap risk and still catch a down market.",
      },
    ],
    passThroughs: {
      title: "Common pass-throughs",
      items: [
        {
          title: "Capacity",
          body: "Billed at the ISO-published rate times the customer’s PLC / capacity tag.",
        },
        {
          title: "Transmission",
          body: "Follows the utility or ISO tariff and the transmission tag.",
        },
        {
          title: "RPS",
          body: "Mandated renewable generation costs, as defined by the state.",
        },
        {
          title: "RMR",
          body: "Reliability Must Run program costs, passed through without markup.",
        },
      ],
    },
  },
  gas: {
    label: "Natural gas",
    title: "How gas is priced.",
    items: [
      {
        title: "Fixed All-In",
        body: "NYMEX, basis, and supplier fees in one fixed cost per unit. The supplier carries the market risk.",
      },
      {
        title: "NYMEX Index+ (basis-only)",
        body: "Basis is fixed. NYMEX floats. Location cost is stable; commodity tracks the screen.",
      },
      {
        title: "CG Index+ pass-through",
        body: "NYMEX, basis, and other costs at local market. Only a supplier fee on top.",
      },
      {
        title: "Hybrid",
        body: "A share of volume is fixed. The rest follows the local index.",
      },
      {
        title: "Fixed + DDDC (Georgia)",
        body: "Commodity is fixed. Dedicated Design Day Capacity bills as a separate monthly charge for peak pipeline reservation.",
      },
      {
        title: "Full requirements vs. transport",
        body: "Full requirements bundles commodity, scheduling, and transport. Transport service splits logistics from supply.",
      },
    ],
  },
  suppliers: {
    label: "Suppliers",
    title: "A bench we already work.",
    lead: "Independent names, utilities’ competitive affiliates, and renewable desks. Candid remains the advisor.",
    items: [
      {
        name: "Advantage Energy Partners",
        body: "Independent procurement advisor for commercial, industrial, agricultural, and government load. Exclusive marketer of BOCOR Holdings natural gas.",
      },
      {
        name: "AEP Energy",
        body: "Certified competitive retail electricity and natural gas supplier. Serves more than 400,000 homes and businesses.",
      },
      {
        name: "Aggressive Energy",
        body: "Forty years in natural gas and electricity for commercial, industrial, and institutional accounts across the Northeast, Mid-Atlantic, and Midwest.",
      },
      {
        name: "Hudson Energy",
        body: "Business-to-business electricity, natural gas, and green supply in North America since 2002.",
      },
      {
        name: "Ammper Power",
        body: "ERCOT electric provider. Commodity, technical, and financial work for multinational load that needs a competitive position.",
      },
      {
        name: "APG&E",
        body: "Houston-founded, privately held supply for homeowners and small business, now in markets across the U.S.",
      },
      {
        name: "ASC Energy Services",
        body: "NYS PSC-authorized natural gas supply for residential and commercial accounts. The utility still owns the pipes.",
      },
      {
        name: "Atlantic Energy",
        body: "New York–based supplier focused on service, lower consumption, and power from clean sources.",
      },
      {
        name: "BKV Energy",
        body: "Texas electricity with simple plans, fair prices, and contracts you can read.",
      },
      {
        name: "Bolt Energy",
        body: "Independent retail natural gas nationwide. Fixed-rate unlimited-usage options when the bill needs to stop swinging.",
      },
      {
        name: "EDF Energy Services",
        body: "Single- and multi-product supply for large C&I, generators, and retail providers. Top-tier North American desk.",
      },
      {
        name: "Brookfield Renewable",
        body: "One of the world’s largest renewable owners and operators. Hydro, wind, solar, and storage across four continents.",
      },
      {
        name: "Calpine Energy Solutions",
        body: "Licensed retail provider in every deregulated state. One of the largest energy suppliers in North America.",
      },
      {
        name: "Catalyst Power",
        body: "Retail power and gas plus connected microgrids—onsite solar and gas generation for C&I load.",
      },
      {
        name: "Champion Energy Services",
        body: "Calpine retail electricity for residential, government, commercial, and industrial accounts in deregulated markets.",
      },
      {
        name: "Chariot Energy",
        body: "100% solar supply in Texas, priced against brown power, with plans for homes that already have panels.",
      },
      {
        name: "Chief Energy",
        body: "New York ESCO and heating-oil delivery. In-house pricing against daily market moves.",
      },
      {
        name: "CleanSky Energy",
        body: "Retail electricity backed by 100% solar or wind, or carbon-neutral products, at a competitive rate.",
      },
      {
        name: "Clearview Energy",
        body: "Moves load from fossil-generated power to wind, hydro, and solar so the electric share of the carbon footprint can go to zero.",
      },
    ],
  },
  grid: {
    label: "Live markets",
    title: "See the grid before you sign.",
    body: "GridStatus is built for people who want to know what is happening in power markets first. Candid uses that picture when we quote structure.",
    primary: { href: "https://www.gridstatus.io/", label: "Open GridStatus" },
    secondary: { href: "https://www.gridstatus.io/live", label: "Live map" },
  },
  process: {
    label: "How we work",
    title: "From usage to a contract you can defend",
    steps: [
      {
        n: "01",
        title: "Listen",
        body: "Usage, interval data, current contracts, and which meters actually matter.",
      },
      {
        n: "02",
        title: "Structure",
        body: "Fixed, index, hybrid, or pass-through. The product has to match the load.",
      },
      {
        n: "03",
        title: "Shop",
        body: "We take it to the bench. You see comparable offers, not a single binder.",
      },
      {
        n: "04",
        title: "Stay on it",
        body: "Renewals, true-ups, and market moves. The rate should still make sense in month fourteen.",
      },
    ],
  },
  close: {
    label: "Ready when you are",
    title: "Want the energy bills reviewed?",
    call: "Call (815) 207-8000",
    email: "Email us",
    visit: "Open GridStatus",
    visitHref: "https://www.gridstatus.io/",
  },
} as const;
