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


function App() {
  return (
    <Router>
      <div className="App wrapper style1">

        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/:category">
            <Category />
          </Route>

          <Route exact path="/drinks/:drink">
            <Drink />
          </Route>

          <Route exact path="/:category/:subcategory">
            <Subcategory />
          </Route>




        </Switch>
      </div>
    </Router>
  );
}

export default App;
