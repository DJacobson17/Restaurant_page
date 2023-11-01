import './styles/contact_style.css';
import Mordor from './images/Mordor.png';

export default function contact () {

  const element = document.createElement('div');
  element.classList.add('contactMain');

  const address = document.createElement('h2');
  address.innerHTML = '123 Sunshine Ln, Mount Doom, Mordor 60669';

  const phone = document.createElement('h2');
  phone.innerHTML = '(662) 847-6900';

  const mordor = new Image();
  mordor.src = Mordor;
  mordor.id = 'mordor';

  element.appendChild(address);
  element.appendChild(phone);
  element.appendChild(mordor);

  return element;

}