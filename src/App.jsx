import { useState } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCards from "./components/FeaturedCards";
import NewArrival from "./components/NewArrival";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedCards />
      <NewArrival />
      <Footer />
    </>
  );
}

export default App;
