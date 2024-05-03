import imgPortfolio from '../../img/proj-portfolio.jpg';
import imgShelter from '../../img/proj-shelter.jpg';
import imgMinesweeper from '../../img/proj-minesweeper.jpg';
import imgCssSlider from '../../img/proj-cssMemSlider.jpg';
import imgKeyboard from '../../img/proj-keyboard.png';
import imgMovieApp from '../../img/proj-movie-app.jpg';
import imgTicTacToe from '../../img/proj-tic-tac-toe.jpg';
import returnElement from '../common/returnElement';
import returnSectionObject from '../common/returnSectionObject';

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
  const portfolioSectionObject = returnSectionObject({
    wrapperClasses: ['article-block', 'portfolio'],
    headerClasses: [
      'section__header',
      'section__block',
      'article-block__header',
      'portfolio__header',
    ],
    descriptionClasses: ['portfolio__description'],
    title: 'Портфолио',
    subitle: 'Выполненные проекты.',
  });
  const portfolioArticle = returnArticle(
    'Portfolio',
    'Адаптивный landing page с интерактивностью.',
    'https://a-v-gor.github.io/study-projects/portfolio/',
    [
      'https://github.com/a-v-gor/study-projects/tree/portfolio',
      'https://github.com/a-v-gor/study-projects/tree/portfolio-video',
    ],
    [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/portfolio/portfolio.md',
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-3.md',
    ],
    imgPortfolio,
    'Printscreen portfolio landing page'
  );
  const cssSliderArticle = returnArticle(
    'CSS слайдер',
    'Слайдер на чистом CSS.',
    'https://a-v-gor.github.io/cssMemSlider/cssMemSlider/',
    ['https://github.com/a-v-gor/cssMemSlider'],
    [
      'https://github.com/rolling-scopes-school/tasks/tree/master/tasks/css-meme-slider',
    ],
    imgCssSlider,
    'Virtual keyboard application page'
  );
  const shelterArticle = returnArticle(
    'Shelter',
    'Адаптивный интерактивный сайт.',
    'https://a-v-gor.github.io/study-projects/shelter/pages/main/',
    ['https://github.com/a-v-gor/study-projects/tree/shelter'],
    [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/shelter/shelter.md',
    ],
    imgShelter,
    'Shelter application page'
  );
  const minesweeperArticle = returnArticle(
    'Сапер',
    'Игра «Сапер».',
    'https://a-v-gor.github.io/study-projects/minesweeper/',
    ['https://github.com/a-v-gor/study-projects/tree/minesweeper'],
    [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/minesweeper/README.md',
    ],
    imgMinesweeper,
    'Minesweeper application page'
  );
  const keyboardArticle = returnArticle(
    'Виртуальная клавиатура',
    'Виртуальная клавиатура.',
    'https://a-v-gor.github.io/virtual-keyboard/',
    ['https://github.com/a-v-gor/virtual-keyboard'],
    [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/virtual-keyboard/virtual-keyboard-en.md',
    ],
    imgKeyboard,
    'Virtual keyboard application page'
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
  const ticTacToeArticle = returnArticle(
    'Tic-tac-toe',
    'Игра «крестики-нолики».',
    'https://a-v-gor.github.io/study-projects/tic-tac-toe/',
    ['https://github.com/a-v-gor/study-projects/tree/tic-tac-toe'],
    [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-7.md',
    ],
    imgTicTacToe,
    'Tic-tac-toe page'
  );

  portfolioSectionObject.description.append(
    portfolioArticle,
    shelterArticle,
    minesweeperArticle,
    cssSliderArticle,
    keyboardArticle,
    movieAppArticle,
    ticTacToeArticle
  );

  return portfolioSectionObject.section;
}
