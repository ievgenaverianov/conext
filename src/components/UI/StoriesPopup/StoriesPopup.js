import React, {Component} from "react";
import './StoriesPopup.scss';
import Backdrop from "../Backdrop/Backdrop";
import Slider from "../Slider/Slider";
import storiesPicOne from "../../../img/stories-pic-1.png";
import Button from "../Button/Button";

class StoriesPopup extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    state = {
        slides: [
            {
                id: 1,
                image: storiesPicOne,
            },
            {
                id: 2,
                image: storiesPicOne,
            },
            {
                id: 3,
                image: storiesPicOne,
            },
            {
                id: 4,
                image: storiesPicOne,
            },
            {
                id: 5,
                image: storiesPicOne,
            },
            // {
            //     id: 6,
            //     image: storiesPicOne,
            // },
            // {
            //     id: 7,
            //     image: storiesPicOne,
            // },            {
            //     id: 8,
            //     image: storiesPicOne,
            // }
        ]
    }

    render() {

        let cssClasses = `avy-stories-popup`;
        if (!this.props.isOpen) cssClasses += ` close`;

        return (
            <>
                <div className={cssClasses}>
                    <Slider isActive={false}
                            isInfinite={false}
                            isSwipeable={false}
                            slides={this.state.slides}
                    />
                    <Button onClick={this.props.onClose}>Fermer</Button>
                </div>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </>
        )
    }
}

export default StoriesPopup
