import "../sass/main.scss";

import viewTodo from "./viewTodo";
import model from "./model";

class Controller {
	constructor() {
		console.log(model.lists);
		model.render();

		viewTodo.bindAddTodo(Controller.handleAddTodo);
		viewTodo.bindDeleteTodo(Controller.handleDeleteTodo);
		viewTodo.bindToggleTodo(Controller.handleToggleTodo);
		viewTodo.bindEditTodoText(Controller.handleEditTodoText);

		model.bindListsRender(Controller.onListsRender);
		model.bindAddTodoRender(Controller.onAddTodoRender);
		model.bindTodosRender(Controller.onTodosRender);
	}

	static onListsRender(lists) {
		viewTodo.listsRender(lists);
	}

	static onAddTodoRender(todo) {
		viewTodo.addTodo(todo);
	}

	static onTodosRender(todos) {
		console.log("test");
		viewTodo.todosRender(todos);
	}

	static handleAddTodo(text, dueDate, dueTime) {
		if (!text) return;
		model.addTodo(text, dueDate, dueTime);
	}

	static handleDeleteTodo(id) {
		model.deleteTodo(id);
	}

	static handleToggleTodo(id) {
		model.toggleTodo(id);
	}

	static handleEditTodoText(id, updatedText) {
		model.editTodoText(id, updatedText);
	}
}

// eslint-disable-next-line no-unused-vars
const app = new Controller();
