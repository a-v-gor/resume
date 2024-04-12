import returnSection from '../common/returnSection';

export default function returnExperienceSection() {
  const experienceSection = returnSection();
  experienceSection.innerHTML = `
    <section class="section__wrapper article-block experience">
      <div class="section__header section__block article-block__header experience__header">
        <h2 class="article-block__title title">Опыт</h2>
        <p class="article-block__subtitle text">Трудовой путь</p>
      </div>
      <div class="section__description section__block experience__description">
        <ul class="article-block__ul unord-list list evolution-ul experience__ul">
          <li class="unord-list__item list__item evolution-ul__item experience__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Саморазвитие</h3>
                <p class="article-li__period">2021 – Present</p>
                <p class="article-li__position">Front-end разработчик</p>
                <p class="article-li__location">Ростов-на-Дону, РФ</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Самообучение по программам RSSchool. Укрепил знания в HTML, CSS. Порлучил знания в JavaScript и Typescript. Получен опыт командной работы и взаимодействия методами Agile-методологии. Выполнен ряд проектов (см. раздел «Портфолио» ниже).</p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>`;
  return experienceSection;
}
