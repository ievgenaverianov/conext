import React from "react";
import {CSSTransition} from "react-transition-group";
import {NavLink} from "react-router-dom";
import "./HomepageItem.scss"
import Button from "../../../components/UI/Button/Button";
import Slider from "../../../components/UI/Slider/Slider";

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
                { (props.image && window.innerWidth <= 1279 && window.innerHeight > window.innerWidth) ? <img src={props.imageTablet} alt="homepage-pic"/> :
                    (props.image && window.innerHeight < window.innerWidth) ? <img src={props.image} alt="homepage-pic"/> : null }
                <div className="HomepageItem__content">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    { props.buttonLink ? <NavLink to={props.buttonLink}><Button>{props.buttonText}</Button></NavLink> : null }
                    { props.slides ? <Slider isActive={props.isActive} slides={props.slides}/> : null }
                </div>
            </section>
        </CSSTransition>
    )
}

export default HomepageItem