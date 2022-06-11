import viewTodo from "./viewTodo";

class Model {
	constructor() {
		this.newListForm.addEventListener("submit", (e) => {
			e.preventDefault();
			const listName = this.newListInput.value;
			if (listName == null || listName === "") return;
			const list = Model.createList(listName);
			this.newListInput.value = null;
			this.lists.push(list);
			this.selectedListId = list.id;
			this.saveAndRender();
		});

		this.listsContainer.addEventListener("change", () => {
			const option = this.getSelectedOption();
			this.selectedListId = option.dataset.listId;
			this.saveAndRender();
		});

		this.deleteListBtn.addEventListener("click", () => {
			if (this.lists.length === 0) return;
			this.modal2.showModal();
		});

		this.cancelBtn2.addEventListener("click", (e) => {
			e.preventDefault();
			this.modal2.close();
		});

		this.confirmBtn2.addEventListener("click", () => {
			const option = this.getSelectedOption();
			this.selectedListId = option.dataset.listId;

			this.lists = this.lists.filter((list) => list.id !== this.selectedListId);

			const selectedList =
				this.lists.find((list) => list.id !== this.selectedListId) || "";

			this.selectedListId = selectedList.id;

			this.saveAndRender();
		});
	}

	listsContainer = document.querySelector(".list-container");

	newListForm = document.querySelector(".header__new-list-form");

	newListInput = document.querySelector(".header__new-list-input");

	deleteListBtn = document.querySelector(".btn--delete-list");

	LOCAL_STORAGE_LIST_KEY = "task.lists";

	// LOCAL_STORAGE_TASK_KEY = "task.todos";

	LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";

	lists = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_LIST_KEY)) || [];

	selectedListId = localStorage.getItem(
		this.LOCAL_STORAGE_SELECTED_LIST_ID_KEY
	);

	modal2 = document.querySelector("[data-confirm-modal2]");

	confirmBtn2 = document.querySelector("[data-confirm-btn2]");

	cancelBtn2 = document.querySelector("[data-cancel-btn2]");

	static createList(name) {
		return { id: Date.now().toString(), name, todos: [] };
	}

	addTodo(text, dueDate, dueTime) {
		const option = this.getSelectedOption();
		this.selectedListId = option.dataset.listId;

		this.lists.forEach((list) => {
			if (list.id === this.selectedListId) {
				const todo = {
					id:
						list.todos.length > 0
							? list.todos[list.todos.length - 1].id + 1
							: 1,
					text,
					completed: false,
					dueDate,
					dueTime,
				};
				list.todos.push(todo);
				this.onAddTodoRender(todo);
				this.save();
			}
		});
	}

	editTodoText(id, updatedText) {
		const option = this.getSelectedOption();
		this.selectedListId = option.dataset.listId;

		const selectedList = this.getSelectedList();

		selectedList.todos.forEach((el) => {
			if (el.id === id) {
				el.text = updatedText;
			}
		});
		// this.handleEditTodoRender(this.todos);
		this.save();
	}

	deleteTodo(id) {
		const selectedList = this.getSelectedList();

		selectedList.todos = selectedList.todos.filter((todo) => todo.id !== id);

		this.save();
	}

	toggleTodo(id) {
		const selectedList = this.getSelectedList();

		const found = selectedList.todos.find((todo) => todo.id === id);

		found.completed = !found.completed;
		this.save();
	}

	render() {
		Model.clearElement(this.listsContainer);
		this.listsRender(this.lists);

		const selectedList = this.lists.find(
			(list) => list.id === this.selectedListId
		);
		if (selectedList) {
			viewTodo.todosRender(selectedList.todos);
		} else {
			viewTodo.todosRender(null);
		}
	}

	listsRender() {
		this.lists.forEach((list) => {
			const listElement = document.createElement("option");
			listElement.dataset.listId = list.id;
			listElement.classList.add("list-name");
			listElement.innerText = list.name;
			if (this.selectedListId === list.id) {
				listElement.setAttribute("selected", "selected");
			}
			this.listsContainer.appendChild(listElement);
		});
	}

	static clearElement(element) {
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}
	}

	getSelectedOption() {
		return this.listsContainer.options[this.listsContainer.selectedIndex];
	}

	getSelectedList() {
		return this.lists.find((list) => list.id === this.selectedListId);
	}

	save() {
		localStorage.setItem(
			this.LOCAL_STORAGE_LIST_KEY,
			JSON.stringify(this.lists)
		);

		localStorage.setItem(
			this.LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
			this.selectedListId
		);
	}

	saveAndRender() {
		this.save();
		this.render();
	}

	bindListsRender(callback) {
		this.onListsRender = callback;
	}

	bindAddTodoRender(callback) {
		this.onAddTodoRender = callback;
	}

	bindTodosRender(callback) {
		this.onTodosRender = callback;
	}
}

export default new Model();
