import React from "react";
import "./Employee.scss"
import lnLogo from "../../../img/linkedin-white.svg"
import employeeBg from "../../../img/employee-bg.svg";

const Employee = props => {

    return (
        <div className={`Employee item-${props.id}`}>
            <div className="Employee__background" style={{backgroundImage: 'url(' + employeeBg + ')'}}/>
            <div className="Employee__photo">
                <img src={props.image} alt="employee-pic"/>
            </div>
            <div className="Employee__content">
                <h2>{props.name}</h2>
                <span>{props.position}</span>
                <p>{props.text}</p>
                <a href={props.iconLink} target="_blank"><i style={{backgroundImage: 'url(' + lnLogo + ')'}} /></a>
            </div>
        </div>
    )
}

export default Employee