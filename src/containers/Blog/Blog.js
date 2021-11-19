import React, {Component} from "react";
import classes from "./Blog.module.scss"
import blogPicOne from "../../img/blog-pic-1.png";
import blogPicTwo from "../../img/blog-pic-2.png";
import blogPicThree from "../../img/blog-pic-3.png";
import blogPicFour from "../../img/blog-pic-4.png";
import BlogItem from "./BlogItem/BlogItem";
import Button from "../../components/UI/Button/Button";

class Blog extends Component {

    state = {
        categories: ['Innovation', 'Coding', 'Business'],
        articles: [
            {
                id: 1,
                title: 'La startup LEA développe une chaise ergonomique optimisée pour le télétravail.',
                category: 'Innovation',
                // category: this.state.categories[0],
                date: '16.06.2021',
                image: blogPicOne,
                articleLink: '#'
            },
            {
                id: 2,
                title: 'Améliorez la productivité de vos employés grâce à la méthode Pomodoro.',
                category: 'Innovation',
                date: '15.06.2021',
                image: blogPicTwo,
                articleLink: '#'
            },
            {
                id: 3,
                title: 'Comment construire un parcours utilisateur efficace : les conseils de nos designers.',
                category: 'Innovation',
                date: '14.06.2021',
                image: blogPicThree,
                articleLink: '#'
            },
            {
                id: 4,
                title: 'Trouver de brillantes idées de projet grâce à cet exercice d’écriture créative.',
                category: 'Innovation',
                date: '13.06.2021',
                image: blogPicFour,
                articleLink: '#'
            }
        ]
    };

    render() {

        return (
            <div className={classes.Blog}>
                <h1>Notre blog</h1>
                <div className={classes.Categories}>
                    <span>Catégories :</span>
                    <Button>{this.state.categories[0]}</Button>
                    <Button>{this.state.categories[1]}</Button>
                    <Button>{this.state.categories[2]}</Button>
                </div>
                <div className={classes.Articles}>
                    {this.state.articles.map(article => {
                        return (
                            <BlogItem
                                key={article.id}
                                id={article.id}
                                image={article.image}
                                category={article.category}
                                date={article.date}
                                title={article.title}
                                link={article.articleLink}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Blog