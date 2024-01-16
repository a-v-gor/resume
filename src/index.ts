import img from './assests/svg/set-up-svgrepo-com.svg';
console.log('ok!');
console.log(img);


function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello, webpack';
  const image = new Image();
  image.src = img;
  
  element.append(image);

  return element;
}

document.body.appendChild(component());