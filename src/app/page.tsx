"use client";   
import BackgroundVideo from "./components/VideoBackground";
import AboutUs from "./components/Whoweare";
import Joining from "./components/Joining";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
export default function Home() {
  

  return (
    <>
      <BackgroundVideo />
      <AboutUs />
      <Joining />
      <MapSection />
      <Footer />
    </>
  );
}
