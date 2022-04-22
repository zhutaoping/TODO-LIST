import model from "./model.js";
import viewTodos from "./views/viewTodos.js";

class Controller {
	constructor() {
		this.onTodoListChanged(model.todos);
		viewTodos.bindAddTodo(this.handleAddTodo);

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
}

const app = new Controller();
