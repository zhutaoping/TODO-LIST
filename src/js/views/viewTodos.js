class ViewTodos {
	btn = document.querySelector(".header__btn-input");
	input = document.querySelector(".header__input-field");
	todoList = document.querySelector(".todoList");

	renderTodos(todos) {
		while (this.todoList.firstChild) {
			this.todoList.removeChild(this.todoList.firstChild);
		}

		todos.forEach((todo) => {
			const markup = `
      	<div class="todoList__item">
					<input type="checkbox" class="checkbox todoList__checkbox" id="complete">
					<label class="todoList__text editalbe" contentEditable="true" for="complete">${todo.text}</label>
     		</div>
			`;

			if (todo.complete) {
				const strike = this.createElement("s");
				strike.textContent = todo.text;
				this.input.append(strike);
			} else {
				// Otherwise just display the text
				this.input.textContent = todo.text;
			}

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
}

export default new ViewTodos();
