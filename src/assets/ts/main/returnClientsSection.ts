import returnSection from '../common/returnSection';
import imgClientBBC from '../../img/clients-bbc.png';
import imgClientDisney from '../../img/clients-disney.png';
import imgClientGithub from '../../img/clients-github.png';
import imgClientGoogle from '../../img/clients-google.png';
import imgClientHTML5 from '../../img/clients-html5.png';
import imgClientKickstarter from '../../img/clients-kickstarter.png';
import imgClientVimeo from '../../img/clients-vimeo.png';
import imgClientYoutube from '../../img/clients-youtube.png';

export default function returnClientsSection() {
  const clientsSection = returnSection();
  clientsSection.innerHTML = `
    <section class="section__wrapper article-block clients">
      <div class="section__header section__block article-block__header clients__header">
        <h2 class="article-block__title title">Clients</h2>
        <p class="article-block__subtitle text">Happy people.</p>
      </div>
      <div class="section__description section__block clients__description">
        <ul class="clients__ul">
          <li class="clients__li"><a href="example.com" class="clients__a"><img src=${imgClientBBC} alt="BBC logo" class="clients__img"></a></li>
          <li class="clients__li"><a href="example.com" class="clients__a"><img src=${imgClientDisney} alt="Disney logo" class="clients__img"></a></li>
          <li class="clients__li"><a href="example.com" class="clients__a"><img src=${imgClientGithub} alt="GitHub logo" class="clients__img"></a></li>
          <li class="clients__li"><a href="example.com" class="clients__a"><img src=${imgClientGoogle} alt="Google logo" class="clients__img"></a></li>
          <li class="clients__li"><a href="example.com" class="clients__a"><img src=${imgClientHTML5} alt="HTML5 logo" class="clients__img"></a></li>
          <li class="clients__li"><a href="example.com" class="clients__a"><img src=${imgClientKickstarter} alt="Kickstarter logo" class="clients__img"></a></li>
          <li class="clients__li"><a href="example.com" class="clients__a"><img src=${imgClientYoutube} alt="Youtube logo" class="clients__img"></a></li>
          <li class="clients__li"><a href="example.com" class="clients__a"><img src=${imgClientVimeo} alt="Vimeo logo" class="clients__img"></a></li>
        </ul>
      </div>
    </section>`;
  return clientsSection;
}
