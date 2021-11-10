import React from "react";
import "./PortfolioItem.scss"
import rightArrow from "../../../img/right-arrow-white.svg";

const PortfolioItem = props => {

    return (
        <div className={`PortfolioItem item-${props.id}`}>
            <a href={props.link} target="_blank">
                <img src={props.image} alt="portfolio-pic"/>
                <h2>{props.title}</h2>
                <i style={{backgroundImage: 'url(' + rightArrow + ')'}} />
            </a>
        </div>
    )
}

export default PortfolioItem