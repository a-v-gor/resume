import './assets/scss/style.scss';

console.log('ok!');

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello, webpack';

  return element;
}

document.body.appendChild(component());
