import React from "react";

// import './Subcategory.css';
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

        const drinks = ["gin", "rum", "vodka", "whiskey", "tequila", "scotch"]

        let table = []

        let ctr = 0;
        // Outer loop to create parent
        for (let i = 0; i < 2; i++) {
            let children = []
        //Inner loop to create children
        for (let j = 0; j < 3; j++) {
            children.push(<div className="4u"><a href={"/spirits/"+drinks[ctr]} className="image featured"><img src={"images/alcoholic_drinks/"+drinks[ctr]+"_drinks/"+drinks[ctr]+"-drinks.jpg"} alt={drinks[ctr]+" drinks"} /></a><div className="box"><p>{drinks[ctr]} drinks</p></div></div>)
            ctr++;
        }
            //Create the parent and add the children
            table.push(<div className="row no-collapse-1">{children}</div>)
        }
        return table
    }


   render() {
        return (
            <div id="extra">
                <div className="container">
                return {this.createTable()}
                </div>
            </div>
                    
        );
    }
};

export default Category;