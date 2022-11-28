const body = document.querySelector('body');

function createMenuDiv(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    menuDiv.classList.add('div-style');

    const menuHeading = document.createElement('h2');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = 'Our Menu';

    const appetizerDiv = createAppetizerDiv();
    const entreeDiv = createEntreeDiv();
    const dessertDiv = createDessertDiv();
    const drinkDiv = createDrinkDiv()

    menuDiv.append(menuHeading, appetizerDiv, entreeDiv, dessertDiv, drinkDiv);

    return menuDiv;    
}

function createAppetizerDiv(){
    const appetizerDiv = document.createElement('div');
    appetizerDiv.classList.add('appetizer');

    const appetizerHeading = document.createElement('h3');
    appetizerHeading.classList.add('heading');
    appetizerHeading.textContent = 'Appetizers';

    const dishes = document.createElement('div');
    dishes.classList.add('dishes');

    const dish1 = createDishDiv('Potato Skins', 35, 'Baked crispy, cheesy potato skins, topped with cheddar cheese, bacon, sour cream, and green onions.');
    const dish2 = createDishDiv('Jalapeño Poppers', 45, `Jalapeños wrapped in bacon and stuffed with sausage and cheese. They are as good as they look; spicy, cheesy, smokey and meaty.`);
    const dish3 = createDishDiv('Crab Cakes', 60, 'Made with fresh crab and bound with egg and mayo and coated in panko breadcrumbs. Served with tartar sauce and lemon');

    dishes.append(dish1, dish2, dish3);

    appetizerDiv.append(appetizerHeading, dishes);
    return appetizerDiv;    
}

function createEntreeDiv(){
    const entreeDiv = document.createElement('div');
    entreeDiv.classList.add('entree-div');

    const entreeHeading = document.createElement('h3');
    entreeHeading.classList.add('heading');
    entreeHeading.textContent = 'Entrees';

    const dishes = document.createElement('div');
    dishes.classList.add('dishes');

    const dish1 = createDishDiv('Baked Lobster Mac and Cheese', 145, `This lobster mac and cheese is ultra creamy macaroni with two types of cheese and plenty of chunks of lobster meat, all baked together to golden brown perfection.`);
    const dish2 = createDishDiv('Chicken Noodle Soup', 85, `There's nothing like homemade chicken noodle soup to warm you up from the inside out. Made with chopped chicken breasts, onions, celery, carrots with vermicelli noodles`);
    const dish3 = createDishDiv('Chicken and Waffles', 105, `Juicy fried chicken strips, drizzled with honey, served with warm, crisp buttermilk waffles`);
    const dish4 = createDishDiv('Deep Fried Steak', 125, `Deep fried flank steak served with mashed potatoes and steamed vegetables. Topped with Grammy's signature gravy`);

    dishes.append(dish1, dish2, dish3, dish4);
    entreeDiv.append(entreeHeading, dishes);

    return entreeDiv;
}

function createDessertDiv(){
    const dessertDiv = document.createElement('div');
    dessertDiv.classList.add('dessert-div');

    const dessertHeading = document.createElement('h3');
    dessertHeading.classList.add('heading');
    dessertHeading.textContent = `Desserts`;

    const dishes = document.createElement('div');
    dishes.classList.add('dishes');

    const dish1 = createDishDiv('Carrot Cake', 35, `Double layer homemade carrot cake, topped with cream cheese frosting and almonds`);
    const dish2 = createDishDiv('Hot Fudge Sundae', 45, `Three scoops of vanilla, strawberry and chocolate ice cream, topped with hot fudge, whipped cream and cherries`);
    const dish3 = createDishDiv('Banana Bread Pudding', 30, `Homemade banana bread pudding made, with chocolate chips and nuts, topped with a scoop of vanilla ice cream`);

    dishes.append(dish1, dish2, dish3);
    dessertDiv.append(dessertHeading, dishes);

    return dessertDiv;
}

function createDrinkDiv(){
    const drinkDiv = document.createElement('div');
    drinkDiv.classList.add('drink-div');

    const drinkHeading = document.createElement('h3');
    drinkHeading.classList.add('heading');
    drinkHeading.textContent = `Drinks`;

    const drinks = document.createElement('div');
    drinks.classList.add('dishes');

    const drink1 = createDishDiv('Soft Drink', 15, `Coke | Sprite | LLB`);
    const drink2 = createDishDiv('Water', 5);
    const drink3 = createDishDiv('Coffee', 20);
    const drink4 = createDishDiv('Milkshake', 30, 'Vanilla | Chocolate | Strawberry');
    const drink5 = createDishDiv('Juice', 10, `Orange | Apple | Pineapple`);

    drinks.append(drink1, drink2, drink3, drink4, drink5);
    drinkDiv.append(drinkHeading, drinks);

    return drinkDiv;
}

function createDishDiv(title, price, description=''){
    const formattedPrice = (Math.round(price * 100) / 100).toFixed(2);

    const dish = document.createElement('div');
    dish.classList.add('dish');

    const dishHeading = document.createElement('span');
    dishHeading.classList.add('dish-heading');
    const dishTitle = document.createElement('h4');
    dishTitle.textContent = title;
    const dishPrice = document.createElement('h4');
    dishPrice.textContent = `$${formattedPrice}`;
    dishHeading.append(dishTitle, dishPrice);

    const dishDesc = document.createElement('span');
    dishDesc.classList.add('dish-desc')
    dishDesc.textContent = description;

    dish.append(dishHeading, dishDesc);

    return dish;    
}

export default function loadMenuPage(contentElement){
    const menuDiv = createMenuDiv();
    contentElement.append(menuDiv);
    body.append(contentElement);
}