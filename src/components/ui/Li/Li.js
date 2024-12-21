import "./li.scss";

export default class Li {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const li = document.createElement("li");

    !Array.isArray(this.params.class)
      ? li.classList.add(this.params.class)
      : li.classList.add(...this.params.class);

    return li;
  }
}
