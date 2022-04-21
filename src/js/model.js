export const state = {
	title: "",
	description: "",
	dueDate: "",
	priority: "",
};

export const loadInputTodo = function (inputText) {
	state.title = inputText;

	console.log(state.title);
};

export const deleteTodo = function () {};

const persistTodos = function () {};

export const restoreTodos = function () {};
