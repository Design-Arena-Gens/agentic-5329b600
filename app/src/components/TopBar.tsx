import { Bell, ChevronDown, MapPin, Menu } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex items-center justify-between gap-3 py-4">
      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-slate-200/80 px-3 py-1.5 text-left shadow-sm backdrop-blur transition-colors hover:border-orange-300 hover:bg-orange-50"
      >
        <MapPin className="h-4 w-4 text-orange-500" />
        <span className="text-xs font-medium text-slate-500">
          Delivering to
        </span>
        <span className="flex items-center gap-1 text-sm font-semibold text-slate-900">
          Midtown West
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </span>
      </button>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white shadow-sm transition hover:border-orange-300 hover:bg-orange-50"
        >
          <Bell className="h-5 w-5 text-slate-700" />
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white shadow-sm transition hover:border-orange-300 hover:bg-orange-50"
        >
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
      </div>
    </header>
  );
}
