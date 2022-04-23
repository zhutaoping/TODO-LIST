import model from "./model.js";
import viewTodos from "./views/viewTodos.js";

class Controller {
	constructor() {
		this.onTodoListChanged(model.todos);
		viewTodos.bindAddTodo(this.handleAddTodo);
		viewTodos.bindDeleteTodo(this.handleDeleteTodo);
		viewTodos.bindToggleTodo(this.handleToggleTodo);
		model.bindTodoListChanged(this.onTodoListChanged);
	}

	onTodoListChanged = (todos) => {
		viewTodos.renderTodos(todos);
	};

	handleAddTodo = (todoText, todoDueDate) => {
		// console.log(todoText);
		if (!todoText) return;
		model.addTodo(todoText, todoDueDate);
	};

	handleDeleteTodo = (id) => {
		// console.log(id);
		model.deleteTodo(id);
	};

	handleToggleTodo = (id) => {
		model.toggleTodo(id);
	};
}

const app = new Controller();
