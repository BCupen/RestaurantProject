const body = document.querySelector('body');
const content = document.querySelector('#content');

function createHeader(){
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const pageHeading = document.createElement('h1');
    pageHeading.textContent = `Grammy's Kitchen`;

    header.append(pageHeading);

    const homeButton = document.createElement('button');
    homeButton.textContent =  'Home';
    homeButton.classList.add('home-button');;

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menu-button');

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact Us';
    contactButton.classList.add('contact-button');

    nav.append(homeButton, menuButton, contactButton);
    header.append(nav)
    return header;
}

export default function loadHeader(){
    const header = createHeader();
    body.insertAdjacentElement('afterbegin', header);
}