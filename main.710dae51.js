"use strict";
(self["webpackChunkvirtual_keyboard"] = self["webpackChunkvirtual_keyboard"] || []).push([["main"],{

/***/ "./assets/styles/normalize.css":
/*!*************************************!*\
  !*** ./assets/styles/normalize.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/style.css":
/*!*********************************!*\
  !*** ./assets/styles/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/AddHTMLElements.js":
/*!********************************!*\
  !*** ./src/AddHTMLElements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddHTMLElements)
/* harmony export */ });
/* harmony import */ var _keyboard_keys_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-keys.json */ "./src/keyboard-keys.json");


class AddHTMLElements {
  body;

  keysAndFields;

  keysObject;

  constructor(bodySelector) {
    this.body = document.querySelector(bodySelector);
    this.keysAndFields = null;
    this.keysObject = _keyboard_keys_json__WEBPACK_IMPORTED_MODULE_0__;
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

    for (let i = 1; i <= 5; i += 1) {
      const row = document.createElement('div');
      row.classList.add('row');
      row.classList.add(`row${i}`);
      arrRows.push(row);
    }

    Object.keys(this.keysObject.en).forEach((element) => {
      const keyButton = document.createElement('button');
      keyButton.classList.add('key-button');
      keyButton.innerHTML = this.keysObject.en[element].symbolDefault.symbol;
      keyButton.setAttribute(
        'data-key',
        `${this.keysObject.en[element].symbolDefault.symbol}`,
      );

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

    this.addKeysAndField();
    main.appendChild(this.keysAndFields);

    this.body.appendChild(main);
  }

  addFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const p1 = document.createElement('p');
    p1.classList.add('rule');
    p1.innerText = 'Клавиатура создана в операционной системе Windows';

    const p2 = document.createElement('p');
    p2.classList.add('rule');
    p2.innerText = 'Для переключения языка комбинация: левыe Ctrl + Shift';

    footer.appendChild(p1);
    footer.appendChild(p2);
    this.body.appendChild(footer);
  }
}


/***/ }),

/***/ "./src/KeyboardEventsHandler.js":
/*!**************************************!*\
  !*** ./src/KeyboardEventsHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyboardEventsHandler)
/* harmony export */ });
class KeyboardEventsHandler {
  exceptionSymbols;

  alphabetsSymbolsUpperCase;

  textarea;

  constructor(textareaClass) {
    this.textarea = document.querySelector(textareaClass);

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

  virtualKeyHandler(event) {
    const localTextarea = this.textarea;

    function addText(newSymbols) {
      localTextarea.value += newSymbols;
      const eventChange = new Event('change');
      localTextarea.dispatchEvent(eventChange);
    }

    function deleteSymbol() {
      localTextarea.value = localTextarea.value.split('').slice(0, -1).join('');
      const eventChange = new Event('change');
      localTextarea.dispatchEvent(eventChange);
    }

    function deleteText() {
      localTextarea.value = '';
      const eventChange = new Event('change');
      localTextarea.dispatchEvent(eventChange);
    }

    switch (event.srcElement.innerText) {
      case 'Backspace': {
        deleteSymbol();
        break;
      }
      case 'Del': {
        deleteText();
        break;
      }
      default: {
        addText(event.srcElement.innerText);
        break;
      }
    }
  }

  virtualKeysListener() {
    document.querySelectorAll('.key-button').forEach((element) => {
      element.addEventListener('click', this.virtualKeyHandler.bind(this));
    });
  }

  keydownHandler(event) {
    const clickEvent = new MouseEvent(
      'click',
      {
        view: window,
        bubbles: true,
        cancelable: false,
      },
    );

    function changeState(key) {
      if (event.type === 'keydown') {
        key.classList.add('pressed');

        key.dispatchEvent(clickEvent);
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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/style.css */ "./assets/styles/style.css");
/* harmony import */ var _assets_styles_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/normalize.css */ "./assets/styles/normalize.css");
/* harmony import */ var _AddHTMLElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddHTMLElements */ "./src/AddHTMLElements.js");
/* harmony import */ var _KeyboardEventsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyboardEventsHandler */ "./src/KeyboardEventsHandler.js");






function loaded() {
  const addHTMLElements = new _AddHTMLElements__WEBPACK_IMPORTED_MODULE_2__["default"]('.body');

  addHTMLElements.addHeader();
  addHTMLElements.addMain();
  addHTMLElements.addFooter();

  const keyboardEventsHandler = new _KeyboardEventsHandler__WEBPACK_IMPORTED_MODULE_3__["default"]('.input-field');

  keyboardEventsHandler.virtualKeysListener();
  keyboardEventsHandler.keydownListener();
  keyboardEventsHandler.keyupListener();
}

window.addEventListener('load', loaded);


/***/ }),

