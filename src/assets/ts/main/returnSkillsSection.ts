import returnSection from '../common/returnSection';

export default function returnSkillsSection() {
  const skillsSection = returnSection();
  skillsSection.innerHTML = `
    <article class="section__wrapper article skills">
      <div class="section__header section__block article-block__header skills__header">
        <h2 class="article-block__title title">Skills</h2>
        <p class="article-block__subtitle text">Progress bars, anyone?</p>
      </div>
      <div class="section__description section__block skills__description">
        <ul class="article-block__ul unord-list list skills__list">
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">80</div>
            <label for="photoshop" class="item__label">Photoshop</label>
            <progress class="item__progress" id="photoshop" max="100" value="80"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">75</div>
            <label for="illustrator" class="item__label">Illustrator</label>
            <progress class="item__progress" id="illustrator" max="100" value="75"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">70</div>
            <label for="git" class="item__label">GIT</label>
            <progress class="item__progress" id="git" max="100" value="70"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">65</div>
            <label for="illustrator" class="item__label">After Effects</label>
            <progress class="item__progress" id="after-effects" max="100" value="65"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">90</div>
            <label for="scetch" class="item__label">Sketch</label>
            <progress class="item__progress" id="scetch" max="100" value="90"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">50</div>
            <label for="css3" class="item__label">CSS3 animation</label>
            <progress class="item__progress" id="css3" max="100" value="50"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">85</div>
            <label for="pagespeed" class="item__label">Pagespeed insights</label>
            <progress class="item__progress" id="pagespeed" max="100" value="85"></progress>
          </li>
          <li class="unord-list__item list__item item skills__item">
            <div class="item__percent">95</div>
            <label for="seo" class="item__label">SEO</label>
            <progress class="item__progress" id="seo" max="100" value="95"></progress>
          </li>
        </ul>
      </div>
    </article>`;
  return skillsSection;
}

//     <div class="section">

//     </div>
