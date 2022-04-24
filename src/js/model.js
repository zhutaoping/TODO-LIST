// import viewTodos from "./viewTodos";

class Model {
	todos = [];

	constructor() {
		this.todos = JSON.parse(localStorage.getItem("todos")) || [];
	}

	#commit(todos) {
		this.onTodoListChanged(todos);
		localStorage.setItem("todos", JSON.stringify(todos));
	}

	addTodo(todoText, todoDueDate) {
		const todo = {
			id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
			text: todoText,
			complete: false,
			dueDate: todoDueDate,
		};
		this.todos.push(todo);

		this.#commit(this.todos);
	}

	deleteTodo(id) {
		this.todos = this.todos.filter((todo) => todo.id !== id);
		this.#commit(this.todos);
	}

	toggleTodo(id) {
		const found = this.todos.find((todo) => todo.id === id);
		found.complete = !found.complete;
		this.#commit(this.todos);
	}

	editTodoText(id, updatedText) {
		this.todos.forEach((el) => {
			if (el.id === id) {
				el.text = updatedText;
			}
		});
		this.#commit(this.todos);
	}

	editTodoDueDate(id, updatedDueDate) {
		this.todos.forEach((el) => {
			if (el.id === id) {
				el.dueDate = updatedDueDate;
			}
		});
		this.#commit(this.todos);
	}

	// tricky
	bindTodoListChanged(callback) {
		// Model.onTodoListChanged = Controller.onTodoListChanged
		this.onTodoListChanged = callback;
	}
}

export default new Model();
