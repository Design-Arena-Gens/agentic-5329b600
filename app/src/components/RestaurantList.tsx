import { Bookmark, Flame, Heart, MapPin, Star } from "lucide-react";

const restaurants = [
  {
    id: "atari-ramen",
    name: "Atari Ramen Bar",
    distance: "0.6 mi",
    eta: "15-20 min",
    tags: ["Hand-pulled noodles", "Late night"],
    rating: 4.7,
    price: "$$",
    favorite: true,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "terra-nova",
    name: "Terra Nova Kitchen",
    distance: "1.2 mi",
    eta: "30-35 min",
    tags: ["Seasonal tasting menu", "Chef Krystal Lee"],
    rating: 4.9,
    price: "$$$",
    favorite: false,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lola-cantina",
    name: "Lola Cantina",
    distance: "0.9 mi",
    eta: "25-30 min",
    tags: ["Wood-fired", "Agave bar"],
    rating: 4.6,
    price: "$$",
    favorite: false,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80",
  },
];

export function RestaurantList() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Near you
          </p>
          <h2 className="text-lg font-bold text-slate-900">
            Tonight's hottest kitchens
          </h2>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-slate-500 transition hover:text-slate-800"
        >
          Map view
        </button>
      </div>
      <div className="space-y-3">
        {restaurants.map((restaurant) => (
          <article
            key={restaurant.id}
            className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm shadow-slate-200/60 transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md hover:shadow-orange-100/60"
          >
            <div className="relative h-48 w-full">
              <img
                src={restaurant.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 top-0 flex justify-between p-4">
                {restaurant.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    <Flame className="h-4 w-4 text-orange-400" />
                    Trending
                  </span>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white/90 shadow-sm transition hover:bg-orange-500 hover:text-white ${
                    restaurant.favorite
                      ? "border-orange-500 text-orange-500"
                      : "border-transparent text-slate-700"
                  }`}
                >
                  {restaurant.favorite ? (
                    <Heart className="h-4 w-4 fill-current" />
                  ) : (
                    <Bookmark className="h-4 w-4" />
                  )}
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 text-white">
                <div className="flex items-center gap-1 text-xs font-medium text-white/80">
                  <MapPin className="h-4 w-4 text-orange-300" />
                  {restaurant.distance}
                  <span className="mx-1 h-1 w-1 rounded-full bg-white/70" />
                  {restaurant.eta}
                </div>
                <h3 className="mt-1 text-xl font-semibold">{restaurant.name}</h3>
              </div>
            </div>
            <div className="space-y-3 px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Star className="h-4 w-4 text-amber-500" />
                  {restaurant.rating}
                  <span className="mx-1 h-1 w-1 rounded-full bg-slate-300" />
                  {restaurant.price}
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700"
                >
                  Start order
                </button>
              </div>
              <ul className="flex flex-wrap gap-2">
                {restaurant.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
