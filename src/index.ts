import './assets/scss/style.scss';
import zeroSkills from './assets/ts/interactive/skills';
import {
  makeInteractiveHide,
  makeInteractiveVisible,
} from './assets/ts/interactive/visible';
import './assets/ts/returnPage';
import returnPage from './assets/ts/returnPage';

document.addEventListener('DOMContentLoaded', returnPage);
document.addEventListener('DOMContentLoaded', makeInteractiveHide);
document.addEventListener('DOMContentLoaded', zeroSkills);
window.addEventListener('load', makeInteractiveVisible);
