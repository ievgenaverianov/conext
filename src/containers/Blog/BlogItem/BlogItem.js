import React from "react";
import "./BlogItem.scss"
import rightArrow from "../../../img/right-arrow-white.svg";
import contentFrame from "../../../img/blog-item-content-frame.svg";
import {NavLink} from "react-router-dom";

const BlogItem = props => {

    let cssClasses = `avy-blogItem`;
    if (props.isHidden) cssClasses += ` hidden`;

    return (
        <div className={cssClasses}>
            <NavLink to={props.link}>
                <img src={props.image} alt="blog-pic"/>
                <div className="avy-blogItem__content__wrapper" style={{backgroundImage: 'url(' + contentFrame + ')'}}>
                    <div className="avy-blogItem__content">
                        <h2>{props.title}</h2>
                        <span className="avy-blogItem__category">{props.category}</span>
                        <span className="avy-blogItem__date">{props.date}</span>
                        <span className="avy-blogItem__cta">Lire l’article</span>
                        <i style={{backgroundImage: 'url(' + rightArrow + ')'}} />
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default BlogItem