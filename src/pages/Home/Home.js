import React from "react";
import { NavLink } from 'react-router-dom';
// import ReactSearchBox from 'react-search-box'
import Card from "../../components/Cards/Card";
import './Home.css';
import Collapsible from "react-collapsible";
import { Helmet } from "react-helmet";

class Home extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props

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
            shotsToggle: false,
            scotchClassname: "button small",
            tequilaClassname: "button small",
            vodkaClassname: "button small",
            whiskeyClassname: "button small",
            rumClassname: "button small",
            ginClassname: "button small",
            blendedClassname: "button small",
            classicClassname: "button small",
            hotClassname: "button small",
            holidayClassname: "button small",
            noveltyClassname: "button small",
            shotsClassname:"button small"

        }
        this.setSearch = this.setSearch.bind(this);


        this.spiritClose = this.spiritClose.bind(this);
        this.spiritOpen = this.spiritOpen.bind(this);

        this.filterDrinks = this.filterDrinks.bind(this);

        this.rumState = this.rumState.bind(this);
        this.ginState = this.ginState.bind(this);
        this.scotchState = this.scotchState.bind(this);
        this.tequilaState = this.tequilaState.bind(this);
        this.vodkaState = this.vodkaState.bind(this);
        this.whiskeyState = this.whiskeyState.bind(this);
        this.blendedState = this.blendedState.bind(this);
        this.classicState = this.classicState.bind(this);
        this.hotState = this.hotState.bind(this);
        this.holidayState = this.holidayState.bind(this);
        this.noveltyState = this.noveltyState.bind(this);
        this.shotsState = this.shotsState.bind(this);

    }

    setSearch(e) {
        this.setState({ searchText: e.target.value });
    }

    filterDrinks(){
        const drinkSet = 
        [
            {name: "Manhattan",   base_spirit: "whiskey",       drink_type: "classic cocktail", img: "manhattan.jpg",   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {name: "Mojito",      base_spirit: "rum",           drink_type: "classic cocktail", img: "mojito.jpg",      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 2 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {name: "Gin Fizz",    base_spirit: "gin",           drink_type: "classic cocktail", img: "gin-fizz.jpg",    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 3 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {name: "Pina Colada", base_spirit: "rum",           drink_type: "blended cocktail", img: "pina-colada.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 4 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {name: "Hot Toddy",   base_spirit: "whiskey",       drink_type: "hot cocktail",     img: "hot-toddy.jpg",   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 5 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {name: "B-52",        base_spirit: "coffee liquor", drink_type: "shots",            img: "b-52.jpg",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 6 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {name: "Eggnog",      base_spirit: "whiskey",       drink_type: "holiday cocktail", img: "eggnog.jpg",      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {name: "Jello Shots", base_spirit: "vodka",         drink_type: "novelty cocktail", img: "jelloshot.jpg",   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 
            {name: "Margarita",   base_spirit: "tequila",       drink_type: "blended cocktail", img: "margarita.jpg",   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 
            {name: "Scotch Sour", base_spirit: "scotch",        drink_type: "classic cocktail", img: "scotchsour.jpg",  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 
        ]

        var subset = drinkSet.filter((drink)=>{
            var reducedName = drink.name.toLowerCase();
            return reducedName.includes(this.state.searchText.toLowerCase(), 0);
        })
        return subset;
    }



    spiritOpen(e){
        e.target.trigger = "Filter By Spirits -";
    }

    spiritClose(e){
        e.target.trigger = "Filter By Spirits +";
    }

    rumState(e){
        e.preventDefault();
        if(this.state.rumToggle === false){
            this.setState({rumToggle: true});
            this.setState({rumClassname: "button small selectedFilter"});
        }

        else{
            this.setState({rumToggle: false});
            this.setState({rumClassname: "button small"})
        }

        console.log(this.state.rumToggle);
    }

    ginState(e){
        e.preventDefault();
        if(this.state.ginToggle === false){
            this.setState({ginToggle: true});
            this.setState({ginClassname: "button small selectedFilter"});
        }

        else{
            this.setState({ginToggle: false});
            this.setState({ginClassname: "button small"})
        }

        console.log(this.state.ginToggle);
    }

    scotchState(e){
        e.preventDefault();
        if(this.state.scotchToggle === false){
            this.setState({scotchToggle: true});
            this.setState({scotchClassname: "button small selectedFilter"});
        }

        else{
            this.setState({scotchToggle: false});
            this.setState({scotchClassname: "button small"})
        }

        console.log(this.state.scotchToggle);
    }

    tequilaState(e){
        e.preventDefault();
        if(this.state.tequilaToggle === false){
            this.setState({tequilaToggle: true});
            this.setState({tequilaClassname: "button small selectedFilter"});
        }

        else{
            this.setState({tequilaToggle: false});
            this.setState({tequilaClassname: "button small"})
        }

        console.log(this.state.tequilaToggle);
    }

    vodkaState(e){
        e.preventDefault();
        if(this.state.vodkaToggle === false){
            this.setState({vodkaToggle: true});
            this.setState({vodkaClassname: "button small selectedFilter"});
        }

        else{
            this.setState({vodkaToggle: false});
            this.setState({vodkaClassname: "button small"})
        }

        console.log(this.state.vodkaToggle);
    }

    whiskeyState(e){
        e.preventDefault();
        if(this.state.whiskeyToggle === false){
            this.setState({whiskeyToggle: true});
            this.setState({whiskeyClassname: "button small selectedFilter"});
        }

        else{
            this.setState({whiskeyToggle: false});
            this.setState({whiskeyClassname: "button small"})
        }

        console.log(this.state.whiskeyToggle);
    }

    blendedState(e){
        e.preventDefault();
        if(this.state.blendedToggle === false){
            this.setState({blendedToggle: true});
            this.setState({blendedClassname: "button small selectedFilter"});
        }

        else{
            this.setState({blendedToggle: false});
            this.setState({blendedClassname: "button small"})
        }

        console.log(this.state.blendedToggle);
    }

    classicState(e){
        e.preventDefault();
        if(this.state.classicToggle === false){
            this.setState({classicToggle: true});
            this.setState({classicClassname: "button small selectedFilter"});
        }

        else{
            this.setState({classicToggle: false});
            this.setState({classicClassname: "button small"})
        }

        console.log(this.state.classicToggle);
    }

    hotState(e){
        e.preventDefault();
        if(this.state.hotToggle === false){
            this.setState({hotToggle: true});
            this.setState({hotClassname: "button small selectedFilter"});
        }

        else{
            this.setState({hotToggle: false});
            this.setState({hotClassname: "button small"})
        }

        console.log(this.state.hotToggle);
    }

    holidayState(e){
        e.preventDefault();
        if(this.state.holidayToggle === false){
            this.setState({holidayToggle: true});
            this.setState({holidayClassname: "button small selectedFilter"});
        }

        else{
            this.setState({holidayToggle: false});
            this.setState({holidayClassname: "button small"})
        }

        console.log(this.state.holidayToggle);
    }

    noveltyState(e){
        e.preventDefault();
        if(this.state.noveltyToggle === false){
            this.setState({noveltyToggle: true});
            this.setState({noveltyClassname: "button small selectedFilter"});
        }

        else{
            this.setState({noveltyToggle: false});
            this.setState({noveltyClassname: "button small"})
        }

        console.log(this.state.noveltyToggle);
    }


    shotsState(e){
        e.preventDefault();
        if(this.state.shotsToggle === false){
            this.setState({shotsToggle: true});
            this.setState({shotsClassname: "button small selectedFilter"});
        }

        else{
            this.setState({shotsToggle: false});
            this.setState({shotsClassname: "button small"})
        }

        console.log(this.state.shotsToggle);
    }

    searchResultsBox() {
        if (this.state.searchText === "") {
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

  
    componentDidMount(){
        //console.log(this.state.scotchClassName);
        //console.log(this.state.tequilaClassName);
        //let doodoo = this.filterDrinks();
        //console.log(doodoo[0].name);
    }

    createTable() {
        var table = [];
        var drinkSet = this.filterDrinks();

        var ctr = 0;
        // Outer loop to create parent
        for (var i = 0; i < drinkSet.length/3; i++) {
            var children = [];
        //Inner loop to create children
        for (var j = 0; j < 3 && ctr < drinkSet.length; j++) {
            children.push(<Card
                    route = {"/"+drinkSet[ctr].base_spirit+"/"+drinkSet[ctr].name}
                    image_src = {"../../images/alcoholic_drinks/"+drinkSet[ctr].base_spirit+"_drinks/"+drinkSet[ctr].img}
                    title = {drinkSet[ctr].name}
                />);
            
            ctr++;
        }
            //Create the parent and add the children
            table.push(<div className="row no-collapse-1">{children}</div>);
        }
        return table
    }

    render() {

        return (
            <div>
                <Helmet>
                  <title>{"The Drinksly" + " | "+ "Drink Recipes"}</title>
                  <meta name="description" content={"The Drinksly is the best website for drink recipes, mixed drink recipes, and non-alcoholic drink recipes."}/>
                  <meta name="keywords" content={"drink, recipe, recipes, cocktail, cocktails, vodka, whiskey, gin, rum, tequila, scotch, non-alcoholic, mixed"} />
                  <meta name="author" content="thedrinksly.com"/>
                  <meta http-equiv="Content-Language" content="en-US"/>
                  <meta name="rating" content="adults"/>
                  <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
                </Helmet>
                <div className="wrapper style1">
                    <div className="container" id="search-box">
                        <section>
                            <header className="major">
                                <h2>The Drinksly</h2>
                                <span className="byline">Find yours here</span>
                            </header>
                            <form className="centered" id="home-form">
                                <div className="row half">
                                    <div className="12u">
                                        <input className="text" type="text" name="homeSearch" placeholder="Search Drinks..." value={this.state.searchText} onChange={this.setSearch} />
                                    </div>
                                </div>
                                <div className="row half">
                                    <section className="6u">
                                        <Collapsible trigger="Filter By Spirits +" triggerWhenOpen={"Filter By Spirits -"}>
                                            
                                                <button className={this.state.rumClassname} onClick={this.rumState}>Rum</button>
                                            
                                                <button className={this.state.ginClassname} onClick={this.ginState}>Gin</button>
                                            
                                                <button className={this.state.scotchClassname} onClick={this.scotchState}>Scotch</button>
                                            
                                                <button className={this.state.tequilaClassname} onClick={this.tequilaState}>Tequila</button>
                                            
                                                <button className={this.state.vodkaClassname} onClick={this.vodkaState}>Vodka</button>
                                            
                                                <button className={this.state.whiskeyClassname} onClick={this.whiskeyState}>Whiskey</button>
                                        </Collapsible>
                                    </section>
                                    <section className="6u">
                                        <Collapsible trigger="Filter By Type +"  triggerWhenOpen={"Filter By Type -"}>
                                            
                                                <button className={this.state.blendedClassname} onClick={this.blendedState}>Blended</button>
                                            
                                                <button className={this.state.classicClassname} onClick={this.classicState}>Classic</button>
                                            
                                                <button className={this.state.hotClassname} onClick={this.hotState}>Hot</button>
                                            
                                                <button className={this.state.holidayClassname} onClick={this.holidayState}>Holiday</button>
                                            
                                                <button className={this.state.noveltyClassname} onClick={this.noveltyState}>Novelty</button>
                                            
                                                <button className={this.state.shotsClassname} onClick={this.shotsState}>Shots</button>
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
                    </div>
                    <div id="extra">
                        <div className="container">
                            {this.createTable()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;