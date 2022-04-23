import { DateTime } from "luxon";

class ViewTodos {
	btn = document.querySelector(".header__btn-input");
	inputText = document.querySelector(".header__input-text");
	todoList = document.querySelector(".todoList");
	todoListItem = document.querySelector(".todoList__item");
	deleteBtn = document.querySelector(".todoList__delete-btn");
	editable = document.querySelector(".editable");
	todoListShbox = document.querySelector(".todoList__shbox");
	inputDueDate = document.querySelector(".header__input-dueDate");

	renderTodos(todos) {
		while (this.todoList.firstChild) {
			this.todoList.removeChild(this.todoList.firstChild);
		}

		todos.forEach((todo) => {
			let dt = "";
			if (todo.dueDate) {
				dt = DateTime.fromISO(todo.dueDate).toFormat("M月d日");
			}

			const markup = `
      	<div class="todoList__item" data-id=${todo.id}>
					<div class="todoList__fhbox">
						<input type="checkbox" class="checkbox todoList__checkbox" id="complete" ${
							todo.complete ? "checked" : ""
						}>
						<label class="todoList__text editable" contenteditable=${
							todo.complete ? "false" : ""
						} >${todo.text}</label>
						<span class="todoList__dueDate">${dt}</span>
					</div>
					<div class="todoList__shbox">
						<img
							src="../src/images/substract.png"
							weight="40"
							height="40"
							alt="Delete button"
							class="btn todoList__delete-btn delete"
						/>
					</div>
     		</div>
			`;
			this.todoList.insertAdjacentHTML("afterbegin", markup);
		});
	}

	get _todoText() {
		return this.inputText.value;
	}

	get _todoDueDate() {
		return this.inputDueDate.value;
	}

	_resetInput() {
		this.inputText.value = "";
	}

	_getTodoId(e) {
		return e.target.closest(".todoList__item").getAttribute("data-id");
	}

	bindAddTodo(handler) {
		this.btn.addEventListener("click", (e) => {
			// e.preventDefault();
			// console.log(this._todoDueDate);
			if (this._todoText) {
				handler(this._todoText, this._todoDueDate);
				this._resetInput();
			}
		});
	}

	bindDeleteTodo(handler) {
		this.todoList.addEventListener("click", (e) => {
			// e.preventDefault();
			if (e.target.classList.contains("delete")) {
				const id = this._getTodoId(e);
				handler(+id);
			}
		});
	}

	bindToggleTodo(handler) {
		this.todoList.addEventListener("click", (e) => {
			// console.log(e.target);
			// clo.setAttribute("disabled", "");
			if (e.target.classList.contains("checkbox")) {
				e.target
					.closest(".todoList__item")
					.querySelector(".editable")
					.setAttribute("contenteditable", '`true ? "" : true`');

				const id = this._getTodoId(e);
				handler(+id);
			}
		});
	}
}

export default new ViewTodos();
