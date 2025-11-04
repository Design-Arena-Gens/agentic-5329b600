import { Flame, Play, Star } from "lucide-react";

const experiences = [
  {
    id: "experience-1",
    title: "Night Market Pop-Up",
    subtitle: "4 chefs · 12 signature bites",
    badge: "Live tonight",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=800&q=80",
    accent: "from-orange-500 via-red-500 to-rose-500",
  },
  {
    id: "experience-2",
    title: "Chef's Fire Table",
    subtitle: "13-course tasting · sake pairing",
    badge: "Limited seats",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
    accent: "from-amber-500 via-orange-500 to-rose-500",
  },
];

export function FeaturedExperience() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            Spotlight
          </p>
          <h2 className="text-xl font-bold text-slate-900">
            Curated experiences for tonight
          </h2>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-orange-500 transition hover:text-orange-600"
        >
          See all
        </button>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-lg shadow-orange-200/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-200/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-70 mix-blend-multiply blur-3xl transition duration-500 group-hover:opacity-90 group-hover:blur-2xl" />
            <div className="relative z-10 flex flex-col gap-4 p-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-100/80 px-3 py-1 text-xs font-semibold uppercase text-orange-600">
                  <Flame className="h-4 w-4" />
                  {experience.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                  <Star className="h-4 w-4 text-amber-500" />
                  {experience.rating}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                {experience.title}
              </h3>
              <p className="text-sm font-medium text-white/90">
                {experience.subtitle}
              </p>
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-900 hover:text-white"
              >
                <Play className="h-4 w-4" />
                Preview experience
              </button>
            </div>
            <div className="absolute inset-0">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${experience.accent}`}
              />
              <img
                src={experience.image}
                alt=""
                className="h-full w-full object-cover opacity-60 mix-blend-overlay transition group-hover:opacity-75"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
