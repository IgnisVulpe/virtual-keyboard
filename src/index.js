import '../assets/styles/style.css';

import AddHTMLElements from './AddHTMLElements';

const addHTMLElements = new AddHTMLElements('.body');

console.log(addHTMLElements.body);

addHTMLElements.addHeader();
addHTMLElements.addMain();
addHTMLElements.addFooter();
