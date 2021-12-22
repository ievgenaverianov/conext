import React from "react";
import "./SliderItem.scss"
import Button from "../../Button/Button";
import {NavLink} from "react-router-dom";


const SliderItem = props => {
    return (
        <div>
            <div className="avy-slider-item__content">
                <i style={{backgroundImage: 'url(' + props.logo + ')'}}/>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                { props.buttonLink ? <NavLink to={props.buttonLink}><Button>{props.buttonText}</Button></NavLink> : null }
            </div>
            <img src={props.image} alt="slider-pic"/>
        </div>
    )
}

export default SliderItem