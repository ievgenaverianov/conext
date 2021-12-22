import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SliderItem from "./SliderItem/SliderItem";

const Slider = props =>  {
    return (
        <Carousel
            autoPlay={props.isActive}
            interval={6000}
            infiniteLoop={props.isInfinite}
            swipeable={props.isSwipeable}
            showThumbs={false}
        >
            {props.slides.map(slide => {
                    return (
                        <SliderItem
                            key={slide.id}
                            id={slide.id}
                            title={slide.title}
                            text={slide.text}
                            buttonText={slide.buttonText}
                            buttonLink={slide.buttonLink}
                            image={slide.image}
                            logo={slide.logo}
                        />
                    )
                }
            )}
        </Carousel>
    );
}

export default Slider