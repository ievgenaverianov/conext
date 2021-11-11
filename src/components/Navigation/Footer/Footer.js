import React from "react";
import "./Footer.scss"
import {NavLink} from "react-router-dom";
import classes from "../Drawer/Drawer.module.scss";
import contextLogo from "../../../img/conext-logo-grey.svg";
import signature from "../../../img/signature.svg";

const Footer = () => {
    const links = [
        {to: '/accueil', label: 'Accueil', exact: false},
        {to: '/a-propos', label: 'À propos', exact: false},
        {to: '/notre-offre', label: 'Notre offre', exact: false},
        {to: '/success-story', label: 'Success stories', exact: false},
        {to: '/contact', label: 'Contact', exact: false},
        {to: '/blog', label: 'Notre blog', exact: false}
    ]

    return (
        <div className="Footer">
            <div  className="Footer__navigation">
                <NavLink to='/'>
                    <i style={{backgroundImage: 'url(' + contextLogo + ')'}} />
                </NavLink>
                <div className="Footer__navigation__line" />
                <ul>
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={link.to}
                                    exact={link.exact}
                                    activeClassName={classes.active}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="Footer__info">
                <div className="Footer__links">
                    <NavLink to='/'>Mentions légales</NavLink>
                    <NavLink to='/'>CGV</NavLink>
                </div>
                <span>Copyright © 2021 CONEXT - Tous droits réservés</span>
                <div className="Footer__design">
                    <span>Design par Thomas Jebabli</span>
                    <img src={signature} alt="signature"/>
                </div>
            </div>
        </div>
    )
}

export default Footer