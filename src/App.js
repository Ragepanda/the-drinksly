import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as
    Router,
  Route,
  Switch
} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Drink from "./pages/Drink/Drink";
import Subcategory from "./pages/Subcategory/Subcategory";


class App extends React.Component {
  constructor(props) {
    super(props); // ✅ We passed props
    console.log(props);      // ✅ {}
    console.log(this.props); // ✅ {}
  }
  render() {
    return (
      <Router>
        <div className="App wrapper style1">

          <Navbar />

          <Switch>
            <Route exact path="/" component={Home}/>

            <Route exact path="/:category" component={Category}/>
             
            <Route exact path="/drinks/:drink" component={Drink}/>           

            <Route exact path="/:category/:subcategory" component={Subcategory}/>    
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
