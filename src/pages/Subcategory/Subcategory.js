import React from "react";
import Card from "../../components/Cards/Card";
import Collapsible from "react-collapsible";
import "./Subcategory.css";
import { Helmet } from "react-helmet";
import Drinks from "../Drink/drinkobj.json";
import './Subcategory.css';
class Subcategory extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props


        this.printButtonValue = this.printButtonValue.bind(this);
        this.filterDrinks = this.filterDrinks.bind(this);

        this.state = {
            typesPicked: this.props.match.params.category === "spirits" ? false : true,
            spiritsPicked: this.props.match.params.category === "spirits" ? true : false,

            ginSelected: false,
            rumSelected: false,
            scotchSelected: false,
            tequilaSelected: false,
            vodkaSelected: false,
            whiskeySelected: false,

            blendedSelected: false,
            classicSelected: false,
            hotSelected: false,
            holidaySelected: false,
            noveltySelected: false,
            shotsSelected: false,

            scotchClassname: "button small 2u",
            tequilaClassname: "button small 2u",
            vodkaClassname: "button small 2u",
            whiskeyClassname: "button small 2u",
            rumClassname: "button small 2u",
            ginClassname: "button small 2u",
            blendedClassname: "button small 2u",
            classicClassname: "button small 2u",
            hotClassname: "button small 2u",
            holidayClassname: "button small 2u",
            noveltyClassname: "button small 2u",
            shotsClassname: "button small 2u"
        }
    }


    printButtonValue(e) {
        switch (e.target.value) {
            default: 
                break;
            case "Gin":
                if (this.state.ginSelected == false) {
                    this.setState({ ginSelected: true });
                    this.setState({ ginClassname: "button small 2u selectedFilter" });
                }
                else {
                    this.setState({ ginSelected: false });
                    this.setState({ ginClassname: "button small 2u" })
                }

                break;

            case "Rum":

                if (this.state.rumSelected === false) {
                    this.setState({ rumSelected: true });
                    this.setState({ rumClassname: "button small 2u selectedFilter" });
                } else {
                    this.setState({ rumSelected: false });
                    this.setState({ rumClassname: "button small 2u" })
                }
                break;

            case "Scotch":

                if (this.state.scotchSelected === false) {
                    this.setState({ scotchSelected: true });
                    this.setState({ scotchClassname: "button small 2u selectedFilter" });
                } else {
                    this.setState({ scotchSelected: false });
                    this.setState({ scotchClassname: "button small 2u" })
                }
                break;

            case "Tequila":

                if (this.state.tequilaSelected === false) {
                    this.setState({ tequilaSelected: true });
                    this.setState({ tequilaClassname: "button small 2u selectedFilter" });
                } else {
                    this.setState({ tequilaSelected: false });
                    this.setState({ tequilaClassname: "button small 2u" })
                }
                break;

            case "Vodka":

                if (this.state.vodkaSelected === false) {
                    this.setState({ vodkaSelected: true });
                    this.setState({ vodkaClassname: "button small 2u selectedFilter" });
                } else {
                    this.setState({ vodkaSelected: true });
                    this.setState({ vodkaClassname: "button small 2u" })
                }
                break;

            case "Whiskey":

                if (this.state.whiskeySelected === false) {
                    this.setState({ whiskeySelected: true });
                    this.setState({ whiskeyClassname: "button small 2u selectedFilter" });
                } else {
                    this.setState({ whiskeySelected: true });
                    this.setState({ whiskeyClassname: "button small 2u" })
                }
                break;

            case "Blended":

                if (this.state.blendedSelected === false) {
                    this.setState({ blendedSelected: true });
                    this.setState({ blendedClassname: "button small 2u selectedFilter" });
                } else {
                    this.setState({ blendedSelected: false });
                    this.setState({ blendedClassname: "button small 2u" })
                }
                break;

            case "Classic":

                if (this.state.classicSelected === false) {
                    this.setState({ classicSelected: true });
                    this.setState({ classicClassname: "button small 2u selectedFilter" });
                }
                else {
                    this.setState({ classicSelected: false });
                    this.setState({ classicClassname: "button small 2u" })
                }
                break;

            case "Hot":

                if (this.state.hotSelected === false) {
                    this.setState({ hotSelected: true });
                    this.setState({ hotClassname: "button small 2u selectedFilter" });
                }
                else {
                    this.setState({ hotSelected: false });
                    this.setState({ hotClassname: "button small 2u" })
                }
                break;

            case "Holiday":

                if (this.state.holidaySelected === false) {
                    this.setState({ holidaySelected: true });
                    this.setState({ holidayClassname: "button small 2u selectedFilter" });
                }
                else {
                    this.setState({ holidaySelected: false });
                    this.setState({ holidayClassname: "button small 2u" });
                }
                break;

            case "Novelty":

                if (this.state.noveltySelected === false) {
                    this.setState({ noveltySelected: true });
                    this.setState({ noveltyClassname: "button small 2u selectedFilter" });
                }
                else {
                    this.setState({ noveltySelected: false });
                    this.setState({ noveltyClassname: "button small 2u" });
                }
                break;
            case "Shots":

                if (this.state.shotsSelected === false) {
                    this.setState({ shotsSelected: true });
                    this.setState({ shotsClassname: "button small 2u selectedFilter" });
                }
                else {
                    this.setState({ shotsSelected: false });
                    this.setState({ shotsClassname: "button small 2u" });
                }
                break;

        }
    }

    createHelmet(){

        let metatitle = this.props.match.params.subcategory + " Drinks | " + this.props.match.params.subcategory + " Drink Recipes";
        let descrip = "This list of " + this.props.match.params.subcategory + " drinks is a list of all " + this.props.match.params.subcategory + " drink recipes we have. Please select the " + this.props.match.params.subcategory+ " drink recipe you are interested in making.";
        let metacontent = this.props.match.params.category == "spirits" ? "drink, drinks, recipe, recipes, cocktail, cocktails, mixed, spirit, spirits, " + this.props.match.params.subcategory : "drink, drinks, recipe, recipes, cocktail, cocktails, vodka, whiskey, gin, rum, tequila, scotch, mixed, spirit, spirits, " + this.props.match.params.subcategory;

        let helmet = <Helmet>
            <title>{metatitle}</title>
            <meta name="description" content={descrip}/>
            <meta name="keywords" content={metacontent} />
            <meta name="author" content="thedrinksly.com"/>
            <meta http-equiv="Content-Language" content="en-US"/>
            <meta name="rating" content="adults"/>
            <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
            </Helmet>;

        return helmet;
    }

    createTable = () => {
        const drinks = ["gin", "rum", "scotch", "tequila", "vodka", "whiskey"];
        const types = ["blended", "classic", "hot", "holiday", "novelty", "shots"];

        const drinkRoute = ["drinks", "drinks", "drinks", "drinks", "drinks", "drinks"];
        const typeRoute = ["cocktails", "cocktails", "cocktails", "cocktails", "cocktails", ""];

        var descrip;
        var fillData;

        if (this.state.spiritsPicked === true) {
            descrip = typeRoute;
            fillData = types;
        }

        else if (this.state.typesPicked === true) {
            descrip = drinkRoute;
            fillData = drinks;
        }

        let table = [];
        let ctr = 0;
        // Outer loop to create parent
        for (let i = 0; i < fillData.length; i++) {

            table.push(<button className="button small 2u" value={fillData[i]} onClick={this.printButtonValue}>{fillData[i] + " " + descrip[i]}</button>);
        }

        if (this.state.spiritsPicked) {
            return (<Collapsible
                trigger={"Filter By " + (this.state.spiritsPicked === true ? "Type" : "Spirit") + " +"}
                triggerWhenOpen={"Filter By " + (this.state.spiritsPicked === true ? "Type" : "Spirit") + " -"}>
                <button className={this.state.blendedClassname} value="Blended" onClick={this.printButtonValue}>Blended</button>

                <button className={this.state.classicClassname} value="Classic" onClick={this.printButtonValue}>Classic</button>

                <button className={this.state.hotClassname} value="Hot" onClick={this.printButtonValue}>Hot</button>

                <button className={this.state.holidayClassname} value="Holiday" onClick={this.printButtonValue}>Holiday</button>

                <button className={this.state.noveltyClassname} value="Novelty" onClick={this.printButtonValue}>Novelty</button>

                <button className={this.state.shotsClassname} value="Shots" onClick={this.printButtonValue}>Shots</button>
            </Collapsible>
            );
        }

        else if (this.state.typesPicked) {
            return (
                <Collapsible
                    trigger={"Filter By " + (this.state.spiritsPicked === true ? "Type" : "Spirit") + " +"}
                    triggerWhenOpen={"Filter By " + (this.state.spiritsPicked === true ? "Type" : "Spirit") + " -"}>
                    <button className={this.state.ginClassname} value="Gin" onClick={this.printButtonValue}>Gin</button>

                    <button className={this.state.rumClassname} value="Rum" onClick={this.printButtonValue}>Rum</button>

                    <button className={this.state.scotchClassname} value="Scotch" onClick={this.printButtonValue}>Scotch</button>

                    <button className={this.state.tequilaClassname} value="Tequila" onClick={this.printButtonValue}>Tequila</button>

                    <button className={this.state.whiskeyClassname} value="Whiskey" onClick={this.printButtonValue}>Whiskey</button>

                    <button className={this.state.vodkaClassname} value="Vodka" onClick={this.printButtonValue}>Vodka</button>
                </Collapsible>
            );
        }




    }

    filterDrinks() {
        const drinkSet = Drinks;


        if (this.state.spiritsPicked == true) {
            var filteredSet = [];
            var finalFilter = [];

            filteredSet = drinkSet.filter(drink => {
                var reducedDrink = drink.base_spirit.toLowerCase();
                var reducedSub = this.props.match.params.subcategory.toLowerCase();
                return reducedDrink.includes(reducedSub, 0);
            })

            if (this.state.blendedSelected === true) {
                var blendedFilter = [];
                blendedFilter = filteredSet.filter(drink => {
                    var reducedType = drink.drink_type.toLowerCase().split()[0];
                    var filterString = "blended";
                    return reducedType.includes(filterString, 0);
                })
                blendedFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.classicSelected === true) {
                var classicFilter = [];
                classicFilter = filteredSet.filter(drink => {
                    var reducedType = drink.drink_type.toLowerCase().split()[0];
                    var filterString = "classic";
                    return reducedType.includes(filterString, 0);
                })
                classicFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.hotSelected === true) {
                var hotFilter = [];
                hotFilter = filteredSet.filter(drink => {
                    var reducedType = drink.drink_type.toLowerCase().split()[0];
                    var filterString = "hot";
                    return reducedType.includes(filterString, 0);
                })
                hotFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.holidaySelected === true) {
                var holidayFilter = [];
                holidayFilter = filteredSet.filter(drink => {
                    var reducedType = drink.drink_type.toLowerCase().split()[0];
                    var filterString = "holiday";
                    return reducedType.includes(filterString, 0);
                })
                holidayFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.noveltySelected === true) {
                var noveltyFilter = [];
                noveltyFilter = filteredSet.filter(drink => {
                    var reducedType = drink.drink_type.toLowerCase().split()[0];
                    var filterString = "novelty";
                    return reducedType.includes(filterString, 0);
                })
                noveltyFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.shotsSelected === true) {
                var shotsFilter = [];
                shotsFilter = filteredSet.filter(drink => {
                    var reducedType = drink.drink_type.toLowerCase().split()[0];
                    var filterString = "shots";
                    return reducedType.includes(filterString, 0);
                })
                shotsFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }

            if (this.state.shotsSelected === false && this.state.noveltySelected === false && this.state.holidaySelected === false &&
                this.state.hotSelected === false && this.state.classicSelected === false && this.state.blendedSelected === false) {
                return filteredSet;
            }

            else {
                return finalFilter;
            }

        }

        else if (this.state.typesPicked == true) {
            var filteredSet = [];
            var finalFilter = [];
            var filteredSet = drinkSet.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var reducedSub = this.props.match.params.subcategory.toLowerCase();
                return reducedType.includes(reducedSub, 0)
            })

            if (this.state.rumSelected === true) {
                var rumFilter = [];
                rumFilter = filteredSet.filter(drink => {
                    var reducedType = drink.base_spirit.toLowerCase().split()[0];
                    var filterString = "rum";
                    return reducedType.includes(filterString, 0);
                })
                rumFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.ginSelected === true) {
                var ginFilter = [];
                ginFilter = filteredSet.filter(drink => {
                    var reducedType = drink.base_spirit.toLowerCase().split()[0];
                    var filterString = "gin";
                    return reducedType.includes(filterString, 0);
                })
                ginFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.scotchSelected === true) {
                var scotchFilter = [];
                scotchFilter = filteredSet.filter(drink => {
                    var reducedType = drink.base_spirit.toLowerCase().split()[0];
                    var filterString = "scotch";
                    return reducedType.includes(filterString, 0);
                })
                scotchFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.tequilaSelected === true) {
                var tequilaFilter = [];
                tequilaFilter = filteredSet.filter(drink => {
                    var reducedType = drink.base_spirit.toLowerCase().split()[0];
                    var filterString = "tequila";
                    return reducedType.includes(filterString, 0);
                })
                tequilaFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.vodkaSelected === true) {
                var vodkaFilter = [];
                vodkaFilter = filteredSet.filter(drink => {
                    var reducedType = drink.base_spirit.toLowerCase().split()[0];
                    var filterString = "vodka";
                    return reducedType.includes(filterString, 0);
                })
                vodkaFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }


            if (this.state.whiskeySelected === true) {
                var whiskeyFilter = [];
                whiskeyFilter = filteredSet.filter(drink => {
                    var reducedType = drink.base_spirit.toLowerCase().split()[0];
                    var filterString = "whiskey";
                    return reducedType.includes(filterString, 0);
                })
                whiskeyFilter.forEach(object =>{
                    finalFilter.push(object);
                })
            }

            if (this.state.ginSelected === false && this.state.rumSelected === false && this.state.tequilaSelected === false &&
                this.state.scotchSelected === false && this.state.vodkaSelected === false && this.state.blendedSelected === false) {
                return filteredSet;
            }

            else {
                return finalFilter;
            }
        }
        return filteredSet;
    }

    createDrinkList() {

        let table = []

        let ctr = 0;
        const drinkSet = this.filterDrinks();

            let children = [];
            //Inner loop to create children
            for (let j = 0; j < drinkSet.length; j++) {
                if (ctr < drinkSet.length) {
                    children.push(<Card
                        route={"/drinks/" + drinkSet[ctr].name.replace(/ /g, "_")}
                        image_src={"../../images/alcoholic_drinks/"+drinkSet[ctr].base_spirit +"_drinks/"+drinkSet[ctr].img}
                        title={drinkSet[ctr].name}
                    />);
                }
                ctr++;
            }     //Create the parent and add the children
            table.push(<section>{children}</section>)
        return table;
    }

    render() {
        return (
            <div>
            {this.createHelmet()}
            <div className="wrapper style1">
                <div className="container subcategory-box">
                    <section>
                        <header className="major">
                            <h2>{this.props.match.params.subcategory} Drinks</h2>
                    <div className="container">
                        <div className="row no-collapse-1">
                            {this.createTable()}
                        </div>
                    </div>
                        </header>
                    </section>
                </div>
                <div id="extra" className="centered">

                    <br/>

                    <div className="container">
                        {this.createDrinkList()}
                    </div>
                </div>
            </div>
            </div>

        );
    }
};

export default Subcategory;