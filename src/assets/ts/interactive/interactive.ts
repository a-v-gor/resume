import { pageElements } from '../common/pageElements';
import { hideSkills, showSkills } from './skills';
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
    if (
      (domRect.bottom < window.innerHeight && domRect.bottom > 0) ||
      (domRect.top >= 0 && domRect.top <= window.innerHeight)
    ) {
      funcShow();
    } else {
      funcHide();
    }
  }
}

function checkInteractive() {
  const [header, footer, skills] = [
    pageElements.header,
    pageElements.footer,
    pageElements.skills,
  ];
  makeElementInteractive(header, showHeader, hideHeader);
  makeElementInteractive(footer, showFooter, hideFooter);
  makeElementInteractive(skills, showSkills, hideSkills);
}

export { checkInteractive };
