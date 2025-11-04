import { CalendarDays, Clock, Filter, Search } from "lucide-react";

export function SearchPanel() {
  return (
    <section className="space-y-3">
      <div className="relative flex items-center rounded-3xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
        <Search className="mr-3 h-5 w-5 text-slate-400" />
        <input
          type="search"
          placeholder="Search dishes, chefs, or venues"
          className="flex-1 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
        />
        <button
          type="button"
          className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700"
        >
          <Filter className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
        >
          <Clock className="h-4 w-4 text-orange-500" />
          ASAP
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
        >
          <CalendarDays className="h-4 w-4 text-orange-500" />
          Schedule
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
        >
          Outdoor Seating
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
        >
          Chef's Menu
        </button>
      </div>
    </section>
  );
}
