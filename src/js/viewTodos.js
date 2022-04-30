import { DateTime } from "luxon";

import subIcon from "../../src/images/substract.png";

class ViewTodos {
	_temporaryTodoText;

	constructor() {
		this.todoList.addEventListener("input", (e) => {
			if (e.target.classList.contains("editable--1")) {
				this._temporaryTodoText = e.target.innerText;
			}
		});
	}

	btn = document.querySelector(".header__btn-input");

	inputText = document.querySelector(".header__text");

	todoList = document.querySelector(".todoList");

	todoListItem = document.querySelector(".todoList__item");

	deleteBtn = document.querySelector(".todoList__delete-btn");

	editable = document.querySelector(".editable");

	todoListShbox = document.querySelector(".todoList__shbox");

	inputDueDate = document.querySelector(".header__dueDate");

	inputDueTime = document.querySelector(".header__dueTime");

	bindAddTodo(handler) {
		this.btn.addEventListener("click", (e) => {
			e.preventDefault();
			if (this.inputText.value) {
				const text = this.inputText.value;
				const dueDate = this.inputDueDate.value;
				const dueTime = this.inputDueTime.value;
				// console.log(dueDate, dueTime);
				handler(text, dueDate, dueTime);

				this.inputText.value = "";
			}
		});
	}

	bindDeleteTodo(handler) {
		this.todoList.addEventListener("click", (e) => {
			if (e.target.classList.contains("delete")) {
				const id = ViewTodos.getTodoId(e);
				const todo = e.target.closest(".todoList__item");
				ViewTodos.deleteTodo(todo);
				handler(+id);
			}
		});
	}

	bindToggleTodo(handler) {
		this.todoList.addEventListener("click", (e) => {
			if (e.target.classList.contains("checkbox")) {
				const id = ViewTodos.getTodoId(e);
				ViewTodos.toggleTodo(e);
				handler(+id);
			}
		});
	}

	bindEditTodoText(handler) {
		this.todoList.addEventListener("focusout", (e) => {
			if (this._temporaryTodoText) {
				const id = ViewTodos.getTodoId(e);
				handler(+id, this._temporaryTodoText);

				this._temporaryTodoText = "";
			}
		});
	}

	initRender(todos) {
		while (this.todoList.firstChild) {
			this.todoList.removeChild(this.todoList.firstChild);
		}
		todos.forEach((todo) => this.addTodo(todo));
	}

	addTodo(todo) {
		console.log(todo);
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
					<div class="todoList__shbox">
						<img
							src="${subIcon}"
							weight="50"
							height="50"
							alt="Delete button"
							class="btn todoList__delete-btn delete"
						/>
					</div>
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

export default new ViewTodos();
