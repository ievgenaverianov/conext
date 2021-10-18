import React, {Component} from "react";
import classes from './Layout.module.scss';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import contextLogo from "../../img/conext-logo.svg"
import fbLogo from "../../img/facebook.svg"
import igLogo from "../../img/instagram.svg"
import lnLogo from "../../img/linkedin.svg"
import phoneButton from "../../img/phone-btn.svg";

class Layout extends Component {

    state = {
        menu: false
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

    render() {
        return(
            <div className={classes.Layout}>

                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <div className={classes.Language}>
                    <span>EN</span>
                    <span className={classes.white}>|</span>
                    <span className={classes.white}>FR</span>
                </div>

                <i className={classes.ContextLogo} style={{backgroundImage: 'url(' + contextLogo + ')'}} />
                <i className={classes.FbLogo} style={{backgroundImage: 'url(' + fbLogo + ')'}} />
                <i className={classes.IgLogo} style={{backgroundImage: 'url(' + igLogo + ')'}} />
                <i className={classes.LnLogo} style={{backgroundImage: 'url(' + lnLogo + ')'}} />
                <i className={classes.PhoneButton} style={{backgroundImage: 'url(' + phoneButton + ')'}} />

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout