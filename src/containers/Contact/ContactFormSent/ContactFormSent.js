import React from "react";
import './ContactFormSent.scss'
import sentFormIcon from "../../../img/sent-form-icon.svg"

const ContactFormSent = () => {
    return (
        <div className="ContactFormSent">
            <i style={{backgroundImage: 'url(' + sentFormIcon + ')'}} />
            <h2>Votre message a bien été envoyé.</h2>
            <p>Nous reviendrons vers vous dans les plus brefs délais.</p>
        </div>
    )
}

export default ContactFormSent