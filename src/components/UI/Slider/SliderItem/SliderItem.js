import React from "react";
import "./SliderItem.scss"
import Button from "../../Button/Button";
import sliderPicOne from "../../../../img/slider-item-pic-1.png"
import sliderLogoOne from "../../../../img/slider-item-logo-1.svg"


const SliderItem = props => {
    return (
        <div>
            <div className="SliderItemContent">
                <i style={{backgroundImage: 'url(' + sliderLogoOne + ')'}}/>
                <h2>Innovant, la montre digitale 100% connectée</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eui.</p>
                <Button>voir plus</Button>
            </div>
            <img src={sliderPicOne} alt="slider-pic"/>
        </div>
    )
}

export default SliderItem