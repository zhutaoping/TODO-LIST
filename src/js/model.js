import modelTodo from "./modelTodo";
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
			this.saveAndRender();
		});

		this.listsContainer.addEventListener("change", () => {
			const option =
				this.listsContainer.options[this.listsContainer.selectedIndex];
			this.selectedListId = option.dataset.listId;
			this.saveAndRender();
		});

		this.deleteListBtn.addEventListener("click", () => {
			this.lists = this.lists.filter((list) => list.id !== this.selectedListId);
			this.selectedListId = null;
			this.saveAndRender();
		});
	}

	listsContainer = document.querySelector(".list-container");

	newListForm = document.querySelector(".header__new-list-form");

	newListInput = document.querySelector(".header__new-list-input");

	deleteListBtn = document.querySelector(".btn--delete-list");

	LOCAL_STORAGE_LIST_KEY = "task.lists";

	LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";

	lists = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_LIST_KEY)) || [];

	selectedListId = localStorage.getItem(
		this.LOCAL_STORAGE_SELECTED_LIST_ID_KEY
	);

	static createList(name) {
		return { id: Date.now().toString(), name, tasks: [] };
	}

	render() {
		Model.clearElement(this.listsContainer);
		this.renderLists();

		const selectedList = this.lists.find(
			(list) => list.id === this.selectedListId
		);

		if (this.selectedListId == null) {
			viewTodo.todoList.style.display = "none";
		} else {
			viewTodo.todoList.style.display = "";
		}
		selectedList.tasks = modelTodo.todos;
		console.log(selectedList.tasks);
	}

	renderLists() {
		this.lists.forEach((list) => {
			const listElement = document.createElement("option");
			listElement.dataset.listId = list.id;
			listElement.classList.add("list-name");
			listElement.innerText = list.name;
			if (list.id === this.selectedListId) {
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
}

export default new Model();
