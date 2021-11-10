import React, {Component} from "react";
import classes from "./AboutUs.module.scss"
import infoPic from "../../img/info-pic.png"
import employeePicOne from "../../img/employee-pic-1.png"
import employeePicTwo from "../../img/employee-pic-2.png"
import employeeBg from "../../img/employee-bg.svg"
import AboutUsInfo from "./AboutUsInfo/AboutUsInfo";
import Employee from "./Employee/Employee";

class Offers extends Component {

    state = {
        info: {
            title: 'Notre ADN',
            text: [
                'Conext est né d’une passion commune pour le développement informatique, l’innovation et l’entrepreneuriat.',
                'Faire émerger vos projets nous tient à cœur : Plateforme communautaire, e-commerce, réseaux sociaux, internet des objets ... Vos futures applications sont infinies.',
                'Chez Conext, nous nous entourons de profils talentueux pour assurer le développement de vos applications mobiles et solutions digitales.'
            ],
            image: infoPic
        },
        employees: [
            {
                id: 1,
                name: 'Rémi Lagorce',
                position: 'Ingénieur / Développeur',
                text: 'Je suis avant tout un passionné de sport. Je recharge mon énergie grâce à la course à pied, ' +
                    'le golf et le crossfit ! Créateur dans l’âme, j’adore faire émerger de nouveaux projets et ' +
                    'logiciels. Diplômé d’école d’ingénieur et de management, j’ai acquis de l’expérience au sein ' +
                    'd’entreprises dans les domaines du développement informatique et de l’innovation. \n Aujourd’hui ' +
                    'je mets à contribution mon énergie et mon savoir-faire pour la réalisation de vos solutions ' +
                    'numériques. Hâte de vous rencontrer autour d’un café pour parler de votre projet !',
                image: employeePicOne,
                linkedInLink: 'https://www.linkedin.com/'
            },
            {
                id: 2,
                name: 'Lorine André',
                position: 'Commerciale',
                text: 'Voyageuse dans l’âme, j’ai réalisé mes études dans le commerce international et ai ensuite ' +
                    'travaillé trois ans en tant que commerciale en charge de l’Europe. Par mon expérience, je sais ' +
                    'que la satisfaction client est notre priorité et que le développement de vos projets doit rester ' +
                    'flexible pour être continuellement amélioré.Également passionnée par les innovations technologiques ' +
                    'et écologiques, je souhaite contribuer au développement du monde de demain.',
                image: employeePicTwo,
                linkedInLink: 'https://www.linkedin.com/'
            }
        ]
    };

    render() {

        return (
            <div className={classes.AboutUs}>
                <h1>Qui sommes nous ?</h1>
                <AboutUsInfo
                    title={this.state.info.title}
                    text={this.state.info.text}
                    image={this.state.info.image}
                />
                <div className={classes.EmployeesContainer}>
                    <div className={classes.EmployeesContainer__background} style={{backgroundImage: 'url(' + employeeBg + ')'}}/>
                    {this.state.employees.map(employee => {
                            return (
                                <Employee
                                    key={employee.id}
                                    id={employee.id}
                                    name={employee.name}
                                    position={employee.position}
                                    text={employee.text}
                                    image={employee.image}
                                    iconLink={employee.linkedInLink}
                                />
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default Offers