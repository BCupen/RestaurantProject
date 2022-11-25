import loadHeader from './pageLoad';
import loadHomePage from './homePage';
import loadMenuPage from './menuPage';
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

menuButton.addEventListener('click', (e)=>{
    clearContent();
    loadMenuPage(content);
})

