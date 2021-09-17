import React from "react";
import "./HomepageItem.scss"
import Button from "../../../components/UI/Button/Button";
import Carousel from "../../../components/UI/Slider/Slider";

const HomepageItem = props => {

    let cssClasses = `HomepageItem item-${props.id}`;
    if (props.isActive) cssClasses += ` active`;

    return (
        <section className={cssClasses}>
            { (props.image && window.screen.width <= 1279 && window.innerHeight > window.innerWidth) ? <img src={props.imageTablet}/> :
              (props.image && window.innerHeight < window.innerWidth) ? <img src={props.image}/> : null }
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            { props.isButtonShown ? <Button>{props.buttonText}</Button> : null }
            { props.isSliderShown ? <Carousel /> : null }
        </section>
    )
}

export default HomepageItem