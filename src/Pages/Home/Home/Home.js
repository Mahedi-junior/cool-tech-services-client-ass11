import React from "react";
import BlogSection from "../BlogSection/BlogSection";
import CarouselBanner from "../CarouselBanner/CarouselBanner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <CarouselBanner></CarouselBanner>
      <Services></Services>
      <BlogSection></BlogSection>
    </div>
  );
};

export default Home;
