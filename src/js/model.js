import viewTodos from "./views/viewTodos";

class Model {
	todos = [
		{ id: 1, text: "Run a marathon", complete: false },
		{ id: 2, text: "Plant a garden", complete: false },
	];

	addTodo(todoText) {
		const todo = {
			id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
			text: todoText,
			complete: false,
		};
		this.todos.push(todo);
		this.onTodoListChanged(this.todos);
	}

	deleteTodo(id) {
		this.todos = this.todos.filter((todo) => todo.id !== id);

		this.onTodoListChanged(this.todos);
	}

	toggleTodo() {}

	bindTodoListChanged(callback) {
		this.onTodoListChanged = callback;
	}

	persistTodos() {}

	restoreTodos() {}
}

export default new Model();
