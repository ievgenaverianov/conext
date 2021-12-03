import React, {Component} from "react";
import "./LegalDisclaimer.scss"
import Footer from "../../components/Navigation/Footer/Footer";

class LegalDisclaimer extends Component {

    state = {
        title: 'Mentions légales',
        subtitle: 'Définitions :',
        text: ['• Client : tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales. \nPrestations et Services : Conext met à disposition des Clients :',
            '• Contenu : Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.',
            '• Informations clients : Ci-après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par Conext pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.',
            '• Utilisateur : Internaute se connectant, utilisant le site susnommé.',
            '• Informations personnelles : « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978). \nLes termes « données à caractère personnel », « personne concernée », « sous-traitant » et « données sensibles » ont le sens défini par le Règle- ment Général sur la Protection des Données (RGPD : n° 2016-679).']
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {

        return (
            <>
                <div className="avy-legal-disclaimer">
                    <h2>{this.state.title}</h2>
                    <h3>{this.state.subtitle}</h3>
                    {this.state.text.map(paragraph => {
                        return (
                            <p>{paragraph}</p>
                        )
                    })}
                </div>
                <Footer/>
            </>
        )
    }
}

export default LegalDisclaimer