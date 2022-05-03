import "../sass/main.scss";

import modelTodo from "./modelTodo";
import viewTodos from "./viewTodos";

class Controller {
	constructor() {
		// console.log(modelTodo.todos);
		// viewTodos.initRender(modelTodo.getListPage());
		viewTodos.initRender(modelTodo.todos);

		viewTodos.bindAddTodo(Controller.handleAddTodo);
		viewTodos.bindDeleteTodo(Controller.handleDeleteTodo);
		viewTodos.bindToggleTodo(Controller.handleToggleTodo);
		viewTodos.bindEditTodoText(Controller.handleEditTodoText);

		modelTodo.bindAddTodoRender(Controller.handleAddTodoRender);
		modelTodo.bindEditTodoRender(Controller.handleEditTodoRender);
	}

	static handleAddTodoRender(todo) {
		viewTodos.addTodo(todo);
	}

	static handleEditTodoRender(todos) {
		viewTodos.initRender(todos);
	}

	static handleAddTodo(text, dueDate, dueTime) {
		if (!text) return;
		modelTodo.addTodo(text, dueDate, dueTime);
	}

	static handleDeleteTodo(id) {
		modelTodo.deleteTodo(id);
	}

	static handleToggleTodo(id) {
		modelTodo.toggleTodo(id);
	}

	static handleEditTodoText(id, updatedText) {
		modelTodo.editTodoText(id, updatedText);
	}
}

// eslint-disable-next-line no-unused-vars
const app = new Controller();
