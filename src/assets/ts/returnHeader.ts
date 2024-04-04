import returnElement from './common/returnElement';
import returnSocials from './common/returnSocials';
import returnContacts from './common/returnContacts';
import returnPersonalDescriptionText from './common/returnPersonalDescriptionText';

import imgAvatar from '../img/avatar.jpg';

export default function returnHeader() {
  const header = returnElement({
    tag: 'header',
    classes: ['header', 'section'],
  });
  const headerArticle = returnElement({
    tag: 'article',
    classes: ['header__wrapper', 'section__wrapper', 'personal'],
  });
  const headerArticleTitle = returnElement({
    tag: 'h2',
    classes: ['section__title'],
    textContent: 'Личная информация',
  });
  const headerHeader = returnElement({
    tag: 'div',
    classes: ['section__header', 'section__block', 'header__header'],
  });
  const headerPhoto = returnElement({
    tag: 'img',
    classes: ['header__photo'],
    src: imgAvatar,
    attrib: [{ name: 'alt', value: "Desmond's photo" }],
  });
  const headerDescription = returnElement({
    tag: 'div',
    classes: ['section__description', 'section__block', 'header__description'],
  });
  const personalWrapper = returnElement({
    tag: 'div',
    classes: ['header__descr-wrapper', 'personal__wrapper'],
  });
  const personalDescriptionText = returnPersonalDescriptionText();
  const headerSocials = returnSocials();
  headerSocials.classList.add('header__socials');
  const headerContacts = returnContacts();
  headerContacts.classList.add('header__contacts');

  personalWrapper.append(
    personalDescriptionText,
    headerSocials,
    headerContacts
  );
  headerDescription.append(personalWrapper);
  headerHeader.append(headerPhoto);
  headerArticle.append(headerArticleTitle, headerHeader, headerDescription);
  header.append(headerArticle);

  return header;
}
