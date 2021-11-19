import React from "react";
import "./BlogItem.scss"
import rightArrow from "../../../img/right-arrow-white.svg";
import contentFrame from "../../../img/blog-item-content-frame.svg";
import {NavLink} from "react-router-dom";

const BlogItem = props => {

    return (
        <div className={`BlogItem item-${props.id}`}>
            <NavLink to={props.link}>
                <img src={props.image} alt="blog-pic"/>
                <div className="BlogItem__content__wrapper" style={{backgroundImage: 'url(' + contentFrame + ')'}}>
                    <div className="BlogItem__content">
                        <h2>{props.title}</h2>
                        <span className="BlogItem__category">{props.category}</span>
                        <span className="BlogItem__date">{props.date}</span>
                        <span className="BlogItem__cta">Lire l’article</span>
                        <i style={{backgroundImage: 'url(' + rightArrow + ')'}} />
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default BlogItem