import React from "react";
import "./HomepageItem.scss"
import Button from "../../../components/UI/Button/Button";
import Carousel from "../../../components/UI/Slider/Slider";

const HomepageItem = props => {

    let cssClasses = `HomepageItem item-${props.id}`;
    if (props.isActive) cssClasses += ` active`;

    return (
        <section className={cssClasses}>
            { (props.image && window.screen.width <= 1279 && window.innerHeight > window.innerWidth) ? <img src={props.imageTablet} alt="homepage-pic"/> :
              (props.image && window.innerHeight < window.innerWidth) ? <img src={props.image} alt="homepage-pic"/> : null }
            <div className="HomepageItem__content">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            { props.isButtonShown ? <Button>{props.buttonText}</Button> : null }
            { props.isSliderShown ? <Carousel /> : null }
            </div>
        </section>
    )
}

export default HomepageItem