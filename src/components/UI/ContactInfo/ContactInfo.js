import React from "react";
import classes from "./Contact.module.scss";
import phoneIcon from "../../../img/phone.svg"
import emailIcon from "../../../img/email.svg"

const Contact = props => {

    return (
        <div className={classes.Contact}>
            <i style={{backgroundImage: 'url(' + phoneIcon + ')'}} /><span>06 05 04 03 02</span>
            <i style={{backgroundImage: 'url(' + emailIcon + ')'}} /><span>info@conext.com</span>
        </div>
    )
}

export default Contact