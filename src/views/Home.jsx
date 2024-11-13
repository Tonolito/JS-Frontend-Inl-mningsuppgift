import React from "react";
import Hero from "../components/Sections/Hero";
import Brands from "../components/Sections/Brands";
import Features from "../components/Sections/Features";
import HowDoesItWork from "../components/Sections/HowDoesItWork";
import LearnMore from "../components/Sections/LearnMore";
import Reviews from "../components/Sections/Reviews";
import Faq from "../components/Sections/Faq";
import Subscribe from "../components/Sections/Subscribe";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <HowDoesItWork />
      <LearnMore />
      <Reviews />
      <Faq />
      <Subscribe />
    </>
  );
};

export default Home;
