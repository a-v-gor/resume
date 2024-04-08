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
    textContent: 'О себе',
  });
  const introSubtitle = returnElement({
    tag: 'p',
    classes: ['article-block__subtitle', 'text'],
    textContent: 'Ключевые компетенции.',
  });
  const introDescription = returnElement({
    tag: 'div',
    classes: ['section__description', 'section__block'],
  });
  introDescription.innerHTML = `
    <p class="article-block__text">Программированием заинтересовался уже имея богатый опыт работы системным администратором. В 2020 году с красным дипломом окончил <a href="http://rgkript.ru/" class="article-block__link">«Колледж радиоэлектроники, информационных и промышленных технологий»</a>. Изучение фронтенд-направления в веб-разработке привело  </p>
    <p class="article-block__text">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis.</p>
    `;
  introHeader.append(introTitle, introSubtitle);
  introWrapper.append(introHeader, introDescription);
  sectionIntro.append(introWrapper);

  return sectionIntro;
}
