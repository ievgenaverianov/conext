import React from "react";
import "./HomepageItem.scss"
import Button from "../../../components/UI/Button/Button";
import Slider from "../../../components/UI/Slider/Slider";

const HomepageItem = props => {

    let cssClasses = `HomepageItem item-${props.id}`;
    if (props.isActive) cssClasses += ` active`;

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            { props.image ? <img src={props.image}/> : null }
            { props.isButtonShown ? <Button>{props.buttonText}</Button> : null }
            { props.isSliderShown ? <Slider /> : null }
        </section>
    )
}

export default HomepageItem