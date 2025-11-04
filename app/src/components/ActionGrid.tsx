import {
  CalendarCheck2,
  HandPlatter,
  Martini,
  NotebookPen,
  Package,
  Sparkles,
} from "lucide-react";

const actions = [
  {
    id: "order-now",
    label: "Order now",
    description: "Pickup or deliver in 30 min",
    icon: Package,
    accent: "bg-gradient-to-br from-orange-500 to-rose-500 text-white",
  },
  {
    id: "book-table",
    label: "Reserve table",
    description: "Chef's counter & tasting menus",
    icon: CalendarCheck2,
    accent: "bg-gradient-to-br from-slate-900 to-slate-800 text-white",
  },
  {
    id: "concierge",
    label: "Concierge chat",
    description: "Plan your next experience",
    icon: NotebookPen,
    accent: "bg-gradient-to-br from-slate-100 to-white text-slate-900 border border-slate-200",
  },
  {
    id: "private",
    label: "Private dining",
    description: "Host nights & tasting flights",
    icon: HandPlatter,
    accent: "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white",
  },
  {
    id: "pairings",
    label: "Pairing lounge",
    description: "Wine, sake & spirit pairings",
    icon: Martini,
    accent: "bg-gradient-to-br from-violet-500 to-indigo-600 text-white",
  },
  {
    id: "curations",
    label: "Chef curations",
    description: "Pre-fixe menus built for you",
    icon: Sparkles,
    accent: "bg-gradient-to-br from-amber-400 to-orange-500 text-white",
  },
];

export function ActionGrid() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Jump back in
          </p>
          <h2 className="text-lg font-bold text-slate-900">
            Everything you can do here
          </h2>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-slate-500 transition hover:text-slate-800"
        >
          Customize
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {actions.map(({ accent, description, icon: Icon, id, label }) => (
          <button
            type="button"
            key={id}
            className={`group relative overflow-hidden rounded-3xl p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${accent}`}
          >
            <div className="absolute -right-12 -top-10 h-32 w-32 rounded-full bg-white/10 blur-xl transition-all group-hover:scale-125 group-hover:bg-white/20" />
            <div className="relative z-10 flex items-start gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Icon className="h-6 w-6" />
              </span>
              <div className="space-y-1">
                <p className="text-base font-semibold">{label}</p>
                <p className="text-sm opacity-80">{description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
