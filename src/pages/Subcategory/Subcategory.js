import React from "react";
import Card from "../../components/Cards/Card";
import Collapsible from "react-collapsible";
import "./Subcategory.css"

// import './Subcategory.css';
class Subcategory extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props
        console.log(props);      // ✅ {}
        console.log(this.props.match.params.category); // ✅ {}

        this.printButtonValue = this.printButtonValue.bind(this);

        this.state = {
            typesPicked: this.props.match.params.category === "spirits" ? false : true,
            spiritsPicked: this.props.match.params.category === "spirits" ? true : false,

            ginSelected: false,
            rumSelected: false,
            scotchSelect: false,
            tequilaSelected: false,
            vodkaSelected: false,
            whiskeySelected: false,

            blendedSelected: false,
            classicSelected: false,
            hotSelected: false,
            holidaySelected: false,
            noveltySelected: false,
            shotsSelected: false,
        }
    }


    printButtonValue(e){
        console.log("Button Value: "+e.target.value);
    }

    createTable = () => {

        const drinks = ["Gin", "Rum", "Scotch", "Tequila", "Vodka", "Whiskey"];
        const types = ["Blended", "Classic", "Hot", "Holiday", "Novelty", "Shots"];

        const drinkRoute = ["Drinks", "Drinks", "Drinks", "Drinks", "Drinks", "Drinks"];
        const typeRoute = ["Cocktails", "Cocktails", "Cocktails", "Cocktails", "Cocktails", ""];

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
        console.log("Is Spirits:" + this.state.spiritsPicked);
        console.log("Is Types: " + this.state.typesPicked);
        let ctr = 0;
        // Outer loop to create parent
        for (let i = 0; i < fillData.length; i++) {

            table.push(<button className="button small 2u" value={fillData[i]} onClick={this.printButtonValue}>{fillData[i] + " " + descrip[i]}</button>);
        }
        return <Collapsible
            trigger={"Filter By " + (this.state.spiritsPicked === true ? "Type" : "Spirit") + " +"}
            triggerWhenOpen={"Filter By " + (this.state.spiritsPicked === true ? "Type" : "Spirit") + " -"}>
            {table}
        </Collapsible>
    }



    createDrinkList() {

        let table = []

        let ctr = 0;
        const drinkSet =
            [
                { name: "Manhattan", base_spirit: "bourbon", drink_type: "classic cocktail", img: "manhattan.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { name: "Mojito", base_spirit: "rum", drink_type: "classic cocktail", img: "mojito.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 2 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { name: "Gin Fizz", base_spirit: "gin", drink_type: "classic cocktail", img: "gin-fizz.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 3 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { name: "Pina Colada", base_spirit: "rum", drink_type: "blended cocktail", img: "pina-colada.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 4 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { name: "Hot Toddy", base_spirit: "bourbon", drink_type: "hot cocktail", img: "hot-toddy.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 5 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { name: "B-52", base_spirit: "coffee liquor", drink_type: "shots", img: "b-52.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 6 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { name: "Eggnog", base_spirit: "bourbon", drink_type: "holiday cocktail", img: "eggnog.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { name: "Jello Shots", base_spirit: "vodka", drink_type: "novelty cocktail", img: "jelloshot.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { name: "Margarita", base_spirit: "tequila", drink_type: "blended cocktail", img: "margarita.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { name: "Scotch Sour", base_spirit: "scotch", drink_type: "classic cocktail", img: "scotchsour.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ];

        for (let i = 0; i < drinkSet.length / 3; i++) {
            let children = []
            //Inner loop to create children
            console.log(drinkSet[0].name);
            console.log(ctr);
            for (let j = 0; j < 3; j++) {
                if (ctr < drinkSet.length) {
                    children.push(<Card
                        route={"/drinks/" + drinkSet[ctr].name}
                        image_src={drinkSet[ctr].img}
                        title={drinkSet[ctr].name}
                    />);
                }
                ctr++;
            }     //Create the parent and add the children
            table.push(<div className="row no-collapse-1">{children}</div>)
        }
        return table;
    }

    render() {
        return (
            <div className="wrapper style1">
                <div className="container 4u" id="title-box">
                    <section>
                        <header className="major">
                            <h2>{this.props.match.params.subcategory}</h2>
                            <h3>Narrow your selection below</h3>
                        </header>
                    </section>
                </div>
                <div id="extra">
                    <div className="container">
                        <div className="row no-collapse-1">
                            {this.createTable()}
                        </div>
                    </div>

                    <div className="container 4u" id="title-box">
                        <section>
                            <header className="major">
                                <h2>{this.props.match.params.category + " selections."}</h2>
                            </header>
                        </section>
                    </div>

                    <div className="container">
                        {this.createDrinkList()}
                    </div>
                </div>
            </div>

        );
    }
};

export default Subcategory;