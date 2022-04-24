/* eslint-disable class-methods-use-this */
import model from "./model";
import viewTodos from "./viewTodos";

class Controller {
	constructor() {
		// app start loading
		Controller.onTodoListChanged(model.todos);
		model.bindTodoListChanged(Controller.onTodoListChanged);

		viewTodos.bindAddTodo(Controller.handleAddTodo);
		viewTodos.bindDeleteTodo(Controller.handleDeleteTodo);
		viewTodos.bindToggleTodo(Controller.handleToggleTodo);
		viewTodos.bindEditTodoText(Controller.handleEditTodoText);
		// viewTodos.bindEditTodoDueDate(this.handleEditTodoDueDate);
	}

	static onTodoListChanged(todos) {
		viewTodos.renderTodos(todos);
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

	static handleEditTodoDueDate(id, updatedDueDate) {
		model.editTodoDueDate(id, updatedDueDate);
	}
}

// eslint-disable-next-line no-unused-vars
const app = new Controller();
