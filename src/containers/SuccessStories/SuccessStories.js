import React, {Component} from "react";
import "./SuccessStories.scss"
import sliderLogoOne from "../../img/slider-item-logo-1.svg";
import sliderPicOne from "../../img/success-stories-pic-1.png";
import portfolioPicOne from "../../img/potfolio-pic-1.png";
import portfolioPicTwo from "../../img/potfolio-pic-2.png";
import portfolioPicThree from "../../img/potfolio-pic-3.png";
import portfolioPicFour from "../../img/potfolio-pic-4.png";
import portfolioPicFive from "../../img/potfolio-pic-5.png";
import portfolioPicSix from "../../img/potfolio-pic-6.png";
import Slider from "../../components/UI/Slider/Slider";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import Footer from "../../components/Navigation/Footer/Footer";

class SuccessStories extends Component {

    state = {
        slides: [
            {
                id: 1,
                title: 'Émilie W. nous montre E-watch, le bijou de demain.',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
                    ' ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
                logo: sliderLogoOne,
                image: sliderPicOne,
                buttonText: 'voir',
                buttonLink: '#'
            },
            {
                id: 2,
                title: 'Émilie W. nous montre E-watch, le bijou de demain.',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
                    ' ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
                logo: sliderLogoOne,
                image: sliderPicOne,
                buttonText: 'voir',
                buttonLink: '#'
            }
        ],
        portfolio: [
            {
                id: 1,
                title: 'E-App mobile',
                image: portfolioPicOne,
                link:'#'
            },
            {
                id: 2,
                title: 'Digital',
                image: portfolioPicTwo,
                link:'#'
            },
            {
                id: 3,
                title: 'Innovant 2',
                image: portfolioPicThree,
                link:'#'
            },
            {
                id: 4,
                title: 'New appli',
                image: portfolioPicFour,
                link:'#'
            },
            {
                id: 5,
                title: 'Innovant',
                image: portfolioPicFive,
                link:'#'
            },
            {
                id: 6,
                title: 'Your App',
                image: portfolioPicSix,
                link:'#'
            }
        ]
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        document.querySelector('.rcs-inner-container').scrollTo(0, 0);
    }

    render() {

        return (
            <div className="avy-success-stories">
                <section className="avy-success-stories__container">
                    <h1>Success stories</h1>
                    <Slider isActive={false} slides={this.state.slides}/>
                </section>
                <section className="avy-success-stories__portfolio">
                    {this.state.portfolio.map(item => {
                        return (
                            <PortfolioItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                link={item.link}
                            />
                        )
                    })}
                </section>
                <Footer/>
            </div>
        )
    }
}

export default SuccessStories