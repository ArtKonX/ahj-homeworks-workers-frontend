import "./paragraph.scss";

export default class Paragraph {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const p = document.createElement("p");

    !Array.isArray(this.params.class)
      ? p.classList.add(this.params.class)
      : p.classList.add(...this.params.class);

    if (this.params.text) p.textContent = this.params.text;
    if (this.params.innerHTML) p.innerHTML = this.params.innerHTML;

    return p;
  }
}
