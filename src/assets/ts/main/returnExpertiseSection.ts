import returnSection from '../common/returnSection';

export default function returnExpertiseSection() {
  const expertiseSection = returnSection();
  expertiseSection.innerHTML = `
    <section class="section__wrapper article-block">
      <div class="section__header section__block article-block__header">
        <h2 class="article-block__title title">Expertise</h2>
        <p class="article-block__subtitle text">Batman would be jealous.</p>
      </div>
      <div class="section__description section__block">
        <ol class="article-block__ol ord-list list">
          <li class="ord-list__item list__item">
            <article class="list__article">
              <h3 class="ord-list__title title">Advanced CSS</h3>
              <p class="ord-list__text text">Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
          </article>
            </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">Front-end design</h3>
              <p class="ord-list__text text">Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo.</p>
            </article>
            </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">Ruby on rails</h3>
              <p class="ord-list__text text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Vivamus vestibulum nulla cras ornare tristique elit nec ante.</p>
            </article>
          </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">Object-oriented PHP</h3>
              <p class="ord-list__text text">Morbi in sem quis dui placerat ornare. Ut aliquam sollicitudin leo. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras ante. Vivamus vestibulum nulla nec ante.</p>
            </article>
          </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">Wordpress</h3>
              <p class="ord-list__text text">Phasellus ultrices nulla quis nibh. Fusce lobortis lorem. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, sodales sit amet, nisi.</p>
            </article>
          </li>
          <li class="ord-list__item list__item">
            <article class="list__article ord-list__article">
              <h3 class="ord-list__title title">Javascript / Jquery</h3>
              <p class="ord-list__text text">Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.</p>
            </article>
          </li>
        </ol>
      </div>
    </section>`;
  return expertiseSection;
}
