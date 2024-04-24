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
    <p class="article-block__text">Начинающий front-end-разработчик без опыта работы. Хочу реализовать свой потенциал и приобретенные знания на должности разработчика.</p>
    <p class="article-block__text">Программированием я заинтересовался уже имея богатый опыт работы системным администратором. ИТ-бэкграунд, профессиональная переподготовка на инженера-программиста и повышенный интерес к новой сфере позволили с легкостью получить красный диплом в <a class="article-block__link link" href="http://rgkript.ru/" target="_blank" class="article-block__link">РГКРиПТ</a> по специальности «техник-программист». Затем&nbsp;– курсы JS / Front-end от <a class="article-block__link link" href="https://rs.school/courses/" target="_blank" class="article-block__link">RSSchool</a>: <a class="article-block__link link" href="https://rs.school/courses/javascript-preschool" target="_blank" class="article-block__link">подготовительный</a> и <a class="article-block__link link" href="https://rs.school/courses/javascript-mentoring-program" target="_blank" class="article-block__link">основной</a>, где занял 118-е&nbsp;место в списке студентов, успешно окончивших курс (к слову, всего на курс поступило около 8&nbsp;180&nbsp;человек).</p>
    <p class="article-block__text">Хорошее знание английского языка позволяет изучать документацию в оригинале и исправлять / уточнять / публиковать на русском языке: <a class="article-block__link link" href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout" target="_blank" class="article-block__link">статья на сайте mdn</a> (<a class="article-block__link link" href="https://github.com/mdn/translated-content/commit/57534ec7878cb97d33fff3173ca9d138bad4384d#diff-4b597b83b51827bfb8d612bf02c061810c70614513cae30f25ae1cd99ff486ce" target="_blank" class="article-block__link">ссылка на коммит</a>), <a class="article-block__link link" href="https://habr.com/ru/articles/768304/" target="_blank" class="article-block__link">статья</a> об использовании CSS.</p>
    <p class="article-block__text">Внимание к деталям позволяет выполнять работу качественно, а руководящий опыт помогает в командной работе: с одной стороны, четко понимать поставленную руководителем задачу и, с другой стороны, активно участвовать в работе команды. Отзывы обо мне опубликованы в на странице <a class="article-block__link link" href="https://app.rs.school/cv/fb197dd1-e338-4171-9396-e96774f4f200" target="_blank" class="article-block__link">резюме</a> RSSchool.</p>`;
  introHeader.append(introTitle, introSubtitle);
  introWrapper.append(introHeader, introDescription);
  sectionIntro.append(introWrapper);

  return sectionIntro;
}
