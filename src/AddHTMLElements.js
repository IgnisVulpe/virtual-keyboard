import keysJson from './keyboard-keys.json';

export default class AddHTMLElements {
  body;

  keysAndFields;

  keysObject;

  constructor(bodySelector) {
    this.body = document.querySelector(bodySelector);
    this.keysAndFields = null;
    this.keysObject = keysJson;
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

  addKeysAndField() {
    this.keysAndFields = document.createElement('div');
    this.keysAndFields.classList.add('field-keyboard-container');

    const field = document.createElement('textarea');
    field.classList.add('input-field');

    const keyBoard = document.createElement('div');
    keyBoard.classList.add('keyboard');

    const arrRows = [];

    for (let i = 1; i <= 5; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      row.classList.add(`row${i}`);
      arrRows.push(row);
    }

    console.log(arrRows);

    Object.keys(this.keysObject.en).forEach((element) => {
      console.log(this.keysObject.en[element]);

      const keyButton = document.createElement('button');
      keyButton.classList.add('key-button');
      keyButton.innerHTML = this.keysObject.en[element].symbolDefault.symbol;

      switch (this.keysObject.en[element].symbolDefault.name) {
        case 'Backspace': {
          keyButton.classList.add('backspace');
          break;
        }
        case 'Tab': {
          keyButton.classList.add('tab');
          break;
        }
        case 'Caps Lock': {
          keyButton.classList.add('caps-lock');
          break;
        }
        case 'Enter': {
          keyButton.classList.add('enter');
          break;
        }
        case 'Left Shift': {
          keyButton.classList.add('left-shift');
          break;
        }
        case 'Right Shift': {
          keyButton.classList.add('right-shift');
          break;
        }
        case 'Left Ctrl': {
          keyButton.classList.add('left-ctrl');
          break;
        }
        case 'Language': {
          keyButton.classList.add('language');
          break;
        }
        case 'Space': {
          keyButton.classList.add('space');
          break;
        }
        case 'Right Ctrl': {
          keyButton.classList.add('right-ctrl');
          break;
        }
        default: {
          break;
        }
      }

      arrRows[Number(this.keysObject.en[element].row) - 1].appendChild(keyButton);
    });

    arrRows.forEach((element) => {
      keyBoard.appendChild(element);
    });

    this.keysAndFields.appendChild(field);
    this.keysAndFields.appendChild(keyBoard);
  }

  addMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    const h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.innerText = 'Тут будут кнопки';

    main.appendChild(h2);

    this.addKeysAndField();
    main.appendChild(this.keysAndFields);

    this.body.appendChild(main);
  }

  addFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.innerText = 'Правила пользования клавиатурой';

    const p1 = document.createElement('p');
    p1.classList.add('rule');
    p1.innerText = 'Клавиатура создана в операционной системе Windows';

    const p2 = document.createElement('p');
    p2.classList.add('rule');
    p2.innerText = 'Для переключения языка комбинация: левыe Ctrl + Shift';

    footer.appendChild(h2);
    footer.appendChild(p1);
    footer.appendChild(p2);
    this.body.appendChild(footer);
  }
}
