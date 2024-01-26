import img from './assests/svg/set-up-svgrepo-com.svg';
import housePng from './assests/img/house.png';
import './assests/scss/style.scss';

console.log('ok!');

// let a: any;
// a = 1;
// a = '1';
// console.log(a);

let b;
b = 1;
b = '1';
console.log(b);


function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello, webpack';
  const image = new Image();
  image.src = img;

  const houseImg = new Image();
  houseImg.src = housePng;

  image.classList.add('img');
  houseImg.classList.add('img');

  element.append(image, houseImg);

  return element;
}

document.body.appendChild(component());