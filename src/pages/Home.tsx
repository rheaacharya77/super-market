import React  from "react";

import CarouselTop  from "../components/Carousel/CarouselTop";
import ShopByCategory from "../components/ShopByCategory/ShopByCategories";
import ImageLayout from "../components/ImageLayout/ImageLayout";
import Featured from "../components/Featured/Featured";
// import CarouselBottom from "../components/Carousel/CarouselBottom";

function Home(){
    return(
        <>
        <CarouselTop/>
        <ShopByCategory/>
        <ImageLayout/>
        {/* <CarouselBottom/> */}
        <Featured/>
        </>
    );
}

export default Home;

