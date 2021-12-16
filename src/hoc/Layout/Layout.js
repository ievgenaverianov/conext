import React, {Component} from "react";
import './Layout.scss';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import contextLogo from "../../img/conext-logo.svg"
import fbLogo from "../../img/facebook.svg"
import igLogo from "../../img/instagram.svg"
import lnLogo from "../../img/linkedin-grey.svg"
import phoneButton from "../../img/phone-btn.svg";
import {NavLink} from "react-router-dom";
import CallPopup from "../../components/UI/CallPopup/CallPopup";
import CustomScroll from 'react-custom-scroll';

class Layout extends Component {

    state = {
        menu: false,
        callPopup: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    onClickPopupHandler = () => {
        this.setState({
            callPopup: !this.state.callPopup
        })
    }

    popupCloseHandler = () => {
        this.setState({
            callPopup: false
        })
    }

    render() {
        return(
            <div className="Layout">

                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <div className="Language">
                    <span>EN</span>
                    <span className="white">|</span>
                    <span className="white">FR</span>
                </div>

                <CallPopup
                    isOpen={this.state.callPopup}
                    onClose={this.popupCloseHandler}
                />

                <NavLink to='/'>
                    <i className="ContextLogo" style={{backgroundImage: 'url(' + contextLogo + ')'}} />
                </NavLink>
                <i className="FbLogo" style={{backgroundImage: 'url(' + fbLogo + ')'}} />
                <i className="IgLogo" style={{backgroundImage: 'url(' + igLogo + ')'}} />
                <i className="LnLogo" style={{backgroundImage: 'url(' + lnLogo + ')'}} />
                <i className="PhoneButton" style={{backgroundImage: 'url(' + phoneButton + ')'}} onClick={this.onClickPopupHandler}/>
                <main>
                    <CustomScroll allowOuterScroll={true}>
                        { this.props.children }
                    </CustomScroll>
                </main>
            </div>
        )
    }
}

export default Layout