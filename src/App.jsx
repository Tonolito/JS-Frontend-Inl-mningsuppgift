import React from "react";
import "./assets/Css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Header from "./components/Sections/Header";
import Footer from "./components/Sections/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// import Header from "./components/Sections/Header";
// import Hero from "./components/Sections/Hero";
// import Brands from "./components/Sections/Brands";
// import Features from "./components/Sections/Features";
// import Footer from "./components/Sections/Footer";
// import Subscribe from "./components/Sections/Subscribe";
// import Faq from "./components/Sections/Faq";
// import Reviews from "./components/Sections/Reviews";
// import LearnMore from "./components/Sections/LearnMore";
// import HowDoesItWork from "./components/Sections/HowDoesItWork";
{
  /* <>
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
</> */
}

{
  /* <Routes>
<Route path="/" element={<Home />} />
<Route path="/contact" element={<Contact />} />
</Routes> */
}
