import model from "./model.js";
import viewTodos from "./views/viewTodos.js";

class Controller {
	constructor() {
		this.onTodoListChanged(model.todos);
		viewTodos.bindAddTodo(this.handleAddTodo);
		viewTodos.bindDeleteTodo(this.handleDeleteTodo);

		model.bindTodoListChanged(this.onTodoListChanged);
	}

	onTodoListChanged = (todos) => {
		viewTodos.renderTodos(todos);
	};

	handleAddTodo = (todoText) => {
		// console.log(todoText);
		if (!todoText) return;
		model.addTodo(todoText);
	};

	handleDeleteTodo = (id) => {
		// console.log(id);
		model.deleteTodo(id);
	};
}

const app = new Controller();
