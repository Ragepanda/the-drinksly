import React from "react";
import Card from "../../components/Cards/Card.js";
import { Helmet } from "react-helmet";

class Category extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(this.props);
    }

        componentDidMount(){
            console.log(this.props);
        }


    createHelmet(){

        let title = this.props.match.params.category == "spirits" ? "Spirits | Cocktail Recipes by Spirits" : "Cocktail Type | Cocktail Recipes by Cocktail Type";
        let descrip = this.props.match.params.category == "spirits" ? "Here you can select the type of cocktail recipe you want based on the spirit you are interested in." : "Here you can select the type of cocktail recipe you want based on the type of cocktail you are interested in.";

        let helmet = <Helmet>
            <title>{title}</title>
            <meta name="description" content={descrip}/>
            <meta name="keywords" content={"drink, recipe, recipes, cocktail, cocktails, vodka, whiskey, gin, rum, tequila, scotch, non-alcoholic, mixed"} />
            <meta name="author" content="thedrinksly.com"/>
            <meta http-equiv="Content-Language" content="en-US"/>
            <meta name="rating" content="adults"/>
            <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
            </Helmet>;

        return helmet;
    }

    createTable = () => {

        const drinks = ["Gin", "Rum", "Scotch", "Tequila", "Vodka", "Whiskey"]
        const types  = ["Blended", "Classic","Hot", "Holiday", "Novelty", "Shots"]

        const drinkRoute = ["Drinks", "Drinks", "Drinks", "Drinks" ,"Drinks", "Drinks"]
        const typeRoute = ["Cocktails", "Cocktails" ,"Cocktails", "Cocktails", "Cocktails", ""]

        let descrip = this.props.match.params.category == "spirits" ? drinkRoute : typeRoute;
        let fillData = this.props.match.params.category == "spirits" ? drinks : types;


        let table = []

        let ctr = 0;
        // Outer loop to create parent
        for (let i = 0; i < fillData.length/3; i++) {
            let children = []
        //Inner loop to create children
        for (let j = 0; j < 3; j++) {
            children.push(<Card
                    route = {"/"+this.props.match.params.category+"/"+fillData[ctr]}
                    image_src = {"images/alcoholic_drinks/"+fillData[ctr]+"_"+descrip[ctr]+"/"+fillData[ctr]+"-"+descrip[ctr]+".jpg"}
                    title = {fillData[ctr] + " " + descrip[ctr]}
                />)
            
            ctr++;
        }
            //Create the parent and add the children
            table.push(<div className="row no-collapse-1">{children}</div>)
        }
        return table;
    }




   render() {
        return (
            <div className="wrapper style1">
            {this.createHelmet()}
                    <div className="container 4u" id="title-box">
                        <section>
                            <header className="major">
                                <h2>{this.props.match.params.category}</h2>
                            </header>
                        </section>
                    </div>
                <div id="extra">
                    <div className="container">
                        {this.createTable()}
                    </div>
                </div>
            </div>
                    
        );
    }
};

export default Category;