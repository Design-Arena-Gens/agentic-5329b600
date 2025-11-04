import { Heart } from "lucide-react";

const favorites = [
  {
    id: "sunset-sushi",
    name: "Sunset Sushi Loft",
    info: "Chef Mayu · Omakase · 2 seats left",
    thumb:
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "verde",
    name: "Verde Kitchen",
    info: "Farm-to-table tasting · Chef's bar",
    thumb:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "midnight-bao",
    name: "Midnight Bao Club",
    info: "Late-night · DJs until 2am",
    thumb:
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=400&q=80",
  },
];

export function SavedFavorites() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
            Yours
          </p>
          <h2 className="text-lg font-bold text-slate-900">
            Saved tables & chef drops
          </h2>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold text-rose-500 transition hover:text-rose-600"
        >
          <Heart className="h-4 w-4" />
          Manage
        </button>
      </div>
      <div className="-mx-4 overflow-x-auto pb-1">
        <div className="flex w-max gap-3 px-4">
          {favorites.map((favorite) => (
            <article
              key={favorite.id}
              className="group flex min-w-[240px] flex-col gap-3 rounded-3xl border border-rose-100 bg-white p-4 shadow-sm shadow-rose-100/50 transition hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-md hover:shadow-rose-100"
            >
              <div className="relative h-32 w-full overflow-hidden rounded-2xl">
                <img
                  src={favorite.thumb}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-rose-500 shadow-sm">
                  <Heart className="h-4 w-4" />
                  In rotation
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {favorite.name}
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  {favorite.info}
                </p>
              </div>
              <button
                type="button"
                className="mt-auto inline-flex items-center justify-center rounded-full border border-rose-200/80 bg-white px-3 py-2 text-xs font-semibold text-rose-500 transition hover:border-rose-400 hover:bg-rose-50"
              >
                Rebook
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
