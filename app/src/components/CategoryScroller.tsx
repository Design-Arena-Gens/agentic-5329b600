const categories = [
  { label: "Chef Tastings", active: true },
  { label: "Street Eats" },
  { label: "Vegan Luxe" },
  { label: "Fire & Smoke" },
  { label: "Brunch" },
  { label: "Midnight Bites" },
];

export function CategoryScroller() {
  return (
    <div className="-mx-4 overflow-x-auto pb-1">
      <div className="flex w-max items-center gap-2 px-4">
        {categories.map((category) => (
          <button
            key={category.label}
            type="button"
            className={`rounded-full border px-4 py-2 text-xs font-semibold shadow-sm transition ${
              category.active
                ? "border-transparent bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-200/40"
                : "border-slate-200/80 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
