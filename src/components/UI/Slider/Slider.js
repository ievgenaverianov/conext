import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SliderItem from "./SliderItem/SliderItem";

const Slider = props =>  {
    return (
        <Carousel
            autoPlay={props.isActive}
            interval={6000}
            infiniteLoop={true}
            showThumbs={false}
        >
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
        </Carousel>
    );
}

export default Slider