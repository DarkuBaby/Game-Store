import React from "react"
import Hero from "./Hero.jsx";
import CardSlider from "./CardSlider.jsx";

const Home = () => {
  return (
    <>
      <main className="max-w-[1280px] mx-auto lg:px-4 py-8 bg-[#1f2937] text-white ">
        
        <Hero />
         
        <CardSlider title={"Special Offers"} />

        <CardSlider title={"This Weeks Hits"} />

        <CardSlider title={"Top New Releases"} />

      </main>
    </>
  );
};

export default Home;
