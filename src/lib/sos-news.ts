const SOS_ORIGIN = "https://www.sosdailynews.com";

export type SosTicket = {
  id: string;
  category: string;
  title: string;
  href: string;
};

function decode(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, num: string) =>
      String.fromCharCode(Number(num)),
    )
    .replace(/&rsquo;|&apos;/g, "’")
    .replace(/&ldquo;|&rdquo;|&quot;/g, "”")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function ticketId(title: string, index: number) {
  const n = title.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return `TKT-${String((n % 9000) + 1000 + index).padStart(4, "0")}`;
}

export const fallbackTickets: SosTicket[] = [
  {
    id: "TKT-2401",
    category: "Your Security",
    title: "81 Million Login Attempts Later: Why Reusing Passwords Is Still So Dangerous",
    href: `${SOS_ORIGIN}/news/2026/08/81-million-login-attempts-later-why-reusing-passwords-is-still-so-dangerous`,
  },
  {
    id: "TKT-2402",
    category: "Your Security",
    title: "Microsoft Just Fixed 400+ Security Holes. Yes, You Should Update Windows.",
    href: `${SOS_ORIGIN}/news/2026/08/microsoft-just-fixed-400-security-holes-yes-you-should-update-windows`,
  },
  {
    id: "TKT-2403",
    category: "Identity Theft",
    title: "Drivers’ License Numbers Speed Off Into Hackers’ Hands in Massive Data Breach",
    href: `${SOS_ORIGIN}/`,
  },
  {
    id: "TKT-2404",
    category: "Mobile Security",
    title: "This iPhone Exploit Can Slice Right Through Your Device’s Security Defenses",
    href: `${SOS_ORIGIN}/`,
  },
  {
    id: "TKT-2405",
    category: "Scams & Phishing",
    title: "Why That Local Call Might Be a Scam",
    href: `${SOS_ORIGIN}/`,
  },
];

export async function getSosNews(): Promise<SosTicket[]> {
  try {
    const res = await fetch(SOS_ORIGIN, {
      headers: {
        "user-agent":
          "CandidSolutionsBot/1.0 (+https://candid.solutions; news ticker)",
        accept: "text/html",
      },
      next: { revalidate: 1800 },
    });
    if (!res.ok) return fallbackTickets;

    const html = await res.text();
    const articles = html.match(/<article[\s\S]*?<\/article>/gi) ?? [];
    const seen = new Set<string>();
    const tickets: SosTicket[] = [];

    for (const article of articles) {
      const hrefMatch = article.match(/href="(\/news\/[^"]+)"/i);
      const titleMatch =
        article.match(/class="(?:xtitlex|titlex2|titlex3|titlex)"[^>]*>([\s\S]*?)<\/(?:h3|span)>/i) ??
        article.match(/<(?:h3)[^>]*>([\s\S]*?)<\/h3>/i);
      const catMatch = article.match(/class="catmain"[^>]*>([\s\S]*?)<\/span>/i);
      if (!hrefMatch || !titleMatch) continue;

      const title = decode(titleMatch[1]);
      if (!title || title.length < 12 || seen.has(title)) continue;
      seen.add(title);

      tickets.push({
        id: ticketId(title, tickets.length),
        category: decode(catMatch?.[1] ?? "Security"),
        title,
        href: new URL(hrefMatch[1], SOS_ORIGIN).toString(),
      });
      if (tickets.length >= 12) break;
    }

    return tickets.length ? tickets : fallbackTickets;
  } catch {
    return fallbackTickets;
  }
}
