import './styles/index_style.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';


const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

function createDiv (arr, parentID, type) {
  const tempParent = document.getElementById(parentID);
  for (let i = 0; i < arr.length; i++) {
    let temp = document.createElement('div');
    temp.className = type;
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
const element = document.createElement('div');
element.id = 'main';
element.classList.add('main');

content.appendChild(navbar());
content.appendChild(element);
const navArr = ['home', 'menu', 'contact'];
createDiv(navArr, 'navbar', 'tab');
element.appendChild(home());

const homeTab = document.getElementById('home');
homeTab.addEventListener('click', () => {
  element.firstChild.remove();
  element.appendChild(home());
});
const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', () => {
  element.firstChild.remove();
  element.appendChild(menu());
});
const contactTab = document.getElementById('contact');
contactTab.addEventListener('click', () => {
  element.firstChild.remove();
  element.appendChild(contact());
});
