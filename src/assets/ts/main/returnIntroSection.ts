import returnSection from '../common/returnSectionObject';

export default function returnIntroSection() {
  const sectionObj = returnSection({
    wrapperTag: 'article',
    wrapperClasses: ['article-block'],
    headerClasses: ['article-block__header'],
    title: 'О себе',
    subitle: 'Ключевые компетенции.',
  });
  sectionObj.description.innerHTML = `
    <p class="article-block__text">Начинающий front-end-разработчик. Хочу реализовать свой потенциал и приобретенные знания в продуктовой команде.</p>
    <p class="article-block__text">Fornt-end&nbsp;&ndash; относительно новая для меня сфера, куда я перехожу из смежной&nbsp;&ndash; системного администрирования. ИТ-бэкграунд и интерес к программированию позволили с легкостью получить красный диплом в <a class="article-block__link link" href="http://rgkript.ru/" target="_blank" class="article-block__link">РГКРиПТ</a> по специальности «техник-программист». Затем&nbsp;&ndash; курсы JS / Front-end от <a class="article-block__link link" href="https://rs.school/courses/" target="_blank" class="article-block__link">RSSchool</a>: <a class="article-block__link link" href="https://rs.school/courses/javascript-preschool" target="_blank" class="article-block__link">подготовительный</a> и <a class="article-block__link link" href="https://rs.school/courses/javascript-mentoring-program" target="_blank" class="article-block__link">основной</a>, где занял почетное 118-е&nbsp;место (к слову, всего на курс поступило около 8&nbsp;200&nbsp;человек, успешно закончили&nbsp;&ndash; 531).</p>
    <p class="article-block__text">Хорошее знание английского языка позволяет изучать документацию в оригинале и исправлять / уточнять / публиковать на русском языке: <a class="article-block__link link" href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout" target="_blank" class="article-block__link">статья на сайте mdn</a> (<a class="article-block__link link" href="https://github.com/mdn/translated-content/commit/57534ec7878cb97d33fff3173ca9d138bad4384d#diff-4b597b83b51827bfb8d612bf02c061810c70614513cae30f25ae1cd99ff486ce" target="_blank" class="article-block__link">ссылка на коммит</a>), <a class="article-block__link link" href="https://habr.com/ru/articles/768304/" target="_blank" class="article-block__link">статья</a> об использовании CSS.</p>
    <p class="article-block__text">За время обучения в RSSchool зарекомендовал себя как ответственный исполнитель и хороший командный игрок: отзывы опубликованы на странице <a class="article-block__link link" href="https://app.rs.school/cv/fb197dd1-e338-4171-9396-e96774f4f200" target="_blank" class="article-block__link">резюме</a> RSSchool.</p>`;
  return sectionObj.section;
}
