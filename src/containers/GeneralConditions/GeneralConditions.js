import React, {Component} from "react";
import "./GeneralConditions.scss"
import Footer from "../../components/Navigation/Footer/Footer";

class GeneralConditions extends Component {

    state = {
        title: 'Conditions générales de vente de prestation de services entre professionnels sur internet',
        text: ['• Préambule : \nLes conditions générales de vente décrites ci-après détaillent les droits et obligations de Conext et de son client dans le cadre de la vente de ses prestations de services. \nToute prestation accomplie par Conext implique donc l\'adhésion sans réserve de l\'acheteur aux présentes conditions générales de vente.',
            '• Article 1 - Principes : \nCes conditions générales concernent les prestations de services fournis entre professionnels (prestataire / acheteur). \nLes présentes conditions générales expriment l\'intégralité des obligations des parties. Elles constituent le socle unique de la relation commerciale entre les parties, et, en ce sens, l\'acheteur est réputé les accepter sans réserve. \nLes présentes conditions générales de vente prévalent sur tout autre document, et notamment sur toutes conditions générales d\'achat. Elles s\'appliquent, sans restriction ni réserve, à tous les services rendus par le prestataire auprès des acheteurs de même catégorie. \nLe prestataire et l\'acheteur conviennent que les présentes conditions générales régissent exclusivement leur relation. Le prestataire se réserve le droit de modifier ponctuellement ses conditions générales.']
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        document.querySelector('.rcs-inner-container').scrollTo(0, 0);
    }


    render() {

        return (
            <div className="avy-general-conditions">
                <section>
                    <h2>{this.state.title}</h2>
                    {this.state.text.map(paragraph => {
                        return (
                            <p>{paragraph}</p>
                        )
                    })}
                </section>
                <Footer/>
            </div>
        )
    }
}

export default GeneralConditions