import React from "react";
import "./AboutUsInfo.scss"

const AboutUsInfo = props => {

    return (
        <div className="AboutUsInfo">
            <img src={props.image} alt="about-us-pic"/>
            <div className="AboutUsInfo__content">
                <h2>{props.title}</h2>
                {props.text.map((paragraph, index) => {
                        return (
                            <p key={index}>{paragraph}</p>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default AboutUsInfo