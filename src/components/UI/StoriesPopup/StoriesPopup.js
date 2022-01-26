import React, {Component} from "react";
import './StoriesPopup.scss';
import Backdrop from "../Backdrop/Backdrop";
import Slider from "../Slider/Slider";
import storiesPicOne from "../../../img/stories-pic-1.png";
import storiesVidOne from "../../../img/stories-video.mp4";
import Button from "../Button/Button";

class StoriesPopup extends Component {

    state = {
        activeSlideIndex: 0,
        slides: [
            {
                id: 1,
                image: storiesPicOne,
                isActive: false
            },
            {
                id: 2,
                image: storiesPicOne,
                isActive: false
            },
            {
                id: 3,
                video: storiesVidOne,
                isActive: false
            },
            {
                id: 4,
                image: storiesPicOne,
                isActive: false
            },
            {
                id: 5,
                video: storiesVidOne,
                isActive: false
            },
            {
                id: 6,
                image: storiesPicOne,
                isActive: false
            },
        ]
    }

    clickHandler = () => {
        this.props.onClose()
        const slides = [...this.state.slides]
        slides.forEach(function (item){
            item.isActive = false
        })
        this.setState({
            slides
        });
    }

    onSlideChange = slideIndex => {
        console.log(slideIndex);
        const slides = [...this.state.slides]
        slides.forEach(function (item){
            item.isActive = false
        })
        slides[slideIndex].isActive = true

        this.setState({
            activeSlideIndex: slideIndex,
            slides
        });
    }

    render() {

        let cssClasses = `avy-stories-popup`;
        if (!this.props.isOpen) cssClasses += ` close`;

        console.log(this.state.slides);

        return (
            <>
                <div className={cssClasses}>
                    <Slider isActive={false}
                            isInfinite={false}
                            isSwipeable={false}
                            slides={this.state.slides}
                            activeSlideId={this.state.activeSlideIndex}
                            onSlideChange={this.onSlideChange}
                    />
                    <Button onClick={this.clickHandler}>Fermer</Button>
                </div>
                {this.props.isOpen ? <Backdrop onClick={this.clickHandler}/> : null}
            </>
        )
    }
}

export default StoriesPopup
