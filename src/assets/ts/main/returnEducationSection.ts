import returnSection from '../common/returnSection';

export default function returnEducationSection() {
  const educationSection = returnSection();
  educationSection.innerHTML = `
    <section class="section__wrapper article-block education">
      <div class="section__header section__block article-block__header education__header">
        <h2 class="article-block__title title">Education</h2>
        <p class="article-block__subtitle text">Lazy isn't in my vocabulary.</p>
      </div>
      <div class="section__description section__block education__description">
        <ul class="article-block__ul unord-list list evolution-ul education__ul">
          <li class="unord-list__item list__item evolution-ul__item education__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Webster Tech University</h3>
                <p class="article-li__period">2008 – 2010</p>
                <p class="article-li__position">Master of Computer Science</p>
                <p class="article-li__location">Miami, FL</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
              </div>
            </article>
          </li>
          <li class="unord-list__item list__item evolution-ul__item education__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Ninsei University</h3>
                <p class="article-li__period">2003 – 2008</p>
                <p class="article-li__position">Bachelor of Computer Science</p>
                <p class="article-li__location">Tokyo, Japan</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero.</p>
              </div>
            </article>
          </li>
          <li class="unord-list__item list__item evolution-ul__item education__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Academy Of Fine Arts</h3>
                <p class="article-li__period">2000 – 2003</p>
                <p class="article-li__position">Master of Arts</p>
                <p class="article-li__location">Berlin, Germany</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales.</p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>`;
  return educationSection;
}
