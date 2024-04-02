import returnSection from '../common/returnSection';

export default function returnProfilesSection() {
  const profilesSection = returnSection();
  profilesSection.innerHTML = `
    <section class="section__wrapper article-block profiles">
      <div class="section__header section__block article-block__header profiles__header">
        <h2 class="article-block__title title">Profiles</h2>
        <p class="article-block__subtitle text">Busy as usual.</p>
      </div>
      <div class="section__description section__block profiles__description">
        <article class="profiles__aritcle profiles-article">
          <h3 class="profiles-article__title title">Themeforest</h3>
          <div class="profiles-article__icon"></div>
          <p class="profiles-article__text text">An overview of the themes and templates that I sell.</p>
        </article>
        <article class="profiles__aritcle profiles-article">
          <h3 class="profiles-article__title title">GitHub</h3>
          <div class="profiles-article__icon"></div>
          <p class="profiles-article__text text">All my open source projects for you analyze.</p>
        </article>
        <article class="profiles__aritcle profiles-article">
          <h3 class="profiles-article__title title">Medium</h3>
          <div class="profiles-article__icon"></div>
          <p class="profiles-article__text text">Yes. I'm also a blogger and here you find my writings.</p>
        </article>
        <article class="profiles__aritcle profiles-article">
          <h3 class="profiles-article__title title">Dribbble</h3>
          <div class="profiles-article__icon"></div>
          <p class="profiles-article__text text">Whenever a design is finalized, it lands right here.</p>
        </article>
        <article class="profiles__aritcle profiles-article">
          <h3 class="profiles-article__title title">Flickr</h3>
          <div class="profiles-article__icon"></div>
          <p class="profiles-article__text text">A selection of photos I shot throughout the years.</p>
        </article>
        <article class="profiles__aritcle profiles-article">
          <h3 class="profiles-article__title title">DeviantArt</h3>
          <div class="profiles-article__icon"></div>
          <p class="profiles-article__text text">A place for my sketches and drawings.</p>
        </article>
      </div>
    </section>`;
  return profilesSection;
}
