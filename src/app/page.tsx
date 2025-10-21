"use client";   
import BackgroundVideo from "./components/VideoBackground";
import AboutUs from "./components/Whoweare";
import Joining from "./components/Whatyouget";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import TrustedDiplomacy from "./components/TrustedDiplomacy";
export default function Home() {
  

  return (
    <>
      <BackgroundVideo />
      <AboutUs />
      <Joining />
      <MapSection />
      <TrustedDiplomacy
        logosSrc="/logo/bannerLogos.png"
        logosHeight={64}
        scrollDurationSec={28}
      />
      <Footer />
    </>
  );
}
