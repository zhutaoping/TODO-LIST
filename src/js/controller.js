import "../../css/style.css";

import model from "./model";
import viewTodos from "./viewTodos";

class Controller {
	constructor() {
		console.log(model.todos);
		// viewTodos.initRender(model.getListPage());
		viewTodos.initRender(model.todos);

		viewTodos.bindAddTodo(Controller.handleAddTodo);
		viewTodos.bindDeleteTodo(Controller.handleDeleteTodo);
		viewTodos.bindToggleTodo(Controller.handleToggleTodo);
		viewTodos.bindEditTodoText(Controller.handleEditTodoText);

		model.bindAddTodoRender(Controller.handleAddTodoRender);
		model.bindEditTodoRender(Controller.handleEditTodoRender);
	}

	static handleAddTodoRender(todo) {
		viewTodos.addTodo(todo);
	}

	static handleEditTodoRender(todos) {
		viewTodos.initRender(todos);
	}

	static handleAddTodo(todoText, todoDueDate) {
		if (!todoText) return;
		model.addTodo(todoText, todoDueDate);
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
