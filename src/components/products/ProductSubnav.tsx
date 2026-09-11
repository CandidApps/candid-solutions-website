export function ProductSubnav({
  items,
}: {
  items: readonly { href: string; label: string }[];
}) {
  return (
    <nav className="subnav" aria-label="On this page">
      <div className="subnav__inner">
        {items.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
