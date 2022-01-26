import React from "react";
import "./SliderItem.scss"
import Button from "../../Button/Button";
import {NavLink} from "react-router-dom";
import ReactPlayer from 'react-player'


const SliderItem = props => {
    return (
        <div>
            <div className="avy-slider-item__content">
                <i style={{backgroundImage: 'url(' + props.logo + ')'}}/>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                { props.buttonLink ? <NavLink to={props.buttonLink}><Button>{props.buttonText}</Button></NavLink> : null }
            </div>
            { props.image ? <img src={props.image} alt="slider-pic"/> : null }
            { props.video ? <ReactPlayer url={props.video} playing={props.isActive} /> : null }
        </div>
    )
}

export default SliderItem