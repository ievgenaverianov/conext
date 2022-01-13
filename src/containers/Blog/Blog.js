import React, {Component} from "react";
import "./Blog.scss"
import blogPicOne from "../../img/blog-pic-1.png";
import blogPicTwo from "../../img/blog-pic-2.png";
import blogPicThree from "../../img/blog-pic-3.png";
import blogPicFour from "../../img/blog-pic-4.png";
import BlogItem from "./BlogItem/BlogItem";
import Button from "../../components/UI/Button/Button";
import Footer from "../../components/Navigation/Footer/Footer";

const categories = ['Innovation', 'Coding', 'Business'];

class Blog extends Component {

    state = {
        activeCategory: categories[0],
        hideItems: false,
        articles: [
            {
                id: 1,
                title: 'La startup LEA développe une chaise ergonomique optimisée pour le télétravail.',
                category: categories[0],
                date: '16.06.2021',
                image: blogPicOne,
                articleLink: '#'
            },
            {
                id: 2,
                title: 'Améliorez la productivité de vos employés grâce à la méthode Pomodoro.',
                category: categories[0],
                date: '15.06.2021',
                image: blogPicTwo,
                articleLink: '/blog/article'
            },
            {
                id: 3,
                title: 'Comment construire un parcours utilisateur efficace : les conseils de nos designers.',
                category: categories[0],
                date: '14.06.2021',
                image: blogPicThree,
                articleLink: '#'
            },
            {
                id: 4,
                title: 'Trouver de brillantes idées de projet grâce à cet exercice d’écriture créative.',
                category: categories[0],
                date: '13.06.2021',
                image: blogPicFour,
                articleLink: '#'
            },
            {
                id: 5,
                title: 'Comment construire un parcours utilisateur efficace : les conseils de nos designers.',
                category: categories[1],
                date: '14.06.2021',
                image: blogPicThree,
                articleLink: '#'
            },
            {
                id: 6,
                title: 'Trouver de brillantes idées de projet grâce à cet exercice d’écriture créative.',
                category: categories[1],
                date: '13.06.2021',
                image: blogPicFour,
                articleLink: '#'
            },
            {
                id: 7,
                title: 'Trouver de brillantes idées de projet grâce à cet exercice d’écriture créative.',
                category: categories[2],
                date: '13.06.2021',
                image: blogPicFour,
                articleLink: '#'
            },
            {
                id: 8,
                title: 'Trouver de brillantes idées de projet grâce à cet exercice d’écriture créative.',
                category: categories[0],
                date: '13.06.2021',
                image: blogPicFour,
                articleLink: '#'
            },
        ]
    };

    clickHandler = (event, category) => {
        console.log(category);
        console.log(this.state.activeCategory);
        if (category !== this.state.activeCategory) {
            this.setState({
                hideItems: !this.state.hideItems
            })
            setTimeout(() => this.setState({
                activeCategory: category,
                hideItems: !this.state.hideItems
            }), 500)
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (window.innerWidth >= 1023 && window.innerHeight < window.innerWidth) {
            document.querySelector('.rcs-inner-container').scrollTo(0, 0);
        }
    }

    render() {

        return (
            <>
                <div className="avy-blog">
                    <section>
                        <h1>Notre blog</h1>
                        <div className="avy-blog__categories">
                            <span>Catégories :</span>
                            {categories.map((category) => {
                                return (
                                    <Button
                                        onClick={event => this.clickHandler(event, category)}
                                        isActive={this.state.activeCategory === category}
                                    >
                                        {category}
                                    </Button>
                                )
                            })}
                        </div>
                        <div className="avy-blog__articles">
                            {categories.map((category) => {
                                if (category === this.state.activeCategory) {
                                    return (
                                        <div className={`avy-blog__articles-wrapper avy-blog__${category}`}>
                                            {this.state.articles.map(article => {
                                                return (
                                                    category === article.category ?
                                                        <BlogItem
                                                            key={article.id}
                                                            id={article.id}
                                                            image={article.image}
                                                            isHidden={this.state.hideItems}
                                                            category={article.category}
                                                            date={article.date}
                                                            title={article.title}
                                                            link={article.articleLink}
                                                        /> : null
                                                )
                                            })}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </section>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Blog