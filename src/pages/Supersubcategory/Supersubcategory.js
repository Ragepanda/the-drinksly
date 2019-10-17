import React from "react";

// import './Subcategory.css';
class Supersubcategory extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props
        console.log(props);      // ✅ {}
        console.log(this.props); // ✅ {}
      }


   render() {
        return (
            <div className="wrapper style1">
            <div className="container 4u" id="title-box">
                <section>
                    <header className="major">
                        <h2>{this.props.match.params.subcategory}</h2>
                    </header>
                </section>
            </div>
                <div id="extra">
                    <div className="container">
                       <p> {"Category: "+ this.props.match.params.category+ " Subcategory: "+ this.props.match.params.subcategory + " Super Subcategory: "+this.props.match.params.supersubcategory} </p>
                    </div>
                </div>
            </div>
                    
        );
    }
};

export default Supersubcategory;