import returnElement from '../common/returnElement';
import returnSection from '../common/returnSection';

export default function returnIntroSection() {
  const sectionIntro = returnSection();
  const introWrapper = returnElement({
    tag: 'article',
    classes: ['section__wrapper', 'article-block'],
  });
  const introHeader = returnElement({
    tag: 'div',
    classes: ['section__header', 'section__block', 'article-block__header'],
  });
  const introTitle = returnElement({
    tag: 'h2',
    classes: ['article-block__title', 'title'],
    textContent: 'Intro',
  });
  const introSubtitle = returnElement({
    tag: 'p',
    classes: ['article-block__subtitle', 'text'],
    textContent: 'What I am all about.',
  });
  const introDescription = returnElement({
    tag: 'div',
    classes: ['section__description', 'section__block'],
  });
  introDescription.innerHTML = `
    <p class="article-block__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed <a href="#" class="article-block__link">pretium</a>, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis faucibus.</p>
    <p class="article-block__text">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis.</p>
    `;
  introHeader.append(introTitle, introSubtitle);
  introWrapper.append(introHeader, introDescription);
  sectionIntro.append(introWrapper);

  return sectionIntro;
}
