let theme: string;

function getThemeFromLocalStorage() {
  if (localStorage.getItem('resumeAG-theme') !== 'null') {
    return localStorage.getItem('resumeAG-theme');
  } else {
    return;
  }
}

function setTheme() {
  const themeFromLS = getThemeFromLocalStorage();
  if (typeof themeFromLS === 'string') {
    theme = themeFromLS;
  } else {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  }
}

function setThemeToLocalStorage() {
  localStorage.setItem('resumeAG-theme', theme);
}

function changeTheme() {
  const body = document.body;
  body.classList.toggle('body_dark');
  theme = theme === 'dark' ? 'light' : 'dark';
}

export { theme, setTheme, setThemeToLocalStorage, changeTheme };
