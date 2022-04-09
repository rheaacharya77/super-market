import React from "react";
import Featured from "../components/Featured/Featured";
import Topselling from "../components/Topselling/Topselling";
import CarouselTop from "../components/Carousel/CarouselTop";
import ShopByCategory from "../components/ShopByCategory/ShopByCategories";
import ImageLayout from "../components/ImageLayout/ImageLayout";

function Home() {
  return (
    <>
      <CarouselTop />
      <Topselling/>
      <ShopByCategory />
      <ImageLayout/>
      <Featured />
    </>
  );
}

export default Home;
