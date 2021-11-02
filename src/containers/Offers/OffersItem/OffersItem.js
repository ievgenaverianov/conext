import React from "react";
import "./OffersItem.scss"

const OffersItem = props => {

    return (
        <div className={`OffersItem item-${props.id}`}>
                <img src={props.image} alt="offers-pic"/>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
        </div>
    )
}

export default OffersItem