import { DateTime } from "luxon";

import subIcon from "../../src/images/substract.png";

class ViewTodo {
	_temporaryTodoText;

	curId;

	curTodo;

	constructor() {
		this.todoList.addEventListener("input", (e) => {
			if (e.target.classList.contains("editable--1")) {
				this._temporaryTodoText = e.target.innerText;
			}
		});

		this.todoList.addEventListener("click", (e) => {
			if (e.target.classList.contains("btn__delete-todo")) {
				this.curId = ViewTodo.getTodoId(e);
				this.curTodo = e.target.closest(".todoList__item");
				this.modal.showModal();
			}
		});

		this.cancelBtn.addEventListener("click", (event) => {
			event.preventDefault();
			this.modal.close();
		});
	}

	headerTitle = document.querySelector(".header__title");

	addBtn = document.querySelector(".header__btn-input");

	inputText = document.querySelector(".header__text");

	todoList = document.querySelector(".todoList");

	todoListItem = document.querySelector(".todoList__item");

	deleteBtn = document.querySelector(".btn__delete-todo");

	editable = document.querySelector(".editable");

	todoListShbox = document.querySelector(".todoList__shbox");

	inputDueDate = document.querySelector(".header__dueDate");

	inputDueTime = document.querySelector(".header__dueTime");

	listsContainer = document.querySelector(".list-container");

	modal = document.querySelector("[data-confirm-modal]");

	confirmBtn = document.querySelector("[data-confirm-btn]");

	cancelBtn = document.querySelector("[data-cancel-btn]");

	bindAddTodo(handler) {
		this.addBtn.addEventListener("click", (e) => {
			e.preventDefault();

			if (this.inputText.value) {
				const text = this.inputText.value;
				const dueDate = this.inputDueDate.value;
				const dueTime = this.inputDueTime.value;
				handler(text, dueDate, dueTime);

				this.inputText.value = "";
			}
		});
	}

	bindDeleteTodo(handler) {
		this.confirmBtn.addEventListener("click", () => {
			ViewTodo.deleteTodo(this.curTodo);
			handler(+this.curId);
		});
	}

	bindToggleTodo(handler) {
		this.todoList.addEventListener("click", (e) => {
			if (e.target.classList.contains("checkbox")) {
				const id = ViewTodo.getTodoId(e);
				ViewTodo.toggleTodo(e);
				handler(+id);
			}
		});
	}

	bindEditTodoText(handler) {
		this.todoList.addEventListener("focusout", (e) => {
			if (this._temporaryTodoText) {
				const id = ViewTodo.getTodoId(e);
				handler(+id, this._temporaryTodoText);

				this._temporaryTodoText = "";
			}
		});
	}

	listsRender(lists) {
		lists.forEach((list) => {
			const listElement = document.createElement("option");
			listElement.dataset.listId = list.id;
			listElement.classList.add("list-name");
			listElement.innerText = list.name;

			this.listsContainer.appendChild(listElement);
		});
	}

	todosRender(todos) {
		while (this.todoList.firstChild) {
			this.todoList.removeChild(this.todoList.firstChild);
		}
		if (!todos) return;
		todos.forEach((todo) => this.addTodo(todo));
	}

	addTodo(todo) {
		let dtDate = "";

		if (todo.dueDate) {
			dtDate = DateTime.fromISO(todo.dueDate).toFormat("M月d日");
		}

		const markup = `
      	<div slide-in-from="top"  class="todoList__item show" data-id=${todo.id}>
					<div class="todoList__fhbox">
						<input type="checkbox" class="checkbox todoList__checkbox" id="complete" ${
							todo.completed ? "checked" : ""
						}>
						<span class="todoList__text editable--1" ${
							todo.completed === true ? "" : "contenteditable"
						} >${todo.text}</span>

						<span class="todoList__dueDate" >${dtDate} ${todo.dueTime}</span>

					</div>
					<button class="btn todoList__shbox btn__delete-todo">
						<img
							src="${subIcon}"
							weight="35"
							height="35"
							alt="Delete button"
							class="btn__delete-todo"
						/>
					</button>
     		</div>
				 `;
		this.todoList.insertAdjacentHTML("afterbegin", markup);
	}

	static toggleTodo(e) {
		e.target.nextElementSibling.toggleAttribute("contenteditable");
		// console.log(e.target.nextElementSibling);
	}

	static deleteTodo(todo) {
		todo.setAttribute("slide-out-to", "top");
		todo.addEventListener("animationend", () => {
			todo.remove();
		});
	}

	static getTodoId(e) {
		return e.target.closest(".todoList__item").getAttribute("data-id");
	}
}

export default new ViewTodo();
