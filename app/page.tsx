import HeroSection from "@/components/HeroSection/HeroSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import HomeChessSection from "@/components/HomeChessSection/HomeChessSection";
import GamesSelection from '@/components/GamesSelection/GamesSelection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HomeChessSection />
      <GamesSelection isPage={false} />
    </>
  );
};

export default HomePage;
