import React, {Component} from "react";
import classes from './Drawer.module.scss';
import {NavLink} from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";
import ContactInfo from "../../UI/ContactInfo/ContactInfo";

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks (links) {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        const links = [
            // {to: '/', label: 'List', exact: true},
            {to: '/accueil', label: 'Accueil', exact: false},
            {to: '/a-propos', label: 'À propos', exact: false},
            {to: '/notre-offre', label: 'Notre offre', exact: false},
            {to: '/success-story', label: 'Success stories', exact: false},
            {to: '/contact', label: 'Contact', exact: false},
            {to: '/blog', label: 'Blog', exact: false}
        ]

        return (
            <>
                <nav className={cls.join(' ')}>
                    <div>
                        <ul>
                            {this.renderLinks(links)}
                        </ul>
                        <hr />
                        <span>Contactez nous !</span>
                        <p>Une idée ? Un projet ? Nous serons ravis de répondre à vos questions</p>
                        <ContactInfo />
                    </div>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </>
        );
    }
}

export default Drawer