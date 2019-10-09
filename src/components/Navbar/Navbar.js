import React from "react";
import { NavLink } from 'react-router-dom'

// import './NavBar.css';
class Navbar extends React.Component {

    render() {
        return (
            <div id="header" class="skel-panels-fixed">
                <div id="logo">
                    <h1><a href="index.html">DrinkSama</a></h1>
                </div>
                <nav id="nav">
                    <ul>
                        <li class="active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/">Non-Alcoholic Drinks</NavLink></li>
                        <li><NavLink className="nav-link" to="/">Drink Recipes</NavLink></li>
                        <li><NavLink className="nav-link" to="/">Search</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Navbar;