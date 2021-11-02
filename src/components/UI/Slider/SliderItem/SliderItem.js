import React from "react";
import "./SliderItem.scss"
import Button from "../../Button/Button";
import {NavLink} from "react-router-dom";


const SliderItem = props => {
    return (
        <div>
            <div className="SliderItemContent">
                <i style={{backgroundImage: 'url(' + props.logo + ')'}}/>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <NavLink to={props.buttonLink}><Button>{props.buttonText}</Button></NavLink>
            </div>
            <img src={props.image} alt="slider-pic"/>
        </div>
    )
}

export default SliderItem