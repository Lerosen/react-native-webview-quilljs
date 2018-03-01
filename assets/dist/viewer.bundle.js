webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(46)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(47)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStyleName = undefined;
exports.createMarkupForStyles = createMarkupForStyles;

var _camelizeStyleName = __webpack_require__(18);

var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

var _dangerousStyleValue = __webpack_require__(51);

var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);

var _hyphenateStyleName = __webpack_require__(17);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _memoizeStringOnly = __webpack_require__(53);

var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
                                                                                                                   * Copyright 2013-present, Facebook, Inc.
                                                                                                                   * All rights reserved.
                                                                                                                   *
                                                                                                                   * This source code is licensed under the BSD-style license found in the
                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                   *
                                                                                                                   * @providesModule CSSPropertyOperations
                                                                                                                   */

if (process.env.NODE_ENV !== 'production') {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;

  var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) : void 0;
  };

  var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
  };

  var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
  };

  var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
  };

  var checkRenderMessage = function checkRenderMessage(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  };

  /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */
  var warnValidStyle = function warnValidStyle(name, value, component) {
    //eslint-disable-line no-var
    var owner = void 0;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number' && isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);
    }
  };
}

/**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */

function createMarkupForStyles(styles, component) {
  var serialized = '';
  for (var styleName in styles) {
    var isCustomProp = styleName.indexOf('--') === 0;
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    if (styleName === 'label') {
      continue;
    }
    var styleValue = styles[styleName];
    if (process.env.NODE_ENV !== 'production' && !isCustomProp) {
      warnValidStyle(styleName, styleValue, component);
    }
    if (styleValue != null) {
      if (isCustomProp) {
        serialized += styleName + ':' + styleValue + ';';
      } else {
        serialized += processStyleName(styleName) + ':';
        serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
      }
    }
  }
  return serialized || null;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactQuillViewer = __webpack_require__(34);

var _reactQuillViewer2 = _interopRequireDefault(_reactQuillViewer);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_reactQuillViewer2.default, null), document.getElementById("root"));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quill = __webpack_require__(35);

var _quill2 = _interopRequireDefault(_quill);

__webpack_require__(41);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamorous = __webpack_require__(48);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _renderIf = __webpack_require__(73);

var _renderIf2 = _interopRequireDefault(_renderIf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = __webpack_require__(74);
var MESSAGE_PREFIX = 'react-native-webview-quilljs';
var SHOW_DEBUG_INFORMATION = false;
var messageQueue = [];
var messageCounter = 0;

var MessagesDiv = _glamorous2.default.div({
  backgroundColor: 'orange',
  maxHeight: 200,
  overflow: 'auto',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  fontSize: 10
});

var ReactQuillViewer = function (_React$Component) {
  _inherits(ReactQuillViewer, _React$Component);

  function ReactQuillViewer(props) {
    _classCallCheck(this, ReactQuillViewer);

    var _this = _possibleConstructorReturn(this, (ReactQuillViewer.__proto__ || Object.getPrototypeOf(ReactQuillViewer)).call(this, props));

    _this.printElement = function (data) {
      if (SHOW_DEBUG_INFORMATION) {
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
          var el = document.createElement('pre');
          el.innerHTML = util.inspect(data, { showHidden: false, depth: null });
          document.getElementById('messages').appendChild(el);
          console.log(JSON.stringify(data));
        } else if (typeof data === 'string') {
          var _el = document.createElement('pre');
          _el.innerHTML = data;
          document.getElementById('messages').appendChild(_el);
          console.log(data);
        }
      }
    };

    _this.addMessageToQueue = function (type, payload) {
      messageQueue.push(JSON.stringify({
        messageID: messageCounter++,
        prefix: MESSAGE_PREFIX,
        type: type,
        payload: payload
      }));
      _this.printElement('adding message ' + messageCounter + ' to queue');
      if (_this.state.readyToSendNextMessage) {
        _this.sendNextMessage();
      }
    };

    _this.sendNextMessage = function () {
      if (messageQueue.length > 0) {
        var nextMessage = messageQueue.shift();
        _this.printElement('sending message ' + nextMessage);
        window.postMessage(nextMessage, '*');
        _this.setState({ readyToSendNextMessage: false });
      }
    };

    _this.handleMessage = function (event) {
      _this.printElement('received message');
      _this.printElement(util.inspect(event.data, {
        showHidden: false,
        depth: null
      }));

      var msgData = void 0;
      try {
        msgData = JSON.parse(event.data);
        if (msgData.hasOwnProperty('prefix') && msgData.prefix === MESSAGE_PREFIX) {
          // this.printElement(msgData);
          switch (msgData.type) {
            // receive an event when the webview is ready
            case 'SET_CONTENTS':
              // this.printElement('MAP_CENTER_COORD_CHANGE event recieved');
              _this.state.editor.setContents(msgData.payload.ops);
              break;
            case 'MESSAGE_ACKNOWLEDGED':
              _this.setState({ readyToSendNextMessage: true });
              _this.sendNextMessage();
              break;

            default:
              printElement('reactQuillViewer Error: Unhandled message type received "' + msgData.type + '"');
          }
        }
      } catch (err) {
        _this.printElement('reactQuillViewer error: ' + err);
        return;
      }
    };

    _this.state = {
      editor: null,
      readyToSendNextMessage: true
    }; // You can also pass a Quill Delta here
    return _this;
  }

  // print passed information in an html element; useful for debugging
  // since console.log and debug statements won't work in a conventional way


  _createClass(ReactQuillViewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        editor: new _quill2.default('#viewer', {
          modules: { toolbar: false },
          readOnly: true,
          theme: null,
          bounds: '#Quill-Viewer-Container'
        })
      });
      if (document) {
        document.addEventListener('message', this.handleMessage), false;
      } else if (window) {
        window.addEventListener('message', this.handleMessage), false;
      } else {
        console.log('unable to add event listener');
      }
      this.printElement('component mounted');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          id: 'Quill-Viewer-Container',
          style: {
            height: '100%',
            backgroundColor: '#dddddd',
            display: 'flex',
            flexDirection: 'column'
          }
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              height: '100%',
              backgroundColor: '#ffebba',
              display: 'flex',
              flexDirection: 'column',
              paddingVertical: 5
            }
          },
          _react2.default.createElement('div', {
            id: 'viewer',
            style: {
              backgroundColor: '#FAEBD7',
              fontSize: '20px',
              height: '100%'
            }
          })
        ),
        (0, _renderIf2.default)(SHOW_DEBUG_INFORMATION)(_react2.default.createElement(MessagesDiv, { id: 'messages' }))
      );
    }
  }]);

  return ReactQuillViewer;
}(_react2.default.Component);

exports.default = ReactQuillViewer;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Quill Editor v1.0.0
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["Quill"] = factory();else root["Quill"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = __webpack_require__(1);

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _core = __webpack_require__(2);

			var _core2 = _interopRequireDefault(_core);

			var _align = __webpack_require__(46);

			var _direction = __webpack_require__(49);

			var _indent = __webpack_require__(54);

			var _blockquote = __webpack_require__(55);

			var _blockquote2 = _interopRequireDefault(_blockquote);

			var _header = __webpack_require__(56);

			var _header2 = _interopRequireDefault(_header);

			var _list = __webpack_require__(57);

			var _list2 = _interopRequireDefault(_list);

			var _background = __webpack_require__(47);

			var _color = __webpack_require__(48);

			var _font = __webpack_require__(50);

			var _size = __webpack_require__(51);

			var _bold = __webpack_require__(58);

			var _bold2 = _interopRequireDefault(_bold);

			var _italic = __webpack_require__(59);

			var _italic2 = _interopRequireDefault(_italic);

			var _link = __webpack_require__(60);

			var _link2 = _interopRequireDefault(_link);

			var _script = __webpack_require__(61);

			var _script2 = _interopRequireDefault(_script);

			var _strike = __webpack_require__(62);

			var _strike2 = _interopRequireDefault(_strike);

			var _underline = __webpack_require__(63);

			var _underline2 = _interopRequireDefault(_underline);

			var _image = __webpack_require__(64);

			var _image2 = _interopRequireDefault(_image);

			var _video = __webpack_require__(65);

			var _video2 = _interopRequireDefault(_video);

			var _code = __webpack_require__(32);

			var _code2 = _interopRequireDefault(_code);

			var _formula = __webpack_require__(66);

			var _formula2 = _interopRequireDefault(_formula);

			var _syntax = __webpack_require__(67);

			var _syntax2 = _interopRequireDefault(_syntax);

			var _toolbar = __webpack_require__(68);

			var _toolbar2 = _interopRequireDefault(_toolbar);

			var _icons = __webpack_require__(69);

			var _icons2 = _interopRequireDefault(_icons);

			var _picker = __webpack_require__(101);

			var _picker2 = _interopRequireDefault(_picker);

			var _colorPicker = __webpack_require__(103);

			var _colorPicker2 = _interopRequireDefault(_colorPicker);

			var _iconPicker = __webpack_require__(104);

			var _iconPicker2 = _interopRequireDefault(_iconPicker);

			var _tooltip = __webpack_require__(105);

			var _tooltip2 = _interopRequireDefault(_tooltip);

			var _bubble = __webpack_require__(106);

			var _bubble2 = _interopRequireDefault(_bubble);

			var _snow = __webpack_require__(108);

			var _snow2 = _interopRequireDefault(_snow);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			_core2.default.register({
				'attributors/class/align': _align.AlignClass,
				'attributors/class/background': _background.BackgroundClass,
				'attributors/class/color': _color.ColorClass,
				'attributors/class/direction': _direction.DirectionClass,
				'attributors/class/font': _font.FontClass,
				'attributors/class/size': _size.SizeClass,

				'attributors/style/align': _align.AlignStyle,
				'attributors/style/background': _background.BackgroundStyle,
				'attributors/style/color': _color.ColorStyle,
				'attributors/style/direction': _direction.DirectionStyle,
				'attributors/style/font': _font.FontStyle,
				'attributors/style/size': _size.SizeStyle
			}, true);

			_core2.default.register({
				'formats/align': _align.AlignClass,
				'formats/direction': _direction.DirectionClass,
				'formats/indent': _indent.IndentClass,

				'formats/background': _background.BackgroundStyle,
				'formats/color': _color.ColorStyle,
				'formats/font': _font.FontClass,
				'formats/size': _size.SizeClass,

				'formats/blockquote': _blockquote2.default,
				'formats/code-block': _code2.default,
				'formats/header': _header2.default,
				'formats/list': _list2.default,

				'formats/bold': _bold2.default,
				'formats/code': _code.Code,
				'formats/italic': _italic2.default,
				'formats/link': _link2.default,
				'formats/script': _script2.default,
				'formats/strike': _strike2.default,
				'formats/underline': _underline2.default,

				'formats/image': _image2.default,
				'formats/video': _video2.default,

				'formats/list/item': _list.ListItem,

				'modules/formula': _formula2.default,
				'modules/syntax': _syntax2.default,
				'modules/toolbar': _toolbar2.default,

				'themes/bubble': _bubble2.default,
				'themes/snow': _snow2.default,

				'ui/icons': _icons2.default,
				'ui/picker': _picker2.default,
				'ui/icon-picker': _iconPicker2.default,
				'ui/color-picker': _colorPicker2.default,
				'ui/tooltip': _tooltip2.default
			}, true);

			module.exports = _core2.default;

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _quill = __webpack_require__(19);

			var _quill2 = _interopRequireDefault(_quill);

			var _block = __webpack_require__(33);

			var _block2 = _interopRequireDefault(_block);

			var _break = __webpack_require__(34);

			var _break2 = _interopRequireDefault(_break);

			var _container = __webpack_require__(43);

			var _container2 = _interopRequireDefault(_container);

			var _cursor = __webpack_require__(38);

			var _cursor2 = _interopRequireDefault(_cursor);

			var _embed = __webpack_require__(35);

			var _embed2 = _interopRequireDefault(_embed);

			var _inline = __webpack_require__(36);

			var _inline2 = _interopRequireDefault(_inline);

			var _scroll = __webpack_require__(44);

			var _scroll2 = _interopRequireDefault(_scroll);

			var _text = __webpack_require__(37);

			var _text2 = _interopRequireDefault(_text);

			var _clipboard = __webpack_require__(45);

			var _clipboard2 = _interopRequireDefault(_clipboard);

			var _history = __webpack_require__(52);

			var _history2 = _interopRequireDefault(_history);

			var _keyboard = __webpack_require__(53);

			var _keyboard2 = _interopRequireDefault(_keyboard);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			_quill2.default.register({
				'blots/block': _block2.default,
				'blots/block/embed': _block.BlockEmbed,
				'blots/break': _break2.default,
				'blots/container': _container2.default,
				'blots/cursor': _cursor2.default,
				'blots/embed': _embed2.default,
				'blots/inline': _inline2.default,
				'blots/scroll': _scroll2.default,
				'blots/text': _text2.default,

				'modules/clipboard': _clipboard2.default,
				'modules/history': _history2.default,
				'modules/keyboard': _keyboard2.default
			});

			_parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

			module.exports = _quill2.default;

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var container_1 = __webpack_require__(4);
			var format_1 = __webpack_require__(8);
			var leaf_1 = __webpack_require__(13);
			var scroll_1 = __webpack_require__(14);
			var inline_1 = __webpack_require__(15);
			var block_1 = __webpack_require__(16);
			var embed_1 = __webpack_require__(17);
			var text_1 = __webpack_require__(18);
			var attributor_1 = __webpack_require__(9);
			var class_1 = __webpack_require__(11);
			var style_1 = __webpack_require__(12);
			var store_1 = __webpack_require__(10);
			var Registry = __webpack_require__(7);
			var Parchment = {
				Scope: Registry.Scope,
				create: Registry.create,
				find: Registry.find,
				query: Registry.query,
				register: Registry.register,
				Container: container_1.default,
				Format: format_1.default,
				Leaf: leaf_1.default,
				Embed: embed_1.default,
				Scroll: scroll_1.default,
				Block: block_1.default,
				Inline: inline_1.default,
				Text: text_1.default,
				Attributor: {
					Attribute: attributor_1.default,
					Class: class_1.default,
					Style: style_1.default,
					Store: store_1.default
				}
			};
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = Parchment;

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var linked_list_1 = __webpack_require__(5);
			var shadow_1 = __webpack_require__(6);
			var Registry = __webpack_require__(7);
			var ContainerBlot = function (_super) {
				__extends(ContainerBlot, _super);
				function ContainerBlot() {
					_super.apply(this, arguments);
				}
				ContainerBlot.prototype.appendChild = function (other) {
					this.insertBefore(other);
				};
				ContainerBlot.prototype.attach = function () {
					var _this = this;
					_super.prototype.attach.call(this);
					this.children = new linked_list_1.default();
					// Need to be reversed for if DOM nodes already in order
					[].slice.call(this.domNode.childNodes).reverse().forEach(function (node) {
						try {
							var child = makeBlot(node);
							_this.insertBefore(child, _this.children.head);
						} catch (err) {
							if (err instanceof Registry.ParchmentError) return;else throw err;
						}
					});
				};
				ContainerBlot.prototype.deleteAt = function (index, length) {
					if (index === 0 && length === this.length()) {
						return this.remove();
					}
					this.children.forEachAt(index, length, function (child, offset, length) {
						child.deleteAt(offset, length);
					});
				};
				ContainerBlot.prototype.descendant = function (criteria, index) {
					var _a = this.children.find(index),
					    child = _a[0],
					    offset = _a[1];
					if (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) {
						return [child, offset];
					} else if (child instanceof ContainerBlot) {
						return child.descendant(criteria, offset);
					} else {
						return [null, -1];
					}
				};
				ContainerBlot.prototype.descendants = function (criteria, index, length) {
					if (index === void 0) {
						index = 0;
					}
					if (length === void 0) {
						length = Number.MAX_VALUE;
					}
					var descendants = [],
					    lengthLeft = length;
					this.children.forEachAt(index, length, function (child, index, length) {
						if (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) {
							descendants.push(child);
						}
						if (child instanceof ContainerBlot) {
							descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
						}
						lengthLeft -= length;
					});
					return descendants;
				};
				ContainerBlot.prototype.detach = function () {
					this.children.forEach(function (child) {
						child.detach();
					});
					_super.prototype.detach.call(this);
				};
				ContainerBlot.prototype.formatAt = function (index, length, name, value) {
					this.children.forEachAt(index, length, function (child, offset, length) {
						child.formatAt(offset, length, name, value);
					});
				};
				ContainerBlot.prototype.insertAt = function (index, value, def) {
					var _a = this.children.find(index),
					    child = _a[0],
					    offset = _a[1];
					if (child) {
						child.insertAt(offset, value, def);
					} else {
						var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
						this.appendChild(blot);
					}
				};
				ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
					if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (child) {
						return childBlot instanceof child;
					})) {
						throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
					}
					childBlot.insertInto(this, refBlot);
				};
				ContainerBlot.prototype.length = function () {
					return this.children.reduce(function (memo, child) {
						return memo + child.length();
					}, 0);
				};
				ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
					this.children.forEach(function (child) {
						targetParent.insertBefore(child, refNode);
					});
				};
				ContainerBlot.prototype.optimize = function () {
					_super.prototype.optimize.call(this);
					if (this.children.length === 0) {
						if (this.statics.defaultChild != null) {
							var child = Registry.create(this.statics.defaultChild);
							this.appendChild(child);
							child.optimize();
						} else {
							this.remove();
						}
					}
				};
				ContainerBlot.prototype.path = function (index, inclusive) {
					if (inclusive === void 0) {
						inclusive = false;
					}
					var _a = this.children.find(index, inclusive),
					    child = _a[0],
					    offset = _a[1];
					var position = [[this, index]];
					if (child instanceof ContainerBlot) {
						return position.concat(child.path(offset, inclusive));
					} else if (child != null) {
						position.push([child, offset]);
					}
					return position;
				};
				ContainerBlot.prototype.removeChild = function (child) {
					this.children.remove(child);
				};
				ContainerBlot.prototype.replace = function (target) {
					if (target instanceof ContainerBlot) {
						target.moveChildren(this);
					}
					_super.prototype.replace.call(this, target);
				};
				ContainerBlot.prototype.split = function (index, force) {
					if (force === void 0) {
						force = false;
					}
					if (!force) {
						if (index === 0) return this;
						if (index === this.length()) return this.next;
					}
					var after = this.clone();
					this.parent.insertBefore(after, this.next);
					this.children.forEachAt(index, this.length(), function (child, offset, length) {
						child = child.split(offset, force);
						after.appendChild(child);
					});
					return after;
				};
				ContainerBlot.prototype.unwrap = function () {
					this.moveChildren(this.parent, this.next);
					this.remove();
				};
				ContainerBlot.prototype.update = function (mutations) {
					var _this = this;
					var addedNodes = [],
					    removedNodes = [];
					mutations.forEach(function (mutation) {
						if (mutation.target === _this.domNode && mutation.type === 'childList') {
							addedNodes.push.apply(addedNodes, mutation.addedNodes);
							removedNodes.push.apply(removedNodes, mutation.removedNodes);
						}
					});
					removedNodes.forEach(function (node) {
						var blot = Registry.find(node);
						if (blot == null) return;
						if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
							blot.detach();
						}
					});
					addedNodes.filter(function (node) {
						return node.parentNode == _this.domNode;
					}).sort(function (a, b) {
						if (a === b) return 0;
						if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
							return 1;
						}
						return -1;
					}).forEach(function (node) {
						var refBlot = null;
						if (node.nextSibling != null) {
							refBlot = Registry.find(node.nextSibling);
						}
						var blot = makeBlot(node);
						if (blot.next != refBlot || blot.next == null) {
							if (blot.parent != null) {
								blot.parent.removeChild(_this);
							}
							_this.insertBefore(blot, refBlot);
						}
					});
				};
				return ContainerBlot;
			}(shadow_1.default);
			function makeBlot(node) {
				var blot = Registry.find(node);
				if (blot == null) {
					try {
						blot = Registry.create(node);
					} catch (e) {
						blot = Registry.create(Registry.Scope.INLINE);
						[].slice.call(node.childNodes).forEach(function (child) {
							blot.domNode.appendChild(child);
						});
						node.parentNode.replaceChild(blot.domNode, node);
						blot.attach();
					}
				}
				return blot;
			}
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = ContainerBlot;

			/***/
		},
		/* 5 */
		/***/function (module, exports) {

			"use strict";

			var LinkedList = function () {
				function LinkedList() {
					this.head = this.tail = undefined;
					this.length = 0;
				}
				LinkedList.prototype.append = function () {
					var nodes = [];
					for (var _i = 0; _i < arguments.length; _i++) {
						nodes[_i - 0] = arguments[_i];
					}
					this.insertBefore(nodes[0], undefined);
					if (nodes.length > 1) {
						this.append.apply(this, nodes.slice(1));
					}
				};
				LinkedList.prototype.contains = function (node) {
					var cur,
					    next = this.iterator();
					while (cur = next()) {
						if (cur === node) return true;
					}
					return false;
				};
				LinkedList.prototype.insertBefore = function (node, refNode) {
					node.next = refNode;
					if (refNode != null) {
						node.prev = refNode.prev;
						if (refNode.prev != null) {
							refNode.prev.next = node;
						}
						refNode.prev = node;
						if (refNode === this.head) {
							this.head = node;
						}
					} else if (this.tail != null) {
						this.tail.next = node;
						node.prev = this.tail;
						this.tail = node;
					} else {
						node.prev = undefined;
						this.head = this.tail = node;
					}
					this.length += 1;
				};
				LinkedList.prototype.offset = function (target) {
					var index = 0,
					    cur = this.head;
					while (cur != null) {
						if (cur === target) return index;
						index += cur.length();
						cur = cur.next;
					}
					return -1;
				};
				LinkedList.prototype.remove = function (node) {
					if (!this.contains(node)) return;
					if (node.prev != null) node.prev.next = node.next;
					if (node.next != null) node.next.prev = node.prev;
					if (node === this.head) this.head = node.next;
					if (node === this.tail) this.tail = node.prev;
					this.length -= 1;
				};
				LinkedList.prototype.iterator = function (curNode) {
					if (curNode === void 0) {
						curNode = this.head;
					}
					// TODO use yield when we can
					return function () {
						var ret = curNode;
						if (curNode != null) curNode = curNode.next;
						return ret;
					};
				};
				LinkedList.prototype.find = function (index, inclusive) {
					if (inclusive === void 0) {
						inclusive = false;
					}
					var cur,
					    next = this.iterator();
					while (cur = next()) {
						var length_1 = cur.length();
						if (index < length_1 || inclusive && index === length_1 && (cur.next == null || cur.next.length() !== 0)) {
							return [cur, index];
						}
						index -= length_1;
					}
					return [null, 0];
				};
				LinkedList.prototype.forEach = function (callback) {
					var cur,
					    next = this.iterator();
					while (cur = next()) {
						callback(cur);
					}
				};
				LinkedList.prototype.forEachAt = function (index, length, callback) {
					if (length <= 0) return;
					var _a = this.find(index),
					    startNode = _a[0],
					    offset = _a[1];
					var cur,
					    curIndex = index - offset,
					    next = this.iterator(startNode);
					while ((cur = next()) && curIndex < index + length) {
						var curLength = cur.length();
						if (index > curIndex) {
							callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
						} else {
							callback(cur, 0, Math.min(curLength, index + length - curIndex));
						}
						curIndex += curLength;
					}
				};
				LinkedList.prototype.map = function (callback) {
					return this.reduce(function (memo, cur) {
						memo.push(callback(cur));
						return memo;
					}, []);
				};
				LinkedList.prototype.reduce = function (callback, memo) {
					var cur,
					    next = this.iterator();
					while (cur = next()) {
						memo = callback(memo, cur);
					}
					return memo;
				};
				return LinkedList;
			}();
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = LinkedList;

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var Registry = __webpack_require__(7);
			var ShadowBlot = function () {
				function ShadowBlot(domNode) {
					this.domNode = domNode;
					this.attach();
				}
				Object.defineProperty(ShadowBlot.prototype, "statics", {
					// Hack for accessing inherited static methods
					get: function get() {
						return this.constructor;
					},
					enumerable: true,
					configurable: true
				});
				ShadowBlot.create = function (value) {
					if (this.tagName == null) {
						throw new Registry.ParchmentError('Blot definition missing tagName');
					}
					var node;
					if (Array.isArray(this.tagName)) {
						if (typeof value === 'string') {
							value = value.toUpperCase();
							if (parseInt(value).toString() === value) {
								value = parseInt(value);
							}
						}
						if (typeof value === 'number') {
							node = document.createElement(this.tagName[value - 1]);
						} else if (this.tagName.indexOf(value) > -1) {
							node = document.createElement(value);
						} else {
							node = document.createElement(this.tagName[0]);
						}
					} else {
						node = document.createElement(this.tagName);
					}
					if (this.className) {
						node.classList.add(this.className);
					}
					return node;
				};
				ShadowBlot.prototype.attach = function () {
					this.domNode[Registry.DATA_KEY] = { blot: this };
				};
				ShadowBlot.prototype.clone = function () {
					var domNode = this.domNode.cloneNode();
					return Registry.create(domNode);
				};
				ShadowBlot.prototype.detach = function () {
					if (this.parent != null) this.parent.removeChild(this);
					delete this.domNode[Registry.DATA_KEY];
				};
				ShadowBlot.prototype.deleteAt = function (index, length) {
					var blot = this.isolate(index, length);
					blot.remove();
				};
				ShadowBlot.prototype.formatAt = function (index, length, name, value) {
					var blot = this.isolate(index, length);
					if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
						blot.wrap(name, value);
					} else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
						var parent_1 = Registry.create(this.statics.scope);
						blot.wrap(parent_1);
						parent_1.format(name, value);
					}
				};
				ShadowBlot.prototype.insertAt = function (index, value, def) {
					var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
					var ref = this.split(index);
					this.parent.insertBefore(blot, ref);
				};
				ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
					if (this.parent != null) {
						this.parent.children.remove(this);
					}
					parentBlot.children.insertBefore(this, refBlot);
					if (refBlot != null) {
						var refDomNode = refBlot.domNode;
					}
					if (this.next == null || this.domNode.nextSibling != refDomNode) {
						parentBlot.domNode.insertBefore(this.domNode, refDomNode);
					}
					this.parent = parentBlot;
				};
				ShadowBlot.prototype.isolate = function (index, length) {
					var target = this.split(index);
					target.split(length);
					return target;
				};
				ShadowBlot.prototype.length = function () {
					return 1;
				};
				;
				ShadowBlot.prototype.offset = function (root) {
					if (root === void 0) {
						root = this.parent;
					}
					if (this.parent == null || this == root) return 0;
					return this.parent.children.offset(this) + this.parent.offset(root);
				};
				ShadowBlot.prototype.optimize = function () {
					// TODO clean up once we use WeakMap
					if (this.domNode[Registry.DATA_KEY] != null) {
						delete this.domNode[Registry.DATA_KEY].mutations;
					}
				};
				ShadowBlot.prototype.remove = function () {
					if (this.domNode.parentNode != null) {
						this.domNode.parentNode.removeChild(this.domNode);
					}
					this.detach();
				};
				ShadowBlot.prototype.replace = function (target) {
					if (target.parent == null) return;
					target.parent.insertBefore(this, target.next);
					target.remove();
				};
				ShadowBlot.prototype.replaceWith = function (name, value) {
					var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
					replacement.replace(this);
					return replacement;
				};
				ShadowBlot.prototype.split = function (index, force) {
					return index === 0 ? this : this.next;
				};
				ShadowBlot.prototype.update = function (mutations) {
					if (mutations === void 0) {
						mutations = [];
					}
					// Nothing to do by default
				};
				ShadowBlot.prototype.wrap = function (name, value) {
					var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
					if (this.parent != null) {
						this.parent.insertBefore(wrapper, this.next);
					}
					wrapper.appendChild(this);
					return wrapper;
				};
				ShadowBlot.blotName = 'abstract';
				return ShadowBlot;
			}();
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = ShadowBlot;

			/***/
		},
		/* 7 */
		/***/function (module, exports) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var ParchmentError = function (_super) {
				__extends(ParchmentError, _super);
				function ParchmentError(message) {
					message = '[Parchment] ' + message;
					_super.call(this, message);
					this.message = message;
					this.name = this.constructor.name;
				}
				return ParchmentError;
			}(Error);
			exports.ParchmentError = ParchmentError;
			var attributes = {};
			var classes = {};
			var tags = {};
			var types = {};
			exports.DATA_KEY = '__blot';
			(function (Scope) {
				Scope[Scope["TYPE"] = 3] = "TYPE";
				Scope[Scope["LEVEL"] = 12] = "LEVEL";
				Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
				Scope[Scope["BLOT"] = 14] = "BLOT";
				Scope[Scope["INLINE"] = 7] = "INLINE";
				Scope[Scope["BLOCK"] = 11] = "BLOCK";
				Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
				Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
				Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
				Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
				Scope[Scope["ANY"] = 15] = "ANY";
			})(exports.Scope || (exports.Scope = {}));
			var Scope = exports.Scope;
			;
			function create(input, value) {
				var match = query(input);
				if (match == null) {
					throw new ParchmentError("Unable to create " + input + " blot");
				}
				var BlotClass = match;
				var node = input instanceof Node ? input : BlotClass.create(value);
				return new BlotClass(node, value);
			}
			exports.create = create;
			function find(node, bubble) {
				if (bubble === void 0) {
					bubble = false;
				}
				if (node == null) return null;
				if (node[exports.DATA_KEY] != null) return node[exports.DATA_KEY].blot;
				if (bubble) return find(node.parentNode, bubble);
				return null;
			}
			exports.find = find;
			function query(query, scope) {
				if (scope === void 0) {
					scope = Scope.ANY;
				}
				var match;
				if (typeof query === 'string') {
					match = types[query] || attributes[query];
				} else if (query instanceof Text) {
					match = types['text'];
				} else if (typeof query === 'number') {
					if (query & Scope.LEVEL & Scope.BLOCK) {
						match = types['block'];
					} else if (query & Scope.LEVEL & Scope.INLINE) {
						match = types['inline'];
					}
				} else if (query instanceof HTMLElement) {
					var names = (query.getAttribute('class') || '').split(/\s+/);
					for (var i in names) {
						if (match = classes[names[i]]) break;
					}
					match = match || tags[query.tagName];
				}
				if (match == null) return null;
				if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope) return match;
				return null;
			}
			exports.query = query;
			function register() {
				var Definitions = [];
				for (var _i = 0; _i < arguments.length; _i++) {
					Definitions[_i - 0] = arguments[_i];
				}
				if (Definitions.length > 1) {
					return Definitions.map(function (d) {
						return register(d);
					});
				}
				var Definition = Definitions[0];
				if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
					throw new ParchmentError('Invalid definition');
				} else if (Definition.blotName === 'abstract') {
					throw new ParchmentError('Cannot register abstract class');
				}
				types[Definition.blotName || Definition.attrName] = Definition;
				if (typeof Definition.keyName === 'string') {
					attributes[Definition.keyName] = Definition;
				} else {
					if (Definition.className != null) {
						classes[Definition.className] = Definition;
					}
					if (Definition.tagName != null) {
						if (Array.isArray(Definition.tagName)) {
							Definition.tagName = Definition.tagName.map(function (tagName) {
								return tagName.toUpperCase();
							});
						} else {
							Definition.tagName = Definition.tagName.toUpperCase();
						}
						var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
						tagNames.forEach(function (tag) {
							if (tags[tag] == null || Definition.className == null) {
								tags[tag] = Definition;
							}
						});
					}
				}
				return Definition;
			}
			exports.register = register;

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var attributor_1 = __webpack_require__(9);
			var store_1 = __webpack_require__(10);
			var container_1 = __webpack_require__(4);
			var Registry = __webpack_require__(7);
			var FormatBlot = function (_super) {
				__extends(FormatBlot, _super);
				function FormatBlot() {
					_super.apply(this, arguments);
				}
				FormatBlot.formats = function (domNode) {
					if (typeof this.tagName === 'string') {
						return true;
					} else if (Array.isArray(this.tagName)) {
						return domNode.tagName.toLowerCase();
					}
					return undefined;
				};
				FormatBlot.prototype.attach = function () {
					_super.prototype.attach.call(this);
					this.attributes = new store_1.default(this.domNode);
				};
				FormatBlot.prototype.format = function (name, value) {
					var format = Registry.query(name);
					if (format instanceof attributor_1.default) {
						this.attributes.attribute(format, value);
					} else if (value) {
						if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
							this.replaceWith(name, value);
						}
					}
				};
				FormatBlot.prototype.formats = function () {
					var formats = this.attributes.values();
					var format = this.statics.formats(this.domNode);
					if (format != null) {
						formats[this.statics.blotName] = format;
					}
					return formats;
				};
				FormatBlot.prototype.replaceWith = function (name, value) {
					var replacement = _super.prototype.replaceWith.call(this, name, value);
					this.attributes.copy(replacement);
					return replacement;
				};
				FormatBlot.prototype.update = function (mutations) {
					var _this = this;
					_super.prototype.update.call(this, mutations);
					if (mutations.some(function (mutation) {
						return mutation.target === _this.domNode && mutation.type === 'attributes';
					})) {
						this.attributes.build();
					}
				};
				FormatBlot.prototype.wrap = function (name, value) {
					var wrapper = _super.prototype.wrap.call(this, name, value);
					if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
						this.attributes.move(wrapper);
					}
					return wrapper;
				};
				return FormatBlot;
			}(container_1.default);
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = FormatBlot;

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var Registry = __webpack_require__(7);
			var Attributor = function () {
				function Attributor(attrName, keyName, options) {
					if (options === void 0) {
						options = {};
					}
					this.attrName = attrName;
					this.keyName = keyName;
					var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
					if (options.scope != null) {
						// Ignore type bits, force attribute bit
						this.scope = options.scope & Registry.Scope.LEVEL | attributeBit;
					} else {
						this.scope = Registry.Scope.ATTRIBUTE;
					}
					if (options.whitelist != null) this.whitelist = options.whitelist;
				}
				Attributor.keys = function (node) {
					return [].map.call(node.attributes, function (item) {
						return item.name;
					});
				};
				Attributor.prototype.add = function (node, value) {
					if (!this.canAdd(node, value)) return false;
					node.setAttribute(this.keyName, value);
					return true;
				};
				Attributor.prototype.canAdd = function (node, value) {
					var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
					if (match != null && (this.whitelist == null || this.whitelist.indexOf(value) > -1)) {
						return true;
					}
					return false;
				};
				Attributor.prototype.remove = function (node) {
					node.removeAttribute(this.keyName);
				};
				Attributor.prototype.value = function (node) {
					return node.getAttribute(this.keyName);
				};
				return Attributor;
			}();
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = Attributor;

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var attributor_1 = __webpack_require__(9);
			var class_1 = __webpack_require__(11);
			var style_1 = __webpack_require__(12);
			var Registry = __webpack_require__(7);
			var AttributorStore = function () {
				function AttributorStore(domNode) {
					this.attributes = {};
					this.domNode = domNode;
					this.build();
				}
				AttributorStore.prototype.attribute = function (attribute, value) {
					if (value) {
						if (attribute.add(this.domNode, value)) {
							if (attribute.value(this.domNode) != null) {
								this.attributes[attribute.attrName] = attribute;
							} else {
								delete this.attributes[attribute.attrName];
							}
						}
					} else {
						attribute.remove(this.domNode);
						delete this.attributes[attribute.attrName];
					}
				};
				AttributorStore.prototype.build = function () {
					var _this = this;
					this.attributes = {};
					var attributes = attributor_1.default.keys(this.domNode);
					var classes = class_1.default.keys(this.domNode);
					var styles = style_1.default.keys(this.domNode);
					attributes.concat(classes).concat(styles).forEach(function (name) {
						var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
						if (attr instanceof attributor_1.default) {
							_this.attributes[attr.attrName] = attr;
						}
					});
				};
				AttributorStore.prototype.copy = function (target) {
					var _this = this;
					Object.keys(this.attributes).forEach(function (key) {
						var value = _this.attributes[key].value(_this.domNode);
						target.format(key, value);
					});
				};
				AttributorStore.prototype.move = function (target) {
					var _this = this;
					this.copy(target);
					Object.keys(this.attributes).forEach(function (key) {
						_this.attributes[key].remove(_this.domNode);
					});
					this.attributes = {};
				};
				AttributorStore.prototype.values = function () {
					var _this = this;
					return Object.keys(this.attributes).reduce(function (attributes, name) {
						attributes[name] = _this.attributes[name].value(_this.domNode);
						return attributes;
					}, {});
				};
				return AttributorStore;
			}();
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = AttributorStore;

			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var attributor_1 = __webpack_require__(9);
			function match(node, prefix) {
				var className = node.getAttribute('class') || '';
				return className.split(/\s+/).filter(function (name) {
					return name.indexOf(prefix + "-") === 0;
				});
			}
			var ClassAttributor = function (_super) {
				__extends(ClassAttributor, _super);
				function ClassAttributor() {
					_super.apply(this, arguments);
				}
				ClassAttributor.keys = function (node) {
					return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
						return name.split('-').slice(0, -1).join('-');
					});
				};
				ClassAttributor.prototype.add = function (node, value) {
					if (!this.canAdd(node, value)) return false;
					this.remove(node);
					node.classList.add(this.keyName + "-" + value);
					return true;
				};
				ClassAttributor.prototype.remove = function (node) {
					var matches = match(node, this.keyName);
					matches.forEach(function (name) {
						node.classList.remove(name);
					});
					if (node.classList.length === 0) {
						node.removeAttribute('class');
					}
				};
				ClassAttributor.prototype.value = function (node) {
					var result = match(node, this.keyName)[0] || '';
					return result.slice(this.keyName.length + 1); // +1 for hyphen
				};
				return ClassAttributor;
			}(attributor_1.default);
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = ClassAttributor;

			/***/
		},
		/* 12 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var attributor_1 = __webpack_require__(9);
			function camelize(name) {
				var parts = name.split('-');
				var rest = parts.slice(1).map(function (part) {
					return part[0].toUpperCase() + part.slice(1);
				}).join('');
				return parts[0] + rest;
			}
			var StyleAttributor = function (_super) {
				__extends(StyleAttributor, _super);
				function StyleAttributor() {
					_super.apply(this, arguments);
				}
				StyleAttributor.keys = function (node) {
					return (node.getAttribute('style') || '').split(';').map(function (value) {
						var arr = value.split(':');
						return arr[0].trim();
					});
				};
				StyleAttributor.prototype.add = function (node, value) {
					if (!this.canAdd(node, value)) return false;
					node.style[camelize(this.keyName)] = value;
					return true;
				};
				StyleAttributor.prototype.remove = function (node) {
					node.style[camelize(this.keyName)] = '';
					if (!node.getAttribute('style')) {
						node.removeAttribute('style');
					}
				};
				StyleAttributor.prototype.value = function (node) {
					return node.style[camelize(this.keyName)];
				};
				return StyleAttributor;
			}(attributor_1.default);
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = StyleAttributor;

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var shadow_1 = __webpack_require__(6);
			var Registry = __webpack_require__(7);
			var LeafBlot = function (_super) {
				__extends(LeafBlot, _super);
				function LeafBlot() {
					_super.apply(this, arguments);
				}
				LeafBlot.value = function (domNode) {
					return true;
				};
				LeafBlot.prototype.index = function (node, offset) {
					if (node !== this.domNode) return -1;
					return Math.min(offset, 1);
				};
				LeafBlot.prototype.position = function (index, inclusive) {
					var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
					if (index > 0) offset += 1;
					return [this.parent.domNode, offset];
				};
				LeafBlot.prototype.value = function () {
					return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
					var _a;
				};
				LeafBlot.scope = Registry.Scope.INLINE_BLOT;
				return LeafBlot;
			}(shadow_1.default);
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = LeafBlot;

			/***/
		},
		/* 14 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var container_1 = __webpack_require__(4);
			var Registry = __webpack_require__(7);
			var OBSERVER_CONFIG = {
				attributes: true,
				characterData: true,
				characterDataOldValue: true,
				childList: true,
				subtree: true
			};
			var MAX_OPTIMIZE_ITERATIONS = 100;
			var ScrollBlot = function (_super) {
				__extends(ScrollBlot, _super);
				function ScrollBlot(node) {
					var _this = this;
					_super.call(this, node);
					this.parent = null;
					this.observer = new MutationObserver(function (mutations) {
						_this.update(mutations);
					});
					this.observer.observe(this.domNode, OBSERVER_CONFIG);
				}
				ScrollBlot.prototype.detach = function () {
					_super.prototype.detach.call(this);
					this.observer.disconnect();
				};
				ScrollBlot.prototype.deleteAt = function (index, length) {
					this.update();
					if (index === 0 && length === this.length()) {
						this.children.forEach(function (child) {
							child.remove();
						});
					} else {
						_super.prototype.deleteAt.call(this, index, length);
					}
				};
				ScrollBlot.prototype.formatAt = function (index, length, name, value) {
					this.update();
					_super.prototype.formatAt.call(this, index, length, name, value);
				};
				ScrollBlot.prototype.insertAt = function (index, value, def) {
					this.update();
					_super.prototype.insertAt.call(this, index, value, def);
				};
				ScrollBlot.prototype.optimize = function (mutations) {
					var _this = this;
					if (mutations === void 0) {
						mutations = [];
					}
					_super.prototype.optimize.call(this);
					mutations.push.apply(mutations, this.observer.takeRecords());
					// TODO use WeakMap
					var mark = function mark(blot, markParent) {
						if (markParent === void 0) {
							markParent = true;
						}
						if (blot == null || blot === _this) return;
						if (blot.domNode.parentNode == null) return;
						if (blot.domNode[Registry.DATA_KEY].mutations == null) {
							blot.domNode[Registry.DATA_KEY].mutations = [];
						}
						if (markParent) mark(blot.parent);
					};
					var optimize = function optimize(blot) {
						if (blot.domNode[Registry.DATA_KEY] == null || blot.domNode[Registry.DATA_KEY].mutations == null) {
							return;
						}
						if (blot instanceof container_1.default) {
							blot.children.forEach(optimize);
						}
						blot.optimize();
					};
					var remaining = mutations;
					for (var i = 0; remaining.length > 0; i += 1) {
						if (i >= MAX_OPTIMIZE_ITERATIONS) {
							throw new Error('[Parchment] Maximum optimize iterations reached');
						}
						remaining.forEach(function (mutation) {
							var blot = Registry.find(mutation.target, true);
							if (blot == null) return;
							if (blot.domNode === mutation.target) {
								if (mutation.type === 'childList') {
									mark(Registry.find(mutation.previousSibling, false));
									[].forEach.call(mutation.addedNodes, function (node) {
										var child = Registry.find(node, false);
										mark(child, false);
										if (child instanceof container_1.default) {
											child.children.forEach(function (grandChild) {
												mark(grandChild, false);
											});
										}
									});
								} else if (mutation.type === 'attributes') {
									mark(blot.prev);
								}
							}
							mark(blot);
						});
						this.children.forEach(optimize);
						remaining = this.observer.takeRecords();
						mutations.push.apply(mutations, remaining);
					}
				};
				ScrollBlot.prototype.update = function (mutations) {
					var _this = this;
					mutations = mutations || this.observer.takeRecords();
					// TODO use WeakMap
					mutations.map(function (mutation) {
						var blot = Registry.find(mutation.target, true);
						if (blot == null) return;
						if (blot.domNode[Registry.DATA_KEY].mutations == null) {
							blot.domNode[Registry.DATA_KEY].mutations = [mutation];
							return blot;
						} else {
							blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
							return null;
						}
					}).forEach(function (blot) {
						if (blot == null || blot === _this) return;
						blot.update(blot.domNode[Registry.DATA_KEY].mutations || []);
					});
					if (this.domNode[Registry.DATA_KEY].mutations != null) {
						_super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations);
					}
					this.optimize(mutations);
				};
				ScrollBlot.blotName = 'scroll';
				ScrollBlot.defaultChild = 'block';
				ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
				ScrollBlot.tagName = 'DIV';
				return ScrollBlot;
			}(container_1.default);
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = ScrollBlot;

			/***/
		},
		/* 15 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var format_1 = __webpack_require__(8);
			var Registry = __webpack_require__(7);
			// Shallow object comparison
			function isEqual(obj1, obj2) {
				if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
				for (var prop in obj1) {
					if (obj1[prop] !== obj2[prop]) return false;
				}
				return true;
			}
			var InlineBlot = function (_super) {
				__extends(InlineBlot, _super);
				function InlineBlot() {
					_super.apply(this, arguments);
				}
				InlineBlot.formats = function (domNode) {
					if (domNode.tagName === InlineBlot.tagName) return undefined;
					return _super.formats.call(this, domNode);
				};
				InlineBlot.prototype.format = function (name, value) {
					var _this = this;
					if (name === this.statics.blotName && !value) {
						this.children.forEach(function (child) {
							if (!(child instanceof format_1.default)) {
								child = child.wrap(InlineBlot.blotName, true);
							}
							_this.attributes.copy(child);
						});
						this.unwrap();
					} else {
						_super.prototype.format.call(this, name, value);
					}
				};
				InlineBlot.prototype.formatAt = function (index, length, name, value) {
					if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
						var blot = this.isolate(index, length);
						blot.format(name, value);
					} else {
						_super.prototype.formatAt.call(this, index, length, name, value);
					}
				};
				InlineBlot.prototype.optimize = function () {
					_super.prototype.optimize.call(this);
					var formats = this.formats();
					if (Object.keys(formats).length === 0) {
						return this.unwrap(); // unformatted span
					}
					var next = this.next;
					if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
						next.moveChildren(this);
						next.remove();
					}
				};
				InlineBlot.blotName = 'inline';
				InlineBlot.scope = Registry.Scope.INLINE_BLOT;
				InlineBlot.tagName = 'SPAN';
				return InlineBlot;
			}(format_1.default);
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = InlineBlot;

			/***/
		},
		/* 16 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var format_1 = __webpack_require__(8);
			var Registry = __webpack_require__(7);
			var BlockBlot = function (_super) {
				__extends(BlockBlot, _super);
				function BlockBlot() {
					_super.apply(this, arguments);
				}
				BlockBlot.formats = function (domNode) {
					var tagName = Registry.query(BlockBlot.blotName).tagName;
					if (domNode.tagName === tagName) return undefined;
					return _super.formats.call(this, domNode);
				};
				BlockBlot.prototype.format = function (name, value) {
					if (name === this.statics.blotName && !value) {
						this.replaceWith(BlockBlot.blotName);
					} else {
						_super.prototype.format.call(this, name, value);
					}
				};
				BlockBlot.prototype.formatAt = function (index, length, name, value) {
					if (Registry.query(name, Registry.Scope.BLOCK) != null) {
						this.format(name, value);
					} else {
						_super.prototype.formatAt.call(this, index, length, name, value);
					}
				};
				BlockBlot.prototype.insertAt = function (index, value, def) {
					if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
						// Insert text or inline
						_super.prototype.insertAt.call(this, index, value, def);
					} else {
						var after = this.split(index);
						var blot = Registry.create(value, def);
						after.parent.insertBefore(blot, after);
					}
				};
				BlockBlot.blotName = 'block';
				BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
				BlockBlot.tagName = 'P';
				return BlockBlot;
			}(format_1.default);
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = BlockBlot;

			/***/
		},
		/* 17 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var leaf_1 = __webpack_require__(13);
			var EmbedBlot = function (_super) {
				__extends(EmbedBlot, _super);
				function EmbedBlot() {
					_super.apply(this, arguments);
				}
				EmbedBlot.formats = function (domNode) {
					return undefined;
				};
				EmbedBlot.prototype.format = function (name, value) {
					// super.formatAt wraps, which is what we want in general,
					// but this allows subclasses to overwrite for formats
					// that just apply to particular embeds
					_super.prototype.formatAt.call(this, 0, this.length(), name, value);
				};
				EmbedBlot.prototype.formatAt = function (index, length, name, value) {
					if (index === 0 && length === this.length()) {
						this.format(name, value);
					} else {
						_super.prototype.formatAt.call(this, index, length, name, value);
					}
				};
				EmbedBlot.prototype.formats = function () {
					return this.statics.formats(this.domNode);
				};
				return EmbedBlot;
			}(leaf_1.default);
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = EmbedBlot;

			/***/
		},
		/* 18 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
			var leaf_1 = __webpack_require__(13);
			var Registry = __webpack_require__(7);
			var TextBlot = function (_super) {
				__extends(TextBlot, _super);
				function TextBlot(node) {
					_super.call(this, node);
					this.text = this.statics.value(this.domNode);
				}
				TextBlot.create = function (value) {
					return document.createTextNode(value);
				};
				TextBlot.value = function (domNode) {
					return domNode.data;
				};
				TextBlot.prototype.deleteAt = function (index, length) {
					this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
				};
				TextBlot.prototype.index = function (node, offset) {
					if (this.domNode === node) {
						return offset;
					}
					return -1;
				};
				TextBlot.prototype.insertAt = function (index, value, def) {
					if (def == null) {
						this.text = this.text.slice(0, index) + value + this.text.slice(index);
						this.domNode.data = this.text;
					} else {
						_super.prototype.insertAt.call(this, index, value, def);
					}
				};
				TextBlot.prototype.length = function () {
					return this.text.length;
				};
				TextBlot.prototype.optimize = function () {
					_super.prototype.optimize.call(this);
					this.text = this.statics.value(this.domNode);
					if (this.text.length === 0) {
						this.remove();
					} else if (this.next instanceof TextBlot && this.next.prev === this) {
						this.insertAt(this.length(), this.next.value());
						this.next.remove();
					}
				};
				TextBlot.prototype.position = function (index, inclusive) {
					if (inclusive === void 0) {
						inclusive = false;
					}
					return [this.domNode, index];
				};
				TextBlot.prototype.split = function (index, force) {
					if (force === void 0) {
						force = false;
					}
					if (!force) {
						if (index === 0) return this;
						if (index === this.length()) return this.next;
					}
					var after = Registry.create(this.domNode.splitText(index));
					this.parent.insertBefore(after, this.next);
					this.text = this.statics.value(this.domNode);
					return after;
				};
				TextBlot.prototype.update = function (mutations) {
					var _this = this;
					if (mutations.some(function (mutation) {
						return mutation.type === 'characterData' && mutation.target === _this.domNode;
					})) {
						this.text = this.statics.value(this.domNode);
					}
				};
				TextBlot.prototype.value = function () {
					return this.text;
				};
				TextBlot.blotName = 'text';
				TextBlot.scope = Registry.Scope.INLINE_BLOT;
				return TextBlot;
			}(leaf_1.default);
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.default = TextBlot;

			/***/
		},
		/* 19 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = exports.overload = exports.expandConfig = undefined;

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			__webpack_require__(20);

			var _delta = __webpack_require__(21);

			var _delta2 = _interopRequireDefault(_delta);

			var _editor = __webpack_require__(28);

			var _editor2 = _interopRequireDefault(_editor);

			var _emitter = __webpack_require__(29);

			var _emitter2 = _interopRequireDefault(_emitter);

			var _module = __webpack_require__(40);

			var _module2 = _interopRequireDefault(_module);

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _selection = __webpack_require__(41);

			var _selection2 = _interopRequireDefault(_selection);

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _logger = __webpack_require__(31);

			var _logger2 = _interopRequireDefault(_logger);

			var _theme = __webpack_require__(42);

			var _theme2 = _interopRequireDefault(_theme);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var debug = (0, _logger2.default)('quill');

			var Quill = function () {
				_createClass(Quill, null, [{
					key: 'debug',
					value: function debug(limit) {
						_logger2.default.level(limit);
					}
				}, {
					key: 'import',
					value: function _import(name) {
						if (this.imports[name] == null) {
							debug.error('Cannot import ' + name + '. Are you sure it was registered?');
						}
						return this.imports[name];
					}
				}, {
					key: 'register',
					value: function register(path, target) {
						var _this = this;

						var overwrite = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

						if (typeof path !== 'string') {
							var name = path.attrName || path.blotName;
							if (typeof name === 'string') {
								// register(Blot | Attributor, overwrite)
								this.register('formats/' + name, path, target);
							} else {
								Object.keys(path).forEach(function (key) {
									_this.register(key, path[key], target);
								});
							}
						} else {
							if (this.imports[path] != null && !overwrite) {
								debug.warn('Overwriting ' + path + ' with', target);
							}
							this.imports[path] = target;
							if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
								_parchment2.default.register(target);
							}
						}
					}
				}]);

				function Quill(container) {
					var _this2 = this;

					var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					_classCallCheck(this, Quill);

					options = expandConfig(container, options);
					this.container = options.container;
					if (this.container == null) {
						return debug.error('Invalid Quill container', container);
					}
					if (options.debug) {
						Quill.debug(options.debug);
					}
					var html = this.container.innerHTML.trim();
					this.container.classList.add('ql-container');
					this.container.innerHTML = '';
					this.root = this.addContainer('ql-editor');
					this.emitter = new _emitter2.default();
					this.scroll = _parchment2.default.create(this.root, {
						emitter: this.emitter,
						whitelist: options.formats
					});
					this.editor = new _editor2.default(this.scroll, this.emitter);
					this.selection = new _selection2.default(this.scroll, this.emitter);
					this.theme = new options.theme(this, options);
					this.keyboard = this.theme.addModule('keyboard');
					this.clipboard = this.theme.addModule('clipboard');
					this.history = this.theme.addModule('history');
					this.theme.init();
					this.pasteHTML('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
					this.history.clear();
					if (options.readOnly) {
						this.disable();
					}
					if (options.placeholder) {
						this.root.setAttribute('data-placeholder', options.placeholder);
					}
					this.root.classList.toggle('ql-blank', this.editor.isBlank());
					this.emitter.on(_emitter2.default.events.TEXT_CHANGE, function (delta) {
						_this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
					});
				}

				_createClass(Quill, [{
					key: 'addContainer',
					value: function addContainer(container) {
						var refNode = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

						if (typeof container === 'string') {
							var className = container;
							container = document.createElement('div');
							container.classList.add(className);
						}
						this.container.insertBefore(container, refNode);
						return container;
					}
				}, {
					key: 'blur',
					value: function blur() {
						this.selection.setRange(null);
					}
				}, {
					key: 'deleteText',
					value: function deleteText(index, length, source) {
						var _overload = overload(index, length, source);

						var _overload2 = _slicedToArray(_overload, 4);

						index = _overload2[0];
						length = _overload2[1];
						source = _overload2[3];

						var range = this.getSelection();
						var change = this.editor.deleteText(index, length, source);
						range = shiftRange(range, index, -1 * length, source);
						this.setSelection(range, _emitter2.default.sources.SILENT);
						return change;
					}
				}, {
					key: 'disable',
					value: function disable() {
						this.enable(false);
					}
				}, {
					key: 'enable',
					value: function enable() {
						var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

						this.editor.enable(enabled);
						if (!enabled) {
							this.blur();
						}
					}
				}, {
					key: 'focus',
					value: function focus() {
						this.selection.focus();
						this.selection.scrollIntoView();
					}
				}, {
					key: 'format',
					value: function format(name, value) {
						var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

						var range = this.getSelection(true);
						var change = new _delta2.default();
						if (range == null) return change;
						if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
							change = this.formatLine(range, name, value, source);
						} else if (range.length === 0) {
							this.selection.format(name, value);
							return change;
						} else {
							change = this.formatText(range, name, value, source);
						}
						this.setSelection(range, _emitter2.default.sources.SILENT);
						return change;
					}
				}, {
					key: 'formatLine',
					value: function formatLine(index, length, name, value, source) {
						var formats = void 0;

						var _overload3 = overload(index, length, name, value, source);

						var _overload4 = _slicedToArray(_overload3, 4);

						index = _overload4[0];
						length = _overload4[1];
						formats = _overload4[2];
						source = _overload4[3];

						var range = this.getSelection();
						var change = this.editor.formatLine(index, length, formats, source);
						this.selection.setRange(range, true, _emitter2.default.sources.SILENT);
						this.selection.scrollIntoView();
						return change;
					}
				}, {
					key: 'formatText',
					value: function formatText(index, length, name, value, source) {
						var formats = void 0;

						var _overload5 = overload(index, length, name, value, source);

						var _overload6 = _slicedToArray(_overload5, 4);

						index = _overload6[0];
						length = _overload6[1];
						formats = _overload6[2];
						source = _overload6[3];

						var range = this.getSelection();
						var change = this.editor.formatText(index, length, formats, source);
						this.selection.setRange(range, true, _emitter2.default.sources.SILENT);
						this.selection.scrollIntoView();
						return change;
					}
				}, {
					key: 'getBounds',
					value: function getBounds(index) {
						var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

						if (typeof index === 'number') {
							return this.selection.getBounds(index, length);
						} else {
							return this.selection.getBounds(index.index, index.length);
						}
					}
				}, {
					key: 'getContents',
					value: function getContents() {
						var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
						var length = arguments.length <= 1 || arguments[1] === undefined ? this.getLength() - index : arguments[1];

						var _overload7 = overload(index, length);

						var _overload8 = _slicedToArray(_overload7, 2);

						index = _overload8[0];
						length = _overload8[1];

						return this.editor.getContents(index, length);
					}
				}, {
					key: 'getFormat',
					value: function getFormat() {
						var index = arguments.length <= 0 || arguments[0] === undefined ? this.getSelection() : arguments[0];
						var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

						if (typeof index === 'number') {
							return this.editor.getFormat(index, length);
						} else {
							return this.editor.getFormat(index.index, index.length);
						}
					}
				}, {
					key: 'getLength',
					value: function getLength() {
						return this.scroll.length();
					}
				}, {
					key: 'getModule',
					value: function getModule(name) {
						return this.theme.modules[name];
					}
				}, {
					key: 'getSelection',
					value: function getSelection() {
						var focus = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

						if (focus) this.focus();
						this.update(); // Make sure we access getRange with editor in consistent state
						return this.selection.getRange()[0];
					}
				}, {
					key: 'getText',
					value: function getText() {
						var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
						var length = arguments.length <= 1 || arguments[1] === undefined ? this.getLength() - index : arguments[1];

						var _overload9 = overload(index, length);

						var _overload10 = _slicedToArray(_overload9, 2);

						index = _overload10[0];
						length = _overload10[1];

						return this.editor.getText(index, length);
					}
				}, {
					key: 'hasFocus',
					value: function hasFocus() {
						return this.selection.hasFocus();
					}
				}, {
					key: 'insertEmbed',
					value: function insertEmbed(index, embed, value) {
						var source = arguments.length <= 3 || arguments[3] === undefined ? Quill.sources.API : arguments[3];

						var range = this.getSelection();
						var change = this.editor.insertEmbed(index, embed, value, source);
						range = shiftRange(range, change, source);
						this.setSelection(range, _emitter2.default.sources.SILENT);
						return change;
					}
				}, {
					key: 'insertText',
					value: function insertText(index, text, name, value, source) {
						var formats = void 0,
						    range = this.getSelection();

						var _overload11 = overload(index, 0, name, value, source);

						var _overload12 = _slicedToArray(_overload11, 4);

						index = _overload12[0];
						formats = _overload12[2];
						source = _overload12[3];

						var change = this.editor.insertText(index, text, formats, source);
						range = shiftRange(range, index, text.length, source);
						this.setSelection(range, _emitter2.default.sources.SILENT);
						return change;
					}
				}, {
					key: 'off',
					value: function off() {
						return this.emitter.off.apply(this.emitter, arguments);
					}
				}, {
					key: 'on',
					value: function on() {
						return this.emitter.on.apply(this.emitter, arguments);
					}
				}, {
					key: 'once',
					value: function once() {
						return this.emitter.once.apply(this.emitter, arguments);
					}
				}, {
					key: 'pasteHTML',
					value: function pasteHTML(index, html) {
						var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

						if (typeof index === 'string') {
							return this.setContents(this.clipboard.convert(index), html);
						} else {
							var paste = this.clipboard.convert(html);
							return this.updateContents(new _delta2.default().retain(index).concat(paste), source);
						}
					}
				}, {
					key: 'removeFormat',
					value: function removeFormat(index, length, source) {
						var range = this.getSelection();

						var _overload13 = overload(index, length, source);

						var _overload14 = _slicedToArray(_overload13, 4);

						index = _overload14[0];
						length = _overload14[1];
						source = _overload14[3];

						var change = this.editor.removeFormat(index, length, source);
						range = shiftRange(range, change, source);
						this.setSelection(range, _emitter2.default.sources.SILENT);
						return change;
					}
				}, {
					key: 'setContents',
					value: function setContents(delta) {
						var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

						delta = new _delta2.default(delta).slice();
						var lastOp = delta.ops[delta.ops.length - 1];
						// Quill contents must always end with newline
						if (lastOp == null || lastOp.insert[lastOp.insert.length - 1] !== '\n') {
							delta.insert('\n');
						}
						delta.delete(this.getLength());
						return this.editor.applyDelta(delta, source);
					}
				}, {
					key: 'setSelection',
					value: function setSelection(index, length, source) {
						if (index == null) {
							this.selection.setRange(null, length || Quill.sources.API);
						} else {
							var _overload15 = overload(index, length, source);

							var _overload16 = _slicedToArray(_overload15, 4);

							index = _overload16[0];
							length = _overload16[1];
							source = _overload16[3];

							this.selection.setRange(new _selection.Range(index, length), source);
						}
						this.selection.scrollIntoView();
					}
				}, {
					key: 'setText',
					value: function setText(text) {
						var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

						var delta = new _delta2.default().insert(text);
						return this.setContents(delta, source);
					}
				}, {
					key: 'update',
					value: function update() {
						var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter2.default.sources.USER : arguments[0];

						var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
						this.selection.update(source);
						return change;
					}
				}, {
					key: 'updateContents',
					value: function updateContents(delta) {
						var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

						var range = this.getSelection();
						if (Array.isArray(delta)) {
							delta = new _delta2.default(delta.slice());
						}
						var change = this.editor.applyDelta(delta, source);
						if (range != null) {
							range = shiftRange(range, change, source);
							this.setSelection(range, _emitter2.default.sources.SILENT);
						}
						return change;
					}
				}]);

				return Quill;
			}();

			Quill.DEFAULTS = {
				bounds: document.body,
				formats: null,
				modules: {},
				placeholder: '',
				readOnly: false,
				theme: 'default'
			};
			Quill.events = _emitter2.default.events;
			Quill.sources = _emitter2.default.sources;
			Quill.version = false ? 'dev' : "1.0.0";

			Quill.imports = {
				'delta': _delta2.default,
				'parchment': _parchment2.default,
				'core/module': _module2.default,
				'core/theme': _theme2.default
			};

			function expandConfig(container, userConfig) {
				userConfig = (0, _extend2.default)(true, {
					container: container,
					modules: {
						clipboard: true,
						keyboard: true,
						history: true
					}
				}, userConfig);
				if (userConfig.theme == null || userConfig.theme === Quill.DEFAULTS.theme) {
					userConfig.theme = _theme2.default;
				} else {
					userConfig.theme = Quill.import('themes/' + userConfig.theme);
					if (userConfig.theme == null) {
						throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
					}
				}
				var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
				[themeConfig, userConfig].forEach(function (config) {
					config.modules = config.modules || {};
					Object.keys(config.modules).forEach(function (module) {
						if (config.modules[module] === true) {
							config.modules[module] = {};
						}
					});
				});
				var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
				var moduleConfig = moduleNames.reduce(function (config, name) {
					var moduleClass = Quill.import('modules/' + name);
					if (moduleClass == null) {
						debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
					} else {
						config[name] = moduleClass.DEFAULTS || {};
					}
					return config;
				}, {});
				// Special case toolbar shorthand
				if (userConfig.modules != null && userConfig.modules.toolbar != null && userConfig.modules.toolbar.constructor !== Object) {
					userConfig.modules.toolbar = {
						container: userConfig.modules.toolbar
					};
				}
				userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
				['bounds', 'container'].forEach(function (key) {
					if (typeof userConfig[key] === 'string') {
						userConfig[key] = document.querySelector(userConfig[key]);
					}
				});
				return userConfig;
			}

			function overload(index, length, name, value, source) {
				var formats = {};
				if (typeof index.index === 'number' && typeof index.length === 'number') {
					// Allow for throwaway end (used by insertText/insertEmbed)
					if (typeof length !== 'number') {
						source = value, value = name, name = length, length = index.length, index = index.index;
					} else {
						length = index.length, index = index.index;
					}
				} else if (typeof length !== 'number') {
					source = value, value = name, name = length, length = 0;
				}
				// Handle format being object, two format name/value strings or excluded
				if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
					formats = name;
					source = value;
				} else if (typeof name === 'string') {
					if (value != null) {
						formats[name] = value;
					} else {
						source = name;
					}
				}
				// Handle optional source
				source = source || _emitter2.default.sources.API;
				return [index, length, formats, source];
			}

			function shiftRange(range, index, length, source) {
				if (range == null) return null;
				var start = void 0,
				    end = void 0;
				if (index instanceof _delta2.default) {
					var _map = [range.index, range.index + range.length].map(function (pos) {
						return index.transformPosition(pos, source === _emitter2.default.sources.USER);
					});

					var _map2 = _slicedToArray(_map, 2);

					start = _map2[0];
					end = _map2[1];
				} else {
					var _map3 = [range.index, range.index + range.length].map(function (pos) {
						if (pos < index || pos === index && source !== _emitter2.default.sources.USER) return pos;
						if (length >= 0) {
							return pos + length;
						} else {
							return Math.max(index, pos + length);
						}
					});

					var _map4 = _slicedToArray(_map3, 2);

					start = _map4[0];
					end = _map4[1];
				}
				return new _selection.Range(start, end - start);
			}

			exports.expandConfig = expandConfig;
			exports.overload = overload;
			exports.default = Quill;

			/***/
		},
		/* 20 */
		/***/function (module, exports) {

			'use strict';

			var elem = document.createElement('div');
			elem.classList.toggle('test-class', false);
			if (elem.classList.contains('test-class')) {
				(function () {
					var _toggle = DOMTokenList.prototype.toggle;
					DOMTokenList.prototype.toggle = function (token, force) {
						if (arguments.length > 1 && !this.contains(token) === !force) {
							return force;
						} else {
							return _toggle.call(this, token);
						}
					};
				})();
			}

			if (!String.prototype.startsWith) {
				String.prototype.startsWith = function (searchString, position) {
					position = position || 0;
					return this.substr(position, searchString.length) === searchString;
				};
			}

			if (!String.prototype.endsWith) {
				String.prototype.endsWith = function (searchString, position) {
					var subjectString = this.toString();
					if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
						position = subjectString.length;
					}
					position -= searchString.length;
					var lastIndex = subjectString.indexOf(searchString, position);
					return lastIndex !== -1 && lastIndex === position;
				};
			}

			if (!Array.prototype.find) {
				Object.defineProperty(Array.prototype, "find", {
					value: function value(predicate) {
						if (this === null) {
							throw new TypeError('Array.prototype.find called on null or undefined');
						}
						if (typeof predicate !== 'function') {
							throw new TypeError('predicate must be a function');
						}
						var list = Object(this);
						var length = list.length >>> 0;
						var thisArg = arguments[1];
						var value;

						for (var i = 0; i < length; i++) {
							value = list[i];
							if (predicate.call(thisArg, value, i, list)) {
								return value;
							}
						}
						return undefined;
					}
				});
			}

			// Disable resizing in Firefox
			document.addEventListener("DOMContentLoaded", function () {
				document.execCommand("enableObjectResizing", false, false);
			});

			/***/
		},
		/* 21 */
		/***/function (module, exports, __webpack_require__) {

			var diff = __webpack_require__(22);
			var equal = __webpack_require__(23);
			var extend = __webpack_require__(26);
			var op = __webpack_require__(27);

			var NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()


			var Delta = function Delta(ops) {
				// Assume we are given a well formed ops
				if (Array.isArray(ops)) {
					this.ops = ops;
				} else if (ops != null && Array.isArray(ops.ops)) {
					this.ops = ops.ops;
				} else {
					this.ops = [];
				}
			};

			Delta.prototype.insert = function (text, attributes) {
				var newOp = {};
				if (text.length === 0) return this;
				newOp.insert = text;
				if ((typeof attributes === 'undefined' ? 'undefined' : _typeof2(attributes)) === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
				return this.push(newOp);
			};

			Delta.prototype['delete'] = function (length) {
				if (length <= 0) return this;
				return this.push({ 'delete': length });
			};

			Delta.prototype.retain = function (length, attributes) {
				if (length <= 0) return this;
				var newOp = { retain: length };
				if ((typeof attributes === 'undefined' ? 'undefined' : _typeof2(attributes)) === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
				return this.push(newOp);
			};

			Delta.prototype.push = function (newOp) {
				var index = this.ops.length;
				var lastOp = this.ops[index - 1];
				newOp = extend(true, {}, newOp);
				if ((typeof lastOp === 'undefined' ? 'undefined' : _typeof2(lastOp)) === 'object') {
					if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
						this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
						return this;
					}
					// Since it does not matter if we insert before or after deleting at the same index,
					// always prefer to insert first
					if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
						index -= 1;
						lastOp = this.ops[index - 1];
						if ((typeof lastOp === 'undefined' ? 'undefined' : _typeof2(lastOp)) !== 'object') {
							this.ops.unshift(newOp);
							return this;
						}
					}
					if (equal(newOp.attributes, lastOp.attributes)) {
						if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
							this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
							if (_typeof2(newOp.attributes) === 'object') this.ops[index - 1].attributes = newOp.attributes;
							return this;
						} else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
							this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
							if (_typeof2(newOp.attributes) === 'object') this.ops[index - 1].attributes = newOp.attributes;
							return this;
						}
					}
				}
				if (index === this.ops.length) {
					this.ops.push(newOp);
				} else {
					this.ops.splice(index, 0, newOp);
				}
				return this;
			};

			Delta.prototype.chop = function () {
				var lastOp = this.ops[this.ops.length - 1];
				if (lastOp && lastOp.retain && !lastOp.attributes) {
					this.ops.pop();
				}
				return this;
			};

			Delta.prototype.length = function () {
				return this.ops.reduce(function (length, elem) {
					return length + op.length(elem);
				}, 0);
			};

			Delta.prototype.slice = function (start, end) {
				start = start || 0;
				if (typeof end !== 'number') end = Infinity;
				var ops = [];
				var iter = op.iterator(this.ops);
				var index = 0;
				while (index < end && iter.hasNext()) {
					var nextOp;
					if (index < start) {
						nextOp = iter.next(start - index);
					} else {
						nextOp = iter.next(end - index);
						ops.push(nextOp);
					}
					index += op.length(nextOp);
				}
				return new Delta(ops);
			};

			Delta.prototype.compose = function (other) {
				var thisIter = op.iterator(this.ops);
				var otherIter = op.iterator(other.ops);
				var delta = new Delta();
				while (thisIter.hasNext() || otherIter.hasNext()) {
					if (otherIter.peekType() === 'insert') {
						delta.push(otherIter.next());
					} else if (thisIter.peekType() === 'delete') {
						delta.push(thisIter.next());
					} else {
						var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
						var thisOp = thisIter.next(length);
						var otherOp = otherIter.next(length);
						if (typeof otherOp.retain === 'number') {
							var newOp = {};
							if (typeof thisOp.retain === 'number') {
								newOp.retain = length;
							} else {
								newOp.insert = thisOp.insert;
							}
							// Preserve null when composing with a retain, otherwise remove it for inserts
							var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
							if (attributes) newOp.attributes = attributes;
							delta.push(newOp);
							// Other op should be delete, we could be an insert or retain
							// Insert + delete cancels out
						} else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
							delta.push(otherOp);
						}
					}
				}
				return delta.chop();
			};

			Delta.prototype.concat = function (other) {
				var delta = new Delta(this.ops.slice());
				if (other.ops.length > 0) {
					delta.push(other.ops[0]);
					delta.ops = delta.ops.concat(other.ops.slice(1));
				}
				return delta;
			};

			Delta.prototype.diff = function (other) {
				var delta = new Delta();
				if (this.ops === other.ops) {
					return delta;
				}
				var strings = [this.ops, other.ops].map(function (ops) {
					return ops.map(function (op) {
						if (op.insert != null) {
							return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
						}
						var prep = ops === other.ops ? 'on' : 'with';
						throw new Error('diff() called ' + prep + ' non-document');
					}).join('');
				});
				var diffResult = diff(strings[0], strings[1]);
				var thisIter = op.iterator(this.ops);
				var otherIter = op.iterator(other.ops);
				diffResult.forEach(function (component) {
					var length = component[1].length;
					while (length > 0) {
						var opLength = 0;
						switch (component[0]) {
							case diff.INSERT:
								opLength = Math.min(otherIter.peekLength(), length);
								delta.push(otherIter.next(opLength));
								break;
							case diff.DELETE:
								opLength = Math.min(length, thisIter.peekLength());
								thisIter.next(opLength);
								delta['delete'](opLength);
								break;
							case diff.EQUAL:
								opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
								var thisOp = thisIter.next(opLength);
								var otherOp = otherIter.next(opLength);
								if (equal(thisOp.insert, otherOp.insert)) {
									delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
								} else {
									delta.push(otherOp)['delete'](opLength);
								}
								break;
						}
						length -= opLength;
					}
				});
				return delta.chop();
			};

			Delta.prototype.transform = function (other, priority) {
				priority = !!priority;
				if (typeof other === 'number') {
					return this.transformPosition(other, priority);
				}
				var thisIter = op.iterator(this.ops);
				var otherIter = op.iterator(other.ops);
				var delta = new Delta();
				while (thisIter.hasNext() || otherIter.hasNext()) {
					if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
						delta.retain(op.length(thisIter.next()));
					} else if (otherIter.peekType() === 'insert') {
						delta.push(otherIter.next());
					} else {
						var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
						var thisOp = thisIter.next(length);
						var otherOp = otherIter.next(length);
						if (thisOp['delete']) {
							// Our delete either makes their delete redundant or removes their retain
							continue;
						} else if (otherOp['delete']) {
							delta.push(otherOp);
						} else {
							// We retain either their retain or insert
							delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
						}
					}
				}
				return delta.chop();
			};

			Delta.prototype.transformPosition = function (index, priority) {
				priority = !!priority;
				var thisIter = op.iterator(this.ops);
				var offset = 0;
				while (thisIter.hasNext() && offset <= index) {
					var length = thisIter.peekLength();
					var nextType = thisIter.peekType();
					thisIter.next();
					if (nextType === 'delete') {
						index -= Math.min(length, index - offset);
						continue;
					} else if (nextType === 'insert' && (offset < index || !priority)) {
						index += length;
					}
					offset += length;
				}
				return index;
			};

			module.exports = Delta;

			/***/
		},
		/* 22 */
		/***/function (module, exports) {

			/**
    * This library modifies the diff-patch-match library by Neil Fraser
    * by removing the patch and match functionality and certain advanced
    * options in the diff function. The original license is as follows:
    *
    * ===
    *
    * Diff Match and Patch
    *
    * Copyright 2006 Google Inc.
    * http://code.google.com/p/google-diff-match-patch/
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */

			/**
    * The data structure representing a diff is an array of tuples:
    * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
    * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
    */
			var DIFF_DELETE = -1;
			var DIFF_INSERT = 1;
			var DIFF_EQUAL = 0;

			/**
    * Find the differences between two texts.  Simplifies the problem by stripping
    * any common prefix or suffix off the texts before diffing.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @return {Array} Array of diff tuples.
    */
			function diff_main(text1, text2) {
				// Check for equality (speedup).
				if (text1 == text2) {
					if (text1) {
						return [[DIFF_EQUAL, text1]];
					}
					return [];
				}

				// Trim off common prefix (speedup).
				var commonlength = diff_commonPrefix(text1, text2);
				var commonprefix = text1.substring(0, commonlength);
				text1 = text1.substring(commonlength);
				text2 = text2.substring(commonlength);

				// Trim off common suffix (speedup).
				commonlength = diff_commonSuffix(text1, text2);
				var commonsuffix = text1.substring(text1.length - commonlength);
				text1 = text1.substring(0, text1.length - commonlength);
				text2 = text2.substring(0, text2.length - commonlength);

				// Compute the diff on the middle block.
				var diffs = diff_compute_(text1, text2);

				// Restore the prefix and suffix.
				if (commonprefix) {
					diffs.unshift([DIFF_EQUAL, commonprefix]);
				}
				if (commonsuffix) {
					diffs.push([DIFF_EQUAL, commonsuffix]);
				}
				diff_cleanupMerge(diffs);
				return diffs;
			};

			/**
    * Find the differences between two texts.  Assumes that the texts do not
    * have any common prefix or suffix.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @return {Array} Array of diff tuples.
    */
			function diff_compute_(text1, text2) {
				var diffs;

				if (!text1) {
					// Just add some text (speedup).
					return [[DIFF_INSERT, text2]];
				}

				if (!text2) {
					// Just delete some text (speedup).
					return [[DIFF_DELETE, text1]];
				}

				var longtext = text1.length > text2.length ? text1 : text2;
				var shorttext = text1.length > text2.length ? text2 : text1;
				var i = longtext.indexOf(shorttext);
				if (i != -1) {
					// Shorter text is inside the longer text (speedup).
					diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
					// Swap insertions for deletions if diff is reversed.
					if (text1.length > text2.length) {
						diffs[0][0] = diffs[2][0] = DIFF_DELETE;
					}
					return diffs;
				}

				if (shorttext.length == 1) {
					// Single character string.
					// After the previous speedup, the character can't be an equality.
					return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
				}

				// Check to see if the problem can be split in two.
				var hm = diff_halfMatch_(text1, text2);
				if (hm) {
					// A half-match was found, sort out the return data.
					var text1_a = hm[0];
					var text1_b = hm[1];
					var text2_a = hm[2];
					var text2_b = hm[3];
					var mid_common = hm[4];
					// Send both pairs off for separate processing.
					var diffs_a = diff_main(text1_a, text2_a);
					var diffs_b = diff_main(text1_b, text2_b);
					// Merge the results.
					return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
				}

				return diff_bisect_(text1, text2);
			};

			/**
    * Find the 'middle snake' of a diff, split the problem in two
    * and return the recursively constructed diff.
    * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @return {Array} Array of diff tuples.
    * @private
    */
			function diff_bisect_(text1, text2) {
				// Cache the text lengths to prevent multiple calls.
				var text1_length = text1.length;
				var text2_length = text2.length;
				var max_d = Math.ceil((text1_length + text2_length) / 2);
				var v_offset = max_d;
				var v_length = 2 * max_d;
				var v1 = new Array(v_length);
				var v2 = new Array(v_length);
				// Setting all elements to -1 is faster in Chrome & Firefox than mixing
				// integers and undefined.
				for (var x = 0; x < v_length; x++) {
					v1[x] = -1;
					v2[x] = -1;
				}
				v1[v_offset + 1] = 0;
				v2[v_offset + 1] = 0;
				var delta = text1_length - text2_length;
				// If the total number of characters is odd, then the front path will collide
				// with the reverse path.
				var front = delta % 2 != 0;
				// Offsets for start and end of k loop.
				// Prevents mapping of space beyond the grid.
				var k1start = 0;
				var k1end = 0;
				var k2start = 0;
				var k2end = 0;
				for (var d = 0; d < max_d; d++) {
					// Walk the front path one step.
					for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
						var k1_offset = v_offset + k1;
						var x1;
						if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
							x1 = v1[k1_offset + 1];
						} else {
							x1 = v1[k1_offset - 1] + 1;
						}
						var y1 = x1 - k1;
						while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
							x1++;
							y1++;
						}
						v1[k1_offset] = x1;
						if (x1 > text1_length) {
							// Ran off the right of the graph.
							k1end += 2;
						} else if (y1 > text2_length) {
							// Ran off the bottom of the graph.
							k1start += 2;
						} else if (front) {
							var k2_offset = v_offset + delta - k1;
							if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
								// Mirror x2 onto top-left coordinate system.
								var x2 = text1_length - v2[k2_offset];
								if (x1 >= x2) {
									// Overlap detected.
									return diff_bisectSplit_(text1, text2, x1, y1);
								}
							}
						}
					}

					// Walk the reverse path one step.
					for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
						var k2_offset = v_offset + k2;
						var x2;
						if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
							x2 = v2[k2_offset + 1];
						} else {
							x2 = v2[k2_offset - 1] + 1;
						}
						var y2 = x2 - k2;
						while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
							x2++;
							y2++;
						}
						v2[k2_offset] = x2;
						if (x2 > text1_length) {
							// Ran off the left of the graph.
							k2end += 2;
						} else if (y2 > text2_length) {
							// Ran off the top of the graph.
							k2start += 2;
						} else if (!front) {
							var k1_offset = v_offset + delta - k2;
							if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
								var x1 = v1[k1_offset];
								var y1 = v_offset + x1 - k1_offset;
								// Mirror x2 onto top-left coordinate system.
								x2 = text1_length - x2;
								if (x1 >= x2) {
									// Overlap detected.
									return diff_bisectSplit_(text1, text2, x1, y1);
								}
							}
						}
					}
				}
				// Diff took too long and hit the deadline or
				// number of diffs equals number of characters, no commonality at all.
				return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
			};

			/**
    * Given the location of the 'middle snake', split the diff in two parts
    * and recurse.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {number} x Index of split point in text1.
    * @param {number} y Index of split point in text2.
    * @return {Array} Array of diff tuples.
    */
			function diff_bisectSplit_(text1, text2, x, y) {
				var text1a = text1.substring(0, x);
				var text2a = text2.substring(0, y);
				var text1b = text1.substring(x);
				var text2b = text2.substring(y);

				// Compute both diffs serially.
				var diffs = diff_main(text1a, text2a);
				var diffsb = diff_main(text1b, text2b);

				return diffs.concat(diffsb);
			};

			/**
    * Determine the common prefix of two strings.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {number} The number of characters common to the start of each
    *     string.
    */
			function diff_commonPrefix(text1, text2) {
				// Quick check for common null cases.
				if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
					return 0;
				}
				// Binary search.
				// Performance analysis: http://neil.fraser.name/news/2007/10/09/
				var pointermin = 0;
				var pointermax = Math.min(text1.length, text2.length);
				var pointermid = pointermax;
				var pointerstart = 0;
				while (pointermin < pointermid) {
					if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
						pointermin = pointermid;
						pointerstart = pointermin;
					} else {
						pointermax = pointermid;
					}
					pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
				}
				return pointermid;
			};

			/**
    * Determine the common suffix of two strings.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {number} The number of characters common to the end of each string.
    */
			function diff_commonSuffix(text1, text2) {
				// Quick check for common null cases.
				if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
					return 0;
				}
				// Binary search.
				// Performance analysis: http://neil.fraser.name/news/2007/10/09/
				var pointermin = 0;
				var pointermax = Math.min(text1.length, text2.length);
				var pointermid = pointermax;
				var pointerend = 0;
				while (pointermin < pointermid) {
					if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
						pointermin = pointermid;
						pointerend = pointermin;
					} else {
						pointermax = pointermid;
					}
					pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
				}
				return pointermid;
			};

			/**
    * Do the two texts share a substring which is at least half the length of the
    * longer text?
    * This speedup can produce non-minimal diffs.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {Array.<string>} Five element Array, containing the prefix of
    *     text1, the suffix of text1, the prefix of text2, the suffix of
    *     text2 and the common middle.  Or null if there was no match.
    */
			function diff_halfMatch_(text1, text2) {
				var longtext = text1.length > text2.length ? text1 : text2;
				var shorttext = text1.length > text2.length ? text2 : text1;
				if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
					return null; // Pointless.
				}

				/**
     * Does a substring of shorttext exist within longtext such that the substring
     * is at least half the length of longtext?
     * Closure, but does not reference any external variables.
     * @param {string} longtext Longer string.
     * @param {string} shorttext Shorter string.
     * @param {number} i Start index of quarter length substring within longtext.
     * @return {Array.<string>} Five element Array, containing the prefix of
     *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
     *     of shorttext and the common middle.  Or null if there was no match.
     * @private
     */
				function diff_halfMatchI_(longtext, shorttext, i) {
					// Start with a 1/4 length substring at position i as a seed.
					var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
					var j = -1;
					var best_common = '';
					var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
					while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
						var prefixLength = diff_commonPrefix(longtext.substring(i), shorttext.substring(j));
						var suffixLength = diff_commonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
						if (best_common.length < suffixLength + prefixLength) {
							best_common = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
							best_longtext_a = longtext.substring(0, i - suffixLength);
							best_longtext_b = longtext.substring(i + prefixLength);
							best_shorttext_a = shorttext.substring(0, j - suffixLength);
							best_shorttext_b = shorttext.substring(j + prefixLength);
						}
					}
					if (best_common.length * 2 >= longtext.length) {
						return [best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b, best_common];
					} else {
						return null;
					}
				}

				// First check if the second quarter is the seed for a half-match.
				var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
				// Check again based on the third quarter.
				var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
				var hm;
				if (!hm1 && !hm2) {
					return null;
				} else if (!hm2) {
					hm = hm1;
				} else if (!hm1) {
					hm = hm2;
				} else {
					// Both matched.  Select the longest.
					hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
				}

				// A half-match was found, sort out the return data.
				var text1_a, text1_b, text2_a, text2_b;
				if (text1.length > text2.length) {
					text1_a = hm[0];
					text1_b = hm[1];
					text2_a = hm[2];
					text2_b = hm[3];
				} else {
					text2_a = hm[0];
					text2_b = hm[1];
					text1_a = hm[2];
					text1_b = hm[3];
				}
				var mid_common = hm[4];
				return [text1_a, text1_b, text2_a, text2_b, mid_common];
			};

			/**
    * Reorder and merge like edit sections.  Merge equalities.
    * Any edit section can move as long as it doesn't cross an equality.
    * @param {Array} diffs Array of diff tuples.
    */
			function diff_cleanupMerge(diffs) {
				diffs.push([DIFF_EQUAL, '']); // Add a dummy entry at the end.
				var pointer = 0;
				var count_delete = 0;
				var count_insert = 0;
				var text_delete = '';
				var text_insert = '';
				var commonlength;
				while (pointer < diffs.length) {
					switch (diffs[pointer][0]) {
						case DIFF_INSERT:
							count_insert++;
							text_insert += diffs[pointer][1];
							pointer++;
							break;
						case DIFF_DELETE:
							count_delete++;
							text_delete += diffs[pointer][1];
							pointer++;
							break;
						case DIFF_EQUAL:
							// Upon reaching an equality, check for prior redundancies.
							if (count_delete + count_insert > 1) {
								if (count_delete !== 0 && count_insert !== 0) {
									// Factor out any common prefixies.
									commonlength = diff_commonPrefix(text_insert, text_delete);
									if (commonlength !== 0) {
										if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
											diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
										} else {
											diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
											pointer++;
										}
										text_insert = text_insert.substring(commonlength);
										text_delete = text_delete.substring(commonlength);
									}
									// Factor out any common suffixies.
									commonlength = diff_commonSuffix(text_insert, text_delete);
									if (commonlength !== 0) {
										diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
										text_insert = text_insert.substring(0, text_insert.length - commonlength);
										text_delete = text_delete.substring(0, text_delete.length - commonlength);
									}
								}
								// Delete the offending records and add the merged ones.
								if (count_delete === 0) {
									diffs.splice(pointer - count_insert, count_delete + count_insert, [DIFF_INSERT, text_insert]);
								} else if (count_insert === 0) {
									diffs.splice(pointer - count_delete, count_delete + count_insert, [DIFF_DELETE, text_delete]);
								} else {
									diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
								}
								pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
							} else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
								// Merge this equality with the previous one.
								diffs[pointer - 1][1] += diffs[pointer][1];
								diffs.splice(pointer, 1);
							} else {
								pointer++;
							}
							count_insert = 0;
							count_delete = 0;
							text_delete = '';
							text_insert = '';
							break;
					}
				}
				if (diffs[diffs.length - 1][1] === '') {
					diffs.pop(); // Remove the dummy entry at the end.
				}

				// Second pass: look for single edits surrounded on both sides by equalities
				// which can be shifted sideways to eliminate an equality.
				// e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
				var changes = false;
				pointer = 1;
				// Intentionally ignore the first and last element (don't need checking).
				while (pointer < diffs.length - 1) {
					if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
						// This is a single edit surrounded by equalities.
						if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
							// Shift the edit over the previous equality.
							diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
							diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
							diffs.splice(pointer - 1, 1);
							changes = true;
						} else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
							// Shift the edit over the next equality.
							diffs[pointer - 1][1] += diffs[pointer + 1][1];
							diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
							diffs.splice(pointer + 1, 1);
							changes = true;
						}
					}
					pointer++;
				}
				// If shifts were made, the diff needs reordering and another shift sweep.
				if (changes) {
					diff_cleanupMerge(diffs);
				}
			};

			var diff = diff_main;
			diff.INSERT = DIFF_INSERT;
			diff.DELETE = DIFF_DELETE;
			diff.EQUAL = DIFF_EQUAL;

			module.exports = diff;

			/***/
		},
		/* 23 */
		/***/function (module, exports, __webpack_require__) {

			var pSlice = Array.prototype.slice;
			var objectKeys = __webpack_require__(24);
			var isArguments = __webpack_require__(25);

			var deepEqual = module.exports = function (actual, expected, opts) {
				if (!opts) opts = {};
				// 7.1. All identical values are equivalent, as determined by ===.
				if (actual === expected) {
					return true;
				} else if (actual instanceof Date && expected instanceof Date) {
					return actual.getTime() === expected.getTime();

					// 7.3. Other pairs that do not both pass typeof value == 'object',
					// equivalence is determined by ==.
				} else if (!actual || !expected || (typeof actual === 'undefined' ? 'undefined' : _typeof2(actual)) != 'object' && (typeof expected === 'undefined' ? 'undefined' : _typeof2(expected)) != 'object') {
					return opts.strict ? actual === expected : actual == expected;

					// 7.4. For all other Object pairs, including Array objects, equivalence is
					// determined by having the same number of owned properties (as verified
					// with Object.prototype.hasOwnProperty.call), the same set of keys
					// (although not necessarily the same order), equivalent values for every
					// corresponding key, and an identical 'prototype' property. Note: this
					// accounts for both named and indexed properties on Arrays.
				} else {
					return objEquiv(actual, expected, opts);
				}
			};

			function isUndefinedOrNull(value) {
				return value === null || value === undefined;
			}

			function isBuffer(x) {
				if (!x || (typeof x === 'undefined' ? 'undefined' : _typeof2(x)) !== 'object' || typeof x.length !== 'number') return false;
				if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
					return false;
				}
				if (x.length > 0 && typeof x[0] !== 'number') return false;
				return true;
			}

			function objEquiv(a, b, opts) {
				var i, key;
				if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false;
				// an identical 'prototype' property.
				if (a.prototype !== b.prototype) return false;
				//~~~I've managed to break Object.keys through screwy arguments passing.
				//   Converting to array solves the problem.
				if (isArguments(a)) {
					if (!isArguments(b)) {
						return false;
					}
					a = pSlice.call(a);
					b = pSlice.call(b);
					return deepEqual(a, b, opts);
				}
				if (isBuffer(a)) {
					if (!isBuffer(b)) {
						return false;
					}
					if (a.length !== b.length) return false;
					for (i = 0; i < a.length; i++) {
						if (a[i] !== b[i]) return false;
					}
					return true;
				}
				try {
					var ka = objectKeys(a),
					    kb = objectKeys(b);
				} catch (e) {
					//happens when one is a string literal and the other isn't
					return false;
				}
				// having the same number of owned properties (keys incorporates
				// hasOwnProperty)
				if (ka.length != kb.length) return false;
				//the same set of keys (although not necessarily the same order),
				ka.sort();
				kb.sort();
				//~~~cheap key test
				for (i = ka.length - 1; i >= 0; i--) {
					if (ka[i] != kb[i]) return false;
				}
				//equivalent values for every corresponding key, and
				//~~~possibly expensive deep test
				for (i = ka.length - 1; i >= 0; i--) {
					key = ka[i];
					if (!deepEqual(a[key], b[key], opts)) return false;
				}
				return (typeof a === 'undefined' ? 'undefined' : _typeof2(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof2(b));
			}

			/***/
		},
		/* 24 */
		/***/function (module, exports) {

			exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;

			exports.shim = shim;
			function shim(obj) {
				var keys = [];
				for (var key in obj) {
					keys.push(key);
				}return keys;
			}

			/***/
		},
		/* 25 */
		/***/function (module, exports) {

			var supportsArgumentsClass = function () {
				return Object.prototype.toString.call(arguments);
			}() == '[object Arguments]';

			exports = module.exports = supportsArgumentsClass ? supported : unsupported;

			exports.supported = supported;
			function supported(object) {
				return Object.prototype.toString.call(object) == '[object Arguments]';
			};

			exports.unsupported = unsupported;
			function unsupported(object) {
				return object && (typeof object === 'undefined' ? 'undefined' : _typeof2(object)) == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
			};

			/***/
		},
		/* 26 */
		/***/function (module, exports) {

			'use strict';

			var hasOwn = Object.prototype.hasOwnProperty;
			var toStr = Object.prototype.toString;

			var isArray = function isArray(arr) {
				if (typeof Array.isArray === 'function') {
					return Array.isArray(arr);
				}

				return toStr.call(arr) === '[object Array]';
			};

			var isPlainObject = function isPlainObject(obj) {
				if (!obj || toStr.call(obj) !== '[object Object]') {
					return false;
				}

				var hasOwnConstructor = hasOwn.call(obj, 'constructor');
				var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
				// Not own constructor property must be Object
				if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
					return false;
				}

				// Own properties are enumerated firstly, so to speed up,
				// if last one is own, then all properties are own.
				var key;
				for (key in obj) {/**/}

				return typeof key === 'undefined' || hasOwn.call(obj, key);
			};

			module.exports = function extend() {
				var options,
				    name,
				    src,
				    copy,
				    copyIsArray,
				    clone,
				    target = arguments[0],
				    i = 1,
				    length = arguments.length,
				    deep = false;

				// Handle a deep copy situation
				if (typeof target === 'boolean') {
					deep = target;
					target = arguments[1] || {};
					// skip the boolean and the target
					i = 2;
				} else if ((typeof target === 'undefined' ? 'undefined' : _typeof2(target)) !== 'object' && typeof target !== 'function' || target == null) {
					target = {};
				}

				for (; i < length; ++i) {
					options = arguments[i];
					// Only deal with non-null/undefined values
					if (options != null) {
						// Extend the base object
						for (name in options) {
							src = target[name];
							copy = options[name];

							// Prevent never-ending loop
							if (target !== copy) {
								// Recurse if we're merging plain objects or arrays
								if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
									if (copyIsArray) {
										copyIsArray = false;
										clone = src && isArray(src) ? src : [];
									} else {
										clone = src && isPlainObject(src) ? src : {};
									}

									// Never move original objects, clone them
									target[name] = extend(deep, clone, copy);

									// Don't bring in undefined values
								} else if (typeof copy !== 'undefined') {
									target[name] = copy;
								}
							}
						}
					}
				}

				// Return the modified object
				return target;
			};

			/***/
		},
		/* 27 */
		/***/function (module, exports, __webpack_require__) {

			var equal = __webpack_require__(23);
			var extend = __webpack_require__(26);

			var lib = {
				attributes: {
					compose: function compose(a, b, keepNull) {
						if ((typeof a === 'undefined' ? 'undefined' : _typeof2(a)) !== 'object') a = {};
						if ((typeof b === 'undefined' ? 'undefined' : _typeof2(b)) !== 'object') b = {};
						var attributes = extend(true, {}, b);
						if (!keepNull) {
							attributes = Object.keys(attributes).reduce(function (copy, key) {
								if (attributes[key] != null) {
									copy[key] = attributes[key];
								}
								return copy;
							}, {});
						}
						for (var key in a) {
							if (a[key] !== undefined && b[key] === undefined) {
								attributes[key] = a[key];
							}
						}
						return Object.keys(attributes).length > 0 ? attributes : undefined;
					},

					diff: function diff(a, b) {
						if ((typeof a === 'undefined' ? 'undefined' : _typeof2(a)) !== 'object') a = {};
						if ((typeof b === 'undefined' ? 'undefined' : _typeof2(b)) !== 'object') b = {};
						var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
							if (!equal(a[key], b[key])) {
								attributes[key] = b[key] === undefined ? null : b[key];
							}
							return attributes;
						}, {});
						return Object.keys(attributes).length > 0 ? attributes : undefined;
					},

					transform: function transform(a, b, priority) {
						if ((typeof a === 'undefined' ? 'undefined' : _typeof2(a)) !== 'object') return b;
						if ((typeof b === 'undefined' ? 'undefined' : _typeof2(b)) !== 'object') return undefined;
						if (!priority) return b; // b simply overwrites us without priority
						var attributes = Object.keys(b).reduce(function (attributes, key) {
							if (a[key] === undefined) attributes[key] = b[key]; // null is a valid value
							return attributes;
						}, {});
						return Object.keys(attributes).length > 0 ? attributes : undefined;
					}
				},

				iterator: function iterator(ops) {
					return new Iterator(ops);
				},

				length: function length(op) {
					if (typeof op['delete'] === 'number') {
						return op['delete'];
					} else if (typeof op.retain === 'number') {
						return op.retain;
					} else {
						return typeof op.insert === 'string' ? op.insert.length : 1;
					}
				}
			};

			function Iterator(ops) {
				this.ops = ops;
				this.index = 0;
				this.offset = 0;
			};

			Iterator.prototype.hasNext = function () {
				return this.peekLength() < Infinity;
			};

			Iterator.prototype.next = function (length) {
				if (!length) length = Infinity;
				var nextOp = this.ops[this.index];
				if (nextOp) {
					var offset = this.offset;
					var opLength = lib.length(nextOp);
					if (length >= opLength - offset) {
						length = opLength - offset;
						this.index += 1;
						this.offset = 0;
					} else {
						this.offset += length;
					}
					if (typeof nextOp['delete'] === 'number') {
						return { 'delete': length };
					} else {
						var retOp = {};
						if (nextOp.attributes) {
							retOp.attributes = nextOp.attributes;
						}
						if (typeof nextOp.retain === 'number') {
							retOp.retain = length;
						} else if (typeof nextOp.insert === 'string') {
							retOp.insert = nextOp.insert.substr(offset, length);
						} else {
							// offset should === 0, length should === 1
							retOp.insert = nextOp.insert;
						}
						return retOp;
					}
				} else {
					return { retain: Infinity };
				}
			};

			Iterator.prototype.peekLength = function () {
				if (this.ops[this.index]) {
					// Should never return 0 if our index is being managed correctly
					return lib.length(this.ops[this.index]) - this.offset;
				} else {
					return Infinity;
				}
			};

			Iterator.prototype.peekType = function () {
				if (this.ops[this.index]) {
					if (typeof this.ops[this.index]['delete'] === 'number') {
						return 'delete';
					} else if (typeof this.ops[this.index].retain === 'number') {
						return 'retain';
					} else {
						return 'insert';
					}
				}
				return 'retain';
			};

			module.exports = lib;

			/***/
		},
		/* 28 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _delta = __webpack_require__(21);

			var _delta2 = _interopRequireDefault(_delta);

			var _op = __webpack_require__(27);

			var _op2 = _interopRequireDefault(_op);

			var _emitter3 = __webpack_require__(29);

			var _emitter4 = _interopRequireDefault(_emitter3);

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _code = __webpack_require__(32);

			var _code2 = _interopRequireDefault(_code);

			var _cursor = __webpack_require__(38);

			var _cursor2 = _interopRequireDefault(_cursor);

			var _block = __webpack_require__(33);

			var _block2 = _interopRequireDefault(_block);

			var _clone = __webpack_require__(39);

			var _clone2 = _interopRequireDefault(_clone);

			var _deepEqual = __webpack_require__(23);

			var _deepEqual2 = _interopRequireDefault(_deepEqual);

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _defineProperty(obj, key, value) {
				if (key in obj) {
					Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
				} else {
					obj[key] = value;
				}return obj;
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var Editor = function () {
				function Editor(scroll, emitter) {
					_classCallCheck(this, Editor);

					this.scroll = scroll;
					this.emitter = emitter;
					this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, this.update.bind(this, null));
					this.delta = this.getDelta();
					this.enable();
				}

				_createClass(Editor, [{
					key: 'applyDelta',
					value: function applyDelta(delta) {
						var _this = this;

						var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter4.default.sources.API : arguments[1];

						var consumeNextNewline = false;
						this.scroll.update();
						var scrollLength = this.scroll.length();
						this.scroll.batch = true;
						delta = normalizeDelta(delta);
						delta.ops.reduce(function (index, op) {
							var length = op.retain || op.delete || op.insert.length || 1;
							var attributes = op.attributes || {};
							if (op.insert != null) {
								if (typeof op.insert === 'string') {
									var text = op.insert;
									if (text.endsWith('\n') && consumeNextNewline) {
										consumeNextNewline = false;
										text = text.slice(0, -1);
									}
									if (index >= scrollLength && !text.endsWith('\n')) {
										consumeNextNewline = true;
									}
									_this.scroll.insertAt(index, text);

									var _scroll$line = _this.scroll.line(index);

									var _scroll$line2 = _slicedToArray(_scroll$line, 2);

									var line = _scroll$line2[0];
									var offset = _scroll$line2[1];

									var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
									if (line instanceof _block2.default) {
										var _line$descendant = line.descendant(_parchment2.default.Leaf, offset);

										var _line$descendant2 = _slicedToArray(_line$descendant, 1);

										var leaf = _line$descendant2[0];

										formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
									}
									attributes = _op2.default.attributes.diff(formats, attributes) || {};
								} else if (_typeof(op.insert) === 'object') {
									var key = Object.keys(op.insert)[0]; // There should only be one key
									if (key == null) return index;
									_this.scroll.insertAt(index, key, op.insert[key]);
								}
								scrollLength += length;
							}
							Object.keys(attributes).forEach(function (name) {
								_this.scroll.formatAt(index, length, name, attributes[name]);
							});
							return index + length;
						}, 0);
						delta.ops.reduce(function (index, op) {
							if (typeof op.delete === 'number') {
								_this.scroll.deleteAt(index, op.delete);
								return index;
							}
							return index + (op.retain || op.insert.length || 1);
						}, 0);
						this.scroll.batch = false;
						this.scroll.optimize();
						return this.update(delta, source);
					}
				}, {
					key: 'deleteText',
					value: function deleteText(index, length) {
						var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter4.default.sources.API : arguments[2];

						this.scroll.deleteAt(index, length);
						return this.update(new _delta2.default().retain(index).delete(length), source);
					}
				}, {
					key: 'enable',
					value: function enable() {
						var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

						this.scroll.domNode.setAttribute('contenteditable', enabled);
					}
				}, {
					key: 'formatLine',
					value: function formatLine(index, length) {
						var _this2 = this;

						var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
						var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter4.default.sources.API : arguments[3];

						this.scroll.update();
						Object.keys(formats).forEach(function (format) {
							var lines = _this2.scroll.lines(index, Math.max(length, 1));
							var lengthRemaining = length;
							lines.forEach(function (line, i) {
								var lineLength = line.length();
								if (!(line instanceof _code2.default)) {
									line.format(format, formats[format]);
								} else {
									var codeIndex = index - line.offset(_this2.scroll);
									var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
									line.formatAt(codeIndex, codeLength, format, formats[format]);
								}
								lengthRemaining -= lineLength;
							});
						});
						this.scroll.optimize();
						return this.update(new _delta2.default().retain(index).retain(length, (0, _clone2.default)(formats)), source);
					}
				}, {
					key: 'formatText',
					value: function formatText(index, length) {
						var _this3 = this;

						var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
						var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter4.default.sources.API : arguments[3];

						Object.keys(formats).forEach(function (format) {
							_this3.scroll.formatAt(index, length, format, formats[format]);
						});
						return this.update(new _delta2.default().retain(index).retain(length, (0, _clone2.default)(formats)), source);
					}
				}, {
					key: 'getContents',
					value: function getContents(index, length) {
						return this.delta.slice(index, index + length);
					}
				}, {
					key: 'getDelta',
					value: function getDelta() {
						return this.scroll.lines().reduce(function (delta, line) {
							return delta.concat(line.delta());
						}, new _delta2.default());
					}
				}, {
					key: 'getFormat',
					value: function getFormat(index) {
						var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

						var lines = [],
						    leaves = [];
						if (length === 0) {
							this.scroll.path(index).forEach(function (path) {
								var _path = _slicedToArray(path, 1);

								var blot = _path[0];

								if (blot instanceof _block2.default) {
									lines.push(blot);
								} else if (blot instanceof _parchment2.default.Leaf) {
									leaves.push(blot);
								}
							});
						} else {
							lines = this.scroll.lines(index, length);
							leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
						}
						var formatsArr = [lines, leaves].map(function (blots) {
							if (blots.length === 0) return {};
							var formats = (0, _block.bubbleFormats)(blots.shift());
							while (Object.keys(formats).length > 0) {
								var blot = blots.shift();
								if (blot == null) return formats;
								formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
							}
							return formats;
						});
						return _extend2.default.apply(_extend2.default, formatsArr);
					}
				}, {
					key: 'getText',
					value: function getText(index, length) {
						return this.getContents(index, length).ops.map(function (op) {
							return typeof op.insert === 'string' ? op.insert : '';
						}).join('');
					}
				}, {
					key: 'insertEmbed',
					value: function insertEmbed(index, embed, value) {
						var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter4.default.sources.API : arguments[3];

						this.scroll.insertAt(index, embed, value);
						return this.update(new _delta2.default().retain(index).insert(_defineProperty({}, embed, value)), source);
					}
				}, {
					key: 'insertText',
					value: function insertText(index, text) {
						var _this4 = this;

						var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
						var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter4.default.sources.API : arguments[3];

						text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
						this.scroll.insertAt(index, text);
						Object.keys(formats).forEach(function (format) {
							_this4.scroll.formatAt(index, text.length, format, formats[format]);
						});
						return this.update(new _delta2.default().retain(index).insert(text, (0, _clone2.default)(formats)), source);
					}
				}, {
					key: 'isBlank',
					value: function isBlank() {
						if (this.scroll.children.length == 0) return true;
						if (this.scroll.children.length > 1) return false;
						var child = this.scroll.children.head;
						return child.length() <= 1 && Object.keys(child.formats()).length == 0;
					}
				}, {
					key: 'removeFormat',
					value: function removeFormat(index, length, source) {
						var text = this.getText(index, length);

						var _scroll$line3 = this.scroll.line(index + length);

						var _scroll$line4 = _slicedToArray(_scroll$line3, 2);

						var line = _scroll$line4[0];
						var offset = _scroll$line4[1];

						var suffixLength = 0,
						    suffix = new _delta2.default();
						if (line != null) {
							if (!(line instanceof _code2.default)) {
								suffixLength = line.length() - offset;
							} else {
								suffixLength = line.newlineIndex(offset) - offset + 1;
							}
							suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
						}
						var contents = this.getContents(index, length + suffixLength);
						var diff = contents.diff(new _delta2.default().insert(text).concat(suffix));
						var delta = new _delta2.default().retain(index).concat(diff);
						return this.applyDelta(delta, source);
					}
				}, {
					key: 'update',
					value: function update(change) {
						var _this5 = this;

						var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter4.default.sources.USER : arguments[1];
						var mutations = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

						var oldDelta = this.delta;
						if (mutations.length === 1 && mutations[0].type === 'characterData' && _parchment2.default.find(mutations[0].target)) {
							(function () {
								// Optimization for character changes
								var textBlot = _parchment2.default.find(mutations[0].target);
								var formats = (0, _block.bubbleFormats)(textBlot);
								var index = textBlot.offset(_this5.scroll);
								var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
								var oldText = new _delta2.default().insert(oldValue);
								var newText = new _delta2.default().insert(textBlot.value());
								var diffDelta = new _delta2.default().retain(index).concat(oldText.diff(newText));
								change = diffDelta.ops.reduce(function (delta, op) {
									if (op.insert) {
										return delta.insert(op.insert, formats);
									} else {
										return delta.push(op);
									}
								}, new _delta2.default());
								_this5.delta = oldDelta.compose(change);
							})();
						} else {
							this.delta = this.getDelta();
							if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
								change = oldDelta.diff(this.delta);
							}
						}
						if (change.length() > 0) {
							var _emitter;

							var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
							(_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
							if (source !== _emitter4.default.sources.SILENT) {
								var _emitter2;

								(_emitter2 = this.emitter).emit.apply(_emitter2, args);
							}
						}
						return change;
					}
				}]);

				return Editor;
			}();

			function combineFormats(formats, combined) {
				return Object.keys(combined).reduce(function (merged, name) {
					if (formats[name] == null) return merged;
					if (combined[name] === formats[name]) {
						merged[name] = combined[name];
					} else if (Array.isArray(combined[name])) {
						if (combined[name].indexOf(formats[name]) < 0) {
							merged[name] = combined[name].concat([formats[name]]);
						}
					} else {
						merged[name] = [combined[name], formats[name]];
					}
					return merged;
				}, {});
			}

			function normalizeDelta(delta) {
				return delta.ops.reduce(function (delta, op) {
					if (op.insert === 1) {
						var attributes = (0, _clone2.default)(op.attributes);
						delete attributes['image'];
						return delta.insert({ image: op.attributes.image }, attributes);
					}
					if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
						op = (0, _clone2.default)(op);
						if (op.attributes.list) {
							op.attributes.list = 'ordered';
						} else {
							op.attributes.list = 'bullet';
							delete op.attributes.bullet;
						}
					}
					if (typeof op.insert === 'string') {
						var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
						return delta.insert(text, op.attributes);
					}
					return delta.push(op);
				}, new _delta2.default());
			}

			exports.default = Editor;

			/***/
		},
		/* 29 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _eventemitter = __webpack_require__(30);

			var _eventemitter2 = _interopRequireDefault(_eventemitter);

			var _logger = __webpack_require__(31);

			var _logger2 = _interopRequireDefault(_logger);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var debug = (0, _logger2.default)('quill:events');

			var Emitter = function (_EventEmitter) {
				_inherits(Emitter, _EventEmitter);

				function Emitter() {
					_classCallCheck(this, Emitter);

					var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

					_this.on('error', debug.error);
					return _this;
				}

				_createClass(Emitter, [{
					key: 'emit',
					value: function emit() {
						debug.log.apply(debug, arguments);
						_get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
					}
				}]);

				return Emitter;
			}(_eventemitter2.default);

			Emitter.events = {
				EDITOR_CHANGE: 'editor-change',
				SCROLL_BEFORE_UPDATE: 'scroll-before-update',
				SCROLL_OPTIMIZE: 'scroll-optimize',
				SCROLL_UPDATE: 'scroll-update',
				SELECTION_CHANGE: 'selection-change',
				TEXT_CHANGE: 'text-change'
			};
			Emitter.sources = {
				API: 'api',
				SILENT: 'silent',
				USER: 'user'
			};

			exports.default = Emitter;

			/***/
		},
		/* 30 */
		/***/function (module, exports) {

			'use strict';

			var has = Object.prototype.hasOwnProperty;

			//
			// We store our EE objects in a plain object whose properties are event names.
			// If `Object.create(null)` is not supported we prefix the event names with a
			// `~` to make sure that the built-in object properties are not overridden or
			// used as an attack vector.
			// We also assume that `Object.create(null)` is available when the event name
			// is an ES6 Symbol.
			//
			var prefix = typeof Object.create !== 'function' ? '~' : false;

			/**
    * Representation of a single EventEmitter function.
    *
    * @param {Function} fn Event handler to be called.
    * @param {Mixed} context Context for function execution.
    * @param {Boolean} [once=false] Only emit once
    * @api private
    */
			function EE(fn, context, once) {
				this.fn = fn;
				this.context = context;
				this.once = once || false;
			}

			/**
    * Minimal EventEmitter interface that is molded against the Node.js
    * EventEmitter interface.
    *
    * @constructor
    * @api public
    */
			function EventEmitter() {} /* Nothing to set */

			/**
    * Hold the assigned EventEmitters by name.
    *
    * @type {Object}
    * @private
    */
			EventEmitter.prototype._events = undefined;

			/**
    * Return an array listing the events for which the emitter has registered
    * listeners.
    *
    * @returns {Array}
    * @api public
    */
			EventEmitter.prototype.eventNames = function eventNames() {
				var events = this._events,
				    names = [],
				    name;

				if (!events) return names;

				for (name in events) {
					if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
				}

				if (Object.getOwnPropertySymbols) {
					return names.concat(Object.getOwnPropertySymbols(events));
				}

				return names;
			};

			/**
    * Return a list of assigned event listeners.
    *
    * @param {String} event The events that should be listed.
    * @param {Boolean} exists We only need to know if there are listeners.
    * @returns {Array|Boolean}
    * @api public
    */
			EventEmitter.prototype.listeners = function listeners(event, exists) {
				var evt = prefix ? prefix + event : event,
				    available = this._events && this._events[evt];

				if (exists) return !!available;
				if (!available) return [];
				if (available.fn) return [available.fn];

				for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
					ee[i] = available[i].fn;
				}

				return ee;
			};

			/**
    * Emit an event to all registered event listeners.
    *
    * @param {String} event The name of the event.
    * @returns {Boolean} Indication if we've emitted an event.
    * @api public
    */
			EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
				var evt = prefix ? prefix + event : event;

				if (!this._events || !this._events[evt]) return false;

				var listeners = this._events[evt],
				    len = arguments.length,
				    args,
				    i;

				if ('function' === typeof listeners.fn) {
					if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

					switch (len) {
						case 1:
							return listeners.fn.call(listeners.context), true;
						case 2:
							return listeners.fn.call(listeners.context, a1), true;
						case 3:
							return listeners.fn.call(listeners.context, a1, a2), true;
						case 4:
							return listeners.fn.call(listeners.context, a1, a2, a3), true;
						case 5:
							return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
						case 6:
							return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
					}

					for (i = 1, args = new Array(len - 1); i < len; i++) {
						args[i - 1] = arguments[i];
					}

					listeners.fn.apply(listeners.context, args);
				} else {
					var length = listeners.length,
					    j;

					for (i = 0; i < length; i++) {
						if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

						switch (len) {
							case 1:
								listeners[i].fn.call(listeners[i].context);break;
							case 2:
								listeners[i].fn.call(listeners[i].context, a1);break;
							case 3:
								listeners[i].fn.call(listeners[i].context, a1, a2);break;
							default:
								if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
									args[j - 1] = arguments[j];
								}

								listeners[i].fn.apply(listeners[i].context, args);
						}
					}
				}

				return true;
			};

			/**
    * Register a new EventListener for the given event.
    *
    * @param {String} event Name of the event.
    * @param {Function} fn Callback function.
    * @param {Mixed} [context=this] The context of the function.
    * @api public
    */
			EventEmitter.prototype.on = function on(event, fn, context) {
				var listener = new EE(fn, context || this),
				    evt = prefix ? prefix + event : event;

				if (!this._events) this._events = prefix ? {} : Object.create(null);
				if (!this._events[evt]) this._events[evt] = listener;else {
					if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
				}

				return this;
			};

			/**
    * Add an EventListener that's only called once.
    *
    * @param {String} event Name of the event.
    * @param {Function} fn Callback function.
    * @param {Mixed} [context=this] The context of the function.
    * @api public
    */
			EventEmitter.prototype.once = function once(event, fn, context) {
				var listener = new EE(fn, context || this, true),
				    evt = prefix ? prefix + event : event;

				if (!this._events) this._events = prefix ? {} : Object.create(null);
				if (!this._events[evt]) this._events[evt] = listener;else {
					if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
				}

				return this;
			};

			/**
    * Remove event listeners.
    *
    * @param {String} event The event we want to remove.
    * @param {Function} fn The listener that we need to find.
    * @param {Mixed} context Only remove listeners matching this context.
    * @param {Boolean} once Only remove once listeners.
    * @api public
    */
			EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
				var evt = prefix ? prefix + event : event;

				if (!this._events || !this._events[evt]) return this;

				var listeners = this._events[evt],
				    events = [];

				if (fn) {
					if (listeners.fn) {
						if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
							events.push(listeners);
						}
					} else {
						for (var i = 0, length = listeners.length; i < length; i++) {
							if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
								events.push(listeners[i]);
							}
						}
					}
				}

				//
				// Reset the array, or remove it completely if we have no more listeners.
				//
				if (events.length) {
					this._events[evt] = events.length === 1 ? events[0] : events;
				} else {
					delete this._events[evt];
				}

				return this;
			};

			/**
    * Remove all listeners or only the listeners for the specified event.
    *
    * @param {String} event The event want to remove all listeners for.
    * @api public
    */
			EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
				if (!this._events) return this;

				if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);

				return this;
			};

			//
			// Alias methods names because people roll like that.
			//
			EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
			EventEmitter.prototype.addListener = EventEmitter.prototype.on;

			//
			// This function doesn't apply anymore.
			//
			EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
				return this;
			};

			//
			// Expose the prefix.
			//
			EventEmitter.prefixed = prefix;

			//
			// Expose the module.
			//
			if ('undefined' !== typeof module) {
				module.exports = EventEmitter;
			}

			/***/
		},
		/* 31 */
		/***/function (module, exports) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var levels = ['error', 'warn', 'log', 'info'];
			var level = 'warn';

			function debug(method) {
				if (levels.indexOf(method) <= levels.indexOf(level)) {
					for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}

					console[method].apply(console, args);
				}
			}

			function namespace(ns) {
				return levels.reduce(function (logger, method) {
					logger[method] = debug.bind(console, method, ns);
					return logger;
				}, {});
			}

			debug.level = namespace.level = function (newLevel) {
				level = newLevel;
			};

			exports.default = namespace;

			/***/
		},
		/* 32 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = exports.Code = undefined;

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _delta = __webpack_require__(21);

			var _delta2 = _interopRequireDefault(_delta);

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _block = __webpack_require__(33);

			var _block2 = _interopRequireDefault(_block);

			var _inline = __webpack_require__(36);

			var _inline2 = _interopRequireDefault(_inline);

			var _text = __webpack_require__(37);

			var _text2 = _interopRequireDefault(_text);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Code = function (_Inline) {
				_inherits(Code, _Inline);

				function Code() {
					_classCallCheck(this, Code);

					return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
				}

				return Code;
			}(_inline2.default);

			Code.blotName = 'code';
			Code.tagName = 'CODE';

			var CodeBlock = function (_Block) {
				_inherits(CodeBlock, _Block);

				function CodeBlock() {
					_classCallCheck(this, CodeBlock);

					return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
				}

				_createClass(CodeBlock, [{
					key: 'delta',
					value: function delta() {
						var _this3 = this;

						var text = this.domNode.textContent;
						if (text.endsWith('\n')) {
							// Should always be true
							text = text.slice(0, -1);
						}
						return text.split('\n').reduce(function (delta, frag) {
							return delta.insert(frag).insert('\n', _this3.formats());
						}, new _delta2.default());
					}
				}, {
					key: 'format',
					value: function format(name, value) {
						if (name === this.statics.blotName && value) return;

						var _descendant = this.descendant(_text2.default, this.length() - 1);

						var _descendant2 = _slicedToArray(_descendant, 1);

						var text = _descendant2[0];

						if (text != null) {
							text.deleteAt(text.length() - 1, 1);
						}
						_get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
					}
				}, {
					key: 'formatAt',
					value: function formatAt(index, length, name, value) {
						if (length === 0) return;
						if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
							return;
						}
						var nextNewline = this.newlineIndex(index);
						if (nextNewline < 0 || nextNewline >= index + length) return;
						var prevNewline = this.newlineIndex(index, true) + 1;
						var isolateLength = nextNewline - prevNewline + 1;
						var blot = this.isolate(prevNewline, isolateLength);
						var next = blot.next;
						blot.format(name, value);
						if (next instanceof CodeBlock) {
							next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
						}
					}
				}, {
					key: 'insertAt',
					value: function insertAt(index, value, def) {
						if (def != null) return;

						var _descendant3 = this.descendant(_text2.default, index);

						var _descendant4 = _slicedToArray(_descendant3, 2);

						var text = _descendant4[0];
						var offset = _descendant4[1];

						text.insertAt(offset, value);
					}
				}, {
					key: 'length',
					value: function length() {
						var length = this.domNode.textContent.length;
						if (!this.domNode.textContent.endsWith('\n')) {
							return length + 1;
						}
						return length;
					}
				}, {
					key: 'newlineIndex',
					value: function newlineIndex(searchIndex) {
						var reverse = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

						if (!reverse) {
							var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
							return offset > -1 ? searchIndex + offset : -1;
						} else {
							return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
						}
					}
				}, {
					key: 'optimize',
					value: function optimize() {
						if (!this.domNode.textContent.endsWith('\n')) {
							this.appendChild(_parchment2.default.create('text', '\n'));
						}
						_get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this);
						var next = this.next;
						if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
							next.optimize();
							next.moveChildren(this);
							next.remove();
						}
					}
				}, {
					key: 'replace',
					value: function replace(target) {
						_get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
						[].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
							var blot = _parchment2.default.find(node);
							if (blot == null) {
								node.parentNode.removeChild(node);
							} else if (blot instanceof _parchment2.default.Embed) {
								blot.remove();
							} else {
								blot.unwrap();
							}
						});
					}
				}], [{
					key: 'create',
					value: function create(value) {
						var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
						domNode.setAttribute('spellcheck', false);
						return domNode;
					}
				}, {
					key: 'formats',
					value: function formats(domNode) {
						return true;
					}
				}]);

				return CodeBlock;
			}(_block2.default);

			CodeBlock.blotName = 'code-block';
			CodeBlock.tagName = 'PRE';
			CodeBlock.TAB = '  ';

			exports.Code = Code;
			exports.default = CodeBlock;

			/***/
		},
		/* 33 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _delta = __webpack_require__(21);

			var _delta2 = _interopRequireDefault(_delta);

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _break = __webpack_require__(34);

			var _break2 = _interopRequireDefault(_break);

			var _embed = __webpack_require__(35);

			var _embed2 = _interopRequireDefault(_embed);

			var _inline = __webpack_require__(36);

			var _inline2 = _interopRequireDefault(_inline);

			var _text = __webpack_require__(37);

			var _text2 = _interopRequireDefault(_text);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var NEWLINE_LENGTH = 1;

			var BlockEmbed = function (_Embed) {
				_inherits(BlockEmbed, _Embed);

				function BlockEmbed() {
					_classCallCheck(this, BlockEmbed);

					return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
				}

				_createClass(BlockEmbed, [{
					key: 'attach',
					value: function attach() {
						_get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
						this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
					}
				}, {
					key: 'delta',
					value: function delta() {
						return new _delta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
					}
				}, {
					key: 'format',
					value: function format(name, value) {
						var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
						if (attribute != null) {
							this.attributes.attribute(attribute, value);
						}
					}
				}, {
					key: 'formatAt',
					value: function formatAt(index, length, name, value) {
						this.format(name, value);
					}
				}, {
					key: 'insertAt',
					value: function insertAt(index, value, def) {
						if (typeof value === 'string' && value.endsWith('\n')) {
							var block = _parchment2.default.create(Block.blotName);
							this.parent.insertBefore(block, index === 0 ? this : this.next);
							block.insertAt(0, value.slice(0, -1));
						} else {
							_get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
						}
					}
				}]);

				return BlockEmbed;
			}(_embed2.default);

			BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
			// It is important for cursor behavior BlockEmbeds use tags that are block level elements


			var Block = function (_Parchment$Block) {
				_inherits(Block, _Parchment$Block);

				function Block(domNode) {
					_classCallCheck(this, Block);

					var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

					_this2.cache = {};
					return _this2;
				}

				_createClass(Block, [{
					key: 'delta',
					value: function delta() {
						if (this.cache.delta == null) {
							this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
								if (leaf.length() === 0) {
									return delta;
								} else {
									return delta.insert(leaf.value(), bubbleFormats(leaf));
								}
							}, new _delta2.default()).insert('\n', bubbleFormats(this));
						}
						return this.cache.delta;
					}
				}, {
					key: 'deleteAt',
					value: function deleteAt(index, length) {
						_get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
						this.cache = {};
					}
				}, {
					key: 'formatAt',
					value: function formatAt(index, length, name, value) {
						if (length <= 0) return;
						if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
							if (index + length === this.length()) {
								this.format(name, value);
							}
						} else {
							_get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
						}
						this.cache = {};
					}
				}, {
					key: 'insertAt',
					value: function insertAt(index, value, def) {
						if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
						if (value.length === 0) return;
						var lines = value.split('\n');
						var text = lines.shift();
						if (text.length > 0) {
							if (index < this.length() - 1 || this.children.tail == null) {
								_get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
							} else {
								this.children.tail.insertAt(this.children.tail.length(), text);
							}
							this.cache = {};
						}
						var block = this;
						lines.reduce(function (index, line) {
							block = block.split(index, true);
							block.insertAt(0, line);
							return line.length;
						}, index + text.length);
					}
				}, {
					key: 'insertBefore',
					value: function insertBefore(blot, ref) {
						var head = this.children.head;
						_get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
						if (head instanceof _break2.default) {
							head.remove();
						}
						this.cache = {};
					}
				}, {
					key: 'length',
					value: function length() {
						if (this.cache.length == null) {
							this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
						}
						return this.cache.length;
					}
				}, {
					key: 'moveChildren',
					value: function moveChildren(target, ref) {
						_get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
						this.cache = {};
					}
				}, {
					key: 'optimize',
					value: function optimize() {
						_get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this);
						this.cache = {};
					}
				}, {
					key: 'path',
					value: function path(index) {
						return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
					}
				}, {
					key: 'removeChild',
					value: function removeChild(child) {
						_get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
						this.cache = {};
					}
				}, {
					key: 'split',
					value: function split(index) {
						var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

						if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
							var clone = this.clone();
							if (index === 0) {
								this.parent.insertBefore(clone, this);
								return this;
							} else {
								this.parent.insertBefore(clone, this.next);
								return clone;
							}
						} else {
							var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
							this.cache = {};
							return next;
						}
					}
				}]);

				return Block;
			}(_parchment2.default.Block);

			Block.blotName = 'block';
			Block.tagName = 'P';
			Block.defaultChild = 'break';
			Block.allowedChildren = [_inline2.default, _embed2.default, _text2.default];

			function bubbleFormats(blot) {
				var formats = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

				if (blot == null) return formats;
				if (typeof blot.formats === 'function') {
					formats = (0, _extend2.default)(formats, blot.formats());
				}
				if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
					return formats;
				}
				return bubbleFormats(blot.parent, formats);
			}

			exports.bubbleFormats = bubbleFormats;
			exports.BlockEmbed = BlockEmbed;
			exports.default = Block;

			/***/
		},
		/* 34 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _embed = __webpack_require__(35);

			var _embed2 = _interopRequireDefault(_embed);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Break = function (_Embed) {
				_inherits(Break, _Embed);

				function Break() {
					_classCallCheck(this, Break);

					return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
				}

				_createClass(Break, [{
					key: 'insertInto',
					value: function insertInto(parent, ref) {
						if (parent.children.length === 0) {
							_get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
						}
					}
				}, {
					key: 'length',
					value: function length() {
						return 0;
					}
				}, {
					key: 'value',
					value: function value() {
						return '';
					}
				}], [{
					key: 'value',
					value: function value(domNode) {
						return undefined;
					}
				}]);

				return Break;
			}(_embed2.default);

			Break.blotName = 'break';
			Break.tagName = 'BR';

			exports.default = Break;

			/***/
		},
		/* 35 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Embed = function (_Parchment$Embed) {
				_inherits(Embed, _Parchment$Embed);

				function Embed() {
					_classCallCheck(this, Embed);

					return _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(this, arguments));
				}

				return Embed;
			}(_parchment2.default.Embed);

			exports.default = Embed;

			/***/
		},
		/* 36 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _embed = __webpack_require__(35);

			var _embed2 = _interopRequireDefault(_embed);

			var _text = __webpack_require__(37);

			var _text2 = _interopRequireDefault(_text);

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Inline = function (_Parchment$Inline) {
				_inherits(Inline, _Parchment$Inline);

				function Inline() {
					_classCallCheck(this, Inline);

					return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
				}

				_createClass(Inline, [{
					key: 'formatAt',
					value: function formatAt(index, length, name, value) {
						if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
							var blot = this.isolate(index, length);
							if (value) {
								blot.wrap(name, value);
							}
						} else {
							_get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
						}
					}
				}], [{
					key: 'compare',
					value: function compare(self, other) {
						var selfIndex = Inline.order.indexOf(self);
						var otherIndex = Inline.order.indexOf(other);
						if (selfIndex >= 0 || otherIndex >= 0) {
							return selfIndex - otherIndex;
						} else if (self === other) {
							return 0;
						} else if (self < other) {
							return -1;
						} else {
							return 1;
						}
					}
				}]);

				return Inline;
			}(_parchment2.default.Inline);

			Inline.allowedChildren = [Inline, _embed2.default, _text2.default];
			// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
			Inline.order = ['cursor', 'inline', // Must be lower
			'code', 'underline', 'strike', 'italic', 'bold', 'script', 'link' // Must be higher
			];

			exports.default = Inline;

			/***/
		},
		/* 37 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var TextBlot = function (_Parchment$Text) {
				_inherits(TextBlot, _Parchment$Text);

				function TextBlot() {
					_classCallCheck(this, TextBlot);

					return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
				}

				return TextBlot;
			}(_parchment2.default.Text);

			exports.default = TextBlot;

			/***/
		},
		/* 38 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _embed = __webpack_require__(35);

			var _embed2 = _interopRequireDefault(_embed);

			var _emitter = __webpack_require__(29);

			var _emitter2 = _interopRequireDefault(_emitter);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Cursor = function (_Embed) {
				_inherits(Cursor, _Embed);

				_createClass(Cursor, null, [{
					key: 'value',
					value: function value(domNode) {
						return undefined;
					}
				}]);

				function Cursor(domNode, selection) {
					_classCallCheck(this, Cursor);

					var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

					_this.selection = selection;
					_this.textNode = document.createTextNode(Cursor.CONTENTS);
					_this.domNode.appendChild(_this.textNode);
					_this._length = 0;
					return _this;
				}

				_createClass(Cursor, [{
					key: 'detach',
					value: function detach() {
						// super.detach() will also clear domNode.__blot
						if (this.parent != null) this.parent.removeChild(this);
					}
				}, {
					key: 'format',
					value: function format(name, value) {
						if (this._length !== 0) {
							return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
						}
						var target = this,
						    index = 0;
						while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
							index += target.offset(target.parent);
							target = target.parent;
						}
						if (target != null) {
							this._length = Cursor.CONTENTS.length;
							target.optimize();
							target.formatAt(index, Cursor.CONTENTS.length, name, value);
							this._length = 0;
						}
					}
				}, {
					key: 'index',
					value: function index(node, offset) {
						if (node === this.textNode) return 0;
						return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
					}
				}, {
					key: 'length',
					value: function length() {
						return this._length;
					}
				}, {
					key: 'position',
					value: function position(index) {
						return [this.textNode, this.textNode.data.length];
					}
				}, {
					key: 'remove',
					value: function remove() {
						_get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
						this.parent = null;
					}
				}, {
					key: 'restore',
					value: function restore() {
						var _this2 = this;

						if (this.selection.composing) return;
						if (this.parent == null) return;
						var textNode = this.textNode;
						var range = this.selection.getNativeRange();
						// Link format will insert text outside of anchor tag
						while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
							this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
						}
						if (this.textNode.data !== Cursor.CONTENTS) {
							this.textNode.data = this.textNode.data.split(Cursor.CONTENTS).join('');
							this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
							this.textNode = document.createTextNode(Cursor.CONTENTS);
							this.domNode.appendChild(this.textNode);
						}
						this.remove();
						if (range != null && range.start.node === textNode && range.end.node === textNode) {
							this.selection.emitter.once(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
								var _map = [range.start.offset, range.end.offset].map(function (offset) {
									return Math.max(0, Math.min(textNode.data.length, offset - 1));
								});

								var _map2 = _slicedToArray(_map, 2);

								var start = _map2[0];
								var end = _map2[1];

								_this2.selection.setNativeRange(textNode, start, textNode, end);
							});
						}
					}
				}, {
					key: 'update',
					value: function update(mutations) {
						var _this3 = this;

						mutations.forEach(function (mutation) {
							if (mutation.type === 'characterData' && mutation.target === _this3.textNode) {
								_this3.restore();
							}
						});
					}
				}, {
					key: 'value',
					value: function value() {
						return '';
					}
				}]);

				return Cursor;
			}(_embed2.default);

			Cursor.blotName = 'cursor';
			Cursor.className = 'ql-cursor';
			Cursor.tagName = 'span';
			Cursor.CONTENTS = '﻿'; // Zero width no break space


			exports.default = Cursor;

			/***/
		},
		/* 39 */
		/***/function (module, exports) {

			var clone = function () {
				'use strict';

				/**
     * Clones (copies) an Object using deep copying.
     *
     * This function supports circular references by default, but if you are certain
     * there are no circular references in your object, you can save some CPU time
     * by calling clone(obj, false).
     *
     * Caution: if `circular` is false and `parent` contains circular references,
     * your program may enter an infinite loop and crash.
     *
     * @param `parent` - the object to be cloned
     * @param `circular` - set to true if the object to be cloned may contain
     *    circular references. (optional - true by default)
     * @param `depth` - set to a number if the object is only to be cloned to
     *    a particular depth. (optional - defaults to Infinity)
     * @param `prototype` - sets the prototype to be used when cloning an object.
     *    (optional - defaults to parent prototype).
    */

				function clone(parent, circular, depth, prototype) {
					var filter;
					if ((typeof circular === 'undefined' ? 'undefined' : _typeof2(circular)) === 'object') {
						depth = circular.depth;
						prototype = circular.prototype;
						filter = circular.filter;
						circular = circular.circular;
					}
					// maintain two arrays for circular references, where corresponding parents
					// and children have the same index
					var allParents = [];
					var allChildren = [];

					var useBuffer = typeof Buffer != 'undefined';

					if (typeof circular == 'undefined') circular = true;

					if (typeof depth == 'undefined') depth = Infinity;

					// recurse this function so we don't reset allParents and allChildren
					function _clone(parent, depth) {
						// cloning null always returns null
						if (parent === null) return null;

						if (depth == 0) return parent;

						var child;
						var proto;
						if ((typeof parent === 'undefined' ? 'undefined' : _typeof2(parent)) != 'object') {
							return parent;
						}

						if (clone.__isArray(parent)) {
							child = [];
						} else if (clone.__isRegExp(parent)) {
							child = new RegExp(parent.source, __getRegExpFlags(parent));
							if (parent.lastIndex) child.lastIndex = parent.lastIndex;
						} else if (clone.__isDate(parent)) {
							child = new Date(parent.getTime());
						} else if (useBuffer && Buffer.isBuffer(parent)) {
							child = new Buffer(parent.length);
							parent.copy(child);
							return child;
						} else {
							if (typeof prototype == 'undefined') {
								proto = Object.getPrototypeOf(parent);
								child = Object.create(proto);
							} else {
								child = Object.create(prototype);
								proto = prototype;
							}
						}

						if (circular) {
							var index = allParents.indexOf(parent);

							if (index != -1) {
								return allChildren[index];
							}
							allParents.push(parent);
							allChildren.push(child);
						}

						for (var i in parent) {
							var attrs;
							if (proto) {
								attrs = Object.getOwnPropertyDescriptor(proto, i);
							}

							if (attrs && attrs.set == null) {
								continue;
							}
							child[i] = _clone(parent[i], depth - 1);
						}

						return child;
					}

					return _clone(parent, depth);
				}

				/**
     * Simple flat clone using prototype, accepts only objects, usefull for property
     * override on FLAT configuration object (no nested props).
     *
     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
     * works.
     */
				clone.clonePrototype = function clonePrototype(parent) {
					if (parent === null) return null;

					var c = function c() {};
					c.prototype = parent;
					return new c();
				};

				// private utility functions

				function __objToStr(o) {
					return Object.prototype.toString.call(o);
				};
				clone.__objToStr = __objToStr;

				function __isDate(o) {
					return (typeof o === 'undefined' ? 'undefined' : _typeof2(o)) === 'object' && __objToStr(o) === '[object Date]';
				};
				clone.__isDate = __isDate;

				function __isArray(o) {
					return (typeof o === 'undefined' ? 'undefined' : _typeof2(o)) === 'object' && __objToStr(o) === '[object Array]';
				};
				clone.__isArray = __isArray;

				function __isRegExp(o) {
					return (typeof o === 'undefined' ? 'undefined' : _typeof2(o)) === 'object' && __objToStr(o) === '[object RegExp]';
				};
				clone.__isRegExp = __isRegExp;

				function __getRegExpFlags(re) {
					var flags = '';
					if (re.global) flags += 'g';
					if (re.ignoreCase) flags += 'i';
					if (re.multiline) flags += 'm';
					return flags;
				};
				clone.__getRegExpFlags = __getRegExpFlags;

				return clone;
			}();

			if ((typeof module === 'undefined' ? 'undefined' : _typeof2(module)) === 'object' && module.exports) {
				module.exports = clone;
			}

			/***/
		},
		/* 40 */
		/***/function (module, exports) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var Module = function Module(quill) {
				var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

				_classCallCheck(this, Module);

				this.quill = quill;
				this.options = options;
			};

			Module.DEFAULTS = {};

			exports.default = Module;

			/***/
		},
		/* 41 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = exports.Range = undefined;

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _clone = __webpack_require__(39);

			var _clone2 = _interopRequireDefault(_clone);

			var _deepEqual = __webpack_require__(23);

			var _deepEqual2 = _interopRequireDefault(_deepEqual);

			var _break = __webpack_require__(34);

			var _break2 = _interopRequireDefault(_break);

			var _emitter3 = __webpack_require__(29);

			var _emitter4 = _interopRequireDefault(_emitter3);

			var _logger = __webpack_require__(31);

			var _logger2 = _interopRequireDefault(_logger);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _toConsumableArray(arr) {
				if (Array.isArray(arr)) {
					for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
						arr2[i] = arr[i];
					}return arr2;
				} else {
					return Array.from(arr);
				}
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var debug = (0, _logger2.default)('quill:selection');

			var Range = function Range(index) {
				var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

				_classCallCheck(this, Range);

				this.index = index;
				this.length = length;
			};

			var Selection = function () {
				function Selection(scroll, emitter) {
					var _this = this;

					_classCallCheck(this, Selection);

					this.emitter = emitter;
					this.scroll = scroll;
					this.composing = false;
					this.root = this.scroll.domNode;
					this.root.addEventListener('compositionstart', function () {
						_this.composing = true;
					});
					this.root.addEventListener('compositionend', function () {
						_this.composing = false;
					});
					this.cursor = _parchment2.default.create('cursor', this);
					// savedRange is last non-null range
					this.lastRange = this.savedRange = new Range(0, 0);
					['keyup', 'mouseup', 'mouseleave', 'touchend', 'touchleave', 'focus', 'blur'].forEach(function (eventName) {
						_this.root.addEventListener(eventName, function () {
							// When range used to be a selection and user click within the selection,
							// the range now being a cursor has not updated yet without setTimeout
							setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 100);
						});
					});
					this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
						if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
							_this.update(_emitter4.default.sources.SILENT);
						}
					});
					this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
						var native = _this.getNativeRange();
						if (native == null) return;
						if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
						// TODO unclear if this has negative side effects
						_this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
							try {
								_this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
							} catch (ignored) {}
						});
					});
					this.update(_emitter4.default.sources.SILENT);
				}

				_createClass(Selection, [{
					key: 'focus',
					value: function focus() {
						if (this.hasFocus()) return;
						var bodyTop = document.body.scrollTop;
						this.root.focus();
						document.body.scrollTop = bodyTop;
						this.setRange(this.savedRange);
					}
				}, {
					key: 'format',
					value: function format(_format, value) {
						this.scroll.update();
						var nativeRange = this.getNativeRange();
						if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
						if (nativeRange.start.node !== this.cursor.textNode) {
							var blot = _parchment2.default.find(nativeRange.start.node, false);
							if (blot == null) return;
							// TODO Give blot ability to not split
							if (blot instanceof _parchment2.default.Leaf) {
								var after = blot.split(nativeRange.start.offset);
								blot.parent.insertBefore(this.cursor, after);
							} else {
								blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
							}
							this.cursor.attach();
						}
						this.cursor.format(_format, value);
						this.scroll.optimize();
						this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
						this.update();
					}
				}, {
					key: 'getBounds',
					value: function getBounds(index) {
						var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

						var scrollLength = this.scroll.length();
						index = Math.min(index, scrollLength - 1);
						length = Math.min(index + length, scrollLength - 1) - index;
						var bounds = void 0;var node = void 0;
						var _scroll$leaf = this.scroll.leaf(index);

						var _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2);

						var leaf = _scroll$leaf2[0];
						var offset = _scroll$leaf2[1];

						if (leaf == null) return null;

						var _leaf$position = leaf.position(offset, true);

						var _leaf$position2 = _slicedToArray(_leaf$position, 2);

						node = _leaf$position2[0];
						offset = _leaf$position2[1];

						var range = document.createRange();
						if (length > 0) {
							range.setStart(node, offset);

							var _scroll$leaf3 = this.scroll.leaf(index + length);

							var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

							leaf = _scroll$leaf4[0];
							offset = _scroll$leaf4[1];

							if (leaf == null) return null;

							var _leaf$position3 = leaf.position(offset, true);

							var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

							node = _leaf$position4[0];
							offset = _leaf$position4[1];

							range.setEnd(node, offset);
							bounds = range.getBoundingClientRect();
						} else {
							var side = 'left';
							if (node instanceof Text) {
								if (offset < node.data.length) {
									range.setStart(node, offset);
									range.setEnd(node, offset + 1);
								} else {
									range.setStart(node, offset - 1);
									range.setEnd(node, offset);
									side = 'right';
								}
								var rect = range.getBoundingClientRect();
							} else {
								var rect = leaf.domNode.getBoundingClientRect();
								if (offset > 0) side = 'right';
							}
							bounds = {
								height: rect.height,
								left: rect[side],
								width: 0,
								top: rect.top
							};
						}
						var containerBounds = this.root.parentNode.getBoundingClientRect();
						return {
							left: bounds.left - containerBounds.left,
							right: bounds.left + bounds.width - containerBounds.left,
							top: bounds.top - containerBounds.top,
							bottom: bounds.top + bounds.height - containerBounds.top,
							height: bounds.height,
							width: bounds.width
						};
					}
				}, {
					key: 'getNativeRange',
					value: function getNativeRange() {
						var selection = document.getSelection();
						if (selection == null || selection.rangeCount <= 0) return null;
						var nativeRange = selection.getRangeAt(0);
						if (nativeRange == null) return null;
						if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
							return null;
						}
						var range = {
							start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
							end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
							native: nativeRange
						};
						[range.start, range.end].forEach(function (position) {
							var node = position.node,
							    offset = position.offset;
							while (!(node instanceof Text) && node.childNodes.length > 0) {
								if (node.childNodes.length > offset) {
									node = node.childNodes[offset];
									offset = 0;
								} else if (node.childNodes.length === offset) {
									node = node.lastChild;
									offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
								} else {
									break;
								}
							}
							position.node = node, position.offset = offset;
						});
						debug.info('getNativeRange', range);
						return range;
					}
				}, {
					key: 'getRange',
					value: function getRange() {
						var _this2 = this;

						if (!this.hasFocus()) return [null, null];
						var range = this.getNativeRange();
						if (range == null) return [null, null];
						var positions = [[range.start.node, range.start.offset]];
						if (!range.native.collapsed) {
							positions.push([range.end.node, range.end.offset]);
						}
						var indexes = positions.map(function (position) {
							var _position = _slicedToArray(position, 2);

							var node = _position[0];
							var offset = _position[1];

							var blot = _parchment2.default.find(node, true);
							var index = blot.offset(_this2.scroll);
							if (offset === 0) {
								return index;
							} else if (blot instanceof _parchment2.default.Container) {
								return index + blot.length();
							} else {
								return index + blot.index(node, offset);
							}
						});
						var start = Math.min.apply(Math, _toConsumableArray(indexes)),
						    end = Math.max.apply(Math, _toConsumableArray(indexes));
						return [new Range(start, end - start), range];
					}
				}, {
					key: 'hasFocus',
					value: function hasFocus() {
						return document.activeElement === this.root;
					}
				}, {
					key: 'scrollIntoView',
					value: function scrollIntoView() {
						var range = arguments.length <= 0 || arguments[0] === undefined ? this.lastRange : arguments[0];

						if (range == null) return;
						var bounds = this.getBounds(range.index, range.length);
						if (bounds == null) return;
						if (this.root.offsetHeight < bounds.bottom) {
							var _scroll$line = this.scroll.line(Math.min(range.index + range.length, this.scroll.length() - 1));

							var _scroll$line2 = _slicedToArray(_scroll$line, 1);

							var line = _scroll$line2[0];

							this.root.scrollTop = line.domNode.offsetTop + line.domNode.offsetHeight - this.root.offsetHeight;
						} else if (bounds.top < 0) {
							var _scroll$line3 = this.scroll.line(Math.min(range.index, this.scroll.length() - 1));

							var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

							var _line = _scroll$line4[0];

							this.root.scrollTop = _line.domNode.offsetTop;
						}
					}
				}, {
					key: 'setNativeRange',
					value: function setNativeRange(startNode, startOffset) {
						var endNode = arguments.length <= 2 || arguments[2] === undefined ? startNode : arguments[2];
						var endOffset = arguments.length <= 3 || arguments[3] === undefined ? startOffset : arguments[3];
						var force = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

						debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
						if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
							return;
						}
						var selection = document.getSelection();
						if (selection == null) return;
						if (startNode != null) {
							if (!this.hasFocus()) this.root.focus();
							var nativeRange = this.getNativeRange();
							if (nativeRange == null || force || startNode !== nativeRange.start.node || startOffset !== nativeRange.start.offset || endNode !== nativeRange.end.node || endOffset !== nativeRange.end.offset) {
								var range = document.createRange();
								range.setStart(startNode, startOffset);
								range.setEnd(endNode, endOffset);
								selection.removeAllRanges();
								selection.addRange(range);
							}
						} else {
							selection.removeAllRanges();
							this.root.blur();
							document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
						}
					}
				}, {
					key: 'setRange',
					value: function setRange(range) {
						var _this3 = this;

						var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
						var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter4.default.sources.API : arguments[2];

						if (typeof force === 'string') {
							source = force;
							force = false;
						}
						debug.info('setRange', range);
						if (range != null) {
							(function () {
								var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
								var args = [];
								var scrollLength = _this3.scroll.length();
								indexes.forEach(function (index, i) {
									index = Math.min(scrollLength - 1, index);
									var node = void 0;
									var _scroll$leaf5 = _this3.scroll.leaf(index);

									var _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2);

									var leaf = _scroll$leaf6[0];
									var offset = _scroll$leaf6[1];

									var _leaf$position5 = leaf.position(offset, i !== 0);

									var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

									node = _leaf$position6[0];
									offset = _leaf$position6[1];

									args.push(node, offset);
								});
								if (args.length < 2) {
									args = args.concat(args);
								}
								_this3.setNativeRange.apply(_this3, _toConsumableArray(args).concat([force]));
							})();
						} else {
							this.setNativeRange(null);
						}
						this.update(source);
					}
				}, {
					key: 'update',
					value: function update() {
						var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter4.default.sources.USER : arguments[0];

						var nativeRange = void 0,
						    oldRange = this.lastRange;

						var _getRange = this.getRange();

						var _getRange2 = _slicedToArray(_getRange, 2);

						this.lastRange = _getRange2[0];
						nativeRange = _getRange2[1];

						if (this.lastRange != null) {
							this.savedRange = this.lastRange;
						}
						if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
							var _emitter;

							if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
								this.cursor.restore();
							}
							var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
							(_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
							if (source !== _emitter4.default.sources.SILENT) {
								var _emitter2;

								(_emitter2 = this.emitter).emit.apply(_emitter2, args);
							}
						}
					}
				}]);

				return Selection;
			}();

			function contains(parent, descendant) {
				try {
					// Firefox inserts inaccessible nodes around video elements
					descendant.parentNode;
				} catch (e) {
					return false;
				}
				// IE11 has bug with Text nodes
				// https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
				if (descendant instanceof Text) {
					descendant = descendant.parentNode;
				}
				return parent.contains(descendant);
			}

			exports.Range = Range;
			exports.default = Selection;

			/***/
		},
		/* 42 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _emitter = __webpack_require__(29);

			var _emitter2 = _interopRequireDefault(_emitter);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var Theme = function () {
				function Theme(quill, options) {
					_classCallCheck(this, Theme);

					this.quill = quill;
					this.options = options;
					this.modules = {};
				}

				_createClass(Theme, [{
					key: 'init',
					value: function init() {
						var _this = this;

						Object.keys(this.options.modules).forEach(function (name) {
							if (_this.modules[name] == null) {
								_this.addModule(name);
							}
						});
					}
				}, {
					key: 'addModule',
					value: function addModule(name) {
						var moduleClass = this.quill.constructor.import('modules/' + name);
						this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
						return this.modules[name];
					}
				}]);

				return Theme;
			}();

			Theme.DEFAULTS = {
				modules: {}
			};
			Theme.themes = {
				'default': Theme
			};

			exports.default = Theme;

			/***/
		},
		/* 43 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _block = __webpack_require__(33);

			var _block2 = _interopRequireDefault(_block);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Container = function (_Parchment$Container) {
				_inherits(Container, _Parchment$Container);

				function Container() {
					_classCallCheck(this, Container);

					return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
				}

				return Container;
			}(_parchment2.default.Container);

			Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

			exports.default = Container;

			/***/
		},
		/* 44 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _emitter = __webpack_require__(29);

			var _emitter2 = _interopRequireDefault(_emitter);

			var _block = __webpack_require__(33);

			var _block2 = _interopRequireDefault(_block);

			var _break = __webpack_require__(34);

			var _break2 = _interopRequireDefault(_break);

			var _container = __webpack_require__(43);

			var _container2 = _interopRequireDefault(_container);

			var _code = __webpack_require__(32);

			var _code2 = _interopRequireDefault(_code);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			function isLine(blot) {
				return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
			}

			var Scroll = function (_Parchment$Scroll) {
				_inherits(Scroll, _Parchment$Scroll);

				function Scroll(domNode, config) {
					_classCallCheck(this, Scroll);

					var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

					_this.emitter = config.emitter;
					if (Array.isArray(config.whitelist)) {
						_this.whitelist = config.whitelist.reduce(function (whitelist, format) {
							whitelist[format] = true;
							return whitelist;
						}, {});
					}
					_this.optimize();
					return _this;
				}

				_createClass(Scroll, [{
					key: 'deleteAt',
					value: function deleteAt(index, length) {
						var _line = this.line(index);

						var _line2 = _slicedToArray(_line, 2);

						var first = _line2[0];
						var offset = _line2[1];

						var _line3 = this.line(index + length);

						var _line4 = _slicedToArray(_line3, 1);

						var last = _line4[0];

						_get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
						if (last != null && first !== last && offset > 0 && !(first instanceof _block.BlockEmbed) && !(last instanceof _block.BlockEmbed)) {
							if (last instanceof _code2.default) {
								last.deleteAt(last.length() - 1, 1);
							}
							var ref = last.children.head instanceof _break2.default ? null : last.children.head;
							first.moveChildren(last, ref);
							first.remove();
						}
						this.optimize();
					}
				}, {
					key: 'formatAt',
					value: function formatAt(index, length, format, value) {
						if (this.whitelist != null && !this.whitelist[format]) return;
						_get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
						this.optimize();
					}
				}, {
					key: 'insertAt',
					value: function insertAt(index, value, def) {
						if (def != null && this.whitelist != null && !this.whitelist[value]) return;
						if (index >= this.length()) {
							if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
								var blot = _parchment2.default.create(this.statics.defaultChild);
								this.appendChild(blot);
								if (def == null && value.endsWith('\n')) {
									value = value.slice(0, -1);
								}
								blot.insertAt(0, value, def);
							} else {
								var embed = _parchment2.default.create(value, def);
								this.appendChild(embed);
							}
						} else {
							_get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
						}
						this.optimize();
					}
				}, {
					key: 'insertBefore',
					value: function insertBefore(blot, ref) {
						if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
							var wrapper = _parchment2.default.create(this.statics.defaultChild);
							wrapper.appendChild(blot);
							blot = wrapper;
						}
						_get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
					}
				}, {
					key: 'leaf',
					value: function leaf(index) {
						return this.path(index).pop() || [null, -1];
					}
				}, {
					key: 'line',
					value: function line(index) {
						return this.descendant(isLine, index);
					}
				}, {
					key: 'lines',
					value: function lines() {
						var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
						var length = arguments.length <= 1 || arguments[1] === undefined ? Number.MAX_VALUE : arguments[1];

						var getLines = function getLines(blot, index, length) {
							var lines = [],
							    lengthLeft = length;
							blot.children.forEachAt(index, length, function (child, index, length) {
								if (isLine(child)) {
									lines.push(child);
								} else if (child instanceof _parchment2.default.Container) {
									lines = lines.concat(getLines(child, index, lengthLeft));
								}
								lengthLeft -= length;
							});
							return lines;
						};
						return getLines(this, index, length);
					}
				}, {
					key: 'optimize',
					value: function optimize() {
						var mutations = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

						if (this.batch === true) return;
						_get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations);
						if (mutations.length > 0) {
							this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations);
						}
					}
				}, {
					key: 'path',
					value: function path(index) {
						return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
					}
				}, {
					key: 'update',
					value: function update(mutations) {
						if (this.batch === true) return;
						var source = _emitter2.default.sources.USER;
						if (typeof mutations === 'string') {
							source = mutations;
						}
						if (!Array.isArray(mutations)) {
							mutations = this.observer.takeRecords();
						}
						if (mutations.length > 0) {
							this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
						}
						_get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
						if (mutations.length > 0) {
							this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
						}
					}
				}]);

				return Scroll;
			}(_parchment2.default.Scroll);

			Scroll.blotName = 'scroll';
			Scroll.className = 'ql-editor';
			Scroll.tagName = 'DIV';
			Scroll.defaultChild = 'block';
			Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

			exports.default = Scroll;

			/***/
		},
		/* 45 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _delta = __webpack_require__(21);

			var _delta2 = _interopRequireDefault(_delta);

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _quill = __webpack_require__(19);

			var _quill2 = _interopRequireDefault(_quill);

			var _logger = __webpack_require__(31);

			var _logger2 = _interopRequireDefault(_logger);

			var _module = __webpack_require__(40);

			var _module2 = _interopRequireDefault(_module);

			var _align = __webpack_require__(46);

			var _background = __webpack_require__(47);

			var _color = __webpack_require__(48);

			var _direction = __webpack_require__(49);

			var _font = __webpack_require__(50);

			var _size = __webpack_require__(51);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _defineProperty(obj, key, value) {
				if (key in obj) {
					Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
				} else {
					obj[key] = value;
				}return obj;
			}

			function _toConsumableArray(arr) {
				if (Array.isArray(arr)) {
					for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
						arr2[i] = arr[i];
					}return arr2;
				} else {
					return Array.from(arr);
				}
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var debug = (0, _logger2.default)('quill:clipboard');

			var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

			var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
				memo[attr.keyName] = attr;
				return memo;
			}, {});

			var Clipboard = function (_Module) {
				_inherits(Clipboard, _Module);

				function Clipboard(quill, options) {
					_classCallCheck(this, Clipboard);

					var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

					_this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
					_this.container = _this.quill.addContainer('ql-clipboard');
					_this.container.setAttribute('contenteditable', true);
					_this.container.setAttribute('tabindex', -1);
					_this.matchers = [];
					CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (pair) {
						_this.addMatcher.apply(_this, _toConsumableArray(pair));
					});
					return _this;
				}

				_createClass(Clipboard, [{
					key: 'addMatcher',
					value: function addMatcher(selector, matcher) {
						this.matchers.push([selector, matcher]);
					}
				}, {
					key: 'convert',
					value: function convert(html) {
						var _this2 = this;

						var DOM_KEY = '__ql-matcher';
						if (typeof html === 'string') {
							this.container.innerHTML = html;
						}
						var textMatchers = [],
						    elementMatchers = [];
						this.matchers.forEach(function (pair) {
							var _pair = _slicedToArray(pair, 2);

							var selector = _pair[0];
							var matcher = _pair[1];

							switch (selector) {
								case Node.TEXT_NODE:
									textMatchers.push(matcher);
									break;
								case Node.ELEMENT_NODE:
									elementMatchers.push(matcher);
									break;
								default:
									[].forEach.call(_this2.container.querySelectorAll(selector), function (node) {
										// TODO use weakmap
										node[DOM_KEY] = node[DOM_KEY] || [];
										node[DOM_KEY].push(matcher);
									});
									break;
							}
						});
						var traverse = function traverse(node) {
							// Post-order
							if (node.nodeType === node.TEXT_NODE) {
								return textMatchers.reduce(function (delta, matcher) {
									return matcher(node, delta);
								}, new _delta2.default());
							} else if (node.nodeType === node.ELEMENT_NODE) {
								return [].reduce.call(node.childNodes || [], function (delta, childNode) {
									var childrenDelta = traverse(childNode);
									if (childNode.nodeType === node.ELEMENT_NODE) {
										childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
											return matcher(childNode, childrenDelta);
										}, childrenDelta);
										childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
											return matcher(childNode, childrenDelta);
										}, childrenDelta);
									}
									return delta.concat(childrenDelta);
								}, new _delta2.default());
							} else {
								return new _delta2.default();
							}
						};
						var delta = traverse(this.container);
						// Remove trailing newline
						if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
							delta = delta.compose(new _delta2.default().retain(delta.length() - 1).delete(1));
						}
						debug.log('convert', this.container.innerHTML, delta);
						this.container.innerHTML = '';
						return delta;
					}
				}, {
					key: 'onPaste',
					value: function onPaste(e) {
						var _this3 = this;

						if (e.defaultPrevented) return;
						var range = this.quill.getSelection();
						var delta = new _delta2.default().retain(range.index).delete(range.length);
						var bodyTop = document.body.scrollTop;
						this.container.focus();
						setTimeout(function () {
							delta = delta.concat(_this3.convert());
							_this3.quill.updateContents(delta, _quill2.default.sources.USER);
							// range.length contributes to delta.length()
							_this3.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
							document.body.scrollTop = bodyTop;
							_this3.quill.selection.scrollIntoView();
						}, 1);
					}
				}]);

				return Clipboard;
			}(_module2.default);

			Clipboard.DEFAULTS = {
				matchers: []
			};

			function computeStyle(node) {
				if (node.nodeType !== Node.ELEMENT_NODE) return {};
				var DOM_KEY = '__ql-computed-style';
				return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
			}

			function deltaEndsWith(delta, text) {
				var endText = "";
				for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
					var op = delta.ops[i];
					if (typeof op.insert !== 'string') break;
					endText = op.insert + endText;
				}
				return endText.slice(-1 * text.length) === text;
			}

			function isLine(node) {
				if (node.childNodes.length === 0) return false; // Exclude embed blocks
				var style = computeStyle(node);
				return ['block', 'list-item'].indexOf(style.display) > -1;
			}

			function matchAlias(format, node, delta) {
				return delta.compose(new _delta2.default().retain(delta.length(), _defineProperty({}, format, true)));
			}

			function matchAttributor(node, delta) {
				var attributes = _parchment2.default.Attributor.Attribute.keys(node);
				var classes = _parchment2.default.Attributor.Class.keys(node);
				var styles = _parchment2.default.Attributor.Style.keys(node);
				var formats = {};
				attributes.concat(classes).concat(styles).forEach(function (name) {
					var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
					if (attr != null) {
						formats[attr.attrName] = attr.value(node);
						if (formats[attr.attrName]) return;
					}
					if (STYLE_ATTRIBUTORS[name] != null) {
						attr = STYLE_ATTRIBUTORS[name];
						formats[attr.attrName] = attr.value(node);
					}
				});
				if (Object.keys(formats).length > 0) {
					delta = delta.compose(new _delta2.default().retain(delta.length(), formats));
				}
				return delta;
			}

			function matchBlot(node, delta) {
				var match = _parchment2.default.query(node);
				if (match == null) return delta;
				if (match.prototype instanceof _parchment2.default.Embed) {
					var embed = {};
					var value = match.value(node);
					if (value != null) {
						embed[match.blotName] = value;
						delta = new _delta2.default().insert(embed, match.formats(node));
					}
				} else if (typeof match.formats === 'function') {
					var formats = _defineProperty({}, match.blotName, match.formats(node));
					delta = delta.compose(new _delta2.default().retain(delta.length(), formats));
				}
				return delta;
			}

			function matchBreak(node, delta) {
				if (!deltaEndsWith(delta, '\n')) {
					delta.insert('\n');
				}
				return delta;
			}

			function matchIgnore(node, delta) {
				return new _delta2.default();
			}

			function matchNewline(node, delta) {
				if (isLine(node) && !deltaEndsWith(delta, '\n')) {
					delta.insert('\n');
				}
				return delta;
			}

			function matchSpacing(node, delta) {
				if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
					var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
					if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
						delta.insert('\n');
					}
				}
				return delta;
			}

			function matchStyles(node, delta) {
				var formats = {};
				var style = node.style || {};
				if (style.fontWeight && computeStyle(node).fontWeight === 'bold') {
					formats.bold = true;
				}
				if (Object.keys(formats).length > 0) {
					delta = delta.compose(new _delta2.default().retain(delta.length(), formats));
				}
				if (parseFloat(style.textIndent || 0) > 0) {
					// Could be 0.5in
					delta = new _delta2.default().insert('\t').concat(delta);
				}
				return delta;
			}

			function matchText(node, delta) {
				var text = node.data;
				// Word represents empty line with <o:p>&nbsp;</o:p>
				if (node.parentNode.tagName === 'O:P') {
					return delta.insert(text.trim());
				}
				if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
					var replacer = function replacer(collapse, match) {
						match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
						return match.length < 1 && collapse ? ' ' : match;
					};

					text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
					text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
					if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
						text = text.replace(/^\s+/, replacer.bind(replacer, false));
					}
					if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
						text = text.replace(/\s+$/, replacer.bind(replacer, false));
					}
				}
				return delta.insert(text);
			}

			exports.default = Clipboard;
			exports.matchAttributor = matchAttributor;
			exports.matchBlot = matchBlot;
			exports.matchNewline = matchNewline;
			exports.matchSpacing = matchSpacing;
			exports.matchText = matchText;

			/***/
		},
		/* 46 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.AlignStyle = exports.AlignClass = undefined;

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var config = {
				scope: _parchment2.default.Scope.BLOCK,
				whitelist: ['right', 'center', 'justify']
			};

			var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
			var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

			exports.AlignClass = AlignClass;
			exports.AlignStyle = AlignStyle;

			/***/
		},
		/* 47 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.BackgroundStyle = exports.BackgroundClass = undefined;

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _color = __webpack_require__(48);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
				scope: _parchment2.default.Scope.INLINE
			});
			var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
				scope: _parchment2.default.Scope.INLINE
			});

			exports.BackgroundClass = BackgroundClass;
			exports.BackgroundStyle = BackgroundStyle;

			/***/
		},
		/* 48 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var ColorAttributor = function (_Parchment$Attributor) {
				_inherits(ColorAttributor, _Parchment$Attributor);

				function ColorAttributor() {
					_classCallCheck(this, ColorAttributor);

					return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
				}

				_createClass(ColorAttributor, [{
					key: 'value',
					value: function value(domNode) {
						var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
						if (!value.startsWith('rgb(')) return value;
						value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
						return '#' + value.split(',').map(function (component) {
							return ('00' + parseInt(component).toString(16)).slice(-2);
						}).join('');
					}
				}]);

				return ColorAttributor;
			}(_parchment2.default.Attributor.Style);

			var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
				scope: _parchment2.default.Scope.INLINE
			});
			var ColorStyle = new ColorAttributor('color', 'color', {
				scope: _parchment2.default.Scope.INLINE
			});

			exports.ColorAttributor = ColorAttributor;
			exports.ColorClass = ColorClass;
			exports.ColorStyle = ColorStyle;

			/***/
		},
		/* 49 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.DirectionStyle = exports.DirectionClass = undefined;

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var config = {
				scope: _parchment2.default.Scope.BLOCK,
				whitelist: ['rtl']
			};

			var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
			var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

			exports.DirectionClass = DirectionClass;
			exports.DirectionStyle = DirectionStyle;

			/***/
		},
		/* 50 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.FontClass = exports.FontStyle = undefined;

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var config = {
				scope: _parchment2.default.Scope.INLINE,
				whitelist: ['serif', 'monospace']
			};

			var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);
			var FontStyle = new _parchment2.default.Attributor.Style('font', 'font-family', config);

			exports.FontStyle = FontStyle;
			exports.FontClass = FontClass;

			/***/
		},
		/* 51 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.SizeStyle = exports.SizeClass = undefined;

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
				scope: _parchment2.default.Scope.INLINE,
				whitelist: ['small', 'large', 'huge']
			});
			var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
				scope: _parchment2.default.Scope.INLINE,
				whitelist: ['10px', '18px', '32px']
			});

			exports.SizeClass = SizeClass;
			exports.SizeStyle = SizeStyle;

			/***/
		},
		/* 52 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.getLastChangeIndex = exports.default = undefined;

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _quill = __webpack_require__(19);

			var _quill2 = _interopRequireDefault(_quill);

			var _module = __webpack_require__(40);

			var _module2 = _interopRequireDefault(_module);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var History = function (_Module) {
				_inherits(History, _Module);

				function History(quill, options) {
					_classCallCheck(this, History);

					var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

					_this.lastRecorded = 0;
					_this.ignoreChange = false;
					_this.clear();
					_this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
						if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
						if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
							_this.record(delta, oldDelta);
						} else {
							_this.transform(delta);
						}
					});
					_this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
					_this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
					if (/Win/i.test(navigator.platform)) {
						_this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
					}
					return _this;
				}

				_createClass(History, [{
					key: 'change',
					value: function change(source, dest) {
						if (this.stack[source].length === 0) return;
						var delta = this.stack[source].pop();
						this.lastRecorded = 0;
						this.ignoreChange = true;
						this.quill.updateContents(delta[source], _quill2.default.sources.USER);
						this.ignoreChange = false;
						var index = getLastChangeIndex(delta[source]);
						this.quill.setSelection(index);
						this.quill.selection.scrollIntoView();
						this.stack[dest].push(delta);
					}
				}, {
					key: 'clear',
					value: function clear() {
						this.stack = { undo: [], redo: [] };
					}
				}, {
					key: 'record',
					value: function record(changeDelta, oldDelta) {
						if (changeDelta.ops.length === 0) return;
						this.stack.redo = [];
						var undoDelta = this.quill.getContents().diff(oldDelta);
						var timestamp = Date.now();
						if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
							var delta = this.stack.undo.pop();
							undoDelta = undoDelta.compose(delta.undo);
							changeDelta = delta.redo.compose(changeDelta);
						} else {
							this.lastRecorded = timestamp;
						}
						this.stack.undo.push({
							redo: changeDelta,
							undo: undoDelta
						});
						if (this.stack.undo.length > this.options.maxStack) {
							this.stack.undo.unshift();
						}
					}
				}, {
					key: 'redo',
					value: function redo() {
						this.change('redo', 'undo');
					}
				}, {
					key: 'transform',
					value: function transform(delta) {
						this.stack.undo.forEach(function (change) {
							change.undo = delta.transform(change.undo, true);
							change.redo = delta.transform(change.redo, true);
						});
						this.stack.redo.forEach(function (change) {
							change.undo = delta.transform(change.undo, true);
							change.redo = delta.transform(change.redo, true);
						});
					}
				}, {
					key: 'undo',
					value: function undo() {
						this.change('undo', 'redo');
					}
				}]);

				return History;
			}(_module2.default);

			History.DEFAULTS = {
				delay: 1000,
				maxStack: 100,
				userOnly: false
			};

			function endsWithNewlineChange(delta) {
				var lastOp = delta.ops[delta.ops.length - 1];
				if (lastOp == null) return false;
				if (lastOp.insert != null) {
					return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
				}
				if (lastOp.attributes != null) {
					return Object.keys(lastOp.attributes).some(function (attr) {
						return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
					});
				}
				return false;
			}

			function getLastChangeIndex(delta) {
				var deleteLength = delta.ops.reduce(function (length, op) {
					length += op.delete || 0;
					return length;
				}, 0);
				var changeIndex = delta.length() - deleteLength;
				if (endsWithNewlineChange(delta)) {
					changeIndex -= 1;
				}
				return changeIndex;
			}

			exports.default = History;
			exports.getLastChangeIndex = getLastChangeIndex;

			/***/
		},
		/* 53 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _clone = __webpack_require__(39);

			var _clone2 = _interopRequireDefault(_clone);

			var _deepEqual = __webpack_require__(23);

			var _deepEqual2 = _interopRequireDefault(_deepEqual);

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _delta = __webpack_require__(21);

			var _delta2 = _interopRequireDefault(_delta);

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _quill = __webpack_require__(19);

			var _quill2 = _interopRequireDefault(_quill);

			var _logger = __webpack_require__(31);

			var _logger2 = _interopRequireDefault(_logger);

			var _module = __webpack_require__(40);

			var _module2 = _interopRequireDefault(_module);

			var _block = __webpack_require__(33);

			var _block2 = _interopRequireDefault(_block);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var debug = (0, _logger2.default)('quill:keyboard');

			var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

			var Keyboard = function (_Module) {
				_inherits(Keyboard, _Module);

				_createClass(Keyboard, null, [{
					key: 'match',
					value: function match(evt, binding) {
						binding = normalize(binding);
						if (!!binding.shortKey !== evt[SHORTKEY] && binding.shortKey !== null) return false;
						if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
							return key != SHORTKEY && !!binding[key] !== evt[key] && binding[key] !== null;
						})) {
							return false;
						}
						return binding.key === (evt.which || evt.keyCode);
					}
				}]);

				function Keyboard(quill, options) {
					_classCallCheck(this, Keyboard);

					var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

					_this.bindings = {};
					Object.keys(_this.options.bindings).forEach(function (name) {
						if (_this.options.bindings[name]) {
							_this.addBinding(_this.options.bindings[name]);
						}
					});
					_this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
					_this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
					_this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, function (range) {
						if (range.index === 0) return;
						this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
						this.quill.selection.scrollIntoView();
					});
					_this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^$/ }, function (range) {
						if (range.index >= this.quill.getLength() - 1) return;
						this.quill.deleteText(range.index, 1, _quill2.default.sources.USER);
					});
					_this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDelete);
					_this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDelete);
					_this.listen();
					return _this;
				}

				_createClass(Keyboard, [{
					key: 'addBinding',
					value: function addBinding(key) {
						var context = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
						var handler = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

						var binding = normalize(key);
						if (binding == null || binding.key == null) {
							return debug.warn('Attempted to add invalid keyboard binding', binding);
						}
						if (typeof context === 'function') {
							context = { handler: context };
						}
						if (typeof handler === 'function') {
							handler = { handler: handler };
						}
						binding = (0, _extend2.default)(binding, context, handler);
						this.bindings[binding.key] = this.bindings[binding.key] || [];
						this.bindings[binding.key].push(binding);
					}
				}, {
					key: 'listen',
					value: function listen() {
						var _this2 = this;

						this.quill.root.addEventListener('keydown', function (evt) {
							if (evt.defaultPrevented) return;
							var which = evt.which || evt.keyCode;
							var bindings = (_this2.bindings[which] || []).filter(function (binding) {
								return Keyboard.match(evt, binding);
							});
							if (bindings.length === 0) return;
							var range = _this2.quill.getSelection();
							if (range == null) return; // implies we do not have focus

							var _quill$scroll$line = _this2.quill.scroll.line(range.index);

							var _quill$scroll$line2 = _slicedToArray(_quill$scroll$line, 2);

							var line = _quill$scroll$line2[0];
							var offset = _quill$scroll$line2[1];

							var _quill$scroll$leaf = _this2.quill.scroll.leaf(range.index);

							var _quill$scroll$leaf2 = _slicedToArray(_quill$scroll$leaf, 2);

							var leafStart = _quill$scroll$leaf2[0];
							var offsetStart = _quill$scroll$leaf2[1];

							var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.scroll.leaf(range.index + range.length);

							var _ref2 = _slicedToArray(_ref, 2);

							var leafEnd = _ref2[0];
							var offsetEnd = _ref2[1];

							var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
							var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
							var curContext = {
								collapsed: range.length === 0,
								empty: range.length === 0 && line.length() <= 1,
								format: _this2.quill.getFormat(range),
								offset: offset,
								prefix: prefixText,
								suffix: suffixText
							};
							var prevented = bindings.some(function (binding) {
								if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
								if (binding.empty != null && binding.empty !== curContext.empty) return false;
								if (binding.offset != null && binding.offset !== curContext.offset) return false;
								if (Array.isArray(binding.format)) {
									// any format is present
									if (binding.format.every(function (name) {
										return curContext.format[name] == null;
									})) {
										return false;
									}
								} else if (_typeof(binding.format) === 'object') {
									// all formats must match
									if (!Object.keys(binding.format).every(function (name) {
										if (binding.format[name] === true) return curContext.format[name] != null;
										if (binding.format[name] === false) return curContext.format[name] == null;
										return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
									})) {
										return false;
									}
								}
								if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
								if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
								return binding.handler.call(_this2, range, curContext) !== true;
							});
							if (prevented) {
								evt.preventDefault();
							}
						});
					}
				}]);

				return Keyboard;
			}(_module2.default);

			Keyboard.keys = {
				BACKSPACE: 8,
				TAB: 9,
				ENTER: 13,
				ESCAPE: 27,
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				DELETE: 46
			};

			Keyboard.DEFAULTS = {
				bindings: {
					'bold': makeFormatHandler('bold'),
					'italic': makeFormatHandler('italic'),
					'underline': makeFormatHandler('underline'),
					'indent': {
						// highlight tab or tab at beginning of list, indent or blockquote
						key: Keyboard.keys.TAB,
						format: ['blockquote', 'indent', 'list'],
						handler: function handler(range, context) {
							if (context.collapsed && context.offset !== 0) return true;
							this.quill.format('indent', '+1', _quill2.default.sources.USER);
						}
					},
					'outdent': {
						key: Keyboard.keys.TAB,
						shiftKey: true,
						format: ['blockquote', 'indent', 'list'],
						// highlight tab or tab at beginning of list, indent or blockquote
						handler: function handler(range, context) {
							if (context.collapsed && context.offset !== 0) return true;
							this.quill.format('indent', '-1', _quill2.default.sources.USER);
						}
					},
					'outdent backspace': {
						key: Keyboard.keys.BACKSPACE,
						collapsed: true,
						format: ['blockquote', 'indent', 'list'],
						offset: 0,
						handler: function handler(range, context) {
							if (context.format.indent != null) {
								this.quill.format('indent', '-1', _quill2.default.sources.USER);
							} else if (context.format.blockquote != null) {
								this.quill.format('blockquote', false, _quill2.default.sources.USER);
							} else if (context.format.list != null) {
								this.quill.format('list', false, _quill2.default.sources.USER);
							}
						}
					},
					'indent code-block': makeCodeBlockHandler(true),
					'outdent code-block': makeCodeBlockHandler(false),
					'remove tab': {
						key: Keyboard.keys.TAB,
						shiftKey: true,
						collapsed: true,
						prefix: /\t$/,
						handler: function handler(range, context) {
							this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
						}
					},
					'tab': {
						key: Keyboard.keys.TAB,
						handler: function handler(range, context) {
							if (!context.collapsed) {
								this.quill.scroll.deleteAt(range.index, range.length);
							}
							this.quill.insertText(range.index, '\t', _quill2.default.sources.USER);
							this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
						}
					},
					'list empty enter': {
						key: Keyboard.keys.ENTER,
						collapsed: true,
						format: ['list'],
						empty: true,
						handler: function handler(range, context) {
							this.quill.format('list', false, _quill2.default.sources.USER);
							if (context.format.indent) {
								this.quill.format('indent', false, _quill2.default.sources.USER);
							}
						}
					},
					'header enter': {
						key: Keyboard.keys.ENTER,
						collapsed: true,
						format: ['header'],
						suffix: /^$/,
						handler: function handler(range) {
							this.quill.scroll.insertAt(range.index, '\n');
							this.quill.formatText(range.index + 1, 1, 'header', false, _quill2.default.sources.USER);
							this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
							this.quill.selection.scrollIntoView();
						}
					},
					'list autofill': {
						key: ' ',
						collapsed: true,
						format: { list: false },
						prefix: /^(1\.|-)$/,
						handler: function handler(range, context) {
							var length = context.prefix.length;
							this.quill.scroll.deleteAt(range.index - length, length);
							this.quill.formatLine(range.index - length, 1, 'list', length === 1 ? 'bullet' : 'ordered', _quill2.default.sources.USER);
							this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
						}
					}
				}
			};

			function handleDelete(range) {
				this.quill.deleteText(range, _quill2.default.sources.USER);
				this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
				this.quill.selection.scrollIntoView();
			}

			function handleEnter(range, context) {
				var _this3 = this;

				if (range.length > 0) {
					this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
				}
				var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
					if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
						lineFormats[format] = context.format[format];
					}
					return lineFormats;
				}, {});
				this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
				this.quill.selection.scrollIntoView();
				Object.keys(context.format).forEach(function (name) {
					if (lineFormats[name] != null) return;
					if (Array.isArray(context.format[name])) return;
					if (name === 'link') return;
					_this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
				});
			}

			function makeCodeBlockHandler(indent) {
				return {
					key: Keyboard.keys.TAB,
					shiftKey: !indent,
					format: { 'code-block': true },
					handler: function handler(range) {
						var CodeBlock = _parchment2.default.query('code-block');
						var index = range.index,
						    length = range.length;

						var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index);

						var _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2);

						var block = _quill$scroll$descend2[0];
						var offset = _quill$scroll$descend2[1];

						if (block == null) return;
						var scrollOffset = this.quill.scroll.offset(block);
						var start = block.newlineIndex(offset, true) + 1;
						var end = block.newlineIndex(scrollOffset + offset + length);
						var lines = block.domNode.textContent.slice(start, end).split('\n');
						offset = 0;
						lines.forEach(function (line, i) {
							if (indent) {
								block.insertAt(start + offset, CodeBlock.TAB);
								offset += CodeBlock.TAB.length;
								if (i === 0) {
									index += CodeBlock.TAB.length;
								} else {
									length += CodeBlock.TAB.length;
								}
							} else if (line.startsWith(CodeBlock.TAB)) {
								block.deleteAt(start + offset, CodeBlock.TAB.length);
								offset -= CodeBlock.TAB.length;
								if (i === 0) {
									index -= CodeBlock.TAB.length;
								} else {
									length -= CodeBlock.TAB.length;
								}
							}
							offset += line.length + 1;
						});
						this.quill.update(_quill2.default.sources.USER);
						this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
					}
				};
			}

			function makeFormatHandler(format) {
				return {
					key: format[0].toUpperCase(),
					shortKey: true,
					handler: function handler(range, context) {
						this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
					}
				};
			}

			function normalize(binding) {
				if (typeof binding === 'string' || typeof binding === 'number') {
					return normalize({ key: binding });
				}
				if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
					binding = (0, _clone2.default)(binding, false);
				}
				if (typeof binding.key === 'string') {
					if (Keyboard.keys[binding.key.toUpperCase()] != null) {
						binding.key = Keyboard.keys[binding.key.toUpperCase()];
					} else if (binding.key.length === 1) {
						binding.key = binding.key.toUpperCase().charCodeAt(0);
					} else {
						return null;
					}
				}
				return binding;
			}

			exports.default = Keyboard;

			/***/
		},
		/* 54 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.IndentClass = undefined;

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var IdentAttributor = function (_Parchment$Attributor) {
				_inherits(IdentAttributor, _Parchment$Attributor);

				function IdentAttributor() {
					_classCallCheck(this, IdentAttributor);

					return _possibleConstructorReturn(this, (IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(this, arguments));
				}

				_createClass(IdentAttributor, [{
					key: 'add',
					value: function add(node, value) {
						if (value === '+1' || value === '-1') {
							var indent = this.value(node) || 0;
							value = value === '+1' ? indent + 1 : indent - 1;
						}
						if (value === 0) {
							this.remove(node);
							return true;
						} else {
							return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
						}
					}
				}, {
					key: 'value',
					value: function value(node) {
						return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'value', this).call(this, node)) || undefined; // Don't return NaN
					}
				}]);

				return IdentAttributor;
			}(_parchment2.default.Attributor.Class);

			var IndentClass = new IdentAttributor('indent', 'ql-indent', {
				scope: _parchment2.default.Scope.BLOCK,
				whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
			});

			exports.IndentClass = IndentClass;

			/***/
		},
		/* 55 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _block = __webpack_require__(33);

			var _block2 = _interopRequireDefault(_block);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Blockquote = function (_Block) {
				_inherits(Blockquote, _Block);

				function Blockquote() {
					_classCallCheck(this, Blockquote);

					return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
				}

				return Blockquote;
			}(_block2.default);

			Blockquote.blotName = 'blockquote';
			Blockquote.tagName = 'blockquote';

			exports.default = Blockquote;

			/***/
		},
		/* 56 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _block = __webpack_require__(33);

			var _block2 = _interopRequireDefault(_block);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Header = function (_Block) {
				_inherits(Header, _Block);

				function Header() {
					_classCallCheck(this, Header);

					return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
				}

				_createClass(Header, null, [{
					key: 'formats',
					value: function formats(domNode) {
						return this.tagName.indexOf(domNode.tagName) + 1;
					}
				}]);

				return Header;
			}(_block2.default);

			Header.blotName = 'header';
			Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

			exports.default = Header;

			/***/
		},
		/* 57 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = exports.ListItem = undefined;

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _delta = __webpack_require__(21);

			var _delta2 = _interopRequireDefault(_delta);

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _block = __webpack_require__(33);

			var _block2 = _interopRequireDefault(_block);

			var _container = __webpack_require__(43);

			var _container2 = _interopRequireDefault(_container);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _defineProperty(obj, key, value) {
				if (key in obj) {
					Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
				} else {
					obj[key] = value;
				}return obj;
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var ListItem = function (_Block) {
				_inherits(ListItem, _Block);

				function ListItem() {
					_classCallCheck(this, ListItem);

					return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
				}

				_createClass(ListItem, [{
					key: 'format',
					value: function format(name, value) {
						if (name === List.blotName && !value) {
							this.replaceWith(_parchment2.default.create(this.statics.scope));
						} else {
							_get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
						}
					}
				}, {
					key: 'remove',
					value: function remove() {
						if (this.prev == null && this.next == null) {
							this.parent.remove();
						} else {
							_get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'remove', this).call(this);
						}
					}
				}, {
					key: 'replaceWith',
					value: function replaceWith(name, value) {
						this.parent.isolate(this.offset(this.parent), this.length());
						if (name === this.parent.statics.blotName) {
							this.parent.replaceWith(name, value);
							return this;
						} else {
							this.parent.unwrap();
							return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
						}
					}
				}], [{
					key: 'formats',
					value: function formats(domNode) {
						return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
					}
				}]);

				return ListItem;
			}(_block2.default);

			ListItem.blotName = 'list-item';
			ListItem.tagName = 'LI';

			var List = function (_Container) {
				_inherits(List, _Container);

				function List() {
					_classCallCheck(this, List);

					return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
				}

				_createClass(List, [{
					key: 'format',
					value: function format(name, value) {
						if (this.children.length > 0) {
							this.children.tail.format(name, value);
						}
					}
				}, {
					key: 'formats',
					value: function formats() {
						// We don't inherit from FormatBlot
						return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
					}
				}, {
					key: 'insertBefore',
					value: function insertBefore(blot, ref) {
						if (blot instanceof ListItem) {
							_get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'insertBefore', this).call(this, blot, ref);
						} else {
							var index = ref == null ? this.length() : ref.offset(this);
							var after = this.split(index);
							after.parent.insertBefore(blot, after);
						}
					}
				}, {
					key: 'optimize',
					value: function optimize() {
						_get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'optimize', this).call(this);
						var next = this.next;
						if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName) {
							next.moveChildren(this);
							next.remove();
						}
					}
				}, {
					key: 'replace',
					value: function replace(target) {
						if (target.statics.blotName !== this.statics.blotName) {
							var item = _parchment2.default.create(this.statics.defaultChild);
							target.moveChildren(item);
							this.appendChild(item);
						}
						_get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
					}
				}], [{
					key: 'create',
					value: function create(value) {
						if (value === 'ordered') {
							value = 'OL';
						} else if (value === 'bullet') {
							value = 'UL';
						}
						return _get(List.__proto__ || Object.getPrototypeOf(List), 'create', this).call(this, value);
					}
				}, {
					key: 'formats',
					value: function formats(domNode) {
						if (domNode.tagName === 'OL') return 'ordered';
						if (domNode.tagName === 'UL') return 'bullet';
						return undefined;
					}
				}]);

				return List;
			}(_container2.default);

			List.blotName = 'list';
			List.scope = _parchment2.default.Scope.BLOCK_BLOT;
			List.tagName = ['OL', 'UL'];
			List.defaultChild = 'list-item';
			List.allowedChildren = [ListItem];

			exports.ListItem = ListItem;
			exports.default = List;

			/***/
		},
		/* 58 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _inline = __webpack_require__(36);

			var _inline2 = _interopRequireDefault(_inline);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Bold = function (_Inline) {
				_inherits(Bold, _Inline);

				function Bold() {
					_classCallCheck(this, Bold);

					return _possibleConstructorReturn(this, (Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(this, arguments));
				}

				_createClass(Bold, [{
					key: 'optimize',
					value: function optimize() {
						_get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype), 'optimize', this).call(this);
						if (this.domNode.tagName !== this.statics.tagName[0]) {
							this.replaceWith(this.statics.blotName);
						}
					}
				}], [{
					key: 'create',
					value: function create(value) {
						return _get(Bold.__proto__ || Object.getPrototypeOf(Bold), 'create', this).call(this);
					}
				}, {
					key: 'formats',
					value: function formats(domNode) {
						return true;
					}
				}]);

				return Bold;
			}(_inline2.default);

			Bold.blotName = 'bold';
			Bold.tagName = ['STRONG', 'B'];

			exports.default = Bold;

			/***/
		},
		/* 59 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _bold = __webpack_require__(58);

			var _bold2 = _interopRequireDefault(_bold);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Italic = function (_Bold) {
				_inherits(Italic, _Bold);

				function Italic() {
					_classCallCheck(this, Italic);

					return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
				}

				return Italic;
			}(_bold2.default);

			Italic.blotName = 'italic';
			Italic.tagName = ['EM', 'I'];

			exports.default = Italic;

			/***/
		},
		/* 60 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.sanitize = exports.default = undefined;

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _inline = __webpack_require__(36);

			var _inline2 = _interopRequireDefault(_inline);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Link = function (_Inline) {
				_inherits(Link, _Inline);

				function Link() {
					_classCallCheck(this, Link);

					return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
				}

				_createClass(Link, [{
					key: 'format',
					value: function format(name, value) {
						if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
						value = this.constructor.sanitize(value);
						this.domNode.setAttribute('href', value);
					}
				}], [{
					key: 'create',
					value: function create(value) {
						var node = _get(Link.__proto__ || Object.getPrototypeOf(Link), 'create', this).call(this, value);
						value = this.sanitize(value);
						node.setAttribute('href', value);
						node.setAttribute('target', '_blank');
						return node;
					}
				}, {
					key: 'formats',
					value: function formats(domNode) {
						return domNode.getAttribute('href');
					}
				}, {
					key: 'sanitize',
					value: function sanitize(url) {
						return _sanitize(url, ['http', 'https', 'mailto']) ? url : this.SANITIZED_URL;
					}
				}]);

				return Link;
			}(_inline2.default);

			Link.blotName = 'link';
			Link.tagName = 'A';
			Link.SANITIZED_URL = 'about:blank';

			function _sanitize(url, protocols) {
				var anchor = document.createElement('a');
				anchor.href = url;
				var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
				return protocols.indexOf(protocol) > -1;
			}

			exports.default = Link;
			exports.sanitize = _sanitize;

			/***/
		},
		/* 61 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _inline = __webpack_require__(36);

			var _inline2 = _interopRequireDefault(_inline);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Script = function (_Inline) {
				_inherits(Script, _Inline);

				function Script() {
					_classCallCheck(this, Script);

					return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
				}

				_createClass(Script, null, [{
					key: 'create',
					value: function create(value) {
						if (value === 'super') {
							return document.createElement('sup');
						} else if (value === 'sub') {
							return document.createElement('sub');
						} else {
							return _get(Script.__proto__ || Object.getPrototypeOf(Script), 'create', this).call(this, value);
						}
					}
				}, {
					key: 'formats',
					value: function formats(domNode) {
						if (domNode.tagName === 'SUB') return 'sub';
						if (domNode.tagName === 'SUP') return 'super';
						return undefined;
					}
				}]);

				return Script;
			}(_inline2.default);

			Script.blotName = 'script';
			Script.tagName = ['SUB', 'SUP'];

			exports.default = Script;

			/***/
		},
		/* 62 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _inline = __webpack_require__(36);

			var _inline2 = _interopRequireDefault(_inline);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Strike = function (_Inline) {
				_inherits(Strike, _Inline);

				function Strike() {
					_classCallCheck(this, Strike);

					return _possibleConstructorReturn(this, (Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(this, arguments));
				}

				return Strike;
			}(_inline2.default);

			Strike.blotName = 'strike';
			Strike.tagName = 'S';

			exports.default = Strike;

			/***/
		},
		/* 63 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _inline = __webpack_require__(36);

			var _inline2 = _interopRequireDefault(_inline);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Underline = function (_Inline) {
				_inherits(Underline, _Inline);

				function Underline() {
					_classCallCheck(this, Underline);

					return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
				}

				return Underline;
			}(_inline2.default);

			Underline.blotName = 'underline';
			Underline.tagName = 'U';

			exports.default = Underline;

			/***/
		},
		/* 64 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _embed = __webpack_require__(35);

			var _embed2 = _interopRequireDefault(_embed);

			var _link = __webpack_require__(60);

			var _link2 = _interopRequireDefault(_link);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Image = function (_Embed) {
				_inherits(Image, _Embed);

				function Image() {
					_classCallCheck(this, Image);

					return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
				}

				_createClass(Image, [{
					key: 'format',
					value: function format(name, value) {
						if (name === 'height' || name === 'width') {
							if (value) {
								this.domNode.setAttribute(name, value);
							} else {
								this.domNode.removeAttribute(name);
							}
						} else {
							_get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'format', this).call(this, name, value);
						}
					}
				}], [{
					key: 'create',
					value: function create(value) {
						var node = _get(Image.__proto__ || Object.getPrototypeOf(Image), 'create', this).call(this, value);
						if (typeof value === 'string') {
							node.setAttribute('src', this.sanitize(value));
						}
						return node;
					}
				}, {
					key: 'formats',
					value: function formats(domNode) {
						var formats = {};
						if (domNode.hasAttribute('height')) formats['height'] = domNode.getAttribute('height');
						if (domNode.hasAttribute('width')) formats['width'] = domNode.getAttribute('width');
						return formats;
					}
				}, {
					key: 'match',
					value: function match(url) {
						return (/\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
						);
					}
				}, {
					key: 'sanitize',
					value: function sanitize(url) {
						return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
					}
				}, {
					key: 'value',
					value: function value(domNode) {
						return domNode.getAttribute('src');
					}
				}]);

				return Image;
			}(_embed2.default);

			Image.blotName = 'image';
			Image.tagName = 'IMG';

			exports.default = Image;

			/***/
		},
		/* 65 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _block = __webpack_require__(33);

			var _link = __webpack_require__(60);

			var _link2 = _interopRequireDefault(_link);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var Video = function (_BlockEmbed) {
				_inherits(Video, _BlockEmbed);

				function Video() {
					_classCallCheck(this, Video);

					return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
				}

				_createClass(Video, [{
					key: 'format',
					value: function format(name, value) {
						if (name === 'height' || name === 'width') {
							if (value) {
								this.domNode.setAttribute(name, value);
							} else {
								this.domNode.removeAttribute(name);
							}
						} else {
							_get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
						}
					}
				}], [{
					key: 'create',
					value: function create(value) {
						var node = _get(Video.__proto__ || Object.getPrototypeOf(Video), 'create', this).call(this, value);
						node.setAttribute('frameborder', '0');
						node.setAttribute('allowfullscreen', true);
						node.setAttribute('src', this.sanitize(value));
						return node;
					}
				}, {
					key: 'formats',
					value: function formats(domNode) {
						var formats = {};
						if (domNode.hasAttribute('height')) formats['height'] = domNode.getAttribute('height');
						if (domNode.hasAttribute('width')) formats['width'] = domNode.getAttribute('width');
						return formats;
					}
				}, {
					key: 'sanitize',
					value: function sanitize(url) {
						return _link2.default.sanitize(url);
					}
				}, {
					key: 'value',
					value: function value(domNode) {
						return domNode.getAttribute('src');
					}
				}]);

				return Video;
			}(_block.BlockEmbed);

			Video.blotName = 'video';
			Video.className = 'ql-video';
			Video.tagName = 'IFRAME';

			exports.default = Video;

			/***/
		},
		/* 66 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = exports.FormulaBlot = undefined;

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _embed = __webpack_require__(35);

			var _embed2 = _interopRequireDefault(_embed);

			var _quill = __webpack_require__(19);

			var _quill2 = _interopRequireDefault(_quill);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var FormulaBlot = function (_Embed) {
				_inherits(FormulaBlot, _Embed);

				function FormulaBlot() {
					_classCallCheck(this, FormulaBlot);

					return _possibleConstructorReturn(this, (FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(this, arguments));
				}

				_createClass(FormulaBlot, [{
					key: 'index',
					value: function index(node, offset) {
						return 1;
					}
				}], [{
					key: 'create',
					value: function create(value) {
						var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot), 'create', this).call(this, value);
						if (typeof value === 'string') {
							katex.render(value, node);
							node.setAttribute('data-value', value);
						}
						node.setAttribute('contenteditable', false);
						return node;
					}
				}, {
					key: 'value',
					value: function value(domNode) {
						return domNode.getAttribute('data-value');
					}
				}]);

				return FormulaBlot;
			}(_embed2.default);

			FormulaBlot.blotName = 'formula';
			FormulaBlot.className = 'ql-formula';
			FormulaBlot.tagName = 'SPAN';

			function Formula() {
				if (window.katex == null) {
					throw new Error('Formula module requires KaTeX.');
				}
				_quill2.default.register(FormulaBlot, true);
			}

			exports.FormulaBlot = FormulaBlot;
			exports.default = Formula;

			/***/
		},
		/* 67 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = exports.CodeToken = exports.CodeBlock = undefined;

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _quill = __webpack_require__(19);

			var _quill2 = _interopRequireDefault(_quill);

			var _module = __webpack_require__(40);

			var _module2 = _interopRequireDefault(_module);

			var _code = __webpack_require__(32);

			var _code2 = _interopRequireDefault(_code);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var SyntaxCodeBlock = function (_CodeBlock) {
				_inherits(SyntaxCodeBlock, _CodeBlock);

				function SyntaxCodeBlock() {
					_classCallCheck(this, SyntaxCodeBlock);

					return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
				}

				_createClass(SyntaxCodeBlock, [{
					key: 'replaceWith',
					value: function replaceWith(block) {
						this.domNode.textContent = this.domNode.textContent;
						this.attach();
						_get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, block);
					}
				}, {
					key: 'highlight',
					value: function highlight(_highlight) {
						if (this.cachedHTML !== this.domNode.innerHTML) {
							var text = this.domNode.textContent;
							if (text.trim().length > 0 || this.cachedHTML == null) {
								this.domNode.innerHTML = _highlight(text);
								this.attach();
							}
							this.cachedHTML = this.domNode.innerHTML;
						}
					}
				}]);

				return SyntaxCodeBlock;
			}(_code2.default);

			SyntaxCodeBlock.className = 'ql-syntax';

			var CodeToken = new _parchment2.default.Attributor.Class('token', 'hljs', {
				scope: _parchment2.default.Scope.INLINE
			});

			var Syntax = function (_Module) {
				_inherits(Syntax, _Module);

				function Syntax(quill, options) {
					_classCallCheck(this, Syntax);

					var _this2 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

					if (typeof _this2.options.highlight !== 'function') {
						throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
					}
					_quill2.default.register(CodeToken, true);
					_quill2.default.register(SyntaxCodeBlock, true);
					var timer = null;
					_this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
						if (timer != null) return;
						timer = setTimeout(function () {
							_this2.highlight();
							timer = null;
						}, 100);
					});
					_this2.highlight();
					return _this2;
				}

				_createClass(Syntax, [{
					key: 'highlight',
					value: function highlight() {
						var _this3 = this;

						if (this.quill.selection.composing) return;
						var range = this.quill.getSelection();
						this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
							code.highlight(_this3.options.highlight);
						});
						this.quill.update(_quill2.default.sources.SILENT);
						if (range != null) {
							this.quill.setSelection(range, _quill2.default.sources.SILENT);
						}
					}
				}]);

				return Syntax;
			}(_module2.default);

			Syntax.DEFAULTS = {
				highlight: function () {
					if (window.hljs == null) return null;
					return function (text) {
						var result = window.hljs.highlightAuto(text);
						return result.value;
					};
				}()
			};

			exports.CodeBlock = SyntaxCodeBlock;
			exports.CodeToken = CodeToken;
			exports.default = Syntax;

			/***/
		},
		/* 68 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.addControls = exports.default = undefined;

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _delta = __webpack_require__(21);

			var _delta2 = _interopRequireDefault(_delta);

			var _parchment = __webpack_require__(3);

			var _parchment2 = _interopRequireDefault(_parchment);

			var _quill = __webpack_require__(19);

			var _quill2 = _interopRequireDefault(_quill);

			var _logger = __webpack_require__(31);

			var _logger2 = _interopRequireDefault(_logger);

			var _module = __webpack_require__(40);

			var _module2 = _interopRequireDefault(_module);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _defineProperty(obj, key, value) {
				if (key in obj) {
					Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
				} else {
					obj[key] = value;
				}return obj;
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var debug = (0, _logger2.default)('quill:toolbar');

			var Toolbar = function (_Module) {
				_inherits(Toolbar, _Module);

				function Toolbar(quill, options) {
					_classCallCheck(this, Toolbar);

					var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, quill, options));

					if (Array.isArray(_this.options.container)) {
						var container = document.createElement('div');
						addControls(container, _this.options.container);
						quill.container.parentNode.insertBefore(container, quill.container);
						_this.container = container;
					} else if (typeof _this.options.container === 'string') {
						_this.container = document.querySelector(_this.options.container);
					} else {
						_this.container = _this.options.container;
					}
					if (!(_this.container instanceof HTMLElement)) {
						var _ret;

						return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
					}
					_this.container.classList.add('ql-toolbar');
					_this.controls = [];
					_this.handlers = {};
					Object.keys(_this.options.handlers).forEach(function (format) {
						_this.addHandler(format, _this.options.handlers[format]);
					});
					_this.container.addEventListener('mousedown', function (e) {
						e.preventDefault(); // Prevent blur
					});
					[].forEach.call(_this.container.querySelectorAll('button, select'), function (input) {
						_this.attach(input);
					});
					_this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (type, range) {
						if (type === _quill2.default.events.SELECTION_CHANGE) {
							_this.update(range);
						}
					});
					_this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
						var _this$quill$selection = _this.quill.selection.getRange();

						var _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1);

						var range = _this$quill$selection2[0]; // quill.getSelection triggers update

						_this.update(range);
					});
					return _this;
				}

				_createClass(Toolbar, [{
					key: 'addHandler',
					value: function addHandler(format, handler) {
						this.handlers[format] = handler;
					}
				}, {
					key: 'attach',
					value: function attach(input) {
						var _this2 = this;

						var format = [].find.call(input.classList, function (className) {
							return className.indexOf('ql-') === 0;
						});
						if (!format) return;
						format = format.slice('ql-'.length);
						if (input.tagName === 'BUTTON') {
							input.setAttribute('type', 'button');
						}
						if (this.handlers[format] == null) {
							if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
								debug.warn('ignoring attaching to disabled format', format, input);
								return;
							}
							if (_parchment2.default.query(format) == null) {
								debug.warn('ignoring attaching to nonexistent format', format, input);
								return;
							}
						}
						var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
						input.addEventListener(eventName, function (e) {
							var value = void 0;
							if (input.tagName === 'SELECT') {
								if (input.selectedIndex < 0) return;
								var selected = input.options[input.selectedIndex];
								if (selected.hasAttribute('selected')) {
									value = false;
								} else {
									value = selected.value || false;
								}
							} else {
								if (input.classList.contains('ql-active')) {
									value = false;
								} else {
									value = input.value || !input.hasAttribute('value');
								}
								e.preventDefault();
							}
							_this2.quill.focus();

							var _quill$selection$getR = _this2.quill.selection.getRange();

							var _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1);

							var range = _quill$selection$getR2[0];

							if (_this2.handlers[format] != null) {
								_this2.handlers[format].call(_this2, value);
							} else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
								value = prompt('Enter ' + format);
								if (!value) return;
								_this2.quill.updateContents(new _delta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
							} else {
								_this2.quill.format(format, value, _quill2.default.sources.USER);
							}
							_this2.update(range);
						});
						// TODO use weakmap
						this.controls.push([format, input]);
					}
				}, {
					key: 'update',
					value: function update(range) {
						var formats = range == null ? {} : this.quill.getFormat(range);
						this.controls.forEach(function (pair) {
							var _pair = _slicedToArray(pair, 2);

							var format = _pair[0];
							var input = _pair[1];

							if (input.tagName === 'SELECT') {
								var option = void 0;
								if (range == null) {
									option = null;
								} else if (formats[format] == null) {
									option = input.querySelector('option[selected]');
								} else if (!Array.isArray(formats[format])) {
									var value = formats[format];
									if (typeof value === 'string') {
										value = value.replace(/\"/g, '\\"');
									}
									option = input.querySelector('option[value="' + value + '"]');
								}
								if (option == null) {
									input.value = ''; // TODO make configurable?
									input.selectedIndex = -1;
								} else {
									option.selected = true;
								}
							} else {
								if (range == null) {
									input.classList.remove('ql-active');
								} else if (input.hasAttribute('value')) {
									// both being null should match (default values)
									// '1' should match with 1 (headers)
									var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
									input.classList.toggle('ql-active', isActive);
								} else {
									input.classList.toggle('ql-active', formats[format] != null);
								}
							}
						});
					}
				}]);

				return Toolbar;
			}(_module2.default);

			Toolbar.DEFAULTS = {};

			function addButton(container, format, value) {
				var input = document.createElement('button');
				input.setAttribute('type', 'button');
				input.classList.add('ql-' + format);
				if (value != null) {
					input.value = value;
				}
				container.appendChild(input);
			}

			function addControls(container, groups) {
				if (!Array.isArray(groups[0])) {
					groups = [groups];
				}
				groups.forEach(function (controls) {
					var group = document.createElement('span');
					group.classList.add('ql-formats');
					controls.forEach(function (control) {
						if (typeof control === 'string') {
							addButton(group, control);
						} else {
							var format = Object.keys(control)[0];
							var value = control[format];
							if (Array.isArray(value)) {
								addSelect(group, format, value);
							} else {
								addButton(group, format, value);
							}
						}
					});
					container.appendChild(group);
				});
			}

			function addSelect(container, format, values) {
				var input = document.createElement('select');
				input.classList.add('ql-' + format);
				values.forEach(function (value) {
					var option = document.createElement('option');
					if (value !== false) {
						option.setAttribute('value', value);
					} else {
						option.setAttribute('selected', 'selected');
					}
					input.appendChild(option);
				});
				container.appendChild(input);
			}

			Toolbar.DEFAULTS = {
				container: null,
				handlers: {
					clean: function clean(value) {
						var _this3 = this;

						var range = this.quill.getSelection();
						if (range == null) return;
						if (range.length == 0) {
							var formats = this.quill.getFormat();
							Object.keys(formats).forEach(function (name) {
								// Clean functionality in existing apps only clean inline formats
								if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
									_this3.quill.format(name, false);
								}
							});
						} else {
							this.quill.removeFormat(range, _quill2.default.sources.USER);
						}
					},
					direction: function direction(value) {
						var align = this.quill.getFormat()['align'];
						if (value === 'rtl' && align == null) {
							this.quill.format('align', 'right', _quill2.default.sources.USER);
						} else if (!value && align === 'right') {
							this.quill.format('align', false, _quill2.default.sources.USER);
						}
						this.quill.format('direction', value, _quill2.default.sources.USER);
					},
					link: function link(value) {
						if (value === true) {
							value = prompt('Enter link URL:');
						}
						this.quill.format('link', value, _quill2.default.sources.USER);
					},
					indent: function indent(value) {
						var range = this.quill.getSelection();
						var formats = this.quill.getFormat(range);
						var indent = parseInt(formats.indent || 0);
						if (value === '+1' || value === '-1') {
							var modifier = value === '+1' ? 1 : -1;
							if (formats.direction === 'rtl') modifier *= -1;
							this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);
						}
					}
				}
			};

			exports.default = Toolbar;
			exports.addControls = addControls;

			/***/
		},
		/* 69 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			module.exports = {
				'align': {
					'': __webpack_require__(70),
					'center': __webpack_require__(71),
					'right': __webpack_require__(72),
					'justify': __webpack_require__(73)
				},
				'background': __webpack_require__(74),
				'blockquote': __webpack_require__(75),
				'bold': __webpack_require__(76),
				'clean': __webpack_require__(77),
				'code-block': __webpack_require__(78),
				'color': __webpack_require__(79),
				'direction': {
					'': __webpack_require__(80),
					'rtl': __webpack_require__(81)
				},
				'float': {
					'center': __webpack_require__(82),
					'full': __webpack_require__(83),
					'left': __webpack_require__(84),
					'right': __webpack_require__(85)
				},
				'formula': __webpack_require__(86),
				'header': {
					'1': __webpack_require__(87),
					'2': __webpack_require__(88)
				},
				'italic': __webpack_require__(89),
				'image': __webpack_require__(90),
				'indent': {
					'+1': __webpack_require__(91),
					'-1': __webpack_require__(92)
				},
				'link': __webpack_require__(93),
				'list': {
					'ordered': __webpack_require__(94),
					'bullet': __webpack_require__(95)
				},
				'script': {
					'sub': __webpack_require__(96),
					'super': __webpack_require__(97)
				},
				'strike': __webpack_require__(98),
				'underline': __webpack_require__(99),
				'video': __webpack_require__(100)
			};

			/***/
		},
		/* 70 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

			/***/
		},
		/* 71 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

			/***/
		},
		/* 72 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

			/***/
		},
		/* 73 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

			/***/
		},
		/* 74 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

			/***/
		},
		/* 75 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

			/***/
		},
		/* 76 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

			/***/
		},
		/* 77 */
		/***/function (module, exports) {

			module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";

			/***/
		},
		/* 78 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";

			/***/
		},
		/* 79 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

			/***/
		},
		/* 80 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";

			/***/
		},
		/* 81 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";

			/***/
		},
		/* 82 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";

			/***/
		},
		/* 83 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";

			/***/
		},
		/* 84 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";

			/***/
		},
		/* 85 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";

			/***/
		},
		/* 86 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";

			/***/
		},
		/* 87 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <line class=\"ql-stroke ql-thin\" x1=13.5 x2=15.5 y1=14.5 y2=14.5></line> <path class=ql-fill d=M14.5,15a0.5,0.5,0,0,1-.5-0.5V12.085l-0.276.138A0.5,0.5,0,0,1,13.053,12c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,15,11.5v3A0.5,0.5,0,0,1,14.5,15Z></path> </svg>";

			/***/
		},
		/* 88 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <path class=\"ql-stroke ql-thin\" d=M15.5,14.5h-2c0-.234,1.85-1.076,1.85-2.234a0.959,0.959,0,0,0-1.85-.109></path> </svg>";

			/***/
		},
		/* 89 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

			/***/
		},
		/* 90 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

			/***/
		},
		/* 91 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";

			/***/
		},
		/* 92 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";

			/***/
		},
		/* 93 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

			/***/
		},
		/* 94 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

			/***/
		},
		/* 95 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

			/***/
		},
		/* 96 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";

			/***/
		},
		/* 97 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";

			/***/
		},
		/* 98 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

			/***/
		},
		/* 99 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

			/***/
		},
		/* 100 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";

			/***/
		},
		/* 101 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _dropdown = __webpack_require__(102);

			var _dropdown2 = _interopRequireDefault(_dropdown);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var Picker = function () {
				function Picker(select) {
					var _this = this;

					_classCallCheck(this, Picker);

					this.select = select;
					this.container = document.createElement('span');
					this.buildPicker();
					this.select.style.display = 'none';
					this.select.parentNode.insertBefore(this.container, this.select);
					this.label.addEventListener('click', function (event) {
						_this.container.classList.toggle('ql-expanded');
					});
					this.select.addEventListener('change', this.update.bind(this));
				}

				_createClass(Picker, [{
					key: 'buildItem',
					value: function buildItem(option) {
						var _this2 = this;

						var item = document.createElement('span');
						item.classList.add('ql-picker-item');
						if (option.hasAttribute('value')) {
							item.setAttribute('data-value', option.getAttribute('value'));
						}
						if (option.textContent) {
							item.setAttribute('data-label', option.textContent);
						}
						item.addEventListener('click', function (event) {
							_this2.selectItem(item, true);
						});
						return item;
					}
				}, {
					key: 'buildLabel',
					value: function buildLabel() {
						var label = document.createElement('span');
						label.classList.add('ql-picker-label');
						label.innerHTML = _dropdown2.default;
						this.container.appendChild(label);
						return label;
					}
				}, {
					key: 'buildOptions',
					value: function buildOptions() {
						var _this3 = this;

						var options = document.createElement('span');
						options.classList.add('ql-picker-options');
						[].slice.call(this.select.options).forEach(function (option) {
							var item = _this3.buildItem(option);
							options.appendChild(item);
							if (option.hasAttribute('selected')) {
								_this3.selectItem(item);
							}
						});
						this.container.appendChild(options);
					}
				}, {
					key: 'buildPicker',
					value: function buildPicker() {
						var _this4 = this;

						[].slice.call(this.select.attributes).forEach(function (item) {
							_this4.container.setAttribute(item.name, item.value);
						});
						this.container.classList.add('ql-picker');
						this.label = this.buildLabel();
						this.buildOptions();
					}
				}, {
					key: 'close',
					value: function close() {
						this.container.classList.remove('ql-expanded');
					}
				}, {
					key: 'selectItem',
					value: function selectItem(item) {
						var trigger = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

						var selected = this.container.querySelector('.ql-selected');
						if (item === selected) return;
						if (selected != null) {
							selected.classList.remove('ql-selected');
						}
						if (item != null) {
							item.classList.add('ql-selected');
							this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
							if (item.hasAttribute('data-value')) {
								this.label.setAttribute('data-value', item.getAttribute('data-value'));
							} else {
								this.label.removeAttribute('data-value');
							}
							if (item.hasAttribute('data-label')) {
								this.label.setAttribute('data-label', item.getAttribute('data-label'));
							} else {
								this.label.removeAttribute('data-label');
							}
							if (trigger) {
								if (typeof Event === 'function') {
									this.select.dispatchEvent(new Event('change'));
								} else if ((typeof Event === 'undefined' ? 'undefined' : _typeof(Event)) === 'object') {
									// IE11
									var event = document.createEvent('Event');
									event.initEvent('change', true, true);
									this.select.dispatchEvent(event);
								}
								this.close();
							}
						} else {
							this.label.removeAttribute('data-value');
							this.label.removeAttribute('data-label');
						}
					}
				}, {
					key: 'update',
					value: function update() {
						var option = void 0;
						if (this.select.selectedIndex > -1) {
							var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
							option = this.select.options[this.select.selectedIndex];
							this.selectItem(item);
						} else {
							this.selectItem(null);
						}
						var isActive = option != null && option !== this.select.querySelector('option[selected]');
						this.label.classList.toggle('ql-active', isActive);
					}
				}]);

				return Picker;
			}();

			exports.default = Picker;

			/***/
		},
		/* 102 */
		/***/function (module, exports) {

			module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

			/***/
		},
		/* 103 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _picker = __webpack_require__(101);

			var _picker2 = _interopRequireDefault(_picker);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var ColorPicker = function (_Picker) {
				_inherits(ColorPicker, _Picker);

				function ColorPicker(select, label) {
					_classCallCheck(this, ColorPicker);

					var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

					_this.label.innerHTML = label;
					_this.container.classList.add('ql-color-picker');
					[].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
						item.classList.add('ql-primary');
					});
					return _this;
				}

				_createClass(ColorPicker, [{
					key: 'buildItem',
					value: function buildItem(option) {
						var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
						item.style.backgroundColor = option.getAttribute('value') || '';
						return item;
					}
				}, {
					key: 'selectItem',
					value: function selectItem(item, trigger) {
						_get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
						var colorLabel = this.label.querySelector('.ql-color-label');
						var value = item ? item.getAttribute('data-value') || '' : '';
						if (colorLabel) {
							if (colorLabel.tagName === 'line') {
								colorLabel.style.stroke = value;
							} else {
								colorLabel.style.fill = value;
							}
						}
					}
				}]);

				return ColorPicker;
			}(_picker2.default);

			exports.default = ColorPicker;

			/***/
		},
		/* 104 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _picker = __webpack_require__(101);

			var _picker2 = _interopRequireDefault(_picker);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var IconPicker = function (_Picker) {
				_inherits(IconPicker, _Picker);

				function IconPicker(select, icons) {
					_classCallCheck(this, IconPicker);

					var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

					_this.container.classList.add('ql-icon-picker');
					[].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
						item.innerHTML = icons[item.getAttribute('data-value') || ''];
					});
					_this.defaultItem = _this.container.querySelector('.ql-selected');
					_this.selectItem(_this.defaultItem);
					return _this;
				}

				_createClass(IconPicker, [{
					key: 'selectItem',
					value: function selectItem(item, trigger) {
						_get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);
						item = item || this.defaultItem;
						this.label.innerHTML = item.innerHTML;
					}
				}]);

				return IconPicker;
			}(_picker2.default);

			exports.default = IconPicker;

			/***/
		},
		/* 105 */
		/***/function (module, exports) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var Tooltip = function () {
				function Tooltip(quill, boundsContainer) {
					var _this = this;

					_classCallCheck(this, Tooltip);

					this.quill = quill;
					this.boundsContainer = boundsContainer;
					this.root = quill.addContainer('ql-tooltip');
					this.root.innerHTML = this.constructor.TEMPLATE;
					var offset = parseInt(window.getComputedStyle(this.root).marginTop);
					this.quill.root.addEventListener('scroll', function () {
						_this.root.style.marginTop = -1 * _this.quill.root.scrollTop + offset + 'px';
						_this.checkBounds();
					});
					this.hide();
				}

				_createClass(Tooltip, [{
					key: 'checkBounds',
					value: function checkBounds() {
						this.root.classList.toggle('ql-out-top', this.root.offsetTop <= 0);
						this.root.classList.remove('ql-out-bottom');
						this.root.classList.toggle('ql-out-bottom', this.root.offsetTop + this.root.offsetHeight >= this.quill.root.offsetHeight);
					}
				}, {
					key: 'hide',
					value: function hide() {
						this.root.classList.add('ql-hidden');
					}
				}, {
					key: 'position',
					value: function position(reference) {
						var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
						var top = reference.bottom + this.quill.root.scrollTop;
						this.root.style.left = left + 'px';
						this.root.style.top = top + 'px';
						var containerBounds = this.boundsContainer.getBoundingClientRect();
						var rootBounds = this.root.getBoundingClientRect();
						var shift = 0;
						if (rootBounds.right > containerBounds.right) {
							shift = containerBounds.right - rootBounds.right;
							this.root.style.left = left + shift + 'px';
						}
						if (rootBounds.left < containerBounds.left) {
							shift = containerBounds.left - rootBounds.left;
							this.root.style.left = left + shift + 'px';
						}
						this.checkBounds();
						return shift;
					}
				}, {
					key: 'show',
					value: function show() {
						this.root.classList.remove('ql-editing');
						this.root.classList.remove('ql-hidden');
					}
				}]);

				return Tooltip;
			}();

			exports.default = Tooltip;

			/***/
		},
		/* 106 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _emitter = __webpack_require__(29);

			var _emitter2 = _interopRequireDefault(_emitter);

			var _keyboard = __webpack_require__(53);

			var _keyboard2 = _interopRequireDefault(_keyboard);

			var _base = __webpack_require__(107);

			var _base2 = _interopRequireDefault(_base);

			var _icons = __webpack_require__(69);

			var _icons2 = _interopRequireDefault(_icons);

			var _selection = __webpack_require__(41);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']];

			var BubbleTheme = function (_BaseTheme) {
				_inherits(BubbleTheme, _BaseTheme);

				function BubbleTheme(quill, options) {
					_classCallCheck(this, BubbleTheme);

					if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
						options.modules.toolbar.container = TOOLBAR_CONFIG;
					}

					var _this = _possibleConstructorReturn(this, (BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(this, quill, options));

					_this.quill.container.classList.add('ql-bubble');
					return _this;
				}

				_createClass(BubbleTheme, [{
					key: 'extendToolbar',
					value: function extendToolbar(toolbar) {
						this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
						this.tooltip.root.appendChild(toolbar.container);
						this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')));
						this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')));
					}
				}]);

				return BubbleTheme;
			}(_base2.default);

			BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base.BaseTooltip.DEFAULTS, {
				modules: {
					toolbar: {
						handlers: {
							link: function link(value) {
								if (!value) {
									this.quill.format('link', false);
								} else {
									this.quill.theme.tooltip.edit();
								}
							}
						}
					}
				}
			});

			var BubbleTooltip = function (_BaseTooltip) {
				_inherits(BubbleTooltip, _BaseTooltip);

				function BubbleTooltip(quill, bounds) {
					_classCallCheck(this, BubbleTooltip);

					var _this2 = _possibleConstructorReturn(this, (BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(this, quill, bounds));

					_this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function (type, range) {
						if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
						if (range != null && range.length > 0) {
							_this2.show();
							// Lock our width so we will expand beyond our offsetParent boundaries
							_this2.root.style.left = '0px';
							_this2.root.style.width = '';
							_this2.root.style.width = _this2.root.offsetWidth + 'px';
							var lines = _this2.quill.scroll.lines(range.index, range.length);
							if (lines.length === 1) {
								_this2.position(_this2.quill.getBounds(range));
							} else {
								var lastLine = lines[lines.length - 1];
								var index = lastLine.offset(_this2.quill.scroll);
								var length = Math.min(lastLine.length() - 1, range.index + range.length - index);
								var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));
								_this2.position(_bounds);
							}
						} else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
							_this2.hide();
						}
					});
					return _this2;
				}

				_createClass(BubbleTooltip, [{
					key: 'listen',
					value: function listen() {
						var _this3 = this;

						_get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'listen', this).call(this);
						this.root.querySelector('.ql-close').addEventListener('click', function (event) {
							_this3.root.classList.remove('ql-editing');
						});
						this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
							// Let selection be restored by toolbar handlers before repositioning
							setTimeout(function () {
								if (_this3.root.classList.contains('ql-hidden')) return;
								var range = _this3.quill.getSelection();
								if (range != null) {
									_this3.position(_this3.quill.getBounds(range));
								}
							}, 1);
						});
					}
				}, {
					key: 'cancel',
					value: function cancel() {
						this.show();
					}
				}, {
					key: 'position',
					value: function position(reference) {
						var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'position', this).call(this, reference);
						if (shift === 0) return shift;
						var arrow = this.root.querySelector('.ql-tooltip-arrow');
						arrow.style.marginLeft = '';
						arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
					}
				}]);

				return BubbleTooltip;
			}(_base.BaseTooltip);

			BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');

			exports.default = BubbleTheme;

			/***/
		},
		/* 107 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = exports.BaseTooltip = undefined;

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _delta = __webpack_require__(21);

			var _delta2 = _interopRequireDefault(_delta);

			var _emitter = __webpack_require__(29);

			var _emitter2 = _interopRequireDefault(_emitter);

			var _keyboard = __webpack_require__(53);

			var _keyboard2 = _interopRequireDefault(_keyboard);

			var _theme = __webpack_require__(42);

			var _theme2 = _interopRequireDefault(_theme);

			var _colorPicker = __webpack_require__(103);

			var _colorPicker2 = _interopRequireDefault(_colorPicker);

			var _iconPicker = __webpack_require__(104);

			var _iconPicker2 = _interopRequireDefault(_iconPicker);

			var _picker = __webpack_require__(101);

			var _picker2 = _interopRequireDefault(_picker);

			var _tooltip = __webpack_require__(105);

			var _tooltip2 = _interopRequireDefault(_tooltip);

			var _icons = __webpack_require__(69);

			var _icons2 = _interopRequireDefault(_icons);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var ALIGNS = [false, 'center', 'right', 'justify'];

			var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];

			var FONTS = [false, 'serif', 'monospace'];

			var HEADERS = ['1', '2', '3', false];

			var SIZES = ['small', false, 'large', 'huge'];

			var BaseTheme = function (_Theme) {
				_inherits(BaseTheme, _Theme);

				function BaseTheme(quill, options) {
					_classCallCheck(this, BaseTheme);

					var _this = _possibleConstructorReturn(this, (BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(this, quill, options));

					var listener = function listener(e) {
						if (!document.body.contains(quill.root)) {
							return document.body.removeEventListener('click', listener);
						}
						if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
							_this.tooltip.hide();
						}
						if (_this.pickers != null) {
							_this.pickers.forEach(function (picker) {
								if (!picker.container.contains(e.target)) {
									picker.close();
								}
							});
						}
					};
					document.body.addEventListener('click', listener);
					return _this;
				}

				_createClass(BaseTheme, [{
					key: 'addModule',
					value: function addModule(name) {
						var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);
						if (name === 'toolbar') {
							this.extendToolbar(module);
						}
						return module;
					}
				}, {
					key: 'buildButtons',
					value: function buildButtons(buttons) {
						buttons.forEach(function (button) {
							var className = button.getAttribute('class') || '';
							className.split(/\s+/).forEach(function (name) {
								if (!name.startsWith('ql-')) return;
								name = name.slice('ql-'.length);
								if (_icons2.default[name] == null) return;
								if (name === 'direction') {
									button.innerHTML = _icons2.default[name][''] + _icons2.default[name]['rtl'];
								} else if (typeof _icons2.default[name] === 'string') {
									button.innerHTML = _icons2.default[name];
								} else {
									var value = button.value || '';
									if (value != null && _icons2.default[name][value]) {
										button.innerHTML = _icons2.default[name][value];
									}
								}
							});
						});
					}
				}, {
					key: 'buildPickers',
					value: function buildPickers(selects) {
						var _this2 = this;

						this.pickers = selects.map(function (select) {
							if (select.classList.contains('ql-align')) {
								if (select.querySelector('option') == null) {
									fillSelect(select, ALIGNS);
								}
								return new _iconPicker2.default(select, _icons2.default.align);
							} else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
								var format = select.classList.contains('ql-background') ? 'background' : 'color';
								if (select.querySelector('option') == null) {
									fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
								}
								return new _colorPicker2.default(select, _icons2.default[format]);
							} else {
								if (select.querySelector('option') == null) {
									if (select.classList.contains('ql-font')) {
										fillSelect(select, FONTS);
									} else if (select.classList.contains('ql-header')) {
										fillSelect(select, HEADERS);
									} else if (select.classList.contains('ql-size')) {
										fillSelect(select, SIZES);
									}
								}
								return new _picker2.default(select);
							}
						});
						var update = function update() {
							_this2.pickers.forEach(function (picker) {
								picker.update();
							});
						};
						this.quill.on(_emitter2.default.events.SELECTION_CHANGE, update).on(_emitter2.default.events.SCROLL_OPTIMIZE, update);
					}
				}]);

				return BaseTheme;
			}(_theme2.default);

			BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
				modules: {
					toolbar: {
						handlers: {
							formula: function formula(value) {
								this.quill.theme.tooltip.edit('formula');
							},
							image: function image(value) {
								var _this3 = this;

								var fileInput = this.container.querySelector('input.ql-image[type=file]');
								if (fileInput == null) {
									fileInput = document.createElement('input');
									fileInput.setAttribute('type', 'file');
									fileInput.setAttribute('accept', 'image/*');
									fileInput.classList.add('ql-image');
									fileInput.addEventListener('change', function () {
										if (fileInput.files != null && fileInput.files[0] != null) {
											var reader = new FileReader();
											reader.onload = function (e) {
												var range = _this3.quill.getSelection(true);
												_this3.quill.updateContents(new _delta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
												fileInput.value = "";
											};
											reader.readAsDataURL(fileInput.files[0]);
										}
									});
									this.container.appendChild(fileInput);
								}
								fileInput.click();
							},
							video: function video(value) {
								this.quill.theme.tooltip.edit('video');
							}
						}
					}
				}
			});

			var BaseTooltip = function (_Tooltip) {
				_inherits(BaseTooltip, _Tooltip);

				function BaseTooltip(quill, boundsContainer) {
					_classCallCheck(this, BaseTooltip);

					var _this4 = _possibleConstructorReturn(this, (BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(this, quill, boundsContainer));

					_this4.textbox = _this4.root.querySelector('input[type="text"]');
					_this4.listen();
					return _this4;
				}

				_createClass(BaseTooltip, [{
					key: 'listen',
					value: function listen() {
						var _this5 = this;

						this.textbox.addEventListener('keydown', function (event) {
							if (_keyboard2.default.match(event, 'enter')) {
								_this5.save();
								event.preventDefault();
							} else if (_keyboard2.default.match(event, 'escape')) {
								_this5.cancel();
								event.preventDefault();
							}
						});
					}
				}, {
					key: 'cancel',
					value: function cancel() {
						this.hide();
					}
				}, {
					key: 'edit',
					value: function edit() {
						var mode = arguments.length <= 0 || arguments[0] === undefined ? 'link' : arguments[0];
						var preview = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

						this.root.classList.remove('ql-hidden');
						this.root.classList.add('ql-editing');
						if (preview != null) {
							this.textbox.value = preview;
						} else if (mode !== this.root.getAttribute('data-mode')) {
							this.textbox.value = '';
						}
						this.position(this.quill.getBounds(this.quill.selection.savedRange));
						this.textbox.select();
						this.textbox.setAttribute('placeholder', this.textbox.getAttribute('data-' + mode) || '');
						this.root.setAttribute('data-mode', mode);
					}
				}, {
					key: 'restoreFocus',
					value: function restoreFocus() {
						var scrollTop = this.quill.root.scrollTop;
						this.quill.focus();
						this.quill.root.scrollTop = scrollTop;
					}
				}, {
					key: 'save',
					value: function save() {
						var value = this.textbox.value;
						switch (this.root.getAttribute('data-mode')) {
							case 'link':
								var scrollTop = this.quill.root.scrollTop;
								if (this.linkRange) {
									this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);
									delete this.linkRange;
								} else {
									this.restoreFocus();
									this.quill.format('link', value, _emitter2.default.sources.USER);
								}
								this.quill.root.scrollTop = scrollTop;
								break;
							case 'video':
								var match = value.match(/^(https?):\/\/(www\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || value.match(/^(https?):\/\/(www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
								if (match) {
									value = match[1] + '://www.youtube.com/embed/' + match[3] + '?showinfo=0';
								} else if (match = value.match(/^(https?):\/\/(www\.)?vimeo\.com\/(\d+)/)) {
									value = match[1] + '://player.vimeo.com/video/' + match[3] + '/';
								}
							// fallthrough
							case 'formula':
								var range = this.quill.getSelection(true);
								var index = range.index + range.length;
								if (range != null) {
									this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);
									if (this.root.getAttribute('data-mode') === 'formula') {
										this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);
									}
									this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
								}
								break;
							default:
						}
						this.textbox.value = '';
						this.hide();
					}
				}]);

				return BaseTooltip;
			}(_tooltip2.default);

			function fillSelect(select, values) {
				var defaultValue = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

				values.forEach(function (value) {
					var option = document.createElement('option');
					if (value === defaultValue) {
						option.setAttribute('selected', 'selected');
					} else {
						option.setAttribute('value', value);
					}
					select.appendChild(option);
				});
			}

			exports.BaseTooltip = BaseTooltip;
			exports.default = BaseTheme;

			/***/
		},
		/* 108 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();

			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			var _extend = __webpack_require__(26);

			var _extend2 = _interopRequireDefault(_extend);

			var _emitter = __webpack_require__(29);

			var _emitter2 = _interopRequireDefault(_emitter);

			var _base = __webpack_require__(107);

			var _base2 = _interopRequireDefault(_base);

			var _link = __webpack_require__(60);

			var _link2 = _interopRequireDefault(_link);

			var _picker = __webpack_require__(101);

			var _picker2 = _interopRequireDefault(_picker);

			var _selection = __webpack_require__(41);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var TOOLBAR_CONFIG = [[{ header: ['1', '2', '3', false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']];

			var SnowTheme = function (_BaseTheme) {
				_inherits(SnowTheme, _BaseTheme);

				function SnowTheme(quill, options) {
					_classCallCheck(this, SnowTheme);

					if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
						options.modules.toolbar.container = TOOLBAR_CONFIG;
					}

					var _this = _possibleConstructorReturn(this, (SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(this, quill, options));

					_this.quill.container.classList.add('ql-snow');
					return _this;
				}

				_createClass(SnowTheme, [{
					key: 'extendToolbar',
					value: function extendToolbar(toolbar) {
						toolbar.container.classList.add('ql-snow');
						this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')));
						this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')));
						this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
						if (toolbar.container.querySelector('.ql-link')) {
							this.quill.keyboard.addBinding({ key: 'K', shortKey: true }, function (range, context) {
								toolbar.handlers['link'].call(toolbar, !context.format.link);
							});
						}
					}
				}]);

				return SnowTheme;
			}(_base2.default);

			SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
				modules: {
					toolbar: {
						handlers: {
							link: function link(value) {
								if (value) {
									var range = this.quill.getSelection();
									if (range == null || range.length == 0) return;
									var preview = this.quill.getText(range);
									if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
										preview = 'mailto:' + preview;
									}
									var tooltip = this.quill.theme.tooltip;
									tooltip.edit('link', preview);
								} else {
									this.quill.format('link', false);
								}
							}
						}
					}
				}
			});

			var SnowTooltip = function (_BaseTooltip) {
				_inherits(SnowTooltip, _BaseTooltip);

				function SnowTooltip(quill, bounds) {
					_classCallCheck(this, SnowTooltip);

					var _this2 = _possibleConstructorReturn(this, (SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(this, quill, bounds));

					_this2.preview = _this2.root.querySelector('a.ql-preview');
					return _this2;
				}

				_createClass(SnowTooltip, [{
					key: 'listen',
					value: function listen() {
						var _this3 = this;

						_get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'listen', this).call(this);
						this.root.querySelector('a.ql-action').addEventListener('click', function (event) {
							if (_this3.root.classList.contains('ql-editing')) {
								_this3.save();
							} else {
								_this3.edit('link', _this3.preview.textContent);
							}
							event.preventDefault();
						});
						this.root.querySelector('a.ql-remove').addEventListener('click', function (event) {
							if (_this3.linkRange != null) {
								_this3.restoreFocus();
								_this3.quill.formatText(_this3.linkRange, 'link', false, _emitter2.default.sources.USER);
								delete _this3.linkRange;
							}
							event.preventDefault();
							_this3.hide();
						});
						this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range) {
							if (range == null) return;
							if (range.length === 0) {
								var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index);

								var _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2);

								var link = _quill$scroll$descend2[0];
								var offset = _quill$scroll$descend2[1];

								if (link != null) {
									_this3.linkRange = new _selection.Range(range.index - offset, link.length());
									var preview = _link2.default.formats(link.domNode);
									_this3.preview.textContent = preview;
									_this3.preview.setAttribute('href', preview);
									_this3.show();
									_this3.position(_this3.quill.getBounds(_this3.linkRange));
									return;
								}
							}
							_this3.hide();
						});
					}
				}, {
					key: 'show',
					value: function show() {
						_get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'show', this).call(this);
						this.root.removeAttribute('data-mode');
					}
				}]);

				return SnowTooltip;
			}(_base.BaseTooltip);

			SnowTooltip.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');

			exports.default = SnowTheme;

			/***/
		}
		/******/])
	);
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36).Buffer, __webpack_require__(40)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(37)
var ieee754 = __webpack_require__(38)
var isArray = __webpack_require__(39)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(44)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./quill.snow.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./quill.snow.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Quill Editor v1.0.0\r\n * https://quilljs.com/\r\n * Copyright (c) 2014, Jason Chen\r\n * Copyright (c) 2013, salesforce.com\r\n */\r\n.ql-container {\r\n    box-sizing: border-box;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n    font-size: 13px;\r\n    height: 100%;\r\n    margin: 0px;\r\n    position: relative;\r\n  }\r\n  .ql-clipboard {\r\n    left: -100000px;\r\n    height: 1px;\r\n    overflow-y: hidden;\r\n    position: absolute;\r\n    top: 50%;\r\n  }\r\n  .ql-clipboard p {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  .ql-editor {\r\n    box-sizing: border-box;\r\n    cursor: text;\r\n    line-height: 1.42;\r\n    height: 100%;\r\n    outline: none;\r\n    overflow-y: auto;\r\n    padding: 12px 15px;\r\n    tab-size: 4;\r\n    -moz-tab-size: 4;\r\n    text-align: left;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n  }\r\n  .ql-editor p,\r\n  .ql-editor ol,\r\n  .ql-editor ul,\r\n  .ql-editor pre,\r\n  .ql-editor blockquote,\r\n  .ql-editor h1,\r\n  .ql-editor h2,\r\n  .ql-editor h3,\r\n  .ql-editor h4,\r\n  .ql-editor h5,\r\n  .ql-editor h6 {\r\n    margin: 0;\r\n    padding: 0;\r\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n  }\r\n  .ql-editor ol,\r\n  .ql-editor ul {\r\n    padding-left: 1.5em;\r\n  }\r\n  .ql-editor ol > li,\r\n  .ql-editor ul > li {\r\n    list-style-type: none;\r\n  }\r\n  .ql-editor ul > li::before {\r\n    content: '\\25CF';\r\n  }\r\n  .ql-editor li::before {\r\n    display: inline-block;\r\n    margin-right: 0.3em;\r\n    text-align: right;\r\n    white-space: nowrap;\r\n    width: 1.2em;\r\n  }\r\n  .ql-editor li:not(.ql-direction-rtl)::before {\r\n    margin-left: -1.5em;\r\n  }\r\n  .ql-editor ol li,\r\n  .ql-editor ul li {\r\n    padding-left: 1.5em;\r\n  }\r\n  .ql-editor ol li {\r\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n    counter-increment: list-num;\r\n  }\r\n  .ql-editor ol li:before {\r\n    content: counter(list-num, decimal) '. ';\r\n  }\r\n  .ql-editor ol li.ql-indent-1 {\r\n    counter-increment: list-1;\r\n  }\r\n  .ql-editor ol li.ql-indent-1:before {\r\n    content: counter(list-1, lower-alpha) '. ';\r\n  }\r\n  .ql-editor ol li.ql-indent-1 {\r\n    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n  }\r\n  .ql-editor ol li.ql-indent-2 {\r\n    counter-increment: list-2;\r\n  }\r\n  .ql-editor ol li.ql-indent-2:before {\r\n    content: counter(list-2, lower-roman) '. ';\r\n  }\r\n  .ql-editor ol li.ql-indent-2 {\r\n    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n  }\r\n  .ql-editor ol li.ql-indent-3 {\r\n    counter-increment: list-3;\r\n  }\r\n  .ql-editor ol li.ql-indent-3:before {\r\n    content: counter(list-3, decimal) '. ';\r\n  }\r\n  .ql-editor ol li.ql-indent-3 {\r\n    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\r\n  }\r\n  .ql-editor ol li.ql-indent-4 {\r\n    counter-increment: list-4;\r\n  }\r\n  .ql-editor ol li.ql-indent-4:before {\r\n    content: counter(list-4, lower-alpha) '. ';\r\n  }\r\n  .ql-editor ol li.ql-indent-4 {\r\n    counter-reset: list-5 list-6 list-7 list-8 list-9;\r\n  }\r\n  .ql-editor ol li.ql-indent-5 {\r\n    counter-increment: list-5;\r\n  }\r\n  .ql-editor ol li.ql-indent-5:before {\r\n    content: counter(list-5, lower-roman) '. ';\r\n  }\r\n  .ql-editor ol li.ql-indent-5 {\r\n    counter-reset: list-6 list-7 list-8 list-9;\r\n  }\r\n  .ql-editor ol li.ql-indent-6 {\r\n    counter-increment: list-6;\r\n  }\r\n  .ql-editor ol li.ql-indent-6:before {\r\n    content: counter(list-6, decimal) '. ';\r\n  }\r\n  .ql-editor ol li.ql-indent-6 {\r\n    counter-reset: list-7 list-8 list-9;\r\n  }\r\n  .ql-editor ol li.ql-indent-7 {\r\n    counter-increment: list-7;\r\n  }\r\n  .ql-editor ol li.ql-indent-7:before {\r\n    content: counter(list-7, lower-alpha) '. ';\r\n  }\r\n  .ql-editor ol li.ql-indent-7 {\r\n    counter-reset: list-8 list-9;\r\n  }\r\n  .ql-editor ol li.ql-indent-8 {\r\n    counter-increment: list-8;\r\n  }\r\n  .ql-editor ol li.ql-indent-8:before {\r\n    content: counter(list-8, lower-roman) '. ';\r\n  }\r\n  .ql-editor ol li.ql-indent-8 {\r\n    counter-reset: list-9;\r\n  }\r\n  .ql-editor ol li.ql-indent-9 {\r\n    counter-increment: list-9;\r\n  }\r\n  .ql-editor ol li.ql-indent-9:before {\r\n    content: counter(list-9, decimal) '. ';\r\n  }\r\n  .ql-editor .ql-indent-1:not(.ql-direction-rtl) {\r\n    padding-left: 3em;\r\n  }\r\n  .ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\r\n    padding-left: 4.5em;\r\n  }\r\n  .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\r\n    padding-right: 3em;\r\n  }\r\n  .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\r\n    padding-right: 4.5em;\r\n  }\r\n  .ql-editor .ql-indent-2:not(.ql-direction-rtl) {\r\n    padding-left: 6em;\r\n  }\r\n  .ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\r\n    padding-left: 7.5em;\r\n  }\r\n  .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\r\n    padding-right: 6em;\r\n  }\r\n  .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\r\n    padding-right: 7.5em;\r\n  }\r\n  .ql-editor .ql-indent-3:not(.ql-direction-rtl) {\r\n    padding-left: 9em;\r\n  }\r\n  .ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\r\n    padding-left: 10.5em;\r\n  }\r\n  .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\r\n    padding-right: 9em;\r\n  }\r\n  .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\r\n    padding-right: 10.5em;\r\n  }\r\n  .ql-editor .ql-indent-4:not(.ql-direction-rtl) {\r\n    padding-left: 12em;\r\n  }\r\n  .ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\r\n    padding-left: 13.5em;\r\n  }\r\n  .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\r\n    padding-right: 12em;\r\n  }\r\n  .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\r\n    padding-right: 13.5em;\r\n  }\r\n  .ql-editor .ql-indent-5:not(.ql-direction-rtl) {\r\n    padding-left: 15em;\r\n  }\r\n  .ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\r\n    padding-left: 16.5em;\r\n  }\r\n  .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\r\n    padding-right: 15em;\r\n  }\r\n  .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\r\n    padding-right: 16.5em;\r\n  }\r\n  .ql-editor .ql-indent-6:not(.ql-direction-rtl) {\r\n    padding-left: 18em;\r\n  }\r\n  .ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\r\n    padding-left: 19.5em;\r\n  }\r\n  .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\r\n    padding-right: 18em;\r\n  }\r\n  .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\r\n    padding-right: 19.5em;\r\n  }\r\n  .ql-editor .ql-indent-7:not(.ql-direction-rtl) {\r\n    padding-left: 21em;\r\n  }\r\n  .ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\r\n    padding-left: 22.5em;\r\n  }\r\n  .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\r\n    padding-right: 21em;\r\n  }\r\n  .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\r\n    padding-right: 22.5em;\r\n  }\r\n  .ql-editor .ql-indent-8:not(.ql-direction-rtl) {\r\n    padding-left: 24em;\r\n  }\r\n  .ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\r\n    padding-left: 25.5em;\r\n  }\r\n  .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\r\n    padding-right: 24em;\r\n  }\r\n  .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\r\n    padding-right: 25.5em;\r\n  }\r\n  .ql-editor .ql-indent-9:not(.ql-direction-rtl) {\r\n    padding-left: 27em;\r\n  }\r\n  .ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\r\n    padding-left: 28.5em;\r\n  }\r\n  .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\r\n    padding-right: 27em;\r\n  }\r\n  .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\r\n    padding-right: 28.5em;\r\n  }\r\n  .ql-editor .ql-video {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n  .ql-editor .ql-video.ql-align-center {\r\n    margin: 0 auto;\r\n  }\r\n  .ql-editor .ql-video.ql-align-right {\r\n    margin: 0 0 0 auto;\r\n  }\r\n  .ql-editor .ql-bg-black {\r\n    background-color: #000;\r\n  }\r\n  .ql-editor .ql-bg-red {\r\n    background-color: #e60000;\r\n  }\r\n  .ql-editor .ql-bg-orange {\r\n    background-color: #f90;\r\n  }\r\n  .ql-editor .ql-bg-yellow {\r\n    background-color: #ff0;\r\n  }\r\n  .ql-editor .ql-bg-green {\r\n    background-color: #008a00;\r\n  }\r\n  .ql-editor .ql-bg-blue {\r\n    background-color: #06c;\r\n  }\r\n  .ql-editor .ql-bg-purple {\r\n    background-color: #93f;\r\n  }\r\n  .ql-editor .ql-color-white {\r\n    color: #fff;\r\n  }\r\n  .ql-editor .ql-color-red {\r\n    color: #e60000;\r\n  }\r\n  .ql-editor .ql-color-orange {\r\n    color: #f90;\r\n  }\r\n  .ql-editor .ql-color-yellow {\r\n    color: #ff0;\r\n  }\r\n  .ql-editor .ql-color-green {\r\n    color: #008a00;\r\n  }\r\n  .ql-editor .ql-color-blue {\r\n    color: #06c;\r\n  }\r\n  .ql-editor .ql-color-purple {\r\n    color: #93f;\r\n  }\r\n  .ql-editor .ql-font-serif {\r\n    font-family: Georgia, Times New Roman, serif;\r\n  }\r\n  .ql-editor .ql-font-monospace {\r\n    font-family: Monaco, Courier New, monospace;\r\n  }\r\n  .ql-editor .ql-size-small {\r\n    font-size: 0.75em;\r\n  }\r\n  .ql-editor .ql-size-large {\r\n    font-size: 1.5em;\r\n  }\r\n  .ql-editor .ql-size-huge {\r\n    font-size: 2.5em;\r\n  }\r\n  .ql-editor .ql-direction-rtl {\r\n    direction: rtl;\r\n    text-align: inherit;\r\n  }\r\n  .ql-editor .ql-align-center {\r\n    text-align: center;\r\n  }\r\n  .ql-editor .ql-align-justify {\r\n    text-align: justify;\r\n  }\r\n  .ql-editor .ql-align-right {\r\n    text-align: right;\r\n  }\r\n  .ql-editor.ql-blank::before {\r\n    color: rgba(0,0,0,0.6);\r\n    content: attr(data-placeholder);\r\n    font-style: italic;\r\n    pointer-events: none;\r\n    position: absolute;\r\n  }\r\n  .ql-snow.ql-toolbar:after,\r\n  .ql-snow .ql-toolbar:after {\r\n    clear: both;\r\n    content: '';\r\n    display: table;\r\n  }\r\n  .ql-snow.ql-toolbar button,\r\n  .ql-snow .ql-toolbar button {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    float: left;\r\n    height: 24px;\r\n    outline: none;\r\n    padding: 3px 5px;\r\n    width: 28px;\r\n  }\r\n  .ql-snow.ql-toolbar button svg,\r\n  .ql-snow .ql-toolbar button svg {\r\n    float: left;\r\n    height: 100%;\r\n  }\r\n  .ql-snow.ql-toolbar input.ql-image[type=file],\r\n  .ql-snow .ql-toolbar input.ql-image[type=file] {\r\n    display: none;\r\n  }\r\n  .ql-snow.ql-toolbar button:hover,\r\n  .ql-snow .ql-toolbar button:hover,\r\n  .ql-snow.ql-toolbar button.ql-active,\r\n  .ql-snow .ql-toolbar button.ql-active,\r\n  .ql-snow.ql-toolbar .ql-picker-label:hover,\r\n  .ql-snow .ql-toolbar .ql-picker-label:hover,\r\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active,\r\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active,\r\n  .ql-snow.ql-toolbar .ql-picker-item:hover,\r\n  .ql-snow .ql-toolbar .ql-picker-item:hover,\r\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,\r\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {\r\n    color: #06c;\r\n  }\r\n  .ql-snow.ql-toolbar button:hover .ql-fill,\r\n  .ql-snow .ql-toolbar button:hover .ql-fill,\r\n  .ql-snow.ql-toolbar button.ql-active .ql-fill,\r\n  .ql-snow .ql-toolbar button.ql-active .ql-fill,\r\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\r\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\r\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\r\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\r\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\r\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\r\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\r\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\r\n  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\r\n  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\r\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\r\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\r\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\r\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\r\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\r\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\r\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\r\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\r\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\r\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\r\n    fill: #06c;\r\n  }\r\n  .ql-snow.ql-toolbar button:hover .ql-stroke,\r\n  .ql-snow .ql-toolbar button:hover .ql-stroke,\r\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke,\r\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke,\r\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\r\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\r\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\r\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\r\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\r\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\r\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\r\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\r\n  .ql-snow.ql-toolbar button:hover .ql-stroke-mitter,\r\n  .ql-snow .ql-toolbar button:hover .ql-stroke-mitter,\r\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke-mitter,\r\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke-mitter,\r\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-mitter,\r\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-mitter,\r\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-mitter,\r\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-mitter,\r\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-mitter,\r\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-mitter,\r\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-mitter,\r\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-mitter {\r\n    stroke: #06c;\r\n  }\r\n  .ql-snow {\r\n    box-sizing: border-box;\r\n  }\r\n  .ql-snow * {\r\n    box-sizing: border-box;\r\n  }\r\n  .ql-snow .ql-hidden {\r\n    display: none;\r\n  }\r\n  .ql-snow .ql-out-bottom,\r\n  .ql-snow .ql-out-top {\r\n    visibility: hidden;\r\n  }\r\n  .ql-snow .ql-tooltip {\r\n    position: absolute;\r\n  }\r\n  .ql-snow .ql-tooltip a {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n  }\r\n  .ql-snow .ql-formats {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n  }\r\n  .ql-snow .ql-formats:after {\r\n    clear: both;\r\n    content: '';\r\n    display: table;\r\n  }\r\n  .ql-snow .ql-toolbar.snow,\r\n  .ql-snow .ql-stroke {\r\n    fill: none;\r\n    stroke: #444;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-width: 2;\r\n  }\r\n  .ql-snow .ql-stroke-mitter {\r\n    fill: none;\r\n    stroke: #444;\r\n    stroke-mitterlimit: 10;\r\n    stroke-width: 2;\r\n  }\r\n  .ql-snow .ql-fill,\r\n  .ql-snow .ql-stroke.ql-fill {\r\n    fill: #444;\r\n  }\r\n  .ql-snow .ql-empty {\r\n    fill: none;\r\n  }\r\n  .ql-snow .ql-even {\r\n    fill-rule: evenodd;\r\n  }\r\n  .ql-snow .ql-thin,\r\n  .ql-snow .ql-stroke.ql-thin {\r\n    stroke-width: 1;\r\n  }\r\n  .ql-snow .ql-transparent {\r\n    opacity: 0.4;\r\n  }\r\n  .ql-snow .ql-direction svg:last-child {\r\n    display: none;\r\n  }\r\n  .ql-snow .ql-direction.ql-active svg:last-child {\r\n    display: inline;\r\n  }\r\n  .ql-snow .ql-direction.ql-active svg:first-child {\r\n    display: none;\r\n  }\r\n  .ql-snow .ql-editor h1 {\r\n    font-size: 2em;\r\n  }\r\n  .ql-snow .ql-editor h2 {\r\n    font-size: 1.5em;\r\n  }\r\n  .ql-snow .ql-editor h3 {\r\n    font-size: 1.17em;\r\n  }\r\n  .ql-snow .ql-editor h4 {\r\n    font-size: 1em;\r\n  }\r\n  .ql-snow .ql-editor h5 {\r\n    font-size: 0.83em;\r\n  }\r\n  .ql-snow .ql-editor h6 {\r\n    font-size: 0.67em;\r\n  }\r\n  .ql-snow .ql-editor a {\r\n    text-decoration: underline;\r\n  }\r\n  .ql-snow .ql-editor blockquote {\r\n    border-left: 4px solid #ccc;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n    padding-left: 16px;\r\n  }\r\n  .ql-snow .ql-editor code,\r\n  .ql-snow .ql-editor pre {\r\n    background-color: #f0f0f0;\r\n    border-radius: 3px;\r\n  }\r\n  .ql-snow .ql-editor pre {\r\n    white-space: pre-wrap;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n    padding: 5px 10px;\r\n  }\r\n  .ql-snow .ql-editor code {\r\n    font-size: 85%;\r\n    padding-bottom: 2px;\r\n    padding-top: 2px;\r\n  }\r\n  .ql-snow .ql-editor code:before,\r\n  .ql-snow .ql-editor code:after {\r\n    content: \"\\A0\";\r\n    letter-spacing: -2px;\r\n  }\r\n  .ql-snow .ql-editor pre.ql-syntax {\r\n    background-color: #23241f;\r\n    color: #f8f8f2;\r\n    overflow: visible;\r\n  }\r\n  .ql-snow .ql-editor img {\r\n    max-width: 100%;\r\n  }\r\n  .ql-snow .ql-picker {\r\n    color: #444;\r\n    display: inline-block;\r\n    float: left;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 24px;\r\n    position: relative;\r\n    vertical-align: middle;\r\n  }\r\n  .ql-snow .ql-picker-label {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    height: 100%;\r\n    padding-left: 8px;\r\n    padding-right: 2px;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n  .ql-snow .ql-picker-label::before {\r\n    display: inline-block;\r\n    line-height: 22px;\r\n  }\r\n  .ql-snow .ql-picker-options {\r\n    background-color: #fff;\r\n    display: none;\r\n    min-width: 100%;\r\n    padding: 4px 8px;\r\n    position: absolute;\r\n    white-space: nowrap;\r\n  }\r\n  .ql-snow .ql-picker-options .ql-picker-item {\r\n    cursor: pointer;\r\n    display: block;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n  }\r\n  .ql-snow .ql-picker.ql-expanded .ql-picker-label {\r\n    color: #ccc;\r\n    z-index: 2;\r\n  }\r\n  .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\r\n    fill: #ccc;\r\n  }\r\n  .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\r\n    stroke: #ccc;\r\n  }\r\n  .ql-snow .ql-picker.ql-expanded .ql-picker-options {\r\n    display: block;\r\n    margin-top: -1px;\r\n    top: 100%;\r\n    z-index: 1;\r\n  }\r\n  .ql-snow .ql-color-picker,\r\n  .ql-snow .ql-icon-picker {\r\n    width: 28px;\r\n  }\r\n  .ql-snow .ql-color-picker .ql-picker-label,\r\n  .ql-snow .ql-icon-picker .ql-picker-label {\r\n    padding: 2px 4px;\r\n  }\r\n  .ql-snow .ql-color-picker .ql-picker-label svg,\r\n  .ql-snow .ql-icon-picker .ql-picker-label svg {\r\n    right: 4px;\r\n  }\r\n  .ql-snow .ql-icon-picker .ql-picker-options {\r\n    padding: 4px 0px;\r\n  }\r\n  .ql-snow .ql-icon-picker .ql-picker-item {\r\n    height: 24px;\r\n    width: 24px;\r\n    padding: 2px 4px;\r\n  }\r\n  .ql-snow .ql-color-picker .ql-picker-options {\r\n    padding: 3px 5px;\r\n    width: 152px;\r\n  }\r\n  .ql-snow .ql-color-picker .ql-picker-item {\r\n    border: 1px solid transparent;\r\n    float: left;\r\n    height: 16px;\r\n    margin: 2px;\r\n    padding: 0px;\r\n    width: 16px;\r\n  }\r\n  .ql-snow .ql-color-picker .ql-picker-item.ql-primary-color {\r\n    margin-bottom: toolbarPadding;\r\n  }\r\n  .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\r\n    position: absolute;\r\n    margin-top: -9px;\r\n    right: 0;\r\n    top: 50%;\r\n    width: 18px;\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\r\n  .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\r\n  .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\r\n  .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\r\n  .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\r\n    content: attr(data-label);\r\n  }\r\n  .ql-snow .ql-picker.ql-header {\r\n    width: 98px;\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-label::before,\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item::before {\r\n    content: 'Normal';\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\r\n    content: 'Heading 1';\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\r\n    content: 'Heading 2';\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\r\n    content: 'Heading 3';\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\r\n    content: 'Heading 4';\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\r\n    content: 'Heading 5';\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\r\n    content: 'Heading 6';\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\r\n    font-size: 2em;\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\r\n    font-size: 1.5em;\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\r\n    font-size: 1.17em;\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\r\n    font-size: 1em;\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\r\n    font-size: 0.83em;\r\n  }\r\n  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\r\n    font-size: 0.67em;\r\n  }\r\n  .ql-snow .ql-picker.ql-font {\r\n    width: 108px;\r\n  }\r\n  .ql-snow .ql-picker.ql-font .ql-picker-label::before,\r\n  .ql-snow .ql-picker.ql-font .ql-picker-item::before {\r\n    content: 'Sans Serif';\r\n  }\r\n  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\r\n  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\r\n    content: 'Serif';\r\n  }\r\n  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\r\n  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\r\n    content: 'Monospace';\r\n  }\r\n  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\r\n    font-family: Georgia, Times New Roman, serif;\r\n  }\r\n  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\r\n    font-family: Monaco, Courier New, monospace;\r\n  }\r\n  .ql-snow .ql-picker.ql-size {\r\n    width: 98px;\r\n  }\r\n  .ql-snow .ql-picker.ql-size .ql-picker-label::before,\r\n  .ql-snow .ql-picker.ql-size .ql-picker-item::before {\r\n    content: 'Normal';\r\n  }\r\n  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\r\n  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\r\n    content: 'Small';\r\n  }\r\n  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\r\n  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\r\n    content: 'Large';\r\n  }\r\n  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\r\n  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\r\n    content: 'Huge';\r\n  }\r\n  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\r\n    font-size: 10px;\r\n  }\r\n  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\r\n    font-size: 18px;\r\n  }\r\n  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\r\n    font-size: 32px;\r\n  }\r\n  .ql-snow .ql-color-picker.ql-background .ql-picker-item {\r\n    background-color: #fff;\r\n  }\r\n  .ql-snow .ql-color-picker.ql-color .ql-picker-item {\r\n    background-color: #000;\r\n  }\r\n  .ql-toolbar.ql-snow {\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\r\n    padding: 8px;\r\n  }\r\n  .ql-toolbar.ql-snow .ql-formats {\r\n    margin-right: 15px;\r\n  }\r\n  .ql-toolbar.ql-snow .ql-picker-label {\r\n    border: 1px solid transparent;\r\n  }\r\n  .ql-toolbar.ql-snow .ql-picker-options {\r\n    border: 1px solid transparent;\r\n    box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\r\n  }\r\n  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\r\n    border-color: #ccc;\r\n  }\r\n  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\r\n    border-color: #ccc;\r\n  }\r\n  .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\r\n  .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\r\n    border-color: #000;\r\n  }\r\n  .ql-toolbar.ql-snow + .ql-container.ql-snow {\r\n    border-top: 0px;\r\n  }\r\n  .ql-snow .ql-tooltip {\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 0px 0px 5px #ddd;\r\n    color: #444;\r\n    margin-top: 10px;\r\n    padding: 5px 12px;\r\n    white-space: nowrap;\r\n  }\r\n  .ql-snow .ql-tooltip::before {\r\n    content: \"Visit URL:\";\r\n    line-height: 26px;\r\n    margin-right: 8px;\r\n  }\r\n  .ql-snow .ql-tooltip input[type=text] {\r\n    display: none;\r\n    border: 1px solid #ccc;\r\n    font-size: 13px;\r\n    height: 26px;\r\n    margin: 0px;\r\n    padding: 3px 5px;\r\n    width: 170px;\r\n  }\r\n  .ql-snow .ql-tooltip a.ql-preview {\r\n    display: inline-block;\r\n    max-width: 200px;\r\n    overflow-x: hidden;\r\n    text-overflow: ellipsis;\r\n    vertical-align: top;\r\n  }\r\n  .ql-snow .ql-tooltip a.ql-action::after {\r\n    border-right: 1px solid #ccc;\r\n    content: 'Edit';\r\n    margin-left: 16px;\r\n    padding-right: 8px;\r\n  }\r\n  .ql-snow .ql-tooltip a.ql-remove::before {\r\n    content: 'Remove';\r\n    margin-left: 8px;\r\n  }\r\n  .ql-snow .ql-tooltip a {\r\n    line-height: 26px;\r\n  }\r\n  .ql-snow .ql-tooltip.ql-editing a.ql-preview,\r\n  .ql-snow .ql-tooltip.ql-editing a.ql-remove {\r\n    display: none;\r\n  }\r\n  .ql-snow .ql-tooltip.ql-editing input[type=text] {\r\n    display: inline-block;\r\n  }\r\n  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {\r\n    border-right: 0px;\r\n    content: 'Save';\r\n    padding-right: 0px;\r\n  }\r\n  .ql-snow .ql-tooltip[data-mode=link]::before {\r\n    content: \"Enter link:\";\r\n  }\r\n  .ql-snow .ql-tooltip[data-mode=formula]::before {\r\n    content: \"Enter formula:\";\r\n  }\r\n  .ql-snow .ql-tooltip[data-mode=video]::before {\r\n    content: \"Enter video:\";\r\n  }\r\n  .ql-snow a {\r\n    color: #06c;\r\n  }\r\n  .ql-container.ql-snow {\r\n    border: 1px solid #ccc;\r\n  }", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(45);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(5);
var warning = __webpack_require__(4);
var assign = __webpack_require__(1);

var ReactPropTypesSecret = __webpack_require__(9);
var checkPropTypes = __webpack_require__(8);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(5);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Abbr", function() { return Abbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Acronym", function() { return Acronym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Applet", function() { return Applet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aside", function() { return Aside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basefont", function() { return Basefont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bdi", function() { return Bdi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bdo", function() { return Bdo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bgsound", function() { return Bgsound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Big", function() { return Big; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blink", function() { return Blink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blockquote", function() { return Blockquote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Br", function() { return Br; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caption", function() { return Caption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Center", function() { return Center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cite", function() { return Cite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colgroup", function() { return Colgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datalist", function() { return Datalist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dd", function() { return Dd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Del", function() { return Del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dfn", function() { return Dfn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dl", function() { return Dl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dt", function() { return Dt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Em", function() { return Em; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return Embed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return Fieldset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figcaption", function() { return Figcaption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return Figure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frameset", function() { return Frameset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return H5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return H6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hgroup", function() { return Hgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hr", function() { return Hr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return Html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe", function() { return Iframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ins", function() { return Ins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Isindex", function() { return Isindex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kbd", function() { return Kbd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keygen", function() { return Keygen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listing", function() { return Listing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTag", function() { return MapTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return Mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marquee", function() { return Marquee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathTag", function() { return MathTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menuitem", function() { return Menuitem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meter", function() { return Meter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multicol", function() { return Multicol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nextid", function() { return Nextid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nobr", function() { return Nobr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Noembed", function() { return Noembed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Noframes", function() { return Noframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Noscript", function() { return Noscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectTag", function() { return ObjectTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ol", function() { return Ol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Optgroup", function() { return Optgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return Output; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return Picture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plaintext", function() { return Plaintext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rb", function() { return Rb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rbc", function() { return Rbc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rp", function() { return Rp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rt", function() { return Rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rtc", function() { return Rtc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruby", function() { return Ruby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Samp", function() { return Samp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Script", function() { return Script; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return Shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slot", function() { return Slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return Small; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spacer", function() { return Spacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strike", function() { return Strike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return Strong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sub", function() { return Sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sup", function() { return Sup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tbody", function() { return Tbody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Td", function() { return Td; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tfoot", function() { return Tfoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Th", function() { return Th; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thead", function() { return Thead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tr", function() { return Tr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tt", function() { return Tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Var", function() { return Var; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wbr", function() { return Wbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xmp", function() { return Xmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltGlyph", function() { return AltGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltGlyphDef", function() { return AltGlyphDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltGlyphItem", function() { return AltGlyphItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animate", function() { return Animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateColor", function() { return AnimateColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateMotion", function() { return AnimateMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateTransform", function() { return AnimateTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipPath", function() { return ClipPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorProfile", function() { return ColorProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cursor", function() { return Cursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Defs", function() { return Defs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Desc", function() { return Desc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Discard", function() { return Discard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return Ellipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeBlend", function() { return FeBlend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeColorMatrix", function() { return FeColorMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeComponentTransfer", function() { return FeComponentTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeComposite", function() { return FeComposite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeConvolveMatrix", function() { return FeConvolveMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeDiffuseLighting", function() { return FeDiffuseLighting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeDisplacementMap", function() { return FeDisplacementMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeDistantLight", function() { return FeDistantLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeDropShadow", function() { return FeDropShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeFlood", function() { return FeFlood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeFuncA", function() { return FeFuncA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeFuncB", function() { return FeFuncB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeFuncG", function() { return FeFuncG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeFuncR", function() { return FeFuncR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeGaussianBlur", function() { return FeGaussianBlur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeImage", function() { return FeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeMerge", function() { return FeMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeMergeNode", function() { return FeMergeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeMorphology", function() { return FeMorphology; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeOffset", function() { return FeOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FePointLight", function() { return FePointLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeSpecularLighting", function() { return FeSpecularLighting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeSpotLight", function() { return FeSpotLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeTile", function() { return FeTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeTurbulence", function() { return FeTurbulence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFace", function() { return FontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFaceFormat", function() { return FontFaceFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFaceName", function() { return FontFaceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFaceSrc", function() { return FontFaceSrc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFaceUri", function() { return FontFaceUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForeignObject", function() { return ForeignObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Glyph", function() { return Glyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlyphRef", function() { return GlyphRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handler", function() { return Handler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hatch", function() { return Hatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hatchpath", function() { return Hatchpath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hkern", function() { return Hkern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearGradient", function() { return LinearGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listener", function() { return Listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mask", function() { return Mask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meshgradient", function() { return Meshgradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meshpatch", function() { return Meshpatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meshrow", function() { return Meshrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metadata", function() { return Metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingGlyph", function() { return MissingGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mpath", function() { return Mpath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pattern", function() { return Pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prefetch", function() { return Prefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadialGradient", function() { return RadialGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTag", function() { return SetTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolidColor", function() { return SolidColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Solidcolor", function() { return Solidcolor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stop", function() { return Stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolTag", function() { return SymbolTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tbreak", function() { return Tbreak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPath", function() { return TextPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tref", function() { return Tref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tspan", function() { return Tspan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unknown", function() { return Unknown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Use", function() { return Use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vkern", function() { return Vkern; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_glamor__);



var htmlTagNames = [
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "command",
  "content",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "image",
  "img",
  "input",
  "ins",
  "isindex",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "multicol",
  "nav",
  "nextid",
  "nobr",
  "noembed",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "plaintext",
  "pre",
  "progress",
  "q",
  "rb",
  "rbc",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "xmp"
]
;

var svgTagNames = [
  "a",
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "animation",
  "audio",
  "canvas",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "discard",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "handler",
  "hatch",
  "hatchpath",
  "hkern",
  "iframe",
  "image",
  "line",
  "linearGradient",
  "listener",
  "marker",
  "mask",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "prefetch",
  "radialGradient",
  "rect",
  "script",
  "set",
  "solidColor",
  "solidcolor",
  "stop",
  "style",
  "svg",
  "switch",
  "symbol",
  "tbreak",
  "text",
  "textArea",
  "textPath",
  "title",
  "tref",
  "tspan",
  "unknown",
  "use",
  "video",
  "view",
  "vkern"
]
;

var domElements = htmlTagNames.concat(svgTagNames).filter(function (tag, index, array) {
  return array.indexOf(tag) === index;
});

var CHANNEL = '__glamorous__'; /* istanbul ignore next */

var isPreact = false;

var _PropTypes = void 0;

/* istanbul ignore next */
if (isPreact) {
  if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes) {
    _PropTypes = function PropTypes() {
      return _PropTypes;
    };

    ['array', 'bool', 'func', 'number', 'object', 'string', 'symbol', 'any', 'arrayOf', 'element', 'instanceOf', 'node', 'objectOf', 'oneOf', 'oneOfType', 'shape', 'exact'].forEach(function (type) {
      _PropTypes[type] = _PropTypes;
    });
  }
  // copied from preact-compat
  /* eslint-disable no-eq-null, eqeqeq, consistent-return */
  if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children) {
    var Children = {
      map: function map(children, fn, ctx) {
        if (children == null) {
          return null;
        }
        children = Children.toArray(children);
        if (ctx && ctx !== children) {
          fn = fn.bind(ctx);
        }
        return children.map(fn);
      },
      forEach: function forEach(children, fn, ctx) {
        if (children == null) {
          return null;
        }
        children = Children.toArray(children);
        if (ctx && ctx !== children) {
          fn = fn.bind(ctx);
        }
        children.forEach(fn);
      },
      count: function count(children) {
        return children && children.length || 0;
      },
      only: function only(children) {
        children = Children.toArray(children);
        if (children.length !== 1) {
          throw new Error('Children.only() expects only one child.');
        }
        return children[0];
      },
      toArray: function toArray(children) {
        if (children == null) {
          return [];
        }
        return [].concat(children);
      }
    };
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children = Children;
  }
  /* eslint-enable no-eq-null, eqeqeq, consistent-return */
} else if (parseFloat(__WEBPACK_IMPORTED_MODULE_0_react___default.a.version.slice(0, 4)) >= 15.5) {
  /* istanbul ignore next */
  try {
    _PropTypes = __webpack_require__(20);
    /* istanbul ignore next */
  } catch (error) {
    // ignore
  }
}
/* istanbul ignore next */
_PropTypes = _PropTypes || __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes;



/*
eslint
  import/no-mutable-exports:0,
  import/prefer-default-export:0,
  react/no-deprecated:0
 */

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function generateWarningMessage(Comp) {
  var componentName = Comp.displayName || Comp.name || 'FunctionComponent';
  // eslint-disable-next-line max-len
  return 'glamorous warning: Expected component called "' + componentName + '" which uses withTheme to be within a ThemeProvider but none was found.';
}

function withTheme(ComponentToTheme) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$noWarn = _ref.noWarn,
      noWarn = _ref$noWarn === undefined ? false : _ref$noWarn,
      _ref$createElement = _ref.createElement,
      createElement = _ref$createElement === undefined ? true : _ref$createElement;

  var ThemedComponent = function (_React$Component) {
    inherits(ThemedComponent, _React$Component);

    function ThemedComponent() {
      var _ref2;

      var _temp, _this, _ret;

      classCallCheck(this, ThemedComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = ThemedComponent.__proto__ || Object.getPrototypeOf(ThemedComponent)).call.apply(_ref2, [this].concat(args))), _this), _this.warned = noWarn, _this.state = { theme: {} }, _this.setTheme = function (theme) {
        return _this.setState({ theme: theme });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(ThemedComponent, [{
      key: 'componentWillMount',


      // eslint-disable-next-line complexity
      value: function componentWillMount() {
        if (!this.context[CHANNEL]) {
          if (process.env.NODE_ENV !== 'production' && !this.warned) {
            this.warned = true;
            // eslint-disable-next-line no-console
            console.warn(generateWarningMessage(ComponentToTheme));
          }
        }
        var theme = this.props.theme;

        if (this.context[CHANNEL]) {
          // if a theme is provided via props,
          // it takes precedence over context
          this.setTheme(theme ? theme : this.context[CHANNEL].getState());
        } else {
          this.setTheme(theme || {});
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.theme !== nextProps.theme) {
          this.setTheme(nextProps.theme);
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.context[CHANNEL] && !this.props.theme) {
          // subscribe to future theme changes
          this.subscriptionId = this.context[CHANNEL].subscribe(this.setTheme);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        // cleanup subscription
        this.subscriptionId && this.context[CHANNEL].unsubscribe(this.subscriptionId);
      }
    }, {
      key: 'render',
      value: function render() {
        if (createElement) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentToTheme, _extends({}, this.props, this.state));
        } else {
          // this allows us to effectively use the GlamorousComponent
          // as our `render` method without going through lifecycle hooks.
          // Also allows us to forward the context in the scenario where
          // a user wants to add more context.
          // eslint-disable-next-line babel/new-cap
          return ComponentToTheme.call(this, _extends({}, this.props, this.state), this.context);
        }
      }
    }]);
    return ThemedComponent;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  ThemedComponent.propTypes = {
    theme: _PropTypes.object
  };


  var defaultContextTypes = defineProperty({}, CHANNEL, _PropTypes.object);

  var userDefinedContextTypes = null;

  // configure the contextTypes to be settable by the user,
  // however also retaining the glamorous channel.
  Object.defineProperty(ThemedComponent, 'contextTypes', {
    enumerable: true,
    configurable: true,
    set: function set$$1(value) {
      userDefinedContextTypes = value;
    },
    get: function get$$1() {
      // if the user has provided a contextTypes definition,
      // merge the default context types with the provided ones.
      if (userDefinedContextTypes) {
        return _extends({}, defaultContextTypes, userDefinedContextTypes);
      }
      return defaultContextTypes;
    }
  });

  return ThemedComponent;
}

var isFunction_1 = isFunction;

var toString = Object.prototype.toString;

function isFunction (fn) {
  var string = toString.call(fn);
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
}

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var isobject = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

function isObjectObject(o) {
  return isobject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

var isPlainObject = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

function createBroadcast (initialState) {
  var listeners = {};
  var id = 1;
  var _state = initialState;

  function getState () {
    return _state
  }

  function setState (state) {
    _state = state;
    var keys = Object.keys(listeners);
    var i = 0;
    var len = keys.length;
    for (; i < len; i++) {
      // if a listener gets unsubscribed during setState we just skip it
      if (listeners[keys[i]]) { listeners[keys[i]](state); }
    }
  }

  // subscribe to changes and return the subscriptionId
  function subscribe (listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function.')
    }
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    return currentId
  }

  // remove subscription by removing the listener function
  function unsubscribe (id) {
    listeners[id] = undefined;
  }

  return { getState: getState, setState: setState, subscribe: subscribe, unsubscribe: unsubscribe }
}

/**
 * This is a component which will provide a theme to the entire tree
 * via context and event listener
 * (because pure components block context updates)
 * inspired by the styled-components implementation
 * https://github.com/styled-components/styled-components
 * @param {Object} theme the theme object..
 */

var ThemeProvider = function (_React$Component) {
  inherits(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ThemeProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call.apply(_ref, [this].concat(args))), _this), _this.setOuterTheme = function (theme) {
      _this.outerTheme = theme;
      if (_this.broadcast !== undefined) {
        _this.publishTheme();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ThemeProvider, [{
    key: 'getTheme',

    // create theme, by merging with outer theme, if present
    value: function getTheme(passedTheme) {
      var theme = passedTheme || this.props.theme;
      if (isFunction_1(theme)) {
        var mergedTheme = theme(this.outerTheme);
        if (!isPlainObject(mergedTheme)) {
          throw new Error('[ThemeProvider] Please return an object from your theme function, ' + 'i.e. theme={() => ({})}!');
        }
        return mergedTheme;
      }
      return _extends({}, this.outerTheme, theme);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return defineProperty({}, CHANNEL, this.broadcast);
    }
  }, {
    key: 'publishTheme',
    value: function publishTheme(theme) {
      this.broadcast.setState(this.getTheme(theme));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // create a new subscription for keeping track of outer theme, if present
      if (this.context[CHANNEL]) {
        this.subscriptionId = this.context[CHANNEL].subscribe(this.setOuterTheme);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // set broadcast state by merging outer theme with own
      if (this.context[CHANNEL]) {
        this.setOuterTheme(this.context[CHANNEL].getState());
      }
      this.broadcast = createBroadcast(this.getTheme(this.props.theme));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.theme !== nextProps.theme) {
        this.publishTheme(nextProps.theme);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.subscriptionId && this.context[CHANNEL].unsubscribe(this.subscriptionId);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children) : null;
    }
  }]);
  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ThemeProvider.childContextTypes = defineProperty({}, CHANNEL, _PropTypes.object.isRequired);

ThemeProvider.contextTypes = defineProperty({}, CHANNEL, _PropTypes.object);

ThemeProvider.propTypes = {
  theme: _PropTypes.oneOfType([_PropTypes.object, _PropTypes.func]).isRequired,
  children: _PropTypes.node
};

/**
 * This function takes a className string and gets all the
 * associated glamor styles. It's used to merge glamor styles
 * from a className to make sure that specificity is not
 * a problem when passing a className to a component.
 * @param {String} [className=''] the className string
 * @return {Object} { glamorStyles, glamorlessClassName }
 *   - glamorStyles is an array of all the glamor styles objects
 *   - glamorlessClassName is the rest of the className string
 *     without the glamor classNames
 */
function extractGlamorStyles(className) {
  var glamorlessClassName = [];
  var glamorStyles = [];
  className.toString().split(' ').forEach(function (name) {
    if (name.indexOf('css-') === 0) {
      var style = buildGlamorSrcFromClassName(name);
      glamorStyles.push(style);
    } else {
      glamorlessClassName.push(name);
    }
  });

  return { glamorlessClassName: glamorlessClassName, glamorStyles: glamorStyles };
}

/** Glamor's css function returns an object with the shape
 *
 * {
 *   [`data-css-${hash}`]: '',
 *   toString() { return `css-${hash}` }
 * }
 *
 * Whenever glamor's build function encounters an object with
 * this shape it just pulls the resulting styles from the cache.
 *
 * note: the toString method is not needed to qualify the shape
 **/
function buildGlamorSrcFromClassName(className) {
  return defineProperty({}, 'data-' + className, '');
}

function getGlamorClassName$1(_ref2) {
  var styles = _ref2.styles,
      props = _ref2.props,
      cssOverrides = _ref2.cssOverrides,
      cssProp = _ref2.cssProp,
      context = _ref2.context,
      displayName = _ref2.displayName;

  var _handleStyles = handleStyles([].concat(toConsumableArray(styles), [props.className, cssOverrides, cssProp]), props, context),
      mappedArgs = _handleStyles.mappedArgs,
      nonGlamorClassNames = _handleStyles.nonGlamorClassNames;
  // eslint-disable-next-line max-len


  var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
  var devRules = isDev ? { label: displayName } : null;
  var glamorClassName = __WEBPACK_IMPORTED_MODULE_1_glamor__["css"].apply(undefined, [devRules].concat(toConsumableArray(mappedArgs))).toString();
  var extras = nonGlamorClassNames.join(' ').trim();
  return (glamorClassName + ' ' + extras).trim();
}

// this next function is on a "hot" code-path
// so it's pretty complex to make sure it's fast.
// eslint-disable-next-line complexity
function handleStyles(styles, props, context) {
  var current = void 0;
  var mappedArgs = [];
  var nonGlamorClassNames = [];
  for (var i = 0; i < styles.length; i++) {
    current = styles[i];
    if (typeof current === 'function') {
      var result = current(props, context);
      if (typeof result === 'string') {
        var _extractGlamorStyles = extractGlamorStyles(result),
            glamorStyles = _extractGlamorStyles.glamorStyles,
            glamorlessClassName = _extractGlamorStyles.glamorlessClassName;

        mappedArgs.push.apply(mappedArgs, toConsumableArray(glamorStyles));
        nonGlamorClassNames.push.apply(nonGlamorClassNames, toConsumableArray(glamorlessClassName));
      } else {
        mappedArgs.push(result);
      }
    } else if (typeof current === 'string') {
      var _extractGlamorStyles2 = extractGlamorStyles(current),
          _glamorStyles = _extractGlamorStyles2.glamorStyles,
          _glamorlessClassName = _extractGlamorStyles2.glamorlessClassName;

      mappedArgs.push.apply(mappedArgs, toConsumableArray(_glamorStyles));
      nonGlamorClassNames.push.apply(nonGlamorClassNames, toConsumableArray(_glamorlessClassName));
    } else if (Array.isArray(current)) {
      var recursed = handleStyles(current, props, context);
      mappedArgs.push.apply(mappedArgs, toConsumableArray(recursed.mappedArgs));
      nonGlamorClassNames.push.apply(nonGlamorClassNames, toConsumableArray(recursed.nonGlamorClassNames));
    } else {
      mappedArgs.push(current);
    }
  }
  return { mappedArgs: mappedArgs, nonGlamorClassNames: nonGlamorClassNames };
}

/*
 * This is a relatively small abstraction that's ripe for open sourcing.
 * Documentation is in the README.md
 */
function createGlamorous$1(splitProps) {
  return glamorous;

  /**
   * This is the main export and the function that people
   * interact with most directly.
   *
   * It accepts a component which can be a string or
   * a React Component and returns
   * a "glamorousComponentFactory"
   * @param {String|ReactComponent} comp the component to render
   * @param {Object} options helpful info for the GlamorousComponents
   * @return {Function} the glamorousComponentFactory
   */
  function glamorous(comp) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var rootEl = config.rootEl,
        displayName = config.displayName,
        shouldClassNameUpdate = config.shouldClassNameUpdate,
        _config$filterProps = config.filterProps,
        filterProps = _config$filterProps === undefined ? [] : _config$filterProps,
        _config$forwardProps = config.forwardProps,
        forwardProps = _config$forwardProps === undefined ? [] : _config$forwardProps,
        _config$propsAreCssOv = config.propsAreCssOverrides,
        propsAreCssOverrides = _config$propsAreCssOv === undefined ? comp.propsAreCssOverrides : _config$propsAreCssOv,
        basePropsToApply = config.withProps;

    Object.assign(glamorousComponentFactory, { withConfig: withConfig });
    return glamorousComponentFactory;

    function withConfig(newConfig) {
      return glamorous(comp, _extends({}, config, newConfig));
    }

    /**
     * This returns a React Component that renders the comp (closure)
     * with a className based on the given glamor styles object(s)
     * @param {...Object|Function} styles the styles to create with glamor.
     *   If any of these are functions, they are invoked with the component
     *   props and the return value is used.
     * @return {ReactComponent} the ReactComponent function
     */
    function glamorousComponentFactory() {
      for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      /**
       * This is a component which will render the comp (closure)
       * with the glamorous styles (closure). Forwards any valid
       * props to the underlying component.
       */
      var GlamorousComponent = withTheme(function (props, context) {
        props = getPropsToApply(GlamorousComponent.propsToApply, {}, props, context);
        var updateClassName = shouldUpdate(props, context, this.previous);

        if (shouldClassNameUpdate) {
          this.previous = { props: props, context: context };
        }

        var _splitProps = splitProps(props, GlamorousComponent),
            toForward = _splitProps.toForward,
            cssOverrides = _splitProps.cssOverrides,
            cssProp = _splitProps.cssProp;

        // create className to apply


        this.className = updateClassName ? getGlamorClassName$1({
          styles: GlamorousComponent.styles,
          props: props,
          cssOverrides: cssOverrides,
          cssProp: cssProp,
          context: context,
          displayName: GlamorousComponent.displayName
        }) : this.className;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GlamorousComponent.comp, _extends({
          // if innerRef is forwarded we don't want to apply it here
          ref: 'innerRef' in toForward ? undefined : props.innerRef
        }, toForward, {
          className: this.className
        }));
      }, { noWarn: true, createElement: false });

      GlamorousComponent.propTypes = {
        // className accepts an object due to glamor's css function
        // returning an object with a toString method that gives the className
        className: _PropTypes.oneOfType([_PropTypes.string, _PropTypes.object]),
        cssOverrides: _PropTypes.object,
        innerRef: _PropTypes.func,
        glam: _PropTypes.object
      };

      function shouldUpdate(props, context, previous) {
        // exiting early so components which do not use this
        // optimization are not penalized by hanging onto
        // references to previous props and context
        if (!shouldClassNameUpdate) {
          return true;
        }
        var update = true;
        if (previous) {
          if (!shouldClassNameUpdate(previous.props, props, previous.context, context)) {
            update = false;
          }
        }

        return update;
      }

      Object.assign(GlamorousComponent, getGlamorousComponentMetadata({
        comp: comp,
        styles: styles,
        rootEl: rootEl,
        filterProps: filterProps,
        forwardProps: forwardProps,
        displayName: displayName,
        propsToApply: basePropsToApply
      }), {
        isGlamorousComponent: true,
        propsAreCssOverrides: propsAreCssOverrides,
        withComponent: function (newComp) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var fwp = GlamorousComponent.forwardProps,
              flp = GlamorousComponent.filterProps,
              componentProperties = objectWithoutProperties(GlamorousComponent, ['forwardProps', 'filterProps']);

          return glamorous(_extends({}, componentProperties, {
            comp: newComp,
            rootEl: getRootEl(newComp)
          }), _extends({
            // allows the forwardProps and filterProps to be overridden
            forwardProps: fwp,
            filterProps: flp
          }, options))();
        },
        withProps: function () {
          for (var _len2 = arguments.length, propsToApply = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            propsToApply[_key2] = arguments[_key2];
          }

          return glamorous(GlamorousComponent, { withProps: propsToApply })();
        },
        withConfig: withConfig
      });
      return GlamorousComponent;
    }
  }

  function getGlamorousComponentMetadata(_ref) {
    var comp = _ref.comp,
        styles = _ref.styles,
        rootEl = _ref.rootEl,
        filterProps = _ref.filterProps,
        forwardProps = _ref.forwardProps,
        displayName = _ref.displayName,
        basePropsToApply = _ref.propsToApply;

    var componentsComp = comp.comp ? comp.comp : comp;
    var propsToApply = comp.propsToApply ? [].concat(toConsumableArray(comp.propsToApply), toConsumableArray(arrayify(basePropsToApply))) : arrayify(basePropsToApply);
    return {
      // join styles together (for anyone doing: glamorous(glamorous.a({}), {}))
      styles: when(comp.styles, styles),
      // keep track of the ultimate rootEl to render (we never
      // actually render anything but
      // the base component, even when people wrap a glamorous
      // component in glamorous
      comp: componentsComp,
      rootEl: rootEl || getRootEl(comp),
      // join forwardProps and filterProps
      // (for anyone doing: glamorous(glamorous.a({}), {}))
      forwardProps: when(comp.forwardProps, forwardProps),
      filterProps: when(comp.filterProps, filterProps),
      // set the displayName to something that's slightly more
      // helpful than `GlamorousComponent` :)
      displayName: displayName || 'glamorous(' + getDisplayName(comp) + ')',
      // these are props that should be applied to the component at render time
      propsToApply: propsToApply
    };
  }
}

/**
 * reduces the propsToApply given to a single props object
 * @param {Array} propsToApply an array of propsToApply objects:
 *   - object
 *   - array of propsToApply items
 *   - function that accepts the accumulated props and the context
 * @param {Object} accumulator an object to apply props onto
 * @param {Object} props the props that should ultimately take precedence
 * @param {*} context the context object
 * @return {Object} the reduced props
 */
function getPropsToApply(propsToApply, accumulator, props, context) {
  // using forEach rather than reduce here because the reduce solution
  // effectively did the same thing because we manipulate the `accumulator`
  propsToApply.forEach(function (propsToApplyItem) {
    if (typeof propsToApplyItem === 'function') {
      return Object.assign(accumulator, propsToApplyItem(Object.assign({}, accumulator, props), context));
    } else if (Array.isArray(propsToApplyItem)) {
      return Object.assign(accumulator, getPropsToApply(propsToApplyItem, accumulator, props, context));
    }
    return Object.assign(accumulator, propsToApplyItem);
  });
  // props wins
  return Object.assign(accumulator, props);
}

function arrayify() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return Array.isArray(x) ? x : [x];
}

function when(comp, prop) {
  return comp ? comp.concat(prop) : prop;
}

function getRootEl(comp) {
  return comp.rootEl ? comp.rootEl : comp.comp || comp;
}

function getDisplayName(comp) {
  return typeof comp === 'string' ? comp : comp.displayName || comp.name || 'unknown';
}

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault;

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault;

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault;

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object')
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);

  if (!cache.has(cacheKey)) {
    var computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
    return computedValue
  }

  return cache.get(cacheKey)
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);

  if (!cache.has(cacheKey)) {
    var computedValue = fn.apply(this, args);
    cache.set(cacheKey, computedValue);
    return computedValue
  }

  return cache.get(cacheKey)
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null);
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
};

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
};

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value;
};

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
};

//
// API
//

var src = memoize;
var strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};

src.strategies = strategies;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var a = ["coords","download","href","name","rel","shape","target","type"];
var abbr = ["title"];
var applet = ["alt","height","name","width"];
var area = ["alt","coords","download","href","rel","shape","target","type"];
var audio = ["controls","loop","muted","preload","src"];
var base = ["href","target"];
var basefont = ["size"];
var bdo = ["dir"];
var blockquote = ["cite"];
var button = ["disabled","form","name","type","value"];
var canvas = ["height","width"];
var col = ["span","width"];
var colgroup = ["span","width"];
var data = ["value"];
var del = ["cite"];
var details = ["open"];
var dfn = ["title"];
var dialog = ["open"];
var embed = ["height","src","type","width"];
var fieldset = ["disabled","form","name"];
var font = ["size"];
var form = ["accept","action","method","name","target"];
var frame = ["name","scrolling","src"];
var frameset = ["cols","rows"];
var head = ["profile"];
var hr = ["size","width"];
var html = ["manifest"];
var iframe = ["height","name","sandbox","scrolling","src","width"];
var img = ["alt","height","name","sizes","src","width"];
var input = ["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"];
var ins = ["cite"];
var keygen = ["challenge","disabled","form","name"];
var label = ["form"];
var li = ["type","value"];
var link = ["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"];
var map = ["name"];
var meta = ["content","name"];
var meter = ["high","low","max","min","optimum","value"];
var object = ["data","form","height","name","type","width"];
var ol = ["reversed","start","type"];
var optgroup = ["disabled","label"];
var option = ["disabled","label","selected","value"];
var output = ["form","name"];
var param = ["name","type","value"];
var pre = ["width"];
var progress = ["max","value"];
var q = ["cite"];
var script = ["async","defer","integrity","nonce","src","type"];
var select = ["defaultValue","disabled","form","multiple","name","onChange","required","size","value"];
var slot = ["name"];
var source = ["media","sizes","src","type"];
var style = ["media","nonce","title","type"];
var table = ["summary","width"];
var td = ["headers","height","scope","width"];
var textarea = ["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"];
var th = ["headers","height","scope","width"];
var track = ["default","kind","label","src"];
var ul = ["type"];
var video = ["controls","height","loop","muted","poster","preload","src","width"];
var svg = ["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"];
var elements = {"html":["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],"svg":["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]};
var reactHtmlAttributes = {
	a: a,
	abbr: abbr,
	applet: applet,
	area: area,
	audio: audio,
	base: base,
	basefont: basefont,
	bdo: bdo,
	blockquote: blockquote,
	button: button,
	canvas: canvas,
	col: col,
	colgroup: colgroup,
	data: data,
	del: del,
	details: details,
	dfn: dfn,
	dialog: dialog,
	embed: embed,
	fieldset: fieldset,
	font: font,
	form: form,
	frame: frame,
	frameset: frameset,
	head: head,
	hr: hr,
	html: html,
	iframe: iframe,
	img: img,
	input: input,
	ins: ins,
	keygen: keygen,
	label: label,
	li: li,
	link: link,
	map: map,
	meta: meta,
	meter: meter,
	object: object,
	ol: ol,
	optgroup: optgroup,
	option: option,
	output: output,
	param: param,
	pre: pre,
	progress: progress,
	q: q,
	script: script,
	select: select,
	slot: slot,
	source: source,
	style: style,
	table: table,
	td: td,
	textarea: textarea,
	th: th,
	track: track,
	ul: ul,
	video: video,
	svg: svg,
	elements: elements,
	"*": ["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]
};

var reactHtmlAttributes$1 = Object.freeze({
	a: a,
	abbr: abbr,
	applet: applet,
	area: area,
	audio: audio,
	base: base,
	basefont: basefont,
	bdo: bdo,
	blockquote: blockquote,
	button: button,
	canvas: canvas,
	col: col,
	colgroup: colgroup,
	data: data,
	del: del,
	details: details,
	dfn: dfn,
	dialog: dialog,
	embed: embed,
	fieldset: fieldset,
	font: font,
	form: form,
	frame: frame,
	frameset: frameset,
	head: head,
	hr: hr,
	html: html,
	iframe: iframe,
	img: img,
	input: input,
	ins: ins,
	keygen: keygen,
	label: label,
	li: li,
	link: link,
	map: map,
	meta: meta,
	meter: meter,
	object: object,
	ol: ol,
	optgroup: optgroup,
	option: option,
	output: output,
	param: param,
	pre: pre,
	progress: progress,
	q: q,
	script: script,
	select: select,
	slot: slot,
	source: source,
	style: style,
	table: table,
	td: td,
	textarea: textarea,
	th: th,
	track: track,
	ul: ul,
	video: video,
	svg: svg,
	elements: elements,
	default: reactHtmlAttributes
});

var reactHtmlAttributes$2 = ( reactHtmlAttributes$1 && reactHtmlAttributes ) || reactHtmlAttributes$1;

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});


exports.default = reactHtmlAttributes$2;

module.exports = reactHtmlAttributes$2; // for CommonJS compatibility
});

var reactHTMLAttributes = unwrapExports(dist);

/*
 * This is used to check if a property name is one of the React-specific
 * properties and determine if that property should be forwarded
 * to the React component
 */

/* Logic copied from ReactDOMUnknownPropertyHook */
var reactProps = ['children', 'dangerouslySetInnerHTML', 'key', 'ref', 'autoFocus', 'defaultValue', 'valueLink', 'defaultChecked', 'checkedLink', 'innerHTML', 'suppressContentEditableWarning', 'onFocusIn', 'onFocusOut', 'className',

/* List copied from https://facebook.github.io/react/docs/events.html */
'onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onInvalid', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'onCopyCapture', 'onCutCapture', 'onPasteCapture', 'onCompositionEndCapture', 'onCompositionStartCapture', 'onCompositionUpdateCapture', 'onKeyDownCapture', 'onKeyPressCapture', 'onKeyUpCapture', 'onFocusCapture', 'onBlurCapture', 'onChangeCapture', 'onInputCapture', 'onSubmitCapture', 'onClickCapture', 'onContextMenuCapture', 'onDoubleClickCapture', 'onDragCapture', 'onDragEndCapture', 'onDragEnterCapture', 'onDragExitCapture', 'onDragLeaveCapture', 'onDragOverCapture', 'onDragStartCapture', 'onDropCapture', 'onMouseDownCapture', 'onMouseEnterCapture', 'onMouseLeaveCapture', 'onMouseMoveCapture', 'onMouseOutCapture', 'onMouseOverCapture', 'onMouseUpCapture', 'onSelectCapture', 'onTouchCancelCapture', 'onTouchEndCapture', 'onTouchMoveCapture', 'onTouchStartCapture', 'onScrollCapture', 'onWheelCapture', 'onAbortCapture', 'onCanPlayCapture', 'onCanPlayThroughCapture', 'onDurationChangeCapture', 'onEmptiedCapture', 'onEncryptedCapture', 'onEndedCapture', 'onErrorCapture', 'onLoadedDataCapture', 'onLoadedMetadataCapture', 'onLoadStartCapture', 'onPauseCapture', 'onPlayCapture', 'onPlayingCapture', 'onProgressCapture', 'onRateChangeCapture', 'onSeekedCapture', 'onSeekingCapture', 'onStalledCapture', 'onSuspendCapture', 'onTimeUpdateCapture', 'onVolumeChangeCapture', 'onWaitingCapture', 'onLoadCapture', 'onAnimationStartCapture', 'onAnimationEndCapture', 'onAnimationIterationCapture', 'onTransitionEndCapture'];

if (isPreact) {
  reactProps.push('autocomplete', 'autofocus', 'class', 'for', 'onDblClick', 'onSearch', 'slot', 'srcset');
}

/* eslint max-lines:0, func-style:0 */
// copied from:
// https://github.com/styled-components/styled-components/tree/
// 956e8210b6277860c89404f9cb08735f97eaa7e1/src/utils/validAttr.js
/* Trying to avoid the unknown-prop errors on glamorous components
 by filtering by React's attribute whitelist.
 */

var globalReactHtmlProps = reactHTMLAttributes['*'];
var supportedSVGTagNames = reactHTMLAttributes.elements.svg;
var supportedHtmlTagNames = reactHTMLAttributes.elements.html;

// these are valid attributes that have the
// same name as CSS properties, and is used
// for css overrides API
var cssProps = ['color', 'height', 'width'];

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR =
// eslint-disable-next-line max-len
':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
// eslint-disable-next-line max-len
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var isSvgTag = function (tagName) {
  return (
    // in our context, we only say that SVG tags are SVG
    // if they are not also HTML.
    // See https://github.com/paypal/glamorous/issues/245
    // the svg tag will always be treated as svg for
    // er... obvious reasons
    tagName === 'svg' || supportedHtmlTagNames.indexOf(tagName) === -1 && supportedSVGTagNames.indexOf(tagName) !== -1
  );
};
var isHtmlProp = function (name, tagName) {
  var elementAttributes = void 0;

  if (isSvgTag(tagName)) {
    // all SVG attributes supported by React are grouped under 'svg'
    elementAttributes = reactHTMLAttributes.svg;
  } else {
    elementAttributes = reactHTMLAttributes[tagName] || [];
  }

  return globalReactHtmlProps.indexOf(name) !== -1 || elementAttributes.indexOf(name) !== -1;
};
var isCssProp = function (name) {
  return cssProps.indexOf(name) !== -1;
};
var isReactProp = function (name) {
  return reactProps.indexOf(name) !== -1;
};

// eslint-disable-next-line complexity
var shouldForwardProperty = function (tagName, name) {
  return typeof tagName !== 'string' || (isHtmlProp(name, tagName) || isReactProp(name) || isCustomAttribute(name.toLowerCase())) && (!isCssProp(name) || isSvgTag(tagName));
};

var shouldForwardProperty$1 = src(shouldForwardProperty);

// eslint-disable-next-line complexity
function splitProps(_ref, _ref2) {
  var propsAreCssOverrides = _ref2.propsAreCssOverrides,
      rootEl = _ref2.rootEl,
      filterProps = _ref2.filterProps,
      forwardProps = _ref2.forwardProps;
  var cssProp = _ref.css,
      innerRef = _ref.innerRef,
      theme = _ref.theme,
      className = _ref.className,
      glam = _ref.glam,
      rest = objectWithoutProperties(_ref, ['css', 'innerRef', 'theme', 'className', 'glam']);

  // forward innerRef if user wishes to do so
  if (innerRef !== undefined && forwardProps.indexOf('innerRef') !== -1) {
    rest.innerRef = innerRef;
  }
  var returnValue = { toForward: {}, cssProp: cssProp, cssOverrides: {} };
  if (!propsAreCssOverrides) {
    if (typeof rootEl !== 'string' && filterProps.length === 0) {
      // if it's not a string and filterProps is empty,
      // then we can forward everything (because it's a component)
      returnValue.toForward = rest;
      return returnValue;
    }
  }
  return Object.keys(rest).reduce(function (split, propName) {
    if (filterProps.indexOf(propName) !== -1) {
      return split;
    } else if (forwardProps.indexOf(propName) !== -1 || shouldForwardProperty$1(rootEl, propName)) {
      split.toForward[propName] = rest[propName];
    } else if (propsAreCssOverrides) {
      split.cssOverrides[propName] = rest[propName];
    }
    return split;
  }, returnValue);
}

/* eslint no-unused-vars:0 */

var glamorous = createGlamorous$1(splitProps);

/*
 * This creates a glamorousComponentFactory for every DOM element so you can
 * simply do:
 * const GreenButton = glamorous.button({
 *   backgroundColor: 'green',
 *   padding: 20,
 * })
 * <GreenButton>Click Me!</GreenButton>
 */
Object.assign(glamorous, domElements.reduce(function (getters, tag) {
  // TODO: next breaking change, let's make
  // the `displayName` be: `glamorous.${tag}`
  getters[tag] = glamorous(tag);
  return getters;
}, {}));

/*
 * This creates a glamorous component for each DOM element so you can
 * simply do:
 * <glamorous.Div
 *   color="green"
 *   marginLeft={20}
 * >
 *   I'm green!
 * </glamorous.Div>
 */
Object.assign(glamorous, domElements.reduce(function (comps, tag) {
  var capitalTag = capitalize(tag);
  comps[capitalTag] = glamorous[tag]();
  comps[capitalTag].displayName = 'glamorous.' + capitalTag;
  comps[capitalTag].propsAreCssOverrides = true;
  return comps;
}, {}));

function capitalize(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}

/*
 * Fix importing in typescript after rollup compilation
 * https://github.com/rollup/rollup/issues/1156
 * https://github.com/Microsoft/TypeScript/issues/13017#issuecomment-268657860
 */
glamorous.default = glamorous;

// these exports below are generated
// and will be tree-shaken if you're using Webpack 2 or Rollup
var A = glamorous['A'];
var Abbr = glamorous['Abbr'];
var Acronym = glamorous['Acronym'];
var Address = glamorous['Address'];
var Applet = glamorous['Applet'];
var Area = glamorous['Area'];
var Article = glamorous['Article'];
var Aside = glamorous['Aside'];
var Audio = glamorous['Audio'];
var B = glamorous['B'];
var Base = glamorous['Base'];
var Basefont = glamorous['Basefont'];
var Bdi = glamorous['Bdi'];
var Bdo = glamorous['Bdo'];
var Bgsound = glamorous['Bgsound'];
var Big = glamorous['Big'];
var Blink = glamorous['Blink'];
var Blockquote = glamorous['Blockquote'];
var Body = glamorous['Body'];
var Br = glamorous['Br'];
var Button = glamorous['Button'];
var Canvas = glamorous['Canvas'];
var Caption = glamorous['Caption'];
var Center = glamorous['Center'];
var Cite = glamorous['Cite'];
var Code = glamorous['Code'];
var Col = glamorous['Col'];
var Colgroup = glamorous['Colgroup'];
var Command = glamorous['Command'];
var Content = glamorous['Content'];
var Data = glamorous['Data'];
var Datalist = glamorous['Datalist'];
var Dd = glamorous['Dd'];
var Del = glamorous['Del'];
var Details = glamorous['Details'];
var Dfn = glamorous['Dfn'];
var Dialog = glamorous['Dialog'];
var Dir = glamorous['Dir'];
var Div = glamorous['Div'];
var Dl = glamorous['Dl'];
var Dt = glamorous['Dt'];
var Element = glamorous['Element'];
var Em = glamorous['Em'];
var Embed = glamorous['Embed'];
var Fieldset = glamorous['Fieldset'];
var Figcaption = glamorous['Figcaption'];
var Figure = glamorous['Figure'];
var Font = glamorous['Font'];
var Footer = glamorous['Footer'];
var Form = glamorous['Form'];
var Frame = glamorous['Frame'];
var Frameset = glamorous['Frameset'];
var H1 = glamorous['H1'];
var H2 = glamorous['H2'];
var H3 = glamorous['H3'];
var H4 = glamorous['H4'];
var H5 = glamorous['H5'];
var H6 = glamorous['H6'];
var Head = glamorous['Head'];
var Header = glamorous['Header'];
var Hgroup = glamorous['Hgroup'];
var Hr = glamorous['Hr'];
var Html = glamorous['Html'];
var I = glamorous['I'];
var Iframe = glamorous['Iframe'];
var Image = glamorous['Image'];
var Img = glamorous['Img'];
var Input = glamorous['Input'];
var Ins = glamorous['Ins'];
var Isindex = glamorous['Isindex'];
var Kbd = glamorous['Kbd'];
var Keygen = glamorous['Keygen'];
var Label = glamorous['Label'];
var Legend = glamorous['Legend'];
var Li = glamorous['Li'];
var Link = glamorous['Link'];
var Listing = glamorous['Listing'];
var Main = glamorous['Main'];
var MapTag = glamorous['Map'];
var Mark = glamorous['Mark'];
var Marquee = glamorous['Marquee'];
var MathTag = glamorous['Math'];
var Menu = glamorous['Menu'];
var Menuitem = glamorous['Menuitem'];
var Meta = glamorous['Meta'];
var Meter = glamorous['Meter'];
var Multicol = glamorous['Multicol'];
var Nav = glamorous['Nav'];
var Nextid = glamorous['Nextid'];
var Nobr = glamorous['Nobr'];
var Noembed = glamorous['Noembed'];
var Noframes = glamorous['Noframes'];
var Noscript = glamorous['Noscript'];
var ObjectTag = glamorous['Object'];
var Ol = glamorous['Ol'];
var Optgroup = glamorous['Optgroup'];
var Option = glamorous['Option'];
var Output = glamorous['Output'];
var P = glamorous['P'];
var Param = glamorous['Param'];
var Picture = glamorous['Picture'];
var Plaintext = glamorous['Plaintext'];
var Pre = glamorous['Pre'];
var Progress = glamorous['Progress'];
var Q = glamorous['Q'];
var Rb = glamorous['Rb'];
var Rbc = glamorous['Rbc'];
var Rp = glamorous['Rp'];
var Rt = glamorous['Rt'];
var Rtc = glamorous['Rtc'];
var Ruby = glamorous['Ruby'];
var S = glamorous['S'];
var Samp = glamorous['Samp'];
var Script = glamorous['Script'];
var Section = glamorous['Section'];
var Select = glamorous['Select'];
var Shadow = glamorous['Shadow'];
var Slot = glamorous['Slot'];
var Small = glamorous['Small'];
var Source = glamorous['Source'];
var Spacer = glamorous['Spacer'];
var Span = glamorous['Span'];
var Strike = glamorous['Strike'];
var Strong = glamorous['Strong'];
var Style = glamorous['Style'];
var Sub = glamorous['Sub'];
var Summary = glamorous['Summary'];
var Sup = glamorous['Sup'];
var Svg = glamorous['Svg'];
var Table = glamorous['Table'];
var Tbody = glamorous['Tbody'];
var Td = glamorous['Td'];
var Template = glamorous['Template'];
var Textarea = glamorous['Textarea'];
var Tfoot = glamorous['Tfoot'];
var Th = glamorous['Th'];
var Thead = glamorous['Thead'];
var Time = glamorous['Time'];
var Title = glamorous['Title'];
var Tr = glamorous['Tr'];
var Track = glamorous['Track'];
var Tt = glamorous['Tt'];
var U = glamorous['U'];
var Ul = glamorous['Ul'];
var Var = glamorous['Var'];
var Video = glamorous['Video'];
var Wbr = glamorous['Wbr'];
var Xmp = glamorous['Xmp'];
var AltGlyph = glamorous['AltGlyph'];
var AltGlyphDef = glamorous['AltGlyphDef'];
var AltGlyphItem = glamorous['AltGlyphItem'];
var Animate = glamorous['Animate'];
var AnimateColor = glamorous['AnimateColor'];
var AnimateMotion = glamorous['AnimateMotion'];
var AnimateTransform = glamorous['AnimateTransform'];
var Animation = glamorous['Animation'];
var Circle = glamorous['Circle'];
var ClipPath = glamorous['ClipPath'];
var ColorProfile = glamorous['Color-profile'];
var Cursor = glamorous['Cursor'];
var Defs = glamorous['Defs'];
var Desc = glamorous['Desc'];
var Discard = glamorous['Discard'];
var Ellipse = glamorous['Ellipse'];
var FeBlend = glamorous['FeBlend'];
var FeColorMatrix = glamorous['FeColorMatrix'];
var FeComponentTransfer = glamorous['FeComponentTransfer'];
var FeComposite = glamorous['FeComposite'];
var FeConvolveMatrix = glamorous['FeConvolveMatrix'];
var FeDiffuseLighting = glamorous['FeDiffuseLighting'];
var FeDisplacementMap = glamorous['FeDisplacementMap'];
var FeDistantLight = glamorous['FeDistantLight'];
var FeDropShadow = glamorous['FeDropShadow'];
var FeFlood = glamorous['FeFlood'];
var FeFuncA = glamorous['FeFuncA'];
var FeFuncB = glamorous['FeFuncB'];
var FeFuncG = glamorous['FeFuncG'];
var FeFuncR = glamorous['FeFuncR'];
var FeGaussianBlur = glamorous['FeGaussianBlur'];
var FeImage = glamorous['FeImage'];
var FeMerge = glamorous['FeMerge'];
var FeMergeNode = glamorous['FeMergeNode'];
var FeMorphology = glamorous['FeMorphology'];
var FeOffset = glamorous['FeOffset'];
var FePointLight = glamorous['FePointLight'];
var FeSpecularLighting = glamorous['FeSpecularLighting'];
var FeSpotLight = glamorous['FeSpotLight'];
var FeTile = glamorous['FeTile'];
var FeTurbulence = glamorous['FeTurbulence'];
var Filter = glamorous['Filter'];
var FontFace = glamorous['Font-face'];
var FontFaceFormat = glamorous['Font-face-format'];
var FontFaceName = glamorous['Font-face-name'];
var FontFaceSrc = glamorous['Font-face-src'];
var FontFaceUri = glamorous['Font-face-uri'];
var ForeignObject = glamorous['ForeignObject'];
var G = glamorous['G'];
var Glyph = glamorous['Glyph'];
var GlyphRef = glamorous['GlyphRef'];
var Handler = glamorous['Handler'];
var Hatch = glamorous['Hatch'];
var Hatchpath = glamorous['Hatchpath'];
var Hkern = glamorous['Hkern'];
var Line = glamorous['Line'];
var LinearGradient = glamorous['LinearGradient'];
var Listener = glamorous['Listener'];
var Marker = glamorous['Marker'];
var Mask = glamorous['Mask'];
var Mesh = glamorous['Mesh'];
var Meshgradient = glamorous['Meshgradient'];
var Meshpatch = glamorous['Meshpatch'];
var Meshrow = glamorous['Meshrow'];
var Metadata = glamorous['Metadata'];
var MissingGlyph = glamorous['Missing-glyph'];
var Mpath = glamorous['Mpath'];
var Path = glamorous['Path'];
var Pattern = glamorous['Pattern'];
var Polygon = glamorous['Polygon'];
var Polyline = glamorous['Polyline'];
var Prefetch = glamorous['Prefetch'];
var RadialGradient = glamorous['RadialGradient'];
var Rect = glamorous['Rect'];
var SetTag = glamorous['Set'];
var SolidColor = glamorous['SolidColor'];
var Solidcolor = glamorous['Solidcolor'];
var Stop = glamorous['Stop'];
var Switch = glamorous['Switch'];
var SymbolTag = glamorous['Symbol'];
var Tbreak = glamorous['Tbreak'];
var Text = glamorous['Text'];
var TextArea = glamorous['TextArea'];
var TextPath = glamorous['TextPath'];
var Tref = glamorous['Tref'];
var Tspan = glamorous['Tspan'];
var Unknown = glamorous['Unknown'];
var Use = glamorous['Use'];
var View = glamorous['View'];
var Vkern = glamorous['Vkern'];


/* harmony default export */ __webpack_exports__["default"] = (glamorous);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.merge = exports.$ = exports.style = exports.presets = exports.keyframes = exports.fontFace = exports.insertGlobal = exports.insertRule = exports.plugins = exports.styleSheet = undefined;
exports.speedy = speedy;
exports.simulations = simulations;
exports.simulate = simulate;
exports.cssLabels = cssLabels;
exports.isLikeRule = isLikeRule;
exports.idFor = idFor;
exports.css = css;
exports.rehydrate = rehydrate;
exports.flush = flush;
exports.select = select;
exports.parent = parent;
exports.media = media;
exports.pseudo = pseudo;
exports.active = active;
exports.any = any;
exports.checked = checked;
exports.disabled = disabled;
exports.empty = empty;
exports.enabled = enabled;
exports._default = _default;
exports.first = first;
exports.firstChild = firstChild;
exports.firstOfType = firstOfType;
exports.fullscreen = fullscreen;
exports.focus = focus;
exports.hover = hover;
exports.indeterminate = indeterminate;
exports.inRange = inRange;
exports.invalid = invalid;
exports.lastChild = lastChild;
exports.lastOfType = lastOfType;
exports.left = left;
exports.link = link;
exports.onlyChild = onlyChild;
exports.onlyOfType = onlyOfType;
exports.optional = optional;
exports.outOfRange = outOfRange;
exports.readOnly = readOnly;
exports.readWrite = readWrite;
exports.required = required;
exports.right = right;
exports.root = root;
exports.scope = scope;
exports.target = target;
exports.valid = valid;
exports.visited = visited;
exports.dir = dir;
exports.lang = lang;
exports.not = not;
exports.nthChild = nthChild;
exports.nthLastChild = nthLastChild;
exports.nthLastOfType = nthLastOfType;
exports.nthOfType = nthOfType;
exports.after = after;
exports.before = before;
exports.firstLetter = firstLetter;
exports.firstLine = firstLine;
exports.selection = selection;
exports.backdrop = backdrop;
exports.placeholder = placeholder;
exports.cssFor = cssFor;
exports.attribsFor = attribsFor;

var _objectAssign = __webpack_require__(1);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _sheet = __webpack_require__(50);

var _CSSPropertyOperations = __webpack_require__(21);

var _clean = __webpack_require__(54);

var _clean2 = _interopRequireDefault(_clean);

var _plugins = __webpack_require__(55);

var _hash = __webpack_require__(72);

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/* stylesheet */


var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
// an isomorphic StyleSheet shim. hides all the nitty gritty.

// /**************** LIFTOFF IN 3... 2... 1... ****************/
styleSheet.inject(); //eslint-disable-line indent
// /****************      TO THE MOOOOOOON     ****************/

// convenience function to toggle speedy
function speedy(bool) {
  return styleSheet.speedy(bool);
}

// plugins
// we include these by default
var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet([_plugins.prefixes, _plugins.contentWrap, _plugins.fallbacks]);
plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
plugins.fontFace = new _plugins.PluginSet();
plugins.keyframes = new _plugins.PluginSet([_plugins.prefixes, _plugins.fallbacks]);

// define some constants

var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
var isTest = process.env.NODE_ENV === 'test';
var isBrowser = typeof window !== 'undefined';

/**** simulations  ****/

// a flag to enable simulation meta tags on dom nodes
// defaults to true in dev mode. recommend *not* to
// toggle often.
var canSimulate = isDev;

// we use these flags for issuing warnings when simulate is called
// in prod / in incorrect order
var warned1 = false,
    warned2 = false;

// toggles simulation activity. shouldn't be needed in most cases
function simulations() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  canSimulate = !!bool;
}

// use this on dom nodes to 'simulate' pseudoclasses
// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
// you can even send in some weird ones, as long as it's in simple format
// and matches an existing rule on the element
// eg simulate('nthChild2', ':hover:active') etc
function simulate() {
  for (var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++) {
    pseudos[_key] = arguments[_key];
  }

  pseudos = (0, _clean2.default)(pseudos);
  if (!pseudos) return {};
  if (!canSimulate) {
    if (!warned1) {
      console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
      warned1 = true;
    }
    if (!isDev && !isTest && !warned2) {
      console.warn('don\'t use simulation outside dev'); //eslint-disable-line no-console
      warned2 = true;
    }
    return {};
  }
  return pseudos.reduce(function (o, p) {
    return o['data-simulate-' + simple(p)] = '', o;
  }, {});
}

/**** labels ****/
// toggle for debug labels.
// *shouldn't* have to mess with this manually
var hasLabels = isDev;

function cssLabels(bool) {
  hasLabels = !!bool;
}

// takes a string, converts to lowercase, strips out nonalphanumeric.
function simple(str) {
  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return str.toLowerCase().replace(/[^a-z0-9]/g, char);
}

// hashes a string to something 'unique'
// we use this to generate ids for styles


function hashify(obj) {
  var str = JSON.stringify(obj);
  var toRet = (0, _hash2.default)(str).toString(36);
  if (obj.label && obj.label.length > 0 && isDev) {
    return simple(obj.label.join('.'), '-') + '-' + toRet;
  }
  return toRet;
}

// of shape { 'data-css-<id>': '' }
function isLikeRule(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) {
    return false;
  }
  return !!/data\-css\-([a-zA-Z0-9\-_]+)/.exec(keys[0]);
}

// extracts id from a { 'data-css-<id>': ''} like object
function idFor(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) throw new Error('not a rule');
  var regex = /data\-css\-([a-zA-Z0-9\-_]+)/;
  var match = regex.exec(keys[0]);
  if (!match) throw new Error('not a rule');
  return match[1];
}

// from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  if (selector.indexOf(',') === -1) {
    return [selector];
  }

  var indices = [],
      res = [],
      inParen = 0,
      o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
    /*eslint-enable no-cond-assign*/
    switch (o[0]) {
      case '(':
        inParen++;break;
      case ')':
        inParen--;break;
      case ',':
        if (inParen) break;indices.push(o.index);
    }
  }
  for (o = indices.length; o--;) {
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res;
}

function selector(id, path) {
  if (!id) {
    return path.replace(/\&/g, '');
  }
  if (!path) return '.css-' + id + ',[data-css-' + id + ']';

  var x = splitSelector(path).map(function (x) {
    return x.indexOf('&') >= 0 ? [x.replace(/\&/mg, '.css-' + id), x.replace(/\&/mg, '[data-css-' + id + ']')].join(',') // todo - make sure each sub selector has an &
    : '.css-' + id + x + ',[data-css-' + id + ']' + x;
  }).join(',');

  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
    x += ',.css-' + id + '[data-simulate-' + simple(path) + '],[data-css-' + id + '][data-simulate-' + simple(path) + ']';
  }
  return x;
}

// end https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61


function toCSS(_ref) {
  var selector = _ref.selector,
      style = _ref.style;

  var result = plugins.transform({ selector: selector, style: style });
  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
}

function deconstruct(style) {
  // we can be sure it's not infinitely nested here
  var plain = void 0,
      selects = void 0,
      medias = void 0,
      supports = void 0;
  Object.keys(style).forEach(function (key) {
    if (key.indexOf('&') >= 0) {
      selects = selects || {};
      selects[key] = style[key];
    } else if (key.indexOf('@media') === 0) {
      medias = medias || {};
      medias[key] = deconstruct(style[key]);
    } else if (key.indexOf('@supports') === 0) {
      supports = supports || {};
      supports[key] = deconstruct(style[key]);
    } else if (key === 'label') {
      if (style.label.length > 0) {
        plain = plain || {};
        plain.label = hasLabels ? style.label.join('.') : '';
      }
    } else {
      plain = plain || {};
      plain[key] = style[key];
    }
  });
  return { plain: plain, selects: selects, medias: medias, supports: supports };
}

function deconstructedStyleToCSS(id, style) {
  var css = [];

  // plugins here
  var plain = style.plain,
      selects = style.selects,
      medias = style.medias,
      supports = style.supports;

  if (plain) {
    css.push(toCSS({ style: plain, selector: selector(id) }));
  }
  if (selects) {
    Object.keys(selects).forEach(function (key) {
      return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
    });
  }
  if (medias) {
    Object.keys(medias).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, medias[key]).join('') + '}');
    });
  }
  if (supports) {
    Object.keys(supports).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, supports[key]).join('') + '}');
    });
  }
  return css;
}

// this cache to track which rules have
// been inserted into the stylesheet
var inserted = styleSheet.inserted = {};

// and helpers to insert rules into said styleSheet
function insert(spec) {
  if (!inserted[spec.id]) {
    inserted[spec.id] = true;
    var deconstructed = deconstruct(spec.style);
    var rules = deconstructedStyleToCSS(spec.id, deconstructed);
    inserted[spec.id] = isBrowser ? true : rules;
    rules.forEach(function (cssRule) {
      return styleSheet.insert(cssRule);
    });
  }
}

// a simple cache to store generated rules
var registered = styleSheet.registered = {};
function register(spec) {
  if (!registered[spec.id]) {
    registered[spec.id] = spec;
  }
}

function _getRegistered(rule) {
  if (isLikeRule(rule)) {
    var ret = registered[idFor(rule)];
    if (ret == null) {
      throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
    }
    return ret;
  }
  return rule;
}

// todo - perf
var ruleCache = {};
function toRule(spec) {
  register(spec);
  insert(spec);

  if (ruleCache[spec.id]) {
    return ruleCache[spec.id];
  }

  var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
  Object.defineProperty(ret, 'toString', {
    enumerable: false, value: function value() {
      return 'css-' + spec.id;
    }
  });
  ruleCache[spec.id] = ret;
  return ret;
}

function log() {
  //eslint-disable-line no-unused-vars
  console.log(this); //eslint-disable-line no-console
  return this;
}

function isSelector(key) {
  var possibles = [':', '.', '[', '>', ' '],
      found = false,
      ch = key.charAt(0);
  for (var i = 0; i < possibles.length; i++) {
    if (ch === possibles[i]) {
      found = true;
      break;
    }
  }
  return found || key.indexOf('&') >= 0;
}

function joinSelectors(a, b) {
  var as = splitSelector(a).map(function (a) {
    return !(a.indexOf('&') >= 0) ? '&' + a : a;
  });
  var bs = splitSelector(b).map(function (b) {
    return !(b.indexOf('&') >= 0) ? '&' + b : b;
  });

  return bs.reduce(function (arr, b) {
    return arr.concat(as.map(function (a) {
      return b.replace(/\&/g, a);
    }));
  }, []).join(',');
}

function joinMediaQueries(a, b) {
  return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
}

function isMediaQuery(key) {
  return key.indexOf('@media') === 0;
}

function isSupports(key) {
  return key.indexOf('@supports') === 0;
}

function joinSupports(a, b) {
  return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
}

// flatten a nested array
function flatten(inArr) {
  var arr = [];
  for (var i = 0; i < inArr.length; i++) {
    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
  }
  return arr;
}

var prefixedPseudoSelectors = {
  '::placeholder': ['::-webkit-input-placeholder', '::-moz-placeholder', '::-ms-input-placeholder'],
  ':fullscreen': [':-webkit-full-screen', ':-moz-full-screen', ':-ms-fullscreen']

  // mutable! modifies dest.
};function build(dest, _ref2) {
  var _ref2$selector = _ref2.selector,
      selector = _ref2$selector === undefined ? '' : _ref2$selector,
      _ref2$mq = _ref2.mq,
      mq = _ref2$mq === undefined ? '' : _ref2$mq,
      _ref2$supp = _ref2.supp,
      supp = _ref2$supp === undefined ? '' : _ref2$supp,
      _ref2$src = _ref2.src,
      src = _ref2$src === undefined ? {} : _ref2$src;


  if (!Array.isArray(src)) {
    src = [src];
  }
  src = flatten(src);

  src.forEach(function (_src) {
    if (isLikeRule(_src)) {
      var reg = _getRegistered(_src);
      if (reg.type !== 'css') {
        throw new Error('cannot merge this rule');
      }
      _src = reg.style;
    }
    _src = (0, _clean2.default)(_src);
    if (_src && _src.composes) {
      build(dest, { selector: selector, mq: mq, supp: supp, src: _src.composes });
    }
    Object.keys(_src || {}).forEach(function (key) {
      if (isSelector(key)) {

        if (prefixedPseudoSelectors[key]) {
          prefixedPseudoSelectors[key].forEach(function (p) {
            return build(dest, { selector: joinSelectors(selector, p), mq: mq, supp: supp, src: _src[key] });
          });
        }

        build(dest, { selector: joinSelectors(selector, key), mq: mq, supp: supp, src: _src[key] });
      } else if (isMediaQuery(key)) {
        build(dest, { selector: selector, mq: joinMediaQueries(mq, key), supp: supp, src: _src[key] });
      } else if (isSupports(key)) {
        build(dest, { selector: selector, mq: mq, supp: joinSupports(supp, key), src: _src[key] });
      } else if (key === 'composes') {
        // ignore, we already dealth with it
      } else {
        var _dest = dest;
        if (supp) {
          _dest[supp] = _dest[supp] || {};
          _dest = _dest[supp];
        }
        if (mq) {
          _dest[mq] = _dest[mq] || {};
          _dest = _dest[mq];
        }
        if (selector) {
          _dest[selector] = _dest[selector] || {};
          _dest = _dest[selector];
        }

        if (key === 'label') {
          if (hasLabels) {
            dest.label = dest.label.concat(_src.label);
          }
        } else {
          _dest[key] = _src[key];
        }
      }
    });
  });
}

function _css(rules) {
  var style = { label: [] };
  build(style, { src: rules }); // mutative! but worth it.

  var spec = {
    id: hashify(style),
    style: style, label: hasLabels ? style.label.join('.') : '',
    type: 'css'
  };
  return toRule(spec);
}

var nullrule = {
  // 'data-css-nil': ''
};
Object.defineProperty(nullrule, 'toString', {
  enumerable: false, value: function value() {
    return 'css-nil';
  }
});

var inputCaches = typeof WeakMap !== 'undefined' ? [nullrule, new WeakMap(), new WeakMap(), new WeakMap()] : [nullrule];

var warnedWeakMapError = false;
function multiIndexCache(fn) {
  return function (args) {
    if (inputCaches[args.length]) {
      var coi = inputCaches[args.length];
      var ctr = 0;
      while (ctr < args.length - 1) {
        if (!coi.has(args[ctr])) {
          coi.set(args[ctr], new WeakMap());
        }
        coi = coi.get(args[ctr]);
        ctr++;
      }
      if (coi.has(args[args.length - 1])) {
        var ret = coi.get(args[ctr]);

        if (registered[ret.toString().substring(4)]) {
          // make sure it hasn't been flushed
          return ret;
        }
      }
    }
    var value = fn(args);
    if (inputCaches[args.length]) {
      var _ctr = 0,
          _coi = inputCaches[args.length];
      while (_ctr < args.length - 1) {
        _coi = _coi.get(args[_ctr]);
        _ctr++;
      }
      try {
        _coi.set(args[_ctr], value);
      } catch (err) {
        if (isDev && !warnedWeakMapError) {
          var _console;

          warnedWeakMapError = true;
          (_console = console).warn.apply(_console, ['failed setting the WeakMap cache for args:'].concat(_toConsumableArray(args))); // eslint-disable-line no-console
          console.warn('this should NOT happen, please file a bug on the github repo.'); // eslint-disable-line no-console
        }
      }
    }
    return value;
  };
}

var cachedCss = typeof WeakMap !== 'undefined' ? multiIndexCache(_css) : _css;

function css() {
  for (var _len2 = arguments.length, rules = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rules[_key2] = arguments[_key2];
  }

  if (rules[0] && rules[0].length && rules[0].raw) {
    throw new Error('you forgot to include glamor/babel in your babel plugins.');
  }

  rules = (0, _clean2.default)(rules);
  if (!rules) {
    return nullrule;
  }

  return cachedCss(rules);
}

css.insert = function (css) {
  var spec = {
    id: hashify(css),
    css: css,
    type: 'raw'
  };
  register(spec);
  if (!inserted[spec.id]) {
    styleSheet.insert(spec.css);
    inserted[spec.id] = isBrowser ? true : [spec.css];
  }
};

var insertRule = exports.insertRule = css.insert;

css.global = function (selector, style) {
  style = (0, _clean2.default)(style);
  if (style) {
    return css.insert(toCSS({ selector: selector, style: style }));
  }
};

var insertGlobal = exports.insertGlobal = css.global;

function insertKeyframe(spec) {
  if (!inserted[spec.id]) {
    var inner = Object.keys(spec.keyframes).map(function (kf) {
      var result = plugins.keyframes.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
      return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
    }).join('');

    var rules = ['-webkit-', '-moz-', '-o-', ''].map(function (prefix) {
      return '@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}';
    });
    rules.forEach(function (rule) {
      return styleSheet.insert(rule);
    });

    inserted[spec.id] = isBrowser ? true : rules;
  }
}
css.keyframes = function (name, kfs) {
  if (!kfs) {
    kfs = name, name = 'animation';
  }

  // do not ignore empty keyframe definitions for now.
  kfs = (0, _clean2.default)(kfs) || {};
  var spec = {
    id: hashify({ name: name, kfs: kfs }),
    type: 'keyframes',
    name: name,
    keyframes: kfs
  };
  register(spec);
  insertKeyframe(spec);
  return name + '_' + spec.id;
};

// we don't go all out for fonts as much, giving a simple font loading strategy
// use a fancier lib if you need moar power
css.fontFace = function (font) {
  font = (0, _clean2.default)(font);
  var spec = {
    id: hashify(font),
    type: 'font-face',
    font: font
  };
  register(spec);
  insertFontFace(spec);

  return font.fontFamily;
};

var fontFace = exports.fontFace = css.fontFace;
var keyframes = exports.keyframes = css.keyframes;

function insertFontFace(spec) {
  if (!inserted[spec.id]) {
    var rule = '@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}';
    styleSheet.insert(rule);
    inserted[spec.id] = isBrowser ? true : [rule];
  }
}

// rehydrate the insertion cache with ids sent from
// renderStatic / renderStaticOptimized
function rehydrate(ids) {
  // load up ids
  (0, _objectAssign2.default)(inserted, ids.reduce(function (o, i) {
    return o[i] = true, o;
  }, {}));
  // assume css loaded separately
}

// clears out the cache and empties the stylesheet
// best for tests, though there might be some value for SSR.

function flush() {
  inserted = styleSheet.inserted = {};
  registered = styleSheet.registered = {};
  ruleCache = {};
  styleSheet.flush();
  styleSheet.inject();
}

var presets = exports.presets = {
  mobile: '(min-width: 400px)',
  Mobile: '@media (min-width: 400px)',
  phablet: '(min-width: 550px)',
  Phablet: '@media (min-width: 550px)',
  tablet: '(min-width: 750px)',
  Tablet: '@media (min-width: 750px)',
  desktop: '(min-width: 1000px)',
  Desktop: '@media (min-width: 1000px)',
  hd: '(min-width: 1200px)',
  Hd: '@media (min-width: 1200px)'
};

var style = exports.style = css;

function select(selector) {
  for (var _len3 = arguments.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    styles[_key3 - 1] = arguments[_key3];
  }

  if (!selector) {
    return style(styles);
  }
  return css(_defineProperty({}, selector, styles));
}
var $ = exports.$ = select;

function parent(selector) {
  for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    styles[_key4 - 1] = arguments[_key4];
  }

  return css(_defineProperty({}, selector + ' &', styles));
}

var merge = exports.merge = css;
var compose = exports.compose = css;

function media(query) {
  for (var _len5 = arguments.length, rules = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    rules[_key5 - 1] = arguments[_key5];
  }

  return css(_defineProperty({}, '@media ' + query, rules));
}

function pseudo(selector) {
  for (var _len6 = arguments.length, styles = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    styles[_key6 - 1] = arguments[_key6];
  }

  return css(_defineProperty({}, selector, styles));
}

// allllll the pseudoclasses

function active(x) {
  return pseudo(':active', x);
}

function any(x) {
  return pseudo(':any', x);
}

function checked(x) {
  return pseudo(':checked', x);
}

function disabled(x) {
  return pseudo(':disabled', x);
}

function empty(x) {
  return pseudo(':empty', x);
}

function enabled(x) {
  return pseudo(':enabled', x);
}

function _default(x) {
  return pseudo(':default', x); // note '_default' name
}

function first(x) {
  return pseudo(':first', x);
}

function firstChild(x) {
  return pseudo(':first-child', x);
}

function firstOfType(x) {
  return pseudo(':first-of-type', x);
}

function fullscreen(x) {
  return pseudo(':fullscreen', x);
}

function focus(x) {
  return pseudo(':focus', x);
}

function hover(x) {
  return pseudo(':hover', x);
}

function indeterminate(x) {
  return pseudo(':indeterminate', x);
}

function inRange(x) {
  return pseudo(':in-range', x);
}

function invalid(x) {
  return pseudo(':invalid', x);
}

function lastChild(x) {
  return pseudo(':last-child', x);
}

function lastOfType(x) {
  return pseudo(':last-of-type', x);
}

function left(x) {
  return pseudo(':left', x);
}

function link(x) {
  return pseudo(':link', x);
}

function onlyChild(x) {
  return pseudo(':only-child', x);
}

function onlyOfType(x) {
  return pseudo(':only-of-type', x);
}

function optional(x) {
  return pseudo(':optional', x);
}

function outOfRange(x) {
  return pseudo(':out-of-range', x);
}

function readOnly(x) {
  return pseudo(':read-only', x);
}

function readWrite(x) {
  return pseudo(':read-write', x);
}

function required(x) {
  return pseudo(':required', x);
}

function right(x) {
  return pseudo(':right', x);
}

function root(x) {
  return pseudo(':root', x);
}

function scope(x) {
  return pseudo(':scope', x);
}

function target(x) {
  return pseudo(':target', x);
}

function valid(x) {
  return pseudo(':valid', x);
}

function visited(x) {
  return pseudo(':visited', x);
}

// parameterized pseudoclasses
function dir(p, x) {
  return pseudo(':dir(' + p + ')', x);
}
function lang(p, x) {
  return pseudo(':lang(' + p + ')', x);
}
function not(p, x) {
  // should this be a plugin?
  var selector = p.split(',').map(function (x) {
    return x.trim();
  }).map(function (x) {
    return ':not(' + x + ')';
  });
  if (selector.length === 1) {
    return pseudo(':not(' + p + ')', x);
  }
  return select(selector.join(''), x);
}
function nthChild(p, x) {
  return pseudo(':nth-child(' + p + ')', x);
}
function nthLastChild(p, x) {
  return pseudo(':nth-last-child(' + p + ')', x);
}
function nthLastOfType(p, x) {
  return pseudo(':nth-last-of-type(' + p + ')', x);
}
function nthOfType(p, x) {
  return pseudo(':nth-of-type(' + p + ')', x);
}

// pseudoelements
function after(x) {
  return pseudo('::after', x);
}
function before(x) {
  return pseudo('::before', x);
}
function firstLetter(x) {
  return pseudo('::first-letter', x);
}
function firstLine(x) {
  return pseudo('::first-line', x);
}
function selection(x) {
  return pseudo('::selection', x);
}
function backdrop(x) {
  return pseudo('::backdrop', x);
}
function placeholder(x) {
  // https://github.com/threepointone/glamor/issues/14
  return css({ '::placeholder': x });
}

/*** helpers for web components ***/
// https://github.com/threepointone/glamor/issues/16

function cssFor() {
  for (var _len7 = arguments.length, rules = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    rules[_key7] = arguments[_key7];
  }

  rules = (0, _clean2.default)(rules);
  return rules ? rules.map(function (r) {
    var style = { label: [] };
    build(style, { src: r }); // mutative! but worth it.
    return deconstructedStyleToCSS(hashify(style), deconstruct(style)).join('');
  }).join('') : '';
}

function attribsFor() {
  for (var _len8 = arguments.length, rules = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    rules[_key8] = arguments[_key8];
  }

  rules = (0, _clean2.default)(rules);
  var htmlAttributes = rules ? rules.map(function (rule) {
    idFor(rule); // throwaway check for rule
    var key = Object.keys(rule)[0],
        value = rule[key];
    return key + '="' + (value || '') + '"';
  }).join(' ') : '';

  return htmlAttributes;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleSheet = StyleSheet;

var _objectAssign = __webpack_require__(1);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* 

high performance StyleSheet for css-in-js systems 

- uses multiple style tags behind the scenes for millions of rules 
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side 


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject() 
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }') 
- appends a css rule into the stylesheet 

styleSheet.flush() 
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }

  // this weirdness brought to you by firefox 
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isBrowser = typeof window !== 'undefined';
var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV; //(x => (x === 'development') || !x)(process.env.NODE_ENV)
var isTest = process.env.NODE_ENV === 'test';

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-glamor', '');
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

function StyleSheet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$speedy = _ref.speedy,
      speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

  this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
  this.sheet = undefined;
  this.tags = [];
  this.maxLength = maxLength;
  this.ctr = 0;
}

(0, _objectAssign2.default)(StyleSheet.prototype, {
  getSheet: function getSheet() {
    return sheetForTag(last(this.tags));
  },
  inject: function inject() {
    var _this = this;

    if (this.injected) {
      throw new Error('already injected stylesheet!');
    }
    if (isBrowser) {
      this.tags[0] = makeStyleTag();
    } else {
      // server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [],
        insertRule: function insertRule(rule) {
          // enough 'spec compliance' to be able to extract the rules later  
          // in other words, just the cssText field 
          _this.sheet.cssRules.push({ cssText: rule });
        }
      };
    }
    this.injected = true;
  },
  speedy: function speedy(bool) {
    if (this.ctr !== 0) {
      throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
    }
    this.isSpeedy = !!bool;
  },
  _insert: function _insert(rule) {
    // this weirdness for perf, and chrome's weird bug 
    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
    try {
      var sheet = this.getSheet();
      sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
    } catch (e) {
      if (isDev) {
        // might need beter dx for this 
        console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
      }
    }
  },
  insert: function insert(rule) {

    if (isBrowser) {
      // this is the ultrafast version, works across browsers 
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule);
      }
      // more browser weirdness. I don't even know    
      // else if(this.tags.length > 0 && this.tags::last().styleSheet) {      
      //   this.tags::last().styleSheet.cssText+= rule
      // }
      else {
          if (rule.indexOf('@import') !== -1) {
            var tag = last(this.tags);
            tag.insertBefore(document.createTextNode(rule), tag.firstChild);
          } else {
            last(this.tags).appendChild(document.createTextNode(rule));
          }
        }
    } else {
      // server side is pretty simple         
      this.sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : this.sheet.cssRules.length);
    }

    this.ctr++;
    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag());
    }
    return this.ctr - 1;
  },

  // commenting this out till we decide on v3's decision 
  // _replace(index, rule) {
  //   // this weirdness for perf, and chrome's weird bug 
  //   // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
  //   try {  
  //     let sheet = this.getSheet()        
  //     sheet.deleteRule(index) // todo - correct index here     
  //     sheet.insertRule(rule, index)
  //   }
  //   catch(e) {
  //     if(isDev) {
  //       // might need beter dx for this 
  //       console.warn('whoops, problem replacing rule', rule) //eslint-disable-line no-console
  //     }          
  //   }          

  // }
  // replace(index, rule) {
  //   if(isBrowser) {
  //     if(this.isSpeedy && this.getSheet().insertRule) {
  //       this._replace(index, rule)
  //     }
  //     else {
  //       let _slot = Math.floor((index  + this.maxLength) / this.maxLength) - 1        
  //       let _index = (index % this.maxLength) + 1
  //       let tag = this.tags[_slot]
  //       tag.replaceChild(document.createTextNode(rule), tag.childNodes[_index])
  //     }
  //   }
  //   else {
  //     let rules = this.sheet.cssRules
  //     this.sheet.cssRules = [ ...rules.slice(0, index), { cssText: rule }, ...rules.slice(index + 1) ]
  //   }
  // }
  delete: function _delete(index) {
    // we insert a blank rule when 'deleting' so previously returned indexes remain stable
    return this.replace(index, '');
  },
  flush: function flush() {
    if (isBrowser) {
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.sheet = null;
      this.ctr = 0;
      // todo - look for remnants in document.styleSheets
    } else {
      // simpler on server 
      this.sheet.cssRules = [];
    }
    this.injected = false;
  },
  rules: function rules() {
    if (!isBrowser) {
      return this.sheet.cssRules;
    }
    var arr = [];
    this.tags.forEach(function (tag) {
      return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
    });
    return arr;
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSProperty = __webpack_require__(52);

var _CSSProperty2 = _interopRequireDefault(_CSSProperty);

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */

var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (process.env.NODE_ENV !== 'production') {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

exports.default = dangerousStyleValue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true

  /**
   * @param {string} prefix vendor-specific prefix, eg: Webkit
   * @param {string} key style name, eg: transitionDuration
   * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
   * WebkitTransitionDuration
   */
};function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

exports.default = CSSProperty;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = clean;
// Returns true for null, false, undefined and {}
function isFalsy(value) {
  return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
}

function cleanObject(object) {
  if (isFalsy(object)) return null;
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;

  var acc = {},
      keys = Object.keys(object),
      hasFalsy = false;
  for (var i = 0; i < keys.length; i++) {
    var value = object[keys[i]];
    var filteredValue = clean(value);
    if (filteredValue === null || filteredValue !== value) {
      hasFalsy = true;
    }
    if (filteredValue !== null) {
      acc[keys[i]] = filteredValue;
    }
  }
  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
}

function cleanArray(rules) {
  var hasFalsy = false;
  var filtered = [];
  rules.forEach(function (rule) {
    var filteredRule = clean(rule);
    if (filteredRule === null || filteredRule !== rule) {
      hasFalsy = true;
    }
    if (filteredRule !== null) {
      filtered.push(filteredRule);
    }
  });
  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
}

// Takes style array or object provided by user and clears all the falsy data 
// If there is no styles left after filtration returns null
function clean(input) {
  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.PluginSet = PluginSet;
exports.fallbacks = fallbacks;
exports.contentWrap = contentWrap;
exports.prefixes = prefixes;

var _objectAssign = __webpack_require__(1);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _CSSPropertyOperations = __webpack_require__(21);

var _prefixer = __webpack_require__(56);

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDev = function (x) {
  return x === 'development' || !x;
}(process.env.NODE_ENV);

function PluginSet(initial) {
  this.fns = initial || [];
}

(0, _objectAssign2.default)(PluginSet.prototype, {
  add: function add() {
    var _this = this;

    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    fns.forEach(function (fn) {
      if (_this.fns.indexOf(fn) >= 0) {
        if (isDev) {
          console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
        }
      } else {
        _this.fns = [fn].concat(_this.fns);
      }
    });
  },
  remove: function remove(fn) {
    this.fns = this.fns.filter(function (x) {
      return x !== fn;
    });
  },
  clear: function clear() {
    this.fns = [];
  },
  transform: function transform(o) {
    return this.fns.reduce(function (o, fn) {
      return fn(o);
    }, o);
  }
});

function fallbacks(node) {
  var hasArray = Object.keys(node.style).map(function (x) {
    return Array.isArray(node.style[x]);
  }).indexOf(true) >= 0;
  if (hasArray) {
    var style = node.style;

    var flattened = Object.keys(style).reduce(function (o, key) {
      o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
      return o;
    }, {});
    // todo - 
    // flatten arrays which haven't been flattened yet 
    return (0, _objectAssign2.default)({}, node, { style: flattened });
  }
  return node;
}

var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit'];

function contentWrap(node) {
  if (node.style.content) {
    var cont = node.style.content;
    if (contentValues.indexOf(cont) >= 0) {
      return node;
    }
    if (/^(attr|calc|counters?|url)\(/.test(cont)) {
      return node;
    }
    if (cont.charAt(0) === cont.charAt(cont.length - 1) && (cont.charAt(0) === '"' || cont.charAt(0) === "'")) {
      return node;
    }
    return _extends({}, node, { style: _extends({}, node.style, { content: '"' + cont + '"' }) });
  }
  return node;
}

function prefixes(node) {
  return (0, _objectAssign2.default)({}, node, { style: (0, _prefixer2.default)(_extends({}, node.style)) });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixer;

var _staticData = __webpack_require__(57);

var _staticData2 = _interopRequireDefault(_staticData);

var _prefixProperty = __webpack_require__(58);

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(59);

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _cursor = __webpack_require__(60);

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__(61);

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__(62);

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__(63);

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__(64);

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__(65);

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__(66);

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__(67);

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__(68);

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__(69);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default]; // custom facade for inline-style-prefixer

var prefixMap = _staticData2.default.prefixMap;

function prefixer(style) {
  for (var property in style) {
    var value = style[property];

    var processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

    // only modify the value if it was touched
    // by any plugin to prevent unnecessary mutations
    if (processedValue) {
      style[property] = processedValue;
    }

    (0, _prefixProperty2.default)(prefixMap, property, style);
  }
  return style;
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

exports.default = {
  plugins: [],
  prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "writingMode": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
};
module.exports = exports["default"];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(22);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(6);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(6);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(6);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(6);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(70);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(6);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(22);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(71);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doHash;
// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isFunction = function isFunction(input) {
  return typeof input === 'function';
};

exports.default = function (predicate) {
  return function (elemOrThunk) {
    return predicate ? isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk : null;
  };
};

module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(75);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(76);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19), __webpack_require__(0)))

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ })
],[33]);