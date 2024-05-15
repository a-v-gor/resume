import { pageElements } from '../common/pageElements';
import { hideFooter, hideHeader, showFooter, showHeader } from './visible';

function makeElementInteractive(
  elem: HTMLElement,
  funcShow: () => void,
  funcHide: () => void
) {
  const domRect = elem.getBoundingClientRect();

  if (Math.floor(domRect.bottom) <= window.innerHeight && domRect.top >= 0) {
    funcShow();
  } else if (domRect.bottom < 0 || domRect.top > window.innerHeight) {
    funcHide();
  }
}

function checkInteractive() {
  const [header, footer] = [pageElements.header, pageElements.footer];
  makeElementInteractive(header, showHeader, hideHeader);
  makeElementInteractive(footer, showFooter, hideFooter);
}

export { checkInteractive };
