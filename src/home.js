import './style.css';
import bigMac from './images/bigMacSalad.jpeg';

export default function home() {
  const element = document.createElement('div');
  element.classList.add('main');
  
  
  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = 'Jacobson Salads'
  
  const bigmac = new Image();
  bigmac.src = bigMac;

  element.appendChild(title);
  element.appendChild(bigmac);

  return element;

}