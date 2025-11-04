import { Car, ChefHat, Navigation, Timer } from "lucide-react";

export function LiveTrackingCard() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Live now
          </p>
          <h2 className="text-lg font-bold text-slate-900">
            Track order & table requests
          </h2>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-slate-500 transition hover:text-slate-800"
        >
          View history
        </button>
      </div>
      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/30">
        <div className="px-5 py-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
            <Navigation className="h-4 w-4" />
            On its way
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Seared scallop set</h3>
              <p className="text-sm text-white/70">From Terra Nova Kitchen</p>
              <div className="mt-3 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                <Timer className="h-4 w-4 text-orange-300" />
                Arriving in 12 min
              </div>
            </div>
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/5">
              <div className="absolute inset-2 rounded-full border border-white/30" />
              <Car className="h-8 w-8 text-orange-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <ChefHat className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-300">
                Table request
              </p>
              <p className="text-sm text-white">
                Chef's counter at 8:45 PM · Awaiting confirmation
              </p>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-orange-300 hover:text-orange-200"
          >
            Manage
          </button>
        </div>
      </article>
    </section>
  );
}
