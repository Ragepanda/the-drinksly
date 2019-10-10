import React from "react";

// import './Subcategory.css';
class Subcategory extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props
        console.log(props);      // ✅ {}
        console.log(this.props); // ✅ {}
      }

    render() {
        return (
           <div>
               <p> This is the subcategory page Category:{this.props.match.params.category} Sub: {this.props.match.params.subcategory} </p>
           </div>
        );
    }
};

export default Subcategory;