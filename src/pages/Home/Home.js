import React from "react";
import { NavLink } from 'react-router-dom';

import './Home.css';
class Home extends React.Component {

    render() {
        return (
            <div id="extra">
                <div className="container">
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
        );
    }
};

export default Home;