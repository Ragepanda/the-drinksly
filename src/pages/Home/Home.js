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
            typeTrigger: "Filter By Type +",
            rumToggle: false,
            ginToggle: false,
            scotchToggle: false,
            tequilaToggle: false,
            vodkaToggle: false,
            whiskeyToggle: false,
            blendedToggle: false,
            classicToggle: false,
            hotToggle: false,
            holidayToggle: false,
            noveltyToggle: false,
            rumClassname: "button",
            ginClassname: "button",
            scotchClassName: "button",
            tequilaClassName: "button",
            vodkaClassName: "button",
            whiskeyClassName: "button",
            blendedClassName: "button",
            classicClassName: "button",
            hotClassName: "button",
            holidayClassName: "button",
            noveltyClassName: "button",

        }
        this.setSearch = this.setSearch.bind(this);
        this.spiritClose = this.spiritClose.bind(this);
        this.spiritOpen = this.spiritOpen.bind(this);
        this.rumState = this.rumState.bind(this);
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

    rumState(e){
        e.preventDefault();
        if(this.state.rumToggle == false){
            this.setState({rumToggle: true});
            this.setState({rumClassname: "button selectedFilter"});
        }

        else{
            this.setState({rumToggle: false});
            this.setState({rumClassname: "button"})
        }

        console.log(this.state.rumToggle);
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
        {name: "Manhattan",   base_spirit: "bourbon",       drink_type: "classic cocktail", img: "manhattan.jpg",   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Mojito",      base_spirit: "rum",           drink_type: "classic cocktail", img: "mojito.jpg",      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 2 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Gin Fizz",    base_spirit: "gin",           drink_type: "classic cocktail", img: "gin-fizz.jpg",    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 3 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Pina Colada", base_spirit: "rum",           drink_type: "blended cocktail", img: "pina-colada.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 4 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Hot Toddy",   base_spirit: "bourbon",       drink_type: "hot cocktail",     img: "hot-toddy.jpg",   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 5 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "B-52",        base_spirit: "coffee liquor", drink_type: "shots",            img: "b-52.jpg",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 6 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Eggnog",      base_spirit: "bourbon",       drink_type: "holiday cocktail", img: "eggnog.jpg",      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Jello Shots", base_spirit: "vodka",         drink_type: "novelty cocktail", img: "jelloshot.jpg",   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 
        {name: "Margarita",   base_spirit: "tequila",       drink_type: "blended cocktail", img: "margarita.jpg",   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 
        {name: "Scotch Sour", base_spirit: "scotch",        drink_type: "classic cocktail", img: "scotchsour.jpg",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 


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
                                            
                                                <button className={this.state.rumClassname} onClick={this.rumState}>Rum</button>
                                            
                                                <button className="button">Gin</button>
                                            
                                                <button className="button">Scotch</button>
                                            
                                                <button className="button">Tequila</button>
                                            
                                                <button className="button">Vodka</button>
                                            
                                                <button className="button">Whiskey</button>
                                        </Collapsible>
                                    </section>
                                    <section className="6u">
                                        <Collapsible trigger="Filter By Type +"  triggerWhenOpen={"Filter By Type -"}>
                                            
                                                <button className="button">Blended</button>
                                            
                                                <button className="button">classic</button>
                                            
                                                <button className="button">Hot</button>
                                            
                                                <button className="button">Holiday</button>
                                            
                                                <button className="button">Novelty</button>
                                            
                                                <button className="button">Shots</button>
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