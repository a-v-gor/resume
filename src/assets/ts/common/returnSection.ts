import returnElement from './returnElement';

export default function returnSection() {
  const section = returnElement({
    tag: 'div',
    classes: ['section'],
  });
  return section;
}
