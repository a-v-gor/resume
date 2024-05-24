import { pageElements } from './common/pageElements';

function changeScrollBody() {
  const checkBox = <HTMLInputElement>pageElements.menuCheckbox;
  console.log(checkBox.checked);

  if (!checkBox.checked && !document.body.classList.contains('stop-scroll')) {
    document.body.classList.add('stop-scroll');
  } else {
    document.body.classList.remove('stop-scroll');
  }
}

export { changeScrollBody };
