import * as model from "./model.js";
import allTodos from "./views/allTodos.js";

const controlAddTodo = function () {
	const inputText = allTodos.getQuery();
	if (!inputText) return;
	// console.log(inputText);
	model.loadInputTodo(inputText);
	allTodos._init();
	allTodos.render(inputText);
};

(function init() {
	// paginationView.addHandlerClick(controlPagination);
	allTodos.addHandlerRender(controlAddTodo);
})();
