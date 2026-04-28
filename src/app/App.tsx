import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { QuickServices } from "./components/QuickServices";
import { FeaturedArtworks } from "./components/FeaturedArtworks";
import { MapSection } from "./components/MapSection";
import { ArtistSection } from "./components/ArtistSection";
import { NewsSection } from "./components/NewsSection";
import { Footer } from "./components/Footer";
import { PreviewToggle } from "./components/PreviewToggle";

export default function App() {
  return (
    <PreviewToggle>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <StatsBar />
          <QuickServices />
          <FeaturedArtworks />
          <MapSection />
          <ArtistSection />
          <NewsSection />
        </main>
        <Footer />
      </div>
    </PreviewToggle>
  );
}
