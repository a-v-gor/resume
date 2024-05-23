import returnElement from '../common/returnElement';
import returnEvolutionItem from '../common/returnEvolutionItem';
import returnSectionObject from '../common/returnSectionObject';

export default function returnExperienceSection() {
  const experienceSectionObject = returnSectionObject({
    wrapperClasses: ['article-block', 'experience'],
    headerClasses: ['article-block__header', 'experience__header'],
    descriptionClasses: ['experience__description'],
    title: 'Опыт',
    subitle: 'Per aspera ad astra.',
    id: 'experience',
  });

  const list = returnElement({
    tag: 'ul',
    classes: [
      'article-block__ul',
      'unord-list',
      'list',
      'evolution-ul',
      'experience__ul',
    ],
  });

  const petProjectsItem = returnEvolutionItem(
    'Петпроекты',
    '2021 – Настоящее время',
    'Front-end-разработчик',
    'Ростов-на-Дону',
    'Применение на практике знаний, оттачивание навыков верстки. Применение новых стандартов, современных направлений в разработке веб-приложений.',
    false
  );
  const kmvItem = returnEvolutionItem(
    'ООО «КМВ-Сервис»',
    '2019 – Настоящее время',
    'Системный администратор',
    'Ростов-на-Дону',
    'Техническое обслуживание компьютерной и оргтехники. Работа с заявками пользователей на первой и второй линии техподдержки. Устранение аппаратных и программных неполадок на автоматизированных рабочих местах. Несложный ремонт электроники.',
    false
  );

  list.append(petProjectsItem, kmvItem);
  experienceSectionObject.description.append(list);
  return experienceSectionObject.section;
}
