type Card = { name: string; meta: string; price: string };
type Column = { title: string; cards: Card[] };

export function KanbanMock({ columns }: { columns: Column[] }) {
  return (
    <div className="visual-card">
      <div className="kanban">
        {columns.map((col, i) => (
          <div key={i} className="kanban-col">
            <h6>{col.title}</h6>
            {col.cards.map((card, j) => (
              <div key={j} className="kanban-card">
                <div className="font-semibold text-white">{card.name}</div>
                <div className="text-ink-mute text-[0.68rem] mt-1">{card.meta}</div>
                <div className="text-brand-light font-semibold text-[0.78rem] mt-1">
                  {card.price}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
