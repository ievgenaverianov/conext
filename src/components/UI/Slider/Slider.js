import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SliderItem from "./SliderItem/SliderItem";

class Slider extends Component {
    render() {
        return (
            <Carousel
                autoPlay={true}
                interval={6000}
                infiniteLoop={true}
                // renderArrowPrev: (clickHandler: () => void, hasPrev: boolean, label: string) => React.ReactNode
                // renderArrowNext: (clickHandler: () => void, hasNext: boolean, label: string) => React.ReactNode;
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
}

export default Slider