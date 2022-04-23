class ViewTodos {
	btn = document.querySelector(".header__btn-input");
	input = document.querySelector(".header__input-field");
	todoList = document.querySelector(".todoList");
	todoListItem = document.querySelector(".todoList__item");
	deleteBtn = document.querySelector(".todoList__delete-btn");
	todoListShbox = document.querySelector(".todoList__shbox");

	renderTodos(todos) {
		while (this.todoList.firstChild) {
			this.todoList.removeChild(this.todoList.firstChild);
		}

		todos.forEach((todo) => {
			const markup = `
      	<div class="todoList__item">
					<div class="todoList__fhbox">
						<input type="checkbox" class="checkbox todoList__checkbox" id="complete">
						<label class="todoList__text editalbe" contentEditable="true" for="complete">${todo.text}</label>
					</div>
					<div class="todoList__shbox">
						<img
							src="../src/images/substract.png"
							weight="40"
							height="40"
							alt="Delete button"
							data-id=${todo.id}
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

	bindAddTodo(handler) {
		this.btn.addEventListener("click", (e) => {
			e.preventDefault();

			if (this._todoText) {
				handler(this._todoText);
				this._resetInput();
			}
		});
	}

	bindDeleteTodo(handler) {
		this.todoList.addEventListener("click", function (e) {
			e.preventDefault();
			if (e.target.classList.contains("delete")) {
				const id = e.target.getAttribute("data-id");
				handler(+id);
			}
		});
	}
}

export default new ViewTodos();
