import './assets/scss/style.scss';
import { checkInteractive } from './assets/ts/interactive/interactive';
import { hideHeader } from './assets/ts/interactive/visible';
// import {
//   makeInteractiveHide,
// } from './assets/ts/interactive/visible';
import './assets/ts/returnPage';
import returnPage from './assets/ts/returnPage';

document.addEventListener('DOMContentLoaded', returnPage);
document.addEventListener('DOMContentLoaded', hideHeader);
window.addEventListener('load', checkInteractive);
document.addEventListener('scroll', checkInteractive);
