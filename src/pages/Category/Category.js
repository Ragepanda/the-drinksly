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
        render() {
            return (
                <div>
                    <p> This is the Category page. Category is: {this.props.match.params.category}</p>
                </div>
            );
        }
    
};

export default Category;