import React from "react";
import Card from "../../components/Cards/Card.js";
import { Helmet } from "react-helmet";
import './Category.css';

class Category extends React.Component {

    createHelmet(){

        let metatitle = this.props.match.params.category === "spirits" ? "Spirits | Drink Recipes by Spirits" : "Drink Type | Drink Recipes by Drink Type";
        let descrip = this.props.match.params.category === "spirits" ? "Here you can select the type of drink recipe you want based on the spirit you are interested in." : "Here you can select the type of drink recipe you want based on the type of drink you are interested in.";

        let helmet = <Helmet>
            <title>{metatitle}</title>
            <meta name="description" content={descrip}/>
            <meta name="keywords" content={"drink, drinks, recipe, recipes, cocktail, cocktails, vodka, whiskey, gin, rum, tequila, scotch, mixed, spirit, spirits"} />
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

        let descrip = this.props.match.params.category === "spirits" ? drinkRoute : typeRoute;
        let fillData = this.props.match.params.category === "spirits" ? drinks : types;


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
            <div>
            {this.createHelmet()}
            <div className="wrapper style1">
                <div className="container" id="search-box">
                    <section>
                            <header className="major">
                                <h2>{this.props.match.params.category}</h2>
                            </header>
                        </section>
                    </div>
                <div id="extra">
                <br/>
                    <div className="container">
                        {this.createTable()}
                    </div>
                </div>
            </div>
            </div>
                    
        );
    }
};

export default Category;