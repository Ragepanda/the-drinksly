import React from "react";
import { NavLink } from 'react-router-dom';
// import ReactSearchBox from 'react-search-box'
import Card from "../../components/Cards/Card";
import './Home.css';
import Collapsible from "react-collapsible";
import { Helmet } from "react-helmet";
class Home extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props

        this.state = {
            searchText: "",
            spritsTrigger: "Filter By Spirits +",
            typeTrigger: "Filter By Type +",
            rumToggle: false,
            ginToggle: false,
            scotchToggle: false,
            tequilaToggle: false,
            vodkaToggle: false,
            whiskeyToggle: false,
            blendedToggle: false,
            classicToggle: false,
            hotToggle: false,
            holidayToggle: false,
            noveltyToggle: false,
            shotsToggle: false,
            scotchClassname: "button small",
            tequilaClassname: "button small",
            vodkaClassname: "button small",
            whiskeyClassname: "button small",
            rumClassname: "button small",
            ginClassname: "button small",
            blendedClassname: "button small",
            classicClassname: "button small",
            hotClassname: "button small",
            holidayClassname: "button small",
            noveltyClassname: "button small",
            shotsClassname: "button small"

        }
        this.setSearch = this.setSearch.bind(this);


        this.spiritClose = this.spiritClose.bind(this);
        this.spiritOpen = this.spiritOpen.bind(this);

        this.filterDrinks = this.filterDrinks.bind(this);

        this.rumState = this.rumState.bind(this);
        this.ginState = this.ginState.bind(this);
        this.scotchState = this.scotchState.bind(this);
        this.tequilaState = this.tequilaState.bind(this);
        this.vodkaState = this.vodkaState.bind(this);
        this.whiskeyState = this.whiskeyState.bind(this);
        this.blendedState = this.blendedState.bind(this);
        this.classicState = this.classicState.bind(this);
        this.hotState = this.hotState.bind(this);
        this.holidayState = this.holidayState.bind(this);
        this.noveltyState = this.noveltyState.bind(this);
        this.shotsState = this.shotsState.bind(this);

    }

    setSearch(e) {
        this.setState({ searchText: e.target.value });
    }

    filterDrinks() {
        const drinkSet =
            [
                { name: "Manhattan", base_spirit: "whiskey", drink_type: "classic cocktail", img: "drew-beamer-manhattan-54.jpg", description: "The Manhattan is a classic whiskey cocktail devised in NYC's Manhattan Club.", recipe: ["2 oz Bourbon", "1 oz Sweet Vermouth", "2 dashes Angostura Bitters", <br />, "Add all ingredients to a mixing glass with ice", "Stir until chilled", "Strain into another glass", "Garnish with a cherry"] },
                { name: "Old Fashioned", base_spirit: "whiskey", drink_type: "classic cocktail", img: "adam-jaime-old-fashioned.jpg", description: "The Old Fashioned is a classic whiskey cocktail with just a few simple ingredients.", recipe: ["2 oz Bourbon", "1 tsp water", "3 dashes Angostura Bitters", "1/2 tsp sugar", <br />, "Add sugar, bitters, and water into a rocks glass and stir until sugar is dissolved", "Pour in the bourbon and a few ice cubes", "Gently stir", "Garnish with an orange peel"] },
                { name: "Sex on the Beach", base_spirit: "vodka", drink_type: "novelty cocktail", img: "sex-on-the-beach.jpg", description: "Sex on the Beach cocktail is a novelty drink, with a suggestive name and a delightful, fruity profile.", recipe: ["1.5 oz Vodka", "1 oz Pineapple Juice", "0.5 oz Aperol", "0.5 oz Lime Juice", "0.5 oz Simple Syrup", "0.25 Passion fruit syrup", <br />, "Add all ingredients to a shaker with ice and shake", "Strain into a highball glass with ice", "Garnish with umbrella"] },
                { name: "Mojito", base_spirit: "rum", drink_type: "classic cocktail", img: "mojito.jpg", description: "The mojito is a light refreshing rum cocktail perfect for the summer.", recipe: ["10 mint leaves", "1/2 lime, in 4 wedges", "2 Tbsp White Sugar", "1 cup ice cubes", "1.5 oz Rum", "1/2 cup club soda", <br />, "Add the mint and 1 lime wedge to a glass", "Crush the mint and lime", "Add 2 more wedges and sugar and crush and mix the mixture", "Top off the glass with ice", "Pour the rum in and top with club soda", "Garnish with the lime wedge"] },
                { name: "Paloma", base_spirit: "tequila", drink_type: "classic cocktail", img: "paloma.jpg", description: "The paloma is a refreshing tequila cocktail with a citrus zing.", recipe: ["Kosher Salt", "1 grapefruit wedge", "1/4 cup grapefruit juice", "1 Tbsp lime juice", "1 tsp sugar", "2 oz tequila", "2 oz club soda", <br />, "Rim a highball glass in salt", "Stir both juices and sugar in the glass until the sugar dissolves", "Stir in the tequila and add ice", "Top off with club soda", "Garnish with the grapefruit wedge"] },
                { name: "Zombie", base_spirit: "rum", drink_type: "novelty cocktail", img: "zombie.jpg", description: "The zombie is a novelty tiki cocktail with a fruity punch.", recipe: ["1 oz light rum", "1 oz dark rum", "1 oz orange curacao", "0.5 oz lemon juice", "0.5 lime juice", "1.5 oz orange juice", "1.5 oz passionfruit puree", "0.25 oz grenadine", "2 dashes Angostura Bitters", <br />, "Combine all ingredients in shaker with ice.", "Shake and then strain into a highball glass with ice", "Garnish with mint and strawberry"] },
                { name: "Hurricane", base_spirit: "rum", drink_type: "novelty cocktail", img: "hurricane.jpg", description: "The hurricane is a boozy rum cocktail that holds nothing back.", recipe: ["2 oz light rum", "2 oz dark rum", "1 oz orange juice", "0.5 oz passionfruit puree", "0.5 simple syrup", "1 tsp grenadine", <br />, "Combine all ingredients in shaker with ice.", "Shake and then strain into a hurricane glass with ice", "Garnish with cherry and an orange wheel"] },
                { name: "Margarita", base_spirit: "tequila", drink_type: "classic cocktail", img: "margarita.jpg", description: "The margarita is a classic tequila cocktail known for its citrus punch and tequila.", recipe: ["1.5 oz light rum", "1 oz orange liqueur", "0.75 oz lime juice", "Kosher Salt", <br />, "Rim a rocks glass with the kosher salt", "Combine all other ingredients in shaker with ice", "Shake and then strain into the rocks glass with ice", "Garnish with a lime wedge"] },
                { name: "Eggnog", base_spirit: "bourbon", drink_type: "holiday cocktail", img: "eggnog.jpg", description: "Eggnog is a creamy bourbon cocktail perfect for winter holiday parties.", recipe: ["4 egg yolks", "1/3 cup sugar + 1 Tbsp sugar", "1 pint whole milk", "1 cup heavy cream", "3 oz bourbon", "1 tsp nutmeg", "4 egg whites", <br />, "Beat egg yolks until the lighten", "Add the sugar, milk, cream and bourbon and stir until the sugar dissolves", "Beat egg whites with 1 Tbsp of sugar until they have soft white peaks", "Whisk egg whites into the mixture", "Chill and serve", "Garnish with cinnamon stick"] },
                { name: "Bloody Mary", base_spirit: "vodka", drink_type: "classic cocktail", img: "bloodymary.jpg", description: "The bloody mary is a classic, yet strange cocktail full of vegetable flavors.", recipe: ["1 lemon wedge", "1 lime wedge", "2 oz vodka", "4 oz tomato juice", "2 dashes tabasco sauce", "2 tsp horseradish", "2 dashes worcestershire sauce", "1 pinch celery salt", "1 pinch black pepper", "1 pinch paprika", <br />, "Rim a highball glass with celery salt", "Fill the glass with ice", "Squeeze the lemon and lime into a shaker and throw them in", "Add the remaining ingredients and shake", "Strain into the highball glass", "Garnish with a celery stalk and a spear of green olives"] },
                { name: "Screwdriver", base_spirit: "vodka", drink_type: "classic cocktail", img: "screwdriver.jpg", description: "The screwdriver is a classic vodka cocktail and quite simple as well.", recipe: ["2 parts vodka", "3 parts orange juice", <br />, "Pour vodka into a glass with ice", "Top the glass with orange juice"] },
                { name: "Cosmopolitan", base_spirit: "vodka", drink_type: "classic cocktail", img: "cosmopolitan.jpg", description: "The cosmopolitan is a classic vodka cocktail strongly associated with New York City.", recipe: ["1.5 oz citrus vodka", "1 oz Cointreau", "0.5 oz lime juice", "1 dash cranberry juice", <br />, "Add all ingredients to a shaker with ice and shake", "Strain into a cocktail glass", "Garnish with lime wedge"] },
                { name: "Negroni", base_spirit: "gin", drink_type: "classic cocktail", img: "negroni.jpg", description: "The negroni is a classic gin cocktail that has received countless adaptations.", recipe: ["1 oz gin", "1 oz campari", "1 oz sweet vermouth", <br />, "Add all ingredients to a glass and stir until chilled", "Strain into a rocks glass", "Garnish with an orange peel"] },
                { name: "Moscow Mule", base_spirit: "vodka", drink_type: "classic cocktail", img: "moscow-mule.jpg", description: "The moscow mule is a vodka cocktail typically served in small copper mugs.", recipe: ["1.5 oz vodka", "0.5 oz lime juice", "4 oz ginger beer", "1 lime wedge", "ice cubes", <br />, "Pour the vodka, lime juice, and ginger into a copper mug with ice", "Gently stir", "Garnish with the lime wedge"] },
                { name: "Whiskey Sour", base_spirit: "whiskey", drink_type: "classic cocktail", img: "whiskey-sour.jpg", description: "The whiskey sour is simply a bourbon cocktail with liberal quantities of citrus.", recipe: ["2 oz bourbon", "0.75 oz lemon juice", "0.75 oz simple syrup", "orange wheel", "Maraschino cherry", <br />, "Add the bourbon, juice and syrup to a cocktail shaker with ice", "Shake until chilled and strain into rocks glass", "Garnish with orange wheel and cherry"] },
                { name: "Mimosa", base_spirit: "champagne", drink_type: "classic cocktail", img: "mimosa.jpg", description: "A mimosa is a classic cocktail frequently found at weekend breakfasts and brunches.", recipe: ["6 oz champagne", "2 oz orange juice", <br />, "Mix the champagne and orange juice in a champagne glass"] },
                { name: "Gimlet", base_spirit: "gin", drink_type: "classic cocktail", img: "gimlet.jpg", description: "A gimlet is a classic gin cocktail with lime that is said to help prevent scurvy.", recipe: ["2.5 oz gin", "0.5 oz lime juice", "0.5 oz simple syrup", <br />, "Add everything to a shaker with ice", "Shake until chilled", "Strain into a cocktail glass", "Garnish with a lime wheel"] },
                { name: "Sazerac", base_spirit: "whiskey", drink_type: "classic cocktail", img: "sazerac.jpg", description: "A sazerac is a classic cocktail based on another classic: the old fashioned", recipe: ["2.5 oz rye whiskey", "1 tsp sugar", "2 dashes Peychaud's Bitters", "1 dash Angostura Bitters", "lemon peel", <br />, "Muddle the sugar with water in an old fashioned glass", "Add ice, whiskey and the bitters and stir well", "Garnish with the lemon peel"] },
                { name: "Pimm's Cup", base_spirit: "pimm's", drink_type: "classic cocktail", img: "pimms-cup.jpg", description: "Pimm's cup is a classic cocktail that has been enjoyed at many a summertime British party.", recipe: ["2 oz rye Pimm's No. 1", "3 oz ginger ale", "1 cucumber slice", "1 lemon slice", "1 orange slice", <br />, "Add all ingredients to a highball glass", "Stir to combine"] },
                { name: "Sidecar", base_spirit: "cognac", drink_type: "classic cocktail", img: "sidecar.jpg", description: "The Sidecar is a rich and strong cognac cocktail with a contested origin story in New Orleans.", recipe: ["1.5 oz Cognac", "0.75 oz Cointreau", "0.75 oz lemon juice", <br />, "Add all ingredients to a shaker with ice and shake", "Strain into a coupe glass", "Garnish with an orange twist"] },
                { name: "Mint Julep", base_spirit: "bourbon", drink_type: "classic cocktail", img: "mint-julep.jpg", description: "The mint julep is a classic bourbon cocktail well known as the premier drink of the Kentucky Derby.", recipe: ["2 oz bourbon", "0.25 oz simple syrup", "0.75 oz lemon juice", <br />, "In a rocks glass, muddle the mint and syrup", "Add the bourbon and crushed ice", "Stir until chilled", "Garnish with more mint leaves"] },
                { name: "French 75", base_spirit: "gin", drink_type: "classic cocktail", img: "french75.jpg", description: "The French 75 is a classic gin cocktail with champagne that is perfect for a light brunch.", recipe: ["1 oz gin", "3 oz champagne", "0.5 oz simple syrup", "0.5 oz lemon juice", <br />, "Add all ingredients, save the champagne, to a shaker with ice and shake", "Strain into a champagne glass", "Top with the champagne", "Garnish with a lemon twist"] },
                { name: "Martini", base_spirit: "gin", drink_type: "classic cocktail", img: "martini.jpg", description: "The Martini is a quintessential gin cocktail commonly associated with socialites and fine dining.", recipe: ["3 oz gin", "0.5 oz Dry Vermouth", "3-4 pimento green olives", <br />, "Add gin and vermouth to a shaker with ice and shake", "Strain into a cocktail glass", "Garnish with olives"] },
                { name: "Daiquiri", base_spirit: "rum", drink_type: "classic cocktail", img: "daiquiri.jpg", description: "The Daiquiri is a light rum cocktail that is quite unlike its frozen cousin.", recipe: ["2 oz light rum", "1 oz lime juice", "0.5 oz simple syrup", <br />, "Add all ingredients to a shaker with ice and shake", "Strain into a cocktail glass", "Garnish with a lime wheel"] },
                { name: "Dark 'n Stormy", base_spirit: "rum", drink_type: "classic cocktail", img: "dark-n-stormy.jpg", description: "The Dark 'n Stormy is a delightful rum cocktail that conjures images of pirates and the open seas.", recipe: ["2 oz dark rum", "5 oz ginger beer", "1 lime wedge", <br />, "Add ice to a highball glass then the rum", "Add the ginger beer and lightly stir", "Garnish with a lime wedge"] },
                { name: "Martinez", base_spirit: "gin", drink_type: "classic cocktail", img: "martinez.jpg", description: "The Martinez is a gin cocktail that is part Manhattan, part Martini and full tasty.", recipe: ["1.5 oz gin", "1.5 oz sweet vermouth", "1 tsp Maraschino liqueur", "2 dashes orange bitters", "orange peel twist", <br />, "Add liquid ingredients to mixing glass with ice", "Stir gently until chilled", "Strain into a cocktail glass", "Garnish with an orange peel twist"] },
                { name: "Dry Martini", base_spirit: "gin", drink_type: "classic cocktail", img: "dry-martini.jpg", description: "The Dry Martini is a classic gin cocktail with routes in the middle of the 19th century.", recipe: ["2.5 oz gin", "0.5 oz dry vermouth", "1 dash orange bitters", "lemon twist", <br />, "Add liquid ingredients to mixing glass with ice", "Stir gently until chilled", "Strain into a cocktail glass", "Garnish with a lemon twist"] },
                { name: "Espresso Martini", base_spirit: "vodka", drink_type: "classic cocktail", img: "espresso-martini.jpg", description: "The Espresso Martini is a modern classic cocktail that mixes two vices into one great drink.", recipe: ["2 oz vodka", "0.5 oz simple syrup", "0.5 coffee liqueur", "1 oz espresso", <br />, "Add all ingredients to shaker with ice", "Shake until chilled", "Strain into a cocktail glass", "Garnish with a few coffee beans"] },
                { name: "White Russian", base_spirit: "vodka", drink_type: "classic cocktail", img: "white-russian.jpg", description: "The Dude abides by the White Russian: a creamy, sweet vodka cocktail.", recipe: ["2 oz vodka", "1 oz coffee liqueur", "1 oz heavy cream", <br />, "Add vodka and coffee liqueur to a rocks glass with ice", "Top with the heavy cream"] },
                { name: "Irish coffee", base_spirit: "whiskey", drink_type: "hot cocktail", img: "irish-coffee.jpg", description: "Irish Coffee is a rare cocktail that is good in the morning and night; both on a holiday and anytime.", recipe: ["1.5 oz Irish whiskey", "6 oz coffee", "2 tsp sugar", "whipped cream", <br />, "Add hot coffee and sugar to a mug, then stir to dissolve the sugar", "Add Irish whiskey and stir to mix", "Top with the whipped cream"] },
                { name: "Bamboo", base_spirit: "sherry", drink_type: "classic cocktail", img: "bamboo.jpg", description: "The Bamboo is a classic, underrated sherry cocktail that packs a punch.", recipe: ["1.5 oz dry sherry", "1.5 oz dry vermouth", "1 dash Angostura bitters", "1 dash orange bitters", <br />, "Add all ingredients to a mixing glass with ice", "Stir gently until chilled", "Strain into a coupe glass", "Garnish with a lemon twist"] },
                { name: "Gin-Gin Mule", base_spirit: "gin", drink_type: "classic cocktail", img: "gin-gin-mule.jpg", description: "The Gin-Gin mule is a twist on the classic Moscow Mule, swapping vodka out for gin.", recipe: ["1.5 oz gin", "0.5 oz lime juice", "4 oz ginger beer", "1 lime wedge", "ice cubes", <br />, "Pour the gin, lime juice, and ginger into a copper mug with ice", "Gently stir", "Garnish with the lime wedge"] },
                { name: "Long Island Iced Tea", base_spirit: "vodka", drink_type: "classic cocktail", img: "long-island-iced-tea.jpg", description: "The Long Island Iced Tea is well known as a very strong drink, replete with several different spirits.", recipe: ["0.75 oz vodka", "0.75 oz light rum", "0.75 oz silver tequila", "0.75 oz gin", "0.75 oz triple sec", "0.75 simple syrup", "0.75 lemon juice", "cola", <br />, "Pour all ingredients, save the cola into a highball glass with ice", "Top off the glass with cola", "Garnish with a lemon wedge"] },
                { name: "Vesper", base_spirit: "gin", drink_type: "classic cocktail", img: "vesper.jpg", description: "The Vesper is the cocktail of international man of mystery James Bond. Remember, \"shaken, not stirred.\"", recipe: ["3 oz gin", "1 oz vodka", "0.5 oz Lillet blanc aperitif", <br />, "Pour all ingredients into a shaker with ice", "Shake until chilled", "Strain into a cocktail glass", "Garnish with a lemon twist"] },
                { name: "Caipirinha", base_spirit: "cachaca", drink_type: "classic cocktail", img: "caipirinha.jpg", description: "The Caipirinha is a Brazilian drink that uses cachaca; a unique Brazilian spirit.", recipe: ["2 oz cachaca", "2 tsp sugar", "half a lime, in wedges", <br />, "In a rocks glass, muddle the sugar and limes", "Fill with ice and stir in the cachaca", "Garnish with a lime wheel"] },
                { name: "Tom Collins", base_spirit: "gin", drink_type: "classic cocktail", img: "tom-collins.jpg", description: "The Tom Collins is such a classic gin cocktail, the glass it comes in is named after the drink.", recipe: ["2 oz dry gin", "1 oz lemon juice", "0.5 oz simple syrup", "club soda", <br />, "Add gin, lemon juice, and simple syrup to a Collins glass with ice", "Top off with club soda", "Garnish with a lemon wheel and a maraschino cherry"] },
                { name: "Painkiller", base_spirit: "rum", drink_type: "novelty cocktail", img: "painkiller.jpg", description: "The Painkiller is a tropical and fruity cocktail with a rum base.", recipe: ["2 oz rum", "4 oz pineapple juice", "1 oz cream of coconut", "1 oz orange juice", <br />, "Add all ingredients to a shaker with ice and shake well", "Strain into a highball glass with ice", "Garnish with a pineapple wedge and nutmeg"] },
                { name: "Bee's Knees", base_spirit: "gin", drink_type: "classic cocktail", img: "bees-knees.jpg", description: "A classic gin cocktail packed with lemon and honey thats sure to leave you buzzed.", recipe: ["2 oz gin", "0.75 oz lemon juice", "0.25 oz honey", <br />, "Add all ingredients to a shaker with ice and shake well", "Strain into a cocktail glass", "Garnish with a lemon twist"] },
                { name: "Ramos Gin Fizz", base_spirit: "gin", drink_type: "classic cocktail", img: "ramos-gin-fizz.jpg", description: "A frothy gin cocktail with a unique texture and taste profile.", recipe: ["2 oz gin", "0.5 oz heavy cream", "0.5 oz lemon juice", "0.5 oz lime juice", "0.75 oz simple syrup", "3 dashes orange juice", "1 fresh egg white", "club soda", <br />, "Add all ingredients, save the club soda, to a shaker with ice and shake well", "Strain into a highball glass", "Top off with club soda"] },
                { name: "Bramble", base_spirit: "gin", drink_type: "classic cocktail", img: "bramble.jpg", description: "The Bramble is a wonderful gin cocktail that features the fresh taste of blackberries.", recipe: ["2 oz gin", "1 oz lemon juice", "2 tsp simple syrup", "0.5 oz creme de mure", <br />, "Add all ingredients, save the creme de mure, to a shaker with ice and shake well", "Strain into a rocks glass with ice", "Top off with the creme de mure", "Garnish with a blackberry"] },
                { name: "Vodka Martini", base_spirit: "vodka", drink_type: "classic cocktail", img: "vodka-martini.jpg", description: "The Vodka Martini essentially is just the classic martini with a vodka substitution.", recipe: ["3 oz vodka", "1 oz dry vermouth", "1 cup ice cubes", "3 olives", <br />, "Add all ingredients, save the olives, to a mixing glass and stir until chilled", "Strain into a cocktail glass", "Garnish with three olives on a toothpick"] },
                { name: "Hanky Panky", base_spirit: "gin", drink_type: "classic cocktail", img: "hanky-panky.jpg", description: "The Hanky Panky is a strong gin cocktail with a risque name.", recipe: ["1.5 oz gin", "1.5 oz sweet vermouth", "2 dashes Fernet-Branca", <br />, "Add all ingredients to a mixing glass with ice and stir until chilled", "Strain into a cocktail glass", "Garnish with an orange twist"] },
                { name: "Jungle Bird", base_spirit: "rum", drink_type: "classic cocktail", img: "jungle-bird.jpg", description: "The Jungle Bird is a tiki drink with lovely tropical and fruity flavors with a rum backbone.", recipe: ["1.5 oz dark rum", "0.75 oz Campari", "0.5 oz simple syrup", "1.5 oz pineapple juice", "0.5 lime juice", <br />, "Add all ingredients to a shaker with ice and shake until chilled", "Strain into a rocks glass", "Garnish with a pineapple wedge"] },
                { name: "White Lady", base_spirit: "gin", drink_type: "classic cocktail", img: "white-lady.jpg", description: "The White Lady is a delicate looking drink with a strong gin kick.", recipe: ["2 oz gin", "0.5 oz orange liqueur", "0.5 oz lemon juice", "1 egg white", <br />, "Add all ingredients to a shaker with ice and shake until chilled", "Strain into a cocktail glass"] },
                { name: "Vieux Carre", base_spirit: "whiskey", drink_type: "classic cocktail", img: "vieux-carre.jpg", description: "The Vieux Carre is a decadent whiskey drink with vermouth and lots of bitters.", recipe: ["0.75 oz rye whiskey", "0.75 cognac", "0.75 sweet vermouth", "0.5 tsp Benedictine", "1 dash Angostura bitters", "1 dash Peychaud's bitters", <br />, "Add all ingredients to a mixing glass with ice and stir until chilled", "Strain into a cocktail glass", "Garnish with a cherry"] },
                { name: "Aviation", base_spirit: "gin", drink_type: "classic cocktail", img: "aviation.jpg", description: "The Aviation is a purple hued gin drink that will leave you flying high.", recipe: ["2 oz gin", "0.5 oz Maraschino liqueur", "0.25 creme de violette", "0.75 oz lemon juice", <br />, "Add all ingredients to a shaker with ice and shake until chilled", "Strain into a cocktail glass", "Garnish with a brandied cherry"] },
                { name: "Pina Colada", base_spirit: "rum", drink_type: "blended cocktail", img: "pina-colada.jpg", description: "The Pina Colada is the classic frozen cocktail that will remind you of the beach.", recipe: ["8 oz white rum", "6 oz cream of coconut", "2 oz unsweetened coconut milk", "2 tbsp lime juice", "maraschino cherries", <br />, "Freeze the pineapple solid", "Add all ingredients to a blender and blend until smooth", "Divide into 4 glasses", "Garnish with a cherry and pineapple wedge"] },
                { name: "Amaretto Sour", base_spirit: "amaretto", drink_type: "classic cocktail", img: "amaretto-sour.jpg", description: "The Amaretto Sour is a classic and simple cocktail that substitutes amaretto in place of bourbon.", recipe: ["1.5 oz amaretto", "1.5 oz sweet and sour mix", "Lime soda", <br />, "Mix the amaretto and sweet and sour mix into a rocks glass with ice", "Top with lime soda", "Garnish with a cherry"] },
                { name: "Pisco Sour", base_spirit: "pisco", drink_type: "classic cocktail", img: "pisco-sour.jpg", description: "The Pisco Sour is a classic and simple cocktail that substitutes pisco in place of bourbon.", recipe: ["2 oz Pisco", "1 oz lime juice", "0.5 oz simple syrup", "1 egg white", <br />, "Add all ingredients to a shaker with ice and shake until chilled", "Strain into a rocks glass with ice", "Garnish with 3 drops of bitters"] },
                { name: "Americano", base_spirit: "campari", drink_type: "classic cocktail", img: "americano.jpg", description: "The Americano is a classic cocktail with a deep red color and fizzy texture.", recipe: ["1.5 oz Campari", "1.5 oz sweet vermouth", "club soda", <br />, "Add Campari and vermouth to a highball glass with ice", "Top with club soda", "Garnish with an orange peel"] },
                { name: "Mai Tai", base_spirit: "rum", drink_type: "classic cocktail", img: "americano.jpg", description: "The Americano is a classic cocktail with a deep red color and fizzy texture.", recipe: ["1.5 oz Campari", "1.5 oz sweet vermouth", "club soda", <br />, "Add Campari and vermouth to a highball glass with ice", "Top with club soda", "Garnish with an orange peel"] },
            ];

        var subset = drinkSet.filter((drink) => {
            var reducedName = drink.name.toLowerCase();
            return reducedName.includes(this.state.searchText.toLowerCase(), 0);
        })

        var spiritFilter = [];
        var typeFilter = [];

        if (this.state.rumToggle === true) {
            var rumFilter = [];
            rumFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "rum";
                return reducedType.includes(filterString, 0);
            })
            rumFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.ginToggle === true) {
            var ginFilter = [];
            ginFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "gin";
                return reducedType.includes(filterString, 0);
            })
            ginFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.scotchToggle === true) {
            var scotchFilter = [];
            scotchFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "scotch";
                return reducedType.includes(filterString, 0);
            })
            scotchFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.tequilaToggle === true) {
            var tequilaFilter = [];
            tequilaFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "tequila";
                return reducedType.includes(filterString, 0);
            })
            tequilaFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.vodkaToggle === true) {
            var vodkaFilter = [];
            vodkaFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "vodka";
                return reducedType.includes(filterString, 0);
            })
            vodkaFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }


        if (this.state.whiskeyToggle === true) {
            var whiskeyFilter = [];
            whiskeyFilter = subset.filter(drink => {
                var reducedType = drink.base_spirit.toLowerCase().split()[0];
                var filterString = "whiskey";
                return reducedType.includes(filterString, 0);
            })
            whiskeyFilter.forEach(object => {
                spiritFilter.push(object);
            })
        }

        if (this.state.blendedToggle === true) {
            var blendedFilter = [];
            blendedFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "blended";
                return reducedType.includes(filterString, 0);
            })
            blendedFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.classicToggle === true) {
            var classicFilter = [];
            classicFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "classic";
                return reducedType.includes(filterString, 0);
            })
            classicFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.hotToggle === true) {
            var hotFilter = [];
            hotFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "hot";
                return reducedType.includes(filterString, 0);
            })
            hotFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.holidayToggle === true) {
            var holidayFilter = [];
            holidayFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "holiday";
                return reducedType.includes(filterString, 0);
            })
            holidayFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.noveltyToggle === true) {
            var noveltyFilter = [];
            noveltyFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "novelty";
                return reducedType.includes(filterString, 0);
            })
            noveltyFilter.forEach(object => {
                typeFilter.push(object);
            })
        }


        if (this.state.shotsToggle === true) {
            var shotsFilter = [];
            shotsFilter = subset.filter(drink => {
                var reducedType = drink.drink_type.toLowerCase().split()[0];
                var filterString = "shots";
                return reducedType.includes(filterString, 0);
            })
            shotsFilter.forEach(object => {
                typeFilter.push(object);
            })
        }

        if (this.state.ginToggle === false && this.state.rumToggle === false && this.state.tequilaToggle === false &&
            this.state.scotchToggle === false && this.state.vodkaToggle === false && this.state.whiskeyToggle === false &&
            this.state.shotsToggle === false && this.state.noveltyToggle === false && this.state.holidayToggle === false &&
            this.state.hotToggle === false && this.state.classicToggle === false && this.state.blendedToggle === false) {
            console.log("ONLY THE SEARCH VALUE IS BEING FILTERED");
            return subset;
        }

        else if (
            (this.state.shotsToggle === false && this.state.noveltyToggle === false && this.state.holidayToggle === false &&
                this.state.hotToggle === false && this.state.classicToggle === false && this.state.blendedToggle === false) &&
            (this.state.ginToggle === true || this.state.rumToggle === true || this.state.tequilaToggle === true ||
                this.state.scotchToggle === true || this.state.vodkaToggle === true || this.state.whiskeyToggle === true)) {
            console.log("ONLY SPIRITS BEING FILTERED");
            return spiritFilter;
        }

        else if ((this.state.ginToggle === false && this.state.rumToggle === false && this.state.tequilaToggle === false &&
            this.state.scotchToggle === false && this.state.vodkaToggle === false && this.state.whiskeyToggle === false) &&
            (this.state.shotsToggle === true || this.state.noveltyToggle === true || this.state.holidayToggle === true ||
                this.state.hotToggle === true || this.state.classicToggle === true || this.state.blendedToggle === true)) {
            console.log("ONLY TYPES BEING FILTERED")
            return typeFilter;
        }


        else {

            console.log("DOUBLE FILTER");
            if (typeFilter.length >= spiritFilter.length) {
                var doubleFilter = typeFilter.filter(typeObject => {
                    var match = false;
                    spiritFilter.forEach(spiritObject => {
                        if (typeObject.name.includes(spiritObject.name))
                            match = true;
                    });
                    return match;
                })
                return doubleFilter;
            }

            else {
                var doubleFilter = spiritFilter.filter(spiritObject => {
                    var match = false;
                    typeFilter.forEach(typeObject => {
                        if (spiritObject.name.includes(typeObject.name))
                            match = true;
                    });
                    return match;
                })
                return doubleFilter;
            }
        }
    }



    spiritOpen(e) {
        e.target.trigger = "Filter By Spirits -";
    }

    spiritClose(e) {
        e.target.trigger = "Filter By Spirits +";
    }

    rumState(e) {
        e.preventDefault();
        if (this.state.rumToggle === false) {
            this.setState({ rumToggle: true });
            this.setState({ rumClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ rumToggle: false });
            this.setState({ rumClassname: "button small" })
        }

        console.log(this.state.rumToggle);
    }

    ginState(e) {
        e.preventDefault();
        if (this.state.ginToggle === false) {
            this.setState({ ginToggle: true });
            this.setState({ ginClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ ginToggle: false });
            this.setState({ ginClassname: "button small" })
        }

        console.log(this.state.ginToggle);
    }

    scotchState(e) {
        e.preventDefault();
        if (this.state.scotchToggle === false) {
            this.setState({ scotchToggle: true });
            this.setState({ scotchClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ scotchToggle: false });
            this.setState({ scotchClassname: "button small" })
        }

        console.log(this.state.scotchToggle);
    }

    tequilaState(e) {
        e.preventDefault();
        if (this.state.tequilaToggle === false) {
            this.setState({ tequilaToggle: true });
            this.setState({ tequilaClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ tequilaToggle: false });
            this.setState({ tequilaClassname: "button small" })
        }

        console.log(this.state.tequilaToggle);
    }

    vodkaState(e) {
        e.preventDefault();
        if (this.state.vodkaToggle === false) {
            this.setState({ vodkaToggle: true });
            this.setState({ vodkaClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ vodkaToggle: false });
            this.setState({ vodkaClassname: "button small" })
        }

        console.log(this.state.vodkaToggle);
    }

    whiskeyState(e) {
        e.preventDefault();
        if (this.state.whiskeyToggle === false) {
            this.setState({ whiskeyToggle: true });
            this.setState({ whiskeyClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ whiskeyToggle: false });
            this.setState({ whiskeyClassname: "button small" })
        }

        console.log(this.state.whiskeyToggle);
    }

    blendedState(e) {
        e.preventDefault();
        if (this.state.blendedToggle === false) {
            this.setState({ blendedToggle: true });
            this.setState({ blendedClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ blendedToggle: false });
            this.setState({ blendedClassname: "button small" })
        }

        console.log(this.state.blendedToggle);
    }

    classicState(e) {
        e.preventDefault();
        if (this.state.classicToggle === false) {
            this.setState({ classicToggle: true });
            this.setState({ classicClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ classicToggle: false });
            this.setState({ classicClassname: "button small" })
        }

        console.log(this.state.classicToggle);
    }

    hotState(e) {
        e.preventDefault();
        if (this.state.hotToggle === false) {
            this.setState({ hotToggle: true });
            this.setState({ hotClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ hotToggle: false });
            this.setState({ hotClassname: "button small" })
        }

        console.log(this.state.hotToggle);
    }

    holidayState(e) {
        e.preventDefault();
        if (this.state.holidayToggle === false) {
            this.setState({ holidayToggle: true });
            this.setState({ holidayClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ holidayToggle: false });
            this.setState({ holidayClassname: "button small" })
        }

        console.log(this.state.holidayToggle);
    }

    noveltyState(e) {
        e.preventDefault();
        if (this.state.noveltyToggle === false) {
            this.setState({ noveltyToggle: true });
            this.setState({ noveltyClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ noveltyToggle: false });
            this.setState({ noveltyClassname: "button small" })
        }

        console.log(this.state.noveltyToggle);
    }


    shotsState(e) {
        e.preventDefault();
        if (this.state.shotsToggle === false) {
            this.setState({ shotsToggle: true });
            this.setState({ shotsClassname: "button small selectedFilter" });
        }

        else {
            this.setState({ shotsToggle: false });
            this.setState({ shotsClassname: "button small" })
        }

        console.log(this.state.shotsToggle);
    }

    searchResultsBox() {
        if (this.state.searchText === "") {
            return (<div />);
        }
        return (
            <div>
                <header className="major" id="home-header">
                    <h3>Search Results</h3>
                </header>
                <div className="row no-collapse-1">

                    <Card route="/drinks/example" image_src="images/alcoholic_drinks/gin_drinks/gin-drinks.jpg" title="Gin Drinks" />
                    <Card route="/drinks/example" image_src="images/alcoholic_drinks/rum_drinks/rum-drinks.jpg" title="Rum Drinks" />
                    <Card route="/drinks/example" image_src="images/alcoholic_drinks/scotch_drinks/scotch-drinks.jpg" title="Scotch Drinks" />

                </div>
            </div>
        )
    }


    componentDidMount() {
        //console.log(this.state.scotchClassName);
        //console.log(this.state.tequilaClassName);
        //let doodoo = this.filterDrinks();
        //console.log(doodoo[0].name);
    }

    createTable() {
        var table = [];
        var drinkSet = this.filterDrinks();

        var ctr = 0;
        // Outer loop to create parent
        for (var i = 0; i < drinkSet.length / 3; i++) {
            var children = [];
            //Inner loop to create children
            for (var j = 0; j < 3 && ctr < drinkSet.length; j++) {
                children.push(<Card
                    route={"/drinks/" + drinkSet[ctr].name}
                    image_src={"../../images/alcoholic_drinks/"+ drinkSet[ctr].base_spirit+"_drinks/"+drinkSet[ctr].img}
                    title={drinkSet[ctr].name}
                />);

                ctr++;
            }
            //Create the parent and add the children
            table.push(<div className="row no-collapse-1">{children}</div>);
        }
        return table
    }

    render() {

        return (
            <div>
                <div className="wrapper style1">
                    <div className="container" id="search-box">
                        <section>
                            <header className="major">
                                <h2>The Drinksly</h2>
                                <span className="byline">Find yours here</span>
                            </header>
                            <form className="centered" id="home-form">
                                <div className="row half">
                                    <div className="12u">
                                        <input className="text" type="text" name="homeSearch" placeholder="Search Drinks..." value={this.state.searchText} onChange={this.setSearch} />
                                    </div>
                                </div>
                                <div className="row half">
                                    <section className="6u">
                                        <Collapsible trigger="Filter By Spirits +" triggerWhenOpen={"Filter By Spirits -"}>

                                            <button className={this.state.rumClassname} onClick={this.rumState}>Rum</button>

                                            <button className={this.state.ginClassname} onClick={this.ginState}>Gin</button>

                                            <button className={this.state.scotchClassname} onClick={this.scotchState}>Scotch</button>

                                            <button className={this.state.tequilaClassname} onClick={this.tequilaState}>Tequila</button>

                                            <button className={this.state.vodkaClassname} onClick={this.vodkaState}>Vodka</button>

                                            <button className={this.state.whiskeyClassname} onClick={this.whiskeyState}>Whiskey</button>
                                        </Collapsible>
                                    </section>
                                    <section className="6u">
                                        <Collapsible trigger="Filter By Type +" triggerWhenOpen={"Filter By Type -"}>

                                            <button className={this.state.blendedClassname} onClick={this.blendedState}>Blended</button>

                                            <button className={this.state.classicClassname} onClick={this.classicState}>Classic</button>

                                            <button className={this.state.hotClassname} onClick={this.hotState}>Hot</button>

                                            <button className={this.state.holidayClassname} onClick={this.holidayState}>Holiday</button>

                                            <button className={this.state.noveltyClassname} onClick={this.noveltyState}>Novelty</button>

                                            <button className={this.state.shotsClassname} onClick={this.shotsState}>Shots</button>
                                        </Collapsible>
                                    </section>
                                </div>
                            </form>
                        </section>
                        {this.searchResultsBox()}
                    </div>

                    <div className="container" id="featured-drinks">
                        <header className="major" id="home-header">
                            <h2>Featured Drinks</h2>
                            <span className="byline">Try some of Drinkskly's most popular searches</span>
                        </header>
                    </div>
                    <div id="extra">
                        <div className="container">
                            {this.createTable()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;