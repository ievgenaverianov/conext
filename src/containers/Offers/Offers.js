import React, {Component} from "react";
import "./Offers.scss"
import offersPicOne from "../../img/offers-pic-1.png"
import offersPicTwo from "../../img/offers-pic-2.png"
import offersPicThree from "../../img/offers-pic-3.png"
import OffersItem from "./OffersItem/OffersItem";
import {NavLink} from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Footer from "../../components/Navigation/Footer/Footer";

class Offers extends Component {

    state = {
        sections: [
            {
                id: 1,
                title: 'Applications mobile',
                text: 'Conext est spécialisé dans le développement d’applications mobiles, API et back-office.',
                image: offersPicOne,
            },
            {
                id: 2,
                title: 'Sites web personnalisés',
                text: 'Nous développons des sites internet sur mesure pour des activités d’e-commerce, sites vitrines, réseaux sociaux, des applications et autres.',
                image: offersPicTwo,
            },
            {
                id: 3,
                title: 'Outils numériques',
                text: 'Logiciels de gestion, catalogue de produit, présentation interactive... Nous concevons et créons les outils numériques pour booster votre business.',
                image: offersPicThree,
            },
        ]
    };

    componentDidMount() {
        window.scrollTo(0, 0)
        if (window.innerWidth >= 1023 && window.innerHeight < window.innerWidth) {
            document.querySelector('.rcs-inner-container').scrollTo(0, 0);
        }
    }


    render() {

        return (
            <>
                <div className="avy-offers">
                    <h1>Nos offres</h1>
                    <div className="avy-offers__content">
                        {this.state.sections.map(section => {
                                return (
                                    <OffersItem
                                        key={section.id}
                                        id={section.id}
                                        title={section.title}
                                        text={section.text}
                                        image={section.image}
                                    />
                                )
                            }
                        )}
                    </div>
                    <div className="avy-offers__green-lines" />
                    <NavLink to='/contact'><Button>obtenir un devis gratuit</Button></NavLink>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Offers