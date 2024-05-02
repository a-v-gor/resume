import returnElement from './returnElement';

export default function returnEvolutionItem(
  title: string,
  period: string,
  position: string,
  location: string,
  text: string,
  isEducation: boolean
): HTMLElement {
  const itemClass = isEducation ? 'education__item' : 'experience__item';
  const item = returnElement({
    tag: 'li',
    classes: [
      'unord-list__item',
      'list__item',
      'evolution-ul__item',
      itemClass,
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
