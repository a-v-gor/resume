import { pageElements } from '../common/pageElements';
import returnElement from '../common/returnElement';

function returnMenuElement(link: string, description: string) {
  const itemAbout = returnElement({
    tag: 'li',
    classes: ['menu__item', 'interactive'],
  });

  const linkAbout = returnElement({
    tag: 'a',
    classes: ['menu__link', 'link'],
    attrib: [
      {
        name: 'href',
        value: `#${link}`,
      },
    ],
    textContent: description,
  });

  itemAbout.append(linkAbout);
  return itemAbout;
}

function returnMenu() {
  const menuWrapper = returnElement({
    tag: 'div',
    classes: ['menu'],
  });

  const menu = returnElement({
    tag: 'nav',
    classes: ['menu__nav'],
  });

  const inputCheckBox = returnElement({
    tag: 'input',
    classes: ['menu__input'],
    attrib: [
      { name: 'id', value: 'menu-input' },
      { name: 'type', value: 'checkbox' },
    ],
  });

  const burgerButton = returnElement({
    tag: 'label',
    classes: ['menu__label'],
    attrib: [
      {
        name: 'for',
        value: 'menu-input',
      },
    ],
  });

  const burgerIcon = returnElement({
    tag: 'span',
    classes: ['menu__icon'],
  });

  const navList = returnElement({
    tag: 'ul',
    classes: ['menu__list', 'menu-list'],
  });

  const itemIntro = returnMenuElement('about', 'О себе');
  const itemExpertise = returnMenuElement('expertise', 'Знания');
  const itemSkills = returnMenuElement('skills', 'Навыки');
  const itemExperience = returnMenuElement('experience', 'Опыт');
  const itemEducation = returnMenuElement('education', 'Образование');
  const itemPortfolio = returnMenuElement('portfolio', 'Портфолио');
  const itemContacts = returnMenuElement('contacts', 'Контакты');

  const themeBtn = returnElement({
    tag: 'div',
    classes: ['theme-btn', 'interactive'],
  });

  pageElements.themeBtn = themeBtn;
  navList.append(
    itemIntro,
    itemExpertise,
    itemSkills,
    itemExperience,
    itemEducation,
    itemPortfolio,
    itemContacts
  );
  burgerButton.append(burgerIcon);
  menu.append(inputCheckBox, burgerButton, navList);
  menuWrapper.append(menu, themeBtn);

  return menuWrapper;
}

export { returnMenu };
