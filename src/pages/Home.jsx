import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularArtists from "../components/PopularArtists";
import TrendingSection from "../components/TrendingSection";
import JoinCommunity from "../components/JoinCommunity";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingSection />
      <PopularArtists />
      <JoinCommunity />
      <Footer />
    </>
  );
}
