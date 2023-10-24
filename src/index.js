import './styles/index_style.css';
import home from './home.js';

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

function createDiv (arr, parentID) {
  const tempParent = document.getElementById(parentID);
  for (let i = 0; i < arr.length; i++) {
    let temp = document.createElement('div');
    temp.className = 'tab';
    temp.id = arr[i];
    temp.innerHTML = arr[i];
    tempParent.appendChild(temp);
   };
};

function navbar () {
  const navbar = document.createElement('nav');
  navbar.id = 'navbar'
  return navbar;
};

content.appendChild(navbar());
const navArr = ['home', 'menu', 'contact'];
createDiv(navArr, 'navbar');
content.appendChild(home());

