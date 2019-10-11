import React from "react";
import { NavLink } from 'react-router-dom';
import ReactSearchBox from 'react-search-box'

import './Home.css';
class Home extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props
        console.log(props);      // ✅ {}
        console.log(this.props); // ✅ {}
    }

    render() {
        return (
            <div>


                <div className="wrapper style1">
                    <div className="container" id="search-box">
                        <section>
                            <header className="major">
                                <h2>The Drinksly</h2>
                                <span className="byline">Find yours here</span>
                            </header>
                            <form className="center" id="home-form">
                                <div className="row half">
                                    <div className="12u">
                                        <input className="text" type="text" name="name" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="row quarter">
                                    <div className="12u">
                                        <input type="submit" value="Search" class="button alt" />
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>


                <div className="wrapper style1">
                    <div className="container">
                        <header className="major" id="home-header">
                            <h2>Mauris vulputate dolor</h2>
                            <span className="byline">Integer sit amet pede vel arcu aliquet pretium</span>
                        </header>
                        <div className="row no-collapse-1">
                            <section className="4u">
                                <a href="/drinks/example" className="image featured">
                                    <img src="images/alcoholic_drinks/gin_drinks/gin-drinks.jpg" alt="gin drinks" />
                                </a>
                                <div className="box">
                                    <p>Gin Drinks</p>
                                </div>
                            </section>
                            <section className="4u">
                                <a href="/drinks/example" className="image featured">
                                    <img src="images/alcoholic_drinks/rum_drinks/rum-drinks.jpg" alt="rum drinks" />
                                </a>
                                <div className="box">
                                    <p>Rum Drinks</p>
                                </div>
                            </section>
                            <section className="4u">
                                <a href="/drinks/example" className="image featured">
                                    <img src="images/alcoholic_drinks/scotch_drinks/scotch-drinks.jpg" alt="scotch drinks" />
                                </a>
                                <div className="box">
                                    <p>Scotch Drinks</p>
                                </div>
                            </section>
                        </div>
                        <div className="row no-collapse-1">
                            <section className="4u">
                                <a href="/drinks/example" className="image featured">
                                    <img src="images/alcoholic_drinks/tequila_drinks/tequila-drinks.jpg" alt="tequila drinks" />
                                </a>
                                <div className="box">
                                    <p>Tequila Drinks</p>
                                </div>
                            </section>
                            <section className="4u">
                                <a href="/drinks/example" className="image featured">
                                    <img src="images/alcoholic_drinks/vodka_drinks/vodka-drinks.jpg" alt="vodka drinks" />
                                </a>
                                <div className="box">
                                    <p>Vodka Drinks</p>
                                </div>
                            </section>
                            <section className="4u">
                                <a href="/drinks/example" className="image featured">
                                    <img src="images/alcoholic_drinks/whiskey_drinks/whiskey-drinks.jpg" alt="vodka drinks" />
                                </a>
                                <div className="box">
                                    <p>Whiskey Drinks</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;