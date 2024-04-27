import returnElement from './returnElement';

export default function returnSectionOld() {
  const section = returnElement({
    tag: 'div',
    classes: ['section'],
  });
  return section;
}
