class AllTodos {
	_parentElement = document.querySelector(".header__input-box");
	_btn = document.querySelector(".header__btn-input");
	_input = document.querySelector(".header__input-field");
	_todoList = document.querySelector(".todoList");

	render(inputText) {
		const markup = `
      <div class="todoList__item">
        <h5 class="todoList__input">${inputText}</h5>
      </div>
    `;
		this._todoList.insertAdjacentHTML("afterbegin", markup);
	}

	getQuery() {
		const inputText = this._input.value;
		return inputText;
	}

	_init() {
		this._input.value = "";
	}

	addHandlerRender(handler) {
		this._btn.addEventListener("click", handler);
	}
}

export default new AllTodos();
