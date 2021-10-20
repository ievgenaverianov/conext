import React from "react";
import {CSSTransition} from "react-transition-group";
import {NavLink} from "react-router-dom";
import "./HomepageItem.scss"
import Button from "../../../components/UI/Button/Button";
import Carousel from "../../../components/UI/Slider/Slider";
import Offers from "../../Offers/Offers";

const HomepageItem = props => {

    let cssClasses = `HomepageItem item-${props.id}`;
    if (props.isActive) cssClasses += ` active`;

    return (
        <CSSTransition
            in={props.isActive}
            timeout={2000}
            classNames="hpi"
        >
        <section className={cssClasses}>
            { (props.image && window.screen.width <= 1279 && window.innerHeight > window.innerWidth) ? <img src={props.imageTablet} alt="homepage-pic"/> :
              (props.image && window.innerHeight < window.innerWidth) ? <img src={props.image} alt="homepage-pic"/> : null }
            <div className="HomepageItem__content">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            { props.isButtonShown ? <NavLink to={props.buttonLink}><Button>{props.buttonText}</Button></NavLink> : null }
            { props.isSliderShown ? <Carousel isActive={props.isActive}/> : null }
            </div>
        </section>
        </CSSTransition>
    )
}

export default HomepageItem