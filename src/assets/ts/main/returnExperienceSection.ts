import returnElement from '../common/returnElement';
import returnSectionObject from '../common/returnSectionObject';

function returnEvolutionItem(
  title: string,
  period: string,
  position: string,
  location: string,
  text: string
) {
  const item = returnElement({
    tag: 'li',
    classes: [
      'unord-list__item',
      'list__item',
      'evolution-ul__item',
      'experience__item',
    ],
  });
  const article = returnElement({
    tag: 'article',
    classes: ['list__article', 'article-li', 'evolution-ul__article'],
  });
  const header = returnElement({
    tag: 'div',
    classes: ['article-li__header'],
  });
  const articleTitle = returnElement({
    tag: 'h3',
    classes: ['article-li__title', 'title'],
    textContent: title,
  });
  const articlePeriod = returnElement({
    tag: 'p',
    classes: ['article-li__period'],
    textContent: period,
  });
  const articlePosition = returnElement({
    tag: 'p',
    classes: ['article-li__position'],
    textContent: position,
  });
  const articleLocation = returnElement({
    tag: 'p',
    classes: ['article-li__location'],
    textContent: location,
  });
  const body = returnElement({
    tag: 'div',
    classes: ['article-li__body'],
  });
  const articleText = returnElement({
    tag: 'p',
    classes: ['article-li__text', 'text'],
    textContent: text,
  });

  header.append(articleTitle, articlePeriod, articlePosition, articleLocation);
  body.append(articleText);
  article.append(header, body);
  item.append(article);
  return item;
}

export default function returnExperienceSection() {
  const experienceSectionObject = returnSectionObject({
    wrapperClasses: ['article-block', 'experience'],
    headerClasses: ['article-block__header', 'experience__header'],
    descriptionClasses: ['experience__description'],
    title: 'Опыт',
    subitle: 'Per aspera ad astra.',
  });

  const list = returnElement({
    tag: 'ul',
    classes: [
      'article-block__ul',
      'unord-list',
      'list',
      'evolution-ul',
      'experience__ul',
    ],
  });

  const petProjectsItem = returnEvolutionItem(
    'Петпроекты',
    '2021 – Настоящее время',
    'Front-end-разработчик',
    'Ростов-на-Дону',
    'Применение на практике знаний, оттачивание навыков верстки. Применение новых стандартов, современных направлений в разработке веб-приложений.'
  );
  const kmvItem = returnEvolutionItem(
    'ООО «КМВ-Сервис»',
    '2019 – Настоящее время',
    'Системный администратор',
    'Ростов-на-Дону',
    'Техническое обслуживание компьютерной и оргтехники. Работа с заявками пользователей на первой и второй линии техподдержки. Устранение аппаратных и программных неполадок на автоматизированных рабочих местах. Несложный ремонт электроники.'
  );

  list.append(petProjectsItem, kmvItem);
  experienceSectionObject.description.append(list);
  return experienceSectionObject.section;
}
