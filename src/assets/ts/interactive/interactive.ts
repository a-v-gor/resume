import { pageElements } from '../common/pageElements';
import { hideFooter, hideHeader, showFooter, showHeader } from './visible';

function makeElementInteractive(
  elem: HTMLElement,
  funcShow: () => void,
  funcHide: () => void
) {
  const domRect = elem.getBoundingClientRect();
  if (elem === pageElements.header) {
    if (domRect.bottom >= window.innerHeight / 2) {
      funcShow();
    } else if (domRect.bottom <= 0) {
      funcHide();
    }
  } else if (elem === pageElements.footer) {
    if (domRect.top <= window.innerHeight / 2) {
      funcShow();
    } else if (domRect.top >= window.innerHeight) {
      funcHide();
    }
  } else {
    if (domRect.bottom <= window.innerHeight || domRect.top >= 0) {
      funcShow();
    } else if (domRect.bottom < 0 || domRect.top > window.innerHeight) {
      funcHide();
    }
  }
}

function checkInteractive() {
  const [header, footer] = [pageElements.header, pageElements.footer];
  makeElementInteractive(header, showHeader, hideHeader);
  makeElementInteractive(footer, showFooter, hideFooter);
}

export { checkInteractive };
