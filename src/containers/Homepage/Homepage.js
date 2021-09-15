import React, {Component} from "react";
import classes from "./Homepage.module.scss"
import homepagePicOne from "../../img/homepage-pic-1.png"
import homepagePicTwo from "../../img/homepage-pic-2.png"
import homepagePicFour from "../../img/homepage-pic-4.png"
import homepagePicFive from "../../img/homepage-pic-5.png"
import HomepageItem from "./HomepageItem/HomepageItem";
import NavigationDots from "../../components/UI/NavigationDots/NavigationDots";

class Homepage extends Component {

    state = {
        activeSection: 1,
        canBeScrolled: true,
        sections: [
            {
                id: 1,
                title: 'Developing your ideas',
                text: 'Conext est une agence spécialisée dans le développement d’applications mobiles et solutions numériques innovantes.',
                image: homepagePicOne,
                isButtonShown: true,
                buttonText: 'voir plus'
            },
            {
                id: 2,
                title: 'Nos expertises',
                text: 'Notre équipe est composée d’experts en développement d’applications mobiles, de sites web et d’outils numériques.',
                image: homepagePicTwo,
            },
            {
                id: 3,
                title: 'Nos réalisations',
                isSliderShown: true
            },
            {
                id: 4,
                title: 'Notre fonctionnement',
                text: 'Suivez l’avancement de votre projet en temps réel grâce à notre interface de suivi personnalisée.',
                image: homepagePicFour,
                isButtonShown: true,
                buttonText: 'découvrir nos offres'
            },
            {
                id: 5,
                title: 'Qui sommes-nous?',
                text: 'Notre équipe est composée d’experts pluridisciplinaires passionnés par le développement et l’innovation. Notre mission : tout mettre en oeuvre pour donner vie à vos projets.',
                image: homepagePicFive,
                isButtonShown: true,
                buttonText: 'en savoir plus'
            },
        ]
    };

    onScrollEventHandler = (e) => {
        // e.preventDefault();

        if (this.state.canBeScrolled) {
            if (e.deltaY > 0) {
                if (this.state.activeSection < this.state.sections.length) {
                    this.setState({
                        activeSection: this.state.activeSection + 1
                    })
                }
            } else {
                if (this.state.activeSection > 1) {
                    this.setState({
                        activeSection: this.state.activeSection - 1
                    })
                }
            }
            this.setState({
                canBeScrolled: !this.state.canBeScrolled
            })
            setTimeout(() => this.setState({
                canBeScrolled: !this.state.canBeScrolled
            }), 1000);
        }
    }

    onDotClickHandler = sectionID => {
        this.setState({
            activeSection: sectionID
        })
    }

    render() {

        return (
            <div className={classes.Homepage} onWheel={this.onScrollEventHandler}>

                {this.state.sections.map(section => {
                        return (
                            <HomepageItem
                                key={section.id}
                                id={section.id}
                                isActive={section.id === this.state.activeSection}
                                title={section.title}
                                text={section.text}
                                image={section.image}
                                isButtonShown={section.isButtonShown}
                                buttonText={section.buttonText}
                                isSliderShown={section.isSliderShown}
                            />
                        )
                    }
                )}

                { <ul className={classes.NavigationDots}>
                    {this.state.sections.map(section => {
                            return (
                                <NavigationDots
                                    key={section.id}
                                    id={section.id}
                                    isActive={section.id === this.state.activeSection}
                                    onDotClick={this.onDotClickHandler}
                                />
                            )
                        }
                    )}
                </ul> }

            </div>
        )
    }
}

export default Homepage