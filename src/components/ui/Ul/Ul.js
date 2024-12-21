import "./ul.scss";

export default class Ul {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const ul = document.createElement("ul");

    !Array.isArray(this.params.class)
      ? ul.classList.add(this.params.class)
      : ul.classList.add(...this.params.class);

    return ul;
  }
}
