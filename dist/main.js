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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./src/js/model.js\");\n/* harmony import */ var _views_viewTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/viewTodos.js */ \"./src/js/views/viewTodos.js\");\n\n\n\nclass Controller {\n\tconstructor() {\n\t\tthis.onTodoListChanged(_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos);\n\t\t_views_viewTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bindAddTodo(this.handleAddTodo);\n\t\t_views_viewTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bindDeleteTodo(this.handleDeleteTodo);\n\n\t\t_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bindTodoListChanged(this.onTodoListChanged);\n\t}\n\n\tonTodoListChanged = (todos) => {\n\t\t_views_viewTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderTodos(todos);\n\t};\n\n\thandleAddTodo = (todoText) => {\n\t\t// console.log(todoText);\n\t\tif (!todoText) return;\n\t\t_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTodo(todoText);\n\t};\n\n\thandleDeleteTodo = (id) => {\n\t\t// console.log(id);\n\t\t_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTodo(id);\n\t};\n}\n\nconst app = new Controller();\n\n\n//# sourceURL=webpack://todo-list/./src/js/controller.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_viewTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/viewTodos */ \"./src/js/views/viewTodos.js\");\n\n\nclass Model {\n\ttodos = [\n\t\t{ id: 1, text: \"Run a marathon\", complete: false },\n\t\t{ id: 2, text: \"Plant a garden\", complete: false },\n\t];\n\n\taddTodo(todoText) {\n\t\tconst todo = {\n\t\t\tid: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,\n\t\t\ttext: todoText,\n\t\t\tcomplete: false,\n\t\t};\n\t\tthis.todos.push(todo);\n\t\tthis.onTodoListChanged(this.todos);\n\t}\n\n\tdeleteTodo(id) {\n\t\tthis.todos = this.todos.filter((todo) => todo.id !== id);\n\t\t_views_viewTodos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTodos(this.todos);\n\t}\n\n\ttoggleTodo() {}\n\n\tbindTodoListChanged(callback) {\n\t\tthis.onTodoListChanged = callback;\n\t}\n\n\tpersistTodos() {}\n\n\trestoreTodos() {}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Model());\n\n\n//# sourceURL=webpack://todo-list/./src/js/model.js?");

/***/ }),

/***/ "./src/js/views/viewTodos.js":
/*!***********************************!*\
  !*** ./src/js/views/viewTodos.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ViewTodos {\n\tbtn = document.querySelector(\".header__btn-input\");\n\tinput = document.querySelector(\".header__input-field\");\n\ttodoList = document.querySelector(\".todoList\");\n\ttodoListItem = document.querySelector(\".todoList__item\");\n\tdeleteBtn = document.querySelector(\".todoList__delete-btn\");\n\ttodoListShbox = document.querySelector(\".todoList__shbox\");\n\n\trenderTodos(todos) {\n\t\twhile (this.todoList.firstChild) {\n\t\t\tthis.todoList.removeChild(this.todoList.firstChild);\n\t\t}\n\n\t\ttodos.forEach((todo) => {\n\t\t\tconst markup = `\n      \t<div class=\"todoList__item\">\n\t\t\t\t\t<div class=\"todoList__fhbox\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"checkbox todoList__checkbox\" id=\"complete\">\n\t\t\t\t\t\t<label class=\"todoList__text editalbe\" contentEditable=\"true\" for=\"complete\">${todo.text}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"todoList__shbox\">\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tsrc=\"../src/images/substract.png\"\n\t\t\t\t\t\t\tweight=\"40\"\n\t\t\t\t\t\t\theight=\"40\"\n\t\t\t\t\t\t\talt=\"Delete button\"\n\t\t\t\t\t\t\tdata-id=${todo.id}\n\t\t\t\t\t\t\tclass=\"todoList__delete-btn delete\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n     \t\t</div>\n\t\t\t`;\n\n\t\t\tthis.todoList.insertAdjacentHTML(\"afterbegin\", markup);\n\t\t});\n\t}\n\n\tget _todoText() {\n\t\treturn this.input.value;\n\t}\n\n\t_resetInput() {\n\t\tthis.input.value = \"\";\n\t}\n\n\tbindAddTodo(handler) {\n\t\tthis.btn.addEventListener(\"click\", (e) => {\n\t\t\te.preventDefault();\n\n\t\t\tif (this._todoText) {\n\t\t\t\thandler(this._todoText);\n\t\t\t\tthis._resetInput();\n\t\t\t}\n\t\t});\n\t}\n\n\tbindDeleteTodo(handler) {\n\t\tthis.todoList.addEventListener(\"click\", function (e) {\n\t\t\te.preventDefault();\n\t\t\tif (e.target.classList.contains(\"delete\")) {\n\t\t\t\tconst id = e.target.getAttribute(\"data-id\");\n\t\t\t\thandler(+id);\n\t\t\t}\n\t\t});\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ViewTodos());\n\n\n//# sourceURL=webpack://todo-list/./src/js/views/viewTodos.js?");

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