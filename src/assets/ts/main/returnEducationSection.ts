import returnElement from '../common/returnElement';
import returnEvolutionItem from '../common/returnEvolutionItem';
import returnSectionObject from '../common/returnSectionObject';

export default function returnEducationSection() {
  const educationSectionObject = returnSectionObject({
    wrapperClasses: ['article-block', 'education'],
    headerClasses: ['article-block__header', 'education__header'],
    descriptionClasses: ['education__description'],
    title: 'Образование',
    subitle: 'Scio me nihil scire.',
    id: 'education',
  });
  const list = returnElement({
    tag: 'ul',
    classes: [
      'article-block__ul',
      'unord-list',
      'list',
      'evolution-ul',
      'education__ul',
    ],
  });
  const rssMainItem = returnEvolutionItem(
    'Rolling Scopes School',
    '2023',
    'JS/Frontend Development Course.',
    'Дистанционно',
    'Git, GitHub, оформление коммитов и пулл реквестов. Адаптивная верстка. Core JS. Алгоритмические задачи. DOM, DOM Events, Browser API. Основы NodeJS. Webpack. TypeScript. Разработка UI-компонентов. Техническое интервью. Разработка в команде.',
    true
  );
  const rssPreItem = returnEvolutionItem(
    'Rolling Scopes School',
    '2022',
    'JS/Frontend-разработка. Подготовительный этап.',
    'Дистанционно',
    'Знакомство с системой контроля версий Git. Chrome Dev Tools, VS Code, Terminal. Основы HTML. Основы CSS. Знакомство с JavaScript. DOM API. DOM Events. Алгоритмы и Структуры Данных.',
    true
  );
  const rkriptItem = returnEvolutionItem(
    'Ростовский-на-Дону колледж радиоэлектроники, информационных и промышленных технологий',
    '2016 – 2020',
    'Программист',
    'Ростов-на-Дону',
    'Информационные технологии. Основы проектирования баз данных. Численные методы. Компьютерные сети. Менеджмент в профессиональной деятельности. Основы финансовой грамотности и предпринимательства. Компьютерная графика.',
    true
  );
  const kmidoItem = returnEvolutionItem(
    'Краснодарский многопрофильный институт дополнительного образования',
    '2019',
    'Инженер-программист',
    'Дистанционно',
    'Курс профессиональной переподготовки. Нормативно-правовое регулирование и законодательная база в сфере информационных и компьютерных технологий. Базовый английский язык для технической документации. Введение в программирование. Разработка Web-приложений на базе HTML5, CSS3, JavaScript.',
    true
  );

  list.append(rssMainItem, rssPreItem, rkriptItem, kmidoItem);
  educationSectionObject.description.append(list);
  return educationSectionObject.section;
}
