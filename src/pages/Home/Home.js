import React from "react";
import { NavLink } from 'react-router-dom';
// import ReactSearchBox from 'react-search-box'
import Card from "../../components/Cards/Card";
import './Home.css';
import Collapsible from "react-collapsible";
import { Helmet } from "react-helmet";
import Drinks from "../Drink/drinkobj.json";

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
            shotsClassname: "button small"

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

    filterDrinks() {
        const drinkSet = Drinks;
            
        var subset = [];
        if (this.state.searchText === "")
            subset = drinkSet;
        else {
            var subset = drinkSet.filter((drink) => {
                var reducedName = drink.name.toLowerCase();
                return reducedName.includes(this.state.searchText.toLowerCase(), 0);
            })
        }
        var spiritFilter = [];
        var typeFilter = [];

        if (this.state.rumToggle === true) {
            var rumFilter = [];
            rumFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "rum";
                return reducedType.includes(filterString, 0);
            })
            rumFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.ginToggle === true) {
            var ginFilter = [];
            ginFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "gin";
                return reducedType.includes(filterString, 0);
            })
            ginFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.scotchToggle === true) {
            var scotchFilter = [];
            scotchFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "scotch";
                return reducedType.includes(filterString, 0);
            })
            scotchFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.tequilaToggle === true) {
            var tequilaFilter = [];
            tequilaFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "tequila";
                return reducedType.includes(filterString, 0);
            })
            tequilaFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.vodkaToggle === true) {
            var vodkaFilter = [];
            vodkaFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "vodka";
                return reducedType.includes(filterString, 0);
            })
            vodkaFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.whiskeyToggle === true) {
            var whiskeyFilter = [];
            whiskeyFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "whiskey";
                return reducedType.includes(filterString, 0);
            })
            whiskeyFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }

        if (this.state.blendedToggle === true) {
            var blendedFilter = [];
            blendedFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "blended";
                return reducedType.includes(filterString, 0);
            })
            blendedFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.classicToggle === true) {
            var classicFilter = [];
            classicFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "classic";
                return reducedType.includes(filterString, 0);
            })
            classicFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.hotToggle === true) {
            var hotFilter = [];
            hotFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "hot";
                return reducedType === "hot cocktail";
            })
            hotFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.holidayToggle === true) {
            var holidayFilter = [];
            holidayFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "holiday";
                return reducedType.includes(filterString, 0);
            })
            holidayFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.noveltyToggle === true) {
            var noveltyFilter = [];
            noveltyFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "novelty";
                return reducedType.includes(filterString, 0);
            })
            noveltyFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.shotsToggle === true) {
            var shotsFilter = [];
            shotsFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "shots";
                return reducedType==="shot";
            })
            shotsFilter.forEach(object => {
                typeFilter.push(object);
            })
        }

        if (this.state.ginToggle === false && this.state.rumToggle === false && this.state.tequilaToggle === false &&
            this.state.scotchToggle === false && this.state.vodkaToggle === false && this.state.whiskeyToggle === false &&
            this.state.shotsToggle === false && this.state.noveltyToggle === false && this.state.holidayToggle === false &&
            this.state.hotToggle === false && this.state.classicToggle === false && this.state.blendedToggle === false) {
            return subset;
        }

        else if (
            (this.state.shotsToggle === false && this.state.noveltyToggle === false && this.state.holidayToggle === false &&
                this.state.hotToggle === false && this.state.classicToggle === false && this.state.blendedToggle === false) &&
            (this.state.ginToggle === true || this.state.rumToggle === true || this.state.tequilaToggle === true ||
                this.state.scotchToggle === true || this.state.vodkaToggle === true || this.state.whiskeyToggle === true)) {
            return spiritFilter;
        }

        else if ((this.state.ginToggle === false && this.state.rumToggle === false && this.state.tequilaToggle === false &&
            this.state.scotchToggle === false && this.state.vodkaToggle === false && this.state.whiskeyToggle === false) &&
            (this.state.shotsToggle === true || this.state.noveltyToggle === true || this.state.holidayToggle === true ||
                this.state.hotToggle === true || this.state.classicToggle === true || this.state.blendedToggle === true)) {
            return typeFilter;
        }


        else {

            if (typeFilter.length >= spiritFilter.length) {
                var doubleFilter = typeFilter.filter(typeObject => {
                    var match = false;
                    spiritFilter.forEach(spiritObject => {
                        if (typeObject.name.includes(spiritObject.name))
                            match = true;
                    });
                    return match;
                })
                return doubleFilter;
            }

            else {
                var doubleFilter = spiritFilter.filter(spiritObject => {
                    var match = false;
                    typeFilter.forEach(typeObject => {
                        if (spiritObject.name.includes(typeObject.name))
                            match = true;
                    });
                    return match;
                })
                return doubleFilter;
            }
        }
    }



    spiritOpen(e) {
        e.target.trigger = "Filter By Spirits -";
    }

    spiritClose(e) {
        e.target.trigger = "Filter By Spirits +";
    }

    rumState(e) {
        e.preventDefault();
        if (this.state.rumToggle === false) {
            this.setState({ rumToggle: true });
            this.setState({ rumClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ rumToggle: false });
            this.setState({ rumClassname: "button small" })
        }

    }

    ginState(e) {
        e.preventDefault();
        if (this.state.ginToggle === false) {
            this.setState({ ginToggle: true });
            this.setState({ ginClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ ginToggle: false });
            this.setState({ ginClassname: "button small" })
        }

    }

    scotchState(e) {
        e.preventDefault();
        if (this.state.scotchToggle === false) {
            this.setState({ scotchToggle: true });
            this.setState({ scotchClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ scotchToggle: false });
            this.setState({ scotchClassname: "button small" })
        }

    }

    tequilaState(e) {
        e.preventDefault();
        if (this.state.tequilaToggle === false) {
            this.setState({ tequilaToggle: true });
            this.setState({ tequilaClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ tequilaToggle: false });
            this.setState({ tequilaClassname: "button small" })
        }
    }

    vodkaState(e) {
        e.preventDefault();
        if (this.state.vodkaToggle === false) {
            this.setState({ vodkaToggle: true });
            this.setState({ vodkaClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ vodkaToggle: false });
            this.setState({ vodkaClassname: "button small" })
        }
    }

    whiskeyState(e) {
        e.preventDefault();
        if (this.state.whiskeyToggle === false) {
            this.setState({ whiskeyToggle: true });
            this.setState({ whiskeyClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ whiskeyToggle: false });
            this.setState({ whiskeyClassname: "button small" })
        }
    }

    blendedState(e) {
        e.preventDefault();
        if (this.state.blendedToggle === false) {
            this.setState({ blendedToggle: true });
            this.setState({ blendedClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ blendedToggle: false });
            this.setState({ blendedClassname: "button small" })
        }
    }

    classicState(e) {
        e.preventDefault();
        if (this.state.classicToggle === false) {
            this.setState({ classicToggle: true });
            this.setState({ classicClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ classicToggle: false });
            this.setState({ classicClassname: "button small" })
        }
    }

    hotState(e) {
        e.preventDefault();
        if (this.state.hotToggle === false) {
            this.setState({ hotToggle: true });
            this.setState({ hotClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ hotToggle: false });
            this.setState({ hotClassname: "button small" })
        }
    }

    holidayState(e) {
        e.preventDefault();
        if (this.state.holidayToggle === false) {
            this.setState({ holidayToggle: true });
            this.setState({ holidayClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ holidayToggle: false });
            this.setState({ holidayClassname: "button small" })
        }
    }

    noveltyState(e) {
        e.preventDefault();
        if (this.state.noveltyToggle === false) {
            this.setState({ noveltyToggle: true });
            this.setState({ noveltyClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ noveltyToggle: false });
            this.setState({ noveltyClassname: "button small" })
        }
    }


    shotsState(e) {
        e.preventDefault();
        if (this.state.shotsToggle === false) {
            this.setState({ shotsToggle: true });
            this.setState({ shotsClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ shotsToggle: false });
            this.setState({ shotsClassname: "button small" })
        }
    }

    searchResultsBox() {
        // if (this.state.searchText === "" &&
        //     this.state.ginToggle === false && this.state.rumToggle === false && this.state.tequilaToggle === false &&
        //     this.state.scotchToggle === false && this.state.vodkaToggle === false && this.state.whiskeyToggle === false &&
        //     this.state.shotsToggle === false && this.state.noveltyToggle === false && this.state.holidayToggle === false &&
        //     this.state.hotToggle === false && this.state.classicToggle === false && this.state.blendedToggle === false) {
        //     return (<div />);
        // }
        return (
            <div>
                <header className="major" id="home-header">
                    <h3>Drinks</h3>
                </header>
                {this.createTable()}
            </div>
        )
    }

    createTable() {
        var table = [];
        var drinkSet = this.filterDrinks();

        var ctr = 0;
        // Outer loop to create parent
            var children = [];
            //Inner loop to create children
            for (var j = 0; ctr < drinkSet.length; j++) {
                children.push(<Card
                    route={"/drinks/" + drinkSet[ctr].name.replace(/ /g, "_")}
                    image_src={"../../images/alcoholic_drinks/"+drinkSet[ctr].base_spirit +"_drinks/"+drinkSet[ctr].img}
                    title={drinkSet[ctr].name}
                    className="search-card"
                />);

                ctr++;
            }
            //Create the parent and add the children
            table.push(<section>{children}</section>);
        return table
    }

    render() {

        return (
            <div>
                <div className="wrapper style1">
                    <div className="container search-box">
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
                                        <Collapsible trigger="Select By Spirits +" triggerWhenOpen={"Select By Spirits -"}>

                                            <button className={this.state.rumClassname} onClick={this.rumState}>Rum</button>

                                            <button className={this.state.ginClassname} onClick={this.ginState}>Gin</button>

                                            <button className={this.state.scotchClassname} onClick={this.scotchState}>Scotch</button>

                                            <button className={this.state.tequilaClassname} onClick={this.tequilaState}>Tequila</button>

                                            <button className={this.state.vodkaClassname} onClick={this.vodkaState}>Vodka</button>

                                            <button className={this.state.whiskeyClassname} onClick={this.whiskeyState}>Whiskey</button>
                                        </Collapsible>
                                    </section>
                                    <section className="6u">
                                        <Collapsible trigger="Select By Type +" triggerWhenOpen={"Select By Type -"}>

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
                            <span className="byline">Try some of Drinksly's most popular searches</span>
                        </header>
                    </div>
                    <div id="extra">
                        <div className="container">
    

                                <Card route="/drinks/Manhattan" image_src="images/alcoholic_drinks/whiskey_drinks/manhattan.jpg" title="Manhattan" />
                                <Card route="/drinks/Mojito" image_src="images/alcoholic_drinks/rum_drinks/mojito.jpg" title="Mojito" />
                                <Card route="/drinks/Godfather" image_src="images/alcoholic_drinks/scotch_drinks/godfather.jpg" title="Godfather" />

                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;