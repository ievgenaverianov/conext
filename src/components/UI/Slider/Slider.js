import React, {Component} from "react";
import classes from "./Slider.module.scss"
import phoneIcon from "../../../img/phone.svg"
import emailIcon from "../../../img/email.svg"

class Slider extends Component {

    componentDidMount() {
        let testim = document.getElementById("testim"),
            testimDots = Array.prototype.slice.call(
                document.getElementById("testim-dots").children
            ),
            testimContent = Array.prototype.slice.call(
                document.getElementById("testim-content").children
            ),
            testimLeftArrow = document.getElementById("left-arrow"),
            testimRightArrow = document.getElementById("right-arrow"),
            testimSpeed = 4500,
            currentSlide = 0,
            currentActive = 0,
            testimTimer,
            touchStartPos,
            touchEndPos,
            touchPosDiff,
            ignoreTouch = 30;
        window.onload = function () {
            // Testim Script
            function playSlide(slide) {
                for (let k = 0; k < testimDots.length; k++) {
                    testimContent[k].classList.remove("active");
                    testimContent[k].classList.remove("inactive");
                    testimDots[k].classList.remove("active");
                }

                if (slide < 0) {
                    slide = currentSlide = testimContent.length - 1;
                }

                if (slide > testimContent.length - 1) {
                    slide = currentSlide = 0;
                }

                if (currentActive != currentSlide) {
                    testimContent[currentActive].classList.add("inactive");
                }
                testimContent[slide].classList.add("active");
                testimDots[slide].classList.add("active");

                currentActive = currentSlide;

                clearTimeout(testimTimer);
                testimTimer = setTimeout(function () {
                    playSlide((currentSlide += 1));
                }, testimSpeed);
            }

            testimLeftArrow.addEventListener("click", function () {
                playSlide((currentSlide -= 1));
            });

            testimRightArrow.addEventListener("click", function () {
                playSlide((currentSlide += 1));
            });

            for (let l = 0; l < testimDots.length; l++) {
                testimDots[l].addEventListener("click", function () {
                    playSlide((currentSlide = testimDots.indexOf(this)));
                });
            }

            playSlide(currentSlide);

            // keyboard shortcuts
            document.addEventListener("keyup", function (e) {
                switch (e.keyCode) {
                    case 37:
                        testimLeftArrow.click();
                        break;

                    case 39:
                        testimRightArrow.click();
                        break;

                    case 39:
                        testimRightArrow.click();
                        break;

                    default:
                        break;
                }
            });

            testim.addEventListener("touchstart", function (e) {
                touchStartPos = e.changedTouches[0].clientX;
            });

            testim.addEventListener("touchend", function (e) {
                touchEndPos = e.changedTouches[0].clientX;

                touchPosDiff = touchStartPos - touchEndPos;

                console.log(touchPosDiff);
                console.log(touchStartPos);
                console.log(touchEndPos);

                if (touchPosDiff > 0 + ignoreTouch) {
                    testimLeftArrow.click();
                } else if (touchPosDiff < 0 - ignoreTouch) {
                    testimRightArrow.click();
                } else {
                    return;
                }
            });
        };
    }
    render(){
        return (
            <div className={classes.Slider}>
                <section id="testim" className={classes.testim}>
                    <div className={classes.wrap}>

                        <i id="right-arrow" className={[classes.arrow, classes.right, "fa", "fa-chevron-right"].join(' ')} />
                        <i id="left-arrow" className={[classes.arrow, classes.left, "fa", "fa-chevron-left"].join(' ')} />
                        <ul id="testim-dots" className={classes.dots}>
                            <li className={[classes.dot, classes.active].join(' ')} />
                            <li className={classes.dot} />
                            <li className={classes.dot} />
                        </ul>
                        <div id="testim-content" className={classes.cont}>

                            <div className={classes.active}>
                                <div className={classes.img}><img src="your image link" alt="" /></div>
                                <h2>Lorem P. Ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>

                            <div>
                                <div className={classes.img}><img src="your image link" alt="" /></div>
                                <h2>Mr. Lorem Ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>

                            <div>
                                <div className={classes.img}><img src="your image link" alt="" /></div>
                                <h2>Lorem Ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default Slider