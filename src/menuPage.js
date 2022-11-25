const body = document.querySelector('body');

function createMenuDiv(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    menuDiv.classList.add('div-style');

    const menuHeading = document.createElement('h2');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = 'Our Menu';

    menuDiv.append(menuHeading);

    return menuDiv;    
}

function createAppetizerDiv(){
    const appetizerDiv = document.createElement('div');
    appetizerDiv.classList.add('appetizer');

    const appetizerHeading = document.createElement('h3');
    appetizerHeading.classList.add('appetizer-heading');
    appetizerHeading.textContent = 'Appetizers';

    const dishes = document.createElement('div');
    dishes.classList.add('dishes');
    
}

export default function loadMenuPage(contentElement){
    console.log('here');
    const menuDiv = createMenuDiv();
    contentElement.append(menuDiv);
    body.append(contentElement);
}