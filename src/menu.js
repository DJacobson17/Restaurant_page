import './styles/menu_style.css';
import Burger from './images/burgerSalad.png';
import Pizza from './images/pizzaSalad.png';
import Steak from './images/steakSalad.png';

const images = [Burger, Pizza, Steak];
const descriptions = [
  'Two all beef patties, one grilled chicken breast, bacon, cheese, lettuce, tomato, onion, pickle, and special sauce on a sesame seed bun, over lettuce',
  'Our hand-tossed crust topped with homemade pizza sauce, hand-shredded mozzarella cheese, topped with pepperoni made from caviar-fed pigs, over lettuce',
  '17oz. USDA Prime ribeye steak from the fields along the base of Mount Kilimanjaro over lettuce.'
];
const titles = [
  'Specialty Burger',
  'Pepperoni pizza',
  'Ribeye'
];



export default function menu () {

  const container = document.createElement('div');
  container.id = 'container';

    for (let i = 0; i < images.length; i++) {
      let temp = document.createElement('div');
      temp.classList.add('card');

      let tempTitle = document.createElement('h2');
      tempTitle.classList.add('cardTitle');
      tempTitle.innerHTML = titles[i];

      let tempInfo = document.createElement('p');
      tempInfo.classList.add('cardInfo');
      tempInfo.innerHTML = descriptions[i];

      let tempImg = new Image;
      tempImg.classList.add('cardImage');
      tempImg.src = images[i];

      temp.appendChild(tempTitle);
      temp.appendChild(tempImg);
      temp.appendChild(tempInfo);

      container.appendChild(temp);

     };

  return container
}