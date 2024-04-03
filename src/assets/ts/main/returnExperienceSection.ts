import returnSection from '../common/returnSection';

export default function returnExperienceSection() {
  const experienceSection = returnSection();
  experienceSection.innerHTML = `
    <section class="section__wrapper article-block experience">
      <div class="section__header section__block article-block__header experience__header">
        <h2 class="article-block__title title">Experience</h2>
        <p class="article-block__subtitle text">Yes. I've been around.</p>
      </div>
      <div class="section__description section__block experience__description">
        <ul class="article-block__ul unord-list list evolution-ul experience__ul">
          <li class="unord-list__item list__item evolution-ul__item experience__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Unicorn Incubator Inc.</h3>
                <p class="article-li__period">2015 – Present</p>
                <p class="article-li__position">Senior Interface Designer</p>
                <p class="article-li__location">Portland, OR</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
              </div>
            </article>
          </li>
          <li class="unord-list__item list__item evolution-ul__item experience__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">California Design Bureau</h3>
                <p class="article-li__period">2013 – 2015</p>
                <p class="article-li__position">Creative Director</p>
                <p class="article-li__location">Cupertino, CA</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.</p>
              </div>
            </article>
          </li>
          <li class="unord-list__item list__item evolution-ul__item experience__item">
            <article class="list__article article-li evolution-ul__article">
              <div class="article-li__header">
                <h3 class="article-li__title title">Dreamland Creative</h3>
                <p class="article-li__period">2010 – 2013</p>
                <p class="article-li__position">Front-end Designer</p>
                <p class="article-li__location">New York, NY</p>
              </div>
              <div class="article-li__body">
                <p class="article-li__text text">Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>`;
  return experienceSection;
}
