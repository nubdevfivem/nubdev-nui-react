"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknubdev_react"] = self["webpackChunknubdev_react"] || []).push([["main"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _nui_useNui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nui/useNui */ \"./src/nui/useNui.ts\");\n/* harmony import */ var _nui_sendNui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nui/sendNui */ \"./src/nui/sendNui.ts\");\n/* harmony import */ var _assets_images_gta_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/gta.jpg */ \"./src/assets/images/gta.jpg\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/context */ \"./src/context/context.tsx\");\n/* harmony import */ var _components_widgets_ButtonChangeTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/widgets/ButtonChangeTheme */ \"./src/components/widgets/ButtonChangeTheme.tsx\");\n\n\nvar _templateObject;\n\n\n\n\n\n\n\nvar App = function App() {\n  var _useStateProvider = (0,_context_context__WEBPACK_IMPORTED_MODULE_6__.useStateProvider)(),\n    state = _useStateProvider.state,\n    dispatch = _useStateProvider.dispatch; /* เก็บ State บน Store คล้ายๆ Redux */\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n    display = _useState2[0],\n    setDisplay = _useState2[1];\n  (0,_nui_useNui__WEBPACK_IMPORTED_MODULE_3__.useNui)('display', function (payload) {\n    if (payload.ui != undefined) {\n      setDisplay(payload.ui);\n    }\n  });\n  var GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.createGlobalStyle)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  body{\\n    display: \", \";\\n    color: \", \";\\n  }\\n\\n  .btn{\\n    background-color: \", \";\\n    color: \", \";\\n    padding: 10px 10px;\\n    margin: 10px auto;\\n    display: block;\\n  }\\n\\n  .container {\\n    background: \", \";\\n  }\\n\"])), display ? 'block' : 'none', state.theme == \"black\" ? \"white\" : \"black\", state.theme == \"black\" ? \"white\" : \"black\", state.theme == \"black\" ? \"black\" : \"white\", state.theme);\n  var set_position_up = function set_position_up() {\n    (0,_nui_sendNui__WEBPACK_IMPORTED_MODULE_4__.fetchNui)('set_position_up');\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"img\", {\n    style: {\n      width: \"100%\"\n    },\n    src: _assets_images_gta_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"h3\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, \"NUBDev React Hot load\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_widgets_ButtonChangeTheme__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"button\", {\n    className: \"btn\",\n    onClick: function onClick() {\n      return set_position_up();\n    }\n  }, \"Set Position Up\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://nubdev_react/./src/App.tsx?");

/***/ }),

/***/ "./src/components/widgets/ButtonChangeTheme.tsx":
/*!******************************************************!*\
  !*** ./src/components/widgets/ButtonChangeTheme.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/context */ \"./src/context/context.tsx\");\n/* harmony import */ var _assets_sounds_click_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sounds/click.wav */ \"./src/assets/sounds/click.wav\");\n\n\n\nvar ButtonChangeTheme = function ButtonChangeTheme() {\n  var _useStateProvider = (0,_context_context__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)(),\n    state = _useStateProvider.state,\n    dispatch = _useStateProvider.dispatch;\n  var play_sound = function play_sound() {\n    var click_sound = new Audio(_assets_sounds_click_wav__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    click_sound.volume = 0.2;\n    click_sound.play();\n  };\n  var onClickChangeTheme = function onClickChangeTheme() {\n    var change_to = state.theme == \"white\" ? \"black\" : \"white\";\n    play_sound();\n    dispatch({\n      /* Update State ใน Store */\n      type: \"SET_THEME\",\n      payload: change_to\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return onClickChangeTheme();\n    },\n    className: \"btn\"\n  }, \"change theme\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonChangeTheme);\n\n//# sourceURL=webpack://nubdev_react/./src/components/widgets/ButtonChangeTheme.tsx?");

/***/ }),

