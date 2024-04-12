import returnElement from './returnElement';

function returnContact(header: string, href: string, descr: string) {
  const contact = returnElement({
    tag: 'article',
    classes: ['contacts__contact', 'contact'],
  });

  const contactTitle = returnElement({
    tag: 'h4',
    classes: ['contact__title', 'title', 'text'],
    textContent: header,
  });

  const contactText = returnElement({
    tag: 'p',
    classes: ['contact__descr', 'text'],
  });

  const contactLink = returnElement({
    tag: 'a',
    attrib: [
      {
        name: 'href',
        value: href,
      },
      {
        name: 'rel',
        value: 'noopener',
      },
      {
        name: 'target',
        value: '_blank',
      },
    ],
    classes: ['contact__link'],
    textContent: descr,
  });

  contactText.append(contactLink);

  contact.append(contactTitle, contactText);

  return contact;
}

export default function returnContacts() {
  const contacts = returnElement({
    tag: 'section',
    classes: ['contacts'],
  });

  const contactsTitle = returnElement({
    tag: 'h3',
    classes: ['contacts__title'],
    textContent: 'Контакты',
  });

  const contactLocation = returnContact(
    'Местонахождение',
    'https://maps.app.goo.gl/awAMRVKcbUeYWu1h8',
    'Ростов-на-Дону, РФ'
  );
  const contactTelegram = returnContact(
    'Телеграм',
    'https://t.me/alexey_gorbenko',
    '@alexey_gorbenko'
  );
  const contactDiscord = returnContact(
    'Discord',
    'https://discordapp.com/users/873419814985674802',
    '@alexey_gorbenko'
  );
  const contactEmail = returnContact(
    'E-mail',
    'mailto:a.v.gor@mail.ru',
    'a.v.gor@mail.ru'
  );

  contacts.append(
    contactsTitle,
    contactLocation,
    contactTelegram,
    contactDiscord,
    contactEmail
  );
  return contacts;
}
