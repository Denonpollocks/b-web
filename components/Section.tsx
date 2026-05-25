import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24 relative", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-[760px] mb-16 reveal-on-scroll",
        align === "center" ? "mx-auto text-center" : "",
      )}
    >
      {eyebrow}
      <h2 className={eyebrow ? "mt-4" : ""}>{title}</h2>
      {description && (
        <p className="text-[1.1rem] mt-2">{description}</p>
      )}
    </div>
  );
}
