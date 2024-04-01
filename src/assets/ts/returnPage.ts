// import imgLouvre from '../img/louvre_thumb.jpg';
// import imgTunnel from '../img/tunnel_thumb.jpg';
// import imgNewYork from '../img/NY_thumb.jpg';
// import imgSkyHigh from '../img/Sky-High_thumb.jpg';
// import imgEiffelTower from '../img/Eiffel-Tower_thumb.jpg';
// import imgClouds from '../img/clouds_thumb.jpg';
// import imgClientBBC from '../img/clients-bbc.png'
// import imgClientDisney from '../img/clients-disney.png'
// import imgClientGithub from '../img/clients-github.png'
// import imgClientGoogle from '../img/clients-google.png'
// import imgClientHTML5 from '../img/clients-html5.png'
// import imgClientKickstarter from '../img/clients-kickstarter.png'
// import imgClientVimeo from '../img/clients-vimeo.png'
// import imgClientYoutube from '../img/clients-youtube.png'

import returnElement from './returnElement';
import returnHeader from './returnHeader';
import returnMain from './returnMain';

export default function returnPage() {
  const body: HTMLBodyElement = <HTMLBodyElement>(
    document.getElementById('body')
  );
  const pageTitle = returnElement({
    tag: 'h1',
    classes: ['body__title'],
    textContent: 'Desmond resume',
  });
  const header = returnHeader();
  const main = returnMain();

  body.append(pageTitle, header, main);

  //   <header>
  //   <footer class="footer section personal">
  //     <section class="section__wrapper article-block contact-section">
  //       <div class="section__header section__block article-block__header contact-section__header">
  //         <h2 class="article-block__title title">Contact</h2>
  //         <p class="article-block__subtitle text">Call me, maybe.</p>
  //       </div>
  //       <div class="section__description section__block contact-section__description">
  //         <section class="footer__contacts contacts">
  //           <h3 class="contacts__title">Contacts</h3>
  //           <article class="contacts__contact contact">
  //             <h4 class="contact__title title text">Location</h4>
  //             <p class="contact__descr text">
  //               <a href="https://maps.app.goo.gl/jx7ninesXtGMHPwV6" target="_blank" rel="noopener noreferrer" class="contact__link">Portland, OR</a></p>
  //           </article>
  //           <article class="contacts__contact contact">
  //             <h4 class="contact__title title text">Phone</h4>
  //             <p class="contact__descr text">
  //               <a href="tel:+534456886" class="contact__link">534.456.886</a></p>
  //           </article>
  //           <article class="contacts__contact contact">
  //             <h4 class="contact__title title text">Web</h4>
  //             <p class="contact__descr text">
  //               <a href="https://ruvenpelka.com/demos/desmond-resume/light/#" class="contact__link">ruventhemes.com</a></p>
  //           </article>
  //           <article class="contacts__contact contact">
  //             <h4 class="contact__title title text">Email</h4>
  //             <p class="contact__descr text">
  //               <a href="mailto:hello@example.com" class="contact__link">hello@example.com</a></p>
  //           </article>
  //         </section>
  //         <article class="section__wrapper personal">
  //           <h2 class="section__title">Personal info</h2>
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
}
