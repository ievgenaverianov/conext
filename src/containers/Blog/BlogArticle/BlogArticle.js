import React, {Component} from "react";
import "./BlogArticle.scss"
import blogArticlePic from "../../../img/blog-article-pic-1.png";
import blogArticlePicTablet from "../../../img/blog-article-pic-tablet-1.png";
import Footer from "../../../components/Navigation/Footer/Footer";
import Button from "../../../components/UI/Button/Button";
import SimilarBlogArticle from "./SimilarBlogArticle/SimilarBlogArticle";

const categories = ['Innovation', 'Coding', 'Business'];

class BlogArticle extends Component {

    state = {
        mainSection: {
            image: blogArticlePic,
            imageTablet: blogArticlePicTablet,
            date: '15.06.2021 - Écrit par Rémi Lagorce',
            title: 'Améliorez la productivité de vos employés grâce à la méthode Pomodoro.',
            text: ['La méthode Pomodoro est une méthode de gestion du temps inventée à la fin des années 80 par le développeur et entrepreneur Francesco Cirillo.',
                'Elle consiste à se concentrer sur une tâche donnée pendant un intervalle de 25 min ( 1 intervalle = 1 Pomodoro) puis à prendre une pause de 5 min. Et après 4 Pomodoros à prendre une pause plus longue de 15 à 30 min.',
                'F. Crillo l’a nommé la méthode “Pomodoro” en rappel au minuteur en forme de tomate qu’il utilisait au moment de développer cette technique.']
        },
        sections: [
            {
                id: 1,
                title: 'Comment bien appliquer la méthode Pomodoro ?',
                text: ['La méthode Pomodoro se déroule en 6 étapes :',
                    '• Étape 1 : Choisissez une tâche à accomplir ou un lot de micro tâches. Vous devez soit choisir une seule tâche qui vous prendra au moins 25 min ou choisir plusieurs micro tâches de 5 à 10 min que vous pouvez enchainer à la suite.',
                    '• Étape 2 : Mettez votre minuteur à 25 min (25 min = 1 Pomodoro).',
                    '• Étape 3 : Concentrez-vous sur votre tâche ou sur votre lot de micro tâches jusqu’à ce que l’alarme sonne. Pendant ces 25 min, vous devez ignorer les distractions et ne vous concentrer que sur le travail à accomplir.',
                    '• Étape 4 : Prenez une courte pause de 5 min. Pendant cette pause faites quelque chose qui n’a rien à voir avec votre travail. Marchez, étirez-vous, mangez un encas… bref rechargez les batteries.',
                    '• Étape 5 : Reprenez le travail pendant 25 min.',
                    '• Étape 6 : Après 4 session de 25 min, prenez une pause de 15 à 30 min.']
            },
            {
                id: 2,
                title: 'Amélioration de la concentration',
                text: ['La méthode Pomodoro est un excellent exercice de concentration. Elle vous contraint à ne vous concentrer que sur une seule chose à la fois. Si vous avez tendance à vous laissez distraire ou que vous êtes habitué au multitâche, cette méthode vous permettra de ré-apprendre à vous concentrer.',
                    'Il se peut que vous ayez quelques difficultés à l’appliquer au début mais avec le temps vous serez capable de maintenir votre attention pendant de plus en plus longues périodes.']
            },
            {
                id: 3,
                title: 'Augmentation de la productivité',
                text: ['La loi d’Illich déclare que notre productivité tend à décroitre à mesure que l’on travaille voir à atteindre des valeurs négatives au bout d’un certain temps.',
                    'Il est vrai que quand on travaille trop et que l’on néglige nos pauses, on a tendance à faire plus d’erreurs sous l’effet de la fatigue. Et comme on fait plus d’erreurs, on passe plus de temps à travailler pour les corriger. On entre alors dans ce cercle vicieux où le travail nous fatigue et où la fatigue nous crée du travail.',
                    'La méthode Pomodoro permet de limiter ce phénomène. Comme la méthode implique de prendre des pauses à intervalles réguliers cela permet de mieux gérer votre énergie. Vous êtes alors moins fatigué et plus concentré tout au long de la journée ce qui vous évite de faire des erreurs. Vous gardez ainsi un niveau de productivité constant.']
            },
            {
                id: 4,
                title: 'Meilleure planification',
                text: ['Il est toujours difficile d’estimer à l’avance le temps que vos tâches vous prendront. Même si la méthode Pomodoro, ne vous permettra jamais de savoir exactement le temps nécessaire pour accomplir une tâche donnée, elle vous permettra certainement d’améliorer votre estimation.',
                    'Plus vous appliquerez cette méthode, plus vous récolterez de données sur le temps que vous passez à accomplir vos tâches. Jusqu’au moment où vous aurez suffisamment de données pour déterminer avec précision combien de temps chaque tâche vous prendra.',
                    'La méthode Pomodoro n’est donc pas qu’une façon de mieux gérer votre temps, c’est aussi une façon de mieux planifier.',
                    'Extraits de l’article d’Everlaab «Méthode Pomodoro : comment améliorer la gestion de votre temps ?»']
            }

        ],
        category: categories[0],
        similarArticles: [
            {
                id: 1,
                title: 'Trouvez de brillantes idées de projets grâce à cet exercice d’écriture créative.',
                date: '16.06.2021',
                link: '#'
            },
            {
                id: 2,
                title: 'Trouvez de brillantes idées de projets grâce à cet exercice d’écriture créative.',
                date: '16.06.2021',
                link: '#'
            }
        ]
    };

    render() {

        return (
            <>
                <div className="avy-blog-article">
                    <section className="avy-blog-article__main-section">
                        { (window.innerWidth <= 1279 && window.innerHeight > window.innerWidth) ?
                            <img src={this.state.mainSection.imageTablet} alt="blog-article-pic"/> :
                            <img src={this.state.mainSection.image} alt="blog-article-pic"/> }
                        <div className="avy-main-section__content">
                            <span className="avy-blog-article__date">{this.state.mainSection.date}</span>
                            <h2>{this.state.mainSection.title}</h2>
                            {this.state.mainSection.text.map(paragraph => {
                                return (
                                    <p>{paragraph}</p>
                                )
                            })}
                        </div>
                    </section>
                    <section className="avy-blog-article__second-section">
                        {this.state.sections.map(section => {
                            return (
                                <>
                                    <h3>{section.title}</h3>
                                    {section.text.map(paragraph => {
                                        return (
                                            <p>{paragraph}</p>
                                        )
                                    })}
                                </>

                            )
                        })}
                        <span>Classé sous :</span>
                        <Button>{this.state.category}</Button>
                        <h4>Vous avez aimé cet article ? Découvrez aussi :</h4>
                        <div className="avy-similar-articles-wrapper">
                            {this.state.similarArticles.map(article => {
                                return (
                                    <SimilarBlogArticle
                                        title={article.title}
                                        date={article.date}
                                        link={article.link}
                                    />

                                )
                            })}
                        </div>
                    </section>
                </div>
                <Footer/>
            </>
        )
    }
}

export default BlogArticle