import { ActionGrid } from "./components/ActionGrid";
import { BottomNav } from "./components/BottomNav";
import { CategoryScroller } from "./components/CategoryScroller";
import { FeaturedExperience } from "./components/FeaturedExperience";
import { LiveTrackingCard } from "./components/LiveTrackingCard";
import { RestaurantList } from "./components/RestaurantList";
import { SavedFavorites } from "./components/SavedFavorites";
import { SearchPanel } from "./components/SearchPanel";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div className="flex w-full max-w-5xl flex-col px-4 pb-28 pt-2 sm:px-6 lg:px-8">
      <TopBar />
      <main className="space-y-10 pb-8">
        <section className="space-y-6">
          <SearchPanel />
          <CategoryScroller />
        </section>
        <FeaturedExperience />
        <ActionGrid />
        <RestaurantList />
        <SavedFavorites />
        <LiveTrackingCard />
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
