import viewTodos from "./views/viewTodos";
class Model {
	todos = [
		// { id: 1, text: "Run a marathon", complete: false },
		// { id: 2, text: "Plant a garden", complete: false },
	];

	addTodo(todoText, todoDueDate) {
		const todo = {
			id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
			text: todoText,
			complete: false,
			dueDate: todoDueDate,
		};
		this.todos.push(todo);
		this.onTodoListChanged(this.todos);
	}

	deleteTodo(id) {
		this.todos = this.todos.filter((todo) => todo.id !== id);
		viewTodos.renderTodos(this.todos);
	}

	toggleTodo(id) {
		// this.todos = this.todos.map((todo) =>
		// 	todo.id === id
		// 		? { id: todo.id, text: todo.text, complete: !todo.complete }
		// 		: todo
		// );
		const found = this.todos.find((todo) => todo.id === id);
		found.complete = !found.complete;
		viewTodos.renderTodos(this.todos);

		console.log(this.todos);
	}

	bindTodoListChanged(callback) {
		this.onTodoListChanged = callback;
	}

	persistTodos() {}

	restoreTodos() {}
}

export default new Model();
