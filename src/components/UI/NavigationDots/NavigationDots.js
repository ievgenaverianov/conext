import React from "react";
import "./NavigationDots.scss"

const NavigationDots = props => {

    let cssClasses = `NavigationDotsItem`;
    if (props.isActive) cssClasses += ` active`;

    return (
        <li
            className={cssClasses}
            onClick={() => props.onDotClick(props.id)}
        />
    )
}

export default NavigationDots

