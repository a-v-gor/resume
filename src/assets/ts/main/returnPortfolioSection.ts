import returnSection from '../common/returnSection';

import imgLouvre from '../../img/louvre_thumb.jpg';
import imgTunnel from '../../img/tunnel_thumb.jpg';
import imgNewYork from '../../img/NY_thumb.jpg';
import imgSkyHigh from '../../img/Sky-High_thumb.jpg';
import imgEiffelTower from '../../img/Eiffel-Tower_thumb.jpg';
import imgClouds from '../../img/clouds_thumb.jpg';

export default function returnPortfolioSection() {
  const portfolioSection = returnSection();
  portfolioSection.innerHTML = `
    <section class="section__wrapper article-block portfolio">
      <div class="section__header section__block article-block__header portfolio__header">
        <h2 class="article-block__title title">Portfolio</h2>
        <p class="article-block__subtitle text">Here it gets interesting.</p>
      </div>
      <div class="section__description section__block portfolio__description">
        <article class="portfolio__aritcle portfolio-article">
          <div class="portfolio-article__wrapper">
            <h3 class="portfolio-article__title title">Musée du Louvre</h3>
            <p class="portfolio-article__text text">Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <img src=${imgLouvre} alt="Musée du Louvre" class="portfolio-article__img">
        </article>
        <article class="portfolio__aritcle portfolio-article">
          <div class="portfolio-article__wrapper">
            <h3 class="portfolio-article__title title">Tunnel Effect</h3>
            <p class="portfolio-article__text text">Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <img src=${imgTunnel} alt="Tunnel Effect" class="portfolio-article__img">
        </article>
        <article class="portfolio__aritcle portfolio-article">
          <div class="portfolio-article__wrapper">
            <h3 class="portfolio-article__title title">New York, New York</h3>
            <p class="portfolio-article__text text">Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <img src=${imgNewYork} alt="New York" class="portfolio-article__img">
        </article>
        <article class="portfolio__aritcle portfolio-article">
          <div class="portfolio-article__wrapper">
            <h3 class="portfolio-article__title title">Sky High</h3>
            <p class="portfolio-article__text text">Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <img src=${imgSkyHigh} alt="Sky High" class="portfolio-article__img">
        </article>
        <article class="portfolio__aritcle portfolio-article">
          <div class="portfolio-article__wrapper">
            <h3 class="portfolio-article__title title">The Eiffel Tower</h3>
            <p class="portfolio-article__text text">Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <img src=${imgEiffelTower} alt="The Eiffel Tower" class="portfolio-article__img">
        </article>
        <article class="portfolio__aritcle portfolio-article">
          <div class="portfolio-article__wrapper">
            <h3 class="portfolio-article__title title">Reaching the Clouds</h3>
            <p class="portfolio-article__text text">Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <img src=${imgClouds} alt="Reaching the Clouds" class="portfolio-article__img">
        </article>
      </div>
    </section>`;
  return portfolioSection;
}
