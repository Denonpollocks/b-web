import { cn } from "@/lib/cn";

type Thread = { label: string; active?: boolean };
type Bubble = { type: "in" | "out" | "ai"; content: React.ReactNode };

export function ChatMock({
  threads,
  bubbles,
  footer,
  height = "360px",
}: {
  threads: Thread[];
  bubbles: Bubble[];
  footer?: React.ReactNode;
  height?: string;
}) {
  return (
    <div className="visual-card">
      <div className="chat-mock" style={{ height }}>
        <div className="chat-side">
          {threads.map((t, i) => (
            <div key={i} className={cn("chat-thread", t.active && "active")}>
              {t.label}
            </div>
          ))}
        </div>
        <div className="chat-body">
          {bubbles.map((b, i) => (
            <div
              key={i}
              className={cn(
                "bubble",
                b.type === "in" && "bubble-in",
                b.type === "out" && "bubble-out",
                b.type === "ai" && "bubble-ai",
              )}
            >
              {b.content}
            </div>
          ))}
          {footer}
        </div>
      </div>
    </div>
  );
}
