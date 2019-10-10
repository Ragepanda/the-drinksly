import React from "react";
import { NavLink } from 'react-router-dom'

// import './NavBar.css';
class Navbar extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props
        console.log(props);      // ✅ {}
        console.log(this.props); // ✅ {}
      }

    render() {
        return (
            <div id="header" class="skel-panels-fixed">
                <div id="logo">
                    <h1><a href="index.html">DrinkSama</a></h1>
                </div>
                <nav id="nav">
                    <ul>
                        <li class="active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/Non-Alcoholic">Non-Alcoholic Drinks</NavLink></li>
                        <li><NavLink className="nav-link" to="/Drinks">Drink Recipes</NavLink></li>
                        <li><NavLink className="nav-link" to="/Search">Search</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Navbar;