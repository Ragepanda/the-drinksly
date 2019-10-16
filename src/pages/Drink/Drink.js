import React from "react";

import './Drink.css'

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
            <div className="wrapper style1">
              <div className="contiainer center">
                <p> {this.props.match.params.drink} </p>
                <header className="major 12u center" id="home-header">
                  <h3>{this.props.match.params.drink}</h3>
                </header>
              </div>
              <div className = "row center">
              <div className="major 6u" id="recipeBox">
                <img src={"images/alcoholic_drinks/"+fillData[ctr]+"_"+descrip[ctr]+"/"+fillData[ctr]+"-"+descrip[ctr]+".jpg"}/>
              </div>
              <div className="major 6u" id="recipeBox">
                <br/>
                <p>Ingredients</p>
                <br/>
                <ul>
                  <li>1/2 play the game</li>
                  <li>3/4 add some razzle dazzle</li>
                  <li>1/2 get some vodka </li>
                  <li>3/4 peel an apple</li>
                </ul>
                <br/>
                <p>Directions</p>
                <br/>
                <p className="padded">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br/>
                </div>
                </div>
            </div>
          </div>
        );
    }
};

export default Drink;