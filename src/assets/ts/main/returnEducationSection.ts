import returnSection from '../common/returnSection';

export default function returnEducationSection() {
  const educationSection = returnSection();
  educationSection.innerHTML = `
    <section class="section__wrapper article-block education">
      <div class="section__header section__block article-block__header education__header">
        <h2 class="article-block__title title">Образование</h2>
        <p class="article-block__subtitle text">Per aspera ad astra.</p>
      </div>
      <div class="section__description section__block education__description">
        <ul class="article-block__ul unord-list list evolution-ul education__ul">
          <li class="unord-list__item list__item evolution-ul__item education__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Rolling Scopes School</h3>
                <p class="article-li__period">2023</p>
                <p class="article-li__position">JS/Frontend Development Course.</p>
                <p class="article-li__location">Дистанционно</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Git, GitHub, оформление коммитов и пулл реквестов. Адаптивная верстка. Core JS. Алгоритмические задачи. DOM, DOM Events, Browser API. Основы NodeJS. Webpack.</p>
                <p class="article-li__text text">TypeScript. Разработка UI-компонентов. Техническое интервью. Разработка в команде.</p>
              </div>
            </article>
          </li>
          <li class="unord-list__item list__item evolution-ul__item education__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Rolling Scopes School</h3>
                <p class="article-li__period">2022</p>
                <p class="article-li__position">JS/Frontend-разработка. Подготовительный этап</p>
                <p class="article-li__location">Дистанционно</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Знакомство с системой контроля версий Git. Chrome Dev Tools, VS Code, Terminal. Основы HTML. Основы CSS. Знакомство с JavaScript. DOM API. DOM Events. Алгоритмы и Структуры Данных.</p>
              </div>
            </article>
          </li>
          <li class="unord-list__item list__item evolution-ul__item education__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Ростовский-на-Дону колледж радиоэлектроники, информационных и промышленных технологий</h3>
                <p class="article-li__period">2016 – 2020</p>
                <p class="article-li__position">Программист</p>
                <p class="article-li__location">Ростов-на-Дону</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Информационные технологии. Основы проектирования баз данных. Численные методы. Компьютерные сети. Менеджмент в профессиональной деятельности. Основы финансовой грамотности и предпринимательства. Компьютерная графика.</p>
              </div>
            </article>
          </li>
          <li class="unord-list__item list__item evolution-ul__item education__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Краснодарский многопрофильный институт дополнительного образования</h3>
                <p class="article-li__period">2019</p>
                <p class="article-li__position">Инженер-программист</p>
                <p class="article-li__location">Дистанционно</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Курс профессиональной переподготовки «Инженер-программист». Нормативно-правовое регулирование и законодательная база в сфере информационных и компьютерных технологий. Базовый английский язык для технической документации. Введение в программирование. Разработка Web-приложений на базе HTML5, CSS3, JavaScript.</p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>`;
  return educationSection;
}
