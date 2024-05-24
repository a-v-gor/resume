import { changeScrollBody } from './changeScrollBody';
import { pageElements } from './common/pageElements';
import { closeBurgerMenu } from './header/menu';
import { checkInteractive } from './interactive/interactive';
import { hideHeader } from './interactive/visible';
import returnPage from './returnPage';
import { changeTheme, setTheme, setThemeToLocalStorage } from './theme/theme';

// function logEventTarget(e: Event) {
//   console.log(e.target);
// }

function startApp() {
  setTheme();
  returnPage();
  document.addEventListener('DOMContentLoaded', hideHeader);
  pageElements.substrate.addEventListener('click', closeBurgerMenu);
  pageElements.menuList.addEventListener('click', closeBurgerMenu);
  pageElements.themeBtn.addEventListener('click', changeTheme);
  pageElements.menuBtn.addEventListener('click', changeScrollBody);
  window.addEventListener('load', checkInteractive);
  document.addEventListener('scroll', checkInteractive);
  window.addEventListener('beforeunload', setThemeToLocalStorage);
  // window.addEventListener('click', logEventTarget);
}

export { startApp };
