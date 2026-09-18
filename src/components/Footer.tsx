import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Logo />
          <p>
            Candid Solutions, Inc. From carrier brokerage to a full-service IT
            consulting firm. Parent company of CandidPay and CandidIQ.
          </p>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={site.emailHref}>{site.email}</a>
          </p>
        </div>
        <div>
          <p className="site-footer__label">Company</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a href={site.agentLogin}>Agent login</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="site-footer__label">Products</p>
          <ul>
            <li>
              <Link href="/solutions/candidpay">CandidPay</Link>
            </li>
            <li>
              <a href={site.candidPay} rel="noopener noreferrer" target="_blank">
                candidpay.app ↗
              </a>
            </li>
            <li>
              <Link href="/solutions/candidiq">CandidIQ</Link>
            </li>
            <li>
              <a href={site.candidIq} rel="noopener noreferrer" target="_blank">
                candidiq.app ↗
              </a>
            </li>
            <li>
              <Link href="/solutions/energy">Energy</Link>
            </li>
            <li>
              <Link href="/solutions/technology">Technology</Link>
            </li>
          </ul>
        </div>
        <div className="site-footer__contact">
          <p className="site-footer__label">Contact</p>
          <ul>
            <li>
              <Link href="/contact">Let’s Chat!</Link>
            </li>
            <li>
              Mon–Fri 7:00 AM–6:00 PM
              <br />
              Sat 10:00 AM–2:00 PM
            </li>
          </ul>
        </div>
      </div>
      <p className="site-footer__legal">
        © {new Date().getFullYear()} Candid Solutions, Inc. · Commitment ·
        Innovation · Reputation · Excellence
      </p>
    </footer>
  );
}
