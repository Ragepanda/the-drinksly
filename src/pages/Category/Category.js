import React from "react";

class Category extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(this.props);
    }

        componentDidMount(){
            console.log(this.props);
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
        for (let i = 0; i < 2; i++) {
            let children = []
        //Inner loop to create children
        for (let j = 0; j < 3; j++) {
            children.push(<div className="4u"><a href={"/"+this.props.match.params.category+"/"+fillData[ctr]} className="image featured"><img src={"images/alcoholic_drinks/"+fillData[ctr]+"_"+descrip[ctr]+"/"+fillData[ctr]+"-"+descrip[ctr]+".jpg"} alt={fillData[ctr]+" " +descrip[ctr]} /></a><div className="box"><p>{fillData[ctr]} {descrip[ctr]}</p></div></div>)
            ctr++;
        }
            //Create the parent and add the children
            table.push(<div className="row no-collapse-1">{children}</div>)
        }
        return table
    }


   render() {
        return (
            <div className="wrapper style1">
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