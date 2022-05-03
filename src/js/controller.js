import "../sass/main.scss";

import modelTodo from "./modelTodo";
import viewTodo from "./viewTodo";
import model from "./model";

class Controller {
	constructor() {
		// console.log(modelTodo.todos);
		// viewTodo.initRender(modelTodo.getListPage());
		viewTodo.initRender(modelTodo.todos);
		modelList.render();

		viewTodo.bindAddTodo(Controller.handleAddTodo);
		viewTodo.bindDeleteTodo(Controller.handleDeleteTodo);
		viewTodo.bindToggleTodo(Controller.handleToggleTodo);
		viewTodo.bindEditTodoText(Controller.handleEditTodoText);

		modelTodo.bindAddTodoRender(Controller.handleAddTodoRender);
		modelTodo.bindEditTodoRender(Controller.handleEditTodoRender);
	}

	static handleAddTodoRender(todo) {
		viewTodo.addTodo(todo);
	}

	static handleEditTodoRender(todos) {
		viewTodo.initRender(todos);
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
