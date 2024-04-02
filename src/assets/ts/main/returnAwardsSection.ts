import returnSection from '../common/returnSection';

export default function returnAwardsSection() {
  const awardsSection = returnSection();
  awardsSection.innerHTML = `
    <section class="section__wrapper article-block awards">
      <div class="section__header section__block article-block__header awards__header">
        <h2 class="article-block__title title">Awards</h2>
        <p class="article-block__subtitle text">Happy times!</p>
      </div>
      <div class="section__description section__block awards__description">
        <article class="awards__aritcle awards-article">
          <h3 class="awards-article__title title">Unicorn Developer Award 2016</h3>
          <p class="awards-article__text text">Lorem ipsum dolor sit amet, justo eget porttitor mauris sit amet felis. Neque id cursus faucibus.</p>
        </article>
        <article class="awards__aritcle awards-article">
          <h3 class="awards-article__title title">Website of the Year Award 2015</h3>
          <p class="awards-article__text text">Praesent dapibus dolor sit amet, justo eget porttitor mauris sit amet. Neque id cursus faucibus.</p>
        </article>
        <article class="awards__aritcle awards-article">
          <h3 class="awards-article__title title">1st Place at CSShacker Conference</h3>
          <p class="awards-article__text text">Lorem ipsum dolor sit amet, justo eget porttitor mauris sit amet felis. Neque id cursus faucibus.</p>
        </article>
      </div>
    </section>`;
  return awardsSection;
}
