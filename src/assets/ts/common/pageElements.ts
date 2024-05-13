import returnElement from './returnElement';

function newElement() {
  return returnElement({ tag: 'div' });
}

const pageElements = {
  header: newElement(),
  skills: newElement(),
  footer: newElement(),
};

export { pageElements };
