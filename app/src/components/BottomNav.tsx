import {
  Bookmark,
  CircleUser,
  Compass,
  Home,
  Timer,
} from "lucide-react";

const items = [
  { id: "home", label: "Discover", icon: Home, active: true },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "favorites", label: "Saved", icon: Bookmark },
  { id: "activity", label: "Activity", icon: Timer },
  { id: "profile", label: "Profile", icon: CircleUser },
];

export function BottomNav() {
  return (
    <nav className="sticky bottom-4 left-0 right-0 mx-auto flex max-w-xl items-center justify-between rounded-full border border-slate-200/70 bg-white/95 px-4 py-2 shadow-lg shadow-slate-300/40 backdrop-blur-lg md:max-w-3xl">
      {items.map(({ active, icon: Icon, id, label }) => (
        <button
          key={id}
          type="button"
          className={`flex flex-1 flex-col items-center gap-1 rounded-full px-2 py-2 text-[11px] font-semibold transition ${
            active
              ? "bg-slate-900 text-white shadow"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <Icon className={`h-5 w-5 ${active ? "text-white" : ""}`} />
          {label}
        </button>
      ))}
    </nav>
  );
}
