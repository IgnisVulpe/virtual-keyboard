import '../assets/styles/style.css';
import '../assets/styles/normalize.css';

import AddHTMLElements from './AddHTMLElements';

function loaded() {
  const addHTMLElements = new AddHTMLElements('.body');

  console.log(addHTMLElements.body);

  addHTMLElements.addHeader();
  addHTMLElements.addMain();
  addHTMLElements.addFooter();
}

window.addEventListener('load', loaded);
