import React, {Component} from "react";
import './Layout.scss';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import contextLogo from "../../img/conext-logo.svg"
import fbLogo from "../../img/facebook.svg"
import igLogo from "../../img/instagram.svg"
import lnLogo from "../../img/linkedin-grey.svg"
import phoneButton from "../../img/phone-btn.svg";
// import {NavLink} from "react-router-dom";
import CallPopup from "../../components/UI/CallPopup/CallPopup";
import CustomScroll from 'react-custom-scroll';
import StoriesPopup from "../../components/UI/StoriesPopup/StoriesPopup";
import CircularProgressBar from "../../components/UI/CircularProgressBar/CircularProgressBar";

class Layout extends Component {

    state = {
        menu: false,
        callPopup: false,
        storiesPopup: false,
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

    onClickCallPopupHandler = () => {
        this.setState({
            callPopup: !this.state.callPopup
        })
    }

    callPopupCloseHandler = () => {
        this.setState({
            callPopup: false
        })
    }

    onClickStoriesPopupHandler = () => {
        let storiesShown = sessionStorage.getItem("storiesShown")
        if (!storiesShown) {
            this.setState({
                storiesPopup: !this.state.storiesPopup,
                storiesToShow: !this.state.storiesToShow
            })
            sessionStorage.setItem("storiesShown", "true")
        }
    }

    storiesPopupCloseHandler = () => {
        this.setState({
            storiesPopup: false
        })
    }

    componentDidMount() {
        setTimeout(() => localStorage.setItem("notificationShown", "true"), 10000);
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
                    onClose={this.callPopupCloseHandler}
                />

                <i className="ContextLogo" style={{backgroundImage: 'url(' + contextLogo + ')'}} />
                <i className="FbLogo" style={{backgroundImage: 'url(' + fbLogo + ')'}} />
                <i className="IgLogo" style={{backgroundImage: 'url(' + igLogo + ')'}} />
                <i className="LnLogo" style={{backgroundImage: 'url(' + lnLogo + ')'}} />
                <i className="PhoneButton" style={{backgroundImage: 'url(' + phoneButton + ')'}} onClick={this.onClickCallPopupHandler}/>

                {
                    (!sessionStorage.getItem("storiesShown")) ?
                        <CircularProgressBar onClick={this.onClickStoriesPopupHandler} />
                        : null
                }

                {
                    (!localStorage.getItem("notificationShown")) ?
                        <span className="avy-stories-notification">Découvrez nos stories !</span>
                        : null
                }

                <StoriesPopup
                    isOpen={this.state.storiesPopup}
                    onClose={this.storiesPopupCloseHandler}
                />
                <main>
                    {(window.innerWidth >= 1023 && window.innerHeight < window.innerWidth) ?
                        <CustomScroll allowOuterScroll={true}>
                            { this.props.children }
                        </CustomScroll> :
                        <>
                            { this.props.children }
                        </>
                    }
                </main>
            </div>
        )
    }
}

export default Layout