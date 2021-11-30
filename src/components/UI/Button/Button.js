import React from "react";
import classes from "./Button.module.scss"

const Button = props => {

    let cssClasses = `${classes.Button}`;
    if (props.isActive) cssClasses += ` active`;

    return (
        <button
            className={cssClasses}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button