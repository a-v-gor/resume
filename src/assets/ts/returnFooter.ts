import returnContacts from './common/returnContacts';
import returnElement from './common/returnElement';
import returnPersonalDescriptionText from './common/returnPersonalDescriptionText';
import returnSocials from './common/returnSocials';

export default function returnFooter() {
  const footer = returnElement({
    tag: 'footer',
    classes: ['footer', 'section', 'personal'],
  });
  const footerWrapper = returnElement({
    tag: 'section',
    classes: ['section__wrapper', 'article-block', 'contact-section'],
  });
  const footerHeader = returnElement({
    tag: 'div',
    classes: [
      'section__header',
      'section__block',
      'article-block__header',
      'contact-section__header',
    ],
  });
  const footerTitle = returnElement({
    tag: 'h2',
    classes: ['article-block__title', 'title'],
    textContent: 'Контакты',
  });
  const footerSubtitle = returnElement({
    tag: 'p',
    classes: ['article-block__subtitle', 'text'],
    textContent: 'Как со мной связаться.',
  });
  const footerDescription = returnElement({
    tag: 'div',
    classes: [
      'section__description',
      'section__block',
      'contact-section__description',
    ],
  });
  const footerContacts = returnContacts();
  footerContacts.classList.add('footer__contacts');
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
  footerDescription.append(footerContacts, footerArticle);
  footerHeader.append(footerTitle, footerSubtitle);
  footerWrapper.append(footerHeader, footerDescription);
  footer.append(footerWrapper);
  return footer;
}
