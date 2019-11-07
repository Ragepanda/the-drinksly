import React from "react";
import './Drink.css';
import { Helmet } from "react-helmet";
import Drinks from "../Drink/drinkobj.json";
import CRInfo from "../Drink/copyright.json"
// import './Drink.css';
class Drink extends React.Component {

  render() {
    const drink = Drinks;
    const crInfo = CRInfo;
    var info;
    //get drink info
    for (var i = 0; i < drink.length; i++) {
      if (this.props.match.params.drink === drink[i].name) {
        info = drink[i];
        break;
      }
    }
    //get cr info
    var cr;
    for (var i = 0; i < crInfo.length; i++) {
      if (this.props.match.params.drink === crInfo[i].name) {
        cr = crInfo[i];
        break;
      }
    }

    const recipe = info.recipe.map((item) =>
      <li>{item}</li>
    );

    const steps = info.steps.map((item)=>
    <li>{item}</li>
  );

    //console.log("images/alcoholic_drinks/"+info.base_spirit+"_drinks/"+info.img);
    console.log(cr.license);
    return (
      <div>
        <Helmet>
          <title>{"Drink Recipe" + " | " + info.name + " Drink Recipe"}</title>
          <meta name="description" content={"This Drink Recipe page is perfect to understand and make the " + info.name + " drink recipe. Please enjoy using and drinking our " + info.name + " drink recipe."} />
          <meta name="keywords" content={"drink, recipe, recipes, cocktail, cocktails, vodka, whiskey, gin, rum, tequila, scotch, non-alcoholic, mixed, spirit, spirits, " + info.name} />
          <meta name="author" content="thedrinksly.com" />
          <meta http-equiv="Content-Language" content="en-US" />
          <meta name="rating" content="adults" />
          <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
        </Helmet>
        <div className="wrapper style1">
          <div className="container" id="recipe-box">
            <section>
              <header className="major center">
                <h2>{info.name}</h2>
              </header>

              <div className="row">
                <div className="major 4u">
                  <img className="drink-img" src={"../../images/alcoholic_drinks/" + info.base_spirit + "_drinks/" + info.img} alt={info.name}/><br />
                  <div className="attribution-box">
                    <p><a className="attribution" >{cr.author}</a></p>
                    <p><a className="attribution" href={cr.license}>License</a></p>
                  </div>
                </div>
                <div className="major 8u" id="drink-text">
                  <div className="row">
                    <div className="12u">
                      <header className="major">
                        <h3>{"What is the " + info.name + " Cocktail?"}</h3>
                      </header>
                      <p>{info.description}</p>
                    </div>
                  </div>
                  <div className="row" id="list-rows">
                    <div className="6u" id="ingredients-box">
                      <header className="major">
                        <h3>{info.name} Ingredients</h3>
                      </header>
                      <ul>
                        {recipe}
                      </ul>
                    </div>

                    <div className= "6u" id="steps-box">
                      <header className="major">
                        <h3>{info.name} Recipe</h3>
                      </header>
                      <ul>
                        {steps}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="row center">
                <div className="major 12u">
                  <header className="major center">
                    <h3>{info.name} Ingredients</h3>
                  </header>
                  <br />
                  <ul>
                    {recipe}
                  </ul>
                </div>
              </div> */}


            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default Drink;