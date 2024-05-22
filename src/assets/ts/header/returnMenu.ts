import { pageElements } from '../common/pageElements';
import returnElement from '../common/returnElement';

function returnMenu() {
  const menuWrapper = returnElement({
    tag: 'div',
    classes: ['menu', 'interactive'],
  });

  const menu = returnElement({
    tag: 'nav',
    classes: ['menu__nav'],
  });

  const inputMenu = returnElement({
    tag: 'input',
    classes: ['menu__input'],
    attrib: [
      { name: 'id', value: 'menu-input' },
      { name: 'type', value: 'checkbox' },
    ],
  });

  const themeBtn = returnElement({
    tag: 'div',
    classes: ['theme-btn'],
  });
  pageElements.themeBtn = themeBtn;
  menu.append(inputMenu);
  menuWrapper.append(menu, themeBtn);

  return menuWrapper;
}

export { returnMenu };
