import React from "react";
import "./SimilarBlogArticle.scss"
import rightArrow from "../../../../img/right-arrow-white.svg";
import {NavLink} from "react-router-dom";

const SimilarBlogArticle = props => {

    return (
        <NavLink to={props.link}>
            <div className="avy-similar-article">
                <h4>{props.title}</h4>
                <span className="avy-similar-article__date">{props.date}</span>
                <span className="avy-similar-article__cta">Lire l’article</span>
                <i style={{backgroundImage: 'url(' + rightArrow + ')'}} />
            </div>
        </NavLink>
    )
}

export default SimilarBlogArticle