/***/ "./src/keyboard-keys.json":
/*!********************************!*\
  !*** ./src/keyboard-keys.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"en":{"1":{"row":"1","symbolDefault":{"symbol":"`","name":"Grave Accent"},"symbolShift":{"symbol":"&#126;","name":"Tilde"}},"2":{"row":"1","symbolDefault":{"symbol":"1","name":"Digit One"},"symbolShift":{"symbol":"!","name":"Exclamation Mark"}},"3":{"row":"1","symbolDefault":{"symbol":"2","name":"Digit Two"},"symbolShift":{"symbol":"@","name":"Commercial At"}},"4":{"row":"1","symbolDefault":{"symbol":"3","name":"Digit Three"},"symbolShift":{"symbol":"#","name":"Number Sign"}},"5":{"row":"1","symbolDefault":{"symbol":"4","name":"Digit Four"},"symbolShift":{"symbol":"$","name":"Dollar Sign"}},"6":{"row":"1","symbolDefault":{"symbol":"5","name":"Digit Five"},"symbolShift":{"symbol":"%","name":"Percent Sign"}},"7":{"row":"1","symbolDefault":{"symbol":"6","name":"Digit Six"},"symbolShift":{"symbol":"^","name":"Circumflex Accent"}},"8":{"row":"1","symbolDefault":{"symbol":"7","name":"Digit Seven"},"symbolShift":{"symbol":"&","name":"Ampersand"}},"9":{"row":"1","symbolDefault":{"symbol":"8","name":"Digit Eight"},"symbolShift":{"symbol":"*","name":"Asterisk"}},"10":{"row":"1","symbolDefault":{"symbol":"9","name":"Digit Nine"},"symbolShift":{"symbol":"(","name":"Left Parenthesis"}},"11":{"row":"1","symbolDefault":{"symbol":"0","name":"Digit Zero"},"symbolShift":{"symbol":")","name":"Right Parenthesis"}},"12":{"row":"1","symbolDefault":{"symbol":"-","name":"Hyphen-Minus"},"symbolShift":{"symbol":"_","name":"Low Line"}},"13":{"row":"1","symbolDefault":{"symbol":"=","name":"Equals Sign"},"symbolShift":{"symbol":"+","name":"Plus Sign"}},"14":{"row":"1","symbolDefault":{"symbol":"Backspace","name":"Backspace"},"symbolShift":{"symbol":"none","name":"none"}},"15":{"row":"2","symbolDefault":{"symbol":"Tab","name":"Tab"},"symbolShift":{"symbol":"none","name":"none"}},"16":{"row":"2","symbolDefault":{"symbol":"q","name":"Latin Small Letter Q"},"symbolShift":{"symbol":"Q","name":"Latin Capital Letter Q"}},"17":{"row":"2","symbolDefault":{"symbol":"w","name":"Latin Small Letter W"},"symbolShift":{"symbol":"W","name":"Latin Capital Letter W"}},"18":{"row":"2","symbolDefault":{"symbol":"e","name":"Latin Small Letter E"},"symbolShift":{"symbol":"E","name":"Latin Capital Letter E"}},"19":{"row":"2","symbolDefault":{"symbol":"r","name":"Latin Small Letter R"},"symbolShift":{"symbol":"R","name":"Latin Capital Letter R"}},"20":{"row":"2","symbolDefault":{"symbol":"t","name":"Latin Small Letter T"},"symbolShift":{"symbol":"T","name":"Latin Capital Letter T"}},"21":{"row":"2","symbolDefault":{"symbol":"y","name":"Latin Small Letter Y"},"symbolShift":{"symbol":"Y","name":"Latin Capital Letter Y"}},"22":{"row":"2","symbolDefault":{"symbol":"u","name":"Latin Small Letter U"},"symbolShift":{"symbol":"U","name":"Latin Capital Letter U"}},"23":{"row":"2","symbolDefault":{"symbol":"i","name":"Latin Small Letter I"},"symbolShift":{"symbol":"I","name":"Latin Capital Letter I"}},"24":{"row":"2","symbolDefault":{"symbol":"o","name":"Latin Small Letter O"},"symbolShift":{"symbol":"O","name":"Latin Capital Letter O"}},"25":{"row":"2","symbolDefault":{"symbol":"p","name":"Latin Small Letter P"},"symbolShift":{"symbol":"P","name":"Latin Capital Letter P"}},"26":{"row":"2","symbolDefault":{"symbol":"[","name":"Left Square Bracket"},"symbolShift":{"symbol":"{","name":"Left Curly Bracket"}},"27":{"row":"2","symbolDefault":{"symbol":"]","name":"Right Square Bracket"},"symbolShift":{"symbol":"}","name":"Right Curly Bracket"}},"28":{"row":"2","symbolDefault":{"symbol":"&#92;","name":"Reverse Solidus"},"symbolShift":{"symbol":"&#124;","name":"Vertical Line"}},"29":{"row":"2","symbolDefault":{"symbol":"Del","name":"Delete"},"symbolShift":{"symbol":"none","name":"none"}},"30":{"row":"3","symbolDefault":{"symbol":"Caps Lock","name":"Caps Lock"},"symbolShift":{"symbol":"none","name":"none"}},"31":{"row":"3","symbolDefault":{"symbol":"a","name":"Latin Small Letter A"},"symbolShift":{"symbol":"A","name":"Latin Capital Letter A"}},"32":{"row":"3","symbolDefault":{"symbol":"s","name":"Latin Small Letter S"},"symbolShift":{"symbol":"S","name":"Latin Capital Letter S"}},"33":{"row":"3","symbolDefault":{"symbol":"d","name":"Latin Small Letter D"},"symbolShift":{"symbol":"D","name":"Latin Capital Letter D"}},"34":{"row":"3","symbolDefault":{"symbol":"f","name":"Latin Small Letter F"},"symbolShift":{"symbol":"F","name":"Latin Capital Letter F"}},"35":{"row":"3","symbolDefault":{"symbol":"g","name":"Latin Small Letter G"},"symbolShift":{"symbol":"G","name":"Latin Capital Letter G"}},"36":{"row":"3","symbolDefault":{"symbol":"h","name":"Latin Small Letter H"},"symbolShift":{"symbol":"H","name":"Latin Capital Letter H"}},"37":{"row":"3","symbolDefault":{"symbol":"j","name":"Latin Small Letter J"},"symbolShift":{"symbol":"J","name":"Latin Capital Letter J"}},"38":{"row":"3","symbolDefault":{"symbol":"k","name":"Latin Small Letter K"},"symbolShift":{"symbol":"K","name":"Latin Capital Letter K"}},"39":{"row":"3","symbolDefault":{"symbol":"l","name":"Latin Small Letter L"},"symbolShift":{"symbol":"L","name":"Latin Capital Letter L"}},"40":{"row":"3","symbolDefault":{"symbol":";","name":"Semicolon"},"symbolShift":{"symbol":":","name":"Colon"}},"41":{"row":"3","symbolDefault":{"symbol":"\'","name":"Apostrophe"},"symbolShift":{"symbol":"&#34;","name":"Quotation Mark"}},"42":{"row":"3","symbolDefault":{"symbol":"Enter","name":"Enter"},"symbolShift":{"symbol":"none","name":"none"}},"43":{"row":"4","symbolDefault":{"symbol":"Shift","name":"Left Shift"},"symbolShift":{"symbol":"none","name":"none"}},"44":{"row":"4","symbolDefault":{"symbol":"z","name":"Latin Small Letter Z"},"symbolShift":{"symbol":"Z","name":"Latin Capital Letter Z"}},"45":{"row":"4","symbolDefault":{"symbol":"x","name":"Latin Small Letter X"},"symbolShift":{"symbol":"X","name":"Latin Capital Letter X"}},"46":{"row":"4","symbolDefault":{"symbol":"c","name":"Latin Small Letter C"},"symbolShift":{"symbol":"C","name":"Latin Capital Letter C"}},"47":{"row":"4","symbolDefault":{"symbol":"v","name":"Latin Small Letter V"},"symbolShift":{"symbol":"V","name":"Latin Capital Letter V"}},"48":{"row":"4","symbolDefault":{"symbol":"b","name":"Latin Small Letter B"},"symbolShift":{"symbol":"B","name":"Latin Capital Letter B"}},"49":{"row":"4","symbolDefault":{"symbol":"n","name":"Latin Small Letter N"},"symbolShift":{"symbol":"N","name":"Latin Capital Letter N"}},"50":{"row":"4","symbolDefault":{"symbol":"m","name":"Latin Small Letter M"},"symbolShift":{"symbol":"M","name":"Latin Capital Letter M"}},"51":{"row":"4","symbolDefault":{"symbol":",","name":"Comma"},"symbolShift":{"symbol":"<","name":"Less-Than Sign"}},"52":{"row":"4","symbolDefault":{"symbol":".","name":"Full Stop (Dot)"},"symbolShift":{"symbol":">","name":"Greater-Than Sign"}},"53":{"row":"4","symbolDefault":{"symbol":"&#47;","name":"Solidus"},"symbolShift":{"symbol":"?","name":"Question Mark"}},"54":{"row":"4","symbolDefault":{"symbol":"&#9650;","name":"Up Arrow key"},"symbolShift":{"symbol":"none","name":"none"}},"55":{"row":"4","symbolDefault":{"symbol":"Shift","name":"Right Shift"},"symbolShift":{"symbol":"none","name":"none"}},"56":{"row":"5","symbolDefault":{"symbol":"Ctrl","name":"Left Ctrl"},"symbolShift":{"symbol":"none","name":"none"}},"57":{"row":"5","symbolDefault":{"symbol":"&#127760;","name":"Language"},"symbolShift":{"symbol":"none","name":"none"}},"58":{"row":"5","symbolDefault":{"symbol":"Alt","name":"Left Alt"},"symbolShift":{"symbol":"none","name":"none"}},"59":{"row":"5","symbolDefault":{"symbol":"Space","name":"Space"},"symbolShift":{"symbol":"none","name":"none"}},"60":{"row":"5","symbolDefault":{"symbol":"Alt","name":"Right Alt"},"symbolShift":{"symbol":"none","name":"none"}},"61":{"row":"5","symbolDefault":{"symbol":"&#9668;","name":"Left Arrow"},"symbolShift":{"symbol":"none","name":"none"}},"62":{"row":"5","symbolDefault":{"symbol":"&#9660;","name":"Down Arrow"},"symbolShift":{"symbol":"none","name":"none"}},"63":{"row":"5","symbolDefault":{"symbol":"&#9658;","name":"Right Arrow"},"symbolShift":{"symbol":"none","name":"none"}},"64":{"row":"5","symbolDefault":{"symbol":"Ctrl","name":"Right Ctrl"},"symbolShift":{"symbol":"none","name":"none"}}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MTBkYWU1MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDOztBQUU3QjtBQUNmOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBUTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQWlEO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUllO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdOb0M7QUFDSTs7QUFFUTtBQUNZOztBQUU1RDtBQUNBLDhCQUE4Qix3REFBZTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw4REFBcUI7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcz9iZWExIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcz8yMzU4Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvQWRkSFRNTEVsZW1lbnRzLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvS2V5Ym9hcmRFdmVudHNIYW5kbGVyLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGtleXNKc29uIGZyb20gJy4va2V5Ym9hcmQta2V5cy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkSFRNTEVsZW1lbnRzIHtcbiAgYm9keTtcblxuICBrZXlzQW5kRmllbGRzO1xuXG4gIGtleXNPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoYm9keVNlbGVjdG9yKSB7XG4gICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2R5U2VsZWN0b3IpO1xuICAgIHRoaXMua2V5c0FuZEZpZWxkcyA9IG51bGw7XG4gICAgdGhpcy5rZXlzT2JqZWN0ID0ga2V5c0pzb247XG4gIH1cblxuICBhZGRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgaDEuaW5uZXJUZXh0ID0gJ1JTUyDQktC40YDRgtGD0LDQu9GM0L3QsNGPINC60LvQsNCy0LjQsNGC0YPRgNCwJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIH1cblxuICBhZGRLZXlzQW5kRmllbGQoKSB7XG4gICAgdGhpcy5rZXlzQW5kRmllbGRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5rZXlzQW5kRmllbGRzLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLWtleWJvYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkJyk7XG5cbiAgICBjb25zdCBrZXlCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleUJvYXJkLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJyk7XG5cbiAgICBjb25zdCBhcnJSb3dzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoYHJvdyR7aX1gKTtcbiAgICAgIGFyclJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMua2V5c09iamVjdC5lbikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3Qga2V5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBrZXlCdXR0b24uY2xhc3NMaXN0LmFkZCgna2V5LWJ1dHRvbicpO1xuICAgICAga2V5QnV0dG9uLmlubmVySFRNTCA9IHRoaXMua2V5c09iamVjdC5lbltlbGVtZW50XS5zeW1ib2xEZWZhdWx0LnN5bWJvbDtcbiAgICAgIGtleUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdkYXRhLWtleScsXG4gICAgICAgIGAke3RoaXMua2V5c09iamVjdC5lbltlbGVtZW50XS5zeW1ib2xEZWZhdWx0LnN5bWJvbH1gLFxuICAgICAgKTtcblxuICAgICAgc3dpdGNoICh0aGlzLmtleXNPYmplY3QuZW5bZWxlbWVudF0uc3ltYm9sRGVmYXVsdC5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ0JhY2tzcGFjZSc6IHtcbiAgICAgICAgICBrZXlCdXR0b24uY2xhc3NMaXN0LmFkZCgnYmFja3NwYWNlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnVGFiJzoge1xuICAgICAgICAgIGtleUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdDYXBzIExvY2snOiB7XG4gICAgICAgICAga2V5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhcHMtbG9jaycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0VudGVyJzoge1xuICAgICAgICAgIGtleUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlbnRlcicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0xlZnQgU2hpZnQnOiB7XG4gICAgICAgICAga2V5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2hpZnQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdSaWdodCBTaGlmdCc6IHtcbiAgICAgICAgICBrZXlCdXR0b24uY2xhc3NMaXN0LmFkZCgncmlnaHQtc2hpZnQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdMZWZ0IEN0cmwnOiB7XG4gICAgICAgICAga2V5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xlZnQtY3RybCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0xhbmd1YWdlJzoge1xuICAgICAgICAgIGtleUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NwYWNlJzoge1xuICAgICAgICAgIGtleUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzcGFjZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1JpZ2h0IEN0cmwnOiB7XG4gICAgICAgICAga2V5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWN0cmwnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXJyUm93c1tOdW1iZXIodGhpcy5rZXlzT2JqZWN0LmVuW2VsZW1lbnRdLnJvdykgLSAxXS5hcHBlbmRDaGlsZChrZXlCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgYXJyUm93cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBrZXlCb2FyZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMua2V5c0FuZEZpZWxkcy5hcHBlbmRDaGlsZChmaWVsZCk7XG4gICAgdGhpcy5rZXlzQW5kRmllbGRzLmFwcGVuZENoaWxkKGtleUJvYXJkKTtcbiAgfVxuXG4gIGFkZE1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIHRoaXMuYWRkS2V5c0FuZEZpZWxkKCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aGlzLmtleXNBbmRGaWVsZHMpO1xuXG4gICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICB9XG5cbiAgYWRkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLmNsYXNzTGlzdC5hZGQoJ3J1bGUnKTtcbiAgICBwMS5pbm5lclRleHQgPSAn0JrQu9Cw0LLQuNCw0YLRg9GA0LAg0YHQvtC30LTQsNC90LAg0LIg0L7Qv9C10YDQsNGG0LjQvtC90L3QvtC5INGB0LjRgdGC0LXQvNC1IFdpbmRvd3MnO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIuY2xhc3NMaXN0LmFkZCgncnVsZScpO1xuICAgIHAyLmlubmVyVGV4dCA9ICfQlNC70Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGP0LfRi9C60LAg0LrQvtC80LHQuNC90LDRhtC40Y86INC70LXQstGLZSBDdHJsICsgU2hpZnQnO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHAxKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocDIpO1xuICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZEV2ZW50c0hhbmRsZXIge1xuICBleGNlcHRpb25TeW1ib2xzO1xuXG4gIGFscGhhYmV0c1N5bWJvbHNVcHBlckNhc2U7XG5cbiAgdGV4dGFyZWE7XG5cbiAgY29uc3RydWN0b3IodGV4dGFyZWFDbGFzcykge1xuICAgIHRoaXMudGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRleHRhcmVhQ2xhc3MpO1xuXG4gICAgdGhpcy5leGNlcHRpb25TeW1ib2xzID0gW1xuICAgICAgJ1xcXFwnLFxuICAgICAgJ0RlbGV0ZScsXG4gICAgICAnQ2Fwc0xvY2snLFxuICAgICAgJ1NoaWZ0JyxcbiAgICAgICcvJyxcbiAgICAgICdDb250cm9sJyxcbiAgICAgICdBbHQnLFxuICAgICAgJyAnLFxuICAgICAgJ0Fycm93VXAnLFxuICAgICAgJ0Fycm93RG93bicsXG4gICAgICAnQXJyb3dMZWZ0JyxcbiAgICAgICdBcnJvd1JpZ2h0JyxcbiAgICBdO1xuXG4gICAgdGhpcy5hbHBoYWJldHNTeW1ib2xzVXBwZXJDYXNlID0gW1xuICAgICAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJyxcbiAgICAgICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsXG4gICAgICAnTScsICdOJywgJ08nLCAnUCcsICdRJywgJ1InLFxuICAgICAgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJyxcbiAgICAgICdZJywgJ1onLFxuICAgIF07XG4gIH1cblxuICB2aXJ0dWFsS2V5SGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGxvY2FsVGV4dGFyZWEgPSB0aGlzLnRleHRhcmVhO1xuXG4gICAgZnVuY3Rpb24gYWRkVGV4dChuZXdTeW1ib2xzKSB7XG4gICAgICBsb2NhbFRleHRhcmVhLnZhbHVlICs9IG5ld1N5bWJvbHM7XG4gICAgICBjb25zdCBldmVudENoYW5nZSA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG4gICAgICBsb2NhbFRleHRhcmVhLmRpc3BhdGNoRXZlbnQoZXZlbnRDaGFuZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVN5bWJvbCgpIHtcbiAgICAgIGxvY2FsVGV4dGFyZWEudmFsdWUgPSBsb2NhbFRleHRhcmVhLnZhbHVlLnNwbGl0KCcnKS5zbGljZSgwLCAtMSkuam9pbignJyk7XG4gICAgICBjb25zdCBldmVudENoYW5nZSA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG4gICAgICBsb2NhbFRleHRhcmVhLmRpc3BhdGNoRXZlbnQoZXZlbnRDaGFuZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRleHQoKSB7XG4gICAgICBsb2NhbFRleHRhcmVhLnZhbHVlID0gJyc7XG4gICAgICBjb25zdCBldmVudENoYW5nZSA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG4gICAgICBsb2NhbFRleHRhcmVhLmRpc3BhdGNoRXZlbnQoZXZlbnRDaGFuZ2UpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZXZlbnQuc3JjRWxlbWVudC5pbm5lclRleHQpIHtcbiAgICAgIGNhc2UgJ0JhY2tzcGFjZSc6IHtcbiAgICAgICAgZGVsZXRlU3ltYm9sKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnRGVsJzoge1xuICAgICAgICBkZWxldGVUZXh0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBhZGRUZXh0KGV2ZW50LnNyY0VsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlydHVhbEtleXNMaXN0ZW5lcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5LWJ1dHRvbicpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnZpcnR1YWxLZXlIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH0pO1xuICB9XG5cbiAga2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjbGlja0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXG4gICAgICAnY2xpY2snLFxuICAgICAge1xuICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlU3RhdGUoa2V5KSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG5cbiAgICAgICAga2V5LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkuY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5leGNlcHRpb25TeW1ib2xzLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgIGNvbnN0IGV2ZW50S2V5ID0gdGhpcy5hbHBoYWJldHNTeW1ib2xzVXBwZXJDYXNlLmluY2x1ZGVzKGV2ZW50LmtleSlcbiAgICAgICAgPyBldmVudC5rZXkudG9Mb3dlckNhc2UoKVxuICAgICAgICA6IGV2ZW50LmtleTtcblxuICAgICAgY29uc3QgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBidXR0b25bZGF0YS1rZXk9XCIke2V2ZW50S2V5fVwiXWAsXG4gICAgICApO1xuICAgICAgY2hhbmdlU3RhdGUocHJlc3NlZEtleSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4Y2VwdGlvblN5bWJvbHMuaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnXFxcXCc6IHtcbiAgICAgICAgICBjb25zdCBwcmVzc2VkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdidXR0b25bZGF0YS1rZXk9XCImIzkyO1wiXScsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjaGFuZ2VTdGF0ZShwcmVzc2VkS2V5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdEZWxldGUnOiB7XG4gICAgICAgICAgY29uc3QgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnYnV0dG9uW2RhdGEta2V5PVwiRGVsXCJdJyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGNoYW5nZVN0YXRlKHByZXNzZWRLZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0NhcHNMb2NrJzoge1xuICAgICAgICAgIGNvbnN0IHByZXNzZWRLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2J1dHRvbltkYXRhLWtleT1cIkNhcHMgTG9ja1wiXScsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjaGFuZ2VTdGF0ZShwcmVzc2VkS2V5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdTaGlmdCc6IHtcbiAgICAgICAgICBsZXQgcHJlc3NlZEtleSA9IG51bGw7XG4gICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTaGlmdExlZnQnKSB7XG4gICAgICAgICAgICBwcmVzc2VkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ2J1dHRvbltkYXRhLWtleT1cIlNoaWZ0XCJdJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFssIHByZXNzZWRLZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEta2V5PVwiU2hpZnRcIl0nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlU3RhdGUocHJlc3NlZEtleSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnLyc6IHtcbiAgICAgICAgICBjb25zdCBwcmVzc2VkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdidXR0b25bZGF0YS1rZXk9XCImIzQ3O1wiXScsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjaGFuZ2VTdGF0ZShwcmVzc2VkS2V5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdDb250cm9sJzoge1xuICAgICAgICAgIGxldCBwcmVzc2VkS2V5ID0gbnVsbDtcbiAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0NvbnRyb2xMZWZ0Jykge1xuICAgICAgICAgICAgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdidXR0b25bZGF0YS1rZXk9XCJDdHJsXCJdJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFssIHByZXNzZWRLZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEta2V5PVwiQ3RybFwiXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGFuZ2VTdGF0ZShwcmVzc2VkS2V5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdBbHQnOiB7XG4gICAgICAgICAgbGV0IHByZXNzZWRLZXkgPSBudWxsO1xuICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQWx0TGVmdCcpIHtcbiAgICAgICAgICAgIHByZXNzZWRLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnYnV0dG9uW2RhdGEta2V5PVwiQWx0XCJdJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFssIHByZXNzZWRLZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEta2V5PVwiQWx0XCJdJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoYW5nZVN0YXRlKHByZXNzZWRLZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJyAnOiB7XG4gICAgICAgICAgY29uc3QgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnYnV0dG9uW2RhdGEta2V5PVwiU3BhY2VcIl0nLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY2hhbmdlU3RhdGUocHJlc3NlZEtleSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6IHtcbiAgICAgICAgICBjb25zdCBwcmVzc2VkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdidXR0b25bZGF0YS1rZXk9XCImIzk2NTA7XCJdJyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGNoYW5nZVN0YXRlKHByZXNzZWRLZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6IHtcbiAgICAgICAgICBjb25zdCBwcmVzc2VkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdidXR0b25bZGF0YS1rZXk9XCImIzk2NjA7XCJdJyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGNoYW5nZVN0YXRlKHByZXNzZWRLZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6IHtcbiAgICAgICAgICBjb25zdCBwcmVzc2VkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdidXR0b25bZGF0YS1rZXk9XCImIzk2Njg7XCJdJyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGNoYW5nZVN0YXRlKHByZXNzZWRLZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOiB7XG4gICAgICAgICAgY29uc3QgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnYnV0dG9uW2RhdGEta2V5PVwiJiM5NjU4O1wiXScsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjaGFuZ2VTdGF0ZShwcmVzc2VkS2V5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBrZXlkb3duTGlzdGVuZXIoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBrZXl1cExpc3RlbmVyKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlkb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcyc7XG5cbmltcG9ydCBBZGRIVE1MRWxlbWVudHMgZnJvbSAnLi9BZGRIVE1MRWxlbWVudHMnO1xuaW1wb3J0IEtleWJvYXJkRXZlbnRzSGFuZGxlciBmcm9tICcuL0tleWJvYXJkRXZlbnRzSGFuZGxlcic7XG5cbmZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgY29uc3QgYWRkSFRNTEVsZW1lbnRzID0gbmV3IEFkZEhUTUxFbGVtZW50cygnLmJvZHknKTtcblxuICBhZGRIVE1MRWxlbWVudHMuYWRkSGVhZGVyKCk7XG4gIGFkZEhUTUxFbGVtZW50cy5hZGRNYWluKCk7XG4gIGFkZEhUTUxFbGVtZW50cy5hZGRGb290ZXIoKTtcblxuICBjb25zdCBrZXlib2FyZEV2ZW50c0hhbmRsZXIgPSBuZXcgS2V5Ym9hcmRFdmVudHNIYW5kbGVyKCcuaW5wdXQtZmllbGQnKTtcblxuICBrZXlib2FyZEV2ZW50c0hhbmRsZXIudmlydHVhbEtleXNMaXN0ZW5lcigpO1xuICBrZXlib2FyZEV2ZW50c0hhbmRsZXIua2V5ZG93bkxpc3RlbmVyKCk7XG4gIGtleWJvYXJkRXZlbnRzSGFuZGxlci5rZXl1cExpc3RlbmVyKCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbG9hZGVkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==