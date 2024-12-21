import "./Img.scss";

export default class Img {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const img = document.createElement("img");

    img.classList.add(this.params.class);
    img.src = this.params.src;

    return img;
  }
}
