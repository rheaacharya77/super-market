import React from "react";
import Featured from "../components/Featured/Featured";
import CarouselTop from "../components/Carousel/CarouselTop";
import ImageLayout from "../components/ImageLayout/ImageLayout";
import ShopByCategory from "../components/ShopByCategory/ShopByCategories";




function Home() {
  return (
    <>
      <CarouselTop />
      <ShopByCategory />
      <ImageLayout />
      <Featured />
    </>
  );
}

export default Home;
