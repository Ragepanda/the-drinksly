import React from "react";

import './Drink.css'

// import './Drink.css';
class Drink extends React.Component {
  constructor(props) {
    super(props); // ✅ We passed props
    console.log(props);      // ✅ {}
    console.log(this.props); // ✅ {}
  }

  procImage() {



  }


  render() {
    const drink =
      [
        { name: "Manhattan", base_spirit: "whiskey", drink_type: "classic cocktail", img: "drew-beamer-manhattan-55.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: ["Ingredient 1", "Ingredient 2", "Sin", "Lust", "Sloth", "Racism", <br />, "step 1 shake", "step 2 mix", "More steps", "even more steps", "a fucking drink shouldn't be this complicated"] },
        { name: "Mojito", base_spirit: "rum", drink_type: "classic cocktail", img: "mojito.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 2 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Gin Fizz", base_spirit: "gin", drink_type: "classic cocktail", img: "gin-fizz.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 3 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Pina Colada", base_spirit: "rum", drink_type: "blended cocktail", img: "pina-colada.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 4 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Hot Toddy", base_spirit: "whiskey", drink_type: "hot cocktail", img: "hot-toddy.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 5 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "B-52", base_spirit: "coffee liquor", drink_type: "shots", img: "b-52.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 6 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Eggnog", base_spirit: "whiskey", drink_type: "holiday cocktail", img: "eggnog.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Jello Shots", base_spirit: "vodka", drink_type: "novelty cocktail", img: "jelloshot.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Margarita", base_spirit: "tequila", drink_type: "blended cocktail", img: "margarita.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Scotch Sour", base_spirit: "scotch", drink_type: "classic cocktail", img: "scotchsour.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recipe: "Recipe 1 consectetur adipiscing elit, 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },


      ]
    var info;
    for (var i = 0; i < drink.length; i++) {
      if (this.props.match.params.drink == drink[i].name) {
        info = drink[i];
        break;
      }
    }

    const recipe = info.recipe.map((item) =>
      <li>{item}</li>
    );

    //console.log("images/alcoholic_drinks/"+info.base_spirit+"_drinks/"+info.img);

    return (
      <div>
        <div className="wrapper style1">
          <div className="container" id="recipe-box">
            <section>
              <header className="major center">
                <h2>{info.name}</h2>
              </header>

              <div className="row">
                <div className="major 4u">
                  <img className="drink-img" src={"../../images/alcoholic_drinks/" + info.base_spirit + "_drinks/" + info.img} />
                </div>
                <div className="major 8u">
                  <p>{info.description}</p>
                  <br />
                  <header className="major">
                    <h3>{info.name} Ingredients</h3>
                  </header>
                  <ul>
                    {recipe}
                  </ul>
                  <br />
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