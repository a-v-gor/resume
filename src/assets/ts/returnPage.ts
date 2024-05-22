import returnElement from './common/returnElement';
import returnHeader from './header/returnHeader';
import returnMain from './main/returnMain';
import returnFooter from './returnFooter';

export default function returnPage() {
  const body: HTMLBodyElement = <HTMLBodyElement>(
    document.getElementById('body')
  );
  const pageTitle = returnElement({
    tag: 'h1',
    classes: ['body__title'],
    textContent: 'Desmond resume',
  });
  const header = returnHeader();
  const main = returnMain();
  const footer = returnFooter();

  body.append(pageTitle, header, main, footer);
}
