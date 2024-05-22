import returnElement from '../common/returnElement';
import imgAvatar from '../../img/avatar.jpg';
import returnPersonalDescriptionText from '../common/returnPersonalDescriptionText';
import returnSocials from '../common/returnSocials';
import returnContacts from '../common/returnContacts';
import returnSectionObject from '../common/returnSectionObject';
import { pageElements } from '../common/pageElements';
import { returnMenu } from './returnMenu';

export default function returnHeader() {
  const headerObject = returnSectionObject({
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
  headerObject.header.append(title, photo);

  const personalWrapper = returnElement({
    tag: 'div',
    classes: ['header__descr-wrapper', 'personal__wrapper'],
  });
  const personalDescriptionText = returnPersonalDescriptionText();
  const headerSocials = returnSocials();
  headerSocials.classList.add('header__socials');
  const headerContacts = returnContacts();
  headerContacts.classList.add('header__contacts');

  const menu = returnMenu();
  headerObject.description.append(menu);

  personalWrapper.append(
    personalDescriptionText,
    headerSocials,
    headerContacts
  );

  const description = headerObject.description;
  description.append(personalWrapper);
  pageElements.header = headerObject.section;

  return headerObject.section;
}
