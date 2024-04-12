import returnSection from '../common/returnSection';

export default function returnExpertiseSection() {
  const expertiseSection = returnSection();
  expertiseSection.innerHTML = `
    <section class="section__wrapper article-block">
      <div class="section__header section__block article-block__header">
        <h2 class="article-block__title title">Компетенции</h2>
        <p class="article-block__subtitle text">Профессиональные знания.</p>
      </div>
      <div class="section__description section__block">
        <ol class="article-block__ol ord-list list">
          <li class="ord-list__item list__item">
            <article class="list__article">
              <h3 class="ord-list__title title">HTML/CSS</h3>
              <p class="ord-list__text text">Валидная семантическая верстка в соответствии с требованиями HTML5. Верстка по PixelPerfect. Использование Flexbox, Grid. Препроцессор SCSS. БЭМ. Адаптивная и отзывчивая верстка mobile-first / desktop-first.</p>
          </article>
            </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">JavaScript</h3>
              <p class="ord-list__text text">ES6. Типы данных, функции, объекты, классы, методы. Прототипы, наследование. Обработка ошибок. Замыкания. Промисы: fetch, async/await. Работа с DOM, события, жизненный цикл страницы. Модули. Web storage.</p>
            </article>
            </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">Typescript</h3>
              <p class="ord-list__text text">Базовые типы. Типы, интерфейсы. Дженерики. Объединения / пересечения типов. Избегание типа 'any'.</p>
            </article>
          </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">Программное обеспечение</h3>
              <p class="ord-list__text text">Visual Studio Code, Chrome DevTools, PixelPerfect, Figma, GIMP, Inkscape, Adobe Photoshop.</p>
            </article>
          </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">Средства разработки</h3>
              <p class="ord-list__text text">Webpack, Typescript, Eslint, Stylelint, Prettier, Husky, SASS</p>
            </article>
          </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">Работа в команде</h3>
              <p class="ord-list__text text">Agile-методология: Scrum, Kanban (Trello, Asana, GitHub Desktop). </p>
            </article>
          </li>
        </ol>
      </div>
    </section>`;
  return expertiseSection;
}
