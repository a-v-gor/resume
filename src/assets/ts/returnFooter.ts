import returnElement from './common/returnElement';

export default function returnFooter() {
  const footer = returnElement({
    tag: 'footer',
    classes: ['footer'],
  });

  const copyrightString = '© А. Горбенко ' + new Date().getFullYear();

  const copyright = returnElement({
    tag: 'div',
    classes: ['footer__copyright'],
    textContent: copyrightString,
  });

  const copyrightDesign = returnElement({
    tag: 'div',
    classes: ['footer__copyright'],
  });

  const copyrightDesignLink = returnElement({
    tag: 'a',
    classes: ['footer__link', 'link'],
    textContent: 'design: RuvenThemes',
    attrib: [
      {
        name: 'href',
        value: 'https://themeforest.net/user/ruventhemes',
      },
      {
        name: 'target',
        value: '_blank',
      },
    ],
  });

  copyrightDesign.append(copyrightDesignLink);
  footer.append(copyright, copyrightDesign);

  return footer;
}
