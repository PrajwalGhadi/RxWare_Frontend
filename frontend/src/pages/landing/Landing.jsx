import Footer from "./footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SlidingHeroSection from "./SlidingHeroSection";


const Landing = () => {

  return (
    <>
      <Navbar />

      <SlidingHeroSection />

      <HeroSection id="services"/>

      <Footer />
    </>
  );
};

export default Landing;
