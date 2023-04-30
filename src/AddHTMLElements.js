export default class AddHTMLElements {
  body;

  constructor(bodySelector) {
    this.body = document.querySelector(bodySelector);
  }

  addHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.innerText = 'RSS Виртуальная клавиатура';

    header.appendChild(h1);
    this.body.appendChild(header);
  }

  addMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    const h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.innerText = 'Тут будут кнопки';

    main.appendChild(h2);
    this.body.appendChild(main);
  }

  addFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.innerText = 'Правила пользования клавиатурой';

    footer.appendChild(h2);
    this.body.appendChild(footer);
  }
}
