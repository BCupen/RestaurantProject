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
    body.removeChild(body.lastChild);
}

loadHeader();
loadHomePage(content);


const menuButton = document.querySelector('.menu-button');
let homeMenuButton = document.querySelector('.welcome-menu-button');
const homeButton = document.querySelector('.home-button');
const contactButton = document.querySelector('.contact-button');

menuButton.addEventListener('click', (e)=>{
    console.log(e.target);
    clearContent();
    loadMenuPage(content);
});

homeMenuButton.addEventListener('click', (e)=>{
    clearContent();
    loadMenuPage(content);
});

homeButton.addEventListener('click', (e)=>{
    clearContent();
    loadHomePage(content);
    homeMenuButton = document.querySelector('.welcome-menu-button');
    homeMenuButton.addEventListener('click', (e)=>{
        clearContent();
        loadMenuPage(content);
    });
});

contactButton.addEventListener('click', (e)=>{
    clearContent();
    loadContactPage(content);
})

