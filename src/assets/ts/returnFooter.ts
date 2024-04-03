import returnContacts from './common/returnContacts';
import returnElement from './common/returnElement';

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
    textContent: 'Contact',
  });
  const footerSubtitle = returnElement({
    tag: 'p',
    classes: ['article-block__subtitle', 'text'],
    textContent: 'Call me, maybe.',
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

  footerArticle.append(footerArticleTitle);
  footerDescription.append(footerContacts, footerArticle);
  footerHeader.append(footerTitle, footerSubtitle);
  footerWrapper.append(footerHeader, footerDescription);
  footer.append(footerWrapper);
  return footer;
}
//   <footer>
//     <footerWrapper>
//       <footerHeader>
//       <footerDescription>
//         <footerContacts>
//         <footerArticle>
//           <footerArticleTitle>
//             <div class="personal__wrapper">
//               <div class="personal__descr-text">
//                 <div class="personal__name">
//                   <span class="personal__fname">desmond</span><br />
//                   <span class="personal__lname">RAMBOWSKI</span>
//                 </div>
//               </div>
//               <section class="socials">
//                 <h3 class="socials__title">Social buttons</h3>
//                 <a href="https://www.facebook.com/RuvenThemes/" class="socials__link">
//                   <div class="socials__icon socials__icon-facebook"></div></a>
//                 <a href="https://dribbble.com/" class="socials__link">
//                   <div class="socials__icon socials__icon-dribbble">
//                   </div></a>
//                 <a href="https://twitter.com/_Ruven" class="socials__link">
//                   <div class="socials__icon socials__icon-twitter">
//                   </div></a>
//               </section>
//             </div>
//           </div>
//         </article>
//       </div>
//     </section>
//   </footer>`
