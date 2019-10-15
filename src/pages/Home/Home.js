import React from "react";
import { NavLink } from 'react-router-dom';
// import ReactSearchBox from 'react-search-box'
import Card from "../../components/Cards/Card";
import './Home.css';
import Collapsible from "react-collapsible";

class Home extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props
        console.log(props);      // ✅ {}
        console.log(this.props); // ✅ {}

        this.state = {
            searchText: "",
            spritsTrigger: "Filter By Spirits +",
            typeTrigger: "Filter By Type +"
        }
        this.setSearch = this.setSearch.bind(this);
        this.spiritClose = this.spiritClose.bind(this);
        this.spiritOpen = this.spiritOpen.bind(this);
    }

    setSearch(e) {
        this.setState({ searchText: e.target.value });
    }

    spiritOpen(e){
        e.target.trigger = "Filter By Spirits -";
    }

    spiritClose(e){
        e.target.trigger = "Filter By Spirits +";
    }



    searchResultsBox() {
        if (this.state.searchText == "") {
            return (<div />);
        }
        return (
            <div>
                <header className="major" id="home-header">
                    <h3>Search Results</h3>
                </header>
                <div className="row no-collapse-1">

                    <Card route="/drinks/example" image_src="images/alcoholic_drinks/gin_drinks/gin-drinks.jpg" title="Gin Drinks" />
                    <Card route="/drinks/example" image_src="images/alcoholic_drinks/rum_drinks/rum-drinks.jpg" title="Rum Drinks" />
                    <Card route="/drinks/example" image_src="images/alcoholic_drinks/scotch_drinks/scotch-drinks.jpg" title="Scotch Drinks" />

                </div>
            </div>
        )
    }

    render() {
    const drink = 
    [
        {name: "Manhattan", base_spirit: "bourbon", drink_type: "classic cocktail", img: "manhattan.jpg"},
    ]
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
                                        <input className="text" type="text" name="homeSearch" placeholder="Search Drinks..." value={this.state.searchText} onChange={this.setSearch} />
                                    </div>
                                </div>
                                <div className="row half">
                                    <section className="6u">
                                        <Collapsible trigger="Filter By Spirits +" triggerWhenOpen={"Filter By Spirits -"}>
                                            
                                                <button class="button">Rum</button>
                                            
                                                <button class="button">Gin</button>
                                            
                                                <button class="button">Scotch</button>
                                            
                                                <button class="button">Tequila</button>
                                            
                                                <button class="button">Vodka</button>
                                            
                                                <button class="button">Whiskey</button>
                                        </Collapsible>
                                    </section>
                                    <section className="6u">
                                        <Collapsible trigger="Filter By Type +"  triggerWhenOpen={"Filter By Type -"}>
                                            
                                                <button class="button">Blended</button>
                                            
                                                <button class="button">Classic</button>
                                            
                                                <button class="button">Hot</button>
                                            
                                                <button class="button">Holiday</button>
                                            
                                                <button class="button">Novelty</button>
                                            
                                                <button class="button">Shots</button>
                                        </Collapsible>
                                    </section>
                                </div>
                            </form>
                        </section>

                        {this.searchResultsBox()}
                    </div>




                    <div className="container" id="featured-drinks">
                        <header className="major" id="home-header">
                            <h2>Featured Drinks</h2>
                            <span className="byline">Try some of Drinkskly's most popular searches</span>
                        </header>

                        <div className="row no-collapse-1">
                            <Card route="/drinks/example" image_src="images/alcoholic_drinks/gin_drinks/gin-drinks.jpg" title="Gin Drinks" />
                            <Card route="/drinks/example" image_src="images/alcoholic_drinks/rum_drinks/rum-drinks.jpg" title="Rum Drinks" />
                            <Card route="/drinks/example" image_src="images/alcoholic_drinks/scotch_drinks/scotch-drinks.jpg" title="Scotch Drinks" />

                        </div>
                        <div className="row no-collapse-1">
                            <Card route="/drinks/example" image_src="images/alcoholic_drinks/tequila_drinks/tequila-drinks.jpg" title="Tequila Drinks" />
                            <Card route="/drinks/example" image_src="images/alcoholic_drinks/vodka_drinks/vodka-drinks.jpg" title="Vodka Drinks" />
                            <Card route="/drinks/example" image_src="images/alcoholic_drinks/whiskey_drinks/whiskey-drinks.jpg" title="Whiskey Drinks" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;