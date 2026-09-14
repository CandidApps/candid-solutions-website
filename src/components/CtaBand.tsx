import Link from "next/link";

export function CtaBand() {
  return (
    <section className="cta-band" id="consultation">
      <div className="cta-band__inner">
        <div className="cta-band__copy">
          <p className="label">Next step</p>
          <h2>
            You have a vision.{" "}
            <span className="cta-band__line">
              We have a way to get you there.
            </span>
          </h2>
        </div>
        <Link href="/contact" className="btn btn-solid">
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
