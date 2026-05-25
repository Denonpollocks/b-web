import { cn } from "@/lib/cn";

export function Split({
  reverse,
  copy,
  visual,
}: {
  reverse?: boolean;
  copy: React.ReactNode;
  visual: React.ReactNode;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-14 items-center",
          )}
        >
          <div className={cn("reveal-on-scroll", reverse && "lg:order-2")}>{copy}</div>
          <div className={cn("reveal-on-scroll", reverse && "lg:order-1")}>{visual}</div>
        </div>
      </div>
    </section>
  );
}

export function FeatList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="feat-list">
      {items.map((item, i) => (
        <li key={i}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
