class ViewTodos {
	btn = document.querySelector(".header__btn-input");
	input = document.querySelector(".header__input-field");
	todoList = document.querySelector(".todoList");
	todoListItem = document.querySelector(".todoList__item");
	deleteBtn = document.querySelector(".todoList__delete-btn");
	editable = document.querySelector(".editable");
	todoListShbox = document.querySelector(".todoList__shbox");

	renderTodos(todos) {
		while (this.todoList.firstChild) {
			this.todoList.removeChild(this.todoList.firstChild);
		}

		todos.forEach((todo) => {
			const markup = `
      	<div class="todoList__item" data-id=${todo.id}>
					<div class="todoList__fhbox">
						<input type="checkbox" class="checkbox todoList__checkbox" id="complete">
						<label class="todoList__text editable" contenteditable="true" >${todo.text}</label>
					</div>
					<div class="todoList__shbox">
						<img
							src="../src/images/substract.png"
							weight="40"
							height="40"
							alt="Delete button"
							class="todoList__delete-btn delete"
						/>
					</div>
     		</div>
			`;
			this.todoList.insertAdjacentHTML("afterbegin", markup);
		});
	}

	get _todoText() {
		return this.input.value;
	}

	_resetInput() {
		this.input.value = "";
	}

	_getTodoId(e) {
		return e.target.closest(".todoList__item").getAttribute("data-id");
	}

	bindAddTodo(handler) {
		this.btn.addEventListener("click", (e) => {
			// e.preventDefault();

			if (this._todoText) {
				handler(this._todoText);
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
		this.todoList.addEventListener("change", (e) => {
			if (e.target.classList.contains("checkbox")) {
				const id = this._getTodoId(e);
				handler(+id);
			}
		});
	}
}

export default new ViewTodos();
