import React from "react";
import "./CircularProgressBar.scss"

const CircularProgressBar = props => {

    return (
        <>
            <div className="progress green" onClick={props.onClick}>
                    <span className="progress-left">
                        <span className="progress-bar" />
                    </span>
                    <span className="progress-right">
                        <span className="progress-bar" />
                    </span>
            </div>
        </>
    )
}

export default CircularProgressBar