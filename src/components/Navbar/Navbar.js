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
                    <h1><a href="/">DrinkSama</a></h1>
                </div>
                <nav id="nav">
                    <ul>
                        <li class="active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/spirits">Drink by Spirit</NavLink></li>
                        <li><NavLink className="nav-link" to="/type">Drink by Type</NavLink></li> 
                        {/* <li><NavLink className="nav-link" to="/non-alcoholic">Non-Alcoholic Drinks</NavLink></li> */}
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Navbar;