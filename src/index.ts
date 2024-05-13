import './assets/scss/style.scss';
import { checkSkillsView } from './assets/ts/interactive/skills';
import {
  makeInteractiveHide,
  makeInteractiveHeaderVisible,
  // makeInteractiveFooterVisible,
} from './assets/ts/interactive/visible';
import './assets/ts/returnPage';
import returnPage from './assets/ts/returnPage';

document.addEventListener('DOMContentLoaded', returnPage);
document.addEventListener('DOMContentLoaded', makeInteractiveHide);
window.addEventListener('load', makeInteractiveHeaderVisible);
window.addEventListener('load', checkSkillsView);
document.addEventListener('scroll', checkSkillsView);
// document.addEventListener('scrollend', makeInteractiveFooterVisible);
