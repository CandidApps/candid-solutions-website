export const contactCenterPage = {
  nav: [
    { href: "#overview", label: "Overview" },
    { href: "#examples", label: "On the floor" },
    { href: "#work", label: "The work" },
    { href: "#how", label: "How it runs" },
    { href: "#close", label: "Talk to us" },
  ],
  rail: {
    label: "What we compare",
    items: [
      "Call routing",
      "Voice",
      "Chat",
      "SMS",
      "Recording",
      "Coaching",
      "Analytics",
      "AI handoff",
      "Quality",
      "Forecasting",
      "Circuits",
      "After hours",
    ],
  },
  overview: {
    label: "Overview",
    title: "The repeat work should not need someone on the line.",
    body: "The hard call should not start over. Candid compares platforms that finish the daily questions, then hand a person the history. Voice, chat, SMS, and email land on one desktop. We stay on the account after cutover.",
    sheetTitle: "What we look for",
    sheetKicker: "On the shortlist",
    rows: [
      {
        title: "Routine first",
        body: "Order status, appointments, hours, and the questions that repeat.",
      },
      {
        title: "A clean handoff",
        body: "The person sees the channel and what was already said.",
      },
      {
        title: "One floor",
        body: "Queues, skills, and after-hours routing on the same design.",
      },
    ],
    note: "Matched to your account. Not a feature list from a single vendor.",
  },
  examples: {
    label: "On the floor",
    title: "The industries change. The call does not.",
    lead: "A clinic, a busy service line, and a team that is not in one building. The platform has to fit that work. These are the patterns we match. Not a projection for your account.",
    items: [
      {
        kicker: "Healthcare",
        title: "The chart should not be retold",
        body: "For clinics, pharmacies, and other healthcare teams, we shortlist platforms that can be configured for access, call recording, and retention in support of HIPAA compliance. Scheduling and follow-up stay in the same thread.",
      },
      {
        kicker: "Service desks",
        title: "Finish the question they ask every day",
        body: "Order status, an appointment, a balance, a store hour. High-volume questions can resolve before they reach a person. When they cannot, the handoff includes the thread.",
      },
      {
        kicker: "More than one site",
        title: "The same queue, wherever they sit",
        body: "Agents on a PC and broadband, including at home. Hours, skills, and after-hours routing stay one design. A supervisor can still monitor, whisper, and barge.",
      },
    ],
  },
  work: {
    label: "The work",
    title: "From the first ring to the record.",
    lead: "Six things we hold a platform to. None of them require your customer to start over.",
    items: [
      {
        n: "01",
        title: "Route by the work",
        body: "Queue, hours, and skill. When volume spikes, the next call still has a place to land.",
      },
      {
        n: "02",
        title: "One desktop",
        body: "Voice, email, SMS, social, chat, and IVR. The history is already on the screen.",
      },
      {
        n: "03",
        title: "Hand off with context",
        body: "Automated paths take the routine. A person gets the thread, not a blank screen.",
      },
      {
        n: "04",
        title: "Record and coach",
        body: "Monitor, whisper, and barge. Recording shows where the next call should go better.",
      },
      {
        n: "05",
        title: "See the floor",
        body: "Abandonment, time to answer, wait, and duration. Staffing is planned, not guessed.",
      },
      {
        n: "06",
        title: "Carry the traffic",
        body: "A network engineer checks the circuits. If downtime is expensive, we plan redundancy and negotiate the per-minute rate.",
      },
    ],
  },
  process: {
    label: "How it runs",
    title: "Four steps, then the account stays open.",
    steps: [
      {
        n: "01",
        title: "Start with what repeats",
        body: "The questions the floor already knows by heart. Those are the first workflows worth automating.",
      },
      {
        n: "02",
        title: "Prove the handoff",
        body: "A person should receive the channel, the history, and what was already said. The customer does not begin again.",
      },
      {
        n: "03",
        title: "Turn recording into coaching",
        body: "Quality on the calls you already take. The gap in the script shows up before the next busy day.",
      },
      {
        n: "04",
        title: "Stay after cutover",
        body: "Reporting, the per-minute rate, and a circuit that can carry the floor. Candid does not leave at go-live.",
      },
    ],
  },
  close: {
    label: "Talk to us",
    title: "Want the right person to pick up?",
    call: "Call (815) 207-8000",
    email: "Email Us",
  },
} as const;
