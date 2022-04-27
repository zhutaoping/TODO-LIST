import viewTodos from "./viewTodos";

class Model {
	todos = [];

	constructor() {
		this.todos = JSON.parse(localStorage.getItem("todos")) || [];
	}

	addTodo(todoText, todoDueDate) {
		const todo = {
			id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
			text: todoText,
			completed: false,
			dueDate: todoDueDate,
		};
		this.todos.push(todo);
		viewTodos.addTodo(todo);
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}

	deleteTodo(id) {
		this.todos = this.todos.filter((todo) => todo.id !== id);
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}

	toggleTodo(id) {
		const found = this.todos.find((todo) => todo.id === id);
		found.completed = !found.completed;
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}

	editTodoText(id, updatedText) {
		this.todos.forEach((el) => {
			if (el.id === id) {
				el.text = updatedText;
			}
		});
		viewTodos.initRender(this.todos);
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}

	// tricky
	// bindTodoListChanged(callback) {
	// 	this.onTodoListChanged = callback;
	// }
}

export default new Model();
