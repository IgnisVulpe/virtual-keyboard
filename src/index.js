import '../assets/styles/style.css';

import AddHTMLElements from './AddHTMLElements';

const addHTMLElements = new AddHTMLElements('.general-body');

console.log(addHTMLElements.body);

addHTMLElements.addHeader();

addHTMLElements.addMain();