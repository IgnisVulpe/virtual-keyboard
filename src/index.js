import '../assets/styles/style.css';
import '../assets/styles/normalize.css';

import AddHTMLElements from './AddHTMLElements';
import KeyboardEventsHandler from './KeyboardEventsHandler';

function loaded() {
  const addHTMLElements = new AddHTMLElements('.body');

  console.log(addHTMLElements.body);

  addHTMLElements.addHeader();
  addHTMLElements.addMain();
  addHTMLElements.addFooter();

  const keyboardEventsHandler = new KeyboardEventsHandler();

  keyboardEventsHandler.keydownListener();
}

window.addEventListener('load', loaded);
