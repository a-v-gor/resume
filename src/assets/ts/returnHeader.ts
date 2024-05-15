import returnElement from './common/returnElement';
import imgAvatar from '../img/avatar.jpg';
import returnPersonalDescriptionText from './common/returnPersonalDescriptionText';
import returnSocials from './common/returnSocials';
import returnContacts from './common/returnContacts';
import returnSectionObject from './common/returnSectionObject';
import { pageElements } from './common/pageElements';

export default function returnHeader() {
  const headerObj = returnSectionObject({
    tag: 'header',
    classes: ['header'],
    wrapperTag: 'article',
    wrapperClasses: ['header__wrapper', 'personal'],
    headerClasses: ['header__header', 'interactive'],
    descriptionClasses: ['header__description'],
  });

  const title = returnElement({
    tag: 'h2',
    classes: ['section__title'],
    textContent: 'Личная информация',
  });
  const photo = returnElement({
    tag: 'img',
    classes: ['header__photo'],
    src: imgAvatar,
    attrib: [{ name: 'alt', value: 'А.Горбенко' }],
  });
  headerObj.header.append(title, photo);

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

  const description = headerObj.description;
  description.append(personalWrapper);
  pageElements.header = headerObj.section;

  return headerObj.section;
}
