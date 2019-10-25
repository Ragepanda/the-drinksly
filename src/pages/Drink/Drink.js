import React from "react";

import './Drink.css';
import { Helmet } from "react-helmet";
// import './Drink.css';
class Drink extends React.Component {
  constructor(props) {
    super(props); // ✅ We passed props
    console.log(props);      // ✅ {}
    console.log(this.props); // ✅ {}
  }

  procImage() {



  }


<<<<<<< HEAD
      
    render() {
       const drink = 
[
  {name: "Manhattan",            base_spirit: "whiskey",   drink_type: "classic cocktail", img: "drew-beamer-manhattan-small.jpg", description: "The Manhattan is a classic whiskey cocktail devised in NYC's Manhattan Club.",                              recipe: ["2 oz Bourbon", "1 oz Sweet Vermouth", "2 dashes Angostura Bitters", <br/>, "Add all ingredients to a mixing glass with ice", "Stir until chilled", "Strain into another glass", "Garnish with a cherry"]},
  {name: "Old Fashioned",        base_spirit: "whiskey",   drink_type: "classic cocktail", img: "old-fashioned.jpg",               description: "The Old Fashioned is a classic whiskey cocktail with just a few simple ingredients.",                       recipe: ["2 oz Bourbon", "1 tsp water", "3 dashes Angostura Bitters", "1/2 tsp sugar", <br/>, "Add sugar, bitters, and water into a rocks glass and stir until sugar is dissolved", "Pour in the bourbon and a few ice cubes", "Gently stir", "Garnish with an orange peel"]},
  {name: "Sex on the Beach",     base_spirit: "vodka",     drink_type: "novelty cocktail", img: "sex-on-the-beach.jpg",            description: "Sex on the Beach cocktail is a novelty drink, with a suggestive name and a delightful, fruity profile.",    recipe: ["1.5 oz Vodka", "1 oz Pineapple Juice", "0.5 oz Aperol", "0.5 oz Lime Juice", "0.5 oz Simple Syrup", "0.25 Passion fruit syrup", <br/>, "Add all ingredients to a shaker with ice and shake", "Strain into a highball glass with ice", "Garnish with umbrella"]},
  {name: "Mojito",               base_spirit: "rum",       drink_type: "classic cocktail", img: "mojito.jpg",                      description: "The mojito is a light refreshing rum cocktail perfect for the summer.",                                     recipe:["10 mint leaves", "1/2 lime, in 4 wedges", "2 Tbsp White Sugar", "1 cup ice cubes", "1.5 oz Rum", "1/2 cup club soda",<br/>, "Add the mint and 1 lime wedge to a glass", "Crush the mint and lime", "Add 2 more wedges and sugar and crush and mix the mixture", "Top off the glass with ice", "Pour the rum in and top with club soda", "Garnish with the lime wedge"] },
  {name: "Paloma",               base_spirit: "tequila",   drink_type: "classic cocktail", img: "paloma.jpg",                      description: "The paloma is a refreshing tequila cocktail with a citrus zing.",                                           recipe:["Kosher Salt", "1 grapefruit wedge", "1/4 cup grapefruit juice", "1 Tbsp lime juice", "1 tsp sugar", "2 oz tequila", "2 oz club soda",<br/>, "Rim a highball glass in salt", "Stir both juices and sugar in the glass until the sugar dissolves", "Stir in the tequila and add ice", "Top off with club soda", "Garnish with the grapefruit wedge"] },
  {name: "Zombie",               base_spirit: "rum",       drink_type: "novelty cocktail", img: "zombie.jpg",                      description: "The zombie is a novelty tiki cocktail with a fruity punch.",                                                recipe:["1 oz light rum", "1 oz dark rum", "1 oz orange curacao", "0.5 oz lemon juice", "0.5 lime juice", "1.5 oz orange juice", "1.5 oz passionfruit puree", "0.25 oz grenadine", "2 dashes Angostura Bitters" ,<br/>, "Combine all ingredients in shaker with ice.", "Shake and then strain into a highball glass with ice", "Garnish with mint and strawberry"] },
  {name: "Hurricane",            base_spirit: "rum",       drink_type: "novelty cocktail", img: "hurricane.jpg",                   description: "The hurricane is a boozy rum cocktail that holds nothing back.",                                            recipe:["2 oz light rum", "2 oz dark rum", "1 oz orange juice", "0.5 oz passionfruit puree", "0.5 simple syrup", "1 tsp grenadine",<br/>, "Combine all ingredients in shaker with ice.", "Shake and then strain into a hurricane glass with ice", "Garnish with cherry and an orange wheel"] },
  {name: "Margarita",            base_spirit: "tequila",   drink_type: "classic cocktail", img: "margarita.jpg",                   description: "The margarita is a classic tequila cocktail known for its citrus punch and tequila.",                       recipe:["1.5 oz light rum", "1 oz orange liqueur", "0.75 oz lime juice", "Kosher Salt", <br/>, "Rim a rocks glass with the kosher salt", "Combine all other ingredients in shaker with ice", "Shake and then strain into the rocks glass with ice", "Garnish with a lime wedge"] },
  {name: "Eggnog",               base_spirit: "bourbon",   drink_type: "holiday cocktail", img: "eggnog.jpg",                      description: "Eggnog is a creamy bourbon cocktail perfect for winter holiday parties.",                                   recipe:["4 egg yolks", "1/3 cup sugar + 1 Tbsp sugar", "1 pint whole milk", "1 cup heavy cream", "3 oz bourbon", "1 tsp nutmeg", "4 egg whites", <br/>, "Beat egg yolks until the lighten", "Add the sugar, milk, cream and bourbon and stir until the sugar dissolves", "Beat egg whites with 1 Tbsp of sugar until they have soft white peaks", "Whisk egg whites into the mixture","Chill and serve", "Garnish with cinnamon stick"] },
  {name: "Bloody Mary",          base_spirit: "vodka",     drink_type: "classic cocktail", img: "bloodymary.jpg",                  description: "The bloody mary is a classic, yet strange cocktail full of vegetable flavors.",                             recipe:["1 lemon wedge", "1 lime wedge", "2 oz vodka", "4 oz tomato juice", "2 dashes tabasco sauce", "2 tsp horseradish", "2 dashes worcestershire sauce", "1 pinch celery salt", "1 pinch black pepper", "1 pinch paprika", <br/>, "Rim a highball glass with celery salt", "Fill the glass with ice", "Squeeze the lemon and lime into a shaker and throw them in", "Add the remaining ingredients and shake","Strain into the highball glass", "Garnish with a celery stalk and a spear of green olives"] },
  {name: "Screwdriver",          base_spirit: "vodka",     drink_type: "classic cocktail", img: "screwdriver.jpg",                 description: "The screwdriver is a classic vodka cocktail and quite simple as well.",                                     recipe:["2 parts vodka", "3 parts orange juice", <br/>, "Pour vodka into a glass with ice", "Top the glass with orange juice"] },
  {name: "Cosmopolitan",         base_spirit: "vodka",     drink_type: "classic cocktail", img: "cosmopolitan.jpg",                description: "The cosmopolitan is a classic vodka cocktail strongly associated with New York City.",                      recipe:["1.5 oz citrus vodka", "1 oz Cointreau", "0.5 oz lime juice", "1 dash cranberry juice", <br/>, "Add all ingredients to a shaker with ice and shake", "Strain into a cocktail glass", "Garnish with lime wedge"] },
  {name: "Negroni",              base_spirit: "gin",       drink_type: "classic cocktail", img: "negroni.jpg",                     description: "The negroni is a classic gin cocktail that has received countless adaptations.",                            recipe:["1 oz gin", "1 oz campari", "1 oz sweet vermouth", <br/>, "Add all ingredients to a glass and stir until chilled", "Strain into a rocks glass", "Garnish with an orange peel"] },
  {name: "Moscow Mule",          base_spirit: "vodka",     drink_type: "classic cocktail", img: "moscow-mule.jpg",                 description: "The moscow mule is a vodka cocktail typically served in small copper mugs.",                                recipe:["1.5 oz vodka", "0.5 oz lime juice", "4 oz ginger beer", "1 lime wedge", "ice cubes", <br/>, "Pour the vodka, lime juice, and ginger into a copper mug with ice", "Gently stir", "Garnish with the lime wedge"] },
  {name: "Whiskey Sour",         base_spirit: "whiskey",   drink_type: "classic cocktail", img: "whiskey-sour.jpg",                description: "The whiskey sour is simply a bourbon cocktail with liberal quantities of citrus.",                          recipe:["2 oz bourbon", "0.75 oz lemon juice", "0.75 oz simple syrup", "orange wheel", "Maraschino cherry", <br/>, "Add the bourbon, juice and syrup to a cocktail shaker with ice", "Shake until chilled and strain into rocks glass", "Garnish with orange wheel and cherry"] },
  {name: "Mimosa",               base_spirit: "champagne", drink_type: "classic cocktail", img: "mimosa.jpg",                      description: "A mimosa is a classic cocktail frequently found at weekend breakfasts and brunches.",                       recipe:["6 oz champagne", "2 oz orange juice", <br/>, "Mix the champagne and orange juice in a champagne glass"] },
  {name: "Gimlet",               base_spirit: "gin",       drink_type: "classic cocktail", img: "gimlet.jpg",                      description: "A gimlet is a classic gin cocktail with lime that is said to help prevent scurvy.",                         recipe:["2.5 oz gin", "0.5 oz lime juice", "0.5 oz simple syrup", <br/>, "Add everything to a shaker with ice", "Shake until chilled", "Strain into a cocktail glass", "Garnish with a lime wheel"] },
  {name: "Sazerac",              base_spirit: "whiskey",   drink_type: "classic cocktail", img: "sazerac.jpg",                     description: "A sazerac is a classic cocktail based on another classic: the old fashioned",                               recipe:["2.5 oz rye whiskey", "1 tsp sugar", "2 dashes Peychaud's Bitters", "1 dash Angostura Bitters", "lemon peel", <br/>, "Muddle the sugar with water in an old fashioned glass", "Add ice, whiskey and the bitters and stir well", "Garnish with the lemon peel"] },
  {name: "Pimm's Cup",           base_spirit: "pimm's",    drink_type: "classic cocktail", img: "pimms-cup.jpg",                   description: "Pimm's cup is a classic cocktail that has been enjoyed at many a summertime British party.",                recipe:["2 oz rye Pimm's No. 1", "3 oz ginger ale", "1 cucumber slice", "1 lemon slice", "1 orange slice", <br/>, "Add all ingredients to a highball glass", "Stir to combine"] },
  {name: "Sidecar",              base_spirit: "cognac",    drink_type: "classic cocktail", img: "sidecar.jpg",                     description: "The Sidecar is a rich and strong cognac cocktail with a contested origin story in New Orleans.",            recipe:["1.5 oz Cognac", "0.75 oz Cointreau", "0.75 oz lemon juice", <br/>, "Add all ingredients to a shaker with ice and shake", "Strain into a coupe glass", "Garnish with an orange twist"] },
  {name: "Mint Julep",           base_spirit: "bourbon",   drink_type: "classic cocktail", img: "mint-julep.jpg",                  description: "The mint julep is a classic bourbon cocktail well known as the premier drink of the Kentucky Derby.",       recipe:["2 oz bourbon", "0.25 oz simple syrup", "0.75 oz lemon juice", <br/>, "In a rocks glass, muddle the mint and syrup", "Add the bourbon and crushed ice", "Stir until chilled", "Garnish with more mint leaves"] },
  {name: "French 75",            base_spirit: "gin",       drink_type: "classic cocktail", img: "french75.jpg",                    description: "The French 75 is a classic gin cocktail with champagne that is perfect for a light brunch.",                recipe:["1 oz gin", "3 oz champagne", "0.5 oz simple syrup", "0.5 oz lemon juice", <br/>, "Add all ingredients, save the champagne, to a shaker with ice and shake", "Strain into a champagne glass", "Top with the champagne", "Garnish with a lemon twist"] },
  {name: "Martini",              base_spirit: "gin",       drink_type: "classic cocktail", img: "martini.jpg",                     description: "The Martini is a quintessential gin cocktail commonly associated with socialites and fine dining.",         recipe:["3 oz gin", "0.5 oz Dry Vermouth", "3-4 pimento green olives", <br/>, "Add gin and vermouth to a shaker with ice and shake", "Strain into a cocktail glass", "Garnish with olives"] },
  {name: "Daiquiri",             base_spirit: "rum",       drink_type: "classic cocktail", img: "daiquiri.jpg",                    description: "The Daiquiri is a light rum cocktail that is quite unlike its frozen cousin.",                              recipe:["2 oz light rum", "1 oz lime juice", "0.5 oz simple syrup", <br/>, "Add all ingredients to a shaker with ice and shake", "Strain into a cocktail glass", "Garnish with a lime wheel"] },
  {name: "Dark 'n Stormy",       base_spirit: "rum",       drink_type: "classic cocktail", img: "dark-n-stormy.jpg",               description: "The Dark 'n Stormy is a delightful rum cocktail that conjures images of pirates and the open seas.",        recipe:["2 oz dark rum", "5 oz ginger beer", "1 lime wedge", <br/>, "Add ice to a highball glass then the rum", "Add the ginger beer and lightly stir", "Garnish with a lime wedge"] },
  {name: "Martinez",             base_spirit: "gin",       drink_type: "classic cocktail", img: "martinez.jpg",                    description: "The Martinez is a gin cocktail that is part Manhattan, part Martini and full tasty.",                       recipe:["1.5 oz gin", "1.5 oz sweet vermouth", "1 tsp Maraschino liqueur", "2 dashes orange bitters", "orange peel twist", <br/>, "Add liquid ingredients to mixing glass with ice", "Stir gently until chilled", "Strain into a cocktail glass","Garnish with an orange peel twist"] },
  {name: "Dry Martini",          base_spirit: "gin",       drink_type: "classic cocktail", img: "dry-martini.jpg",                 description: "The Dry Martini is a classic gin cocktail with routes in the middle of the 19th century.",                  recipe:["2.5 oz gin", "0.5 oz dry vermouth", "1 dash orange bitters", "lemon twist", <br/>, "Add liquid ingredients to mixing glass with ice", "Stir gently until chilled", "Strain into a cocktail glass","Garnish with a lemon twist"] },
  {name: "Espresso Martini",     base_spirit: "vodka",     drink_type: "classic cocktail", img: "espresso-martini.jpg",            description: "The Espresso Martini is a modern classic cocktail that mixes two vices into one great drink.",              recipe:["2 oz vodka", "0.5 oz simple syrup", "0.5 coffee liqueur", "1 oz espresso", <br/>, "Add all ingredients to shaker with ice", "Shake until chilled", "Strain into a cocktail glass","Garnish with a few coffee beans"] },
  {name: "White Russian",        base_spirit: "vodka",     drink_type: "classic cocktail", img: "white-russian.jpg",               description: "The Dude abides by the White Russian: a creamy, sweet vodka cocktail.",                                     recipe:["2 oz vodka", "1 oz coffee liqueur", "1 oz heavy cream", <br/>, "Add vodka and coffee liqueur to a rocks glass with ice", "Top with the heavy cream"] },
  {name: "Irish coffee",         base_spirit: "whiskey",   drink_type: "hot cocktail",     img: "irish-coffee.jpg",                description: "Irish Coffee is a rare cocktail that is good in the morning and night; both on a holiday and anytime.",     recipe:["1.5 oz Irish whiskey", "6 oz coffee", "2 tsp sugar", "whipped cream", <br/>, "Add hot coffee and sugar to a mug, then stir to dissolve the sugar", "Add Irish whiskey and stir to mix", "Top with the whipped cream"] },
  {name: "Bamboo",               base_spirit: "sherry",    drink_type: "classic cocktail", img: "bamboo.jpg",                      description: "The Bamboo is a classic, underrated sherry cocktail that packs a punch.",                                   recipe:["1.5 oz dry sherry", "1.5 oz dry vermouth", "1 dash Angostura bitters", "1 dash orange bitters", <br/>, "Add all ingredients to a mixing glass with ice", "Stir gently until chilled", "Strain into a coupe glass", "Garnish with a lemon twist"] },
  {name: "Gin-Gin Mule",         base_spirit: "gin",       drink_type: "classic cocktail", img: "gin-gin-mule.jpg",                description: "The Gin-Gin mule is a twist on the classic Moscow Mule, swapping vodka out for gin.",                       recipe:["1.5 oz gin", "0.5 oz lime juice", "4 oz ginger beer", "1 lime wedge", "ice cubes", <br/>, "Pour the gin, lime juice, and ginger into a copper mug with ice", "Gently stir", "Garnish with the lime wedge"] },
  {name: "Long Island Iced Tea", base_spirit: "vodka",     drink_type: "classic cocktail", img: "long-island-iced-tea.jpg",        description: "The Long Island Iced Tea is well known as a very strong drink, replete with several different spirits.",    recipe:["0.75 oz vodka", "0.75 oz light rum", "0.75 oz silver tequila", "0.75 oz gin", "0.75 oz triple sec", "0.75 simple syrup", "0.75 lemon juice", "cola", <br/>, "Pour all ingredients, save the cola into a highball glass with ice", "Top off the glass with cola","Garnish with a lemon wedge"] },
  {name: "Vesper",               base_spirit: "gin",       drink_type: "classic cocktail", img: "vesper.jpg",                      description: "The Vesper is the cocktail of international man of mystery James Bond. Remember, \"shaken, not stirred.\"", recipe:["3 oz gin", "1 oz vodka", "0.5 oz Lillet blanc aperitif", <br/>, "Pour all ingredients into a shaker with ice", "Shake until chilled","Strain into a cocktail glass", "Garnish with a lemon twist"] },
  {name: "Caipirinha",           base_spirit: "cachaca",   drink_type: "classic cocktail", img: "caipirinha.jpg",                  description: "The Caipirinha is a Brazilian drink that uses cachaca; a unique Brazilian spirit.",                         recipe:["2 oz cachaca", "2 tsp sugar", "half a lime, in wedges", <br/>, "In a rocks glass, muddle the sugar and limes", "Fill with ice and stir in the cachaca", "Garnish with a lime wheel"] },
  {name: "Tom Collins",          base_spirit: "gin",       drink_type: "classic cocktail", img: "tom-collins.jpg",                 description: "The Tom Collins is such a classic gin cocktail, the glass it comes in is named after the drink.",           recipe:["2 oz dry gin", "1 oz lemon juice", "0.5 oz simple syrup", "club soda", <br/>, "Add gin, lemon juice, and simple syrup to a Collins glass with ice", "Top off with club soda", "Garnish with a lemon wheel and a maraschino cherry"] },
  {name: "Painkiller",           base_spirit: "rum",       drink_type: "novelty cocktail", img: "painkiller.jpg",                  description: "The Painkiller is a tropical and fruity cocktail with a rum base.",                                         recipe:["2 oz rum", "4 oz pineapple juice", "1 oz cream of coconut", "1 oz orange juice", <br/>, "Add all ingredients to a shaker with ice and shake well", "Strain into a highball glass with ice", "Garnish with a pineapple wedge and nutmeg"] },
  {name: "Bee's Knees",          base_spirit: "gin",       drink_type: "classic cocktail", img: "bees-knees.jpg",                  description: "A classic gin cocktail packed with lemon and honey thats sure to leave you buzzed.",                        recipe:["2 oz gin", "0.75 oz lemon juice", "0.25 oz honey", <br/>, "Add all ingredients to a shaker with ice and shake well", "Strain into a cocktail glass", "Garnish with a lemon twist"] },
  {name: "Ramos Gin Fizz",       base_spirit: "gin",       drink_type: "classic cocktail", img: "ramos-gin-fizz.jpg",              description: "A frothy gin cocktail with a unique texture and taste profile.",                                            recipe:["2 oz gin", "0.5 oz heavy cream", "0.5 oz lemon juice", "0.5 oz lime juice", "0.75 oz simple syrup", "3 dashes orange juice", "1 fresh egg white", "club soda", <br/>, "Add all ingredients, save the club soda, to a shaker with ice and shake well", "Strain into a highball glass", "Top off with club soda"] },
  {name: "Bramble",              base_spirit: "gin",       drink_type: "classic cocktail", img: "bramble.jpg",                     description: "The Bramble is a wonderful gin cocktail that features the fresh taste of blackberries.",                    recipe:["2 oz gin", "1 oz lemon juice", "2 tsp simple syrup", "0.5 oz creme de mure",  <br/>, "Add all ingredients, save the creme de mure, to a shaker with ice and shake well", "Strain into a rocks glass with ice", "Top off with the creme de mure", "Garnish with a blackberry"] },
  {name: "Vodka Martini",        base_spirit: "vodka",     drink_type: "classic cocktail", img: "vodka-martini.jpg",               description: "The Vodka Martini essentially is just the classic martini with a vodka substitution.",                      recipe:["3 oz vodka", "1 oz dry vermouth", "1 cup ice cubes", "3 olives",  <br/>, "Add all ingredients, save the olives, to a mixing glass and stir until chilled", "Strain into a cocktail glass", "Garnish with three olives on a toothpick"] },
  {name: "Hanky Panky",          base_spirit: "gin",       drink_type: "classic cocktail", img: "hanky-panky.jpg",                 description: "The Hanky Panky is a strong gin cocktail with a risque name.",                                              recipe:["1.5 oz gin", "1.5 oz sweet vermouth", "2 dashes Fernet-Branca", <br/>, "Add all ingredients to a mixing glass with ice and stir until chilled", "Strain into a cocktail glass", "Garnish with an orange twist"] },
  {name: "Jungle Bird",          base_spirit: "rum",       drink_type: "classic cocktail", img: "jungle-bird.jpg",                 description: "The Jungle Bird is a tiki drink with lovely tropical and fruity flavors with a rum backbone.",              recipe:["1.5 oz dark rum", "0.75 oz Campari", "0.5 oz simple syrup", "1.5 oz pineapple juice", "0.5 lime juice", <br/>, "Add all ingredients to a shaker with ice and shake until chilled", "Strain into a rocks glass", "Garnish with a pineapple wedge"] },
  {name: "White Lady",           base_spirit: "gin",       drink_type: "classic cocktail", img: "white-lady.jpg",                  description: "The White Lady is a delicate looking drink with a strong gin kick.",                                        recipe:["2 oz gin", "0.5 oz orange liqueur", "0.5 oz lemon juice", "1 egg white", <br/>, "Add all ingredients to a shaker with ice and shake until chilled", "Strain into a cocktail glass"] },
  {name: "Vieux Carre",          base_spirit: "whiskey",   drink_type: "classic cocktail", img: "vieux-carre.jpg",                 description: "The Vieux Carre is a decadent whiskey drink with vermouth and lots of bitters.",                            recipe:["0.75 oz rye whiskey", "0.75 cognac", "0.75 sweet vermouth", "0.5 tsp Benedictine", "1 dash Angostura bitters", "1 dash Peychaud's bitters", <br/>, "Add all ingredients to a mixing glass with ice and stir until chilled", "Strain into a cocktail glass", "Garnish with a cherry"] },
  {name: "Aviation",             base_spirit: "gin",       drink_type: "classic cocktail", img: "aviation.jpg",                    description: "The Aviation is a purple hued gin drink that will leave you flying high.",                                  recipe:["2 oz gin", "0.5 oz Maraschino liqueur", "0.25 creme de violette", "0.75 oz lemon juice", <br/>, "Add all ingredients to a shaker with ice and shake until chilled", "Strain into a cocktail glass", "Garnish with a brandied cherry"] },
  {name: "Pina Colada",          base_spirit: "rum",       drink_type: "blended cocktail", img: "pina-colada.jpg",                 description: "The Pina Colada is the classic frozen cocktail that will remind you of the beach.",                         recipe:["8 oz white rum", "6 oz cream of coconut", "2 oz unsweetened coconut milk", "2 tbsp lime juice", "maraschino cherries", <br/>, "Freeze the pineapple solid", "Add all ingredients to a blender and blend until smooth", "Divide into 4 glasses", "Garnish with a cherry and pineapple wedge"] },
  {name: "Amaretto Sour",        base_spirit: "amaretto",  drink_type: "classic cocktail", img: "amaretto-sour.jpg",               description: "The Amaretto Sour is a classic and simple cocktail that substitutes amaretto in place of bourbon.",         recipe:["1.5 oz amaretto", "1.5 oz sweet and sour mix", "Lime soda", <br/>, "Mix the amaretto and sweet and sour mix into a rocks glass with ice", "Top with lime soda", "Garnish with a cherry"] },
  {name: "Pisco Sour",           base_spirit: "pisco",     drink_type: "classic cocktail", img: "pisco-sour.jpg",                  description: "The Pisco Sour is a classic and simple cocktail that substitutes pisco in place of bourbon.",               recipe:["2 oz Pisco",  "1 oz lime juice", "0.5 oz simple syrup", "1 egg white", <br/>, "Add all ingredients to a shaker with ice and shake until chilled", "Strain into a rocks glass with ice", "Garnish with 3 drops of bitters"] },
  {name: "Americano",            base_spirit: "campari",   drink_type: "classic cocktail", img: "americano.jpg",                   description: "The Americano is a classic cocktail with a deep red color and fizzy texture.",                              recipe:["1.5 oz Campari",  "1.5 oz sweet vermouth", "club soda", <br/>, "Add Campari and vermouth to a highball glass with ice", "Top with club soda", "Garnish with an orange peel"] },
  {name: "Mai Tai",              base_spirit: "rum",   drink_type: "classic cocktail", img: "americano.jpg",                   description: "The Americano is a classic cocktail with a deep red color and fizzy texture.",                              recipe:["1.5 oz Campari",  "1.5 oz sweet vermouth", "club soda", <br/>, "Add Campari and vermouth to a highball glass with ice", "Top with club soda", "Garnish with an orange peel"] },


]
        var info;
        for(var i =0; i < drink.length; i++)
        {
          if(this.props.match.params.drink == drink[i].name)
          {
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
           
              <div className = "row center">
              <div className="major 6u" id="imgBox">
                <img id="drinkImg" src={"../../images/alcoholic_drinks/"+info.base_spirit+"_drinks/"+info.img}/>
              </div>
              <div className="major 6u" id="recipeBox">
                <h3 className="center" id="title">{info.name}</h3>
                <br/>
                <p>Description</p>
                <br/>
                <p className="padded">{info.description}</p>
                <br/>
                <p>Ingredients</p>
                <br/>
                <ul>
                  {recipe}
                </ul>
                <br/>
=======
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
      	<Helmet>
      	  <title>{"Drink Recipe" + " | "+ info.name +" Drink Recipe"}</title>
      	  <meta name="description" content={"This Drink Recipe page is perfect to understand and make the " + info.name + " drink recipe. Please enjoy using and drinking our " + info.name + " drink recipe." }/>
      	  <meta name="keywords" content={"drink, recipe, recipes, cocktail, cocktails, vodka, whiskey, gin, rum, tequila, scotch, non-alcoholic, mixed, spirit, spirits, " + info.name} />
      	  <meta name="author" content="thedrinksly.com"/>
      	  <meta http-equiv="Content-Language" content="en-US"/>
      	  <meta name="rating" content="adults"/>
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
                  <img className="drink-img" src={"../../images/alcoholic_drinks/" + info.base_spirit + "_drinks/" + info.img} />
>>>>>>> d3ccd2e48b033fd1f6495325805a9be44d064831
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