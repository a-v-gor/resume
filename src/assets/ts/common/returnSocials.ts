import returnElement from './returnElement';

export default function returnSocials() {
  const socials = returnElement({
    tag: 'section',
    classes: ['socials'],
  });
  const socialsTitle = returnElement({
    tag: 'h3',
    classes: ['socials__title'],
    textContent: 'Social buttons',
  });
  const linkHabr = returnElement({
    tag: 'a',
    classes: ['socials__link'],
    attrib: [
      {
        name: 'href',
        value: 'https://habr.com/ru/users/a-v-gor/',
      },
      {
        name: 'target',
        value: '_blank',
      },
    ],
  });
  const iconHabr = returnElement({
    tag: 'div',
    classes: ['socials__icon', 'socials__icon-habr'],
  });
  const linkGH = returnElement({
    tag: 'a',
    classes: ['socials__link'],
    attrib: [
      {
        name: 'href',
        value: 'https://github.com/a-v-gor',
      },
      {
        name: 'target',
        value: '_blank',
      },
    ],
  });
  const iconGH = returnElement({
    tag: 'div',
    classes: ['socials__icon', 'socials__icon-gh'],
  });
  const linkTwitter = returnElement({
    tag: 'a',
    classes: ['socials__link'],
    attrib: [
      {
        name: 'href',
        value: 'https://twitter.com/_Ruven',
      },
      {
        name: 'target',
        value: '_blank',
      },
    ],
  });
  const iconTwitter = returnElement({
    tag: 'div',
    classes: ['socials__icon', 'socials__icon-twitter'],
  });

  linkHabr.append(iconHabr);
  linkGH.append(iconGH);
  linkTwitter.append(iconTwitter);
  socials.append(socialsTitle, linkHabr, linkGH, linkTwitter);
  return socials;
}
