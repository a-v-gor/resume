import returnElement from '../common/returnElement';
import returnSectionObject from '../common/returnSectionObject';

function returnListItem(itemTitle: string, itemText: string) {
  const item = returnElement({
    tag: 'li',
    classes: ['ord-list__item', 'list__item'],
  });
  const article = returnElement({
    tag: 'article',
    classes: ['list__article'],
  });
  const title = returnElement({
    tag: 'h3',
    classes: ['ord-list__title', 'title'],
    textContent: itemTitle,
  });
  const text = returnElement({
    tag: 'p',
    classes: ['ord-list__text', 'text'],
    textContent: itemText,
  });

  article.append(title, text);
  item.append(article);
  return item;
}

export default function returnExpertiseSection() {
  const sectionObj = returnSectionObject({
    wrapperClasses: ['article-block'],
    headerClasses: ['article-block__header'],
    title: 'Компетенции',
    subitle: 'Профессиональные знания.',
  });
  const list = returnElement({
    tag: 'ol',
    classes: ['rticle-block__ol', 'ord-list', 'list'],
  });

  const itemHTML = returnListItem(
    'HTML/CSS',
    'Валидная семантическая верстка в соответствии с требованиями HTML5. Верстка по PixelPerfect. Использование Flexbox, Grid. Препроцессор SCSS. БЭМ. Адаптивная и отзывчивая верстка mobile-first / desktop-first.'
  );
  const itemJS = returnListItem(
    'JavaScript',
    'ES6. Типы данных, функции, объекты, классы, методы. Прототипы, наследование. Обработка ошибок. Замыкания. Промисы: fetch, async/await. Работа с DOM, события, жизненный цикл страницы. Модули. Web storage.'
  );
  const itemTS = returnListItem(
    'Typescript',
    'Базовые типы. Типы, интерфейсы. Дженерики. Объединения / пересечения типов. Избегание типа «any».'
  );
  const itemSoftware = returnListItem(
    'Программное обеспечение',
    'Visual Studio Code, Chrome DevTools, PixelPerfect, Figma, GIMP, Inkscape, Adobe Photoshop.'
  );
  const itemDevelop = returnListItem(
    'Средства разработки',
    'Webpack, Typescript, Eslint, Stylelint, Prettier, Husky, SASS.'
  );
  const itemTeam = returnListItem(
    'Работа в команде',
    'Agile-методология: Scrum, Kanban (Trello, Asana, GitHub Desktop).'
  );
  list.append(itemHTML, itemJS, itemTS, itemSoftware, itemDevelop, itemTeam);
  sectionObj.description.append(list);
  return sectionObj.section;
}
