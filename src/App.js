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


function App() {
  return (
    <Router>
      <div className="App wrapper style1">

        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
