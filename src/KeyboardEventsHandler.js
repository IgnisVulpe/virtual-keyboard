export default class KeyboardEventsHandler {
  exceptionSymbols;

  alphabetsSymbols;

  constructor() {
    this.exceptionSymbols = [
      '\\',
      'Delete',
      'CapsLock',
      'Shift',
      '/',
      'Control',
      'Alt',
      ' ',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ];

    this.alphabetsSymbolsUpperCase = [
      'A', 'B', 'C', 'D', 'E', 'F',
      'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z',
    ];
  }

  keydownHandler(event) {
    console.log(event);

    function press(key) {
      key.classList.add('pressed');
    }

    if (!this.exceptionSymbols.includes(event.key)) {
      const eventKey = this.alphabetsSymbolsUpperCase.includes(event.key)
        ? event.key.toLowerCase()
        : event.key;

      const pressedKey = document.querySelector(
        `button[data-key="${eventKey}"]`,
      );
      press(pressedKey);
    } else if (this.exceptionSymbols.includes(event.key)) {
      switch (event.key) {
        case '\\': {
          const pressedKey = document.querySelector(
            'button[data-key="&#92;"]',
          );
          press(pressedKey);
          break;
        }
        case 'Delete': {
          const pressedKey = document.querySelector(
            'button[data-key="Del"]',
          );
          press(pressedKey);
          break;
        }
        case 'CapsLock': {
          const pressedKey = document.querySelector(
            'button[data-key="Caps Lock"]',
          );
          press(pressedKey);
          break;
        }
        case 'Shift': {
          let pressedKey = null;
          if (event.code === 'ShiftLeft') {
            pressedKey = document.querySelector(
              'button[data-key="Shift"]',
            );
          } else {
            [, pressedKey] = document.querySelectorAll('button[data-key="Shift"]');
          }
          press(pressedKey);
          break;
        }
        case '/': {
          const pressedKey = document.querySelector(
            'button[data-key="&#47;"]',
          );
          press(pressedKey);
          break;
        }
        case 'Control': {
          let pressedKey = null;
          if (event.code === 'ControlLeft') {
            pressedKey = document.querySelector(
              'button[data-key="Ctrl"]',
            );
          } else {
            [, pressedKey] = document.querySelectorAll('button[data-key="Ctrl"]');
          }
          press(pressedKey);
          break;
        }
        case 'Alt': {
          let pressedKey = null;
          if (event.code === 'AltLeft') {
            pressedKey = document.querySelector(
              'button[data-key="Alt"]',
            );
          } else {
            [, pressedKey] = document.querySelectorAll('button[data-key="Alt"]');
          }
          press(pressedKey);
          break;
        }
        case ' ': {
          const pressedKey = document.querySelector(
            'button[data-key="Space"]',
          );
          press(pressedKey);
          break;
        }
        case 'ArrowUp': {
          const pressedKey = document.querySelector(
            'button[data-key="&#9650;"]',
          );
          press(pressedKey);
          break;
        }
        case 'ArrowDown': {
          const pressedKey = document.querySelector(
            'button[data-key="&#9660;"]',
          );
          press(pressedKey);
          break;
        }
        case 'ArrowLeft': {
          const pressedKey = document.querySelector(
            'button[data-key="&#9668;"]',
          );
          press(pressedKey);
          break;
        }
        case 'ArrowRight': {
          const pressedKey = document.querySelector(
            'button[data-key="&#9658;"]',
          );
          press(pressedKey);
          break;
        }
        case '': {
          const pressedKey = document.querySelector(
            'button[data-key=""]',
          );
          press(pressedKey);
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  keydownListener() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
  }
}
