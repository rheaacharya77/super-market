import React from "react";

import CarouselTop from "../components/Carousel/CarouselTop";
import ShopByCategory from "../components/ShopByCategory/ShopByCategories";
import ImageLayout from "../components/ImageLayout/ImageLayout";
import Featured from "../components/Featured/Featured";


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
