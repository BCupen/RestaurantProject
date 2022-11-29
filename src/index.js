import loadHeader from './pageLoad';
import loadHomePage from './homePage';
import loadMenuPage from './menuPage';
import loadContactPage from './contactPage';
import './style.css';

const body = document.querySelector('body');
const content = document.createElement('div');
content.setAttribute('id', 'content');

function clearContent(){
    while(content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }
    navButtons.forEach(button =>{
        if(button.classList.contains('active'))
            button.classList.remove('active');
    })
    body.removeChild(body.lastChild);
}

loadHeader();
loadHomePage(content);


const menuButton = document.querySelector('.menu-button');
let homeMenuButton = document.querySelector('.welcome-menu-button');
const homeButton = document.querySelector('.home-button');
const contactButton = document.querySelector('.contact-button');
const nav = document.querySelector('nav');
const navButtons = nav.childNodes;

homeButton.classList.add('active');

menuButton.addEventListener('click', (e)=>{
    clearContent();
    e.target.classList.add('active');
    loadMenuPage(content);
});

homeMenuButton.addEventListener('click', (e)=>{
    clearContent();
    menuButton.classList.add('active')
    loadMenuPage(content);
});

homeButton.addEventListener('click', (e)=>{
    clearContent();
    e.target.classList.add('active');
    loadHomePage(content);
    homeMenuButton = document.querySelector('.welcome-menu-button');
    homeMenuButton.addEventListener('click', (e)=>{
        clearContent();
        menuButton.classList.add('active');
        loadMenuPage(content);
    });
});

contactButton.addEventListener('click', (e)=>{
    clearContent();
    e.target.classList.add('active');
    loadContactPage(content);
})

