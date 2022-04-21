/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./src/js/model.js\");\n/* harmony import */ var _views_allTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/allTodos.js */ \"./src/js/views/allTodos.js\");\n\n\n\nconst controlAddTodo = function () {\n\tconst inputText = _views_allTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getQuery();\n\tif (!inputText) return;\n\t// console.log(inputText);\n\t_model_js__WEBPACK_IMPORTED_MODULE_0__.loadInputTodo(inputText);\n\t_views_allTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._init();\n\t_views_allTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(inputText);\n};\n\n(function init() {\n\t// paginationView.addHandlerClick(controlPagination);\n\t_views_allTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addHandlerRender(controlAddTodo);\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/js/controller.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"loadInputTodo\": () => (/* binding */ loadInputTodo),\n/* harmony export */   \"restoreTodos\": () => (/* binding */ restoreTodos),\n/* harmony export */   \"state\": () => (/* binding */ state)\n/* harmony export */ });\nconst state = {\n\ttitle: \"\",\n\tdescription: \"\",\n\tdueDate: \"\",\n\tpriority: \"\",\n};\n\nconst loadInputTodo = function (inputText) {\n\tstate.title = inputText;\n\n\tconsole.log(state.title);\n};\n\nconst deleteTodo = function () {};\n\nconst persistTodos = function () {};\n\nconst restoreTodos = function () {};\n\n\n//# sourceURL=webpack://todo-list/./src/js/model.js?");

/***/ }),

/***/ "./src/js/views/allTodos.js":
/*!**********************************!*\
  !*** ./src/js/views/allTodos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AllTodos {\n\t_parentElement = document.querySelector(\".header__input-box\");\n\t_btn = document.querySelector(\".header__btn-input\");\n\t_input = document.querySelector(\".header__input-field\");\n\t_todoList = document.querySelector(\".todoList\");\n\n\trender(inputText) {\n\t\tconst markup = `\n      <div class=\"todoList__item\">\n        <h5 class=\"todoList__input\">${inputText}</h5>\n      </div>\n    `;\n\t\tthis._todoList.insertAdjacentHTML(\"afterbegin\", markup);\n\t}\n\n\tgetQuery() {\n\t\tconst inputText = this._input.value;\n\t\treturn inputText;\n\t}\n\n\t_init() {\n\t\tthis._input.value = \"\";\n\t}\n\n\taddHandlerRender(handler) {\n\t\tthis._btn.addEventListener(\"click\", handler);\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AllTodos());\n\n\n//# sourceURL=webpack://todo-list/./src/js/views/allTodos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/controller.js");
/******/ 	
/******/ })()
;