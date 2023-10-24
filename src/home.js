import './styles/home_style.css';
import bigMac from './images/bigMacSalad.jpeg';
import Rose from './images/dr_rose_jacobson.jpeg';

export default function home() {
  const element = document.createElement('div');
  element.classList.add('main');
  
  
  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = 'Jacobson Salads'
  

 

  const bigmac = new Image();
  bigmac.src = bigMac;
  bigmac.id = 'bigmac';


  
  const description = document.createElement('div');
  description.classList.add('description');
  description.innerHTML = "Salads is a family owned restaurant.  We believe that the only way to eat healthy is to eat salad. We've taken that concept to the next level. The problem has always been that some people don't like salads. Well, we're here to tell you that not everyone has tried our salads.  The key is in the ingredients.  Say you hate salads but love cheeseburgers, we simply make a cheeseburger and place it on a bed of lettuce. Boom, healthy cheeseburger salad!"
  
  const disclaimer = document.createElement('div');
  disclaimer.classList.add('disclaimer');
  disclaimer.innerHTML = "All of our salads are certified healthy by our resident nutritionalist Dr. Rose Jacobson. Who is definitely a doctor."
  
  const rose = new Image
  rose.src = Rose;
  rose.classList.add('rose');

  const dr = document.createElement('div');
  dr.classList.add('dr');

  dr.appendChild(rose);
  dr.appendChild(disclaimer);

  element.appendChild(title);
  element.appendChild(description);
  element.appendChild(bigmac);
  element.appendChild(dr);
  



  return element;

}