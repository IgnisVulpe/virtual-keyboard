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

    function changeState(key) {
      if (event.type === 'keydown') {
        key.classList.add('pressed');
      } else {
        key.classList.remove('pressed');
      }
    }

    if (!this.exceptionSymbols.includes(event.key)) {
      const eventKey = this.alphabetsSymbolsUpperCase.includes(event.key)
        ? event.key.toLowerCase()
        : event.key;

      const pressedKey = document.querySelector(
        `button[data-key="${eventKey}"]`,
      );
      changeState(pressedKey);
    } else if (this.exceptionSymbols.includes(event.key)) {
      switch (event.key) {
        case '\\': {
          const pressedKey = document.querySelector(
            'button[data-key="&#92;"]',
          );
          changeState(pressedKey);
          break;
        }
        case 'Delete': {
          const pressedKey = document.querySelector(
            'button[data-key="Del"]',
          );
          changeState(pressedKey);
          break;
        }
        case 'CapsLock': {
          const pressedKey = document.querySelector(
            'button[data-key="Caps Lock"]',
          );
          changeState(pressedKey);
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
          changeState(pressedKey);
          break;
        }
        case '/': {
          const pressedKey = document.querySelector(
            'button[data-key="&#47;"]',
          );
          changeState(pressedKey);
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
          changeState(pressedKey);
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
          changeState(pressedKey);
          break;
        }
        case ' ': {
          const pressedKey = document.querySelector(
            'button[data-key="Space"]',
          );
          changeState(pressedKey);
          break;
        }
        case 'ArrowUp': {
          const pressedKey = document.querySelector(
            'button[data-key="&#9650;"]',
          );
          changeState(pressedKey);
          break;
        }
        case 'ArrowDown': {
          const pressedKey = document.querySelector(
            'button[data-key="&#9660;"]',
          );
          changeState(pressedKey);
          break;
        }
        case 'ArrowLeft': {
          const pressedKey = document.querySelector(
            'button[data-key="&#9668;"]',
          );
          changeState(pressedKey);
          break;
        }
        case 'ArrowRight': {
          const pressedKey = document.querySelector(
            'button[data-key="&#9658;"]',
          );
          changeState(pressedKey);
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

  keyupListener() {
    document.addEventListener('keyup', this.keydownHandler.bind(this));
  }
}
