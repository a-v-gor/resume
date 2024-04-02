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
    textContent: 'Contacts',
  });

  const contactLocation = returnContact(
    'Location',
    'https://maps.app.goo.gl/jx7ninesXtGMHPwV6',
    'Portland, OR'
  );
  const contactPhone = returnContact('Phone', 'tel:+534456886', '534.456.886');
  const contactWeb = returnContact(
    'Web',
    'https://ruvenpelka.com/demos/desmond-resume/light/#',
    'ruventhemes.com'
  );
  const contactEmail = returnContact(
    'Email',
    'mailto:hello@example.com',
    'hello@example.com'
  );

  contacts.append(
    contactsTitle,
    contactLocation,
    contactPhone,
    contactWeb,
    contactEmail
  );
  return contacts;
}
