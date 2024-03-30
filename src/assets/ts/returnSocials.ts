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
  const linkFB = returnElement({
    tag: 'a',
    classes: ['socials__link'],
    attrib: [
      {
        name: 'href',
        value: 'https://www.facebook.com/RuvenThemes/',
      },
    ],
  });
  const iconFB = returnElement({
    tag: 'div',
    classes: ['socials__icon', 'socials__icon-facebook'],
  });
  const linkDribbble = returnElement({
    tag: 'a',
    classes: ['socials__link'],
    attrib: [
      {
        name: 'href',
        value: 'https://dribbble.com/',
      },
    ],
  });
  const iconDribbble = returnElement({
    tag: 'div',
    classes: ['socials__icon', 'socials__icon-dribbble'],
  });
  const linkTwitter = returnElement({
    tag: 'a',
    classes: ['socials__link'],
    attrib: [
      {
        name: 'href',
        value: 'https://twitter.com/_Ruven',
      },
    ],
  });
  const iconTwitter = returnElement({
    tag: 'div',
    classes: ['socials__icon', 'socials__icon-twitter'],
  });

  linkFB.append(iconFB);
  linkDribbble.append(iconDribbble);
  linkTwitter.append(iconTwitter);
  socials.append(socialsTitle, linkFB, linkDribbble, linkTwitter);
  return socials;
}
