import returnElement from './returnElement';

function newElement() {
  return returnElement({ tag: 'div' });
}

const pageElements = {
  header: newElement(),
  skills: newElement(),
  footer: newElement(),
  themeBtn: newElement(),
  substrate: newElement(),
  menuCheckbox: returnElement({ tag: 'input' }),
  menuList: returnElement({ tag: 'ul' }),
  menuBtn: newElement(),
};

export { pageElements };
