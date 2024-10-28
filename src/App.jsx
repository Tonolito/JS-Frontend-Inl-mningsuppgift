import React from "react";
import Header from "./components/Sections/Header";
import Hero from "./components/Sections/Hero";
import "./assets/Css/main.css";
import Brands from "./components/Sections/Brands";
import Features from "./components/Sections/Features";
import Footer from "./components/Sections/Footer";
import Subscribe from "./components/Sections/Subscribe";
import Faq from "./components/Sections/Faq";
import Reviews from "./components/Sections/Reviews";
import LearnMore from "./components/Sections/LearnMore";
import HowDoesItWork from "./components/Sections/HowDoesItWork";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Hero />
          <Brands />
          <Features />
          <HowDoesItWork />
          <LearnMore />
          <Reviews />
          <Faq />
          <Subscribe />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
