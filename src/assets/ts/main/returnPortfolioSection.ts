import returnSection from '../common/returnSection';

import imgPortfolio from '../../img/portfolio_thumb.jpg';
import imgMovieApp from '../../img/movie-app_thumb.jpg';
import returnElement from '../common/returnElement';

function returnPortfolioParagraph(): HTMLElement {
  const portfolioParagraph = returnElement({
    tag: 'p',
    classes: ['portfolio-article__text', 'text'],
  });
  return portfolioParagraph;
}

function returnPortfolioLink(link: string, text: string): HTMLElement {
  const portfolioLink = returnElement({
    tag: 'a',
    classes: ['portfolio-article__link', 'link'],
    attrib: [
      { name: 'href', value: link },
      { name: 'target', value: '_blank' },
    ],
    textContent: text,
  });
  return portfolioLink;
}

function returnArticle(
  title: string,
  description: string,
  deployLinkString: string,
  ghLinks: string[],
  tasks: string[],
  imgSrc: string,
  imgAlt: string
) {
  const article = returnElement({
    tag: 'article',
    classes: ['portfolio__aritcle', 'portfolio-article'],
  });
  const articleWrapper = returnElement({
    tag: 'div',
    classes: ['portfolio-article__wrapper'],
  });
  const articleTitle = returnElement({
    tag: 'h3',
    classes: ['portfolio-article__title', 'title'],
    textContent: title,
  });
  const descriptionParagraph = returnPortfolioParagraph();
  descriptionParagraph.textContent = description;
  const deployParagraph = returnPortfolioParagraph();
  const deployLink = returnPortfolioLink(deployLinkString, 'Деплой');
  deployParagraph.append(deployLink, '.');
  const ghParagraph = returnPortfolioParagraph();
  ghLinks.forEach((linkString: string, idx: number) => {
    let linkText = 'Github';
    if (ghLinks.length > 1) {
      linkText += ' ' + ++idx;
    }
    const link = returnPortfolioLink(linkString, linkText);
    ghParagraph.append(link, '. ');
  });
  const tasksParagraph = returnPortfolioParagraph();
  tasks.forEach((taskString: string, idx: number) => {
    let linkText = 'Задание';
    if (tasks.length > 1) {
      linkText += ' ' + ++idx;
    }
    const link = returnPortfolioLink(taskString, linkText);
    tasksParagraph.append(link, '. ');
  });
  const articleImg = returnElement({
    tag: 'img',
    classes: ['portfolio-article__img'],
    attrib: [
      { name: 'src', value: imgSrc },
      { name: 'alt', value: imgAlt },
    ],
  });

  articleWrapper.append(
    articleTitle,
    descriptionParagraph,
    deployParagraph,
    ghParagraph,
    tasksParagraph
  );
  article.append(articleWrapper, articleImg);
  return article;
}

export default function returnPortfolioSection() {
  const portfolioSection = returnSection();
  const sectionWrapper = returnElement({
    tag: 'section',
    classes: ['section__wrapper', 'article-block', 'portfolio'],
  });
  const sectionHeader = returnElement({
    tag: 'div',
    classes: [
      'section__header',
      'section__block',
      'article-block__header',
      'portfolio__header',
    ],
  });
  const sectionTitle = returnElement({
    tag: 'h2',
    classes: ['article-block__title', 'title'],
    textContent: 'Портфолио',
  });
  const sectionSubtitle = returnElement({
    tag: 'p',
    classes: ['article-block__subtitle', 'text'],
    textContent: 'Выполненные проекты.',
  });
  const sectionDescription = returnElement({
    tag: 'div',
    classes: [
      'section__description',
      'section__block',
      'portfolio__description',
    ],
  });
  const portfolioArticle = returnArticle(
    'Portfolio',
    'Адаптивный landing page с интерактивностью.',
    'https://a-v-gor.github.io/study-projects/portfolio/',
    [
      'https://github.com/a-v-gor/study-projects/tree/portfolio-part3',
      'https://github.com/a-v-gor/study-projects/tree/portfolio-video',
    ],
    [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/portfolio/portfolio.md',
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-3.md',
    ],
    imgPortfolio,
    'Printscreen portfolio landing page'
  );
  const movieAppArticle = returnArticle(
    'Поисковик по видео',
    'Информация о фильмах по запросу пользователя (API).',
    'https://a-v-gor.github.io/study-projects/movie-app/',
    ['https://github.com/a-v-gor/study-projects/tree/movie-app'],
    [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-6.md',
    ],
    imgMovieApp,
    'Printscreen movie application page'
  );

  sectionDescription.append(portfolioArticle, movieAppArticle);
  sectionHeader.append(sectionTitle, sectionSubtitle);
  sectionWrapper.append(sectionHeader, sectionDescription);
  portfolioSection.append(sectionWrapper);

  return portfolioSection;
}
