import './assets/scss/style.scss';
import './assets/ts/returnPage';
import returnPage from './assets/ts/returnPage';

function returnInteractiveNodes() {
  return document.querySelectorAll('.interactive');
}
function makeInteractiveHide() {
  const nodesToHide = returnInteractiveNodes();
  nodesToHide.forEach((element) => {
    element.classList.add('interactive_unactive');
  });
}
function makeInteractiveVisible() {
  const nodesToShow = returnInteractiveNodes();
  let timeToWait = 0;

  nodesToShow.forEach((element) => {
    function showElement() {
      element.classList.replace('interactive_unactive', 'interactive_active');
    }
    setTimeout(showElement, timeToWait);
    timeToWait += 220;
    console.log(timeToWait);
  });
}

document.addEventListener('DOMContentLoaded', returnPage);
document.addEventListener('DOMContentLoaded', makeInteractiveHide);
window.addEventListener('load', makeInteractiveVisible);
