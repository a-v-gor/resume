import { pageElements } from '../common/pageElements';
import returnElement from '../common/returnElement';
import returnSectionObject from '../common/returnSectionObject';

function returnSkillsItem(numPercent: string, id: string, labelString: string) {
  const item = returnElement({
    tag: 'li',
    classes: ['unord-list__item', 'list__item', 'item', 'skills__item'],
  });
  const percentBlock = returnElement({
    tag: 'div',
    classes: ['item__percent'],
    textContent: numPercent,
  });
  const labelElement = returnElement({
    tag: 'label',
    classes: ['item__label'],
    attrib: [
      {
        name: 'for',
        value: id,
      },
    ],
    textContent: labelString,
  });
  const progressElement = returnElement({
    tag: 'progress',
    classes: ['item__progress'],
    attrib: [
      {
        name: 'id',
        value: id,
      },
      {
        name: 'max',
        value: '100',
      },
      {
        name: 'value',
        value: numPercent,
      },
    ],
  });

  item.append(percentBlock, labelElement, progressElement);
  return item;
}

export default function returnSkillsSection() {
  const skillsSectionObject = returnSectionObject({
    wrapperTag: 'article',
    wrapperClasses: ['section__wrapper', 'article', 'skills'],
    headerClasses: ['article-block__header', 'skills__header'],
    descriptionClasses: ['skills__description'],
    title: 'Компетенции',
    subitle: 'Профессиональные навыки.',
  });

  const skillsList = returnElement({
    tag: 'ul',
    classes: ['article-block__ul', 'unord-list', 'list', 'skills__list'],
  });

  const htmlElement = returnSkillsItem('90', 'html', 'HTML');
  const cssElement = returnSkillsItem('50', 'css3', 'CSS3 animation');
  const tsElement = returnSkillsItem('65', 'ts', 'Typescript');
  const gitElement = returnSkillsItem('80', 'git', 'GIT');
  const webpackElement = returnSkillsItem('95', 'webpack', 'Webpack');
  const seoElement = returnSkillsItem('90', 'seo', 'SEO');

  skillsList.append(
    htmlElement,
    cssElement,
    tsElement,
    gitElement,
    webpackElement,
    seoElement
  );
  skillsSectionObject.description.append(skillsList);
  pageElements.skills = skillsSectionObject.section;
  return skillsSectionObject.section;
}
