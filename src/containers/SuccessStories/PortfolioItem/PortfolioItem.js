import React from "react";
import "./PortfolioItem.scss"
import rightArrow from "../../../img/right-arrow-white.svg";
import {NavLink} from "react-router-dom";

const PortfolioItem = props => {

    return (
        <div className={`PortfolioItem item-${props.id}`}>
            <NavLink to={props.link}>
                <img src={props.image} alt="portfolio-pic"/>
                <h2>{props.title}</h2>
                <i style={{backgroundImage: 'url(' + rightArrow + ')'}} />
            </NavLink>
        </div>
    )
}

export default PortfolioItem