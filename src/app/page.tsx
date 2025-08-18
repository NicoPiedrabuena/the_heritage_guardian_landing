import OpeningSection from "./components/OpeningSection";
import MapSection from "./components/MapSection";
import LegacySection from "./components/LegacySection";
import CountrySection from "./components/CountrySection";
import AboutUsSection from "./components/AboutUsSection";
import VideoBackground from "./components/VideoBackground";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <VideoBackground>
     <OpeningSection />

      </VideoBackground>
     <MapSection /> 
     <LegacySection />
     <CountrySection />
     <AboutUsSection />
     <Footer /> 
        </div>
  );
}
