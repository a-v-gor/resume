import img from './assests/svg/set-up-svgrepo-com.svg';
import housePng from './assests/img/house.png';
console.log('ok!');


function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello, webpack';
  const image = new Image();
  image.src = img;

  const houseImg = new Image();
  houseImg.src = housePng;
  
  element.append(image, houseImg);

  return element;
}

document.body.appendChild(component());