import React from "react";

// import './Drink.css';
class Drink extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props
        console.log(props);      // ✅ {}
        console.log(this.props); // ✅ {}
      }
      
    render() {
        return (
           <div>
               <p> This is the Drink page. Your chosen drink is {this.props.match.params.drink} </p>
           </div>
        );
    }
};

export default Drink;