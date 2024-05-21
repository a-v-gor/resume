import returnElement from './returnElement';

export default function returnSocials() {
  const socials = returnElement({
    tag: 'section',
    classes: ['socials'],
  });
  const socialsTitle = returnElement({
    tag: 'h3',
    classes: ['socials__title'],
    textContent: 'Социальные сети',
  });
  const linkLI = returnElement({
    tag: 'a',
    classes: ['socials__link', 'interactive'],
    attrib: [
      {
        name: 'href',
        value: 'https://www.linkedin.com/in/alexey-gorbenko',
      },
      {
        name: 'target',
        value: '_blank',
      },
    ],
  });
  const iconLi = returnElement({
    tag: 'div',
    classes: ['socials__icon', 'socials__icon-li'],
  });
  const linkGH = returnElement({
    tag: 'a',
    classes: ['socials__link', 'interactive'],
    attrib: [
      {
        name: 'href',
        value: 'https://www.github.com/a-v-gor',
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
  const linkCW = returnElement({
    tag: 'a',
    classes: ['socials__link', 'interactive'],
    attrib: [
      {
        name: 'href',
        value: 'https://www.codewars.com/users/a-v-gor',
      },
      {
        name: 'target',
        value: '_blank',
      },
    ],
  });
  const iconCW = returnElement({
    tag: 'div',
    classes: ['socials__icon', 'socials__icon-codewars'],
  });

  linkLI.append(iconLi);
  linkGH.append(iconGH);
  linkCW.append(iconCW);
  socials.append(socialsTitle, linkLI, linkGH, linkCW);
  return socials;
}
