import React, {Component} from "react";
import classes from "./Homepage.module.scss"
import Button from "../../components/UI/Button/Button";
import homepagePic from "../../img/homepage-pic-1.png"

class Homepage extends Component {
    render() {
        return (
            <div className={classes.Homepage}>
                <h1>Developing your <b>ideas</b><div /></h1>
                <p>Conext est une agence spécialisée dans le développement d’applications mobiles et solutions
                    numériques innovantes.</p>
                <Button>
                    voir plus
                </Button>
                <img src={homepagePic} alt="homepage-pic-1"/>

            </div>
        )
    }
}

export default Homepage