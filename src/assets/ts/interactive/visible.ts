import { pageElements } from '../common/pageElements';

function makeNodesVisible(nodes: NodeList) {
  let timeToWait = 0;
  nodes.forEach((element) => {
    function showElement() {
      const el: HTMLElement = <HTMLElement>element;
      el.classList.remove('interactive_unactive');
    }
    setTimeout(showElement, timeToWait);
    timeToWait += 100;
  });
}

function hideElement(element: HTMLElement): void {
  element.classList.add('interactive_unactive');
}

function returnPageElements(): HTMLElement[] {
  return [pageElements.header, pageElements.footer];
}

function hideElements(param: string) {
  const [header, footer] = returnPageElements();
  let elementsToHide: NodeListOf<HTMLElement>;
  if (param === 'header') {
    elementsToHide = header.querySelectorAll('.interactive');
  } else {
    elementsToHide = footer.querySelectorAll('.interactive');
  }
  elementsToHide.forEach((element) => hideElement(element));
}

function showElements(param: string) {
  const [header, footer] = returnPageElements();
  let elementsToHide: NodeListOf<HTMLElement>;
  if (param === 'header') {
    elementsToHide = header.querySelectorAll('.interactive');
  } else {
    elementsToHide = footer.querySelectorAll('.interactive');
  }
  makeNodesVisible(elementsToHide);
}

function hideHeader() {
  hideElements('header');
}

function showHeader() {
  showElements('header');
}

function hideFooter() {
  hideElements('footer');
}

function showFooter() {
  showElements('footer');
}

export { hideHeader, showHeader, hideFooter, showFooter };
