import { PayMethodMark } from "@/components/products/PayMethodMark";
import { candidPayPage } from "@/lib/products";

export function PayGateways() {
  const { gateways, methods } = candidPayPage;
  const loop = [...gateways.items, ...gateways.items];

  return (
    <div className="pay-rails">
      <section className="pay-gateways" aria-label="Connected payment gateways">
        <p className="pay-gateways__label">{gateways.label}</p>
        <div className="pay-gateways__viewport">
          <ul className="pay-gateways__track">
            {loop.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= gateways.items.length || undefined}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pay-methods" aria-label="Payment methods">
        <p className="pay-methods__label">{methods.label}</p>
        <ul className="pay-methods__list">
          {methods.items.map((name) => (
            <li key={name} className="pay-method">
              <PayMethodMark name={name} />
              <span className="pay-method__sr">{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