/***/ "./src/context/context.tsx":
/*!*********************************!*\
  !*** ./src/context/context.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": () => (/* binding */ StateContext),\n/* harmony export */   \"StateProvider\": () => (/* binding */ StateProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useStateProvider\": () => (/* binding */ useStateProvider)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/* Context Api State to Store */\n\n\nvar initalState = {\n  theme: 'white'\n};\nvar StateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n  state: initalState,\n  dispatch: function dispatch() {}\n});\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'SET_THEME':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        theme: action.payload\n      });\n    default:\n      throw new Error();\n  }\n};\nvar StateProvider = function StateProvider(props) {\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initalState),\n    _useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useReducer, 2),\n    state = _useReducer2[0],\n    dispatch = _useReducer2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StateContext.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    }\n  }, props.children);\n};\nvar useStateProvider = function useStateProvider() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(StateContext),\n    state = _useContext.state,\n    dispatch = _useContext.dispatch;\n  return {\n    state: state,\n    dispatch: dispatch\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateProvider);\n\n//# sourceURL=webpack://nubdev_react/./src/context/context.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/context */ \"./src/context/context.tsx\");\n/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles/index.css */ \"./src/assets/styles/index.css\");\n/* harmony import */ var _assets_styles_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/styles/index.scss */ \"./src/assets/styles/index.scss\");\n\n\n\n\n\n\nvar root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('nubdev-root'));\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n\n//# sourceURL=webpack://nubdev_react/./src/index.tsx?");

/***/ }),

/***/ "./src/nui/sendNui.ts":
/*!****************************!*\
  !*** ./src/nui/sendNui.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchNui\": () => (/* binding */ fetchNui)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\n\nfunction fetchNui(_x, _x2) {\n  return _fetchNui.apply(this, arguments);\n}\nfunction _fetchNui() {\n  _fetchNui = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(eventName, data) {\n    var resourceName, resp, respFormatted;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          resourceName = window.GetParentResourceName ? window.GetParentResourceName() : 'nui-frame-app';\n          _context.next = 3;\n          return (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://\".concat(resourceName, \"/\").concat(eventName), {\n            method: \"post\",\n            headers: {\n              'Content-Type': 'application/json; charset=UTF-8'\n            },\n            data: JSON.stringify(data)\n          });\n        case 3:\n          resp = _context.sent;\n          _context.next = 6;\n          return resp;\n        case 6:\n          respFormatted = _context.sent;\n          return _context.abrupt(\"return\", respFormatted);\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _fetchNui.apply(this, arguments);\n}\n\n//# sourceURL=webpack://nubdev_react/./src/nui/sendNui.ts?");

/***/ }),

/***/ "./src/nui/useNui.ts":
/*!***************************!*\
  !*** ./src/nui/useNui.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useNui\": () => (/* binding */ useNui)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar useNui = function useNui(action, handler) {\n  var savedHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () {});\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    savedHandler.current = handler;\n  }, [handler]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var eventListener = function eventListener(event) {\n      var _event$data = event.data,\n        eventAction = _event$data.action,\n        payload = _event$data.payload;\n      if (savedHandler.current) {\n        if (eventAction === action) {\n          savedHandler.current(payload);\n        }\n      }\n    };\n    window.addEventListener(\"message\", eventListener);\n    return function () {\n      return window.removeEventListener(\"message\", eventListener);\n    };\n  }, [action]);\n};\n\n//# sourceURL=webpack://nubdev_react/./src/nui/useNui.ts?");

/***/ }),

/***/ "./src/assets/sounds/click.wav":
/*!*************************************!*\
  !*** ./src/assets/sounds/click.wav ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"./__nubdev__/webpack/sounds/click.wav\");\n\n//# sourceURL=webpack://nubdev_react/./src/assets/sounds/click.wav?");

/***/ }),

/***/ "./src/assets/styles/index.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nubdev_react/./src/assets/styles/index.scss?");

/***/ }),

/***/ "./src/assets/styles/index.css":
/*!*************************************!*\
  !*** ./src/assets/styles/index.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nubdev_react/./src/assets/styles/index.css?");

/***/ }),

/***/ "./src/assets/images/gta.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/gta.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"./__nubdev__/webpack/images/gta.06c8b4fbb7352b1de4be2bd5238bdb6e.jpg\");\n\n//# sourceURL=webpack://nubdev_react/./src/assets/images/gta.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["react"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);