import model from "./model.js";
import viewTodos from "./views/viewTodos.js";

class Controller {
	constructor() {
		// app start loading
		this.onTodoListChanged(model.todos);

		viewTodos.bindAddTodo(this.handleAddTodo);
		viewTodos.bindDeleteTodo(this.handleDeleteTodo);
		viewTodos.bindToggleTodo(this.handleToggleTodo);
		viewTodos.bindEditTodoText(this.handleEditTodoText);
		// viewTodos.bindEditTodoDueDate(this.handleEditTodoDueDate);

		model.bindTodoListChanged(this.onTodoListChanged);
	}

	onTodoListChanged = (todos) => {
		viewTodos.renderTodos(todos);
	};

	handleAddTodo = (todoText, todoDueDate) => {
		if (!todoText) return;
		model.addTodo(todoText, todoDueDate);
	};

	handleDeleteTodo = (id) => {
		model.deleteTodo(id);
	};

	handleToggleTodo = (id) => {
		model.toggleTodo(id);
	};

	handleEditTodoText = (id, updatedText) => {
		model.editTodoText(id, updatedText);
	};

	handleEditTodoDueDate = (id, updatedDueDate) => {
		model.editTodoDueDate(id, updatedDueDate);
	};
}

const app = new Controller();
