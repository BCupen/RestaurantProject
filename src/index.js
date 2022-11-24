import loadHeader from './pageLoad';
import loadHomePage from './homePage';
import './style.css';

const content = document.createElement('div');
content.setAttribute('id', 'content');

loadHeader();
loadHomePage(content);

