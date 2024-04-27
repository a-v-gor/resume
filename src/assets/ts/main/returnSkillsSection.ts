import returnSectionOld from '../common/returnSection-old';

export default function returnSkillsSection() {
  const skillsSection = returnSectionOld();
  skillsSection.innerHTML = `
    <article class="section__wrapper article skills">
      <div class="section__header section__block article-block__header skills__header">
        <h2 class="article-block__title title">Компетенции</h2>
        <p class="article-block__subtitle text">Профессиональные навыки.</p>
      </div>
      <div class="section__description section__block skills__description">
        <ul class="article-block__ul unord-list list skills__list">
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">90</div>
            <label for="html" class="item__label">HTML</label>
            <progress class="item__progress" id="html" max="100" value="90"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">50</div>
            <label for="css3" class="item__label">CSS3 animation</label>
            <progress class="item__progress" id="css3" max="100" value="50"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">65</div>
            <label for="css3" class="item__label">Typescript</label>
            <progress class="item__progress" id="css3" max="100" value="65"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">80</div>
            <label for="git" class="item__label">GIT</label>
            <progress class="item__progress" id="git" max="100" value="80"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">95</div>
            <label for="webpack" class="item__label">Webpack</label>
            <progress class="item__progress" id="webpack" max="100" value="95"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">90</div>
            <label for="seo" class="item__label">SEO</label>
            <progress class="item__progress" id="seo" max="100" value="90"></progress>
          </li>
        </ul>
      </div>
    </article>`;
  return skillsSection;
}
