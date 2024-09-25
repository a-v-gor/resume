import { pageElements } from './common/pageElements';

function changeScrollBody() {
  const checkBox = <HTMLInputElement>pageElements.menuCheckbox;
  if (
    document.documentElement.clientWidth < 1024 &&
    !checkBox.checked &&
    !document.body.classList.contains('body_stop-scroll')
  ) {
    document.body.classList.add('body_stop-scroll');
  } else {
    document.body.classList.remove('body_stop-scroll');
  }
}

export { changeScrollBody };
