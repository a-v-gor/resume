import { pageElements } from '../common/pageElements';
import returnContacts from '../common/returnContacts';
import returnElement from '../common/returnElement';
import returnPersonalDescriptionText from '../common/returnPersonalDescriptionText';
import returnSectionObject from '../common/returnSectionObject';
import returnSocials from '../common/returnSocials';

export default function returnContactSection() {
  const contactsSectionObject = returnSectionObject({
    wrapperClasses: ['article-block', 'contact-section', 'personal'],
    headerClasses: ['article-block__header', 'contact-section__header'],
    title: 'Контакты',
    subitle: 'Как со мной связаться.',
    descriptionClasses: ['contact-section__description'],
    id: 'contacts',
  });

  const footerContacts = returnContacts();
  footerContacts.classList.add('contact-section__contacts');
  const footerArticle = returnElement({
    tag: 'article',
    classes: ['section__wrapper', 'personal'],
  });
  const footerArticleTitle = returnElement({
    tag: 'h2',
    classes: ['section__title'],
    textContent: 'Personal info',
  });
  const personalWrapper = returnElement({
    tag: 'div',
    classes: ['personal__wrapper'],
  });
  const personalDescriptionText = returnPersonalDescriptionText();
  const socials = returnSocials();

  personalWrapper.append(personalDescriptionText, socials);
  footerArticle.append(footerArticleTitle, personalWrapper);
  contactsSectionObject.description.append(footerContacts, footerArticle);
  pageElements.footer = contactsSectionObject.section;
  return contactsSectionObject.section;
}
