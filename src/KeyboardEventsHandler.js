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

    if (!this.exceptionSymbols.includes(event.key)) {
      const eventKey = this.alphabetsSymbolsUpperCase.includes(event.key)
        ? event.key.toLowerCase()
        : event.key;

      const pressedKey = document.querySelector(
        `button[data-key="${eventKey}"]`,
      );
      pressedKey.style.backgroundColor = 'green';
    }
  }

  keydownListener() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
  }
}
