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
			page: 1,
		};
		this.todos.push(todo);
		this.handleAddTodoRender(todo);

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
		// this.handleEditTodoRender(this.todos);
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}

	bindAddTodoRender(callback) {
		this.handleAddTodoRender = callback;
	}

	bindEditTodoRender(callback) {
		this.handleEditTodoRender = callback;
	}

	// getListPage(page = this.page) {
	// 	this.page = page;
	// 	const reverseTodos = this.todos.slice().reverse();
	// 	const start = (page - 1) * this.todosPerPage;
	// 	const end = page * this.todosPerPage;
	// 	const reversePage = reverseTodos.slice(start, end).reverse();
	// 	return reversePage;
	// }
}

export default new Model();
