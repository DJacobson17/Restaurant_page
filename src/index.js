const content = document.getElementById('content');

function createDiv (arr) {
  const navbar = document.getElementById('navbar');
 for (i = 0; i < arr.length; i++) {
  temp = document.createElement('div');
  temp.className = 'tab';
  temp.id = arr[i];
  temp.innerHTML = arr[i];
  navbar.appendChild(temp);
 };
};

function component () {
  const navbar = document.createElement('nav');
  navbar.id = 'navbar'
  return navbar;
};

content.appendChild(component());
navArr = ['home', 'about', 'contact'];
createDiv(navArr);
